/* Speaking Studio: conversations, pronunciation, free practice. + ECM.speakBox component. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, rich = U.rich, ui = ECM.ui;
  function SP() { return ECM.SPEAK; }

  /* Reusable answer box: record (if supported) or type, edit, then check. */
  ECM.speakBox = function (box, opt) {
    opt = opt || {};
    var sup = ECM.stt.supported(), saved = opt.key ? ((ECM.store.state.lessons[opt.key] || {}).text || '') : '';
    var h = '';
    if (sup) {
      h += '<div class="flex wrap mb8"><button type="button" class="rec-btn" data-r="rec"><span class="dot"></span><span data-r="lbl">ابدأ التسجيل</span></button>' +
        '<span class="rec-status" data-r="st">جاهز. اضغط وتكلّم بالإسبانية، ثم اضغط «إنهاء التسجيل».</span></div>' +
        '<div class="small muted mb8">خذ وقتك: التوقف القصير أو التردد <b>لا</b> يُنهي التسجيل. يستمر حتى تضغط «إنهاء التسجيل». بعدها يمكنك تصحيح النص قبل التحقق.</div>' +
        '<div class="interim" data-r="int"></div>';
    } else {
      h += '<div class="notice mb8">🎤 ' + esc(ECM.stt.reason()) + '</div>';
    }
    h += '<label class="lbl">' + (sup ? 'النص (يمكنك تعديله):' : 'اكتب إجابتك بالإسبانية:') + '</label>' +
      '<textarea class="inp es-in" rows="4" lang="es" data-r="ta" placeholder="Escribe o graba tu respuesta…">' + esc(saved) + '</textarea>' +
      '<div class="small muted mt8">' + U.map(['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'], function (c) { return '<button type="button" class="chip" data-r="ch" data-c="' + c + '">' + c + '</button>'; }).join(' ') + '</div>' +
      '<div class="btns flex wrap mt8"><button type="button" class="btn" data-r="check">' + (opt.checkLabel || 'تحقّق من إجابتي') + '</button><button type="button" class="btn ghost" data-r="clear">امسح</button></div><div data-r="out"></div>';
    box.innerHTML = h;
    var ta = U.$('[data-r="ta"]', box), out = U.$('[data-r="out"]', box), rec = null, t0 = 0, tm = null;
    function save() { if (opt.key) { var r = ECM.store.state.lessons[opt.key] || {}; r.text = ta.value; ECM.store.state.lessons[opt.key] = r; ECM.store.save(); } }
    ta.oninput = U.debounce(save, 500);
    if (sup) {
      var btn = U.$('[data-r="rec"]', box), lbl = U.$('[data-r="lbl"]', box), st = U.$('[data-r="st"]', box), it = U.$('[data-r="int"]', box);
      rec = ECM.stt.create({
        onText: function (txt, interim) { ta.value = txt; it.innerHTML = esc(interim); save(); },
        onState: function (s) {
          if (s === 'recording') {
            btn.className = 'rec-btn on'; lbl.innerHTML = 'إنهاء التسجيل'; st.className = 'rec-status on'; t0 = Date.now();
            clearInterval(tm); tm = setInterval(function () { st.innerHTML = '● يسجّل الآن… ' + U.mmss((Date.now() - t0) / 1000); }, 500);
          } else {
            btn.className = 'rec-btn'; lbl.innerHTML = 'ابدأ التسجيل'; st.className = 'rec-status'; clearInterval(tm);
            st.innerHTML = ta.value ? 'انتهى التسجيل. راجع النص وصحّح ما أخطأ فيه التعرّف، ثم اضغط «تحقّق».' : 'لم يُلتقط كلام. تأكّد من الميكروفون وتكلّم بوضوح، أو اكتب إجابتك.';
            it.innerHTML = '';
          }
        },
        onError: function (msg) { st.innerHTML = esc(msg); }
      });
      btn.onclick = function () { ECM.tts.stop(); if (rec.recording()) rec.stop(); else rec.start(ta.value); };
    }
    box.onclick = function (e) {
      var b = e.target.closest ? e.target.closest('[data-r]') : null;
      if (!b) return;
      var r = b.getAttribute('data-r');
      if (r === 'ch') { ta.value += b.getAttribute('data-c'); ta.focus(); save(); }
      else if (r === 'clear') { ta.value = ''; out.innerHTML = ''; save(); }
      else if (r === 'check') {
        if (rec && rec.recording()) rec.stop();
        var text = ta.value;
        var h2 = ECM.checker.render(text, { target: opt.target });
        if (opt.expected && text.replace(/\s/g, '')) {
          var n = U.norm(text), hits = U.filter(opt.expected.split('|'), function (k) { return n.indexOf(U.norm(k)) !== -1; });
          h2 = (hits.length ? '<div class="fb ok"><b class="t">إجابتك متعلّقة بالسؤال ✓</b>استخدمتَ: <span class="es-inline" lang="es" dir="ltr">' + esc(hits.join(', ')) + '</span></div>'
            : '<div class="fb no"><b class="t">هل أجبتَ عن السؤال نفسه؟</b>لم نجد كلمات متوقعة مثل: <span class="es-inline" lang="es" dir="ltr">' + esc(opt.expected.split('|').slice(0, 4).join(', ')) + '</span>. استمع إلى السؤال مرة أخرى.</div>') + h2;
        }
        if (opt.model) h2 += '<div class="fb info"><b class="t">إجابة طبيعية مقترحة</b><span class="es" lang="es" dir="ltr" style="display:block;font-size:18px">' + esc(opt.model) + '</span> ' + U.say(opt.model, 'استمع') + '</div>';
        out.innerHTML = h2;
        if (text.replace(/\s/g, '')) {
          var s = ECM.store.state.speaking;
          s.attempts++; s.history.unshift({ prompt: opt.prompt || '', text: text.slice(0, 400), issues: ECM.checker.analyze(text).length, date: new Date().toISOString() });
          if (s.history.length > 80) s.history.length = 80;
          ECM.store.touch('speak'); ECM.store.save(); ECM.achievements.check();
        }
        if (opt.onChecked) opt.onChecked(text);
      }
    };
    return { stop: function () { if (rec && rec.recording()) rec.stop(); clearInterval(tm); } };
  };

  var active = null;

  function overview(el) {
    ECM.app.crumbs([{ t: 'استوديو المحادثة' }]);
    var sup = ECM.stt.supported(), tts = ECM.tts.supported();
    var h = ui.hero('cafe', 'ESTUDIO DE CONVERSACIÓN', 'استوديو المحادثة', 'اسمع السؤال بالإسبانية، أجب بصوتك أو بالكتابة، وراجع النص، ثم احصل على ملاحظات بالعربية وإجابة طبيعية مقترحة.');
    h += '<div class="row mt24"><div class="c23"><div class="card"><h3>حالة متصفحك</h3>' +
      '<p>' + (tts ? '✓ <b>الاستماع (القراءة الصوتية):</b> مدعوم' + (ECM.tts.hasSpanishVoice() ? ' مع صوت إسباني.' : '، لكن لم نجد صوتًا إسبانيًا بعد (قد يظهر بعد ثوانٍ).') : '✗ <b>الاستماع:</b> غير مدعوم في هذا المتصفح.') + '</p>' +
      '<p>' + (sup ? '✓ <b>التسجيل وتحويل الكلام إلى نص:</b> مدعوم. ستحتاج السماح باستخدام الميكروفون. في Safari على Mac يعتمد على خدمة «الإملاء» من Apple وقد يحتاج اتصالًا بالإنترنت.' : '✗ <b>التسجيل:</b> ' + esc(ECM.stt.reason())) + '</p>' +
      '<div class="notice blue">كيف تُقيَّم إجابتك؟ يفحص التطبيق (دون إرسال صوتك إلى أي خادم خاص بنا) أخطاء محددة شائعة: توافق الفعل مع الفاعل، ser/estar، gustar، الأزمنة بعد cuando وsi، أدوات التعريف، العلامات والنبرات. ثم يقترح إجابة طبيعية. لا يستطيع تقييم النطق نفسه بدقة، وليس بديلًا عن معلّم أو ممتحِن.</div></div></div>' +
      '<div class="c3"><div class="card navy"><span class="eyebrow">نشاطك</span><h2>' + ECM.store.state.speaking.attempts + '</h2><p class="muted">إجابة منطوقة/مكتوبة حتى الآن.</p></div></div></div>';
    h += ui.secTitle('محادثات موجّهة');
    h += '<div class="row">' + U.map(SP().convos, function (c) {
      var done = ECM.store.state.lessons['speak-' + c.id];
      return '<div class="c3"><a class="tile" href="#/speak/c/' + c.id + '"><div class="ph" style="height:120px;' + ui.photoStyle(c.photo, true) + '"><span class="tag light">' + c.lv + '</span></div><div class="body"><h3>' + esc(c.ar) + '</h3><p class="es" lang="es" dir="ltr">' + esc(c.es) + '</p><div class="meta">' + c.q.length + ' أسئلة' + (done && done.done ? ' · مكتملة ✓' : '') + '</div></div></a></div>';
    }).join('') + '</div>';
    h += ui.secTitle('النطق: كرّر بعدي');
    h += '<div class="row">' + U.map(SP().sounds, function (s) {
      return '<div class="c4"><a class="tile" href="#/speak/p/' + s.id + '"><div class="body"><h3 class="es" lang="es" dir="ltr" style="display:block">' + esc(s.t) + '</h3><p class="small">' + esc(s.ar.replace(/\*\*|\[\[|\]\]/g, '')).slice(0, 110) + '…</p><div class="meta">تمرين ←</div></div></a></div>';
    }).join('') + '</div>';
    h += ui.secTitle('تدرّب بحرّية');
    h += '<div class="card"><p>اكتب أو قل أي جملة بالإسبانية لتحصل على ملاحظات فورية.</p><div id="free"></div></div>';
    el.innerHTML = h;
    active = ECM.speakBox(U.$('#free', el), { key: 'speak-free', prompt: 'تدريب حر' });
  }

  function convo(el, id) {
    var c = SP().convos.find(function (x) { return x.id === id; });
    if (!c) { overview(el); return; }
    ECM.app.crumbs([{ t: 'استوديو المحادثة', href: '#/speak' }, { t: c.ar }]);
    var i = 0, log = [];
    function draw() {
      var h = '<div class="adv-scene"><div class="ph" style="height:180px;' + ui.photoStyle(c.photo) + '"><div class="cap"><span class="tag light">' + c.lv + '</span><h2>' + esc(c.ar) + ' · <span class="es" lang="es">' + esc(c.es) + '</span></h2></div></div><div class="body">';
      U.each(log, function (l) {
        h += '<div class="bubble them"><span class="es" lang="es" dir="ltr">' + esc(l.q) + '</span></div><div class="bubble me"><span class="es" lang="es" dir="ltr">' + esc(l.a) + '</span><span class="small muted">' + (l.n ? l.n + ' ملاحظة' : 'بلا ملاحظات ✓') + '</span></div>';
      });
      if (i < c.q.length) {
        var q = c.q[i];
        h += '<div class="bubble them"><span class="small muted">السؤال ' + (i + 1) + ' من ' + c.q.length + '</span><span class="es" lang="es" dir="ltr">' + esc(q[0]) + '</span> ' + U.say(q[0], 'استمع', 'light') + '<div class="small muted mt8">' + esc(q[1]) + '</div></div>' +
          '<div class="card tight mt8" id="ans"></div><div class="btns flex wrap mt8"><button class="btn navy" id="nextQ" disabled>السؤال التالي ←</button><button class="btn ghost" id="skipQ">تخطَّ</button></div>';
      } else {
        h += '<div class="fb ok"><b class="t">أحسنت! أنهيت المحادثة.</b>أجبتَ عن ' + log.length + ' أسئلة. راجع الملاحظات أعلاه، ثم أعد المحادثة بعد يومين لتلاحظ تقدّمك.</div><div class="btns flex wrap"><button class="btn" id="again">أعد المحادثة</button><a class="btn ghost" href="#/speak">محادثة أخرى</a></div>';
        var r = ECM.store.state.lessons['speak-' + c.id] || {}; r.done = r.done || new Date().toISOString(); ECM.store.state.lessons['speak-' + c.id] = r; ECM.store.save();
      }
      el.innerHTML = h + '</div></div>';
      if (i < c.q.length) {
        var q2 = c.q[i], last = '';
        if (active) active.stop();
        active = ECM.speakBox(U.$('#ans', el), { prompt: q2[0], expected: q2[2], model: q2[3], onChecked: function (t) { last = t; U.$('#nextQ', el).disabled = false; } });
        U.$('#nextQ', el).onclick = function () { log.push({ q: q2[0], a: last, n: ECM.checker.analyze(last).length }); i++; draw(); };
        U.$('#skipQ', el).onclick = function () { i++; draw(); };
        setTimeout(function () { ECM.tts.speak(q2[0]); }, 300);
      } else U.$('#again', el).onclick = function () { i = 0; log = []; draw(); };
    }
    draw();
  }

  function sound(el, id) {
    var s = SP().sounds.find(function (x) { return x.id === id; });
    if (!s) { overview(el); return; }
    ECM.app.crumbs([{ t: 'استوديو المحادثة', href: '#/speak' }, { t: 'النطق: ' + s.t }]);
    var items = s.words.concat(s.sentences);
    var h = '<div class="card navy"><span class="eyebrow">PRONUNCIACIÓN</span><h1 style="color:#fff" class="es" lang="es">' + esc(s.t) + '</h1><p class="muted">' + rich(s.ar) + '</p>' +
      '<div class="flex wrap mt8"><label class="small" style="margin-left:10px">سرعة النطق:</label><select class="inp" id="rate" style="width:150px"><option value="0.6">بطيئة جدًا</option><option value="0.75">بطيئة</option><option value="0.9">عادية</option><option value="1">طبيعية</option></select></div></div>';
    h += '<div class="card"><h3>1. استمع وكرّر</h3><div class="row">' + U.map(items, function (w) { return '<div class="c4"><div class="card tight flex between"><span class="es" lang="es" style="font-size:19px;font-weight:600">' + esc(w) + '</span>' + U.say(w) + '</div></div>'; }).join('') + '</div></div>';
    h += '<div class="card"><h3>2. سجّل نفسك وقارن</h3><p>اختر جملة، استمع إليها، ثم سجّل صوتك. سنقارن ما فهمه المتصفح بالجملة الأصلية — إذا التُقطت الكلمات صحيحة فنطقك مفهوم.</p>' +
      '<select class="inp es-in" id="target">' + U.map(items, function (w) { return '<option>' + esc(w) + '</option>'; }).join('') + '</select><div id="pbox" class="mt8"></div><div id="cmp"></div></div>';
    el.innerHTML = h;
    var rs = U.$('#rate', el); rs.value = String(ECM.store.state.settings.rate || 0.9);
    rs.onchange = function () { ECM.store.state.settings.rate = Number(rs.value); ECM.store.save(); };
    active = ECM.speakBox(U.$('#pbox', el), { prompt: 'نطق: ' + s.t, checkLabel: 'قارن بالجملة الأصلية', onChecked: function (text) {
      var target = U.$('#target', el).value, tw = U.norm(target).split(' '), said = U.norm(text).split(' '), hit = 0;
      U.each(tw, function (w) { if (said.indexOf(w) !== -1) hit++; });
      var p = U.pct(hit, tw.length);
      U.$('#cmp', el).innerHTML = '<div class="fb ' + (p >= 80 ? 'ok' : 'no') + '"><b class="t">تطابق الكلمات: ' + p + '%</b>' + (p >= 80 ? 'ممتاز، نطقك مفهوم.' : 'كرّر بعد الاستماع ببطء، وركّز على الصوت: ' + esc(s.t)) + '<br><span class="small">الهدف: <span class="es-inline" lang="es">' + esc(target) + '</span></span></div>';
    } });
  }

  ECM.views.speak = function (el, args) {
    if (active) { active.stop(); active = null; }
    if (args[0] === 'c') convo(el, args[1]);
    else if (args[0] === 'p') sound(el, args[1]);
    else overview(el);
    return { cleanup: function () { if (active) active.stop(); } };
  };
})(window.ECM);
