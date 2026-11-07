/* Learn Spanish A1–B2: levels, grammar lessons, skills units.
 * Lesson data format (js/data/grammar-*.js):
 *  { id, lv, t (Spanish title), ta (Arabic title), sum, meaning, when[], why, steps[], formula,
 *    tables[ {v, t, title?, sub?} | {head[], rows[][], es[]} ], forms{aff[],neg[],q[]},
 *    ex['es|ar'], err[[wrong,right,why]], cmp{t,x,rows?}, tip, pr[practice] }            */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, rich = U.rich, ui = ECM.ui;

  var LEVELS = [
    { id: 'A1', name: 'المستوى المبتدئ', es: 'Acceso', photo: 'plazamayor', desc: 'أساس متين: الأفعال الأساسية، الحاضر، الوصف، الحياة اليومية.' },
    { id: 'A2', name: 'المستوى الأساسي', es: 'Plataforma', photo: 'palacioreal', desc: 'الماضي بأنواعه، الضمائر، الأمر، المستقبل — مستوى امتحان الجنسية.' },
    { id: 'B1', name: 'المستوى المتوسط', es: 'Umbral', photo: 'sevilla', desc: 'الـ subjuntivo، الرأي، الشرط، الكلام المنقول: التواصل بثقة.' },
    { id: 'B2', name: 'المستوى فوق المتوسط', es: 'Avanzado', photo: 'toledo', desc: 'الدقة والطلاقة: الشرط بأنواعه، توافق الأزمنة، النصوص الرسمية.' }
  ];

  var course = ECM.course = {
    LEVELS: LEVELS,
    level: function (id) { return LEVELS.find(function (l) { return l.id === id; }); },
    lessonsOf: function (lv) { return U.filter(ECM.GRAMMAR || [], function (l) { return l.lv === lv; }); },
    lesson: function (id) { return (ECM.GRAMMAR || []).find(function (l) { return l.id === id; }); },
    skillsOf: function (lv) { return U.filter(ECM.SKILLS || [], function (s) { return s.lv === lv; }); },
    skill: function (id) { return (ECM.SKILLS || []).find(function (s) { return s.id === id; }); },
    isDone: function (id) { var r = ECM.store.state.lessons[id]; return !!(r && r.done); },
    progress: function (lv) {
      var items = course.lessonsOf(lv).concat(course.skillsOf(lv)), d = 0;
      for (var i = 0; i < items.length; i++) if (course.isDone(items[i].id)) d++;
      return { done: d, total: items.length, pct: U.pct(d, items.length) };
    },
    next: function () {
      var lv = ECM.store.state.profile.level || 'A1';
      var order = ['A1', 'A2', 'B1', 'B2'], start = order.indexOf(lv);
      for (var k = start; k < order.length; k++) {
        var ls = course.lessonsOf(order[k]);
        for (var i = 0; i < ls.length; i++) if (!course.isDone(ls[i].id)) return ls[i];
      }
      return null;
    },
    practiceQuestions: function (l) {
      return U.map(l.pr || [], function (p, i) {
        var q = { id: l.id + '-p' + i, topic: l.ta, level: l.lv, src: 'درس: ' + l.ta };
        if (typeof p[1] === 'string') { q.type = 'type'; q.stem = p[0]; q.answer = p[1]; q.why = p[2]; q.alt = p[3] || []; }
        else { q.type = 'mc'; q.stem = p[0]; q.opts = p[1]; q.answer = p[2]; q.why = p[3]; }
        q.stemLang = /[؀-ۿ]/.test(q.stem) ? 'ar' : 'es';
        if (q.stemLang === 'ar') q.noSay = true;
        return q;
      });
    }
  };

  function levelCard(L) {
    var p = course.progress(L.id), cur = ECM.store.state.profile.level === L.id;
    return '<div class="c4"><a class="tile" href="#/learn/' + L.id + '"><div class="ph" style="' + ui.photoStyle(L.photo, true) + '"><span class="tag light">' + (cur ? 'مستواك الحالي' : L.es) + '</span></div>' +
      '<div class="body"><h3><span class="lvl">' + L.id + '</span> ' + L.name + '</h3><p>' + L.desc + '</p>' +
      '<div class="mt8">' + ui.bar(p.pct) + '</div><div class="meta">' + p.done + ' / ' + p.total + ' وحدة مكتملة</div></div></a></div>';
  }

  /* ------------------------- overview ------------------------- */
  function overview(el) {
    ECM.app.crumbs([{ t: 'تعلّم الإسبانية A1–B2' }]);
    var total = (ECM.GRAMMAR || []).length + (ECM.SKILLS || []).length;
    var h = ui.hero('granvia', 'CURSO COMPLETO · A1 — B2', 'تعلّم الإسبانية من الأساس حتى B2',
      'منهج متدرّج وفق الإطار الأوروبي المرجعي: ' + (ECM.GRAMMAR || []).length + ' درسًا في القواعد مشروحًا كأستاذ جامعي، ووحدات للقراءة والاستماع والكتابة والمحادثة، وتقييم لكل مستوى.');
    h += ui.secTitle('اختر المستوى');
    h += '<div class="row">' + U.map(LEVELS, levelCard).join('') + '</div>';
    h += '<div class="row"><div class="c23"><div class="card"><h3>كيف يعمل المنهج؟</h3><ol class="steps">' +
      '<li><b>الدرس:</b> معنى القاعدة، متى ولماذا تُستخدم، خطوات البناء، جداول التصريف، 15 مثالًا على الأقل مع الصوت والترجمة، الأخطاء الشائعة، والمقارنة مع القواعد المشابهة.</li>' +
      '<li><b>التطبيق:</b> تمارين بتصحيح فوري وشرح عربي مفصّل. أخطاؤك تُحفظ تلقائيًا في «دفتر أخطائي».</li>' +
      '<li><b>المهارات:</b> نصوص للقراءة، حوارات للاستماع، مهام كتابة بنماذج إجابة، ومحادثة صوتية.</li>' +
      '<li><b>التقييم:</b> اختبار شامل لكل مستوى في «مركز الامتحانات».</li></ol></div></div>' +
      '<div class="c3"><div class="card navy"><span class="eyebrow">مستواك الحالي</span><h2>' + esc(ECM.store.state.profile.level) + '</h2><p class="muted">غيّر مستواك متى شئت؛ التوصيات في الصفحة الرئيسية تتبعه.</p>' +
      '<div class="btns flex wrap">' + U.map(LEVELS, function (L) { return '<button class="btn sm ' + (ECM.store.state.profile.level === L.id ? 'gold' : 'light') + '" data-setlv="' + L.id + '">' + L.id + '</button>'; }).join('') + '</div>' +
      '<p class="small muted mt8">إجمالي الوحدات: ' + total + '</p></div></div></div>';
    el.innerHTML = h;
    bindSetLevel(el);
  }
  function bindSetLevel(el) {
    U.each(U.$$('[data-setlv]', el), function (b) {
      b.onclick = function () { ECM.store.state.profile.level = b.getAttribute('data-setlv'); ECM.store.save(); ui.toast('تم تحديد مستواك: ' + b.getAttribute('data-setlv')); ECM.app.route(); };
    });
  }

  /* ------------------------- level page ------------------------- */
  function levelPage(el, lv, tab) {
    var L = course.level(lv);
    if (!L) { overview(el); return; }
    tab = tab || 'grammar';
    ECM.app.crumbs([{ t: 'تعلّم الإسبانية', href: '#/learn' }, { t: 'المستوى ' + lv }]);
    var p = course.progress(lv);
    var h = ui.hero(L.photo, 'NIVEL ' + lv + ' · ' + L.es.toUpperCase(), '<span class="lvl">' + lv + '</span> ' + L.name, L.desc,
      '<div class="mt16" style="max-width:420px">' + ui.bar(p.pct, 'gold') + '<div class="small mt8">' + p.done + ' من ' + p.total + ' وحدة مكتملة</div></div>');
    h += '<div class="tabs mt24">' +
      '<a href="#/learn/' + lv + '" class="' + (tab === 'grammar' ? 'on' : '') + '">القواعد (' + course.lessonsOf(lv).length + ')</a>' +
      '<a href="#/learn/' + lv + '/skills" class="' + (tab === 'skills' ? 'on' : '') + '">المهارات: قراءة · استماع · كتابة (' + course.skillsOf(lv).length + ')</a>' +
      '<a href="#/vocab/' + lv + '">المفردات</a><a href="#/exams/level/' + lv + '">امتحانات ' + lv + '</a><a href="#/speak">المحادثة</a></div>';
    if (tab === 'skills') {
      var sk = course.skillsOf(lv);
      var kinds = { reading: 'قراءة · Comprensión de lectura', listening: 'استماع · Comprensión auditiva', writing: 'كتابة · Expresión escrita' };
      for (var k in kinds) {
        var list = U.filter(sk, function (s) { return s.kind === k; });
        if (!list.length) continue;
        h += '<h3 class="mt16">' + kinds[k] + '</h3>';
        h += U.map(list, function (s, i) { return row('#/learn/' + lv + '/skill/' + s.id, i + 1, s.ta, s.t, course.isDone(s.id), s.kind === 'writing' ? 'مهمة كتابة مع نموذج' : (s.q ? s.q.length + ' أسئلة' : '')); }).join('');
      }
      if (!sk.length) h += '<div class="card empty">لا توجد وحدات مهارات لهذا المستوى بعد.</div>';
    } else {
      var ls = course.lessonsOf(lv);
      h += '<div class="row"><div class="c23">' + U.map(ls, function (l, i) {
        var r = ECM.store.state.lessons[l.id];
        return row('#/learn/' + lv + '/' + l.id, i + 1, l.ta, l.t, !!(r && r.done), r && r.done ? ('نتيجة التطبيق: ' + r.score + '%') : '');
      }).join('') + '</div><div class="c3"><div class="card gold"><h3>نصيحة الأستاذ</h3><p>ادرس كل درس على مرحلتين: اقرأ الشرح والأمثلة بصوت عالٍ، ثم عد في يوم آخر لحلّ التطبيق. التكرار المتباعد يثبّت القاعدة.</p><a class="btn ghost sm" href="#/verbos">افتح مختبر الأفعال</a></div></div></div>';
    }
    el.innerHTML = h;
  }
  function row(href, n, title, sub, done, meta) {
    return '<a class="lesson-row' + (done ? ' done' : '') + '" href="' + href + '"><span class="num">' + (done ? '✓' : n) + '</span><span class="t"><b>' + esc(title) + '</b><small class="es" lang="es" dir="ltr">' + esc(sub) + '</small></span>' +
      (meta ? '<span class="small muted">' + esc(meta) + '</span>' : '') + '<span aria-hidden="true" style="margin-right:10px;color:#B8924A">‹</span></a>';
  }

  /* ------------------------- grammar lesson ------------------------- */
  function lessonPage(el, lv, id) {
    var l = course.lesson(id);
    if (!l) { levelPage(el, lv); return; }
    var ls = course.lessonsOf(l.lv), idx = ls.indexOf(l), prev = ls[idx - 1], nxt = ls[idx + 1];
    ECM.app.crumbs([{ t: 'تعلّم الإسبانية', href: '#/learn' }, { t: l.lv, href: '#/learn/' + l.lv }, { t: l.ta }]);
    var rec = ECM.store.state.lessons[l.id] || {};
    if (!rec.viewed) { rec.viewed = new Date().toISOString(); ECM.store.state.lessons[l.id] = rec; ECM.store.save(); }

    var sec = [];
    function S(key, title, body) { sec.push({ k: key, t: title }); return '<section id="s-' + key + '"><h3>' + title + '</h3>' + body + '</section>'; }

    var X = (ECM.GRAMMAR_EXTRA || {})[l.id] || {}, VL = ECM.verbLab, VB = ECM.verbs, br = VL && VL.bidi ? VL.bidi : rich;
    var TMAP = { presente: 'presente', indefinido: 'indefinido', imperfecto: 'imperfecto', perfecto: 'perfecto', pluscuamperfecto: 'pluscuamperfecto', futuro: 'futuro',
      condicional: 'condicional', subjuntivo: 'subjPresente', subjImperfecto: 'subjImperfectoRa', imperativo: 'imperativo', imperativoNeg: 'imperativoNeg' };
    var lessonTenses = [], lessonVerbs = [];
    U.each(l.tables || [], function (t) {
      if (!t.v) return;
      var k = TMAP[t.t]; if (k && lessonTenses.indexOf(k) < 0) lessonTenses.push(k);
      if (lessonVerbs.indexOf(t.v + '|' + (k || 'presente')) < 0) lessonVerbs.push(t.v + '|' + (k || 'presente'));
    });
    var body = '';
    var TE = (ECM.GRAMMAR_TEACHER || {})[l.id];
    var teacher = TE ? '<div class="teacher"><div class="teacher-h">🎓 الأستاذ بيشرحلك خطوة بخطوة</div>' +
      U.map([['what', 'شو يعني هالقاعدة؟'], ['how', 'كيف بتشتغل؟'], ['why', 'ليش بيتغيّر التصريف؟'], ['when', 'إيمتى منستعملها؟']], function (x) {
        return TE[x[0]] ? '<div class="teacher-step"><b>' + x[1] + '</b><p>' + br(TE[x[0]]) + '</p></div>' : '';
      }).join('') + '</div>' : '';
    var lv = lessonVerbList(l), dict = '';
    if (lv.length && VB && VB.meaningOf) dict = '<div class="vgloss-list mt16"><h4>📖 قاموس أفعال هذا الدرس (' + lv.length + ')</h4><p class="small muted">اضغط على أي فعل لترى مثالين مع الترجمة.</p>' + U.map(lv, function (v) {
      var exs = VB.examplesOf(v);
      return '<details><summary><b lang="es" dir="ltr">' + esc(v) + '</b> = ' + esc(VB.meaningOf(v)) + ' ' + U.say(v, '', 'sm') + '</summary>' +
        U.map(exs, function (x) { return ui.verbExample(x); }).join('') + '<a class="small" href="#/verbos/v/' + esc(v) + '">جدول تصريف ' + esc(v) + ' الكامل ←</a></details>';
    }).join('') + '</div>';
    body += S('meaning', '١. الشرح بالعربية', teacher + '<p>' + br(l.meaning) + '</p>' + dict);
    if (X.def) body += S('def', '٢. التعريف بالإسبانية والمصطلحات', '<div class="es-def" lang="es" dir="ltr">' + esc(X.def) + ' ' + U.say(X.def, '', 'sm') + '</div>' +
      (X.terms ? ui.table(['Término (المصطلح)', 'بالعربية'], U.map(X.terms, function (t) { return [t[0], t[1]]; }), [0]) : ''));
    body += S('when', '٣. متى ولماذا نستخدمها؟', '<ul>' + U.map(l.when, function (w) { return '<li>' + br(w) + '</li>'; }).join('') + '</ul>' + '<div class="rule navy mt8"><b>لماذا؟ منطق القاعدة</b><br>' + br(l.why) + '</div>');
    body += S('steps', '٤. خطوات البناء', (l.formula ? '<div class="formula" lang="es">' + esc(l.formula).replace(/ \+ /g, ' <span class="plus">+</span> ') + '</div>' : '') +
      '<ol class="steps">' + U.map(l.steps, function (s) { return '<li>' + br(s) + '</li>'; }).join('') + '</ol>');
    var conj = '', other = '', model = '';
    U.each(l.tables || [], function (t) {
      if (t.v) conj += ui.conjTable(t.v, t.t, { title: t.title || t.v, sub: t.sub });
      else other += ui.table(t.head, t.rows, t.es);
    });
    if (VL && lessonTenses.length) U.each(lessonTenses.slice(0, 2), function (k) { model += '<h4 class="mt16">' + esc(VB.TENSES[k].es) + ' — ' + esc(VB.TENSES[k].ar) + '</h4>' + VL.modelTable(k); });
    body += S('tables', '٥. جداول التصريف والمقارنة', model + (conj ? '<p class="small muted mt16">الصيغ <span style="color:#B4423A;font-weight:700">بالأحمر</span> شاذة (تختلف عن النمط المنتظم). اضغط ▶ للاستماع.</p><div class="conj-grid">' + conj + '</div>' : '') + other +
      (!model && !conj && !other ? '<p class="muted">هذا الدرس لا يحتاج جدول تصريف؛ انظر الأمثلة والمقارنة أدناه.</p>' : ''));
    var regBody = X.reg ? '<div class="rule">' + br(X.reg) + '</div>' : '';
    if (VL && lessonVerbs.length) regBody += '<p class="mt8">أفعال هذا الدرس في مختبر الأفعال:</p><div class="flex wrap gapx">' + U.map(lessonVerbs, function (x) {
      var pz = x.split('|'), c = VB.known(pz[0]) ? VB.classify(pz[0]) : null;
      return '<a class="vocab-chip" href="#/verbos/v/' + esc(pz[0]) + '/' + pz[1] + '"><b lang="es">' + esc(pz[0]) + '</b> ' + (c ? VL.clsTag(c) : '') + '</a>';
    }).join('') + '</div>';
    body += S('regular', '٦. المنتظم والشاذّ', regBody || '<p class="muted">—</p>');
    if (l.forms) {
      var f = l.forms, fh = '<div class="row">';
      U.each([['aff', 'الإثبات', 'green'], ['neg', 'النفي', ''], ['q', 'السؤال', 'navy']], function (x) {
        if (!f[x[0]]) return;
        fh += '<div class="c3"><div class="rule ' + x[2] + '" style="height:100%"><b>' + x[1] + '</b>' + ui.examples(f[x[0]]) + '</div></div>';
      });
      body += S('forms', '٧. الإثبات والنفي والسؤال', fh + '</div>');
    }
    body += S('examples', '٨. أمثلة من الحياة (' + l.ex.length + ')', '<div class="flex wrap mb8"><button class="btn sm ghost" data-playall="1">▶ استمع إلى كل الأمثلة</button><span class="small muted" style="margin-right:10px">نصيحة: كرّر كل جملة بصوت عالٍ بعد سماعها.</span></div>' + ui.examples(l.ex));
    if (l.err && l.err.length) body += S('errors', '٩. الأخطاء الشائعة والاستثناءات', U.map(l.err, function (e) {
      return '<div class="mistake-pair"><span class="wrong" lang="es">✗ ' + esc(e[0]) + '</span><span class="right" lang="es">✓ ' + esc(e[1]) + '</span><div class="small mt8">' + br(e[2]) + '</div></div>';
    }).join(''));
    if (l.cmp) body += S('compare', '١٠. مقارنة بقاعدة مشابهة: ' + esc(l.cmp.t), '<p>' + br(l.cmp.x) + '</p>' + (l.cmp.rows ? ui.table(['الإسبانية', 'المعنى'], l.cmp.rows, [0]) : '') +
      (l.tip ? '<div class="rule green mt16"><b>💡 نصيحة عملية</b><br>' + rich(l.tip) + '</div>' : ''));
    body += S('practice', '١١. تمارين تفاعلية', '<p>' + (l.pr ? l.pr.length : 0) + ' أسئلة متدرّجة؛ بعد كل إجابة يظهر التصحيح والشرح بالعربية. يكتمل الدرس عند إنهاء التمارين.</p><div id="practice"><button class="btn lg" id="startPr">ابدأ التمارين</button>' +
      (rec.done ? ' <span class="tag">مكتمل · أفضل نتيجة ' + (rec.best || rec.score) + '%</span>' : '') + '</div>');
    body += S('mywrong', '١٢. شرح إجاباتك الخاطئة', '<div id="myWrong">' + wrongAnswers(l) + '</div>');
    body += S('final', '١٣. التقييم النهائي', X.fin ? '<p>' + X.fin.length + ' أسئلة جديدة بلا تصحيح فوري (مثل الامتحان)، ثم تقرير مفصّل. النجاح: 4 من 5.</p><div id="finalBox"><button class="btn lg gold" id="startFin">ابدأ التقييم النهائي</button>' +
      (rec.finalBest !== undefined ? ' <span class="tag ' + (rec.finalBest >= 80 ? '' : 'red') + '">أفضل نتيجة ' + rec.finalBest + '%</span>' : '') + '</div>' : '<p class="muted">—</p>');

    var toc = '<div class="card" style="position:-webkit-sticky;position:sticky;top:76px"><span class="eyebrow">محتوى الدرس</span><ul class="list small">' +
      U.map(sec, function (s) { return '<li style="padding:6px 0"><a href="javascript:void(0)" data-scroll="s-' + s.k + '" style="text-decoration:none;color:#0E2240">' + s.t + '</a></li>'; }).join('') + '</ul>' +
      '<div class="mt16">' + (prev ? '<a class="btn ghost sm" href="#/learn/' + l.lv + '/' + prev.id + '">→ السابق</a> ' : '') + (nxt ? '<a class="btn ghost sm" href="#/learn/' + l.lv + '/' + nxt.id + '">التالي ←</a>' : '') + '</div>' +
      '<div class="mt16"><a class="btn sm navy" href="#/verbos">مختبر الأفعال</a></div></div>';

    el.innerHTML = '<div class="card navy"><span class="eyebrow">' + l.lv + ' · الدرس ' + (idx + 1) + ' من ' + ls.length + '</span>' +
      '<h1 style="color:#fff;margin-bottom:4px">' + esc(l.ta) + '</h1><div class="display-es es" lang="es" style="font-size:20px;color:#E9C987">' + esc(l.t) + '</div>' +
      '<p class="muted mt8 mb0">' + rich(l.sum) + '</p></div>' +
      '<div class="row mt16"><div class="c23"><div class="card lesson-body">' + body + '</div></div><div class="c3">' + toc + '</div></div>';

    U.each(U.$$('[data-scroll]', el), function (a) { a.onclick = function () { var t = document.getElementById(a.getAttribute('data-scroll')); if (t) t.scrollIntoView(); }; });
    var pa = U.$('[data-playall]', el);
    if (pa) pa.onclick = function () { ECM.tts.speakLines(U.map(l.ex, function (x) { return { text: x.split('|')[0] }; })); };
    U.$('#startPr', el).onclick = function () { runPractice(l); };
    var fb = U.$('#startFin', el); if (fb) fb.onclick = function () { runFinal(l); };
  }

  /* every Spanish verb a lesson mentions (its tables first), known to the verb dictionary */
  function lessonVerbList(l) {
    var VB = ECM.verbs, out = [], seen = {};
    if (!VB || !VB.meaningOf) return out;
    function add(v) { v = String(v).toLowerCase(); if (!seen[v] && v !== 'regular' && VB.meaningOf(v)) { seen[v] = 1; out.push(v); } }
    U.each(l.tables || [], function (t) { if (t.v) add(t.v); });
    var text = JSON.stringify([l.t, l.meaning, l.when, l.why, l.steps, l.formula, l.tables, l.forms, l.ex, l.err, l.cmp, l.tip]).replace(/a pesar/gi, '');
    var re = /(^|[^a-záéíóúñü])([a-záéíóúñ]{2,}(?:ar|er|ir|ír)(?:se)?)(?![a-záéíóúñü])/gi, m;
    while ((m = re.exec(text))) add(m[2]);
    return out;
  }

  /* the learner's real wrong answers in this lesson (practice + final), with the correct answer and explanation */
  function wrongAnswers(l) {
    var ms = ECM.store.state.mistakes || {}, out = [];
    for (var k in ms) if (ms.hasOwnProperty(k) && k.indexOf(l.id + '-') === 0) out.push(ms[k]);
    if (!out.length) return '<p class="muted">لا توجد أخطاء مسجّلة في هذا الدرس بعد. حين تخطئ في التمارين أو التقييم النهائي تظهر هنا إجابتك، والإجابة الصحيحة، وسبب الخطأ — وتُحفظ أيضًا في «دفتر أخطائي» للمراجعة المتدرّجة.</p>';
    out.sort(function (a, b) { return (b.lastAt || '') < (a.lastAt || '') ? -1 : 1; });
    return U.map(out, function (m) {
      var q = m.q || {}, right = q.type === 'type' ? [].concat(q.answer)[0] : (q.opts ? q.opts[q.answer] : '');
      return '<div class="mistake-pair' + (m.fixed ? ' fixed' : '') + '"><div class="small muted">' + (m.fixed ? '✓ صُحّح بالمراجعة' : 'خطأ ' + m.count + ' مرة') + '</div><div lang="es" dir="ltr" class="es">' + esc(q.stem || '') + '</div>' +
        '<span class="wrong" lang="es">✗ إجابتك: ' + esc((m.yours || [])[0] || '') + '</span><span class="right" lang="es">✓ ' + esc(right) + '</span><div class="small mt8">' + rich(q.why || '') + '</div></div>';
    }).join('') + '<a class="btn sm mt8" href="#/mistakes">راجع في دفتر الأخطاء</a>';
  }
  function runFinal(l) {
    var box = document.getElementById('finalBox'), X = ECM.GRAMMAR_EXTRA[l.id];
    var qs = U.map(X.fin, function (q, i) { return { id: l.id + '-f' + i, type: 'mc', stem: q[0], stemLang: /[؀-ۿ]/.test(q[0]) ? 'ar' : 'es', noSay: true, opts: q[1], answer: q[2], why: q[3], topic: l.ta, level: l.lv, src: 'تقييم نهائي: ' + l.ta }; });
    ui.quiz(box, qs, {
      mode: 'exam', title: 'التقييم النهائي: ' + l.ta, passCount: 4,
      onFinish: function (r) {
        var rec = ECM.store.state.lessons[l.id] || {};
        rec.finalBest = Math.max(rec.finalBest || 0, r.pct); rec.finalLast = r.pct; rec.finalAt = new Date().toISOString();
        ECM.store.state.lessons[l.id] = rec; ECM.store.save();
        var w = document.getElementById('myWrong'); if (w) w.innerHTML = wrongAnswers(l);
      },
      onRetry: function () { runFinal(l); }, onExit: function () { ECM.app.route(); }
    });
    box.scrollIntoView();
  }

  function runPractice(l) {
    var box = document.getElementById('practice');
    ui.quiz(box, course.practiceQuestions(l), {
      mode: 'practice', title: 'تطبيق: ' + l.ta,
      onFinish: function (r) {
        var rec = ECM.store.state.lessons[l.id] || {};
        rec.done = rec.done || new Date().toISOString();
        rec.score = r.pct; rec.best = Math.max(rec.best || 0, r.pct); rec.attempts = (rec.attempts || 0) + 1; rec.last = new Date().toISOString();
        ECM.store.state.lessons[l.id] = rec;
        ECM.store.touch('lesson'); ECM.store.save(); ECM.achievements.check();
        var w = document.getElementById('myWrong'); if (w) w.innerHTML = wrongAnswers(l);
        var nxt = course.lessonsOf(l.lv)[course.lessonsOf(l.lv).indexOf(l) + 1];
        box.insertAdjacentHTML('beforeend', '<div class="card emerald"><b>تم حفظ إنجازك ✓</b> ' + (r.pct < 70 ? 'ننصحك بمراجعة قسم «الأخطاء الشائعة» ثم إعادة التطبيق.' : 'أحسنت!') +
          (nxt ? ' <a class="btn sm" href="#/learn/' + nxt.lv + '/' + nxt.id + '">الدرس التالي ←</a>' : '') + '</div>');
      },
      onRetry: function () { runPractice(l); },
      onExit: function () { ECM.app.route(); }
    });
    box.scrollIntoView();
  }

  /* ------------------------- skills unit ------------------------- */
  function skillPage(el, lv, id) {
    var s = course.skill(id);
    if (!s) { levelPage(el, lv, 'skills'); return; }
    ECM.app.crumbs([{ t: 'تعلّم الإسبانية', href: '#/learn' }, { t: s.lv, href: '#/learn/' + s.lv + '/skills' }, { t: s.ta }]);
    var kindName = { reading: 'القراءة', listening: 'الاستماع', writing: 'الكتابة' }[s.kind];
    var h = '<div class="card navy"><span class="eyebrow">' + s.lv + ' · ' + kindName + '</span><h1 style="color:#fff">' + esc(s.ta) + '</h1><div class="es display-es" lang="es" style="color:#E9C987;font-size:19px">' + esc(s.t) + '</div>' +
      (s.intro ? '<p class="muted mt8 mb0">' + rich(s.intro) + '</p>' : '') + '</div>';
    if (s.kind === 'reading') {
      h += '<div class="row mt16"><div class="c2"><div class="card"><h3>النص</h3><div class="reading-text" lang="es">' + U.es(s.text).replace(/\n/g, '<br>') + '</div>' +
        '<div class="mt8">' + U.say(s.text, 'استمع إلى النص') + '</div>' + (s.gloss ? '<h4 class="mt16">مفردات مساعدة</h4>' + U.map(s.gloss, function (g) { var p = g.split('|'); return '<span class="vocab-chip"><span class="es" lang="es">' + esc(p[0]) + '</span> — ' + esc(p[1]) + '</span>'; }).join('') : '') +
        '</div></div><div class="c2"><div id="skq"></div></div></div>';
    } else if (s.kind === 'listening') {
      h += '<div class="row mt16"><div class="c2"><div class="card"><h3>التسجيل</h3><p>استمع إلى الحوار مرتين على الأقل قبل الإجابة. النص مخفي، ويمكنك إظهاره بعد الإجابة.</p>' +
        '<div class="btns flex wrap"><button class="btn" id="playDlg">▶ تشغيل الحوار</button><button class="btn ghost" id="stopDlg">■ إيقاف</button><button class="btn ghost" id="showDlg">إظهار النص</button></div>' +
        (!ECM.tts.supported() ? '<div class="notice red mt8">متصفحك لا يدعم القراءة الصوتية؛ اضغط «إظهار النص» للتدرّب على الفهم قراءةً.</div>' : '') +
        '<div id="dlgText" class="hidden mt16">' + U.map(s.lines, function (x) { return '<p class="mb8"><span class="speaker">' + esc(x[0]) + ':</span> <span class="es" lang="es" dir="ltr">' + esc(x[1]) + '</span></p>'; }).join('') + '</div>' +
        '</div></div><div class="c2"><div id="skq"></div></div></div>';
    } else if (s.kind === 'writing') {
      var saved = (ECM.store.state.lessons[s.id] || {}).text || '';
      h += '<div class="row mt16"><div class="c2"><div class="card"><h3>المهمة</h3><div class="reading-text" lang="es">' + U.es(s.task).replace(/\n/g, '<br>') + '</div><p class="mt8">' + rich(s.taskAr) + '</p>' +
        '<h4>قائمة التحقق</h4><ul>' + U.map(s.check, function (c) { return '<li>' + rich(c) + '</li>'; }).join('') + '</ul>' +
        (s.useful ? '<h4>عبارات مفيدة</h4>' + U.map(s.useful, function (g) { var p = g.split('|'); return '<span class="vocab-chip"><span class="es" lang="es">' + esc(p[0]) + '</span> — ' + esc(p[1]) + '</span>'; }).join('') : '') + '</div></div>' +
        '<div class="c2"><div class="card"><h3>نصّك</h3><textarea class="inp es-in" id="wText" lang="es" rows="10" placeholder="Escribe aquí tu texto…">' + esc(saved) + '</textarea>' +
        '<div class="flex between small muted mt8"><span id="wCount"></span><span>العدد المطلوب: ' + s.words + ' كلمة</span></div>' +
        '<div class="btns flex wrap mt8"><button class="btn" id="wCheck">راجع نصّي</button><button class="btn ghost" id="wModel">أظهر نموذج الإجابة</button></div><div id="wOut"></div></div></div></div>';
    }
    el.innerHTML = h;
    if (s.kind === 'reading' || s.kind === 'listening') {
      var qs = U.map(s.q, function (q, i) {
        return { id: s.id + '-q' + i, type: q[1] === 'tf' ? 'tf' : 'mc', stem: q[0], stemLang: /[؀-ۿ]/.test(q[0]) ? 'ar' : 'es', noSay: true, opts: q[1] === 'tf' ? null : q[1], answer: q[2], why: q[3], topic: s.ta, level: s.lv, src: kindName + ': ' + s.ta };
      });
      var startQuiz = function () {
        ui.quiz(document.getElementById('skq'), qs, {
          mode: 'practice', title: 'أسئلة الفهم',
          onFinish: function (r) { markSkill(s, r.pct); },
          onRetry: startQuiz
        });
      };
      startQuiz();
      if (s.kind === 'listening') {
        var lines = U.map(s.lines, function (x, i) { return { text: x[1], pitch: x[2] || (i % 2 ? 0.85 : 1.1) }; });
        U.$('#playDlg', el).onclick = function () { ECM.tts.speakLines(lines); };
        U.$('#stopDlg', el).onclick = function () { ECM.tts.stop(); };
        U.$('#showDlg', el).onclick = function () { U.$('#dlgText', el).className = 'mt16'; };
      }
    } else if (s.kind === 'writing') {
      var ta = U.$('#wText', el), cnt = U.$('#wCount', el);
      var upd = function () { var n = U.filter(ta.value.split(/\s+/), function (w) { return w; }).length; cnt.innerHTML = n + ' كلمة'; };
      ta.oninput = U.debounce(function () { var r = ECM.store.state.lessons[s.id] || {}; r.text = ta.value; ECM.store.state.lessons[s.id] = r; ECM.store.save(); upd(); }, 500);
      upd();
      U.$('#wCheck', el).onclick = function () {
        var res = ECM.writingCheck ? ECM.writingCheck(ta.value, s) : null;
        U.$('#wOut', el).innerHTML = res || '';
        if (ta.value.split(/\s+/).length >= Math.round(s.words * 0.6)) markSkill(s, null);
      };
      U.$('#wModel', el).onclick = function () {
        U.$('#wOut', el).innerHTML = '<div class="fb info"><b class="t">نموذج إجابة (واحد من إجابات كثيرة ممكنة)</b><div class="reading-text" lang="es">' + U.es(s.model).replace(/\n/g, '<br>') + '</div>' + U.say(s.model, 'استمع') + (s.modelAr ? '<p class="mt8">' + rich(s.modelAr) + '</p>' : '') + '</div>';
      };
    }
  }
  function markSkill(s, pct) {
    var r = ECM.store.state.lessons[s.id] || {};
    r.done = r.done || new Date().toISOString();
    if (pct !== null) { r.score = pct; r.best = Math.max(r.best || 0, pct); }
    ECM.store.state.lessons[s.id] = r; ECM.store.touch('skill'); ECM.store.save(); ECM.achievements.check();
  }

  ECM.views.learn = function (el, args) {
    if (!args.length) overview(el);
    else if (args.length === 1) levelPage(el, args[0]);
    else if (args[1] === 'skills') levelPage(el, args[0], 'skills');
    else if (args[1] === 'skill') skillPage(el, args[0], args[2]);
    else lessonPage(el, args[0], args[1]);
  };
})(window.ECM);
