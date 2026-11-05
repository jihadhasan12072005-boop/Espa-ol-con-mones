/* Español con Mones — text-to-speech (TTS) and speech-to-text (STT).
 * Both are feature-detected. Nothing is assumed to exist.            */
(function (root) {
  'use strict';
  var ECM = root.ECM = root.ECM || {};

  /* =========================== TTS =========================== */
  var synth = root.speechSynthesis || null;
  var hasTTS = !!(synth && root.SpeechSynthesisUtterance);
  var voices = [], chosen = null, listeners = [];

  function score(v) {
    var l = (v.lang || '').replace('_', '-').toLowerCase(), n = (v.name || '').toLowerCase();
    if (l.indexOf('es') !== 0) return -1;
    var s = 10;
    if (l === 'es-es') s += 50;                  // Spain first
    if (/m[oó]nica|jorge|lucia|luc[ií]a|elvira|alvaro|helena|laura|pablo/.test(n)) s += 15;
    if (/google|premium|enhanced|natural|siri/.test(n)) s += 8;
    if (v.localService) s += 3;
    return s;
  }
  function loadVoices() {
    if (!hasTTS) return;
    var all = [];
    try { all = synth.getVoices() || []; } catch (e) { all = []; }
    voices = [];
    for (var i = 0; i < all.length; i++) if (score(all[i]) >= 0) voices.push(all[i]);
    voices.sort(function (a, b) { return score(b) - score(a); });
    var pref = ECM.store && ECM.store.state.settings.voice;
    chosen = null;
    for (var j = 0; j < voices.length; j++) if (voices[j].name === pref) chosen = voices[j];
    if (!chosen) chosen = voices[0] || null;
    for (var k = 0; k < listeners.length; k++) { try { listeners[k](); } catch (e2) { /* ignore */ } }
  }
  if (hasTTS) {
    loadVoices();
    if (synth.addEventListener) synth.addEventListener('voiceschanged', loadVoices);
    else synth.onvoiceschanged = loadVoices;
    setTimeout(loadVoices, 700); setTimeout(loadVoices, 2500);
  }

  function chunks(text) {
    // split long text at sentence boundaries (Chrome cuts long utterances)
    var parts = String(text).match(/[^.!?¿¡;:]+[.!?;:]*|[¿¡][^?!]+[?!]/g) || [text];
    var out = [], cur = '';
    for (var i = 0; i < parts.length; i++) {
      if ((cur + parts[i]).length > 180 && cur) { out.push(cur); cur = ''; }
      cur += parts[i];
    }
    if (cur.replace(/\s/g, '')) out.push(cur);
    return out;
  }

  var playingBtn = null, seq = 0;
  function speak(text, opts) {
    opts = opts || {};
    if (!hasTTS) { if (opts.onend) opts.onend(false); return false; }
    var my = ++seq;
    try { synth.cancel(); } catch (e) { /* ignore */ }
    var parts = chunks(text), i = 0;
    var rate = opts.rate || (ECM.store ? ECM.store.state.settings.rate : 0.9) || 0.9;
    function next() {
      if (my !== seq) return;
      if (i >= parts.length) { if (opts.onend) opts.onend(true); return; }
      var u = new SpeechSynthesisUtterance(parts[i++]);
      u.lang = (chosen && chosen.lang) || 'es-ES';
      if (chosen) u.voice = chosen;
      u.rate = rate; u.pitch = opts.pitch || 1;
      u.onend = function () { setTimeout(next, 60); };
      u.onerror = function () { if (my === seq && opts.onend) opts.onend(false); };
      try { synth.speak(u); } catch (e) { if (opts.onend) opts.onend(false); }
    }
    // Safari sometimes needs a tick after cancel()
    setTimeout(next, 30);
    return true;
  }
  /* play several lines in order (dialogues). lines: [{text, pitch}] */
  function speakLines(lines, onend) {
    var i = 0, my;
    function go() {
      if (i >= lines.length) { if (onend) onend(); return; }
      var l = lines[i++];
      speak(l.text, { pitch: l.pitch, onend: function (ok) { if (ok === false) { if (onend) onend(); return; } setTimeout(go, 350); } });
    }
    go();
  }
  function stop() { seq++; if (hasTTS) { try { synth.cancel(); } catch (e) { /* ignore */ } } }

  ECM.tts = {
    supported: function () { return hasTTS; },
    hasSpanishVoice: function () { return voices.length > 0; },
    voices: function () { return voices; },
    current: function () { return chosen; },
    setVoice: function (name) {
      for (var i = 0; i < voices.length; i++) if (voices[i].name === name) chosen = voices[i];
      if (ECM.store) { ECM.store.state.settings.voice = name; ECM.store.save(); }
    },
    onVoices: function (fn) { listeners.push(fn); },
    speak: speak, speakLines: speakLines, stop: stop
  };

  /* =========================== STT ===========================
   * Explicit record / stop workflow. Browsers (notably Safari) end a
   * recognition session after silence; we restart automatically until the
   * learner presses «إنهاء التسجيل», so hesitation never cuts the answer.  */
  var SR = root.SpeechRecognition || root.webkitSpeechRecognition || null;
  var secure = !root.location || root.location.protocol === 'https:' || root.location.hostname === 'localhost' || root.location.hostname === '127.0.0.1';

  function createRecorder(cb) {
    cb = cb || {};
    var rec = null, wanted = false, finalText = '', base = '', restarts = 0, startedAt = 0;

    function state(s) { if (cb.onState) cb.onState(s); }
    function text(interim) {
      var t = (base ? base + ' ' : '') + finalText;
      if (cb.onText) cb.onText(t.replace(/\s+/g, ' ').replace(/^\s+/, ''), interim || '');
    }
    function build() {
      var r = new SR();
      r.lang = 'es-ES';
      r.continuous = true;
      r.interimResults = true;
      r.maxAlternatives = 1;
      r.onresult = function (ev) {
        var interim = '';
        for (var i = ev.resultIndex; i < ev.results.length; i++) {
          var res = ev.results[i];
          if (res.isFinal) finalText += ' ' + res[0].transcript;
          else interim += res[0].transcript;
        }
        text(interim);
      };
      r.onerror = function (ev) {
        var e = ev && ev.error;
        if (e === 'no-speech' || e === 'aborted') return; // silence: keep waiting
        if (e === 'not-allowed' || e === 'service-not-allowed') {
          wanted = false; state('idle');
          if (cb.onError) cb.onError('لم يُسمح باستخدام الميكروفون. اسمح للمتصفح باستخدام الميكروفون (أو فعّل «الإملاء/Dictation» في إعدادات macOS) ثم أعد المحاولة. يمكنك دائمًا كتابة إجابتك.');
          return;
        }
        if (e === 'network') {
          wanted = false; state('idle');
          if (cb.onError) cb.onError('التعرّف على الصوت يحتاج اتصالًا بالإنترنت في هذا المتصفح. تحقق من الاتصال أو اكتب إجابتك.');
          return;
        }
        if (e === 'language-not-supported') {
          wanted = false; state('idle');
          if (cb.onError) cb.onError('المتصفح لا يدعم التعرّف على الإسبانية. اكتب إجابتك في المربع.');
        }
      };
      r.onend = function () {
        if (wanted && restarts < 200) {
          restarts++;
          // continue the same answer after a pause
          setTimeout(function () { if (wanted) { try { rec.start(); } catch (e) { rec = build(); try { rec.start(); } catch (e2) { stopNow(); } } } }, 150);
        } else { state('idle'); if (cb.onStop) cb.onStop(); }
      };
      return r;
    }
    function start(currentText) {
      if (!SR) return false;
      base = (currentText || '').replace(/\s+$/, '');
      finalText = ''; restarts = 0; wanted = true; startedAt = Date.now();
      try { rec = build(); rec.start(); state('recording'); return true; } catch (e) {
        wanted = false; state('idle');
        if (cb.onError) cb.onError('تعذّر تشغيل الميكروفون. أعد تحميل الصفحة أو اكتب إجابتك.');
        return false;
      }
    }
    function stopNow() {
      wanted = false;
      if (rec) { try { rec.stop(); } catch (e) { /* ignore */ } }
      state('idle');
    }
    return { start: start, stop: stopNow, recording: function () { return wanted; }, startedAt: function () { return startedAt; } };
  }

  ECM.stt = {
    supported: function () { return !!SR && secure; },
    reason: function () {
      if (!SR) return 'متصفحك الحالي لا يدعم تحويل الكلام إلى نص (التعرّف على الصوت). هذا متوقَّع في إصدارات Safari القديمة. اكتب إجابتك بالإسبانية في المربع وسيصحّحها التطبيق بالطريقة نفسها. للتسجيل الصوتي جرّب Google Chrome أو Safari 14.1 فأحدث.';
      if (!secure) return 'التسجيل الصوتي يعمل فقط عند فتح التطبيق من رابطه الآمن (https).';
      return '';
    },
    create: createRecorder
  };
})(typeof window !== 'undefined' ? window : this);
