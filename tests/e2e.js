/* End-to-end browser tests (Chromium via Playwright). Run: node tests/e2e.js
 * Not run in CI (needs a browser); results are reported in TEST-REPORT.md. */
const { chromium } = require('playwright');
const { serve } = require('./shot.js');
const assert = require('assert');

const ROUTES = ['/', '/learn', '/learn/A1', '/learn/A1/a1-01', '/learn/A2/a2-01', '/learn/B1/b1-01', '/learn/B2/b2-02', '/learn/A2/skills',
  '/learn/A1/skill/a1-r1', '/learn/A2/skill/a2-l1', '/learn/B1/skill/b1-w1', '/lab', '/lab/hacer', '/lab/levantarse', '/lab/tener/drill',
  '/vocab', '/vocab/A2', '/vocab/theme/a2-banco', '/vocab/theme/a1-casa/cards', '/vocab/theme/a1-casa/quiz', '/vocab/review',
  '/dele', '/dele/part/lectura', '/dele/part/oral', '/dele/sim/A', '/dele/sim/A/lectura', '/dele/sim/B/auditiva', '/dele/sim/A/escrita', '/dele/sim/B/oral',
  '/ccse', '/ccse/topic/t1-const', '/ccse/topic/t3-territorio', '/ccse/sim', '/ccse/sim/7', '/ccse/analysis',
  '/exams', '/exams/level/A1', '/exams/level/B2/50', '/exams/mixed', '/exams/mixed/3', '/exams/ccse', '/exams/ccse/12',
  '/ciudadania', '/cultura', '/cultura/c1-01', '/cultura/c3-01', '/cultura/c5-03', '/banco', '/banco/leccion/c1-02', '/banco/dificiles', '/banco/oficial', '/cobertura', '/verbos', '/verbos/v/tener', '/verbos/v/levantarse/imperativo', '/verbos/v/hacer/todo', '/verbos/v/empadronarse/subjPresente', '/verbos/tiempos', '/verbos/tiempo/subjFuturo', '/verbos/practica', '/verbos/practica/opciones', '/verbos/practica/escribir?t=indefinido', '/verbos/practica/completar', '/verbos/practica/irregulares', '/verbos/practica/examen', '/verbos/practica/errores', '/verbos/comparar', '/verbos/comparar/indicativo-subjuntivo', '/verbos/v/tener/practicar',
  '/speak', '/speak/c/medico', '/speak/p/r-rr', '/adventures', '/adventures/cafe', '/adventures/tienda', '/mistakes', '/mistakes/review', '/progress', '/does-not-exist'];

const results = [];
function ok(name, detail) { results.push(['PASS', name, detail || '']); console.log('PASS', name, detail || ''); }
function bad(name, detail) { results.push(['FAIL', name, detail || '']); console.log('FAIL', name, detail || ''); }

(async () => {
  const srv = await serve(), port = srv.address().port, base = `http://localhost:${port}/index.html`;
  const browser = await chromium.launch();

  async function page(opts) {
    const ctx = await browser.newContext(opts || { viewport: { width: 1440, height: 900 } });
    const p = await ctx.newPage(); p.errors = [];
    p.on('pageerror', e => p.errors.push(e.message)); p.on('console', m => { if (m.type() === 'error' && !/favicon|404/.test(m.text())) p.errors.push(m.text()); });
    return { ctx, p };
  }

  // 1. every route renders without errors or blank screen
  {
    const { ctx, p } = await page();
    let failed = 0;
    for (const r of ROUTES) {
      await p.goto(base + '#' + r); await p.waitForTimeout(250);
      const len = await p.evaluate(() => document.getElementById('main').innerText.trim().length);
      if (p.errors.length || len < (r === '/does-not-exist' ? 20 : 80)) { failed++; bad('route ' + r, (p.errors.join(' | ') || 'blank (' + len + ' chars)')); p.errors = []; }
    }
    if (!failed) ok('all ' + ROUTES.length + ' routes render, no JS errors, no blank screens');
    // refresh on nested route
    await p.goto(base + '#/learn/A2/a2-01'); await p.reload(); await p.waitForTimeout(300);
    const title = await p.evaluate(() => document.querySelector('h1') && document.querySelector('h1').innerText);
    (/Pretérito perfecto/.test(title) ? ok : bad)('refresh on nested route keeps the page', title);
    await ctx.close();
  }

  // 2. take an exam end to end, check scoring, history, mistakes, persistence across reload
  {
    const { ctx, p } = await page();
    await p.goto(base + '#/exams/level/A1/1'); await p.waitForTimeout(300);
    // answer every question with the first option / some text
    for (let i = 0; i < 24; i++) {
      if (await p.$('#qType')) await p.fill('#qType', 'xx'); else await p.click('[data-opt="0"]');
      const next = await p.$('[data-act="next"]'); if (next) await next.click();
    }
    p.once('dialog', d => d.accept());
    await p.click('[data-act="submit"]'); await p.waitForTimeout(400);
    const rep = await p.evaluate(() => document.getElementById('exQ').innerText);
    (/النتيجة/.test(rep) && /24/.test(rep) ? ok : bad)('exam submits and shows report');
    const st = await p.evaluate(() => ({ exams: ECM.store.state.exams.length, mistakes: Object.keys(ECM.store.state.mistakes).length }));
    (st.exams === 1 ? ok : bad)('exam saved to history', JSON.stringify(st));
    (st.mistakes > 0 ? ok : bad)('wrong answers saved to mistake notebook', st.mistakes + ' mistakes');
    await p.waitForTimeout(600);
    await p.reload(); await p.waitForTimeout(400);
    const st2 = await p.evaluate(() => ({ exams: ECM.store.state.exams.length, mistakes: Object.keys(ECM.store.state.mistakes).length, saved: ECM.store.state.savedAt }));
    (st2.exams === 1 && st2.mistakes === st.mistakes ? ok : bad)('progress persists after reload', JSON.stringify(st2));
    // close & reopen in a new tab of the same context (same storage)
    const p2 = await ctx.newPage(); await p2.goto(base + '#/progress'); await p2.waitForTimeout(400);
    const txt = await p2.evaluate(() => document.getElementById('main').innerText);
    (/امتحان/.test(txt) && (await p2.evaluate(() => ECM.store.state.exams.length)) === 1 ? ok : bad)('progress visible after closing and reopening');
    // mistakes notebook shows real mistakes, nothing pre-populated
    await p2.goto(base + '#/mistakes'); await p2.waitForTimeout(300);
    const mtxt = await p2.evaluate(() => document.getElementById('main').innerText);
    (/إجابتك/.test(mtxt) ? ok : bad)('mistake notebook lists the user\'s answers');
    // backup export → import into a fresh profile
    const backup = await p2.evaluate(() => ECM.store.exportJSON());
    const fresh = await page();
    await fresh.p.goto(base + '#/'); await fresh.p.waitForTimeout(300);
    const before = await fresh.p.evaluate(() => ECM.store.state.exams.length);
    const imp = await fresh.p.evaluate(t => ECM.store.importJSON(t), backup);
    const after = await fresh.p.evaluate(() => ({ e: ECM.store.state.exams.length, m: Object.keys(ECM.store.state.mistakes).length }));
    (before === 0 && imp.ok && after.e === 1 && after.m === st.mistakes ? ok : bad)('backup export + import restores progress', JSON.stringify(after));
    await fresh.p.reload(); await fresh.p.waitForTimeout(300);
    ((await fresh.p.evaluate(() => ECM.store.state.exams.length)) === 1 ? ok : bad)('imported backup survives reload');
    // legacy (old app) backup import
    const leg = await fresh.p.evaluate(() => ECM.store.importJSON(JSON.stringify({ progress: { done: ['a1-1', 'a1-2'], results: [], errors: [{ q: 'x' }], xp: 120, notes: [] } })));
    (leg.ok ? ok : bad)('old-version backup (jihad_v3 format) is accepted', leg.msg);
    // invalid file
    const inv = await fresh.p.evaluate(() => ECM.store.importJSON('not json'));
    (!inv.ok ? ok : bad)('invalid backup is rejected safely');
    await fresh.ctx.close(); await ctx.close();
  }

  // 3. lesson practice: no green before answering, feedback after, lesson marked done
  {
    const { ctx, p } = await page();
    await p.goto(base + '#/learn/A1/a1-04'); await p.waitForTimeout(300);
    await p.click('#startPr'); await p.waitForTimeout(200);
    const preGreen = await p.evaluate(() => document.querySelectorAll('.opt.correct').length);
    (preGreen === 0 ? ok : bad)('no answer highlighted before the learner answers');
    let n = 0;
    while (n++ < 15) {
      const typed = await p.$('#qType');
      if (typed) { await p.fill('#qType', 'está'); await p.click('[data-act="check"]'); }
      else { const o = await p.$('[data-opt="1"]'); if (!o) break; await o.click(); }
      await p.waitForTimeout(80);
      const nx = await p.$('[data-act="next"]'); if (!nx) break; await nx.click(); await p.waitForTimeout(80);
    }
    const done = await p.evaluate(() => !!(ECM.store.state.lessons['a1-04'] && ECM.store.state.lessons['a1-04'].done));
    (done ? ok : bad)('finishing practice marks the lesson complete');
    await ctx.close();
  }

  // 4. CCSE simulation has 25 questions, 45-minute timer
  {
    const { ctx, p } = await page();
    await p.goto(base + '#/ccse/sim/3'); await p.waitForTimeout(300);
    const info = await p.evaluate(() => ({ n: document.querySelectorAll('.qnav button').length, t: document.getElementById('qTimer').innerText }));
    (info.n === 25 && /^4[45]:/.test(info.t) ? ok : bad)('CCSE simulation: 25 questions, 45:00 timer', JSON.stringify(info));
    await ctx.close();
  }

  // 5. old-browser simulation: remove modern APIs before the app loads
  {
    const { ctx, p } = await page();
    await p.addInitScript(() => {
      delete window.Promise; delete window.fetch; delete Array.prototype.includes; delete Array.prototype.find; delete Array.prototype.findIndex;
      delete Object.assign; delete Object.values; delete Object.entries; delete String.prototype.includes; delete String.prototype.startsWith;
      delete NodeList.prototype.forEach; delete window.SpeechRecognition; delete window.webkitSpeechRecognition;
      try { Object.defineProperty(window, 'speechSynthesis', { value: undefined }); } catch (e) {}
    });
    let failed = 0;
    for (const r of ['/', '/learn/A2/a2-03', '/exams/level/A2/4', '/ccse/topic/t2-derechos', '/speak', '/speak/c/rutina', '/adventures/metro', '/progress', '/vocab/theme/a1-comida/cards', '/dele/sim/A/oral', '/lab/ir']) {
      await p.goto(base + '#' + r); await p.waitForTimeout(250);
      const len = await p.evaluate(() => document.getElementById('main').innerText.trim().length);
      if (p.errors.length || len < 80) { failed++; bad('legacy-API simulation ' + r, p.errors.join(' | ') || 'blank'); p.errors = []; }
    }
    if (!failed) ok('app works with Promise/fetch/includes/find/Object.assign/NodeList.forEach/speech APIs removed');
    await p.goto(base + '#/speak'); await p.waitForTimeout(200);
    const mic = JSON.parse(await p.evaluate(() => JSON.stringify({ btn: !!document.querySelector('.rec-btn'), notice: /لا يدعم/.test(document.getElementById('main').innerText), ta: !!document.querySelector('textarea') })));
    (!mic.btn && mic.notice && mic.ta ? ok : bad)('without speech recognition: no dead mic button, explanation + typing box shown', JSON.stringify(mic));
    await p.fill('#free textarea', 'Yo es de Siria y tengo 58 años.');
    await p.click('#free [data-r="check"]'); await p.waitForTimeout(150);
    const fb = await p.evaluate(() => document.querySelector('#free [data-r="out"]').innerText);
    (/yo soy/.test(fb) ? ok : bad)('typed answer is analysed: "yo es" → "yo soy" with Arabic explanation');
    await ctx.close();
  }

  // 6. storage blocked (private mode) → app still runs and warns
  {
    const { ctx, p } = await page();
    await p.addInitScript(() => { Object.defineProperty(window, 'localStorage', { get: function () { throw new Error('SecurityError'); } }); });
    await p.goto(base + '#/'); await p.waitForTimeout(400);
    const s = await p.evaluate(() => ({ cls: document.getElementById('saveInd').className, len: document.getElementById('main').innerText.length }));
    (/bad/.test(s.cls) && s.len > 200 && !p.errors.length ? ok : bad)('storage unavailable: app runs and shows "cannot save" warning', JSON.stringify(s) + ' ' + p.errors.join('|'));
    await ctx.close();
  }

  // 7. corrupted main save → recovers from last good snapshot
  {
    const { ctx, p } = await page();
    await p.goto(base + '#/'); await p.waitForTimeout(300);
    await p.evaluate(() => { ECM.store.state.profile.level = 'B1'; ECM.store.flush(); });
    await p.reload(); await p.waitForTimeout(300);            // snapshot of good state taken on load
    await p.evaluate(() => localStorage.setItem('ecm.v1', '{corrupted'));
    await p.reload(); await p.waitForTimeout(300);
    const lv = await p.evaluate(() => ECM.store.state.profile.level);
    (lv === 'B1' ? ok : bad)('corrupted save is recovered from the automatic snapshot', lv);
    await ctx.close();
  }

  // 9. verb laboratory: Arabic search, favourite persists, wrong typed answer goes to adaptive review, old #/lab link redirects
  {
    const { ctx, p } = await page();
    await p.goto(base + '#/verbos'); await p.waitForTimeout(300);
    await p.fill('#vq', 'يأكل'); await p.waitForTimeout(400);
    const found = await p.evaluate(() => document.getElementById('vres').innerText);
    (/comer/.test(found) ? ok : bad)('verb search in Arabic finds the Spanish verb', found.slice(0, 60).replace(/\n/g, ' '));
    await p.goto(base + '#/verbos/v/conocer'); await p.waitForTimeout(250);
    await p.click('#vfav'); await p.waitForTimeout(200);
    await p.reload(); await p.waitForTimeout(400);
    const fav = await p.evaluate(() => JSON.parse(localStorage.getItem('ecm.v1')).verbs.fav);
    (fav.indexOf('conocer') >= 0 ? ok : bad)('verb favourite saved and survives reload', JSON.stringify(fav));
    const t = await p.evaluate(() => { const r = document.querySelectorAll('.vt td.f'); return r.length + ':' + r[0].innerText; });
    (/^6:conozco/.test(t) ? ok : bad)('verb page shows verified table (conozco)', t);
    await p.goto(base + '#/verbos/practica/escribir?t=indefinido&lvl=A1'); await p.waitForTimeout(300);
    await p.fill('#qType', 'zzz'); await p.click('[data-act="check"]'); await p.waitForTimeout(200);
    const stats = await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('ecm.v1')).verbs.stats; return Object.keys(s).length; });
    (stats > 0 ? ok : bad)('wrong verb answer recorded for adaptive review', 'keys ' + stats);
    await p.goto(base + '#/verbos/practica/errores'); await p.waitForTimeout(300);
    const has = await p.evaluate(() => !!document.getElementById('qType'));
    (has ? ok : bad)('adaptive mode replays the mistaken form');
    await p.goto(base + '#/lab/tener'); await p.waitForTimeout(300);
    (/#\/verbos\/v\/tener/.test(p.url()) ? ok : bad)('old #/lab link redirects to the verb laboratory', p.url().split('#')[1]);
    if (p.errors.length) bad('verb lab JS errors', p.errors.join(' | '));
    await ctx.close();
  }

  // 8. mobile layout (iPhone-sized) – no horizontal scroll
  {
    const { ctx, p } = await page({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
    let overflow = [];
    for (const r of ['/', '/learn/A2/a2-01', '/exams/level/A2/1', '/ccse', '/adventures/cafe', '/progress', '/verbos', '/verbos/v/tener', '/verbos/v/levantarse/todo', '/verbos/tiempo/presente', '/verbos/comparar/ser-estar']) {
      await p.goto(base + '#' + r); await p.waitForTimeout(250);
      const w = await p.evaluate(() => document.documentElement.scrollWidth);
      if (w > 392) overflow.push(r + ':' + w);
    }
    (!overflow.length ? ok : bad)('mobile 390px: no horizontal scrolling', overflow.join(' '));
    await ctx.close();
  }

  await browser.close(); srv.close();
  const f = results.filter(r => r[0] === 'FAIL').length;
  console.log('\n' + (results.length - f) + ' passed, ' + f + ' failed');
  require('fs').writeFileSync(require('path').join(__dirname, 'e2e-results.json'), JSON.stringify(results, null, 1));
  process.exit(f ? 1 : 0);
})();
