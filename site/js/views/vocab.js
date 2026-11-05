/* Vocabulary Academy: themes by level, word lists with audio, flashcards with spaced repetition, quizzes. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, ui = ECM.ui;
  var GAP = [0, 1, 2, 4, 8, 16]; // days per box
  function themes(lv) { return U.filter(ECM.VOCAB, function (t) { return !lv || t.lv === lv; }); }
  function theme(id) { return ECM.VOCAB.find(function (t) { return t.id === id; }); }
  function rec(key) { return ECM.store.state.vocab[key]; }
  function mastery(t) { var m = 0; U.each(t.w, function (w, i) { var r = rec(t.id + ':' + i); if (r && r.box >= 3) m++; }); return m; }

  function overview(el, lv) {
    ECM.app.crumbs([{ t: 'أكاديمية المفردات' }].concat(lv ? [{ t: lv }] : []));
    var total = U.sum(ECM.VOCAB, function (t) { return t.w.length; }), mastered = U.filter(U.keys(ECM.store.state.vocab), function (k) { return ECM.store.state.vocab[k].box >= 3; }).length;
    var due = dueWords().length;
    var h = ui.hero('mercado', 'ACADEMIA DE VOCABULARIO', 'أكاديمية المفردات', total + ' كلمة وعبارة في ' + ECM.VOCAB.length + ' موضوعًا من A1 إلى B2، مع أمثلة وصوت ومراجعة متباعدة: الكلمات التي تعرفها تظهر بعد أيام أطول، والصعبة تعود قريبًا.',
      '<div class="btns flex wrap mt16"><a class="btn gold lg" href="#/vocab/review">مراجعة اليوم (' + due + ')</a></div>');
    h += '<div class="row mt24"><div class="c3"><div class="card stat"><div class="v">' + mastered + '</div><div class="l">كلمة متقنة (المستوى 3 من 5 فأكثر)</div></div></div><div class="c3"><div class="card stat"><div class="v">' + due + '</div><div class="l">كلمة مستحقة للمراجعة اليوم</div></div></div><div class="c3"><div class="card stat"><div class="v">' + total + '</div><div class="l">كلمة في الأكاديمية</div></div></div></div>';
    h += '<div class="tabs">' + U.map(['', 'A1', 'A2', 'B1', 'B2'], function (l) { return '<a href="#/vocab' + (l ? '/' + l : '') + '" class="' + ((lv || '') === l ? 'on' : '') + '">' + (l || 'الكل') + '</a>'; }).join('') + '</div>';
    h += '<div class="row">' + U.map(themes(lv), function (t) {
      var m = mastery(t);
      return '<div class="c4"><a class="tile" href="#/vocab/theme/' + t.id + '"><div class="ph" style="height:110px;' + ui.photoStyle(t.photo, true) + '"><span class="tag light">' + t.lv + '</span></div><div class="body"><h3>' + esc(t.ar) + '</h3><p class="es" lang="es" dir="ltr">' + esc(t.es) + '</p><div class="mt8">' + ui.bar(U.pct(m, t.w.length)) + '</div><div class="meta">' + m + ' / ' + t.w.length + ' متقنة</div></div></a></div>';
    }).join('') + '</div>';
    el.innerHTML = h;
  }

  function dueWords() {
    var now = Date.now(), out = [];
    U.each(ECM.VOCAB, function (t) { U.each(t.w, function (w, i) { var r = rec(t.id + ':' + i); if (r && r.box < 5 && new Date(r.due).getTime() <= now) out.push({ t: t, i: i }); }); });
    return out;
  }

  function grade(key, known) {
    var v = ECM.store.state.vocab, r = v[key] || { box: 0, seen: 0, right: 0, wrong: 0 };
    r.seen++;
    if (known) { r.box = Math.min(5, r.box + 1); r.right++; } else { r.box = 0; r.wrong++; }
    r.due = new Date(Date.now() + GAP[r.box] * 86400000).toISOString();
    v[key] = r; ECM.store.touch('vocab'); ECM.store.save();
  }

  function cards(el, items, title, back) {
    var i = 0, shown = false;
    function draw() {
      if (i >= items.length) {
        el.innerHTML = '<div class="card emerald center"><h2>انتهت الجلسة ✓</h2><p>راجعتَ ' + items.length + ' بطاقة. ستعود البطاقات الصعبة قريبًا والسهلة بعد أيام.</p><a class="btn" href="' + back + '">رجوع</a></div>';
        ECM.achievements.check(); return;
      }
      var it = items[i], w = it.t.w[it.i].split('|');
      el.innerHTML = '<div class="card"><div class="flex between mb8"><span class="tag navy">' + esc(title) + '</span><span class="tag grey">' + (i + 1) + ' / ' + items.length + '</span></div>' +
        '<div class="flash" id="fl"><div class="w" lang="es">' + esc(w[0]) + '</div>' + (shown ? '<div class="m">' + esc(w[1]) + '</div><div class="ex" lang="es">' + esc(w[2] || '') + '</div><div class="small" style="color:#C9D3E2">' + esc(w[3] || '') + '</div>' : '<div class="ex">فكّر في المعنى، ثم اضغط لإظهاره</div>') + '</div>' +
        '<div class="btns flex wrap mt16" style="justify-content:center">' + U.say(w[0], 'استمع') + (w[2] ? ' ' + U.say(w[2], 'المثال') : '') + '</div>' +
        (shown ? '<div class="btns flex wrap mt8" style="justify-content:center"><button class="btn danger" id="no">لم أعرفها</button><button class="btn" id="yes">عرفتها ✓</button></div>' : '<div class="center mt8"><button class="btn navy" id="show">أظهر المعنى</button></div>') + '</div>';
      U.$('#fl', el).onclick = function () { if (!shown) { shown = true; draw(); } };
      if (shown) {
        U.$('#yes', el).onclick = function () { grade(it.t.id + ':' + it.i, true); i++; shown = false; draw(); };
        U.$('#no', el).onclick = function () { grade(it.t.id + ':' + it.i, false); i++; shown = false; draw(); };
      } else U.$('#show', el).onclick = function () { shown = true; draw(); ECM.tts.speak(w[0]); };
    }
    draw();
  }

  function themePage(el, id, mode) {
    var t = theme(id);
    if (!t) { overview(el); return; }
    ECM.app.crumbs([{ t: 'أكاديمية المفردات', href: '#/vocab' }, { t: t.lv, href: '#/vocab/' + t.lv }, { t: t.ar }]);
    var h = ui.hero(t.photo, 'VOCABULARIO · ' + t.lv, esc(t.ar), '<span class="es" lang="es" style="color:#E9C987">' + esc(t.es) + '</span> · ' + t.w.length + ' كلمة');
    h += '<div class="tabs mt16"><a href="#/vocab/theme/' + id + '" class="' + (!mode ? 'on' : '') + '">القائمة</a><a href="#/vocab/theme/' + id + '/cards" class="' + (mode === 'cards' ? 'on' : '') + '">البطاقات</a><a href="#/vocab/theme/' + id + '/quiz" class="' + (mode === 'quiz' ? 'on' : '') + '">اختبار</a></div><div id="vbox"></div>';
    el.innerHTML = h;
    var box = U.$('#vbox', el);
    if (mode === 'cards') cards(box, U.map(t.w, function (w, i) { return { t: t, i: i }; }), t.ar, '#/vocab/theme/' + id);
    else if (mode === 'quiz') {
      var rnd = U.rng(Date.now() % 100000), qs = [];
      U.each(U.shuffle(U.map(t.w, function (w, i) { return i; }), rnd).slice(0, 10), function (wi) {
        var w = t.w[wi].split('|'), dis = U.shuffle(U.filter(t.w, function (x, j) { return j !== wi; }), rnd).slice(0, 3), opts = U.shuffle([t.w[wi]].concat(dis), rnd), dir = rnd() < 0.5;
        qs.push(dir ? { id: 'vc-' + t.id + '-' + wi + '-es', type: 'mc', stem: '¿Qué significa «' + w[0] + '»?', stemLang: 'es', opts: U.map(opts, function (x) { return x.split('|')[1]; }), optLang: 'ar', answer: opts.indexOf(t.w[wi]), why: '[[' + w[0] + ']] = ' + w[1] + (w[2] ? '\n[[' + w[2] + ']] — ' + (w[3] || '') : ''), topic: t.ar, level: t.lv, src: 'مفردات' }
          : { id: 'vc-' + t.id + '-' + wi + '-ar', type: 'mc', stem: 'كيف تقول: «' + w[1] + '»؟', stemLang: 'ar', noSay: true, opts: U.map(opts, function (x) { return x.split('|')[0]; }), answer: opts.indexOf(t.w[wi]), why: '[[' + w[0] + ']] = ' + w[1], topic: t.ar, level: t.lv, src: 'مفردات' });
      });
      ui.quiz(box, qs, { mode: 'practice', title: 'اختبار: ' + t.ar, record: { kind: 'vocab', ref: t.id, title: 'مفردات · ' + t.ar, level: t.lv }, onRetry: function () { themePage(el, id, 'quiz'); } });
    } else {
      box.innerHTML = '<div class="card"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>الكلمة</th><th>المعنى</th><th>مثال</th><th></th></tr></thead><tbody>' + U.map(t.w, function (w, i) {
        var p = w.split('|'), r = rec(t.id + ':' + i);
        return '<tr><td class="es-cell" lang="es">' + esc(p[0]) + (r && r.box >= 3 ? ' <span class="tag">✓</span>' : '') + '</td><td>' + esc(p[1]) + '</td><td><span class="es" lang="es" dir="ltr">' + esc(p[2] || '') + '</span><div class="small muted">' + esc(p[3] || '') + '</div></td><td style="white-space:nowrap">' + U.say(p[0]) + ' ' + (p[2] ? U.say(p[2], 'مثال') : '') + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';
    }
  }

  ECM.views.vocab = function (el, args) {
    if (args[0] === 'theme') themePage(el, args[1], args[2]);
    else if (args[0] === 'review') {
      ECM.app.crumbs([{ t: 'أكاديمية المفردات', href: '#/vocab' }, { t: 'مراجعة اليوم' }]);
      var d = dueWords();
      if (!d.length) {
        var fresh = [];
        U.each(themes(ECM.store.state.profile.level), function (t) { U.each(t.w, function (w, i) { if (!rec(t.id + ':' + i) && fresh.length < 12) fresh.push({ t: t, i: i }); }); });
        el.innerHTML = '<div class="card emerald"><h3>لا توجد كلمات مستحقة للمراجعة الآن ✓</h3><p>سنعرض عليك ' + fresh.length + ' كلمات جديدة من مستواك (' + esc(ECM.store.state.profile.level) + ').</p></div><div id="vb"></div>';
        if (fresh.length) cards(U.$('#vb', el), fresh, 'كلمات جديدة', '#/vocab');
      } else { el.innerHTML = '<div id="vb"></div>'; cards(U.$('#vb', el), d.slice(0, 30), 'مراجعة اليوم', '#/vocab'); }
    } else overview(el, args[0]);
  };
})(window.ECM);
