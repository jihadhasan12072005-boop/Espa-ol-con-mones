/* Spanish citizenship: hub, Culture & Citizenship Academy, question bank, official
 * question tracker and syllabus coverage. Separate from language examinations. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, rich = U.rich, ui = ECM.ui;
  function C() { return ECM.CCSE; }
  function LES() { return ECM.CULTURE; }
  function areaLessons(a) { return U.filter(LES(), function (l) { return l.area === a; }); }
  function lq(id) { return U.filter(C().all, function (q) { return q.lesson === id; }); }

  /* ------------------------------ diagrams ------------------------------ */
  ui.diagram = function (d) {
    if (!d) return '';
    var h = '<div class="diagram">';
    if (d.type === 'timeline') {
      h += '<div class="tl">' + U.map(d.items, function (x) { return '<div class="tl-i"><span class="tl-d" dir="ltr">' + esc(x[0]) + '</span><span class="tl-t">' + rich(x[1]) + '</span></div>'; }).join('') + '</div>';
    } else if (d.type === 'flow') {
      h += '<div class="flow">' + U.map(d.items, function (x, i) { return '<div class="fl-i"><span class="fl-n">' + (i + 1) + '</span><span class="es" lang="es" dir="ltr">' + esc(x) + '</span></div>'; }).join('<div class="fl-a">↓</div>') + '</div>';
    } else if (d.type === 'levels') {
      h += U.map(d.items, function (x, i) { return '<div class="lv-i" style="margin-right:' + (i * 22) + 'px"><b class="es" lang="es">' + esc(x[0]) + '</b><span class="small"> — ' + rich(x[1]) + '</span></div>'; }).join('');
    } else if (d.type === 'boxes') {
      h += '<div class="d-title es" lang="es">' + esc(d.title || '') + '</div><div class="row">' + U.map(d.items, function (x) { return '<div class="col"><div class="d-box"><b class="es" lang="es">' + esc(x[0]) + '</b><div class="small">' + rich(x[1]) + '</div></div></div>'; }).join('') + '</div>';
    } else if (d.type === 'powers') {
      h += '<div class="d-title">فصل السلطات في إسبانيا</div><div class="d-crown">👑 <span class="es" lang="es">La Corona</span> — رئيس الدولة، يحكّم ويمثّل</div><div class="row">' +
        U.map([['Poder legislativo', 'Cortes Generales (Congreso + Senado)', 'يصنع القوانين'], ['Poder ejecutivo', 'Gobierno (Presidente + ministros)', 'يحكم وينفّذ'], ['Poder judicial', 'Jueces y tribunales (CGPJ los gobierna)', 'يحكم في النزاعات']], function (x) {
          return '<div class="col"><div class="d-box"><span class="eyebrow">' + esc(x[0]) + '</span><b class="es" lang="es">' + esc(x[1]) + '</b><div class="small">' + esc(x[2]) + '</div></div></div>';
        }).join('') + '</div><div class="d-crown" style="background:#EAF5EF">⚖ <span class="es" lang="es">Tribunal Constitucional</span> — يحمي الدستور (خارج السلطة القضائية)</div>';
    }
    return h + '</div>';
  };

  /* ------------------------------ hub ------------------------------ */
  function hub(el) {
    ECM.app.crumbs([{ t: 'الجنسية الإسبانية' }]);
    var exams = ECM.ccseExams(), sims = U.filter(exams, function (e) { return e.kind === 'ccse'; });
    var qs = ECM.store.state.qstats, answered = U.filter(C().all, function (q) { return qs[q.id]; }).length;
    var read = U.filter(LES(), function (l) { return ECM.store.state.culture[l.id]; }).length;
    var off = ECM.store.state.official, offDone = U.filter(U.keys(off), function (k) { return off[k]; }).length;
    var rd = ECM.readiness.ccse();
    var h = ui.hero('congreso', 'CIUDADANÍA ESPAÑOLA · CCSE', 'الجنسية الإسبانية',
      'كل ما تحتاجه لاجتياز امتحان المعارف الدستورية والاجتماعية (CCSE): تعلّم أولًا في أكاديمية الثقافة، ثم تدرّب في بنك الأسئلة، ثم اختبر نفسك بالمحاكاة الكاملة.', '', 'hero');
    h += '<div class="row mt24">' + U.map([
      ['#/cultura', 'retiro', 'دروس الثقافة والجنسية', 'Academia de Cultura y Ciudadanía', LES().length + ' درسًا في المحاور الخمسة · قرأت ' + read],
      ['#/ccse', 'congreso', 'امتحانات الجنسية CCSE', 'Simulacros del examen', '50 محاكاة كاملة · أنجزت ' + sims.length],
      ['#/banco', 'salamanca', 'بنك أسئلة الجنسية', 'Banco de preguntas', C().all.length + ' سؤالًا أصليًا · أجبت عن ' + answered + ' · متابعة 315 سؤالًا رسميًا']
    ], function (x) {
      return '<div class="c3"><a class="tile" href="' + x[0] + '"><div class="ph" style="' + ui.photoStyle(x[1], true) + '"></div><div class="body"><h3>' + x[2] + '</h3><p class="es" lang="es" dir="ltr">' + x[3] + '</p><div class="meta">' + x[4] + ' ←</div></div></a></div>';
    }).join('') + '</div>';
    // recommendations
    var st = ECM.ccseLessonStats(), weak = U.filter(U.keys(st), function (k) { return st[k].w > 0 && st[k].r / (st[k].r + st[k].w) < 0.75; });
    weak.sort(function (a, b) { return st[a].r / (st[a].r + st[a].w) - st[b].r / (st[b].r + st[b].w); });
    var unread = U.filter(LES(), function (l) { return !ECM.store.state.culture[l.id]; });
    h += '<div class="row"><div class="c23"><div class="card gold"><h3>توصيات مبنية على أخطائك الفعلية</h3>' +
      (weak.length ? U.map(weak.slice(0, 5), function (k) { var l = C().lesson(k), p = U.pct(st[k].r, st[k].r + st[k].w); return '<div class="flex wrap mb8"><span class="grow">📖 <a href="#/cultura/' + k + '">' + esc(l.ar) + '</a> <span class="small muted">— صحيح ' + p + '%</span></span><a class="btn sm" href="#/banco/leccion/' + k + '">تدرّب</a></div>'; }).join('')
        : '<p>' + (answered ? 'ممتاز، لا توجد دروس ضعيفة حاليًا. استمر في المحاكاة.' : 'لا توجد أخطاء بعد. ابدأ بالدرس الأول ثم تدرّب على أسئلته.') + '</p>' + (unread[0] ? '<a class="btn" href="#/cultura/' + unread[0].id + '">ابدأ: ' + esc(unread[0].ar) + '</a>' : '')) + '</div></div>' +
      '<div class="c3"><div class="card navy"><span class="eyebrow">جاهزيتك</span><h2>' + rd.pct + '%</h2><p class="muted">' + esc(rd.note) + '</p>' + ui.bar(rd.pct, 'gold') +
      '<p class="small muted mt8">متابعة الأسئلة الرسمية: ' + offDone + ' / ' + C().official.total + '</p><a class="btn light sm" href="#/cobertura">قائمة تغطية المنهج</a></div></div></div>';
    h += '<div class="card"><h3>سجل امتحانات الجنسية فقط</h3>' + ECM.historyTable(exams.slice(0, 10)) + '</div>';
    el.innerHTML = h;
  }

  /* ------------------------------ academy ------------------------------ */
  function academy(el) {
    ECM.app.crumbs([{ t: 'الجنسية', href: '#/ciudadania' }, { t: 'دروس الثقافة والجنسية' }]);
    var h = ui.hero('retiro', 'ACADEMIA DE CULTURA Y CIUDADANÍA', 'دروس الثقافة والجنسية الإسبانية',
      'منهج كامل مرتب وفق المحاور الخمسة لامتحان CCSE في دليل معهد ثربانتس 2026: شرح عربي مفصّل، مصطلحات، جداول، خرائط ومخططات، معلومات للحفظ، ومفاهيم يكثر الخلط بينها — ثم أسئلة تدريبية لكل درس.');
    U.each([1, 2, 3, 4, 5], function (a) {
      var ls = areaLessons(a), done = U.filter(ls, function (l) { return ECM.store.state.culture[l.id]; }).length;
      h += ui.secTitle('<span class="lvl">' + a + '</span> ' + esc(C().areaAr[a]), '<span class="small muted es" lang="es">' + esc(C().areaNames[a]) + ' · ' + done + '/' + ls.length + '</span>');
      h += '<div class="row">' + U.map(ls, function (l) {
        var r = ECM.store.state.culture[l.id];
        return '<div class="c3"><a class="tile" href="#/cultura/' + l.id + '"><div class="ph" style="height:110px;' + ui.photoStyle(l.photo, true) + '"><span class="tag ' + (r ? '' : 'light') + '">' + (r ? 'تمت القراءة ✓' : 'لم يُقرأ') + '</span></div><div class="body"><h3 style="font-size:17px">' + esc(l.ar) + '</h3><p class="es small" lang="es" dir="ltr">' + esc(l.es) + '</p><div class="meta">' + lq(l.id).length + ' سؤالًا مرتبطًا</div></div></a></div>';
      }).join('') + '</div>';
    });
    el.innerHTML = h;
  }

  function lesson(el, id) {
    var l = C().lesson(id);
    if (!l) { academy(el); return; }
    ECM.app.crumbs([{ t: 'الجنسية', href: '#/ciudadania' }, { t: 'دروس الثقافة', href: '#/cultura' }, { t: l.ar }]);
    var rec = ECM.store.state.culture[l.id] || (ECM.store.state.culture[l.id] = { at: new Date().toISOString() });
    ECM.store.save();
    var all = areaLessons(l.area), idx = all.indexOf(l), prev = all[idx - 1], next = all[idx + 1];
    var qn = lq(l.id).length;
    var h = ui.hero(l.photo, 'CCSE · TAREA ' + l.area + ' · ' + C().areaNames[l.area].toUpperCase(), esc(l.ar), '<span class="es" lang="es" dir="ltr" style="color:#E9C987;font-size:19px">' + esc(l.es) + '</span>',
      '<div class="btns flex wrap mt16"><a class="btn gold" href="#/banco/leccion/' + l.id + '">✎ تدرّب على أسئلة هذا الدرس (' + qn + ')</a></div>');
    var body = '<section class="lsec"><h3><span class="sn">١</span> الشرح</h3><p>' + rich(l.intro) + '</p></section>';
    if (l.background) body += '<section class="lsec"><h3><span class="sn">٢</span> الخلفية التاريخية والمؤسسية</h3><div class="rule navy">' + rich(l.background) + '</div></section>';
    U.each(l.sections || [], function (s, i) { body += '<section class="lsec"><h3><span class="sn">' + (i + 3) + '</span> ' + esc(s.h) + '</h3><p>' + rich(s.b) + '</p></section>'; });
    if (l.map) body += '<section class="lsec"><h3>🗺 الخريطة</h3><div class="map-box"><img src="img/photos/' + ECM.photos[l.map.photo].file + '" alt="خريطة" loading="lazy"></div><p class="small muted">' + esc(l.map.note) + ' — ' + esc(ECM.photos[l.map.photo].credit || '') + '</p></section>';
    if (l.diagram) body += '<section class="lsec"><h3>📊 مخطط توضيحي</h3>' + ui.diagram(l.diagram) + '</section>';
    U.each(l.tables || [], function (t) { body += '<section class="lsec"><h3>📋 ' + esc(t.title) + '</h3>' + ui.table(t.head, t.rows, t.es) + '</section>'; });
    if (l.examples && l.examples.length) body += '<section class="lsec"><h3>🇪🇸 أمثلة من المجتمع الإسباني</h3>' + ui.examples(l.examples) + '</section>';
    if (l.confused && l.confused.length) body += '<section class="lsec"><h3>⚠ مفاهيم يكثر الخلط بينها</h3>' + U.map(l.confused, function (c) {
      return '<div class="cmp-card"><div class="cmp-a es" lang="es" dir="ltr">' + esc(c[0]) + '</div><div class="cmp-vs">≠</div><div class="cmp-b es" lang="es" dir="ltr">' + esc(c[1]) + '</div>' + (c[2] ? '<div class="cmp-x small">' + rich(c[2]) + '</div>' : '') + '</div>';
    }).join('') + '</section>';
    var side = '<div class="card gold"><h3>⭐ احفظ هذه المعلومات</h3>' + ui.examples(l.memorize) + '</div>' +
      '<div class="card"><h3>المصطلحات</h3><div class="tbl-wrap"><table class="tbl"><tbody>' + U.map(l.terms, function (x) { var p = x.split('|'); return '<tr><td class="es-cell" lang="es">' + esc(p[0]) + '</td><td>' + esc(p[1]) + '</td><td style="width:36px">' + U.say(p[0]) + '</td></tr>'; }).join('') + '</tbody></table></div></div>' +
      '<div class="card navy"><h3>اختبر فهمك</h3><p class="muted">' + qn + ' سؤالًا أصليًا مرتبطًا بهذا الدرس، مع شرح لكل إجابة.</p><a class="btn gold" href="#/banco/leccion/' + l.id + '">تدرّب على أسئلة هذا الدرس</a></div>' +
      '<div class="flex between">' + (prev ? '<a class="btn ghost sm" href="#/cultura/' + prev.id + '">→ السابق</a>' : '<span></span>') + (next ? '<a class="btn ghost sm" href="#/cultura/' + next.id + '">التالي ←</a>' : '') + '</div>';
    h += '<div class="row mt24"><div class="c23"><div class="card lesson-body">' + body + '</div></div><div class="c3">' + side + '</div></div>';
    el.innerHTML = h;
  }

  /* ------------------------------ question bank ------------------------------ */
  var filt = { area: 0, diff: 0, status: 'all' };
  function bank(el, args) {
    ECM.app.crumbs([{ t: 'الجنسية', href: '#/ciudadania' }, { t: 'بنك أسئلة الجنسية' }]);
    if (args[0] === 'oficial') { official(el); return; }
    if (args[0] === 'leccion') { practice(el, lq(args[1]), 'أسئلة الدرس: ' + (C().lesson(args[1]) || {}).ar, '#/cultura/' + args[1]); return; }
    if (args[0] === 'dificiles') { practice(el, C().hard(), 'الأسئلة الصعبة عليك', '#/banco'); return; }
    var qs = ECM.store.state.qstats, all = C().all;
    function pool() {
      return U.filter(all, function (q) {
        if (filt.area && q.tarea !== filt.area) return false;
        if (filt.diff && q.diff !== filt.diff) return false;
        var s = C().status(q.id);
        if (filt.status === 'new' && s !== 'new') return false;
        if (filt.status === 'bad' && s !== 'bad') return false;
        if (filt.status === 'ok' && s !== 'ok') return false;
        return true;
      });
    }
    var cnt = { ok: 0, bad: 0, new: 0 }; U.each(all, function (q) { cnt[C().status(q.id)]++; });
    var h = '<div class="card navy"><span class="eyebrow">BANCO DE PREGUNTAS CCSE</span><h1 style="color:#fff">بنك أسئلة الجنسية</h1><p class="muted">' + all.length + ' سؤالًا تدريبيًا <b>أصليًا</b> مرتبة حسب المحور والدرس والصعوبة، مع متابعة ما أجبت عنه صحيحًا أو خطأ.</p>' +
      '<div class="row mt16"><div class="c4"><div class="stat" style="padding:0"><div class="v" style="color:#fff">' + cnt.ok + '</div><div class="l" style="color:#B5C2D6">آخر إجابة صحيحة</div></div></div><div class="c4"><div class="stat" style="padding:0"><div class="v" style="color:#F2A49E">' + cnt.bad + '</div><div class="l" style="color:#B5C2D6">آخر إجابة خطأ</div></div></div><div class="c4"><div class="stat" style="padding:0"><div class="v" style="color:#fff">' + cnt.new + '</div><div class="l" style="color:#B5C2D6">لم تُجب عنه بعد</div></div></div>' +
      '<div class="c4"><a class="btn gold" href="#/banco/dificiles">مراجعة الأسئلة الصعبة (' + C().hard().length + ')</a></div></div></div>';
    h += '<div class="card"><h3>الأسئلة الرسمية (دليل CCSE 2026)</h3><p>الدليل الرسمي <b>«' + esc(C().official.title) + '»</b> الصادر عن معهد ثربانتس يحتوي <b>' + C().official.total + ' سؤالًا رسميًا</b> (المهمة 1: 134، 2: 36، 3: 25، 4: 36، 5: 84). هذه الأسئلة محمية بحقوق النشر، لذلك <b>لا يعيد التطبيق نشر نصوصها</b>. يمكنك حلّها من الدليل الرسمي المجاني وتسجيل نتيجتك لكل سؤال برقمه هنا.</p>' +
      '<div class="btns flex wrap"><a class="btn" href="' + esc(C().official.url) + '" target="_blank" rel="noopener">⬇ فتح الدليل الرسمي (PDF)</a><a class="btn navy" href="#/banco/oficial">متابعة الأسئلة الرسمية برقمها</a></div></div>';
    h += '<div class="card"><h3>تدرّب حسب اختيارك</h3><div class="row">' +
      '<div class="c3"><label class="lbl">المحور (Tarea)</label><select class="inp" id="fa"><option value="0">كل المحاور</option>' + U.map([1, 2, 3, 4, 5], function (a) { return '<option value="' + a + '"' + (filt.area === a ? ' selected' : '') + '>' + a + ' — ' + esc(C().areaAr[a]) + '</option>'; }).join('') + '</select></div>' +
      '<div class="c3"><label class="lbl">الصعوبة</label><select class="inp" id="fd"><option value="0">الكل</option><option value="1"' + (filt.diff === 1 ? ' selected' : '') + '>سهل</option><option value="2"' + (filt.diff === 2 ? ' selected' : '') + '>متوسط</option><option value="3"' + (filt.diff === 3 ? ' selected' : '') + '>صعب</option></select></div>' +
      '<div class="c3"><label class="lbl">الحالة</label><select class="inp" id="fs"><option value="all">الكل</option><option value="new"' + (filt.status === 'new' ? ' selected' : '') + '>لم أُجب عنها</option><option value="bad"' + (filt.status === 'bad' ? ' selected' : '') + '>أخطأت فيها</option><option value="ok"' + (filt.status === 'ok' ? ' selected' : '') + '>أجبت صحيحًا</option></select></div></div>' +
      '<p id="fc" class="mt8"></p><div class="btns flex wrap"><button class="btn lg" id="go20">ابدأ 20 سؤالًا عشوائيًا</button><button class="btn ghost" id="goAll">كل الأسئلة المختارة</button></div></div>';
    h += '<div class="card"><h3>حسب الدرس</h3>' + U.map([1, 2, 3, 4, 5], function (a) {
      return '<h4 class="mt16">' + a + ' — ' + esc(C().areaAr[a]) + '</h4>' + U.map(areaLessons(a), function (l) {
        var q = lq(l.id), b = U.filter(q, function (x) { return C().status(x.id) === 'bad'; }).length, o = U.filter(q, function (x) { return C().status(x.id) === 'ok'; }).length;
        return '<a class="lesson-row" href="#/banco/leccion/' + l.id + '"><span class="num">' + q.length + '</span><span class="t"><b>' + esc(l.ar) + '</b><small>✓ ' + o + ' · ✗ ' + b + '</small></span></a>';
      }).join('');
    }).join('') + '</div>';
    el.innerHTML = h;
    function upd() { filt.area = Number(U.$('#fa', el).value); filt.diff = Number(U.$('#fd', el).value); filt.status = U.$('#fs', el).value; U.$('#fc', el).innerHTML = 'عدد الأسئلة المطابقة: <b>' + pool().length + '</b>'; }
    U.each(['#fa', '#fd', '#fs'], function (s) { U.$(s, el).onchange = upd; }); upd();
    U.$('#go20', el).onclick = function () { practice(el, U.shuffle(pool()).slice(0, 20), 'تدريب: 20 سؤالًا', '#/banco'); };
    U.$('#goAll', el).onclick = function () { practice(el, pool(), 'تدريب: كل الأسئلة المختارة', '#/banco'); };
  }

  function practice(el, qs, title, back) {
    if (!qs.length) { el.innerHTML = '<div class="card empty"><div class="big">✓</div><h3>لا توجد أسئلة مطابقة</h3><p class="muted">تظهر هنا الأسئلة التي أخطأت فيها أكثر مما أصبت. أجب عن أسئلة البنك أو المحاكاة أولًا، ثم ارجع إلى هذه الصفحة.</p><a class="btn" href="' + back + '">رجوع</a></div>'; return; }
    el.innerHTML = '<div class="notice blue mb16">' + esc(title) + ' · ' + qs.length + ' سؤالًا. التصحيح بعد كل إجابة مع شرح عربي ورابط الدرس. <b>أسئلة أصلية</b> وليست أسئلة الدليل الرسمي.</div><div id="bq"></div>';
    ui.quiz(U.$('#bq', el), qs, {
      mode: 'practice', title: title, onAnswer: C().track, lessonLink: ECM.ccseLessonLink,
      record: { kind: 'ccse-bank', ref: title, title: 'بنك الجنسية · ' + title, level: 'CCSE' },
      onRetry: function () { practice(el, qs, title, back); }, onExit: function () { ECM.app.go(back); }
    });
  }

  /* -------------------------- official question tracker -------------------------- */
  function official(el) {
    ECM.app.crumbs([{ t: 'الجنسية', href: '#/ciudadania' }, { t: 'بنك الأسئلة', href: '#/banco' }, { t: 'الأسئلة الرسمية' }]);
    var O = C().official, st = ECM.store.state.official;
    var h = '<div class="card navy"><span class="eyebrow">' + esc(O.title.toUpperCase()) + '</span><h1 style="color:#fff">متابعة الأسئلة الرسمية (315)</h1><p class="muted">افتح الدليل الرسمي، أجب عن الأسئلة على ورقة، ثم قارن بمفتاح الإجابات في الدليل. اضغط على رقم السؤال لتسجيل النتيجة: مرة = صحيح ✓، مرتان = خطأ ✗، ثلاث مرات = إلغاء.</p>' +
      '<a class="btn gold" href="' + esc(O.url) + '" target="_blank" rel="noopener">⬇ فتح الدليل الرسمي (PDF)</a></div>';
    U.each([1, 2, 3, 4, 5], function (t) {
      var r = O.ranges[t], ok = 0, bad = 0;
      for (var i = r[0]; i <= r[1]; i++) { if (st[i] === 1) ok++; if (st[i] === 2) bad++; }
      h += '<div class="card"><div class="card-head"><h3>Tarea ' + t + ' — ' + esc(C().areaAr[t]) + '</h3><span class="tag">✓ ' + ok + '</span> <span class="tag red" style="margin-right:6px">✗ ' + bad + '</span></div>' +
        '<p class="small muted">الأسئلة ' + r[0] + '–' + r[1] + ' (' + O.perTarea[t] + ' سؤالًا). إن أخطأت، راجع دروس هذا المحور: ' + U.map(areaLessons(t).slice(0, 4), function (l) { return '<a href="#/cultura/' + l.id + '">' + esc(l.ar) + '</a>'; }).join('، ') + '…</p><div class="qnav" data-t="' + t + '">';
      for (var j = r[0]; j <= r[1]; j++) h += '<button type="button" data-oq="' + j + '" class="' + (st[j] === 1 ? 'r' : (st[j] === 2 ? 'w' : '')) + '" style="width:54px">' + j + '</button>';
      h += '</div></div>';
    });
    el.innerHTML = h;
    el.onclick = function (e) {
      var b = e.target.closest ? e.target.closest('[data-oq]') : null; if (!b) return;
      var id = b.getAttribute('data-oq'), v = ((st[id] || 0) + 1) % 3;
      if (v) st[id] = v; else delete st[id];
      b.className = v === 1 ? 'r' : (v === 2 ? 'w' : ''); ECM.store.save();
    };
  }

  /* ------------------------------ coverage checklist ------------------------------ */
  function coverage(el) {
    ECM.app.crumbs([{ t: 'الجنسية', href: '#/ciudadania' }, { t: 'تغطية المنهج' }]);
    var O = C().official;
    var h = '<div class="card navy"><span class="eyebrow">COBERTURA DEL PROGRAMA</span><h1 style="color:#fff">قائمة تغطية منهج CCSE</h1><p class="muted">مقارنة ما هو منفّذ فعلًا في التطبيق بمحاور الدليل الرسمي «' + esc(O.title) + '» (' + esc(O.publisher) + '، ' + O.year + ').</p></div>';
    h += '<div class="card"><h3>ما تم التحقق منه من الدليل الرسمي</h3><ul><li>السنة المطبّقة: <b>' + O.year + '</b>؛ عدد الأسئلة الرسمية: <b>' + O.total + '</b> (1: 134، 2: 36، 3: 25، 4: 36، 5: 84). تحقّقنا من ذلك آليًا بقراءة ملف الدليل الرسمي.</li>' +
      '<li>استُخرجت من الدليل <b>المعلومات التي تختبرها الأسئلة</b> (أسماء، أماكن، تواريخ)، وكُتبت الدروس والأسئلة الأصلية لتغطيتها، دون نسخ صياغة الأسئلة الرسمية.</li>' +
      '<li><b>غير منفّذ:</b> نصوص الأسئلة الرسمية الـ 315 وإجاباتها لا يعيد التطبيق نشرها لأنها محمية بحقوق النشر لمعهد ثربانتس، والتطبيق منشور علنًا. الحل: صفحة <a href="#/banco/oficial">متابعة الأسئلة الرسمية</a> مع رابط الدليل المجاني.</li></ul></div>';
    U.each([1, 2, 3, 4, 5], function (a) {
      var ls = areaLessons(a), qn = U.filter(C().all, function (q) { return q.tarea === a; }).length;
      h += '<div class="card"><div class="card-head"><h3>Tarea ' + a + ' — <span class="es" lang="es">' + esc(C().areaNames[a]) + '</span></h3><span class="tag">' + ls.length + ' دروس · ' + qn + ' سؤالًا أصليًا</span></div>' +
        '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>الدرس</th><th>شرح</th><th>جداول/مخططات</th><th>أسئلة</th><th>قرأته؟</th></tr></thead><tbody>' + U.map(ls, function (l) {
          return '<tr><td><a href="#/cultura/' + l.id + '">' + esc(l.ar) + '</a></td><td>✓</td><td>' + ((l.tables || []).length + (l.diagram ? 1 : 0) + (l.map ? 1 : 0)) + '</td><td>' + lq(l.id).length + '</td><td>' + (ECM.store.state.culture[l.id] ? '✓' : '—') + '</td></tr>';
        }).join('') + '</tbody></table></div><p class="small muted">الأسئلة الرسمية لهذا المحور في الدليل: ' + O.perTarea[a] + '.</p></div>';
    });
    el.innerHTML = h;
  }

  ECM.views.ciudadania = function (el) { hub(el); };
  ECM.views.cultura = function (el, args) { if (args[0]) lesson(el, args[0]); else academy(el); };
  ECM.views.banco = function (el, args) { el.onclick = null; bank(el, args); };
  ECM.views.cobertura = function (el) { coverage(el); };
})(window.ECM);
