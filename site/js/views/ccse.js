/* CCSE examinations (citizenship) — 50 full simulations, analysis, own history.
 * Completely separate from the language examinations. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, ui = ECM.ui;
  function C() { return ECM.CCSE; }
  var MIN = 45, NQ = 25, PASS = 15;

  /* Simulation n (1..50): per tarea a rotating window over a fixed shuffled order of the
   * whole bank, so consecutive models differ and all questions are used over the 50 models. */
  ECM.ccseSim = function (n) {
    var out = [];
    U.each(C().tareas, function (T) {
      var pool = U.filter(C().all, function (q) { return q.tarea === T.n; });
      var total = (n - 1) * T.q, cycle = Math.floor(total / pool.length), start = total % pool.length;
      var order = U.shuffle(pool, U.rng(1000 + T.n + cycle * 131));
      for (var k = 0; k < T.q; k++) out.push(order[(start + k) % order.length]);
    });
    return out;
  };
  ECM.ccseLessonLink = function (q) { return q.lesson ? '#/cultura/' + q.lesson : null; };

  function ccseExams() { return U.filter(ECM.store.state.exams, function (e) { return e.kind === 'ccse' || e.kind === 'ccse-topic' || e.kind === 'ccse-bank'; }); }
  ECM.ccseExams = ccseExams;

  function lessonStats() {
    var st = {}, qs = ECM.store.state.qstats;
    U.each(C().all, function (q) {
      var r = qs[q.id]; if (!r || !q.lesson) return;
      var s = st[q.lesson] || (st[q.lesson] = { r: 0, w: 0, n: 0 });
      s.r += r.r; s.w += r.w; s.n++;
    });
    return st;
  }
  ECM.ccseLessonStats = lessonStats;

  function overview(el) {
    ECM.app.crumbs([{ t: 'الجنسية', href: '#/ciudadania' }, { t: 'امتحانات الجنسية CCSE' }]);
    var X = C().exam, sims = U.filter(ECM.store.state.exams, function (e) { return e.kind === 'ccse'; });
    var passed = U.filter(sims, function (e) { return e.passed; }).length;
    var best = {}; U.each(sims, function (e) { if (!best[e.ref] || best[e.ref].score < e.score) best[e.ref] = e; });
    var nextN = 1; while (best[nextN] && nextN < 50) nextN++;
    var h = ui.hero('congreso', 'EXÁMENES CCSE · SIMULACROS', 'امتحانات الجنسية CCSE',
      '50 محاكاة كاملة: 25 سؤالًا موزّعة على المهام الخمس (10 + 3 + 3 + 3 + 6)، 45 دقيقة، والنجاح بـ 15 إجابة صحيحة. التصحيح بالعربية بعد التسليم، مع رابط الدرس لكل خطأ.',
      '<div class="btns flex wrap mt16"><a class="btn gold lg" href="#/ccse/sim/' + nextN + '">ابدأ النموذج ' + nextN + '</a><a class="btn light lg" href="#/ccse/analysis">تحليل نقاط الضعف</a></div>', 'hero');
    h += '<div class="row mt24"><div class="c4"><div class="card stat"><div class="v">' + sims.length + '</div><div class="l">محاكاة منجزة</div></div></div><div class="c4"><div class="card stat"><div class="v">' + passed + '</div><div class="l">محاكاة ناجحة (15+)</div></div></div>' +
      '<div class="c4"><div class="card stat"><div class="v">' + U.keys(best).length + ' / 50</div><div class="l">نموذج مختلف أُنجز</div></div></div><div class="c4"><div class="card stat"><div class="v">' + (sims[0] ? sims[0].score + '/25' : '—') + '</div><div class="l">آخر نتيجة</div></div></div></div>';
    h += '<div class="card"><h3>النماذج الخمسون</h3><p class="small muted">الأخضر: ناجح، الأحمر: لم ينجح بعد. كل نموذج ثابت لتقيس تحسّنك عند إعادته، والنماذج معًا تستخدم كل أسئلة البنك (' + C().all.length + ' سؤالًا أصليًا).</p><div class="qnav">';
    for (var i = 1; i <= 50; i++) {
      var e = best[i];
      h += '<a href="#/ccse/sim/' + i + '" style="width:46px;height:40px;display:inline-block;text-align:center;line-height:38px;border-radius:9px;margin:0 0 6px 6px;font-weight:700;text-decoration:none;border:1px solid ' + (e ? (e.passed ? '#0E7C5A' : '#B4423A') : '#DCD2BD') + ';background:' + (e ? (e.passed ? '#E6F4EC' : '#FBEDEB') : '#FFFDF8') + ';color:#0E2240" title="' + (e ? e.score + '/25' : 'لم يُجرَ') + '">' + i + '</a>';
    }
    h += '</div></div>';
    h += '<div class="row"><div class="c2"><div class="card"><span class="eyebrow">شكل الامتحان</span><h3>ما الذي تعرفه عن الامتحان الحقيقي؟</h3>' +
      ui.table(['Tarea', 'الموضوع', 'أسئلة في الامتحان', 'في الدليل الرسمي 2026'], U.map(C().tareas, function (T) { return [String(T.n), T.ar, String(T.q), String(C().official.perTarea[T.n])]; })) +
      '<div class="notice blue">' + esc(X.note) + '</div></div></div><div class="c2"><div class="card"><h3>سجل امتحانات الجنسية</h3>' + historyTable(ccseExams().slice(0, 15)) + '</div></div></div>';
    el.innerHTML = h;
  }

  function historyTable(list) {
    if (!list.length) return '<p class="muted">لا يوجد سجل بعد.</p>';
    return '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>التاريخ</th><th>الامتحان</th><th>النتيجة</th></tr></thead><tbody>' +
      U.map(list, function (e) { return '<tr><td class="small">' + U.date(e.date) + '</td><td>' + esc(e.title) + '</td><td><span class="tag ' + (e.passed === false || e.pct < 60 ? 'red' : '') + '">' + e.score + '/' + e.total + '</span></td></tr>'; }).join('') + '</tbody></table></div>';
  }
  ECM.historyTable = historyTable;

  ECM.runCcseSim = function (el, n, back) {
    ECM.app.crumbs([{ t: 'الجنسية', href: '#/ciudadania' }, { t: 'امتحانات CCSE', href: '#/ccse' }, { t: 'النموذج ' + n }]);
    el.innerHTML = '<div class="notice blue mb16">النموذج ' + n + ' من 50 · ' + MIN + ' دقيقة · النجاح: ' + PASS + ' من ' + NQ + '. <b>أسئلة تدريبية أصلية</b> على موضوعات الدليل الرسمي، وليست أسئلة الدليل نفسها.</div><div id="simQ"></div>';
    ui.quiz(U.$('#simQ', el), ECM.ccseSim(n), {
      mode: 'exam', title: 'CCSE · النموذج ' + n, timeLimit: MIN * 60, passCount: PASS,
      passNote: 'معيار النجاح 15 من 25 هو معيار امتحان CCSE. هذه نتيجة تدريبية.',
      record: { kind: 'ccse', ref: n, title: 'محاكاة CCSE · النموذج ' + n, level: 'CCSE' },
      onAnswer: C().track, lessonLink: ECM.ccseLessonLink,
      onRetry: function () { ECM.runCcseSim(el, n, back); },
      onExit: function () { ECM.app.go(back || '#/ccse'); }
    });
  };

  function analysis(el) {
    ECM.app.crumbs([{ t: 'الجنسية', href: '#/ciudadania' }, { t: 'امتحانات CCSE', href: '#/ccse' }, { t: 'تحليل نقاط الضعف' }]);
    var st = lessonStats(), keys = U.keys(st);
    var h = '<div class="card navy"><span class="eyebrow">ANÁLISIS</span><h1 style="color:#fff">تحليل نقاط الضعف</h1><p class="muted">مبني على كل إجاباتك في المحاكاة وبنك الأسئلة، مجمّعة حسب دروس أكاديمية الثقافة.</p></div>';
    if (!keys.length) h += '<div class="card empty"><div class="big">◎</div><p>لا توجد بيانات بعد.</p><a class="btn" href="#/ccse/sim/1">ابدأ أول محاكاة</a></div>';
    else {
      keys.sort(function (a, b) { return (st[a].r / (st[a].r + st[a].w)) - (st[b].r / (st[b].r + st[b].w)); });
      h += '<div class="card"><h3>الدروس من الأضعف إلى الأقوى</h3>';
      U.each(keys, function (k) {
        var s = st[k], p = U.pct(s.r, s.r + s.w), l = C().lesson(k);
        h += '<div class="flex wrap mb8"><div style="width:42%"><a href="#/cultura/' + k + '">' + esc(l ? l.ar : k) + '</a></div><div class="grow">' + ui.bar(p, p < 70 ? 'gold' : '') + '</div><div style="width:90px;text-align:left" class="small">' + p + '%</div>' +
          (p < 70 ? '<a class="btn sm ghost" style="margin-right:8px" href="#/banco/leccion/' + k + '">تدرّب</a>' : '') + '</div>';
      });
      h += '</div>';
    }
    el.innerHTML = h;
  }

  ECM.views.ccse = function (el, args) {
    if (args[0] === 'topic') { var l = U.filter(ECM.CULTURE, function (x) { return x.topics.indexOf(args[1]) !== -1; })[0]; ECM.app.go(l ? '#/cultura/' + l.id : '#/cultura'); return; }
    if (args[0] === 'sim' && args[1]) ECM.runCcseSim(el, Math.max(1, Math.min(50, parseInt(args[1], 10) || 1)));
    else if (args[0] === 'analysis') analysis(el);
    else overview(el);
  };
})(window.ECM);
