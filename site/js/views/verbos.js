/* Laboratorio de verbos — مختبر الأفعال الإسبانية.
 * Routes: #/verbos · #/verbos/v/<verb>[/<tense>|/practicar] · #/verbos/tiempos · #/verbos/tiempo/<tense>
 *         #/verbos/practica[/<mode>] · #/verbos/comparar[/<id>]
 * Conjugations come from ECM.verbs (verified dataset); nothing here invents forms. */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, ui = ECM.ui, V = ECM.verbs, rich = U.rich;
  var CLS = { r: ['منتظم', 'green'], o: ['تغيير إملائي فقط', 'amber'], a: ['تغيير في النبرة فقط', 'amber'], i: ['شاذّ', 'red'] };
  var GROUP_AR = { ar: 'المجموعة الأولى ‎-ar', er: 'المجموعة الثانية ‎-er', ir: 'المجموعة الثالثة ‎-ir' };

  function st() { var s = ECM.store.state; s.verbs = s.verbs || {}; s.verbs.fav = s.verbs.fav || []; s.verbs.recent = s.verbs.recent || []; s.verbs.stats = s.verbs.stats || {}; return s.verbs; }
  function isFav(lex) { return st().fav.indexOf(lex) >= 0; }
  function toggleFav(lex) { var f = st().fav, i = f.indexOf(lex); if (i >= 0) f.splice(i, 1); else f.unshift(lex); ECM.store.save(); return i < 0; }
  function addRecent(lex) { var r = st().recent, i = r.indexOf(lex); if (i >= 0) r.splice(i, 1); r.unshift(lex); if (r.length > 12) r.length = 12; ECM.store.save(); }
  function cat() { return V.catalog(); }
  function item(inf) { return cat().by[V.lexOf(inf)] || null; }
  function headword(lex) { var it = cat().by[lex]; return it ? it.inf : lex; }
  function normAr(s) { return String(s || '').replace(/[ً-ْـ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه'); }
  function normEs(s) { return V.plain(String(s || '').toLowerCase()).replace(/ü/g, 'u'); }
  function exampleHtml(es) { return esc(es).replace(/\[\[([^\]:=]+)(?:[:=][^\]]*)?\]\]/g, '<mark class="hl">$1</mark>'); }
  function exampleText(es) { return String(es).replace(/\[\[([^\]:=]+)(?:[:=][^\]]*)?\]\]/g, '$1'); }
  function pron(inf) {
    var syl = V.syllabify(inf), si = V.stressIndex(syl);
    return U.map(syl, function (x, i) { return i === si ? '<b>' + esc(x.toUpperCase()) + '</b>' : esc(x); }).join('·');
  }
  /* Arabic text with Spanish fragments: isolate every Latin run as an LTR span so endings lists read correctly */
  function bidi(s) {
    return rich(U.map(String(s || '').split(/(\[\[[\s\S]*?\]\])/), function (seg) {
      if (/^\[\[/.test(seg)) return seg;
      return seg.replace(/\u200e/g, '').replace(/[(]?[A-Za-z\u00C0-\u017F\-\u2010-\u2013][A-Za-z\u00C0-\u017F0-9 ,\-\u2010-\u2013·→\/\.'+:()]*[A-Za-z\u00C0-\u017F0-9)]/g, function (m) { return '[[' + m + ']]'; });
    }).join(''));
  }
  function clsTag(c) { var x = CLS[c] || CLS.r; return '<span class="tag ' + x[1] + '">' + x[0] + '</span>'; }
  function lvlTag(l) { return '<span class="lvl">' + esc(l) + '</span>'; }
  function crumbs(extra) { ECM.app.crumbs([{ t: 'مختبر الأفعال', href: '#/verbos' }].concat(extra || [])); }

  /* ------------------------------------------------------------ conjugation table */
  function personLabels(t) { return V.TENSES[t].mood === 'imp' ? V.IMP_PERSONS : V.PERSONS; }
  function formCell(inf, t, p, f, mask) {
    if (!f) return '';
    var sp = V.split(inf, t, p, f.replace(/^(me|te|se|nos|os) /, '')), pre = (f.match(/^(?:no )?(?:(?:me|te|se|nos|os) )?/) || [''])[0];
    var body = f.slice(pre.length), h;
    if (V.TENSES[t].compound) { var parts = body.split(' '); h = '<span class="aux">' + esc(parts[0]) + '</span> <span class="en">' + esc(parts.slice(1).join(' ')) + '</span>'; }
    else if (sp && mask === 0) h = '<span class="st">' + esc(sp[0].replace(/^(me|te|se|nos|os) /, '')) + '</span><span class="en">' + esc(sp[1]) + '</span>';
    else h = esc(body);
    return (pre ? '<span class="pr">' + esc(pre) + '</span>' : '') + h;
  }
  function conjTable(inf, t, opt) {
    opt = opt || {};
    var fs = V.forms(inf, t), mask = V.irregularMask(inf, t) || [], lab = personLabels(t), rows = '';
    if (!fs) return '';
    for (var p = 0; p < 6; p++) {
      if (!fs[p]) {
        if (V.TENSES[t].mood === 'imp' && p === 0 && !opt.compact) rows += '<tr class="none"><td class="p">yo</td><td class="f">—</td><td class="ar small">لا توجد صيغة أمر للمتكلّم</td><td></td></tr>';
        continue;
      }
      var cls = mask[p] === 2 ? ' irr' : (mask[p] === 1 ? ' sp' : '');
      rows += '<tr><td class="p" lang="es" dir="ltr">' + esc(lab[p]) + '</td><td class="f' + cls + '" lang="es" dir="ltr">' + formCell(inf, t, p, fs[p], mask[p]) + '</td>' +
        (opt.compact ? '' : '<td class="ar small muted">' + esc(V.TENSES[t].mood === 'imp' ? ['', 'أنتَ/أنتِ', 'حضرتك', 'لِنـ… (نحن)', 'أنتم', 'حضراتكم'][p] : V.PERSONS_AR[p]) + '</td>') +
        '<td class="au">' + U.say((V.TENSES[t].mood === 'imp' ? '' : V.PERSONS[p].split(' ')[0] + ' ') + fs[p], '', 'sm') + '</td></tr>';
    }
    var T = V.TENSES[t];
    var mean = opt.noMeaning ? '' : V.meaningOf(inf);
    return '<div class="vt' + (opt.compact ? ' compact' : '') + '"><div class="vt-h"><b lang="es" dir="ltr">' + esc(T.es) + '</b><span>' + esc(T.ar) + ' · ' + T.level + (T.archaic ? ' · <span class="tag amber">قديم</span>' : '') + '</span></div>' +
      (mean ? '<div class="vt-mean"><b lang="es" dir="ltr">' + esc(inf) + '</b> = ' + esc(mean) + '</div>' : '') + '<table>' + rows + '</table></div>';
  }
  var LEGEND = '<div class="vt-legend small"><span><i class="lg-en"></i> النهاية المنتظمة</span><span><i class="lg-irr"></i> صيغة شاذّة</span><span><i class="lg-sp"></i> تغيير إملائي/نبرة فقط</span></div>';

  /* ------------------------------------------------------------------- hub */
  function hub(el) {
    crumbs();
    var c = cat(), list = c.list, s = st(), counts = { r: 0, o: 0, a: 0, i: 0 };
    U.each(list, function (it) { counts[it.cls]++; });
    var h = '<section class="hero" style="' + ui.photoStyle('toledo') + ';min-height:260px"><div class="shade"></div><div class="inner">' +
      '<span class="eyebrow">LABORATORIO DE VERBOS</span><h1>مختبر الأفعال الإسبانية</h1>' +
      '<p>' + list.length + ' فعلًا مختلفًا بتصريف كامل في ' + V.ORDER.length + ' زمنًا (الإخبار، الالتزامي، الأمر) + المصدر واسم الفاعل واسم المفعول. ' +
      counts.i + ' فعلًا شاذًّا، ' + (counts.o + counts.a) + ' بتغيير إملائي أو في النبرة، ' + counts.r + ' منتظمًا.</p>' +
      '<div class="btns flex wrap mt16"><a class="btn gold" href="#/verbos/practica">التمارين</a><a class="btn light" href="#/verbos/tiempos">دليل الأزمنة</a><a class="btn light" href="#/verbos/comparar">مختبر المقارنة</a></div></div>' + ui.photoCredit('toledo') + '</section>';
    // favourites + recent
    function strip(title, arr, empty) {
      return '<div class="c2"><div class="card"><h3>' + title + '</h3>' + (arr.length ? U.map(arr, function (lex) {
        var it = c.by[lex]; return it ? '<a class="vocab-chip" href="#/verbos/v/' + esc(it.inf) + '"><b lang="es">' + esc(it.inf) + '</b> · ' + esc(it.ar.split('،')[0]) + '</a>' : '';
      }).join('') : '<p class="muted small">' + empty + '</p>') + '</div></div>';
    }
    h += '<div class="row mt24">' + strip('★ المفضّلة', s.fav, 'اضغط ☆ في صفحة أي فعل لإضافته هنا.') + strip('🕘 آخر الأفعال', s.recent, 'ستظهر هنا الأفعال التي فتحتها مؤخرًا.') + '</div>';
    // search + filters
    h += ui.secTitle('ابحث في المكتبة', '<span class="small muted">بالإسبانية أو بالعربية</span>');
    h += '<div class="card"><div class="row"><div class="c2"><input class="inp" id="vq" placeholder="مثال: tener ، يأكل ، levantarse" autocomplete="off" autocapitalize="off" spellcheck="false"></div>' +
      '<div class="c2"><div class="flex wrap gapx">' +
      sel('vf-cls', [['', 'كل الأنواع'], ['i', 'الشاذّة'], ['o', 'تغيير إملائي/نبرة'], ['r', 'المنتظمة']]) +
      sel('vf-lvl', [['', 'كل المستويات'], ['A1', 'A1'], ['A2', 'A2'], ['B1', 'B1'], ['B2', 'B2'], ['DELE', 'مفيدة لـ DELE A2 (A1–A2)']]) +
      sel('vf-grp', [['', '-ar / -er / -ir'], ['ar', '-ar'], ['er', '-er'], ['ir', '-ir']]) +
      sel('vf-cat', [['', 'كل المواضيع']].concat(U.map(U.keys(V.CATS), function (k) { return [k, V.CATS[k]]; }))) +
      sel('vf-x', [['', 'الكل'], ['rx', 'الأفعال الانعكاسية (‎-se)'], ['fav', '★ المفضّلة فقط']]) +
      '</div></div></div><div id="vres" class="mt16"></div></div>';
    h += '<div class="notice blue small mt16">مصدر التصريفات: قاعدة بيانات Fred Jehle للأفعال الإسبانية (CC BY-NC-SA 3.0) بعد تحويلها إلى قواعد الإملاء الأكاديمية لعام 2010 ومراجعتها، مع ' + U.filter(list, function (it) { return it.source !== 'j'; }).length + ' فعلًا مضافًا وفق نماذج تصريف موثّقة. تُفحص كل الجداول آليًا عند كل نشر. المستويات A1–B2 تقدير تعليمي من التطبيق، وليست قائمة رسمية.</div>';
    el.innerHTML = h;
    var limit = 60;
    function run() {
      var q = U.$('#vq', el).value, qe = normEs(q).replace(/^\s+|\s+$/g, ''), qa = normAr(q).replace(/^\s+|\s+$/g, '');
      var fc = U.$('#vf-cls', el).value, fl = U.$('#vf-lvl', el).value, fg = U.$('#vf-grp', el).value, fk = U.$('#vf-cat', el).value, fx = U.$('#vf-x', el).value;
      var res = U.filter(list, function (it) {
        if (fc && !(fc === 'o' ? (it.cls === 'o' || it.cls === 'a') : it.cls === fc)) return false;
        if (fl && (fl === 'DELE' ? !(it.level === 'A1' || it.level === 'A2') : it.level !== fl)) return false;
        if (fg && V.group(it.lex) !== fg) return false;
        if (fk && it.cats.indexOf(fk) < 0) return false;
        if (fx === 'rx' && !/se$/.test(it.inf) && !it.rx) return false;
        if (fx === 'fav' && !isFav(it.lex)) return false;
        if (!q) return true;
        return normEs(it.inf).indexOf(qe) >= 0 || (qa && normAr(it.ar).indexOf(qa) >= 0);
      });
      if (qe) res.sort(function (a, b) { return (normEs(a.inf).indexOf(qe) === 0 ? 0 : 1) - (normEs(b.inf).indexOf(qe) === 0 ? 0 : 1); });
      var shown = res.slice(0, limit);
      U.$('#vres', el).innerHTML = '<div class="small muted mb8">' + res.length + ' فعلًا</div>' + (shown.length ? '<div class="vlist">' + U.map(shown, function (it) {
        return '<a class="vrow" href="#/verbos/v/' + esc(it.inf) + '"><span class="vi" lang="es" dir="ltr">' + esc(it.inf) + '</span><span class="va">' + esc(it.ar) + '</span><span class="vt-tags">' + lvlTag(it.level) + clsTag(it.cls) + (isFav(it.lex) ? ' ★' : '') + '</span></a>';
      }).join('') + '</div>' : '<p class="muted">لا نتائج. جرّب كلمة أخرى أو أزل بعض المرشّحات.</p>') +
        (res.length > limit ? '<button class="btn ghost mt16" id="vmore">عرض المزيد (' + (res.length - limit) + ')</button>' : '');
      var more = U.$('#vmore', el); if (more) more.onclick = function () { limit += 120; run(); };
    }
    var deb = U.debounce(function () { limit = 60; run(); }, 150);
    U.$('#vq', el).oninput = deb; U.$('#vq', el).onkeyup = deb;
    U.each(['#vf-cls', '#vf-lvl', '#vf-grp', '#vf-cat', '#vf-x'], function (id) { U.$(id, el).onchange = function () { limit = 60; run(); }; });
    run();
  }
  function sel(id, opts) { return '<select class="inp" id="' + id + '" style="width:auto;min-width:120px">' + U.map(opts, function (o) { return '<option value="' + esc(o[0]) + '">' + esc(o[1]) + '</option>'; }).join('') + '</select>'; }

  /* ------------------------------------------------------------- verb page */
  function verbPage(el, inf, tense) {
    var it = item(inf);
    if (!it && !V.known(inf)) { el.innerHTML = '<div class="card empty"><div class="big">؟</div><h3>هذا الفعل ليس في المكتبة</h3><p>المكتبة تضم ' + cat().list.length + ' فعلًا مصرّفًا من مصدر موثّق. لم نضف تصريفًا آليًا لأفعال أخرى حتى لا نعرض صيغًا غير مؤكّدة.</p><a class="btn" href="#/verbos">ابحث في المكتبة</a></div>'; return; }
    var lex = V.lexOf(inf), refl = /se$/.test(inf), e = V.entry(lex) || {};
    it = it || { inf: inf, lex: lex, ar: '', level: 'B2', cats: [], cls: V.classify(lex) };
    crumbs([{ t: inf }]);
    addRecent(lex);
    var nf = V.nonFinite(inf), mood = tense === 'todo' ? 'todo' : (tense && V.TENSES[tense] ? V.TENSES[tense].mood : 'ind');
    tense = tense && V.TENSES[tense] ? tense : (mood === 'todo' ? null : 'presente');
    var other = refl ? lex : (it.rx || e.rx ? lex + 'se' : null);
    var h = '<div class="card navy vhead"><div class="flex wrap between"><div>' +
      '<span class="eyebrow">' + esc(GROUP_AR[V.group(lex)]) + '</span>' +
      '<h1 class="es display-es" lang="es" dir="ltr" style="color:#fff;margin:4px 0">' + esc(inf) + ' ' + U.say(inf, '', 'light') + '</h1>' +
      '<div class="pron" lang="es" dir="ltr">' + pron(inf) + '</div>' +
      '<p style="font-size:20px;margin:8px 0 6px">' + esc(it.ar) + '</p>' +
      '<div class="flex wrap gapx">' + lvlTag(it.level) + clsTag(it.cls) + (it.level === 'A1' || it.level === 'A2' ? '<span class="tag">مفيد لـ DELE A2</span>' : '') +
      U.map(it.cats, function (k) { return V.CATS[k] ? '<span class="tag light">' + esc(V.CATS[k]) + '</span>' : ''; }).join('') + (e.def ? '<span class="tag amber">يُستعمل بصيغة الغائب فقط</span>' : '') + '</div>' +
      '</div><div class="vh-side"><button class="btn ' + (isFav(lex) ? 'gold' : 'light') + '" id="vfav">' + (isFav(lex) ? '★ في المفضّلة' : '☆ أضف إلى المفضّلة') + '</button>' +
      '<a class="btn light mt8" href="#/verbos/v/' + esc(inf) + '/practicar">تدرّب على هذا الفعل</a>' +
      (other ? '<a class="btn ghost-light mt8" href="#/verbos/v/' + esc(other) + '" lang="es">' + esc(other) + ' ←</a>' : '') + '</div></div></div>';
    // example + non-finite
    h += '<div class="row mt16"><div class="c2"><div class="card"><h3>أمثلة من الحياة في إسبانيا</h3>' + (V.examplesOf(inf).length ? U.map(V.examplesOf(inf), function (x) { return ui.verbExample(x); }).join('') : '<p class="muted">—</p>') +
      (refl ? '<div class="notice small">فعل انعكاسي: الضمير يتغيّر مع الشخص ([[me, te, se, nos, os, se]]) ويأتي قبل الفعل المصرّف، ويلتصق بالأمر والمصدر واسم الفاعل.</div>'.replace(/\[\[([^\]]+)\]\]/g, '<span class="es-inline" lang="es" dir="ltr">$1</span>') : '') +
      (lex === 'haber' ? '<div class="notice small">' + rich('يُستعمل haber اليوم فعلًا مساعدًا للأزمنة المركّبة ([[he comido]]) وبصيغة [[hay / había / habrá]] بمعنى «يوجد». صيغ الأمر [[he, habed]] قديمة ولا تُستعمل تقريبًا.') + '</div>' : '') +
      '</div></div><div class="c2"><div class="card"><h3>الصيغ غير الشخصية <small class="muted" lang="es">Formas no personales</small></h3>' +
      ui.table(['الصيغة', 'Español', 'الاستعمال'], [['المصدر (Infinitivo)', nf.infinitivo, 'الاسم المعجمي للفعل: Quiero ' + nf.infinitivo], ['اسم الفاعل (Gerundio)', nf.gerundio, 'estar + gerundio: Estoy ' + nf.gerundio], ['اسم المفعول (Participio)', nf.participio + (nf.participioAlt ? ' / ' + nf.participioAlt : ''), 'haber + participio: He ' + nf.participio]], [1]) +
      (nf.participioAlt ? '<p class="small muted">' + rich('الصيغة الثانية [[' + nf.participioAlt + ']] تُستعمل غالبًا صفةً، والأولى مع haber.') + '</p>' : '') + '</div></div></div>';
    // mood tabs
    h += '<div class="tabs mt8">' + U.map(V.MOODS, function (m) {
      var first = U.filter(V.ORDER, function (k) { return V.TENSES[k].mood === m.id; })[0];
      return '<a href="#/verbos/v/' + esc(inf) + '/' + first + '" class="' + (mood === m.id ? 'on' : '') + '">' + esc(m.ar) + ' <small lang="es">' + esc(m.es) + '</small></a>';
    }).join('') + '<a href="#/verbos/v/' + esc(inf) + '/todo" class="' + (mood === 'todo' ? 'on' : '') + '">كل الأزمنة</a></div>';
    if (mood === 'todo') {
      h += LEGEND + U.map(V.MOODS, function (m) {
        return '<h3 class="mt16">' + esc(m.ar) + ' <small class="muted" lang="es">' + esc(m.es) + '</small></h3><div class="vt-grid">' +
          U.map(U.filter(V.ORDER, function (k) { return V.TENSES[k].mood === m.id; }), function (k) { return conjTable(inf, k, { compact: true, noMeaning: true }); }).join('') + '</div>';
      }).join('');
    } else {
      var tenses = U.filter(V.ORDER, function (k) { return V.TENSES[k].mood === mood; });
      h += '<div class="chips mt8">' + U.map(tenses, function (k) { return '<a class="chip' + (k === tense ? ' on' : '') + '" href="#/verbos/v/' + esc(inf) + '/' + k + '" lang="es">' + esc(V.TENSES[k].es.replace(/ de (indicativo|subjuntivo)/, '')) + '</a>'; }).join('') + '</div>';
      var TT = ECM.VERB_TENSES[tense] || {};
      h += '<div class="row mt16"><div class="c23">' + conjTable(inf, tense) + LEGEND + '</div><div class="c3"><div class="card gold"><h3>' + esc(V.TENSES[tense].ar) + '</h3><p>' + bidi(TT.what || '') + '</p>' +
        (TT.signals ? '<p class="small"><b>كلمات دالّة:</b> <span class="es-inline" lang="es" dir="ltr">' + esc(TT.signals) + '</span></p>' : '') +
        '<a class="btn sm" href="#/verbos/tiempo/' + tense + '">الشرح الكامل و10+ أمثلة</a> <a class="btn sm ghost" href="#/verbos/practica/escribir?v=' + esc(inf) + '&t=' + tense + '">تدرّب على هذا الزمن</a></div>' +
        (V.TENSES[tense].mood === 'imp' ? '<div class="notice small">' + rich('لا توجد صيغة أمر للمتكلّم yo، ولا لـ él/ella (نقول [[¡Que pase!]]). صيغ usted و ustedes و nosotros مأخوذة من المضارع الالتزامي.') + '</div>' : '') +
        (V.TENSES[tense].archaic ? '<div class="notice small">زمن قديم: يظهر في النصوص القانونية والأمثال فقط. للتعرّف عليه عند القراءة.</div>' : '') + '</div></div>';
    }
    el.innerHTML = h;
    U.$('#vfav', el).onclick = function () { var on = toggleFav(lex); ui.toast(on ? 'أُضيف إلى المفضّلة' : 'أُزيل من المفضّلة'); verbPage(el, inf, tense || (mood === 'todo' ? 'todo' : null)); };
  }

  /* Pronombre | hablar | comer | vivir — the three regular models side by side, endings highlighted */
  function modelTable(k) {
    var models = ['hablar', 'comer', 'vivir'], lab = personLabels(k), h;
    h = '<div class="tbl-wrap"><table class="tbl model"><thead><tr><th>Pronombre</th>' + U.map(models, function (m) { return '<th lang="es">' + m + '</th>'; }).join('') + '</tr></thead><tbody>';
    for (var p = 0; p < 6; p++) {
      var fs = U.map(models, function (m) { return V.forms(m, k)[p]; });
      if (!fs[0]) continue;
      h += '<tr><td class="p" lang="es" dir="ltr">' + esc(lab[p]) + '</td>' + U.map(models, function (m, i) { return '<td class="f" lang="es" dir="ltr">' + formCell(m, k, p, fs[i], 0) + '</td>'; }).join('') + '</tr>';
    }
    return h + '</tbody></table></div><p class="small muted">الجزء الملوّن هو النهاية التي تُضاف إلى الجذر (habl- / com- / viv-)' + (V.TENSES[k].compound ? '؛ في الأزمنة المركّبة يتغيّر الفعل المساعد haber فقط.' : '.') + '</p>';
  }

  /* ---------------------------------------------------------- tense guide */
  function tenses(el) {
    crumbs([{ t: 'دليل الأزمنة' }]);
    var h = '<div class="card navy"><span class="eyebrow">GUÍA DE TIEMPOS</span><h1 style="color:#fff">دليل الأزمنة الإسبانية</h1><p>' + V.ORDER.length + ' زمنًا مشروحًا بالعربية: متى نستعمله، كيف نكوّنه، الكلمات الدالّة، الأخطاء الشائعة، و10 أمثلة على الأقل لكل زمن. المستوى بجانب كل زمن يقترح متى تتعلّمه.</p></div>';
    U.each(V.MOODS, function (m) {
      h += ui.secTitle(m.ar, '<span class="small muted" lang="es">' + esc(m.es) + '</span>') + '<div class="row">' + U.map(U.filter(V.ORDER, function (k) { return V.TENSES[k].mood === m.id; }), function (k) {
        var T = V.TENSES[k];
        return '<div class="c3"><a class="card tense-card" href="#/verbos/tiempo/' + k + '"><div class="flex between"><b lang="es" dir="ltr">' + esc(T.es) + '</b>' + lvlTag(T.level) + '</div><div>' + esc(T.ar) + (T.archaic ? ' <span class="tag amber">قديم</span>' : '') + '</div><p class="small muted">' + esc((ECM.VERB_TENSES[k] || {}).what || '').slice(0, 110) + '…</p></a></div>';
      }).join('') + '</div>';
    });
    el.innerHTML = h;
  }
  function tensePage(el, k) {
    var T = V.TENSES[k], G = ECM.VERB_TENSES[k];
    if (!T || !G) { ECM.app.go('#/verbos/tiempos'); return; }
    crumbs([{ t: 'دليل الأزمنة', href: '#/verbos/tiempos' }, { t: T.es }]);
    var h = '<div class="card navy"><span class="eyebrow">' + esc(T.level) + ' · ' + esc(V.MOODS[{ ind: 0, sub: 1, imp: 2 }[T.mood]].es) + '</span><h1 style="color:#fff" lang="es" dir="ltr">' + esc(T.es) + '</h1><p style="font-size:20px">' + esc(T.ar) + '</p><p>' + bidi(G.what) + '</p></div>';
    h += ui.secTitle('كيف نكوّنه؟') + '<div class="card"><p>' + bidi(G.form) + '</p>' + modelTable(k) + '</div>';
    // irregular examples in this tense
    var irr = U.filter(['ser', 'estar', 'ir', 'tener', 'hacer', 'decir', 'poder', 'poner', 'venir', 'saber', 'querer', 'dar', 'ver', 'salir', 'pedir', 'dormir', 'pensar', 'conocer'], function (v) { var m = V.irregularMask(v, k); return m && (m[0] === 2 || m[2] === 2 || m[1] === 2 || m[5] === 2); }).slice(0, 6);
    if (irr.length) h += ui.secTitle('أفعال شاذّة مهمّة في هذا الزمن') + '<div class="vt-grid">' + U.map(irr, function (v) { return '<div><a href="#/verbos/v/' + v + '/' + k + '" class="small">' + v + ' ←</a>' + conjTable(v, k, { compact: true }) + '</div>'; }).join('') + '</div>' + LEGEND;
    h += '<div class="row mt16"><div class="c2"><div class="card"><h3>متى نستعمله؟</h3><ul>' + U.map(G.uses, function (x) { return '<li>' + bidi(x) + '</li>'; }).join('') + '</ul><p class="small"><b>كلمات دالّة:</b> <span class="es-inline" lang="es" dir="ltr">' + esc(G.signals) + '</span></p></div></div>' +
      '<div class="c2"><div class="card warn"><h3>أخطاء شائعة</h3><ul>' + U.map(G.mistakes, function (x) { return '<li>' + bidi(x) + '</li>'; }).join('') + '</ul></div></div></div>';
    h += ui.secTitle('أمثلة (' + G.ex.length + ')') + '<div class="card"><ol class="ex-list">' + U.map(G.ex, function (x) {
      var pz = x.split('|'); return '<li><span class="es" lang="es" dir="ltr">' + exampleHtml(pz[0]) + '</span> ' + U.say(exampleText(pz[0]), '', 'sm') + '<br><span class="muted">' + esc(pz[1]) + '</span></li>';
    }).join('') + '</ol></div>';
    h += '<div class="flex wrap mt16 gapx"><a class="btn gold" href="#/verbos/practica/escribir?t=' + k + '">تدرّب كتابةً على هذا الزمن</a><a class="btn" href="#/verbos/practica/opciones?t=' + k + '">اختيار من متعدد</a><a class="btn ghost" href="#/verbos/practica/completar?t=' + k + '">أكمل الجمل</a></div>';
    el.innerHTML = h;
  }

  /* -------------------------------------------------------------- practice */
  var MODES = [
    ['opciones', 'اختيار من متعدد', 'اختر الصيغة الصحيحة من أربع.'],
    ['escribir', 'كتابة الصيغة', 'اكتب الصيغة بنفسك؛ النبرة مهمّة (hablo ≠ habló).'],
    ['completar', 'أكمل الجملة', 'جمل حقيقية من المكتبة ودليل الأزمنة: اكتب الفعل الناقص.'],
    ['irregulares', 'تحدّي الأفعال الشاذّة', 'الصيغ الشاذّة فقط في الأزمنة الأساسية.'],
    ['examen', 'امتحان مختلط موقوت', '20 سؤالًا في 12 دقيقة، يُحفظ في سجلّ امتحانات اللغة.'],
    ['errores', 'من أخطائي (تكيّفي)', 'يعيد الصيغ التي أخطأت فيها حتى تتقنها.']
  ];
  var CORE = ['presente', 'indefinido', 'imperfecto', 'perfecto', 'futuro', 'condicional', 'subjPresente', 'imperativo'];
  function query() { var q = {}, m = /\?(.*)$/.exec(location.hash || ''); if (m) U.each(m[1].split('&'), function (kv) { var p = kv.split('='); if (p[0]) q[p[0]] = decodeURIComponent(p[1] || ''); }); return q; }
  function pool(opt) {
    var list = cat().list;
    if (opt.v) return U.filter(list, function (it) { return it.lex === V.lexOf(opt.v); });
    if (opt.src === 'fav') { var f = st().fav; return U.filter(list, function (it) { return f.indexOf(it.lex) >= 0; }); }
    if (opt.lvl) return U.filter(list, function (it) { return it.level === opt.lvl || (opt.lvl === 'A2' && it.level === 'A1') || (opt.lvl === 'B1' && /A1|A2/.test(it.level)) || opt.lvl === 'B2'; });
    return U.filter(list, function (it) { return it.level !== 'B2'; });
  }
  function rnd(a, r) { return a[Math.floor(r() * a.length)]; }
  function promptFor(inf, t, p) { return '<b>' + esc(V.TENSES[t].ar) + '</b> · <span class="es-inline" lang="es" dir="ltr">' + esc(V.TENSES[t].es) + '</span>'; }
  function stemFor(inf, t, p) { return (V.TENSES[t].mood === 'imp' ? V.IMP_PERSONS[p] : V.PERSONS[p]) + ' ___ (' + inf + ')'; }
  function formItem(it, t, p, kind, r) {
    var inf = it.inf, fs = V.forms(inf, t); if (!fs || !fs[p]) return null;
    var ans = fs[p], q = { id: 'vb-' + inf + '-' + t + '-' + p + '-' + kind, vk: it.lex + '|' + t + '|' + p, stem: stemFor(inf, t, p), stemLang: 'es', noSay: true, prompt: promptFor(inf, t, p),
      why: rich('التصريف الكامل: [[' + U.filter(fs, Boolean).join(', ') + ']]') + ' — <a href="#/verbos/v/' + esc(inf) + '/' + t + '">افتح الجدول</a>', topic: 'الأفعال: ' + V.TENSES[t].ar, level: it.level, src: 'مختبر الأفعال' };
    if (kind === 'type') { q.type = 'type'; q.answer = ans; q.strict = true; return q; }
    // distractors: same verb, other persons/tenses, and the "regularised" wrong form
    var cand = [], reg = V.regularOf(V.lexOf(inf), t)[p];
    if (reg && reg !== ans) cand.push(/se$/.test(inf) && V.TENSES[t].mood !== 'imp' ? ans.replace(/\S+$/, reg) : reg);
    U.each([t], function (k) { U.each(V.forms(inf, k), function (f, i) { if (f && i !== p) cand.push(f); }); });
    U.each(CORE, function (k) { var f = (V.forms(inf, k) || [])[p]; if (f) cand.push(f); });
    var opts = [ans], seen = {}; seen[ans] = 1;
    cand = U.shuffle(cand, r);
    for (var i = 0; i < cand.length && opts.length < 4; i++) if (!seen[cand[i]]) { seen[cand[i]] = 1; opts.push(cand[i]); }
    if (opts.length < 3) return null;
    q.type = 'mc'; q.opts = opts; q.answer = 0; q.optLang = 'es';
    return q;
  }
  function sentenceItems(opt) {
    var out = [], list = pool(opt), tsel = opt.t;
    U.each(list, function (it) {
      if (!it.form) return;
      var a = V.exampleInfo(it); if (!a || a.tense === 'nf' || (tsel && a.tense !== tsel)) return;
      out.push(sentenceQ(it.inf, it.lex, it.es, it.esAr, it.form, a.tense, it.level, 'm'));
    });
    if (!opt.v && opt.src !== 'fav') U.each(V.ORDER, function (k) {
      if (tsel && k !== tsel) return;
      U.each(ECM.VERB_TENSES[k].ex, function (x, i) {
        var m = /\[\[([^\]=]+)=([^\]:]+)(?::\d)?\]\]/.exec(x), pz = x.split('|');
        if (m) out.push(sentenceQ(m[2], V.lexOf(m[2]), pz[0], pz[1], m[1], k, V.TENSES[k].level, 't' + i));
      });
    });
    return out;
  }
  function sentenceQ(inf, lex, es, ar, form, t, level, tag) {
    var stem = String(es).replace(/\[\[[^\]]+\]\]/, '_____ (' + inf + ')');
    return { id: 'vs-' + lex + '-' + tag + '-' + t, vk: lex + '|' + t + '|s', type: 'type', strict: true, stem: stem, stemLang: 'es', noSay: true, answer: form,
      prompt: 'أكمل بالزمن: <b>' + esc(V.TENSES[t].ar) + '</b> <span class="es-inline" lang="es" dir="ltr">(' + esc(V.TENSES[t].es) + ')</span><br><span class="muted">' + esc(ar) + '</span>',
      why: rich('الجملة كاملة: [[' + exampleText(es) + ']]') + ' — <a href="#/verbos/v/' + esc(inf) + '/' + t + '">جدول ' + esc(inf) + '</a>', topic: 'الأفعال في الجمل', level: level, src: 'مختبر الأفعال' };
  }
  function build(mode, opt, r) {
    var list = pool(opt), out = [], n = mode === 'examen' ? 20 : 12, tries = 0, used = {};
    var ts = opt.t ? [opt.t] : (mode === 'irregulares' ? ['presente', 'indefinido', 'futuro', 'subjPresente', 'imperativo'] : CORE);
    if (!list.length) return [];
    if (mode === 'completar') return U.shuffle(sentenceItems(opt), r).slice(0, n);
    if (mode === 'errores') {
      var stats = st().stats, keys = U.filter(U.keys(stats), function (k) { return stats[k].w > (stats[k].r || 0) - 1 && stats[k].w > 0 && !/\|s$/.test(k); });
      keys.sort(function (a, b) { return (stats[b].w - (stats[b].r || 0)) - (stats[a].w - (stats[a].r || 0)); });
      U.each(keys.slice(0, n), function (k) { var x = k.split('|'), it = cat().by[x[0]]; if (it) { var q = formItem(it, x[1], +x[2], 'type', r); if (q) out.push(q); } });
      return out;
    }
    if (mode === 'irregulares') list = U.filter(list, function (it) { return it.cls === 'i'; });
    if (!list.length) return [];
    while (out.length < n && tries++ < 600) {
      var it = rnd(list, r), t = rnd(ts, r), p = Math.floor(r() * 6);
      if (V.TENSES[t].mood === 'imp' && p === 0) p = 1;
      if (mode === 'irregulares') { var m = V.irregularMask(it.inf, t); if (!m || m[p] !== 2) continue; }
      var key = it.lex + t + p; if (used[key]) continue; used[key] = 1;
      var kind = mode === 'opciones' ? 'mc' : (mode === 'examen' ? (out.length % 3 === 0 ? 'mc' : 'type') : 'type');
      var q = formItem(it, t, p, kind, r); if (q) out.push(q);
    }
    if (mode === 'examen') { var sq = U.shuffle(sentenceItems(opt), r).slice(0, 5); out = out.slice(0, 15).concat(sq); }
    return out;
  }
  function track(q, ok) {
    if (!q || !q.vk) return;
    var s = st().stats, x = s[q.vk] = s[q.vk] || { r: 0, w: 0 };
    if (ok) x.r++; else x.w++; x.at = new Date().toISOString();
    ECM.store.save();
  }
  function practice(el, args) {
    var mode = (args[0] || '').split('?')[0], opt = query();
    if (args[0] === 'v') { opt.v = args[1]; mode = 'escribir'; }
    if (!mode) return practiceHub(el, opt);
    var M = null; U.each(MODES, function (x) { if (x[0] === mode) M = x; });
    if (!M) { ECM.app.go('#/verbos/practica'); return; }
    crumbs([{ t: 'التمارين', href: '#/verbos/practica' }, { t: M[1] }]);
    var r = U.rng((+new Date()) % 100000), qs = build(mode, opt, r);
    if (!qs.length) {
      el.innerHTML = '<div class="card empty"><div class="big">✓</div><h3>' + (mode === 'errores' ? 'لا توجد أخطاء مسجّلة في الأفعال' : 'لا توجد أسئلة بهذه الإعدادات') + '</h3><p class="muted">' + (mode === 'errores' ? 'حين تخطئ في تمارين الأفعال تُحفظ الصيغة هنا لتراجعها حتى تتقنها.' : 'غيّر المستوى أو الزمن، أو أضف أفعالًا إلى المفضّلة.') + '</p><a class="btn" href="#/verbos/practica">رجوع</a></div>';
      return;
    }
    var info = (opt.v ? 'الفعل: <b lang="es">' + esc(opt.v) + '</b> · ' : '') + (opt.t ? 'الزمن: <b>' + esc(V.TENSES[opt.t].ar) + '</b> · ' : '') + qs.length + ' سؤالًا';
    el.innerHTML = '<div class="notice blue mb16">' + esc(M[1]) + ' — ' + info + '. ' + esc(M[2]) + '</div><div id="vq"></div>';
    ui.quiz(U.$('#vq', el), qs, {
      mode: mode === 'examen' ? 'exam' : 'practice', title: 'مختبر الأفعال · ' + M[1], timeLimit: mode === 'examen' ? 12 * 60 : 0,
      record: mode === 'examen' ? { kind: 'verbs', ref: 'verbos', title: 'امتحان الأفعال المختلط', level: opt.lvl || 'A1–B1' } : null,
      onAnswer: track,
      onRetry: function () { practice(el, args); }, onExit: function () { ECM.app.go(opt.v ? '#/verbos/v/' + opt.v : '#/verbos/practica'); }
    });
  }
  function practiceHub(el, opt) {
    crumbs([{ t: 'التمارين' }]);
    var stats = st().stats, ks = U.keys(stats), right = 0, wrong = 0, weak = 0;
    U.each(ks, function (k) { right += stats[k].r || 0; wrong += stats[k].w || 0; if (stats[k].w > (stats[k].r || 0) - 1 && stats[k].w > 0 && !/\|s$/.test(k)) weak++; });
    var h = '<div class="card navy"><span class="eyebrow">PRÁCTICA</span><h1 style="color:#fff">تمارين الأفعال</h1><p>كل الأسئلة تُبنى من الجداول الموثّقة نفسها، فلا يوجد سؤال بإجابة مخترعة. أخطاؤك تُحفظ لتعود إليها في وضع «من أخطائي».</p>' +
      '<div class="row mt16"><div class="c4"><div class="stat-mini">' + right + '<small>إجابة صحيحة</small></div></div><div class="c4"><div class="stat-mini">' + wrong + '<small>إجابة خاطئة</small></div></div><div class="c4"><div class="stat-mini">' + weak + '<small>صيغة تحتاج مراجعة</small></div></div><div class="c4"><div class="stat-mini">' + st().fav.length + '<small>فعل في المفضّلة</small></div></div></div></div>';
    h += '<div class="card mt16"><h3>الإعدادات</h3><div class="flex wrap gapx">' +
      sel('p-lvl', [['', 'A1–B1 (افتراضي)'], ['A1', 'A1 فقط'], ['A2', 'حتى A2'], ['B1', 'حتى B1'], ['B2', 'كل الأفعال حتى B2']]) +
      sel('p-t', [['', 'الأزمنة الأساسية'], ].concat(U.map(V.ORDER, function (k) { return [k, V.TENSES[k].es + ' — ' + V.TENSES[k].ar]; }))) +
      sel('p-src', [['', 'كل المكتبة'], ['fav', '★ المفضّلة فقط']]) + '</div></div>';
    h += '<div class="row mt16">' + U.map(MODES, function (m) {
      return '<div class="c3"><div class="card tense-card"><h3>' + esc(m[1]) + '</h3><p class="small muted">' + esc(m[2]) + '</p><button class="btn sm" data-mode="' + m[0] + '">ابدأ</button></div></div>';
    }).join('') + '</div>';
    el.innerHTML = h;
    el.onclick = function (e) {
      var b = e.target.closest ? e.target.closest('[data-mode]') : null; if (!b) return;
      var q = [], l = U.$('#p-lvl', el).value, t = U.$('#p-t', el).value, s = U.$('#p-src', el).value;
      if (l) q.push('lvl=' + l); if (t) q.push('t=' + t); if (s) q.push('src=' + s);
      ECM.app.go('#/verbos/practica/' + b.getAttribute('data-mode') + (q.length ? '?' + q.join('&') : ''));
    };
  }

  /* ------------------------------------------------------------ comparisons */
  function compareHub(el) {
    crumbs([{ t: 'مختبر المقارنة' }]);
    var h = '<div class="card navy"><span class="eyebrow">LABORATORIO DE COMPARACIÓN</span><h1 style="color:#fff">مختبر المقارنة</h1><p>الأزواج التي يخلط بينها المتعلّمون العرب أكثر من غيرها: شرح، جدول مقارنة، أمثلة، أخطاء شائعة واختبار قصير.</p></div><div class="row mt16">' +
      U.map(ECM.VERB_COMPARE, function (c) { return '<div class="c3"><a class="card tense-card" href="#/verbos/comparar/' + c.id + '"><div class="cmp-pair" lang="es" dir="ltr"><b>' + esc(c.a) + '</b> <span>⇄</span> <b>' + esc(c.b) + '</b></div><p>' + bidi(c.title) + '</p><span class="small muted">' + c.quiz.length + ' أسئلة</span></a></div>'; }).join('') + '</div>';
    el.innerHTML = h;
  }
  function comparePage(el, id) {
    var c = null; U.each(ECM.VERB_COMPARE, function (x) { if (x.id === id) c = x; });
    if (!c) { ECM.app.go('#/verbos/comparar'); return; }
    crumbs([{ t: 'مختبر المقارنة', href: '#/verbos/comparar' }, { t: c.a + ' / ' + c.b }]);
    var h = '<div class="card navy"><div class="cmp-pair big" lang="es" dir="ltr"><b>' + esc(c.a) + '</b> <span>⇄</span> <b>' + esc(c.b) + '</b></div><h1 style="color:#fff">' + bidi(c.title) + '</h1><p>' + bidi(c.intro) + '</p></div>';
    h += ui.secTitle('جدول المقارنة') + '<div class="tbl-wrap"><table class="tbl cmp-tbl"><thead><tr><th>الحالة</th><th lang="es">' + esc(c.a) + '</th><th lang="es">' + esc(c.b) + '</th></tr></thead><tbody>' +
      U.map(c.table, function (r) { return '<tr><td>' + rich(r[0]) + '</td><td class="es-cell a" lang="es" dir="ltr">' + cmpCell(r[1]) + '</td><td class="es-cell b" lang="es" dir="ltr">' + cmpCell(r[2]) + '</td></tr>'; }).join('') + '</tbody></table></div>';
    h += ui.secTitle('أمثلة') + '<div class="row"><div class="c2"><div class="cmp-side a"><h3 lang="es">' + esc(c.a) + '</h3>' + exList(c, 'a') + '</div></div><div class="c2"><div class="cmp-side b"><h3 lang="es">' + esc(c.b) + '</h3>' + exList(c, 'b') + '</div></div></div>';
    h += '<div class="card warn mt16"><h3>أخطاء شائعة</h3><ul>' + U.map(c.mistakes, function (x) { return '<li>' + bidi(x) + '</li>'; }).join('') + '</ul></div>';
    var links = U.filter([c.a, c.b], function (v) { return V.known(v); });
    if (links.length) h += '<div class="flex wrap mt8 gapx">' + U.map(links, function (v) { return '<a class="btn ghost sm" href="#/verbos/v/' + v + '">جدول تصريف ' + v + '</a>'; }).join('') + '</div>';
    h += ui.secTitle('اختبر نفسك') + '<div id="cq"></div>';
    el.innerHTML = h;
    var qs = U.map(c.quiz, function (q, i) { return { id: 'vc-' + c.id + '-' + i, type: 'mc', stem: q[0], stemLang: 'es', noSay: true, opts: q[1], answer: q[2], optLang: 'es', why: rich(q[3]), topic: 'مقارنة: ' + c.a + ' / ' + c.b, src: 'مختبر المقارنة' }; });
    ui.quiz(U.$('#cq', el), qs, { mode: 'practice', title: c.a + ' / ' + c.b, onRetry: function () { comparePage(el, id); }, onExit: function () { ECM.app.go('#/verbos/comparar'); } });
  }
  function cmpCell(s) { return s === '—' ? '<span class="muted">—</span>' : esc(s).replace(/\(([^)]*[؀-ۿ][^)]*)\)/g, '<span class="ar-note" dir="rtl">($1)</span>'); }
  function exList(c, side) {
    return '<ul class="ex-list">' + U.map(U.filter(c.ex, function (x) { return x[0] === side; }), function (x) {
      return '<li><span class="es" lang="es" dir="ltr">' + esc(x[1]) + '</span> ' + U.say(x[1], '', 'sm') + '<br><span class="muted small">' + esc(x[2]) + '</span></li>';
    }).join('') + '</ul>';
  }

  ECM.verbLab = { modelTable: modelTable, conjTable: conjTable, clsTag: clsTag, legend: LEGEND, bidi: bidi };

  /* ----------------------------------------------------------------- router */
  ECM.views.verbos = function (el, args) {
    var a0 = (args[0] || '').split('?')[0];
    if (!a0) return hub(el);
    if (a0 === 'v' && args[1]) {
      if (args[2] === 'practicar') return practice(el, ['v', decodeURIComponent(args[1])]);
      return verbPage(el, decodeURIComponent(args[1]).toLowerCase(), args[2]);
    }
    if (a0 === 'tiempos') return tenses(el);
    if (a0 === 'tiempo') return tensePage(el, args[1]);
    if (a0 === 'practica') return practice(el, args.slice(1));
    if (a0 === 'comparar') return args[1] ? comparePage(el, args[1].split('?')[0]) : compareHub(el);
    ECM.app.go('#/verbos');
  };
})(window.ECM);
