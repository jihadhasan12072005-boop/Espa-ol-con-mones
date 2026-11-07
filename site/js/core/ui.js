/* Español con Mones — shared UI components: quiz engine, mistakes, widgets. */
(function (root) {
  'use strict';
  var ECM = root.ECM = root.ECM || {};
  var U = ECM.util, esc = U.esc, rich = U.rich;
  var ui = ECM.ui = {};

  /* ---------------- photos ---------------- */
  ui.photoStyle = function (key, thumb) {
    if (key === 'bandera') return 'background-color:#AA151B;background-image:linear-gradient(180deg,#AA151B 0%,#AA151B 25%,#F1BF00 25%,#F1BF00 75%,#AA151B 75%,#AA151B 100%);';
    var p = (ECM.photos && ECM.photos[key]) || (ECM.photos && ECM.photos._default) || {};
    var layers = [];
    if (p.file) layers.push('url(img/photos/' + (thumb ? 'thumb/' : '') + p.file + ')');
    if (p.fb) layers.push('url(img/fallback/' + p.fb + '.jpg)');
    return layers.length ? 'background-image:' + layers.join(',') + ';' : '';
  };
  ui.photoCredit = function (key) {
    var p = ECM.photos && ECM.photos[key];
    if (!p || !p.credit || !p.file) return '';
    return '<span class="credit">' + esc(p.credit) + '</span>';
  };
  ui.hero = function (key, eyebrow, title, text, extra, cls) {
    return '<section class="hero ' + (cls || 'page-hero') + '" style="' + ui.photoStyle(key) + '">' +
      '<div class="shade"></div><div class="inner">' +
      (eyebrow ? '<span class="eyebrow">' + esc(eyebrow) + '</span>' : '') +
      '<h1>' + title + '</h1>' + (text ? '<p>' + text + '</p>' : '') + (extra || '') +
      '</div>' + ui.photoCredit(key) + '</section>';
  };

  /* ---------------- small widgets ---------------- */
  ui.bar = function (pct, cls) {
    pct = Math.max(0, Math.min(100, pct || 0));
    return '<div class="bar ' + (cls || '') + '"><i style="width:' + pct + '%"></i></div>';
  };
  ui.ring = function (pct, color) {
    pct = Math.max(0, Math.min(100, Math.round(pct || 0)));
    var r = 48, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
    return '<div class="ring"><svg viewBox="0 0 112 112" aria-hidden="true"><circle cx="56" cy="56" r="' + r + '" fill="none" stroke="#ECE5D5" stroke-width="10"/>' +
      '<circle cx="56" cy="56" r="' + r + '" fill="none" stroke="' + (color || '#0E7C5A') + '" stroke-width="10" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg>' +
      '<div class="rv">' + pct + '%</div></div>';
  };
  ui.secTitle = function (t, extra) {
    return '<div class="sec-title"><span class="line"></span><h2>' + t + '</h2>' + (extra || '') + '</div>';
  };
  var toastT;
  ui.toast = function (msg) {
    var t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.innerHTML = esc(msg); t.style.display = 'block';
    clearTimeout(toastT); toastT = setTimeout(function () { t.style.display = 'none'; }, 3200);
  };
  ui.examples = function (list) {
    var h = '<div class="examples">';
    for (var i = 0; i < list.length; i++) {
      var parts = String(list[i]).split('|');
      h += '<div class="ex"><span class="n">' + (i + 1) + '</span><div class="txt"><span class="es" lang="es" dir="ltr">' + U.es(parts[0]) + '</span>' +
        '<div class="ar">' + rich(parts[1] || '') + '</div></div>' + U.say(parts[0]) + '</div>';
    }
    return h + '</div>';
  };
  ui.conjTable = function (verb, tense, opt) {
    opt = opt || {};
    var C = ECM.conj, forms;
    try { forms = C.conjugate(verb, tense); } catch (e) { return ''; }
    var reg = C.regularForms(verb.replace(/se$/, ''), tense) || [];
    var labels = tense.indexOf('imperativo') === 0 ? [null, 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'] : C.PERSONS;
    var rows = '';
    for (var p = 0; p < 6; p++) {
      if (forms[p] === null || forms[p] === undefined) continue;
      var irr = reg[p] && U.plain(forms[p]).replace(/^(me|te|se|nos|os) /, '') !== reg[p] && opt.mark !== false;
      rows += '<tr><td class="p">' + esc(labels[p]) + '</td><td class="f' + (irr ? ' irr' : '') + '">' + esc(forms[p]) +
        '</td><td style="width:34px">' + U.say((tense.indexOf('imperativo') === 0 ? '' : (C.PERSONS_SHORT[p] + ' ')) + forms[p], '', 'sm') + '</td></tr>';
    }
    var tn = C.TENSES[tense] ? C.TENSES[tense].es : tense;
    var V = ECM.verbs, mean = V && V.meaningOf ? V.meaningOf(verb) : (C.meaning ? C.meaning(verb.replace(/se$/, '')) : '');
    var exs = opt.examples === false || !V || !V.examplesOf ? [] : V.examplesOf(verb);
    return '<div class="conj"><h4><span lang="es" dir="ltr">' + esc(opt.title || verb) + '</span> <small>' + esc(opt.sub || tn) + '</small></h4>' +
      (mean ? '<div class="conj-mean"><b lang="es" dir="ltr">' + esc(verb) + '</b> = ' + esc(mean) + '</div>' : '') + '<table>' + rows + '</table>' +
      (exs.length ? '<div class="conj-ex">' + U.map(exs, function (x) { return ui.verbExample(x); }).join('') + '</div>' : '') + '</div>';
  };
  /* one example sentence: Spanish with the verb highlighted, audio, Arabic translation */
  ui.verbExample = function (x) {
    var plainEs = String(x.es).replace(/\[\[([^\]:=]+)(?:[:=][^\]]*)?\]\]/g, '$1');
    return '<div class="vex"><span class="es" lang="es" dir="ltr">' + esc(x.es).replace(/\[\[([^\]:=]+)(?:[:=][^\]]*)?\]\]/g, '<mark class="hl">$1</mark>') + '</span> ' + U.say(plainEs, '', 'sm') +
      '<div class="small muted">' + esc(x.ar) + '</div></div>';
  };
  /* "tener = يملك، لديه" line for every verb named in a question */
  ui.verbGloss = function (text) {
    var V = ECM.verbs; if (!V || !V.verbsInText) return '';
    var vs = V.verbsInText(text); if (!vs.length) return '';
    return '<div class="q-gloss">📖 ' + U.map(vs, function (v) { return '<span><b lang="es" dir="ltr">' + esc(v) + '</b> = ' + esc(V.meaningOf(v)) + '</span>'; }).join(' · ') + '</div>';
  };
  ui.table = function (head, rows, esCols) {
    esCols = esCols || [];
    var h = '<div class="tbl-wrap"><table class="tbl"><thead><tr>';
    for (var i = 0; i < head.length; i++) h += '<th>' + rich(head[i]) + '</th>';
    h += '</tr></thead><tbody>';
    for (var r = 0; r < rows.length; r++) {
      h += '<tr>';
      for (var c = 0; c < rows[r].length; c++) {
        var isEs = esCols.indexOf(c) !== -1;
        h += '<td' + (isEs ? ' class="es-cell" lang="es"' : '') + '>' + (isEs ? U.es(rows[r][c]) : rich(rows[r][c])) + '</td>';
      }
      h += '</tr>';
    }
    return h + '</tbody></table></div>';
  };

  /* ---------------- mistakes notebook ---------------- */
  var M = ECM.mistakes = {};
  M.record = function (q, given) {
    var s = ECM.store.state, id = q.id || ('q' + U.hash(q.stem + '|' + q.answer));
    var m = s.mistakes[id];
    var now = new Date().toISOString();
    if (!m) {
      m = s.mistakes[id] = { id: id, q: compactQ(q), yours: [], count: 0, box: 0, streak: 0, fixed: false, firstAt: now };
    }
    m.count++; m.lastAt = now; m.box = 0; m.streak = 0; m.fixed = false; m.fixedAt = null;
    m.yours.unshift(String(given)); if (m.yours.length > 5) m.yours.length = 5;
    m.due = now;
    ECM.store.save();
    if (ECM.app && ECM.app.updateBadge) ECM.app.updateBadge();
  };
  /* review result: success raises box (spaced 1,3,7 days); 3 successes = corrected */
  var GAP = [0, 1, 3, 7];
  M.review = function (id, ok) {
    var m = ECM.store.state.mistakes[id];
    if (!m) return;
    var now = new Date();
    m.lastReview = now.toISOString();
    if (ok) {
      m.box = Math.min(3, m.box + 1); m.streak++;
      if (m.box >= 3) { m.fixed = true; m.fixedAt = now.toISOString(); }
      m.due = new Date(now.getTime() + GAP[m.box] * 86400000).toISOString();
    } else {
      m.box = 0; m.streak = 0; m.count++; m.due = now.toISOString(); m.fixed = false;
    }
    ECM.store.save();
    if (ECM.app && ECM.app.updateBadge) ECM.app.updateBadge();
  };
  M.open = function () {
    var s = ECM.store.state.mistakes, o = [];
    for (var k in s) if (s.hasOwnProperty(k) && !s[k].fixed) o.push(s[k]);
    return o;
  };
  M.due = function () {
    var now = Date.now();
    return U.filter(M.open(), function (m) { return !m.due || new Date(m.due).getTime() <= now; });
  };
  function compactQ(q) {
    var c = { id: q.id, type: q.type, stem: q.stem, stemLang: q.stemLang, opts: q.opts, answer: q.answer, why: q.why, topic: q.topic, level: q.level, src: q.src, prompt: q.prompt };
    if (q.passage) c.passage = q.passage.length > 1200 ? q.passage.slice(0, 1200) + '…' : q.passage;
    if (q.audio) c.audio = q.audio;
    if (q.audioLines) c.audio = U.map(q.audioLines, function (l) { return l[1]; }).join(' … ');
    if (q.alt) c.alt = q.alt;
    return c;
  }

  /* ---------------- quiz engine ----------------
   * question: { id, type: 'mc'|'tf'|'type', stem, stemLang: 'es'|'ar', prompt (ar instruction),
   *             opts: [], answer: index | string | [strings], why (ar), topic, level,
   *             passage (es text), audio (es text spoken instead of shown), alt: accepted answers }
   * options: { mode: 'practice'|'exam', title, timeLimit (sec), record: {kind, ref, title, level},
   *            passCount, passPct, shuffle, onFinish(result), onExit(), review: bool (mistake review) } */
  ui.quiz = function (el, questions, opt) {
    opt = opt || {};
    var mode = opt.mode || 'practice';
    var Q = U.map(questions, balance), n = Q.length, pos = 0, answers = new Array(n), checked = new Array(n);
    var started = Date.now(), timerId = null, finished = false, revealed = {};

    function isCorrect(q, a) {
      if (a === undefined || a === null || a === '') return false;
      if (q.type === 'type') {
        var accepted = [].concat(q.answer, q.alt || []);
        for (var i = 0; i < accepted.length; i++) if (U.norm(a, q.strict) === U.norm(accepted[i], q.strict)) return true;
        return false;
      }
      return Number(a) === Number(q.answer);
    }
    function accentNote(q, a) {
      if (q.type !== 'type') return '';
      var accepted = [].concat(q.answer, q.alt || []);
      for (var i = 0; i < accepted.length; i++) if (U.norm(a, true) === U.norm(accepted[i], true)) return '';
      return 'إجابتك صحيحة في المعنى، لكن انتبه إلى العلامات (النبرة): الصحيح كتابةً <span class="es-inline" lang="es" dir="ltr">' + esc(q.answer) + '</span>.';
    }
    function answerText(q) {
      if (q.type === 'type') return String([].concat(q.answer)[0]);
      if (q.type === 'tf') return q.answer === 0 ? 'صحيح (Verdadero)' : 'خطأ (Falso)';
      return q.opts[q.answer];
    }
    function givenText(q, a) {
      if (a === undefined || a === null || a === '') return '— (بلا إجابة)';
      if (q.type === 'type') return String(a);
      if (q.type === 'tf') return Number(a) === 0 ? 'صحيح (Verdadero)' : 'خطأ (Falso)';
      return q.opts[a];
    }

    function head() {
      var h = '<div class="flex between wrap mb8"><div><span class="tag navy">' + esc(opt.title || 'تدريب') + '</span> ' +
        '<span class="tag grey">السؤال ' + (pos + 1) + ' من ' + n + '</span></div>';
      if (opt.timeLimit && mode === 'exam') h += '<span class="timer" id="qTimer">' + U.mmss(opt.timeLimit) + '</span>';
      h += '</div>' + ui.bar(100 * (mode === 'exam' ? countAnswered() : pos) / n, 'thin');
      return h;
    }
    function countAnswered() { var c = 0; for (var i = 0; i < n; i++) if (answers[i] !== undefined && answers[i] !== '') c++; return c; }

    function stemHtml(q) {
      var h = '';
      if (q.prompt) h += '<p class="muted mb8">' + rich(q.prompt) + '</p>';
      if (q.passage) h += '<div class="reading-text mb16" lang="es">' + U.es(q.passage).replace(/\n/g, '<br>') + '</div>';
      if (q.audioLines) {
        h += '<div class="card emerald tight mb16"><div class="flex wrap"><button type="button" class="btn sm" data-act="playlines">▶ استمع إلى التسجيل</button><button type="button" class="btn sm ghost" data-act="stopaudio" style="margin-right:8px">■ إيقاف</button>' +
          '<span class="muted small" style="margin-right:10px">في الامتحان الحقيقي تستمع مرتين. النص يظهر بعد الإجابة.</span></div>' +
          ((revealed[pos] || !ECM.tts.supported()) ? '<div class="mt8">' + U.map(q.audioLines, function (l) { return '<div><span class="speaker">' + esc(l[0]) + ':</span> <span class="es" lang="es" dir="ltr">' + esc(l[1]) + '</span></div>'; }).join('') + '</div>' : '') + '</div>';
        if (!ECM.tts.supported()) h += '<div class="notice red mb8">متصفحك لا يدعم القراءة الصوتية؛ النص معروض للتدرّب قراءةً.</div>';
      } else if (q.audio) {
        h += '<div class="card emerald tight mb16"><div class="flex wrap"><button type="button" class="btn sm" data-say="' + esc(q.audio) + '">▶ استمع إلى التسجيل</button>' +
          '<span class="muted small" style="margin-right:10px">يمكنك الاستماع أكثر من مرة. النص مخفي حتى تجيب.</span></div>' +
          (revealed[pos] ? '<div class="es mt8" lang="es" dir="ltr">' + esc(q.audio) + '</div>' : '') + '</div>';
        if (!ECM.tts.supported()) h += '<div class="notice red mb8">متصفحك لا يدعم القراءة الصوتية؛ اضغط «إظهار النص» لقراءة التسجيل.</div><button class="btn ghost sm mb8" data-act="reveal">إظهار النص</button>';
      }
      if (q.stem) {
        if (q.stemLang === 'ar') h += '<div class="q-stem">' + rich(q.stem) + '</div>';
        else h += '<div class="q-stem es" lang="es" dir="ltr">' + U.es(q.stem) + (q.noSay ? '' : ' ' + U.say(q.stem.replace(/_{2,}/g, '…'))) + '</div>';
        h += ui.verbGloss(q.stem);
      }
      return h;
    }

    function optionsHtml(q, locked) {
      var a = answers[pos], h = '';
      if (q.type === 'type') {
        h += '<input class="inp es-in" id="qType" lang="es" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="اكتب إجابتك بالإسبانية" value="' + esc(a || '') + '"' + (locked ? ' disabled' : '') + '>' +
          '<div class="small muted mt8">تلميح: للأحرف الخاصة استخدم الأزرار: ' +
          U.map(['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'], function (c) { return '<button type="button" class="chip" data-ch="' + c + '"' + (locked ? ' disabled' : '') + '>' + c + '</button>'; }).join(' ') + '</div>';
        return h;
      }
      var opts = q.type === 'tf' ? ['Verdadero — صحيح', 'Falso — خطأ'] : q.opts;
      var esOpts = q.type !== 'tf' && q.optLang !== 'ar';
      var keys = ['a', 'b', 'c', 'd', 'e'];
      h += '<div class="opts">';
      for (var i = 0; i < opts.length; i++) {
        var cls = 'opt' + (esOpts ? ' es-opt' : '');
        if (locked) {
          if (i === Number(q.answer)) cls += ' correct';
          else if (String(a) === String(i)) cls += ' wrong';
        } else if (String(a) === String(i)) cls += ' sel';
        h += '<button type="button" class="' + cls + '" data-opt="' + i + '"' + (locked ? ' disabled' : '') + (esOpts ? ' lang="es"' : '') + '>' +
          '<span class="k">' + keys[i] + '</span>' + (esOpts ? U.es(opts[i]) : rich(opts[i])) + '</button>';
      }
      return h + '</div>';
    }

    function feedbackHtml(q) {
      var a = answers[pos], ok = isCorrect(q, a), note = ok ? accentNote(q, a) : '';
      return '<div class="fb ' + (ok ? 'ok' : 'no') + '" role="status"><b class="t">' + (ok ? '✓ إجابة صحيحة' : '✗ إجابة غير صحيحة') + '</b>' +
        (ok ? '' : '<div>الإجابة الصحيحة: <span class="es-inline" lang="es" dir="ltr">' + esc(answerText(q)) + '</span></div>') +
        (note ? '<div>' + note + '</div>' : '') +
        (q.why ? '<div class="mt8">' + rich(q.why) + '</div>' : '') + '</div>';
    }

    function render() {
      if (finished) return;
      var q = Q[pos], locked = mode === 'practice' && checked[pos];
      var h = '<div class="card">' + head() + '<div class="mt16">' + stemHtml(q) + optionsHtml(q, locked) + '</div>';
      if (locked) h += feedbackHtml(q);
      h += '<div class="flex wrap mt16 btns">';
      if (mode === 'practice') {
        if (!locked && q.type === 'type') h += '<button class="btn" data-act="check">تحقّق</button>';
        if (locked) h += '<button class="btn" data-act="next">' + (pos === n - 1 ? 'عرض النتيجة' : 'السؤال التالي ←') + '</button>';
        if (!locked) h += '<button class="btn ghost" data-act="skip">لا أعرف — أرني الإجابة</button>';
      } else {
        if (pos > 0) h += '<button class="btn ghost" data-act="prev">→ السابق</button>';
        if (pos < n - 1) h += '<button class="btn navy" data-act="next">التالي ←</button>';
        h += '<button class="btn gold" data-act="submit">تسليم الامتحان</button>';
      }
      if (opt.onExit) h += '<button class="btn ghost" data-act="exit" style="margin-right:auto">خروج</button>';
      h += '</div>';
      if (mode === 'exam') {
        h += '<div class="qnav" aria-label="التنقل بين الأسئلة">';
        for (var i = 0; i < n; i++) h += '<button type="button" data-goq="' + i + '" class="' + (i === pos ? 'cur' : (answers[i] !== undefined && answers[i] !== '' ? 'ans' : '')) + '">' + (i + 1) + '</button>';
        h += '</div>';
      }
      h += '</div>';
      el.innerHTML = h;
      var inp = document.getElementById('qType');
      if (inp && !locked) {
        inp.oninput = function () { answers[pos] = inp.value; };
        inp.onkeydown = function (e) { if ((e.keyCode || e.which) === 13) { e.preventDefault(); if (mode === 'practice') check(); else go(pos + 1); } };
        try { inp.focus(); } catch (e) { /* ignore */ }
      }
      if (opt.onRender) opt.onRender(pos);
      tickTimer();
    }

    function check() {
      var q = Q[pos];
      if (q.type === 'type') { var inp = document.getElementById('qType'); answers[pos] = inp ? inp.value : answers[pos]; if (!answers[pos]) { ui.toast('اكتب إجابة أولًا، أو اضغط «لا أعرف».'); return; } }
      checked[pos] = true;
      revealed[pos] = true;
      var ok = isCorrect(q, answers[pos]);
      if (opt.onAnswer) { try { opt.onAnswer(q, ok); } catch (e) { /* ignore */ } }
      if (opt.review) M.review(q.id, ok);
      else if (!ok) M.record(q, givenText(q, answers[pos]));
      ECM.store.touch('q');
      render();
    }
    function go(i) {
      if (i < 0 || i >= n) return;
      if (mode === 'practice' && i > pos && !checked[pos]) return;
      pos = i; render();
      try { el.scrollIntoView(); } catch (e) { /* ignore */ }
    }

    function tickTimer() {
      if (!opt.timeLimit || mode !== 'exam' || timerId) return;
      timerId = setInterval(function () {
        var left = opt.timeLimit - (Date.now() - started) / 1000, t = document.getElementById('qTimer');
        if (t) { t.innerHTML = U.mmss(left); t.className = 'timer' + (left < 120 ? ' low' : ''); }
        if (left <= 0) { clearInterval(timerId); ui.toast('انتهى الوقت — تم تسليم الامتحان تلقائيًا.'); finish(); }
      }, 1000);
    }

    function finish() {
      if (finished) return;
      finished = true;
      clearInterval(timerId);
      ECM.tts.stop();
      var score = 0, topics = {}, details = [];
      for (var i = 0; i < n; i++) {
        var q = Q[i], ok = isCorrect(q, answers[i]);
        if (ok) score++;
        var t = q.topic || 'عام';
        topics[t] = topics[t] || { r: 0, t: 0 }; topics[t].t++; if (ok) topics[t].r++;
        details.push({ q: q, ok: ok, given: answers[i] });
        if (mode === 'exam' && opt.onAnswer) { try { opt.onAnswer(q, ok); } catch (e) { /* ignore */ } }
        if (mode === 'exam' && !opt.review) {
          if (!ok) M.record(q, givenText(q, answers[i]));
        }
      }
      var pct = U.pct(score, n);
      var passed = opt.passCount ? score >= opt.passCount : (opt.passPct ? pct >= opt.passPct : null);
      var result = { score: score, total: n, pct: pct, passed: passed, topics: topics, durationSec: Math.round((Date.now() - started) / 1000), details: details };
      if (opt.record) {
        var rec = Object.assign({}, opt.record, { score: score, total: n, pct: pct, passed: passed, date: new Date().toISOString(), durationSec: result.durationSec, topics: topics });
        ECM.store.state.exams.unshift(rec);
        if (ECM.store.state.exams.length > 400) ECM.store.state.exams.length = 400;
        ECM.store.touch('exam');
        ECM.store.save();
        if (ECM.achievements) ECM.achievements.check();
      }
      el.innerHTML = ui.report(result, opt);
      if (opt.onFinish) opt.onFinish(result, el);
    }

    el.onclick = function (e) {
      var t = e.target.closest ? e.target.closest('button') : null;
      if (!t || !el.contains(t) || finished) {
        if (t && t.getAttribute('data-act') === 'retry' && opt.onRetry) opt.onRetry();
        if (t && t.getAttribute('data-act') === 'exit' && opt.onExit) opt.onExit();
        return;
      }
      var q = Q[pos];
      if (t.hasAttribute('data-opt')) {
        if (mode === 'practice' && checked[pos]) return;
        answers[pos] = Number(t.getAttribute('data-opt'));
        if (mode === 'practice') check(); else render();
        return;
      }
      if (t.hasAttribute('data-ch')) {
        var inp = document.getElementById('qType');
        if (inp) { inp.value += t.getAttribute('data-ch'); answers[pos] = inp.value; inp.focus(); }
        return;
      }
      if (t.hasAttribute('data-goq')) { go(Number(t.getAttribute('data-goq'))); return; }
      var act = t.getAttribute('data-act');
      if (act === 'check') check();
      else if (act === 'skip') { answers[pos] = q.type === 'type' ? '' : -1; checked[pos] = true; revealed[pos] = true; if (opt.review) M.review(q.id, false); else M.record(q, 'لا أعرف'); render(); }
      else if (act === 'reveal') { revealed[pos] = true; render(); }
      else if (act === 'playlines') { ECM.tts.speakLines(U.map(q.audioLines, function (l, i) { return { text: l[1], pitch: l[2] || (i % 2 ? 0.82 : 1.12) }; })); }
      else if (act === 'stopaudio') { ECM.tts.stop(); }
      else if (act === 'next') { if (pos === n - 1 && mode === 'practice') finish(); else go(pos + 1); }
      else if (act === 'prev') go(pos - 1);
      else if (act === 'submit') {
        var missing = n - countAnswered();
        if (!missing || confirm('لم تُجب عن ' + missing + ' سؤالًا. هل تريد تسليم الامتحان الآن؟')) finish();
      } else if (act === 'exit') {
        if (mode === 'exam' && countAnswered() && !confirm('سيُلغى هذا الامتحان ولن تُحفظ نتيجته. هل تريد الخروج؟')) return;
        clearInterval(timerId); finished = true; if (opt.onExit) opt.onExit();
      }
    };
    render();
    return { finish: finish, stop: function () { clearInterval(timerId); finished = true; } };
  };

  /* Deterministic option shuffle per question id: the correct answer is spread
   * evenly over a/b/c/d (authors tend to put it in the same place), yet a model
   * shows the same order every time it is retaken.                              */
  function balance(q) {
    if (q.type !== 'mc' || !q.opts || q.fixedOrder || q.opts.length < 2) return q;
    var idx = U.shuffle(U.map(q.opts, function (o, i) { return i; }), U.rng(U.hash(String(q.id || q.stem))));
    var c = Object.assign({}, q);
    c.opts = U.map(idx, function (i) { return q.opts[i]; });
    c.answer = idx.indexOf(Number(q.answer));
    return c;
  }
  ui.balance = balance;

  ui.report = function (r, opt) {
    opt = opt || {};
    var color = r.passed === false ? '#B4423A' : '#0E7C5A';
    var verdict = '';
    if (r.passed === true) verdict = '<span class="tag">ناجح ✓</span>';
    else if (r.passed === false) verdict = '<span class="tag red">لم تبلغ درجة النجاح بعد</span>';
    var h = '<div class="card"><div class="row"><div class="col" style="max-width:170px">' + ui.ring(r.pct, color) + '</div><div class="col">' +
      '<span class="eyebrow">النتيجة</span><h2>' + esc(opt.title || 'النتيجة') + ' ' + verdict + '</h2>' +
      '<p>أجبت إجابة صحيحة عن <b>' + r.score + '</b> من <b>' + r.total + '</b> سؤالًا' +
      (opt.passCount ? ' (النجاح يتطلب ' + opt.passCount + ' إجابة صحيحة على الأقل)' : '') + '. المدة: ' + U.mmss(r.durationSec) + '.</p>' +
      (opt.passNote ? '<p class="small muted">' + rich(opt.passNote) + '</p>' : '') +
      '<div class="btns flex wrap">' + (opt.onRetry ? '<button class="btn" data-act="retry">إعادة المحاولة</button>' : '') +
      '<a class="btn ghost" href="#/mistakes">دفتر الأخطاء</a>' + (opt.onExit ? '<button class="btn ghost" data-act="exit">رجوع</button>' : '') + '</div></div></div></div>';
    // topics
    var tk = U.keys(r.topics);
    if (tk.length > 1) {
      h += '<div class="card"><h3>التحليل حسب الموضوع</h3>';
      tk.sort(function (a, b) { return r.topics[a].r / r.topics[a].t - r.topics[b].r / r.topics[b].t; });
      for (var i = 0; i < tk.length; i++) {
        var t = r.topics[tk[i]], p = U.pct(t.r, t.t);
        h += '<div class="flex mb8"><div style="width:42%" class="small">' + rich(tk[i]) + '</div><div class="grow">' + ui.bar(p, p < 60 ? 'gold' : '') + '</div><div style="width:70px;text-align:left" class="small">' + t.r + '/' + t.t + '</div></div>';
      }
      h += '</div>';
    }
    // corrections
    var wrong = U.filter(r.details, function (d) { return !d.ok; });
    h += '<div class="card"><h3>' + (wrong.length ? 'التصحيح المفصّل (' + wrong.length + ')' : 'ممتاز! لا توجد أخطاء.') + '</h3>';
    for (var j = 0; j < wrong.length; j++) {
      var d = wrong[j], q = d.q, ans = q.type === 'type' ? [].concat(q.answer)[0] : (q.type === 'tf' ? (q.answer === 0 ? 'Verdadero' : 'Falso') : q.opts[q.answer]);
      var given = d.given === undefined || d.given === '' || d.given === -1 ? '—' : (q.type === 'type' ? d.given : (q.type === 'tf' ? (Number(d.given) === 0 ? 'Verdadero' : 'Falso') : q.opts[d.given]));
      h += '<div class="mistake-pair">' +
        (q.audioLines ? '<div class="small muted">نص التسجيل: <span class="es-inline" lang="es" dir="ltr">' + esc(U.map(q.audioLines, function (l) { return l[0] + ': ' + l[1]; }).join(' / ')) + '</span></div>' : '') +
        (q.audio && !q.audioLines ? '<div class="small muted">نص التسجيل: <span class="es-inline" lang="es" dir="ltr">' + esc(q.audio) + '</span></div>' : '') +
        (q.stem ? (q.stemLang === 'ar' ? '<div><b>' + rich(q.stem) + '</b></div>' : '<div class="es" lang="es" dir="ltr"><b>' + U.es(q.stem) + '</b></div>') : '') +
        '<span class="wrong">' + esc(given) + '</span><span class="right">' + esc(ans) + '</span>' +
        (q.why ? '<div class="small mt8">' + rich(q.why) + '</div>' : '') +
        (opt.lessonLink && opt.lessonLink(q) ? '<a class="btn sm ghost mt8" href="' + opt.lessonLink(q) + '">📖 افتح الدرس المرتبط بهذا السؤال</a>' : '') + '</div>';
    }
    return h + '</div>';
  };

  /* ---------------- achievements ---------------- */
  var A = ECM.achievements = {};
  A.LIST = [
    { id: 'first-lesson', t: 'الدرس الأول', d: 'أكملت أول درس', test: function (s) { return U.keys(s.lessons).length >= 1; } },
    { id: 'ten-lessons', t: 'عشرة دروس', d: 'أكملت 10 دروس', test: function (s) { return countDone(s) >= 10; } },
    { id: 'a1-done', t: 'أساس متين A1', d: 'أكملت جميع دروس A1', test: function (s) { return levelDone(s, 'A1'); } },
    { id: 'a2-done', t: 'مستوى A2', d: 'أكملت جميع دروس A2', test: function (s) { return levelDone(s, 'A2'); } },
    { id: 'first-exam', t: 'الامتحان الأول', d: 'أنهيت أول امتحان', test: function (s) { return s.exams.length >= 1; } },
    { id: 'ccse-pass', t: 'جاهز للجنسية', d: 'نجحت في محاكاة CCSE كاملة', test: function (s) { return U.filter(s.exams, function (e) { return e.kind === 'ccse' && e.passed; }).length > 0; } },
    { id: 'ccse-5', t: 'خمس محاكاة ناجحة', d: 'نجحت في 5 محاكاة CCSE', test: function (s) { return U.filter(s.exams, function (e) { return e.kind === 'ccse' && e.passed; }).length >= 5; } },
    { id: 'exam-90', t: 'امتياز', d: 'حصلت على 90% أو أكثر في امتحان', test: function (s) { return U.filter(s.exams, function (e) { return e.pct >= 90; }).length > 0; } },
    { id: 'fixer', t: 'يتعلّم من أخطائه', d: 'صحّحت 10 أخطاء نهائيًا', test: function (s) { var c = 0; for (var k in s.mistakes) if (s.mistakes[k].fixed) c++; return c >= 10; } },
    { id: 'speaker', t: 'المتحدّث', d: 'أنجزت 10 إجابات في استوديو المحادثة', test: function (s) { return s.speaking.attempts >= 10; } },
    { id: 'adventurer', t: 'المغامر', d: 'أنهيت 3 مغامرات', test: function (s) { var c = 0; for (var k in s.adventures) if (s.adventures[k].done) c++; return c >= 3; } },
    { id: 'words-50', t: '50 كلمة', d: 'أتقنت 50 كلمة في أكاديمية المفردات', test: function (s) { var c = 0; for (var k in s.vocab) if (s.vocab[k].box >= 3) c++; return c >= 50; } },
    { id: 'week', t: 'أسبوع من المثابرة', d: 'درست في 7 أيام مختلفة', test: function (s) { return U.keys(s.activity).length >= 7; } }
  ];
  function countDone(s) { var c = 0; for (var k in s.lessons) if (s.lessons[k].done) c++; return c; }
  function levelDone(s, lv) {
    var L = ECM.course && ECM.course.lessonsOf(lv);
    if (!L || !L.length) return false;
    for (var i = 0; i < L.length; i++) if (!(s.lessons[L[i].id] && s.lessons[L[i].id].done)) return false;
    return true;
  }
  A.check = function () {
    var s = ECM.store.state, gained = [];
    for (var i = 0; i < A.LIST.length; i++) {
      var a = A.LIST[i];
      if (!s.achievements[a.id]) { var ok = false; try { ok = a.test(s); } catch (e) { ok = false; } if (ok) { s.achievements[a.id] = new Date().toISOString(); gained.push(a); } }
    }
    if (gained.length) { ECM.store.save(); ui.toast('إنجاز جديد: ' + gained[0].t + ' 🏅'); }
  };
})(typeof window !== 'undefined' ? window : this);
