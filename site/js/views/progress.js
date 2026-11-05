/* My Progress: statistics, history, achievements, backup export/import, settings, credits. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, ui = ECM.ui;

  function download(text, name) {
    var ok = false;
    try {
      var blob = new Blob([text], { type: 'application/json' }), a = document.createElement('a');
      if (window.URL && URL.createObjectURL && 'download' in a) {
        a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 1500); ok = true;
      }
    } catch (e) { ok = false; }
    return ok;
  }

  function heat() {
    var act = ECM.store.state.activity, h = '<div style="direction:ltr;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap">', d = new Date();
    d.setDate(d.getDate() - 55);
    for (var i = 0; i < 56; i++) {
      var k = U.dayKey(d), n = act[k] ? act[k].n : 0, c = n === 0 ? '#ECE5D5' : (n < 10 ? '#BFE0CF' : (n < 30 ? '#5DB592' : '#0E7C5A'));
      h += '<span title="' + U.date(d.toISOString()) + ': ' + n + ' نشاط" style="width:16px;height:16px;border-radius:4px;margin:2px;background:' + c + '"></span>';
      d.setDate(d.getDate() + 1);
    }
    return h + '</div><div class="small muted mt8">آخر 8 أسابيع — كل مربع يوم، واللون الأغمق نشاط أكثر.</div>';
  }

  ECM.views.progress = function (el) {
    ECM.app.crumbs([{ t: 'تقدّمي والنسخ الاحتياطي' }]);
    var s = ECM.store.state, done = U.filter(U.keys(s.lessons), function (k) { return s.lessons[k].done; }).length;
    var days = U.keys(s.activity).length, examsN = s.exams.length;
    var avg = examsN ? Math.round(U.sum(s.exams, function (e) { return e.pct || 0; }) / examsN) : 0;
    var h = '<div class="card navy"><span class="eyebrow">MI PROGRESO</span><h1 style="color:#fff">تقدّم مؤنس</h1><p class="muted">بدأتَ في ' + U.date(s.createdAt) + ' · مستواك الحالي <span class="lvl">' + esc(s.profile.level) + '</span> · آخر حفظ: ' + esc(U.ago(s.savedAt)) + '</p></div>';
    h += '<div class="row mt16"><div class="c4"><div class="card stat"><div class="v">' + done + '</div><div class="l">وحدة مكتملة</div></div></div><div class="c4"><div class="card stat"><div class="v">' + examsN + '</div><div class="l">امتحان وتدريب مسجّل</div></div></div>' +
      '<div class="c4"><div class="card stat"><div class="v">' + avg + '%</div><div class="l">متوسط النتائج</div></div></div><div class="c4"><div class="card stat"><div class="v">' + days + '</div><div class="l">يوم دراسة</div></div></div></div>';
    h += '<div class="row"><div class="c2"><div class="card"><h3>النشاط</h3>' + heat() + '</div><div class="card"><h3>التقدّم حسب المستوى</h3>' +
      U.map(ECM.course.LEVELS, function (L) { var p = ECM.course.progress(L.id); return '<div class="flex mb8"><span class="lvl" style="margin-left:10px">' + L.id + '</span><span class="grow">' + ui.bar(p.pct) + '</span><span class="small muted" style="width:70px;text-align:left">' + p.done + '/' + p.total + '</span></div>'; }).join('') +
      '<div class="flex mb8"><span class="tag navy" style="margin-left:10px">CCSE</span><span class="grow">' + ui.bar(ECM.readiness.ccse().pct, 'gold') + '</span><span class="small muted" style="width:70px;text-align:left">' + ECM.readiness.ccse().pct + '%</span></div>' +
      '<div class="flex mb8"><span class="tag navy" style="margin-left:10px">DELE</span><span class="grow">' + ui.bar(ECM.readiness.dele().pct, 'gold') + '</span><span class="small muted" style="width:70px;text-align:left">' + ECM.readiness.dele().pct + '%</span></div></div></div>';
    h += '<div class="c2"><div class="card gold"><h3>الإنجازات</h3>' + U.map(ECM.achievements.LIST, function (a) {
      var got = s.achievements[a.id];
      return '<div class="flex mb8" style="opacity:' + (got ? 1 : 0.45) + '"><span style="font-size:22px;margin-left:10px">' + (got ? '🏅' : '○') + '</span><span class="grow"><b>' + esc(a.t) + '</b><br><small class="muted">' + esc(a.d) + (got ? ' · ' + U.date(got) : '') + '</small></span></div>';
    }).join('') + '</div></div></div>';
    // history — two separate logs: language vs citizenship
    function hist(list, empty) {
      return list.length ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>التاريخ</th><th>الامتحان</th><th>النتيجة</th><th>المدة</th></tr></thead><tbody>' +
        U.map(list.slice(0, 40), function (e) { return '<tr><td class="small">' + U.date(e.date) + ' ' + U.time(e.date) + '</td><td>' + esc(e.title || e.kind) + '</td><td><span class="tag ' + (e.passed === false || (e.passed !== true && e.pct < 60) ? 'red' : '') + '">' + e.score + '/' + e.total + ' · ' + e.pct + '%</span></td><td class="small">' + (e.durationSec ? U.mmss(e.durationSec) : '—') + '</td></tr>'; }).join('') +
        '</tbody></table></div>' : '<p class="muted">' + empty + '</p>';
    }
    var isCit = function (e) { return /^ccse/.test(e.kind || ''); };
    var citL = U.filter(s.exams, isCit), langL = U.filter(s.exams, function (e) { return !isCit(e); });
    h += '<div class="row"><div class="c2"><div class="card"><div class="card-head"><h3>🇪🇸 سجل امتحانات اللغة الإسبانية</h3><span class="small muted">' + langL.length + ' · آخر 40</span></div>' + hist(langL, 'لا يوجد سجل لغة بعد.') + '</div></div>' +
      '<div class="c2"><div class="card"><div class="card-head"><h3>🏛 سجل امتحانات الجنسية CCSE</h3><span class="small muted">' + citL.length + ' · آخر 40</span></div>' + hist(citL, 'لا يوجد سجل CCSE بعد.') + '</div></div></div>';
    // backup
    var lb = s.lastBackupAt;
    h += '<div class="card ' + (!lb ? 'warn' : '') + '" id="backup"><h3>💾 النسخ الاحتياطي (مهم جدًا)</h3>' +
      '<p>يُحفظ تقدّمك <b>تلقائيًا</b> بعد كل نشاط في متصفح هذا الجهاز (Safari) وعلى عنوان التطبيق نفسه. لكن انتبه بصدق إلى ما يلي:</p><ul>' +
      '<li>الحفظ <b>ليس سحابيًا</b> ولا ينتقل تلقائيًا إلى جهاز أو متصفح آخر.</li><li>إذا مُسحت «بيانات المواقع» أو سجل Safari، أو استُخدم التصفح الخاص، قد يضيع التقدّم.</li>' +
      '<li>في بعض إصدارات Safari قد تُحذف بيانات المواقع التي لم تُفتح لعدة أيام؛ لذلك افتح التطبيق بانتظام.</li></ul>' +
      '<p><b>الحل:</b> أنشئ نسخة احتياطية (ملف) مرة في الأسبوع على الأقل واحتفظ بها في مجلد «المستندات». يمكنك استعادتها في أي وقت وعلى أي جهاز.</p>' +
      '<p class="small muted">آخر نسخة احتياطية: ' + (lb ? U.date(lb) + ' ' + U.time(lb) : 'لم تُنشأ بعد') + '</p>' +
      '<div class="btns flex wrap"><button class="btn lg" id="exp">⬇ تنزيل نسخة احتياطية</button><label class="btn ghost lg" style="cursor:pointer">⬆ استعادة من ملف<input type="file" id="imp" accept=".json,application/json,text/plain" style="display:none"></label><button class="btn ghost" id="impText">لصق نص النسخة</button></div>' +
      '<div id="bkOut" class="mt8"></div></div>';
    // settings
    var vs = ECM.tts.voices();
    h += '<div class="row"><div class="c2"><div class="card"><h3>إعدادات الصوت</h3>' + (ECM.tts.supported() ? '<label class="lbl">الصوت الإسباني</label><select class="inp" id="voice">' +
      (vs.length ? U.map(vs, function (v) { return '<option value="' + esc(v.name) + '"' + (ECM.tts.current() && ECM.tts.current().name === v.name ? ' selected' : '') + '>' + esc(v.name) + ' (' + esc(v.lang) + ')</option>'; }).join('') : '<option>لم يُعثر على صوت إسباني — سيُستخدم الافتراضي</option>') + '</select>' +
      '<label class="lbl mt16">سرعة النطق</label><select class="inp" id="rate"><option value="0.6">بطيئة جدًا</option><option value="0.75">بطيئة</option><option value="0.9">عادية (مستحسنة)</option><option value="1">طبيعية</option><option value="1.1">سريعة</option></select>' +
      '<button class="btn ghost mt8" data-say="Hola, Mones. ¿Qué tal estás? Hoy vamos a estudiar español.">▶ جرّب الصوت</button>' +
      '<p class="small muted mt8">لإضافة صوت إسباني عالي الجودة على Mac: إعدادات النظام ← إمكانية الوصول ← المحتوى المنطوق ← صوت النظام ← إدارة الأصوات ← الإسبانية (إسبانيا) مثل «Mónica».</p>' : '<p>القراءة الصوتية غير مدعومة في هذا المتصفح.</p>') + '</div></div>' +
      '<div class="c2"><div class="card"><h3>الملف الشخصي</h3><label class="lbl">المستوى الحالي</label><select class="inp" id="lvl">' + U.map(['A1', 'A2', 'B1', 'B2'], function (l) { return '<option' + (s.profile.level === l ? ' selected' : '') + '>' + l + '</option>'; }).join('') + '</select>' +
      '<details class="mt16"><summary class="small">خيارات متقدمة</summary><p class="small">مسح كل التقدّم يبدأ التطبيق من جديد (تُحفظ نسخة استرداد داخلية مرة واحدة). نزّل نسخة احتياطية أولًا.</p><button class="btn danger sm" id="reset">مسح كل التقدّم</button></details></div>' +
      (s.legacy ? '<div class="card"><h3>بيانات النسخة القديمة</h3><p class="small">استُوردت في ' + U.date(s.legacy.importedAt) + '. ' + legacySummary(s.legacy.data) + '</p></div>' : '') + '</div></div>';
    // credits
    h += '<details class="card"><summary><b>حقوق الصور والخطوط</b></summary><p class="small mt8">الصور من Wikimedia Commons وفق التراخيص المذكورة، والخطوط IBM Plex Sans Arabic و Playfair Display بترخيص SIL Open Font License.</p><ul class="list small">' +
      U.map(U.filter(U.keys(ECM.photos), function (k) { return ECM.photos[k].file; }), function (k) { var p = ECM.photos[k]; return '<li dir="ltr" style="text-align:left">' + esc(p.title) + ' — ' + esc(p.credit) + ' — <a href="' + esc(p.url) + '" target="_blank" rel="noopener">source</a>' + (p.licenseUrl ? ' · <a href="' + esc(p.licenseUrl) + '" target="_blank" rel="noopener">license</a>' : '') + '</li>'; }).join('') + '</ul></details>';
    el.innerHTML = h;

    var out = U.$('#bkOut', el);
    U.$('#exp', el).onclick = function () {
      var txt = ECM.store.exportJSON(), d = new Date(), name = 'espanol-con-mones-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '.json';
      if (download(txt, name)) {
        s.lastBackupAt = new Date().toISOString(); ECM.store.save(); ECM.app.sideFoot();
        out.innerHTML = '<div class="fb ok">تم تنزيل الملف <b dir="ltr">' + esc(name) + '</b> إلى مجلد «التنزيلات». انقله إلى مجلد آمن (مثل المستندات).</div>';
      } else {
        out.innerHTML = '<div class="fb info">متصفحك لا يدعم التنزيل المباشر. انسخ النص أدناه بالكامل (⌘A ثم ⌘C) واحفظه في ملف نصي.<textarea class="inp ltr mt8" rows="6" readonly>' + esc(txt) + '</textarea><button class="btn sm mt8" id="markBk">قمتُ بحفظه</button></div>';
        U.$('#markBk', el).onclick = function () { s.lastBackupAt = new Date().toISOString(); ECM.store.save(); ECM.app.sideFoot(); ui.toast('تم تسجيل النسخة الاحتياطية.'); };
      }
    };
    function doImport(text) {
      if (!confirm('ستُستبدل بياناتك الحالية بمحتوى النسخة الاحتياطية (تُحفظ نسختك الحالية كنسخة استرداد). هل تريد المتابعة؟')) return;
      var r = ECM.store.importJSON(text);
      out.innerHTML = '<div class="fb ' + (r.ok ? 'ok' : 'no') + '">' + esc(r.msg) + '</div>';
      if (r.ok) { ECM.app.updateBadge(); ECM.app.sideFoot(); setTimeout(function () { ECM.app.route(); }, 1200); }
    }
    U.$('#imp', el).onchange = function (e) {
      var f = e.target.files && e.target.files[0];
      if (!f) return;
      if (!window.FileReader) { out.innerHTML = '<div class="fb no">متصفحك لا يدعم قراءة الملفات. استخدم «لصق نص النسخة».</div>'; return; }
      var fr = new FileReader();
      fr.onload = function () { doImport(String(fr.result)); };
      fr.onerror = function () { out.innerHTML = '<div class="fb no">تعذّرت قراءة الملف.</div>'; };
      fr.readAsText(f);
    };
    U.$('#impText', el).onclick = function () {
      out.innerHTML = '<textarea class="inp ltr" rows="5" id="pasteBk" placeholder="الصق محتوى ملف النسخة الاحتياطية هنا"></textarea><button class="btn mt8" id="pasteGo">استعادة</button>';
      U.$('#pasteGo', el).onclick = function () { doImport(U.$('#pasteBk', el).value); };
    };
    var vSel = U.$('#voice', el); if (vSel) vSel.onchange = function () { ECM.tts.setVoice(vSel.value); };
    var rSel = U.$('#rate', el); if (rSel) { rSel.value = String(s.settings.rate || 0.9); rSel.onchange = function () { s.settings.rate = Number(rSel.value); ECM.store.save(); }; }
    U.$('#lvl', el).onchange = function (e) { s.profile.level = e.target.value; ECM.store.save(); ui.toast('تم تحديث مستواك.'); };
    U.$('#reset', el).onclick = function () {
      if (confirm('هل أنت متأكد؟ سيُمسح كل التقدّم في هذا المتصفح.') && confirm('تأكيد أخير: مسح كل شيء؟')) { ECM.store.reset(); ECM.app.updateBadge(); ECM.app.go('#/'); }
    };
  };

  function legacySummary(d) {
    if (!d) return '';
    var parts = [];
    if (d.done && d.done.length) parts.push('دروس منجزة: ' + d.done.length);
    if (d.results && d.results.length) parts.push('نتائج: ' + d.results.length);
    if (d.errors && d.errors.length) parts.push('أخطاء: ' + d.errors.length);
    if (d.xp) parts.push('نقاط: ' + d.xp);
    if (d.notes && d.notes.length) parts.push('ملاحظات: ' + d.notes.length);
    return parts.join(' · ') + '. محتوى التطبيق القديم مختلف، لذلك حُفظت هذه البيانات للاطلاع ولم تُدمج في دروس النسخة الجديدة.';
  }
})(window.ECM);
