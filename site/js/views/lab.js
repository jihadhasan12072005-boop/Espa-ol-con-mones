/* Grammar Laboratory: conjugate any verb in every tense + typed drills. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, ui = ECM.ui, C = ECM.conj;
  var ORDER = ['presente', 'perfecto', 'indefinido', 'imperfecto', 'pluscuamperfecto', 'futuro', 'condicional', 'subjuntivo', 'subjImperfecto', 'imperativo', 'imperativoNeg'];
  var LEVEL = { presente: 'A1', perfecto: 'A2', indefinido: 'A2', imperfecto: 'A2', futuro: 'A2', imperativo: 'A2', imperativoNeg: 'B1', subjuntivo: 'B1', condicional: 'B1', pluscuamperfecto: 'B1', subjImperfecto: 'B2' };

  function verbOptions(sel) {
    var vs = U.keys(C.VERBS).sort(function (a, b) { return a.localeCompare ? a.localeCompare(b) : (a < b ? -1 : 1); });
    return U.map(vs, function (v) { return '<option value="' + v + '"' + (v === sel ? ' selected' : '') + '>' + v + ' — ' + esc(C.meaning(v)) + '</option>'; }).join('');
  }
  function valid(v) { return /^[a-záéíóúñ]+(ar|er|ir|ír)(se)?$/.test(v); }

  ECM.views.lab = function (el, args) {
    ECM.app.crumbs([{ t: 'مختبر القواعد' }]);
    var verb = args[0] && valid(args[0]) ? args[0] : 'tener', mode = args[1] || 'tables';
    var info = C.isKnown(verb.replace(/se$/, '')) ? C.meaning(verb.replace(/se$/, '')) : '';
    var h = '<div class="card navy"><span class="eyebrow">LABORATORIO DE GRAMÁTICA</span><h1 style="color:#fff">مختبر القواعد والتصريف</h1>' +
      '<p class="muted">اختر أي فعل من ' + U.keys(C.VERBS).length + ' فعلًا شائعًا (أو اكتب فعلًا منتظمًا آخر) لترى تصريفه في كل الأزمنة، مع تمييز الصيغ الشاذة باللون الأحمر، ثم تدرّب عليه كتابةً.</p>' +
      '<div class="row mt16"><div class="c2"><label class="lbl" style="color:#fff">الفعل</label><select class="inp es-in" id="verbSel">' + verbOptions(verb) + '</select></div>' +
      '<div class="c2"><label class="lbl" style="color:#fff">أو اكتب فعلًا (مثل: cocinar, levantarse)</label><div class="flex"><input class="inp es-in grow" id="verbIn" lang="es" placeholder="hablar" value=""><button class="btn gold" id="verbGo" style="margin-right:8px">اعرض</button></div></div></div></div>';
    h += '<div class="tabs mt16"><a href="#/lab/' + verb + '" class="' + (mode === 'tables' ? 'on' : '') + '">جداول التصريف</a><a href="#/lab/' + verb + '/drill" class="' + (mode === 'drill' ? 'on' : '') + '">تدريب كتابي</a></div>';
    if (mode === 'drill') {
      h += '<div class="card"><h3>تدريب على ' + esc(verb) + '</h3><p>اختر الزمن، ثم اكتب الصيغ الست. يُقبل الجواب بدون نبرات، لكنك ستُنبَّه إليها.</p><select class="inp" id="drT" style="max-width:360px">' +
        U.map(ORDER, function (t) { return '<option value="' + t + '">' + esc(C.TENSES[t].ar) + ' — ' + esc(C.TENSES[t].es) + ' (' + LEVEL[t] + ')</option>'; }).join('') + '</select><button class="btn mt8" id="drGo">ابدأ</button><div id="drill" class="mt16"></div></div>';
    } else {
      var head = '<div class="card"><div class="flex wrap between"><div><h2 class="es display-es" lang="es" style="font-size:28px">' + esc(verb) + '</h2><div class="muted">' + esc(info || 'فعل منتظم (حسب النهاية)') +
        (C.stemChange(verb) ? ' · تغيّر في الجذر: ' + esc(C.stemChange(verb)) : '') + (C.isIrregular(verb) ? ' · <b style="color:#B4423A">فعل شاذ</b>' : '') + '</div></div>' +
        '<div class="small"><b>Participio:</b> <span class="es-inline" lang="es">' + esc(C.participio(verb.replace(/se$/, ''))) + '</span> · <b>Gerundio:</b> <span class="es-inline" lang="es">' + esc(C.gerundio(verb.replace(/se$/, ''))) + '</span></div></div></div>';
      h += head + '<div class="conj-grid">' + U.map(ORDER, function (t) {
        var tbl = ui.conjTable(verb, t, { title: C.TENSES[t].ar, sub: C.TENSES[t].es + ' · ' + LEVEL[t] });
        return tbl;
      }).join('') + '</div>';
      if (/se$/.test(verb)) h += '<div class="notice">' + U.rich('الأمر المثبت للأفعال الانعكاسية يلتصق فيه الضمير بالفعل مع نبرة: [[levántate, levántese, levantaos]] — راجع درس «الأمر مع الضمائر» (B1).') + '</div>';
    }
    el.innerHTML = h;
    U.$('#verbSel', el).onchange = function (e) { ECM.app.go('#/lab/' + e.target.value + (mode === 'drill' ? '/drill' : '')); };
    var go = function () { var v = U.$('#verbIn', el).value.toLowerCase().replace(/\s/g, ''); if (valid(v)) ECM.app.go('#/lab/' + v + (mode === 'drill' ? '/drill' : '')); else ui.toast('اكتب مصدرًا ينتهي بـ -ar أو -er أو -ir.'); };
    U.$('#verbGo', el).onclick = go;
    U.$('#verbIn', el).onkeydown = function (e) { if ((e.keyCode || e.which) === 13) go(); };
    if (mode === 'drill') U.$('#drGo', el).onclick = function () {
      var t = U.$('#drT', el).value, forms = C.conjugate(verb, t), imp = t.indexOf('imperativo') === 0;
      var labels = imp ? [null, 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'] : C.PERSONS;
      var qs = [];
      for (var p = 0; p < 6; p++) {
        if (!forms[p]) continue;
        qs.push({ id: 'lab-' + verb + '-' + t + '-' + p, type: 'type', stem: labels[p] + ' ___ (' + verb + ')', stemLang: 'es', noSay: true, answer: forms[p],
          prompt: 'الزمن: <b>' + esc(C.TENSES[t].ar) + '</b>', why: 'التصريف الكامل: [[' + U.filter(forms, Boolean).join(', ') + ']]', topic: 'التصريف: ' + C.TENSES[t].ar, level: LEVEL[t], src: 'مختبر القواعد' });
      }
      if (!qs.length) { U.$('#drill', el).innerHTML = '<div class="notice">لا توجد صيغ لهذا الزمن مع هذا الفعل.</div>'; return; }
      ui.quiz(U.$('#drill', el), qs, { mode: 'practice', title: verb + ' · ' + C.TENSES[t].es, onRetry: function () { U.$('#drGo', el).onclick(); } });
    };
  };
})(window.ECM);
