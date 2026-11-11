/* Español con Mones — polyfills + helpers (ES5 only, old Safari safe). */
(function (root) {
  'use strict';
  var ECM = root.ECM = root.ECM || {};

  /* ---------- minimal polyfills (only what the app uses) ---------- */
  if (!Array.prototype.find) {
    Array.prototype.find = function (fn, t) {
      for (var i = 0; i < this.length; i++) if (fn.call(t, this[i], i, this)) return this[i];
      return undefined;
    };
  }
  if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (fn, t) {
      for (var i = 0; i < this.length; i++) if (fn.call(t, this[i], i, this)) return i;
      return -1;
    };
  }
  if (!Object.assign) {
    Object.assign = function (t) {
      for (var i = 1; i < arguments.length; i++) {
        var s = arguments[i];
        if (s) for (var k in s) if (Object.prototype.hasOwnProperty.call(s, k)) t[k] = s[k];
      }
      return t;
    };
  }
  if (!Date.now) Date.now = function () { return new Date().getTime(); };
  if (root.Element && !Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector;
  }
  if (root.Element && !Element.prototype.closest) {
    Element.prototype.closest = function (sel) {
      var el = this;
      while (el && el.nodeType === 1) { if (el.matches(sel)) return el; el = el.parentNode; }
      return null;
    };
  }

  ECM.views = ECM.views || {};
  var U = ECM.util = {};

  /* image path → embedded copy in the single-file build (window.ECM_IMG), otherwise the file itself */
  U.img = function (path) { var m = window.ECM_IMG; return (m && (m[path] || m[path.replace('/thumb/', '/')])) || path; };
  U.esc = function (s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  /* Rich text: escape, then [[spanish]] -> LTR Spanish span, **bold**, newline -> <br>.
     {{x}} -> highlighted (verb ending, key part). */
  U.rich = function (s) {
    var h = U.esc(s);
    h = h.replace(/\[\[([\s\S]+?)\]\]/g, function (m, es) {
      return '<span class="es-inline" lang="es" dir="ltr">' + es + '</span>';
    });
    h = h.replace(/\*\*([\s\S]+?)\*\*/g, '<b>$1</b>');
    h = h.replace(/\{\{([\s\S]+?)\}\}/g, '<mark class="hl">$1</mark>');
    h = h.replace(/\n/g, '<br>');
    return h;
  };
  /* Spanish text with {{highlight}} only */
  U.es = function (s) {
    return U.esc(s).replace(/\{\{([\s\S]+?)\}\}/g, '<mark class="hl">$1</mark>');
  };
  U.plain = function (s) { return String(s || '').replace(/\{\{|\}\}/g, ''); };

  U.$ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  U.$$ = function (sel, ctx) {
    var n = (ctx || document).querySelectorAll(sel), a = [];
    for (var i = 0; i < n.length; i++) a.push(n[i]);
    return a;
  };
  U.each = function (arr, fn) { for (var i = 0; i < arr.length; i++) fn(arr[i], i); };
  U.map = function (arr, fn) { var o = []; for (var i = 0; i < arr.length; i++) o.push(fn(arr[i], i)); return o; };
  U.filter = function (arr, fn) { var o = []; for (var i = 0; i < arr.length; i++) if (fn(arr[i], i)) o.push(arr[i]); return o; };
  U.sum = function (arr, fn) { var s = 0; for (var i = 0; i < arr.length; i++) s += fn ? fn(arr[i]) : arr[i]; return s; };
  U.keys = function (o) { var k = []; for (var x in o) if (Object.prototype.hasOwnProperty.call(o, x)) k.push(x); return k; };
  U.contains = function (arr, x) { return arr.indexOf(x) !== -1; };

  /* deterministic RNG (mulberry32) so exam models are stable */
  U.rng = function (seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul ? Math.imul(t ^ (t >>> 15), t | 1) : mulFallback(t ^ (t >>> 15), t | 1);
      t ^= t + (Math.imul ? Math.imul(t ^ (t >>> 7), t | 61) : mulFallback(t ^ (t >>> 7), t | 61));
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  function mulFallback(a, b) {
    var ah = (a >>> 16) & 0xffff, al = a & 0xffff, bh = (b >>> 16) & 0xffff, bl = b & 0xffff;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
  }
  U.hash = function (str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = (h * 16777619) >>> 0; }
    return h;
  };
  U.shuffle = function (arr, rnd) {
    var a = arr.slice(), r = rnd || Math.random;
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };

  /* normalise Spanish answers for tolerant comparison */
  U.norm = function (s, keepAccents) {
    s = String(s || '').toLowerCase();
    s = s.replace(/[¿?¡!.,;:"«»()]/g, ' ').replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
    if (!keepAccents) s = s.replace(/[áà]/g, 'a').replace(/[éè]/g, 'e').replace(/[íì]/g, 'i').replace(/[óò]/g, 'o').replace(/[úùü]/g, 'u');
    return s;
  };

  var AR_DIGITS = false; // keep Western digits — clearer for numbers mixed with Spanish
  U.num = function (n) { return AR_DIGITS ? String(n) : String(n); };
  U.pct = function (a, b) { return b ? Math.round(100 * a / b) : 0; };

  var MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  U.date = function (iso) {
    if (!iso) return '';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  };
  U.time = function (iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    var m = d.getMinutes();
    return d.getHours() + ':' + (m < 10 ? '0' : '') + m;
  };
  U.ago = function (iso) {
    if (!iso) return 'لم يُحفظ بعد';
    var s = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
    if (s < 10) return 'الآن';
    if (s < 60) return 'قبل ' + s + ' ثانية';
    var m = Math.round(s / 60);
    if (m < 60) return 'قبل ' + m + ' دقيقة';
    var h = Math.round(m / 60);
    if (h < 24) return 'قبل ' + h + ' ساعة';
    return U.date(iso) + ' ' + U.time(iso);
  };
  U.dayKey = function (d) {
    d = d || new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  };
  U.mmss = function (sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  };

  /* audio button markup; text is stored in data attribute, handled by delegation */
  U.say = function (text, label, cls) {
    return '<button type="button" class="say ' + (cls || '') + '" data-say="' + U.esc(U.plain(text)) +
      '" aria-label="استمع: ' + U.esc(U.plain(text)) + '"><span class="say-ic" aria-hidden="true">&#9654;</span>' +
      (label ? '<span>' + U.esc(label) + '</span>' : '') + '</button>';
  };
  U.esBlock = function (text, cls) {
    return '<span class="es ' + (cls || '') + '" lang="es" dir="ltr">' + U.es(text) + '</span>';
  };

  U.debounce = function (fn, ms) {
    var t;
    return function () { var a = arguments, s = this; clearTimeout(t); t = setTimeout(function () { fn.apply(s, a); }, ms); };
  };
})(typeof window !== 'undefined' ? window : this);
