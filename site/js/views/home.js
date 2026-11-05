/* Home dashboard for Mones. All figures come from real saved activity. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, ui = ECM.ui;

  var R = ECM.readiness = {};
  function avg(a) { return a.length ? Math.round(U.sum(a) / a.length) : null; }
  R.ccse = function () {
    var s = ECM.store.state;
    var sims = U.filter(s.exams, function (e) { return e.kind === 'ccse'; }).slice(0, 5);
    var practice = U.filter(s.exams, function (e) { return e.kind === 'ccse-topic' || e.kind === 'ccse-bank'; }).slice(0, 10);
    var simAvg = avg(U.map(sims, function (e) { return e.pct; }));
    var prAvg = avg(U.map(practice, function (e) { return e.pct; }));
    if (simAvg === null && prAvg === null) return { pct: 0, sims: 0, note: 'لم تُجرِ أي تدريب CCSE بعد.' };
    var pct = simAvg !== null ? (prAvg !== null ? Math.round(simAvg * 0.75 + prAvg * 0.25) : simAvg) : Math.round(prAvg * 0.6);
    return { pct: pct, sims: sims.length, last: sims[0], note: simAvg !== null ? 'متوسط آخر ' + sims.length + ' محاكاة: ' + simAvg + '% (النجاح يتطلب 60%: 15 من 25).' : 'بناءً على التدريب حسب الموضوعات فقط؛ أجرِ محاكاة كاملة لتقدير أدق.' };
  };
  R.dele = function () {
    var s = ECM.store.state, parts = [];
    var ls = ECM.course.lessonsOf('A1').concat(ECM.course.lessonsOf('A2'));
    var done = U.filter(ls, function (l) { return ECM.course.isDone(l.id); }).length;
    var lessonsPct = U.pct(done, ls.length);
    var dele = U.filter(s.exams, function (e) { return e.kind === 'dele'; }).slice(0, 8);
    var lvl = U.filter(s.exams, function (e) { return e.kind === 'level' && (e.level === 'A2' || e.level === 'A1'); }).slice(0, 5);
    var dAvg = avg(U.map(dele, function (e) { return e.pct; })), lAvg = avg(U.map(lvl, function (e) { return e.pct; }));
    var w = 0, t = 0;
    t += lessonsPct * 0.3; w += 0.3;
    if (dAvg !== null) { t += dAvg * 0.45; w += 0.45; }
    if (lAvg !== null) { t += lAvg * 0.25; w += 0.25; }
    var pct = Math.round(t / (w || 1) * Math.min(1, w + 0.25));
    parts.push('دروس A1–A2 المكتملة: ' + done + '/' + ls.length);
    parts.push(dAvg !== null ? 'متوسط تدريبات DELE: ' + dAvg + '%' : 'لم تُجرِ تدريبات DELE بعد');
    parts.push(lAvg !== null ? 'متوسط امتحانات A1/A2: ' + lAvg + '%' : 'لم تُجرِ امتحانات المستوى بعد');
    return { pct: Math.min(100, pct), parts: parts };
  };

  function stat(icon, v, l, href) {
    return '<div class="c4"><a href="' + href + '" style="text-decoration:none;color:inherit"><div class="card stat"><span class="ic">' + icon + '</span><div class="v">' + v + '</div><div class="l">' + l + '</div></div></a></div>';
  }

  // Dashboard groups. Language exams and citizenship (CCSE) are deliberately separate areas.
  var GROUPS = [
    { t: 'تعلّم الإسبانية', es: 'Aprender español', cls: 'c4', items: [
      ['learn', 'granvia', 'دروس القواعد A1–B2', 'كل قاعدة مشروحة كأستاذ: جداول، أمثلة، أخطاء، تمارين وتقييم.'],
      ['verbos', 'toledo', 'مختبر الأفعال', 'تصريف كامل في كل الأزمنة، بحث بالإسبانية أو العربية، مقارنات وتمارين.'],
      ['vocab', 'mercado', 'أكاديمية المفردات', 'بطاقات وتكرار متباعد حسب المواضيع.'],
      ['mistakes', 'street', 'دفتر أخطائي', 'أخطاؤك الحقيقية فقط، مع مراجعة متدرّجة.']] },
    { t: 'أ — امتحانات اللغة الإسبانية', es: 'Exámenes de lengua', cls: 'c2', items: [
      ['exams', 'palacioreal', 'مركز امتحانات اللغة', '250 نموذجًا: 50 لكل من A1 و A2 و B1 و B2 والمختلط — قواعد ومفردات وقراءة واستماع وكتابة ومحادثة.'],
      ['dele', 'salamanca', 'أكاديمية DELE A2', 'الأقسام الأربعة لامتحان معهد ثربانتس مع محاكاة كاملة.']] },
    { t: 'ب — الجنسية الإسبانية (CCSE)', es: 'Ciudadanía · CCSE', cls: 'c3', items: [
      ['cultura', 'prado', 'دروس الثقافة والجنسية', '32 درسًا مصوّرًا في المجالات الخمسة للدليل الرسمي، مع خرائط ومخططات.'],
      ['ccse', 'congreso', 'امتحانات الجنسية CCSE', '50 محاكاة كاملة: 25 سؤالًا، 45 دقيقة، النجاح 15.'],
      ['banco', 'senado', 'بنك أسئلة الجنسية', 'أسئلة تدريبية أصلية مصنّفة حسب الدرس والصعوبة، مع متتبّع أسئلة الدليل الرسمي.']] },
    { t: 'التطبيق العملي ومتابعتي', es: 'Práctica', cls: 'c3', items: [
      ['speak', 'cafe', 'استوديو المحادثة', 'تكلّم بالإسبانية واحصل على تصحيح بالعربية.'],
      ['adventures', 'metro', 'مغامرات في إسبانيا', 'مواقف حقيقية: المقهى، الطبيب، البنك، المترو…'],
      ['progress', 'retiro', 'تقدّمي', 'السجلّان المنفصلان، الإنجازات، والنسخ الاحتياطي.']] }
  ];
  function groupHtml(g) {
    return ui.secTitle(g.t, '<span class="small muted es" lang="es">' + g.es + '</span>') + '<div class="row">' + U.map(g.items, function (x) {
      return '<div class="' + g.cls + '"><a class="tile" href="#/' + x[0] + '"><div class="ph" style="height:118px;' + ui.photoStyle(x[1], true) + '"></div><div class="body"><h3 style="font-size:17px">' + x[2] + '</h3><p class="small">' + x[3] + '</p></div></a></div>';
    }).join('') + '</div>';
  }

  ECM.views.home = function (el) {
    ECM.app.crumbs([{ t: 'لوحة مؤنس' }]);
    var s = ECM.store.state, next = ECM.course.next();
    var doneLessons = U.filter(U.keys(s.lessons), function (k) { return s.lessons[k].done; }).length;
    var mastered = U.filter(U.keys(s.vocab), function (k) { return s.vocab[k].box >= 3; }).length;
    var openM = ECM.mistakes.open().length, dueM = ECM.mistakes.due().length;
    var ccse = R.ccse(), dele = R.dele(), citizen = Math.round((ccse.pct + dele.pct) / 2);
    var hour = new Date().getHours();
    var greet = hour < 12 ? 'صباح الخير' : (hour < 19 ? 'مساء الخير' : 'مساء النور');
    var greetEs = hour < 13 ? 'Buenos días' : (hour < 20 ? 'Buenas tardes' : 'Buenas noches');

    var h = '<section class="hero" style="' + ui.photoStyle('granvia') + ';min-height:360px"><div class="shade"></div><div class="inner">' +
      '<span class="eyebrow">' + greetEs.toUpperCase() + ', MONES · ' + esc(U.date(new Date().toISOString())) + '</span>' +
      '<h1>' + greet + ' يا مؤنس، أهلًا بعودتك</h1>' +
      '<p class="es display-es" lang="es" style="font-size:22px;color:#E9C987;display:block;text-align:right;direction:ltr;unicode-bidi:plaintext">Bienvenido de nuevo, Mones.</p>' +
      '<p>مستواك الحالي <span class="lvl">' + esc(s.profile.level) + '</span> — ' +
      (next ? 'درسك المقترح اليوم: <b>' + esc(next.ta) + '</b>' : 'أكملت جميع دروس القواعد! ركّز الآن على الامتحانات والمحادثة.') + '</p>' +
      '<div class="btns flex wrap mt16">' + (next ? '<a class="btn gold lg" href="#/learn/' + next.lv + '/' + next.id + '">تابع التعلّم ←</a>' : '<a class="btn gold lg" href="#/exams">مركز الامتحانات ←</a>') +
      '<a class="btn light lg" href="#/ciudadania">الجنسية CCSE</a>' + (dueM ? '<a class="btn light lg" href="#/mistakes">راجع ' + dueM + ' خطأ</a>' : '') + '</div></div>' + ui.photoCredit('granvia') + '</section>';

    // stats
    h += '<div class="row mt24">' +
      stat('✓', doneLessons, 'وحدة مكتملة', '#/learn') +
      stat('✎', s.exams.length, 'امتحان في السجل', '#/progress') +
      stat('✦', mastered, 'كلمة متقنة', '#/vocab') +
      stat('!', openM, 'خطأ يحتاج مراجعة', '#/mistakes') + '</div>';

    // readiness
    h += ui.secTitle('الاستعداد للجنسية الإسبانية', '<span class="small muted">تقدير داخلي مبني على نتائجك، وليس توقعًا رسميًا</span>');
    h += '<div class="row"><div class="c3"><div class="card center readiness">' + ui.ring(citizen, '#B8924A') + '<div class="lbl">التقدّم نحو الجنسية</div><p class="small muted">متوسط الاستعداد لامتحاني CCSE و DELE A2، وهما الشرطان اللغوي والثقافي.</p></div></div>' +
      '<div class="c3"><div class="card center readiness">' + ui.ring(dele.pct) + '<div class="lbl">جاهزية DELE A2</div><p class="small muted">' + U.map(dele.parts, esc).join('<br>') + '</p><a class="btn sm" href="#/dele">أكاديمية DELE</a></div></div>' +
      '<div class="c3"><div class="card center readiness">' + ui.ring(ccse.pct, ccse.pct >= 60 ? '#0E7C5A' : '#B4423A') + '<div class="lbl">جاهزية CCSE</div><p class="small muted">' + esc(ccse.note) + '</p><a class="btn sm" href="#/ccse/sim">محاكاة CCSE</a></div></div></div>';

    // continue + mistakes + history
    h += '<div class="row">';
    h += '<div class="c2"><div class="card"><div class="card-head"><h3>متابعة التعلّم</h3><a class="small" href="#/learn">كل المستويات</a></div>' +
      U.map(ECM.course.LEVELS, function (L) {
        var p = ECM.course.progress(L.id);
        return '<a href="#/learn/' + L.id + '" class="flex mb8" style="text-decoration:none;color:inherit"><span class="lvl" style="margin-left:10px">' + L.id + '</span><span class="grow">' + ui.bar(p.pct) + '</span><span class="small muted" style="width:80px;text-align:left">' + p.done + '/' + p.total + '</span></a>';
      }).join('') + '</div></div>';
    function recentList(list, empty, href) {
      return list.length ? '<ul class="list">' + U.map(list, function (e) {
        return '<li class="flex"><span class="grow"><b>' + esc(e.title || e.kind) + '</b><br><small class="muted">' + U.date(e.date) + '</small></span><span class="tag ' + (e.passed === false || e.pct < 60 ? 'red' : '') + '">' + e.score + '/' + e.total + ' · ' + e.pct + '%</span></li>';
      }).join('') + '</ul>' : '<div class="empty small">' + empty + ' <a href="' + href + '">ابدأ الآن</a></div>';
    }
    var isCit = function (e) { return /^ccse/.test(e.kind || ''); };
    var recL = U.filter(s.exams, function (e) { return !isCit(e); }).slice(0, 3), recC = U.filter(s.exams, isCit).slice(0, 3);
    h += '<div class="c2"><div class="card"><div class="card-head"><h3>آخر الامتحانات</h3><a class="small" href="#/progress">السجل الكامل</a></div>' +
      '<h4 class="mb8">🇪🇸 اللغة الإسبانية</h4>' + recentList(recL, 'لا امتحانات لغة بعد.', '#/exams') +
      '<h4 class="mb8 mt16">🏛 الجنسية CCSE</h4>' + recentList(recC, 'لا امتحانات CCSE بعد.', '#/ccse') + '</div></div>';
    h += '</div>';

    // sections (grouped)
    h += U.map(GROUPS, groupHtml).join('');

    // achievements
    var ach = U.filter(ECM.achievements.LIST, function (a) { return s.achievements[a.id]; });
    h += '<div class="row"><div class="c2"><div class="card gold"><h3>إنجازاتك (' + ach.length + ' من ' + ECM.achievements.LIST.length + ')</h3>' +
      (ach.length ? U.map(ach, function (a) { return '<span class="vocab-chip">🏅 <b>' + esc(a.t) + '</b></span>'; }).join('') : '<p class="muted">ستظهر هنا شاراتك بعد أول درس أو امتحان.</p>') + '</div></div>' +
      '<div class="c2"><div class="card emerald"><h3>خطة مقترحة لهذا الأسبوع</h3><ol class="mb0" style="padding-right:20px">' +
      '<li>درسان من القواعد مع التطبيق (' + esc(s.profile.level) + ').</li><li>محاكاة CCSE كاملة واحدة ومراجعة أخطائها.</li><li>قسم واحد من DELE A2 (قراءة أو استماع).</li><li>عشر دقائق يوميًا في استوديو المحادثة.</li><li>مراجعة دفتر الأخطاء كل يومين.</li></ol></div></div></div>';
    h += '<div class="foot">Español con Mones · صُمِّم خصيصًا لمؤنس · التقدّم محفوظ على هذا الجهاز — <a href="#/progress">أنشئ نسخة احتياطية</a></div>';
    el.innerHTML = h;
  };
})(window.ECM);
