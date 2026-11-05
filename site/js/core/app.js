/* Español con Mones — application shell and hash router.
 * Hash routes (#/learn/A2/a2-g01) work on GitHub Pages without any server
 * configuration, survive page refresh, and work in old Safari.        */
(function (root) {
  'use strict';
  var ECM = root.ECM, U = ECM.util;
  var app = ECM.app = { started: false };
  ECM.views = ECM.views || {};

  var main = document.getElementById('main');
  var current = null; // {name, cleanup}

  function parse() {
    var h = (root.location.hash || '').replace(/^#\/?/, '');
    var parts = U.filter(h.split('/'), function (x) { return x !== ''; });
    for (var i = 0; i < parts.length; i++) { try { parts[i] = decodeURIComponent(parts[i]); } catch (e) { /* keep raw */ } }
    return { name: parts[0] || 'home', args: parts.slice(1) };
  }

  function setActive(name) {
    var links = U.$$('#nav a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-r') === name) links[i].className = 'active';
      else links[i].className = '';
    }
  }

  app.crumbs = function (list) {
    var h = '<a href="#/" style="color:inherit;text-decoration:none">الرئيسية</a>';
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      h += ' <span aria-hidden="true">‹</span> ' + (c.href && i < list.length - 1 ? '<a href="' + c.href + '" style="color:inherit">' + U.esc(c.t) + '</a>' : '<b>' + U.esc(c.t) + '</b>');
    }
    document.getElementById('crumbs').innerHTML = h;
  };

  function route() {
    var r = parse();
    ECM.tts.stop();
    if (current && current.cleanup) { try { current.cleanup(); } catch (e) { /* ignore */ } }
    current = null;
    var view = ECM.views[r.name];
    document.body.className = document.body.className.replace(/\bnav-open\b/, '');
    if (!view) {
      main.innerHTML = '<div class="card empty"><div class="big">؟</div><h2>الصفحة غير موجودة</h2><p>ربما تغيّر الرابط بعد التحديث.</p><a class="btn" href="#/">العودة إلى الرئيسية</a></div>';
      app.crumbs([{ t: 'غير موجود' }]);
      return;
    }
    setActive(r.name);
    main.onclick = null;
    try {
      current = view(main, r.args) || {};
    } catch (e) {
      main.innerHTML = '<div class="card warn"><h2>تعذّر عرض هذه الصفحة</h2><p>حدث خطأ غير متوقع. تقدّمك محفوظ. جرّب الرجوع إلى الرئيسية أو تحديث الصفحة.</p><p class="small muted" dir="ltr">' + U.esc(e && e.message) + '</p><a class="btn" href="#/">الرئيسية</a></div>';
      if (root.console) console.error(e);
    }
    if (!/^(exams|ccse|dele)$/.test(r.name) || r.args.length < 2) { try { root.scrollTo(0, 0); } catch (e2) { /* ignore */ } }
    ECM.store.touch();
  }
  app.route = route;
  app.go = function (hash) { if (root.location.hash === hash) route(); else root.location.hash = hash; };

  /* ---------- save indicator ---------- */
  var saveInd = document.getElementById('saveInd'), saveTxt = document.getElementById('saveTxt');
  function paintSave() {
    var s = ECM.store;
    if (!s.ok()) {
      saveInd.className = 'save-ind bad';
      saveTxt.innerHTML = 'تعذّر الحفظ!';
      saveInd.title = 'لا يمكن الحفظ في هذا المتصفح (ربما وضع التصفح الخاص أو امتلاء التخزين). صدّر نسخة احتياطية من صفحة «تقدّمي».';
      return;
    }
    saveInd.className = 'save-ind';
    saveTxt.innerHTML = 'آخر حفظ: ' + U.ago(s.state.savedAt);
    saveInd.title = s.state.savedAt ? ('حُفظ تلقائيًا ' + U.date(s.state.savedAt) + ' ' + U.time(s.state.savedAt)) : 'يُحفظ تلقائيًا';
  }
  ECM.store.onSave(paintSave);
  setInterval(paintSave, 30000);
  saveInd.onclick = function () { app.go('#/progress'); };
  saveInd.style.cursor = 'pointer';

  app.updateBadge = function () {
    var b = document.getElementById('mistakeBadge'), n = ECM.mistakes.open().length;
    if (!b) return;
    if (n) { b.innerHTML = n; b.className = 'badge'; } else b.className = 'badge hidden';
  };

  /* ---------- global delegation: audio buttons, links ---------- */
  var playing = null;
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-say]') : null;
    if (t) {
      e.preventDefault();
      if (!ECM.tts.supported()) { ECM.ui.toast('القراءة الصوتية غير مدعومة في هذا المتصفح.'); return; }
      if (playing === t) { ECM.tts.stop(); t.className = t.className.replace(' playing', ''); playing = null; return; }
      if (playing) playing.className = playing.className.replace(' playing', '');
      playing = t; t.className += ' playing';
      ECM.tts.speak(t.getAttribute('data-say'), { onend: function () { t.className = t.className.replace(' playing', ''); if (playing === t) playing = null; } });
      if (!ECM.tts.hasSpanishVoice()) ECM.ui.toast('لم يُعثر على صوت إسباني في جهازك؛ سيُستخدم الصوت الافتراضي. يمكنك إضافة صوت «Mónica» من إعدادات النظام ← إمكانية الوصول ← المحتوى المنطوق.');
      return;
    }
    var g = e.target.closest ? e.target.closest('[data-go]') : null;
    if (g) { e.preventDefault(); app.go(g.getAttribute('data-go')); }
  });

  /* ---------- mobile menu ---------- */
  document.getElementById('menuBtn').onclick = function () {
    if (/\bnav-open\b/.test(document.body.className)) document.body.className = document.body.className.replace(/\bnav-open\b/, '');
    else document.body.className += ' nav-open';
  };
  document.getElementById('scrim').onclick = function () { document.body.className = document.body.className.replace(/\bnav-open\b/, ''); };

  /* ---------- side footer: storage info + backup reminder ---------- */
  function sideFoot() {
    var s = ECM.store.state, f = document.getElementById('sideFoot');
    var days = s.lastBackupAt ? Math.floor((Date.now() - new Date(s.lastBackupAt).getTime()) / 86400000) : null;
    var h = '<b>الحفظ تلقائي</b> على هذا الجهاز وهذا المتصفح.';
    if (days === null) h += '<br>لم تُنشئ نسخة احتياطية بعد. <a href="#/progress" style="color:#E2C17D">أنشئ نسخة الآن</a>';
    else if (days >= 7) h += '<br>آخر نسخة احتياطية قبل ' + days + ' يومًا. <a href="#/progress" style="color:#E2C17D">جدّدها</a>';
    else h += '<br>آخر نسخة احتياطية: ' + U.date(s.lastBackupAt);
    f.innerHTML = h;
  }
  app.sideFoot = sideFoot;

  if (!ECM.tts.supported()) document.body.className += ' no-tts';

  root.addEventListener('hashchange', route);
  app.started = true;
  paintSave();
  app.updateBadge();
  sideFoot();
  route();
  if (ECM.store.recovered()) ECM.ui.toast('تمت استعادة تقدّمك من النسخة السابقة المحفوظة تلقائيًا.');
  if (!ECM.store.ok()) ECM.ui.toast('تنبيه: المتصفح لا يسمح بحفظ التقدّم (ربما وضع التصفح الخاص).');
})(window);
