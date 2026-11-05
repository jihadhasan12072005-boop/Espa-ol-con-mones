/* CCSE — Spanish citizenship & culture: topics, revision, simulations, analysis. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, rich = U.rich, ui = ECM.ui;

  var C = function () { return ECM.CCSE; };
  function topic(id) { return C().topics.find(function (t) { return t.id === id; }); }
  function toQ(row, i) {
    var t = topic(row[1]) || {};
    return { id: 'ccse-' + i, type: row[3] ? 'mc' : 'tf', stem: row[2], stemLang: 'es', opts: row[3], answer: row[4], why: row[5],
      topic: t.ar || 'CCSE', topicId: row[1], tarea: row[0], level: 'CCSE', src: 'CCSE · المهمة ' + row[0] };
  }
  function allQ() { return U.map(C().bank, toQ); }

  /* Deterministic simulation n (1..50): per tarea, take a rotating window from a
   * fixed shuffled order so consecutive models differ and the whole bank is covered. */
  ECM.ccseSim = function (n) {
    var Q = allQ(), out = [];
    U.each(C().tareas, function (T) {
      var pool = U.filter(Q, function (q) { return q.tarea === T.n; });
      var order = U.shuffle(pool, U.rng(1000 + T.n));
      var start = ((n - 1) * T.q) % order.length;
      for (var k = 0; k < T.q; k++) out.push(order[(start + k) % order.length]);
    });
    return out;
  };

  function stats() {
    var s = ECM.store.state, t = {};
    U.each(s.exams, function (e) {
      if (e.kind !== 'ccse' && e.kind !== 'ccse-topic') return;
      for (var k in e.topics) { if (!t[k]) t[k] = { r: 0, t: 0 }; t[k].r += e.topics[k].r; t[k].t += e.topics[k].t; }
    });
    return t;
  }

  function overview(el) {
    ECM.app.crumbs([{ t: 'الجنسية والثقافة — CCSE' }]);
    var X = C().exam, sims = U.filter(ECM.store.state.exams, function (e) { return e.kind === 'ccse'; });
    var passed = U.filter(sims, function (e) { return e.passed; }).length;
    var h = ui.hero('congreso', 'CONOCIMIENTOS CONSTITUCIONALES Y SOCIOCULTURALES DE ESPAÑA', 'الجنسية والثقافة الإسبانية — CCSE',
      'كل ما تحتاجه لامتحان الجنسية: الدستور والمؤسسات، الحقوق والواجبات، الجغرافيا، التاريخ والثقافة، والمجتمع الإسباني — بشرح عربي مفصّل وأسئلة تدريبية بالإسبانية كما في الامتحان.',
      '<div class="btns flex wrap mt16"><a class="btn gold lg" href="#/ccse/sim">محاكاة امتحان كاملة</a><a class="btn light lg" href="#/ccse/analysis">تحليل نقاط الضعف</a></div>', 'hero');
    h += '<div class="row mt24"><div class="c23"><div class="card"><span class="eyebrow">شكل الامتحان · CCSE ' + X.year + '</span><h3>كيف يبدو الامتحان؟</h3>' +
      '<div class="row"><div class="c4"><div class="stat"><div class="v">' + X.questions + '</div><div class="l">سؤالًا</div></div></div><div class="c4"><div class="stat"><div class="v">' + X.minutes + '</div><div class="l">دقيقة</div></div></div>' +
      '<div class="c4"><div class="stat"><div class="v">' + X.pass + '</div><div class="l">إجابة صحيحة للنجاح (60%)</div></div></div><div class="c4"><div class="stat"><div class="v">3 / V-F</div><div class="l">خيارات أو صحيح/خطأ</div></div></div></div>' +
      ui.table(['المهمة (Tarea)', 'الموضوع', 'عدد الأسئلة'], U.map(C().tareas, function (T) { return ['Tarea ' + T.n, T.ar + ' — [[' + T.es + ']]', String(T.q)]; })) +
      '<div class="notice blue">' + esc(X.note) + '</div>' +
      '<div class="notice mt8"><b>شفافية:</b> جميع الأسئلة في هذا القسم (' + C().bank.length + ' سؤالًا) <b>أسئلة تدريبية أصلية</b> كُتبت لهذا التطبيق على موضوعات الدليل الرسمي، <b>وليست</b> أسئلة الامتحان الرسمية. ننصحك بتنزيل دليل الإعداد الرسمي المجاني من موقع معهد ثربانتس وحل أسئلته أيضًا.</div></div></div>' +
      '<div class="c3"><div class="card navy"><span class="eyebrow">سجلّك في CCSE</span><h2>' + sims.length + ' محاكاة</h2><p class="muted">ناجحة: ' + passed + (sims[0] ? ' · آخر نتيجة: ' + sims[0].score + '/' + sims[0].total : '') + '</p>' +
      ui.bar(sims.length ? U.pct(passed, sims.length) : 0, 'gold') + '<div class="btns flex wrap mt16"><a class="btn gold" href="#/ccse/sim">ابدأ محاكاة</a><a class="btn light" href="#/exams/ccse">النماذج الخمسون</a></div></div>' +
      '<div class="card gold"><h3>طريقة الدراسة المقترحة</h3><ol class="mb0" style="padding-right:20px"><li>اقرأ كل موضوع بالعربية وراجع المصطلحات.</li><li>حلّ أسئلة الموضوع.</li><li>بعد إنهاء مهمة كاملة، أجرِ محاكاة.</li><li>راجع «تحليل نقاط الضعف» و«دفتر الأخطاء».</li></ol></div></div></div>';
    U.each(C().tareas, function (T) {
      var tops = U.filter(C().topics, function (t) { return t.tarea === T.n; });
      var nq = U.filter(C().bank, function (b) { return b[0] === T.n; }).length;
      h += ui.secTitle('<span class="lvl">Tarea ' + T.n + '</span> ' + esc(T.ar), '<span class="small muted">' + T.q + ' أسئلة في الامتحان · ' + nq + ' سؤالًا للتدريب</span>');
      h += '<div class="row">' + U.map(tops, function (t) {
        var done = ECM.store.state.ccse[t.id];
        var nt = U.filter(C().bank, function (b) { return b[1] === t.id; }).length;
        return '<div class="c3"><a class="tile" href="#/ccse/topic/' + t.id + '"><div class="body"><span class="tag ' + (done ? '' : 'grey') + '">' + (done ? 'تمت المراجعة · ' + done.best + '%' : 'لم يُدرس بعد') + '</span>' +
          '<h3 class="mt8">' + esc(t.ar) + '</h3><p class="es" lang="es" dir="ltr">' + esc(t.es) + '</p><div class="meta">' + nt + ' سؤالًا تدريبيًا ←</div></div></a></div>';
      }).join('') + '</div>';
    });
    el.innerHTML = h;
  }

  function topicPage(el, id) {
    var t = topic(id);
    if (!t) { overview(el); return; }
    var T = C().tareas[t.tarea - 1];
    ECM.app.crumbs([{ t: 'CCSE', href: '#/ccse' }, { t: 'Tarea ' + t.tarea }, { t: t.ar }]);
    var qs = U.filter(allQ(), function (q) { return q.topicId === id; });
    var h = ui.hero(T.photo, 'CCSE · TAREA ' + t.tarea + ' · ' + T.es.toUpperCase(), esc(t.ar), '<span class="es" lang="es" dir="ltr" style="color:#E9C987">' + esc(t.es) + '</span>');
    h += '<div class="row mt24"><div class="c23"><div class="card lesson-body"><h3>الشرح</h3><p>' + rich(t.body) + '</p>' +
      (t.table ? ui.table(t.table.head, t.table.rows, t.table.es) : '') +
      '<h3>معلومات يجب حفظها</h3>' + ui.examples(t.facts) +
      '<h3>المصطلحات الإسبانية الأساسية</h3><div class="tbl-wrap"><table class="tbl"><thead><tr><th>بالإسبانية</th><th>المعنى</th><th></th></tr></thead><tbody>' +
      U.map(t.terms, function (x) { var p = x.split('|'); return '<tr><td class="es-cell" lang="es">' + esc(p[0]) + '</td><td>' + esc(p[1]) + '</td><td style="width:40px">' + U.say(p[0]) + '</td></tr>'; }).join('') + '</tbody></table></div></div></div>' +
      '<div class="c3"><div class="card navy"><span class="eyebrow">تدريب الموضوع</span><h3>' + qs.length + ' سؤالًا</h3><p class="muted">أسئلة بالإسبانية بأسلوب الامتحان، مع شرح عربي لكل إجابة.</p><button class="btn gold" id="tq">ابدأ أسئلة الموضوع</button></div>' +
      '<div class="card"><h3>مراجعة سريعة بالبطاقات</h3><p class="small muted">اضغط على البطاقة لرؤية المعنى.</p><div id="flash"></div></div></div></div><div id="topicQuiz" class="mt16"></div>';
    el.innerHTML = h;
    // flashcards
    var fi = 0, shown = false, fbox = U.$('#flash', el);
    function drawFlash() {
      var p = t.terms[fi].split('|');
      fbox.innerHTML = '<div class="flash" id="fc" style="min-height:150px;padding:22px 14px"><div class="w" style="font-size:24px" lang="es">' + esc(p[0]) + '</div>' + (shown ? '<div class="m" style="font-size:19px">' + esc(p[1]) + '</div>' : '<div class="ex">اضغط لإظهار المعنى</div>') + '</div>' +
        '<div class="flex between mt8"><button class="btn ghost sm" id="fp">→</button><span class="small muted">' + (fi + 1) + ' / ' + t.terms.length + '</span><button class="btn ghost sm" id="fn">←</button></div>';
      U.$('#fc', fbox).onclick = function () { shown = !shown; if (shown) ECM.tts.speak(p[0]); drawFlash(); };
      U.$('#fn', fbox).onclick = function () { fi = (fi + 1) % t.terms.length; shown = false; drawFlash(); };
      U.$('#fp', fbox).onclick = function () { fi = (fi - 1 + t.terms.length) % t.terms.length; shown = false; drawFlash(); };
    }
    drawFlash();
    var start = function () {
      ui.quiz(U.$('#topicQuiz', el), U.shuffle(qs), {
        mode: 'practice', title: 'CCSE: ' + t.ar,
        record: { kind: 'ccse-topic', ref: t.id, title: 'CCSE · ' + t.ar, level: 'CCSE' },
        onFinish: function (r) {
          var rec = ECM.store.state.ccse[t.id] || { best: 0 };
          rec.best = Math.max(rec.best, r.pct); rec.last = new Date().toISOString(); rec.attempts = (rec.attempts || 0) + 1;
          ECM.store.state.ccse[t.id] = rec; ECM.store.save();
        },
        onRetry: start
      });
      U.$('#topicQuiz', el).scrollIntoView();
    };
    U.$('#tq', el).onclick = start;
  }

  function simPicker(el) {
    ECM.app.crumbs([{ t: 'CCSE', href: '#/ccse' }, { t: 'محاكاة الامتحان' }]);
    var X = C().exam, s = ECM.store.state;
    var taken = {}; U.each(s.exams, function (e) { if (e.kind === 'ccse') { var k = e.ref; if (!taken[k] || taken[k].pct < e.pct) taken[k] = e; } });
    var nextN = 1; while (taken[nextN] && nextN < 50) nextN++;
    var h = '<div class="card navy"><span class="eyebrow">SIMULACRO CCSE</span><h1 style="color:#fff">محاكاة امتحان CCSE</h1><p class="muted">' + X.questions + ' سؤالًا موزّعة على المهام الخمس كما في الامتحان (10 + 3 + 3 + 3 + 6)، ' + X.minutes +
      ' دقيقة، النجاح بـ ' + X.pass + ' إجابة صحيحة. لا يظهر التصحيح إلا بعد التسليم، كما في الامتحان الحقيقي.</p><button class="btn gold lg" data-sim="' + nextN + '">ابدأ النموذج ' + nextN + '</button></div>';
    h += '<div class="card"><h3>اختر نموذجًا (1–50)</h3><p class="small muted">كل نموذج ثابت (يمكنك إعادته لقياس تحسّنك)، ومجموعة النماذج تغطي بنك الأسئلة بالكامل بالتناوب. الأخضر: ناجح، الأحمر: لم ينجح بعد.</p><div class="qnav">';
    for (var i = 1; i <= 50; i++) {
      var e = taken[i];
      h += '<button style="width:46px;height:40px" data-sim="' + i + '" class="' + (e ? (e.passed ? 'r' : 'w') : '') + '" title="' + (e ? e.score + '/25' : 'لم يُجرَ') + '">' + i + '</button>';
    }
    h += '</div></div><div id="simBox"></div>';
    el.innerHTML = h;
    U.each(U.$$('[data-sim]', el), function (b) { b.onclick = function () { ECM.app.go('#/ccse/sim/' + b.getAttribute('data-sim')); }; });
  }

  ECM.runCcseSim = function (el, n, back) {
    ECM.app.crumbs([{ t: 'CCSE', href: '#/ccse' }, { t: 'محاكاة', href: '#/ccse/sim' }, { t: 'النموذج ' + n }]);
    var X = C().exam;
    el.innerHTML = '<div class="notice blue mb16">النموذج ' + n + ' من 50 · ' + X.minutes + ' دقيقة · النجاح: ' + X.pass + ' من ' + X.questions + '. أسئلة تدريبية أصلية (ليست الأسئلة الرسمية).</div><div id="simQ"></div>';
    ui.quiz(U.$('#simQ', el), ECM.ccseSim(n), {
      mode: 'exam', title: 'CCSE · النموذج ' + n, timeLimit: X.minutes * 60, passCount: X.pass,
      passNote: 'معيار النجاح هنا (15/25) هو معيار امتحان CCSE كما ورد في الدليل الرسمي. النتيجة تقدير للتدريب فقط.',
      record: { kind: 'ccse', ref: n, title: 'محاكاة CCSE · النموذج ' + n, level: 'CCSE' },
      onRetry: function () { ECM.runCcseSim(el, n, back); },
      onExit: function () { ECM.app.go(back || '#/ccse/sim'); }
    });
  };

  function analysis(el) {
    ECM.app.crumbs([{ t: 'CCSE', href: '#/ccse' }, { t: 'تحليل نقاط الضعف' }]);
    var st = stats(), keys = U.keys(st);
    var h = '<div class="card navy"><span class="eyebrow">ANÁLISIS</span><h1 style="color:#fff">تحليل نقاط الضعف في CCSE</h1><p class="muted">مبني على كل إجاباتك في المحاكاة وتدريبات الموضوعات.</p></div>';
    if (!keys.length) {
      h += '<div class="card empty"><div class="big">◎</div><p>لا توجد بيانات بعد. ابدأ بتدريب موضوع أو محاكاة.</p><a class="btn" href="#/ccse/sim">ابدأ محاكاة</a></div>';
    } else {
      keys.sort(function (a, b) { return st[a].r / st[a].t - st[b].r / st[b].t; });
      h += '<div class="card"><h3>الموضوعات من الأضعف إلى الأقوى</h3>';
      U.each(keys, function (k) {
        var p = U.pct(st[k].r, st[k].t), tp = C().topics.find(function (t) { return t.ar === k; });
        h += '<div class="flex mb8"><div style="width:40%">' + (tp ? '<a href="#/ccse/topic/' + tp.id + '">' + esc(k) + '</a>' : esc(k)) + '</div><div class="grow">' + ui.bar(p, p < 60 ? 'gold' : '') + '</div><div style="width:110px;text-align:left" class="small">' + st[k].r + '/' + st[k].t + ' (' + p + '%)</div></div>';
      });
      var weak = U.filter(keys, function (k) { return st[k].r / st[k].t < 0.7; });
      h += (weak.length ? '<div class="notice mt16">ركّز هذا الأسبوع على: <b>' + U.map(weak.slice(0, 3), esc).join('، ') + '</b>. اقرأ الشرح مرة أخرى ثم أعد أسئلة الموضوع.</div>' : '<div class="notice green mt16">ممتاز! كل موضوعاتك فوق 70%. استمر في المحاكاة الكاملة.</div>') + '</div>';
    }
    el.innerHTML = h;
  }

  ECM.views.ccse = function (el, args) {
    if (args[0] === 'topic') topicPage(el, args[1]);
    else if (args[0] === 'sim' && args[1]) ECM.runCcseSim(el, Math.max(1, Math.min(50, parseInt(args[1], 10) || 1)));
    else if (args[0] === 'sim') simPicker(el);
    else if (args[0] === 'analysis') analysis(el);
    else overview(el);
  };
})(window.ECM);
