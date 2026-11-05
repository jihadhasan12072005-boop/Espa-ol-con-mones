/* My Mistakes notebook — only real mistakes, spaced review with increasing difficulty. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, rich = U.rich, ui = ECM.ui;

  /* Increasing difficulty: box 0 → original question (choices);
   * box ≥1 and a Spanish answer → type the answer without choices.          */
  function reviewQ(m) {
    var q = Object.assign({}, m.q);
    q.id = m.id;
    if (m.box >= 1 && (q.type === 'mc') && q.opts && q.optLang !== 'ar' && q.stemLang === 'es' && String(q.opts[q.answer]).length < 60) {
      q.type = 'type'; q.answer = q.opts[q.answer]; q.opts = null;
      q.prompt = (q.prompt ? q.prompt + '<br>' : '') + '<b>مستوى أصعب:</b> اكتب الإجابة بنفسك دون خيارات.';
    }
    return q;
  }
  function answerText(q) {
    if (q.type === 'type') return [].concat(q.answer)[0];
    if (q.type === 'tf') return q.answer === 0 ? 'Verdadero' : 'Falso';
    return q.opts ? q.opts[q.answer] : '';
  }

  ECM.views.mistakes = function (el, args) {
    ECM.app.crumbs([{ t: 'دفتر أخطائي' }]);
    var all = ECM.store.state.mistakes, keys = U.keys(all);
    var open = ECM.mistakes.open(), due = ECM.mistakes.due(), fixed = U.filter(keys, function (k) { return all[k].fixed; });
    if (args[0] === 'review') {
      if (!due.length) { el.innerHTML = '<div class="card emerald"><h3>لا توجد أخطاء مستحقة للمراجعة الآن ✓</h3><p>عُد لاحقًا؛ المراجعة متباعدة (1، 3، 7 أيام).</p><a class="btn" href="#/mistakes">رجوع</a></div>'; return; }
      el.innerHTML = '<div class="notice blue mb16">المراجعة الذكية: كل خطأ تصحّحه ينتقل إلى مراجعة بعد مدة أطول، ويصبح السؤال أصعب (كتابة بدل اختيار). بعد ثلاث مراجعات صحيحة متباعدة يُعتبر الخطأ «مصحّحًا».</div><div id="rv"></div>';
      ui.quiz(U.$('#rv', el), U.map(due.slice(0, 15), reviewQ), { mode: 'practice', review: true, title: 'مراجعة أخطائي', onRetry: function () { ECM.app.route(); }, onFinish: function () { ECM.achievements.check(); } });
      return;
    }
    var h = '<div class="card navy"><span class="eyebrow">CUADERNO DE ERRORES</span><h1 style="color:#fff">دفتر أخطائي</h1><p class="muted">يُحفظ هنا تلقائيًا <b>فقط</b> ما أخطأتَ فيه فعلًا في الدروس والامتحانات والمغامرات — مع إجابتك والإجابة الصحيحة والشرح. لا يحتوي الدفتر أي أخطاء مُعدّة مسبقًا.</p>' +
      '<div class="btns flex wrap mt16">' + (due.length ? '<a class="btn gold lg" href="#/mistakes/review">راجع الآن (' + due.length + ' مستحقة)</a>' : '<span class="tag light">لا توجد مراجعات مستحقة الآن</span>') + '</div></div>';
    h += '<div class="row mt16"><div class="c3"><div class="card stat"><div class="v">' + open.length + '</div><div class="l">خطأ قيد التصحيح</div></div></div><div class="c3"><div class="card stat"><div class="v">' + due.length + '</div><div class="l">مستحق للمراجعة اليوم</div></div></div><div class="c3"><div class="card stat"><div class="v">' + fixed.length + '</div><div class="l">خطأ صُحّح نهائيًا ✓</div></div></div></div>';
    if (!keys.length) {
      h += '<div class="card empty"><div class="big">✎</div><h3>دفترك فارغ</h3><p>هذا طبيعي في البداية. عندما تخطئ في أي تمرين، سيظهر الخطأ هنا مع شرحه لتراجعه لاحقًا.</p><a class="btn" href="#/learn">ابدأ درسًا</a></div>';
    } else {
      // group by topic
      var byTopic = {};
      U.each(open, function (m) { var t = m.q.topic || 'عام'; (byTopic[t] = byTopic[t] || []).push(m); });
      var tk = U.keys(byTopic).sort(function (a, b) { return byTopic[b].length - byTopic[a].length; });
      if (tk.length) h += ui.secTitle('الأخطاء المفتوحة حسب الموضوع');
      U.each(tk, function (t) {
        h += '<div class="card"><div class="card-head"><h3>' + rich(t) + '</h3><span class="tag red">' + byTopic[t].length + '</span></div>';
        U.each(byTopic[t].sort(function (a, b) { return new Date(b.lastAt) - new Date(a.lastAt); }), function (m) {
          var q = m.q;
          h += '<div class="mistake-pair">' + (q.src ? '<div class="small muted">' + esc(q.src) + ' · ' + U.date(m.lastAt) + ' · تكرّر ' + m.count + ' مرة · مستوى المراجعة ' + m.box + '/3</div>' : '') +
            (q.stem ? (q.stemLang === 'ar' ? '<div class="mt8"><b>' + rich(q.stem) + '</b></div>' : '<div class="es mt8" lang="es" dir="ltr"><b>' + U.es(q.stem) + '</b></div>') : '') +
            '<div class="small mt8">إجابتك: </div><span class="wrong">' + esc(m.yours[0] || '') + '</span><div class="small">الصحيح:</div><span class="right">' + esc(answerText(q)) + '</span>' +
            (q.why ? '<div class="small mt8">' + rich(q.why) + '</div>' : '') + '</div>';
        });
        h += '</div>';
      });
      if (fixed.length) {
        h += '<details class="card"><summary><b>الأخطاء المصحّحة (' + fixed.length + ')</b></summary><ul class="list mt8">' + U.map(fixed, function (k) { var m = all[k]; return '<li class="small"><span class="es" lang="es" dir="ltr">' + U.es(m.q.stem || '') + '</span> → <b class="es-inline" lang="es">' + esc(answerText(m.q)) + '</b> <span class="muted">· صُحّح ' + U.date(m.fixedAt) + '</span></li>'; }).join('') + '</ul></details>';
      }
    }
    var leg = ECM.store.state.legacy;
    if (leg && leg.data && leg.data.errors && leg.data.errors.length) {
      h += '<details class="card"><summary><b>أخطاء مستوردة من النسخة القديمة (' + leg.data.errors.length + ')</b></summary><p class="small muted">نُقلت كما هي من التطبيق السابق للاطلاع فقط.</p><ul class="list">' +
        U.map(leg.data.errors.slice(0, 100), function (e) { return '<li class="small" dir="auto">' + esc(typeof e === 'string' ? e : JSON.stringify(e).slice(0, 200)) + '</li>'; }).join('') + '</ul></details>';
    }
    el.innerHTML = h;
  };
})(window.ECM);
