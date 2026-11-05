/* Español con Mones — persistent progress store.
 *
 * Storage keys are part of the app's contract and must NEVER be renamed:
 *   ecm.v1        current state (JSON)
 *   ecm.v1.prev   last known-good state from the previous session (recovery)
 * Schema changes are handled by MIGRATIONS below (state.schema).
 */
(function (root) {
  'use strict';
  var ECM = root.ECM = root.ECM || {};
  var U = ECM.util;

  var KEY = 'ecm.v1', PREV = 'ecm.v1.prev', SCHEMA = 1;
  var LEGACY_KEYS = ['jihad_v3']; // previous single-file version (same origin only)

  function fresh() {
    var now = new Date().toISOString();
    return {
      schema: SCHEMA, app: 'espanol-con-mones', createdAt: now, savedAt: null,
      profile: { name: 'Mones', level: 'A1' },
      lessons: {}, vocab: {}, exams: [], mistakes: {}, adventures: {},
      speaking: { attempts: 0, history: [] }, achievements: {}, activity: {},
      dele: {}, ccse: {}, settings: { rate: 0.9, voice: '' }, lastBackupAt: null, legacy: null
    };
  }

  /* Fill any missing branches so older states keep working after updates. */
  function normalise(s) {
    var f = fresh();
    if (!s || typeof s !== 'object') return f;
    for (var k in f) {
      if (!f.hasOwnProperty(k)) continue;
      if (s[k] === undefined || s[k] === null && f[k] !== null) s[k] = f[k];
    }
    if (!(s.exams instanceof Array)) s.exams = [];
    if (!s.speaking.history) s.speaking.history = [];
    if (!s.settings) s.settings = f.settings;
    return s;
  }

  var MIGRATIONS = {
    // 1: initial schema. Add future steps as  2: function (s) { ...; return s; }
  };
  function migrate(s) {
    var v = s.schema || 1;
    while (v < SCHEMA) { v++; if (MIGRATIONS[v]) s = MIGRATIONS[v](s); s.schema = v; }
    return normalise(s);
  }

  var ls = null, storageOk = true, lastError = '';
  try {
    ls = root.localStorage;
    var t = '__ecm_test__';
    ls.setItem(t, '1'); ls.removeItem(t);
  } catch (e) { storageOk = false; ls = null; lastError = String(e && e.message || e); }

  function readKey(k) {
    if (!ls) return null;
    try { var raw = ls.getItem(k); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }

  var state, recovered = false;
  (function load() {
    var main = readKey(KEY);
    if (main && typeof main === 'object' && main.app === 'espanol-con-mones') {
      state = migrate(main);
      // snapshot last good state for recovery (once per session start)
      try { ls.setItem(PREV, JSON.stringify(main)); } catch (e) { /* ignore quota */ }
      return;
    }
    var prev = readKey(PREV);
    if (prev && prev.app === 'espanol-con-mones') { state = migrate(prev); recovered = true; return; }
    state = fresh();
    // same-origin legacy data (only if the old version was ever hosted on this same address)
    for (var i = 0; i < LEGACY_KEYS.length; i++) {
      var old = readKey(LEGACY_KEYS[i]);
      if (old) { state.legacy = { importedAt: new Date().toISOString(), source: LEGACY_KEYS[i], data: old }; }
    }
  })();

  var listeners = [], timer = null, dirty = false;

  function writeNow() {
    clearTimeout(timer); timer = null;
    if (!dirty) return true;
    if (!ls) { emit(false); return false; }
    state.savedAt = new Date().toISOString();
    try {
      ls.setItem(KEY, JSON.stringify(state));
      dirty = false; storageOk = true; lastError = '';
      emit(true);
      return true;
    } catch (e) {
      storageOk = false; lastError = String(e && e.message || e);
      // try to free space: trim long histories, then retry once
      trim();
      try { ls.setItem(KEY, JSON.stringify(state)); dirty = false; storageOk = true; emit(true); return true; } catch (e2) { /* fallthrough */ }
      emit(false);
      return false;
    }
  }
  function trim() {
    if (state.exams.length > 300) state.exams = state.exams.slice(0, 300);
    if (state.speaking.history.length > 40) state.speaking.history = state.speaking.history.slice(0, 40);
    try { ls.removeItem(PREV); } catch (e) { /* ignore */ }
  }
  function emit(ok) { for (var i = 0; i < listeners.length; i++) { try { listeners[i](ok); } catch (e) { /* ignore */ } } }

  function save() {
    dirty = true;
    if (!timer) timer = setTimeout(writeNow, 400);
  }

  // flush on leaving / hiding the page (Safari fires pagehide reliably)
  if (root.addEventListener) {
    root.addEventListener('pagehide', writeNow);
    root.addEventListener('beforeunload', writeNow);
    if (root.document) document.addEventListener('visibilitychange', function () { if (document.hidden) writeNow(); });
  }
  // ask the browser not to evict our data where supported (no-op elsewhere)
  try { if (root.navigator && navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* ignore */ }

  /* ---------- activity log (minutes/actions per day) ---------- */
  function touch(kind) {
    var k = U.dayKey();
    var a = state.activity[k] || (state.activity[k] = { n: 0 });
    a.n++;
    if (kind) a[kind] = (a[kind] || 0) + 1;
    // keep ~1 year
    var ks = U.keys(state.activity);
    if (ks.length > 370) { ks.sort(function (x, y) { return new Date(x) - new Date(y); }); delete state.activity[ks[0]]; }
    save();
  }

  /* ---------- export / import ---------- */
  function exportJSON() {
    writeNow();
    return JSON.stringify({ app: 'espanol-con-mones', kind: 'backup', schema: SCHEMA, exportedAt: new Date().toISOString(), data: state }, null, 1);
  }

  /* returns {ok, msg} */
  function importJSON(text) {
    var obj;
    try { obj = JSON.parse(text); } catch (e) { return { ok: false, msg: 'الملف ليس ملف نسخة احتياطية صالحًا (JSON).' }; }
    var incoming = null, legacy = null;
    if (obj && obj.app === 'espanol-con-mones' && obj.data) incoming = obj.data;
    else if (obj && obj.app === 'espanol-con-mones' && obj.lessons) incoming = obj;
    else if (obj && (obj.progress || obj.done || obj.results || obj.errors)) legacy = obj.progress || obj;
    if (!incoming && !legacy) return { ok: false, msg: 'لم نتعرّف على محتوى الملف. تأكّد أنه نسخة من «إسبانية مع مؤنس».' };
    // keep the current state as recovery snapshot before replacing
    try { if (ls) ls.setItem(PREV, JSON.stringify(state)); } catch (e) { /* ignore */ }
    if (incoming) {
      if ((incoming.schema || 1) > SCHEMA) return { ok: false, msg: 'هذه النسخة أحدث من التطبيق الحالي. حدّث الصفحة ثم أعد المحاولة.' };
      state = migrate(incoming);
      api.state = state;
      dirty = true; writeNow();
      return { ok: true, msg: 'تمت استعادة التقدم بنجاح.' };
    }
    state.legacy = { importedAt: new Date().toISOString(), source: 'file', data: legacy };
    dirty = true; writeNow();
    return { ok: true, msg: 'تم استيراد بيانات النسخة القديمة (الدروس المنجزة والملاحظات) وحفظها في قسم «تقدمي».' };
  }

  function reset() {
    try { if (ls) ls.setItem(PREV, JSON.stringify(state)); } catch (e) { /* ignore */ }
    state = fresh(); api.state = state; dirty = true; writeNow();
  }

  var api = ECM.store = {
    KEY: KEY, SCHEMA: SCHEMA,
    state: state,
    save: save, flush: writeNow, touch: touch,
    onSave: function (fn) { listeners.push(fn); },
    ok: function () { return storageOk; },
    error: function () { return lastError; },
    recovered: function () { return recovered; },
    exportJSON: exportJSON, importJSON: importJSON, reset: reset,
    _fresh: fresh
  };
})(typeof window !== 'undefined' ? window : this);
