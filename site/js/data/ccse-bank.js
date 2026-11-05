/* Builds the unified CCSE practice bank: the original bank (ccse.js) + the questions
 * written for each culture lesson. Every question gets: id, tarea, lesson, difficulty.
 * ALL questions are ORIGINAL practice questions (official = false).                 */
(function (ECM) {
  'use strict';
  var U = ECM.util, C = ECM.CCSE;
  var LES = ECM.CULTURE || [];
  function lessonFor(topic) {
    for (var i = 0; i < LES.length; i++) if (LES[i].topics && LES[i].topics.indexOf(topic) !== -1) return LES[i].id;
    return null;
  }
  function diff(row) {
    if (!row[3]) return 1;                                    // V/F
    var o = row[3].join(' ');
    if (/\d{3,}/.test(o) || /\d{3,}/.test(row[2])) return 3; // dates, numbers
    return 2;
  }
  var all = [];
  U.each(C.bank, function (r, i) {
    var t = C.topics.find(function (x) { return x.id === r[1]; }) || {};
    all.push({ id: 'ccse-' + i, type: r[3] ? 'mc' : 'tf', stem: r[2], stemLang: 'es', opts: r[3], answer: r[4], why: r[5],
      topic: t.ar || 'CCSE', topicId: r[1], tarea: r[0], lesson: lessonFor(r[1]), diff: diff(r), level: 'CCSE', official: false, src: 'CCSE · المهمة ' + r[0] });
  });
  U.each(LES, function (l) {
    U.each(l.q || [], function (r, i) {
      all.push({ id: 'cq-' + l.id + '-' + i, type: r[1] ? 'mc' : 'tf', stem: r[0], stemLang: 'es', opts: r[1], answer: r[2], why: r[3],
        topic: l.ar, topicId: l.id, tarea: l.area, lesson: l.id, diff: r[4] || 2, level: 'CCSE', official: false, src: 'درس: ' + l.ar });
    });
  });
  C.all = all;
  C.lesson = function (id) { return LES.find(function (l) { return l.id === id; }); };
  C.areaNames = { 1: 'Gobierno, legislación y participación ciudadana', 2: 'Derechos y deberes fundamentales', 3: 'Organización territorial de España. Geografía física y política', 4: 'Cultura e historia de España', 5: 'Sociedad española' };
  C.areaAr = { 1: 'الحكم والتشريع والمشاركة المواطنية', 2: 'الحقوق والواجبات الأساسية', 3: 'التنظيم الإقليمي والجغرافيا', 4: 'الثقافة والتاريخ', 5: 'المجتمع الإسباني' };
  /* Official manual facts (verified from the official PDF on GitHub Actions, Nov 2026) */
  C.official = {
    title: 'Manual de preparación de la prueba CCSE 2026', year: 2026, publisher: 'Instituto Cervantes',
    url: 'https://cervantes.org/sites/public/produccion/files/2026-10/manual-preparacion-prueba-ccse-2026.pdf',
    total: 315, perTarea: { 1: 134, 2: 36, 3: 25, 4: 36, 5: 84 },
    ranges: { 1: [1001, 1134], 2: [2001, 2036], 3: [3001, 3025], 4: [4001, 4036], 5: [5001, 5084] }
  };
  C.track = function (q, ok) {
    var s = ECM.store.state.qstats, r = s[q.id] || (s[q.id] = { r: 0, w: 0 });
    if (ok) r.r++; else r.w++;
    r.last = ok ? 1 : 0; r.at = new Date().toISOString();
    ECM.store.save();
  };
  C.status = function (id) { var r = ECM.store.state.qstats[id]; if (!r) return 'new'; return r.last ? 'ok' : 'bad'; };
  C.hard = function () { return U.filter(all, function (q) { var r = ECM.store.state.qstats[q.id]; return r && r.w > 0 && (r.w >= r.r || !r.last); }); };
})(window.ECM);
