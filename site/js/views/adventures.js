/* Spanish Adventures — interactive scenes with choices, tasks, audio and saved progress. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, rich = U.rich, ui = ECM.ui;
  function A(id) { return ECM.ADV.find(function (a) { return a.id === id; }); }
  function st(id) { var s = ECM.store.state.adventures; return s[id] || (s[id] = { step: 0, log: [], ok: 0, bad: 0 }); }

  function list(el) {
    ECM.app.crumbs([{ t: 'مغامرات في إسبانيا' }]);
    var h = ui.hero('granvia', 'AVENTURAS EN ESPAÑA', 'مغامرات في إسبانيا', 'مواقف حقيقية من الحياة اليومية: اختر ما تقوله، استمع إلى الحوار، تعلّم من أخطائك، وأكمل المهام العملية. يُحفظ تقدّمك تلقائيًا.');
    h += '<div class="row mt24">' + U.map(ECM.ADV, function (a) {
      var s = ECM.store.state.adventures[a.id];
      var tag = s && s.done ? '<span class="tag">مكتملة ✓</span>' : (s && s.step ? '<span class="tag gold">الخطوة ' + (s.step + 1) + ' من ' + a.steps.length + '</span>' : '<span class="tag light">' + a.lv + '</span>');
      return '<div class="c3"><a class="tile" href="#/adventures/' + a.id + '"><div class="ph" style="' + ui.photoStyle(a.photo, true) + '"><span class="tag" style="position:absolute;top:12px;right:12px">' + tag + '</span></div><div class="body"><h3>' + esc(a.ta) + '</h3><p class="es" lang="es" dir="ltr">' + esc(a.t) + '</p><div class="meta">' + a.steps.length + ' مراحل · ' + a.lv + '</div></div></a></div>';
    }).join('') + '</div>';
    el.innerHTML = h;
  }

  function play(el, id) {
    var a = A(id);
    if (!a) { list(el); return; }
    ECM.app.crumbs([{ t: 'مغامرات', href: '#/adventures' }, { t: a.ta }]);
    var s = st(id), showAr = ECM.store.state.settings.advAr !== false, pending = null;

    function render() {
      var step = a.steps[s.step], h = '';
      h += '<div class="row"><div class="c23"><div class="adv-scene"><div class="ph" style="' + ui.photoStyle(a.photo) + '"><div class="cap"><span class="tag light">' + a.lv + ' · المرحلة ' + Math.min(s.step + 1, a.steps.length) + ' / ' + a.steps.length + '</span><h2 class="es" lang="es" dir="ltr">' + esc(a.t) + '</h2></div>' + ui.photoCredit(a.photo) + '</div><div class="body">';
      if (s.step === 0 && !s.log.length) h += '<div class="rule">' + rich(a.intro) + '</div>';
      // history
      U.each(s.log, function (l) {
        var st0 = a.steps[l.i];
        if (st0.task) h += '<div class="bubble me"><span class="small muted">مهمة</span><span class="es" lang="es" dir="ltr">' + esc(l.text || '') + '</span></div>';
        else h += '<div class="bubble them"><span class="speaker" style="color:#E9C987">' + esc(st0.s) + '</span><span class="es" lang="es" dir="ltr">' + esc(st0.es) + '</span></div><div class="bubble me"><span class="es" lang="es" dir="ltr">' + esc(st0.c[l.c][0]) + '</span></div>';
      });
      if (s.done || !step) {
        h += endHtml(a, s);
      } else if (step.task) {
        h += '<div class="card gold tight"><b>مهمة عملية:</b> ' + rich(step.task) + '</div><div id="taskBox" class="mt8"></div>';
      } else {
        h += '<div class="bubble them"><span class="speaker" style="color:#E9C987">' + esc(step.s) + '</span><span class="es" lang="es" dir="ltr">' + esc(step.es) + '</span> ' + U.say(step.es, 'استمع') +
          (showAr ? '<div class="small muted mt8">' + esc(step.ar) + '</div>' : '') + '</div>';
        h += '<p class="small muted mt16">ماذا تقول؟ اختر الجملة الأنسب:</p>';
        U.each(step.c, function (c, i) {
          h += '<button class="choice" data-ch="' + i + '" lang="es">' + esc(c[0]) + (showAr && c[1] !== '—' ? '<span class="ar">' + esc(c[1]) + '</span>' : '') + '</button>';
        });
        h += '<div id="advFb"></div>';
      }
      h += '</div></div></div>';
      h += '<div class="c3"><div class="card"><h3>مفردات المشهد</h3>' + U.map(a.vocab, function (v) { var p = v.split('|'); return '<div class="flex between mb8"><span><span class="es" lang="es" style="font-weight:700">' + esc(p[0]) + '</span><br><small class="muted">' + esc(p[1]) + '</small></span>' + U.say(p[0]) + '</div>'; }).join('') +
        '</div><div class="card"><label class="flex"><input type="checkbox" id="arT"' + (showAr ? ' checked' : '') + ' style="margin-left:8px"> عرض الترجمة العربية</label><p class="small muted mt8">أخفِ الترجمة عندما تشعر بالثقة لتحدّي نفسك.</p>' +
        '<button class="btn ghost sm" id="restart">ابدأ المغامرة من جديد</button></div></div></div>';
      el.innerHTML = h;
      U.$('#arT', el).onchange = function (e) { showAr = e.target.checked; ECM.store.state.settings.advAr = showAr; ECM.store.save(); render(); };
      U.$('#restart', el).onclick = function () { if (confirm('ستبدأ المغامرة من أولها. هل أنت متأكد؟')) { ECM.store.state.adventures[id] = { step: 0, log: [], ok: 0, bad: 0 }; s = st(id); render(); } };
      if (step && !s.done && !step.task) {
        U.each(U.$$('[data-ch]', el), function (b) { b.onclick = function () { choose(Number(b.getAttribute('data-ch'))); }; });
        if (!pending) setTimeout(function () { ECM.tts.speak(step.es); }, 250);
      }
      if (step && !s.done && step.task) {
        ECM.speakBox(U.$('#taskBox', el), { prompt: step.task, expected: step.keys, model: step.model, checkLabel: 'تحقّق وتابع', onChecked: function (text) {
          var fb = document.createElement('div');
          fb.innerHTML = '<button class="btn mt8">تابع المغامرة ←</button>';
          U.$('#taskBox', el).appendChild(fb);
          fb.firstChild.onclick = function () { s.log.push({ i: s.step, text: text }); advance(undefined); };
        } });
      }
      var r = U.$('#replay', el);
      if (r) r.onclick = function () { ECM.store.state.adventures[id] = { step: 0, log: [], ok: 0, bad: 0, done: null, best: s.best }; s = st(id); render(); };
    }

    function choose(i) {
      var step = a.steps[s.step], c = step.c[i], fb = U.$('#advFb', el);
      U.each(U.$$('[data-ch]', el), function (b) { b.disabled = false; b.style.borderColor = ''; });
      if (c[2] === 1) {
        s.ok++;
        fb.innerHTML = '<div class="fb ok"><b class="t">✓ إجابة مناسبة</b>' + rich(c[3]) + '</div><button class="btn" id="go">تابع ←</button>';
        U.each(U.$$('[data-ch]', el), function (b) { b.disabled = true; });
        U.$('[data-ch="' + i + '"]', el).style.borderColor = '#0E7C5A';
        U.$('#go', el).onclick = function () { s.log.push({ i: s.step, c: i }); advance(c[4]); };
        ECM.store.save();
      } else {
        s.bad++;
        U.$('[data-ch="' + i + '"]', el).style.borderColor = '#B4423A';
        U.$('[data-ch="' + i + '"]', el).disabled = true;
        fb.innerHTML = '<div class="fb no"><b class="t">✗ ليست الأنسب هنا</b>' + rich(c[3]) + '<div class="small mt8">جرّب خيارًا آخر.</div></div>';
        var good = step.c.findIndex(function (x) { return x[2] === 1; });
        ECM.mistakes.record({ id: 'adv-' + a.id + '-' + s.step, type: 'mc', stem: step.es, stemLang: 'es', opts: U.map(step.c, function (x) { return x[0]; }), answer: good, why: c[3], topic: 'مغامرة: ' + a.ta, level: a.lv, src: 'مغامرة: ' + a.ta }, c[0]);
      }
    }

    function advance(go) {
      ECM.tts.stop();
      if (go === -1) s.step = a.steps.length;
      else if (go !== undefined) s.step = go;
      else s.step++;
      if (s.step >= a.steps.length) { s.done = new Date().toISOString(); s.best = Math.max(s.best || 0, U.pct(s.ok, s.ok + s.bad)); ECM.store.touch('adventure'); ECM.achievements.check(); }
      ECM.store.save();
      render();
      try { U.$('#advFb', el) && U.$('#advFb', el).scrollIntoView(); } catch (e) { /* ignore */ }
    }
    render();
  }

  function endHtml(a, s) {
    var p = U.pct(s.ok, s.ok + s.bad);
    return '<div class="fb ok mt16"><b class="t">🏁 النهاية — أحسنت!</b>' + rich(a.end) + '<div class="mt8">الاختيارات الصحيحة من المحاولة الأولى تقريبًا: <b>' + p + '%</b> (' + s.ok + ' صحيحة، ' + s.bad + ' محاولة خاطئة).' +
      (s.bad ? ' أُضيفت أخطاؤك إلى <a href="#/mistakes">دفتر الأخطاء</a> للمراجعة.' : '') + '</div></div><div class="btns flex wrap"><button class="btn" id="replay">العب مرة أخرى</button><a class="btn ghost" href="#/adventures">مغامرة أخرى</a></div>';
  }

  ECM.views.adventures = function (el, args) {
    if (args[0]) play(el, args[0]); else list(el);
  };
})(window.ECM);
