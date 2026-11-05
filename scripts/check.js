/* Quality checks run locally and in GitHub Actions (npm run check).
 *  1. ES5-only syntax for every script (old Safari compatibility)
 *  2. No unsupported modern APIs / regex features without polyfills
 *  3. CSS free of features old Safari ignores in harmful ways
 *  4. Every script referenced by index.html exists; every photo exists
 *  5. Conjugation engine unit tests
 *  6. Content validation: lessons, questions, 300 distinct exam models, CCSE, DELE
 */
var fs = require('fs'), path = require('path'), acorn = require('acorn'), cp = require('child_process');
var root = path.join(__dirname, '..', 'site'), fails = [], notes = [];
function fail(m) { fails.push(m); }

var html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
var scripts = []; html.replace(/<script src="([^"?]+)/g, function (m, s) { scripts.push(s); });
var inline = []; html.replace(/<script>([\s\S]*?)<\/script>/g, function (m, s) { inline.push(s); });

// 1 + 2
var BANNED = [
  [/=>/, 'arrow function'], [/`/, 'template literal'], [/\blet\s/, 'let'], [/\bconst\s/, 'const'], [/\bclass\s+[A-Z]/, 'class'],
  [/\.includes\(/, 'Array/String.includes'], [/\.startsWith\(/, 'startsWith'], [/\.endsWith\(/, 'endsWith'], [/Array\.from/, 'Array.from'],
  [/\bfetch\(/, 'fetch'], [/new Promise|Promise\./, 'Promise'], [/\.padStart|\.padEnd/, 'padStart/End'], [/\(\?<[=!]/, 'regex lookbehind'],
  [/\.flat\(|\.flatMap\(/, 'flat'], [/Object\.(values|entries)\(/, 'Object.values/entries'], [/\?\.|\?\?/, 'optional chaining / nullish'],
  [/\.forEach\(/, 'NodeList.forEach risk (use U.each)'], [/\.closest\(/, null]
];
scripts.forEach(function (s) {
  var f = path.join(root, s);
  if (!fs.existsSync(f)) { fail('missing script ' + s); return; }
  var src = fs.readFileSync(f, 'utf8');
  try { acorn.parse(src, { ecmaVersion: 5, sourceType: 'script' }); } catch (e) { fail(s + ': not ES5 → ' + e.message); }
  // strip strings for API scan (rough) – scan code lines only
  var code = src.replace(/'(?:[^'\\\n]|\\.)*'/g, "''").replace(/"(?:[^"\\\n]|\\.)*"/g, '""').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
  BANNED.forEach(function (b) { if (b[1] && b[0].test(code)) fail(s + ': uses ' + b[1]); });
});
inline.forEach(function (src, i) { try { acorn.parse(src, { ecmaVersion: 5 }); } catch (e) { fail('inline script ' + i + ': ' + e.message); } });

// 3 CSS
var css = fs.readFileSync(path.join(root, 'css/app.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
[[/\bgap\s*:/, 'flex/grid gap (Safari < 14.1 ignores flex gap)'], [/\binset\s*:/, 'inset'], [/aspect-ratio/, 'aspect-ratio'], [/clamp\(/, 'clamp()'], [/var\(--/, 'CSS variables'], [/:is\(|:where\(/, ':is/:where']].forEach(function (b) { if (b[0].test(css)) fail('css uses ' + b[1]); });

// 4 assets
var load = require('./load.js'), E = load();
Object.keys(E.photos).forEach(function (k) {
  var p = E.photos[k];
  if (p.file && !fs.existsSync(path.join(root, 'img/photos', p.file))) fail('missing photo ' + p.file);
  if (p.file && !fs.existsSync(path.join(root, 'img/photos/thumb', p.file))) fail('missing thumb ' + p.file);
  if (p.fb && !fs.existsSync(path.join(root, 'img/fallback', p.fb + '.jpg'))) fail('missing fallback ' + p.fb);
});
css.replace(/url\(\.\.\/([^)]+)\)/g, function (m, u) { if (!fs.existsSync(path.join(root, u))) fail('css asset missing ' + u); });
['img/icon.svg', 'img/icon-180.png', '404.html'].forEach(function (f) { if (!fs.existsSync(path.join(root, f))) fail('missing ' + f); });

// 5 conjugation tests
['dataset', 'rules'].forEach(function (mode) {
  try { cp.execFileSync('node', [path.join(__dirname, '../tests/conjugate.test.js')], { stdio: 'pipe', env: Object.assign({}, process.env, { MODE: mode }) }); notes.push('conjugation tests passed (' + mode + ')'); }
  catch (e) { fail('conjugation tests failed (' + mode + '):\n' + e.stdout); }
});

// 6 content
function checkQ(q, where) {
  if (!q.stem && !q.passage && !q.audio && !q.audioLines) fail(where + ': empty question');
  if (q.type === 'mc') {
    if (!q.opts || q.opts.length < 2) fail(where + ': too few options');
    else if (!(q.answer >= 0 && q.answer < q.opts.length)) fail(where + ': answer out of range');
    else if (new Set(q.opts).size !== q.opts.length) fail(where + ': duplicate options ' + JSON.stringify(q.opts));
  }
  if (q.type === 'type' && !q.answer) fail(where + ': typed question without answer');
  if (!q.why) fail(where + ': no explanation');
}
var G = E.GRAMMAR, ids = {};
G.forEach(function (l) {
  if (ids[l.id]) fail('duplicate lesson id ' + l.id); ids[l.id] = 1;
  ['meaning', 'why', 'sum'].forEach(function (k) { if (!l[k]) fail(l.id + ': missing ' + k); });
  if (!l.when || l.when.length < 3) fail(l.id + ': needs ≥3 uses');
  if (!l.steps || l.steps.length < 3) fail(l.id + ': needs ≥3 steps');
  if (!l.ex || l.ex.length < 15) fail(l.id + ': needs ≥15 examples (has ' + (l.ex || []).length + ')');
  l.ex.forEach(function (x) { if (x.split('|').length !== 2) fail(l.id + ': bad example ' + x); });
  if (!l.err || l.err.length < 3) fail(l.id + ': needs ≥3 common mistakes');
  if (!l.cmp) fail(l.id + ': needs comparison');
  if (!l.pr || l.pr.length < 6) fail(l.id + ': needs ≥6 practice items');
  (l.tables || []).forEach(function (t) { if (t.v) { try { E.conj.conjugate(t.v, t.t); } catch (e) { fail(l.id + ': table ' + t.v + ' ' + t.t); } } });
  E.course.practiceQuestions(l).forEach(function (q) { checkQ(q, l.id); });
});
var lv = {}; G.forEach(function (l) { lv[l.lv] = (lv[l.lv] || 0) + 1; });
G.forEach(function (l) {
  var x = (E.GRAMMAR_EXTRA || {})[l.id];
  if (!x) { fail(l.id + ': missing Spanish definition / final assessment (grammar-extra.js)'); return; }
  if (!x.def || !x.reg || !x.terms || x.terms.length < 3) fail(l.id + ': needs def, reg and ≥3 terms');
  if (!x.fin || x.fin.length < 5) fail(l.id + ': final assessment needs 5 questions');
  (x.fin || []).forEach(function (q, i) { checkQ({ type: 'mc', stem: q[0], opts: q[1], answer: q[2], why: q[3] }, l.id + ' final q' + i); });
});
notes.push('grammar lessons: ' + JSON.stringify(lv) + ' total ' + G.length);
E.SKILLS.forEach(function (s) {
  if (s.kind !== 'writing') (s.q || []).forEach(function (q, i) { if (q[1] !== 'tf' && !(q[2] >= 0 && q[2] < q[1].length)) fail(s.id + ' q' + i + ' answer'); });
  else if (!s.model || !s.task) fail(s.id + ': writing needs task/model');
});
notes.push('skills units: ' + E.SKILLS.length);
var vocabWords = 0; E.VOCAB.forEach(function (t) { t.w.forEach(function (w) { vocabWords++; if (w.split('|').length < 2) fail('vocab ' + t.id + ': ' + w); }); });
notes.push('vocabulary: ' + E.VOCAB.length + ' themes, ' + vocabWords + ' words');
// exam models
var X = E.exams, total = 0;
['A1', 'A2', 'B1', 'B2', 'mixed'].forEach(function (k) {
  var sets = {};
  for (var n = 1; n <= 50; n++) {
    var m = k === 'mixed' ? X.mixedModel(n) : X.levelModel(k, n);
    if (m.length !== (k === 'mixed' ? 22 : 24)) fail(k + ' model ' + n + ': ' + m.length + ' questions');
    m.forEach(function (q, i) { checkQ(q, k + '#' + n + '.' + i); });
    var key = m.map(function (q) { return q.id; }).sort().join(',');
    if (sets[key]) fail(k + ': model ' + n + ' duplicates model ' + sets[key]); sets[key] = n;
    total++;
  }
});
var cs = {};
for (var n = 1; n <= 50; n++) {
  var m = E.ccseSim(n);
  if (m.length !== E.CCSE.exam.questions) fail('ccse model ' + n + ' length');
  var per = {}; m.forEach(function (q) { per[q.tarea] = (per[q.tarea] || 0) + 1; checkQ(q, 'ccse#' + n); });
  E.CCSE.tareas.forEach(function (T) { if (per[T.n] !== T.q) fail('ccse model ' + n + ' tarea ' + T.n + ' count'); });
  var key = m.map(function (q) { return q.id; }).sort().join(',');
  if (cs[key]) fail('ccse model duplicate ' + n); cs[key] = n; total++;
}
notes.push('exam models verified: ' + total + ' (CCSE bank ' + E.CCSE.all.length + ' original (non-official) questions incl. ' + E.CCSE.bank.length + ' legacy)');
// culture academy
var CL = E.CULTURE || [], cids = {};
CL.forEach(function (l) {
  if (cids[l.id]) fail('culture duplicate ' + l.id); cids[l.id] = 1;
  if (!l.sections || l.sections.length < 2) fail(l.id + ': needs ≥2 sections');
  if (!l.q || l.q.length < 3) fail(l.id + ': needs ≥3 practice questions');
  (l.memorize || []).length || fail(l.id + ': no facts to memorize');
});
var areas = {}; CL.forEach(function (l) { areas[l.area] = (areas[l.area] || 0) + 1; });
[1, 2, 3, 4, 5].forEach(function (a) { if (!areas[a]) fail('culture area ' + a + ' has no lessons'); });
var qids = {}; E.CCSE.all.forEach(function (q, i) { if (qids[q.id]) fail('CCSE dup id ' + q.id); qids[q.id] = 1; checkQ(q, 'CCSE.all ' + q.id); if (q.lesson && !cids[q.lesson]) fail(q.id + ' → unknown lesson ' + q.lesson); });
notes.push('culture lessons: ' + CL.length + ' ' + JSON.stringify(areas));
// verb laboratory: dataset reproduction, catalogue and examples
(function () {
  var V = E.verbs, B = require('./build-verbs.js'), b = B.build(), r = B.verify(b.out, b.src);
  r.problems.forEach(function (p) { fail('verbs: ' + p); });
  var built = JSON.stringify(b.out), shipped = JSON.stringify(E.VERBDB.v);
  if (built !== shipped) fail('verbs: site/js/data/verbs-db.js is out of date — run node scripts/build-verbs.js');
  var cat = V.catalog(), seen = {}, LV = { A1: 1, A2: 1, B1: 1, B2: 1 }, n = 0;
  E.VERBMETA.forEach(function (line) {
    var f = line.split('|'); if (f.length !== 6) { fail('verb meta fields: ' + line); return; }
    var lex = V.lexOf(f[0]);
    if (seen[lex]) fail('verb meta duplicate: ' + f[0]); seen[lex] = 1;
    if (!E.VERBDB.v[lex]) fail('verb meta without conjugation data: ' + f[0]);
    if (!LV[f[2]]) fail('verb level ' + f[0]);
    f[3].split(' ').forEach(function (c) { if (!V.CATS[c]) fail('verb category ' + c + ' (' + f[0] + ')'); });
    if ((f[4].match(/\[\[/g) || []).length !== 1) fail('verb example needs exactly one [[form]]: ' + f[0]);
  });
  cat.list.forEach(function (it) {
    var a = V.analyze(it.inf, it.form, it.annot);
    if (!a.ok) fail('verb example ' + it.inf + ' [[' + it.form + ']]: ' + a.why); else n++;
  });
  Object.keys(E.VERBDB.v).forEach(function (lex) { if (!seen[lex]) fail('verb without catalogue entry: ' + lex); });
  // spot checks against hand-verified forms (independent of the dataset)
  var spot = [['tener', 'indefinido', 0, 'tuve'], ['ir', 'subjImperfectoSe', 3, 'fuésemos'], ['hacer', 'futuroPerfecto', 5, 'habrán hecho'], ['decir', 'subjFuturo', 2, 'dijere'],
    ['levantarse', 'imperativo', 3, 'levantémonos'], ['vestirse', 'imperativo', 4, 'vestíos'], ['irse', 'imperativo', 4, 'idos'], ['oír', 'imperativo', 4, 'oíd'],
    ['caber', 'presente', 0, 'quepo'], ['reír', 'indefinido', 2, 'rio'], ['huir', 'presente', 4, 'huis'], ['guiar', 'indefinido', 0, 'guie'], ['ser', 'imperativo', 1, 'sé'],
    ['estar', 'imperativo', 1, 'está'], ['poner', 'condicionalPerfecto', 3, 'habríamos puesto'], ['abrir', 'subjPluscuamperfectoSe', 1, 'hubieses abierto'],
    ['contener', 'imperativo', 1, 'contén'], ['satisfacer', 'indefinido', 2, 'satisfizo'], ['ver', 'imperfecto', 0, 'veía'], ['dar', 'subjPresente', 2, 'dé'],
    ['construir', 'indefinido', 5, 'construyeron'], ['dormir', 'subjPresente', 3, 'durmamos'], ['pedir', 'gerundio'], ['sentarse', 'imperativo', 2, 'siéntese'],
    ['enviar', 'presente', 0, 'envío'], ['actuar', 'subjPresente', 5, 'actúen'], ['averiguar', 'indefinido', 0, 'averigüé'], ['coger', 'presente', 0, 'cojo'],
    ['seguir', 'presente', 0, 'sigo'], ['conducir', 'indefinido', 5, 'condujeron'], ['oler', 'presente', 3, 'olemos'], ['errar', 'presente', 0, 'yerro']];
  spot.forEach(function (x) {
    if (x[1] === 'gerundio') { if (V.nonFinite(x[0]).gerundio !== 'pidiendo') fail('verb spot gerundio pedir'); return; }
    var got = V.forms(x[0], x[1])[x[2]];
    if (got !== x[3]) fail('verb spot ' + x.join(' ') + ' got ' + got);
  });
  // tense guide: ≥10 examples per tense, every marked form belongs to that tense of that verb
  var tx = 0;
  V.ORDER.forEach(function (k) {
    var T = E.VERB_TENSES[k]; if (!T) { fail('tense guide missing ' + k); return; }
    ['what', 'form', 'signals'].forEach(function (f) { if (!T[f]) fail('tense ' + k + ' missing ' + f); });
    if (!T.uses || !T.uses.length || !T.mistakes || !T.mistakes.length) fail('tense ' + k + ' needs uses and mistakes');
    if (!T.ex || T.ex.length < 10) fail('tense ' + k + ' needs ≥10 examples (has ' + (T.ex || []).length + ')');
    T.ex.forEach(function (x) {
      var m = /\[\[([^\]=]+)=([^\]:]+)(?::(\d))?\]\]/.exec(x);
      if (!m || x.split('|').length !== 2) { fail('tense ' + k + ' bad example ' + x); return; }
      var fs = V.forms(m[2], k); if (!fs) { fail('tense ' + k + ': unknown verb ' + m[2]); return; }
      var w = m[1].charAt(0).toLowerCase() + m[1].slice(1);
      var ok = fs.some(function (f, p) { return f && (m[3] === undefined || +m[3] === p) && (f === w || f.replace(/^no /, '').replace(/^(me|te|se|nos|os) /, '') === w); });
      if (!ok) fail('tense ' + k + ': [[' + m[1] + ']] is not ' + k + ' of ' + m[2] + ' (' + fs.filter(Boolean).join(', ') + ')'); else tx++;
    });
  });
  // comparison lab
  if (E.VERB_COMPARE.length < 9) fail('comparison lab needs 9 lessons');
  E.VERB_COMPARE.forEach(function (c) {
    if (!c.table || c.table.length < 4 || !c.ex || c.ex.length < 6 || !c.quiz || c.quiz.length < 6) fail('comparison ' + c.id + ' incomplete');
    c.quiz.forEach(function (q) { if (!(q[2] >= 0 && q[2] < q[1].length) || !q[3]) fail('comparison ' + c.id + ' quiz ' + q[0]); });
  });
  notes.push('verb tense guide: ' + V.ORDER.length + ' tenses, ' + tx + ' checked examples; comparison lab: ' + E.VERB_COMPARE.length + ' lessons');
  var cls = { r: 0, o: 0, a: 0, i: 0 }; cat.list.forEach(function (it) { cls[it.cls]++; });
  notes.push('verb laboratory: ' + cat.list.length + ' verbs (' + cls.i + ' irregular, ' + (cls.o + cls.a) + ' spelling/accent changes, ' + cls.r + ' regular), ' + n + ' checked examples, ' + V.ORDER.length + ' tenses; dataset reproduced with ' + r.fixed.length + ' reviewed corrections');
})();
// DELE
E.DELE.sims.forEach(function (S) {
  ['lectura', 'auditiva'].forEach(function (p) {
    var c = 0; S[p].forEach(function (T) { (T.multi ? T.blocks.map(function (b) { return b.q; }) : T.q).forEach(function (q) { c++; if (!(q[2] >= 0 && q[2] < q[1].length)) fail('DELE ' + S.id + ' ' + p + ' answer'); }); });
    if (c !== 25) fail('DELE ' + S.id + ' ' + p + ': ' + c + ' items (expected 25)');
  });
  if (S.escrita.length !== 2) fail('DELE ' + S.id + ' escrita tasks'); if (S.oral.length !== 4) fail('DELE ' + S.id + ' oral tasks');
});
notes.push('DELE simulations: ' + E.DELE.sims.length + ' complete (25 reading + 25 listening + 2 writing + 4 oral each)');
// adventures
E.ADV.forEach(function (a) { a.steps.forEach(function (s, i) { if (s.c && !s.c.some(function (c) { return c[2] === 1; })) fail('adventure ' + a.id + ' step ' + i + ' has no correct choice'); }); });
notes.push('adventures: ' + E.ADV.length + ', speaking conversations: ' + E.SPEAK.convos.length + ', pronunciation drills: ' + E.SPEAK.sounds.length);

notes.forEach(function (n) { console.log('✓ ' + n); });
if (fails.length) { console.error('\n✗ ' + fails.length + ' problem(s):\n - ' + fails.join('\n - ')); process.exit(1); }
console.log('\nAll checks passed.');
