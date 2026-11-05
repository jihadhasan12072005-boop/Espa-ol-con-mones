/* DELE A2 Academy: section guides, full four-skill simulations, section practice. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, rich = U.rich, ui = ECM.ui;
  function D() { return ECM.DELE; }
  function part(id) { return D().parts.find(function (p) { return p.id === id; }); }
  function sim(id) { return D().sims.find(function (s) { return s.id === id; }); }
  function rec(simId) { var s = ECM.store.state.dele; return s[simId] || (s[simId] = {}); }

  /* convert lectura / auditiva sections to quiz questions */
  function questions(S, pid) {
    var out = [];
    U.each(S[pid], function (T) {
      function push(row, extra, k) {
        var q = { id: 'dele-' + S.id + '-' + pid + '-' + T.tarea + '-' + k, type: 'mc', stem: row[0], stemLang: 'es', noSay: true, opts: row[1], answer: row[2], why: row[3],
          topic: (pid === 'lectura' ? 'القراءة' : 'الاستماع') + ' · المهمة ' + T.tarea, level: 'DELE A2', src: 'DELE A2 · ' + S.id, prompt: '<b>Tarea ' + T.tarea + ':</b> ' + esc(T.instr) };
        out.push(Object.assign(q, extra));
      }
      if (T.multi) U.each(T.blocks, function (b, i) { push(b.q, pid === 'lectura' ? { passage: b.text } : { audioLines: b.lines }, i); });
      else U.each(T.q, function (row, i) { push(row, pid === 'lectura' ? { passage: T.text } : { audioLines: T.lines }, i); });
    });
    return out;
  }

  function groups(r) {
    var g1 = (r.lectura ? r.lectura.points : 0) + (r.escrita ? r.escrita.points : 0);
    var g2 = (r.auditiva ? r.auditiva.points : 0) + (r.oral ? r.oral.points : 0);
    var complete = !!(r.lectura && r.escrita && r.auditiva && r.oral);
    return { g1: g1, g2: g2, complete: complete, pass: complete && g1 >= 30 && g2 >= 30 };
  }

  function overview(el) {
    ECM.app.crumbs([{ t: 'أكاديمية DELE A2' }]);
    var h = ui.hero('salamanca', 'DIPLOMA DE ESPAÑOL · NIVEL A2', 'أكاديمية DELE A2',
      'الشرط اللغوي للجنسية الإسبانية لمعظم المتقدمين. هنا تتعلّم شكل الامتحان واستراتيجياته، وتتدرّب على كل قسم، وتجري محاكاة كاملة بمهاراتها الأربع.', '', 'hero');
    h += '<div class="row mt24"><div class="c23"><div class="card"><span class="eyebrow">هيكل الامتحان</span><h3>أربعة اختبارات في مجموعتين</h3>' +
      ui.table(['الاختبار', 'المدة', 'المهام / الأسئلة', 'المجموعة'], U.map(D().parts, function (p) {
        return [p.ar + ' — [[' + p.es + ']]', p.min + ' دقيقة' + (p.prep ? ' (+' + p.prep + ' تحضير)' : ''), p.tareas + ' مهام' + (p.id === 'lectura' || p.id === 'auditiva' ? ' · ' + p.items + ' سؤالًا' : ''), 'المجموعة ' + p.group];
      })) + '<div class="notice blue">' + rich(D().spec.note) + '</div><div class="notice mt8">' + rich(D().spec.honest) + '</div></div></div>' +
      '<div class="c3"><div class="card navy"><span class="eyebrow">المحاكاة الكاملة</span><h3>نموذجان أصليان كاملان</h3><p class="muted">كل نموذج: 25 سؤال قراءة + 25 سؤال استماع + مهمتا كتابة + 4 مهام شفهية.</p>' +
      U.map(D().sims, function (S) { var g = groups(rec(S.id)); return '<a class="btn ' + (g.complete ? 'light' : 'gold') + '" style="display:block;margin-bottom:8px" href="#/dele/sim/' + S.id + '">' + esc(S.title) + (g.complete ? (g.pass ? ' ✓' : ' — أعد المحاولة') : '') + '</a>'; }).join('') +
      '<p class="small muted mt8">لتمارين القواعد والمفردات القصيرة استخدم <a href="#/exams/level/A2" style="color:#E9C987">نماذج A2</a> في مركز الامتحانات.</p></div></div></div>';
    h += ui.secTitle('الأقسام الأربعة: الشرح والاستراتيجيات');
    h += '<div class="row">' + U.map(D().parts, function (p) {
      return '<div class="c4"><a class="tile" href="#/dele/part/' + p.id + '"><div class="ph" style="' + ui.photoStyle(p.photo, true) + '"><span class="tag light">' + p.min + ' دقيقة</span></div><div class="body"><h3>' + esc(p.ar) + '</h3><p class="es" lang="es" dir="ltr">' + esc(p.es) + '</p><div class="meta">الشرح والتدريب ←</div></div></a></div>';
    }).join('') + '</div>';
    el.innerHTML = h;
  }

  function partPage(el, pid) {
    var p = part(pid);
    if (!p) { overview(el); return; }
    ECM.app.crumbs([{ t: 'DELE A2', href: '#/dele' }, { t: p.ar }]);
    var h = ui.hero(p.photo, 'DELE A2 · ' + p.es.toUpperCase(), esc(p.ar), esc(p.desc));
    h += '<div class="row mt24"><div class="c2"><div class="card"><h3>استراتيجيات النجاح</h3><ol class="steps">' + U.map(p.tips, function (t) { return '<li>' + rich(t) + '</li>'; }).join('') + '</ol></div></div>' +
      '<div class="c2"><div class="card"><h3>المهام في هذا القسم (كما في النماذج التدريبية)</h3><ul class="list">';
    var S0 = D().sims[0];
    U.each(S0[pid], function (T) { h += '<li><b>Tarea ' + T.tarea + ':</b> ' + esc(T.ar || T.title || '') + (T.instr ? '<div class="small es" lang="es" dir="ltr">' + esc(T.instr) + '</div>' : '') + (T.task ? '<div class="small muted">' + esc(T.taskAr || T.task) + '</div>' : '') + '</li>'; });
    h += '</ul></div><div class="card gold"><h3>تدرّب على هذا القسم</h3><p>كل نموذج يمكن التدرّب على أقسامه منفصلة بالوقت الرسمي.</p>' +
      U.map(D().sims, function (S) { var r = rec(S.id)[pid]; return '<a class="btn" style="margin:0 0 8px 8px" href="#/dele/sim/' + S.id + '/' + pid + '">' + esc(S.title) + (r ? ' · ' + r.points + '/25' : '') + '</a>'; }).join('') + '</div></div></div>';
    el.innerHTML = h;
  }

  function simPage(el, sid) {
    var S = sim(sid);
    if (!S) { overview(el); return; }
    ECM.app.crumbs([{ t: 'DELE A2', href: '#/dele' }, { t: S.title }]);
    var r = rec(sid), g = groups(r);
    var h = '<div class="card navy"><span class="eyebrow">SIMULACRO DELE A2 · ' + esc(S.id) + '</span><h1 style="color:#fff">' + esc(S.title) + ' — ' + esc(S.theme) + '</h1>' +
      '<p class="muted">أجرِ الأقسام الأربعة بالترتيب الرسمي: القراءة ← الاستماع ← الكتابة (في يوم الامتحان) ثم الشفهي. تُحفظ نتيجة كل قسم، وتُحسب النتيجة النهائية عند اكتمالها.</p></div>';
    h += '<div class="row mt16">' + U.map(['lectura', 'auditiva', 'escrita', 'oral'], function (pid) {
      var p = part(pid), pr = r[pid];
      return '<div class="c4"><div class="card" style="height:100%"><span class="eyebrow">المجموعة ' + p.group + '</span><h3>' + esc(p.ar) + '</h3><p class="small muted">' + p.min + ' دقيقة' + (p.prep ? ' + ' + p.prep + ' تحضير' : '') + '</p>' +
        (pr ? '<div class="stat" style="padding:0"><div class="v">' + pr.points + '<small class="muted" style="font-size:16px"> / 25</small></div><div class="l">' + (pid === 'escrita' || pid === 'oral' ? 'تقييم ذاتي' : 'تصحيح آلي') + ' · ' + U.date(pr.date) + '</div></div>' : '<p class="muted">لم يُنجز بعد</p>') +
        '<a class="btn ' + (pr ? 'ghost' : '') + ' mt8" href="#/dele/sim/' + sid + '/' + pid + '">' + (pr ? 'أعد القسم' : 'ابدأ القسم') + '</a></div></div>';
    }).join('') + '</div>';
    h += '<div class="card ' + (g.complete ? (g.pass ? 'emerald' : 'danger') : '') + '"><h3>النتيجة التقديرية</h3>' +
      '<div class="row"><div class="c2"><b>المجموعة 1</b> (القراءة + الكتابة): ' + g.g1 + ' / 50 ' + ui.bar(g.g1 * 2, g.g1 >= 30 ? '' : 'gold') + '</div><div class="c2"><b>المجموعة 2</b> (الاستماع + الشفهي): ' + g.g2 + ' / 50 ' + ui.bar(g.g2 * 2, g.g2 >= 30 ? '' : 'gold') + '</div></div>' +
      (g.complete ? (g.pass ? '<p><b>✓ نتيجة تقديرية ناجحة</b>: 30 نقطة أو أكثر في كل مجموعة.</p>' : '<p><b>لم تبلغ 30 نقطة في إحدى المجموعتين بعد.</b> ركّز على القسم الأضعف.</p>') : '<p class="muted">أكمل الأقسام الأربعة لرؤية النتيجة النهائية.</p>') +
      '<p class="small muted">القراءة والاستماع: نقطة لكل إجابة صحيحة (من 25). الكتابة والشفهي: تقييمك الذاتي بالمعايير. هذا تقدير للتدريب وليس درجة رسمية.</p></div>';
    el.innerHTML = h;
  }

  function runObjective(el, S, pid) {
    var p = part(pid), qs = questions(S, pid);
    el.innerHTML = '<div class="notice blue mb16">' + esc(S.title) + ' · ' + esc(p.ar) + ' · ' + qs.length + ' سؤالًا · ' + p.min + ' دقيقة. ' + (pid === 'auditiva' ? 'استمع لكل تسجيل مرتين قبل الإجابة.' : 'يمكنك التنقل بين الأسئلة قبل التسليم.') + '</div><div id="dq"></div>';
    ui.quiz(U.$('#dq', el), qs, {
      mode: 'exam', title: 'DELE A2 · ' + p.ar, timeLimit: p.min * 60, passPct: 60,
      passNote: 'في الامتحان الرسمي يُحسب هذا القسم ضمن مجموعة من 50 نقطة، والنجاح يتطلب 30 نقطة في المجموعة كاملة.',
      record: { kind: 'dele', ref: S.id + '-' + pid, title: 'DELE A2 ' + S.id + ' · ' + p.ar, level: 'A2' },
      onFinish: function (res) { rec(S.id)[pid] = { points: res.score, date: new Date().toISOString() }; ECM.store.save(); },
      onRetry: function () { runObjective(el, S, pid); },
      onExit: function () { ECM.app.go('#/dele/sim/' + S.id); }
    });
  }

  var RUBRIC = {
    escrita: ['أنجزتُ كل النقاط المطلوبة في المهمتين', 'النص مفهوم ومنظّم (تحية، فقرات، ختام)', 'استخدمتُ الأزمنة بشكل صحيح في الغالب', 'استخدمتُ مفردات مناسبة ومتنوّعة', 'الإملاء والنبرات والتوافق صحيحة في الغالب'],
    oral: ['أكملتُ المهام الأربع دون توقف طويل', 'كان كلامي مفهومًا (النطق والإيقاع)', 'استخدمتُ الأزمنة والتراكيب بشكل صحيح في الغالب', 'استخدمتُ مفردات كافية للموضوع', 'تفاعلتُ: سألتُ وأجبتُ في الحوار']
  };
  function rubricHtml(pid) {
    return '<div class="card gold"><h3>التقييم الذاتي (5 معايير × 5 نقاط = 25)</h3><p class="small">قيّم نفسك بصدق بعد مقارنة إجابتك بالنموذج. 0 = لا، 3 = إلى حدٍّ ما، 5 = نعم تمامًا.</p>' +
      U.map(RUBRIC[pid], function (c, i) {
        return '<div class="flex wrap mb8"><div class="grow">' + esc(c) + '</div><select class="inp" style="width:90px" data-rub="' + i + '">' + U.map([0, 1, 2, 3, 4, 5], function (v) { return '<option value="' + v + '"' + (v === 3 ? ' selected' : '') + '>' + v + '</option>'; }).join('') + '</select></div>';
      }).join('') + '<button class="btn" id="saveRub">احفظ نتيجة هذا القسم</button></div>';
  }
  function bindRubric(el, S, pid) {
    U.$('#saveRub', el).onclick = function () {
      var pts = 0; U.each(U.$$('[data-rub]', el), function (s) { pts += Number(s.value); });
      rec(S.id)[pid] = { points: pts, date: new Date().toISOString(), self: true };
      ECM.store.state.exams.unshift({ kind: 'dele-self', ref: S.id + '-' + pid, title: 'DELE A2 ' + S.id + ' · ' + part(pid).ar + ' (تقييم ذاتي)', score: pts, total: 25, pct: pts * 4, date: new Date().toISOString(), passed: null, topics: {} });
      ECM.store.touch('exam'); ECM.store.save();
      ui.toast('حُفظت النتيجة: ' + pts + '/25');
      ECM.app.go('#/dele/sim/' + S.id);
    };
  }

  function timerBar(min, label) {
    return '<div class="card navy tight flex between"><span><b>' + esc(label) + '</b></span><span class="timer" id="dTimer" data-end="' + (Date.now() + min * 60000) + '">' + U.mmss(min * 60) + '</span></div>';
  }
  var tick = null;
  function startTimer() {
    clearInterval(tick);
    tick = setInterval(function () {
      var t = document.getElementById('dTimer');
      if (!t) { clearInterval(tick); return; }
      var left = (Number(t.getAttribute('data-end')) - Date.now()) / 1000;
      t.innerHTML = U.mmss(left); t.className = 'timer' + (left < 300 ? ' low' : '');
      if (left <= 0) { clearInterval(tick); t.innerHTML = '0:00'; ui.toast('انتهى الوقت المحدد لهذا القسم.'); }
    }, 1000);
  }

  function runWriting(el, S) {
    var h = timerBar(45, S.title + ' · التعبير الكتابي (45 دقيقة)');
    U.each(S.escrita, function (T, i) {
      var key = 'dele-' + S.id + '-w' + i, saved = (ECM.store.state.lessons[key] || {}).text || '';
      h += '<div class="card"><span class="eyebrow">Tarea ' + T.tarea + '</span><div class="row"><div class="c2"><div class="reading-text" lang="es">' + U.es(T.task).replace(/\n/g, '<br>') + '</div><p class="mt8">' + rich(T.taskAr) + '</p>' +
        '<h4>قائمة التحقق</h4><ul>' + U.map(T.check, function (c) { return '<li>' + rich(c) + '</li>'; }).join('') + '</ul>' +
        '<h4>عبارات مفيدة</h4>' + U.map(T.useful, function (g) { var p = g.split('|'); return '<span class="vocab-chip"><span class="es" lang="es">' + esc(p[0]) + '</span> — ' + esc(p[1]) + '</span>'; }).join('') + '</div>' +
        '<div class="c2"><textarea class="inp es-in" rows="11" lang="es" data-w="' + i + '" placeholder="Escriba aquí…">' + esc(saved) + '</textarea><div class="small muted mt8" data-wc="' + i + '"></div>' +
        '<div class="btns flex wrap mt8"><button class="btn" data-chk="' + i + '">راجع نصّي</button><button class="btn ghost" data-model="' + i + '">نموذج الإجابة</button></div><div data-out="' + i + '"></div></div></div></div>';
    });
    h += rubricHtml('escrita');
    el.innerHTML = h; startTimer();
    U.each(U.$$('[data-w]', el), function (ta) {
      var i = ta.getAttribute('data-w'), T = S.escrita[i], key = 'dele-' + S.id + '-w' + i, wc = U.$('[data-wc="' + i + '"]', el);
      var upd = function () { wc.innerHTML = U.filter(ta.value.split(/\s+/), Boolean).length + ' كلمة (المطلوب نحو ' + T.words + ')'; };
      ta.oninput = U.debounce(function () { var r = ECM.store.state.lessons[key] || {}; r.text = ta.value; ECM.store.state.lessons[key] = r; ECM.store.save(); upd(); }, 500); upd();
    });
    U.each(U.$$('[data-chk]', el), function (b) { b.onclick = function () { var i = b.getAttribute('data-chk'); U.$('[data-out="' + i + '"]', el).innerHTML = ECM.writingCheck(U.$('[data-w="' + i + '"]', el).value, S.escrita[i]); }; });
    U.each(U.$$('[data-model]', el), function (b) { b.onclick = function () { var T = S.escrita[b.getAttribute('data-model')]; U.$('[data-out="' + b.getAttribute('data-model') + '"]', el).innerHTML = '<div class="fb info"><b class="t">نموذج إجابة</b><div class="reading-text" lang="es">' + U.es(T.model).replace(/\n/g, '<br>') + '</div>' + U.say(T.model, 'استمع') + '<p class="mt8">' + rich(T.modelAr) + '</p></div>'; }; });
    bindRubric(el, S, 'escrita');
  }

  function runOral(el, S) {
    var h = timerBar(15, S.title + ' · التحضير (15 دقيقة) ثم المقابلة') +
      '<div class="notice blue">في الامتحان الحقيقي: 15 دقيقة تحضير للمهمتين 1 و2، ثم نحو 15 دقيقة مع الممتحِن. هنا تستطيع تسجيل إجاباتك بالميكروفون (إن كان متصفحك يدعم ذلك) أو كتابتها، ثم مقارنتها بالنموذج.</div>';
    U.each(S.oral, function (T, i) {
      h += '<div class="card"><span class="eyebrow">Tarea ' + T.tarea + '</span><h3>' + esc(T.title) + '</h3><div class="row"><div class="c2">' +
        (T.photo ? '<div class="adv-scene mb16"><div class="ph" style="height:220px;' + ui.photoStyle(T.photo) + '"></div></div>' : '') +
        '<p class="es" lang="es" dir="ltr" style="display:block">' + esc(T.task) + '</p><ul dir="ltr" lang="es" style="text-align:left;padding-left:22px">' + U.map(T.prompts, function (p) { return '<li class="es-inline">' + esc(p) + '</li>'; }).join('') + '</ul>' +
        (T.questions ? '<div class="btns">' + U.map(T.questions, function (q) { return U.say(q, 'سؤال الممتحِن'); }).join(' ') + '</div>' : '') + '</div>' +
        '<div class="c2"><div data-rec="' + i + '"></div><button class="btn ghost mt8" data-omodel="' + i + '">نموذج إجابة</button><div data-oout="' + i + '"></div></div></div></div>';
    });
    h += rubricHtml('oral');
    el.innerHTML = h; startTimer();
    U.each(U.$$('[data-rec]', el), function (box) { ECM.speakBox(box, { key: 'dele-' + S.id + '-o' + box.getAttribute('data-rec') }); });
    U.each(U.$$('[data-omodel]', el), function (b) { b.onclick = function () { var T = S.oral[b.getAttribute('data-omodel')]; U.$('[data-oout="' + b.getAttribute('data-omodel') + '"]', el).innerHTML = '<div class="fb info"><b class="t">نموذج إجابة</b><div class="reading-text" lang="es">' + esc(T.model) + '</div>' + U.say(T.model, 'استمع') + '</div>'; }; });
    bindRubric(el, S, 'oral');
  }

  function runPart(el, sid, pid) {
    var S = sim(sid), p = part(pid);
    if (!S || !p) { overview(el); return; }
    ECM.app.crumbs([{ t: 'DELE A2', href: '#/dele' }, { t: S.title, href: '#/dele/sim/' + sid }, { t: p.ar }]);
    if (pid === 'lectura' || pid === 'auditiva') runObjective(el, S, pid);
    else if (pid === 'escrita') runWriting(el, S);
    else runOral(el, S);
  }

  ECM.views.dele = function (el, args) {
    clearInterval(tick);
    if (args[0] === 'part') partPage(el, args[1]);
    else if (args[0] === 'sim' && args[2]) runPart(el, args[1], args[2]);
    else if (args[0] === 'sim') simPage(el, args[1]);
    else overview(el);
    return { cleanup: function () { clearInterval(tick); } };
  };
})(window.ECM);
