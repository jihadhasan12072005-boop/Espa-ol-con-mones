/* Rule-based Spanish checker (no server, no cost). Used by the speaking studio
 * and the writing tasks. It catches frequent, well-defined learner errors and
 * explains them in Arabic. It is a learning aid — NOT an examiner.            */
(function (ECM) {
  'use strict';
  var U = ECM.util, esc = U.esc, CJ = ECM.conj;
  var K = ECM.checker = {};

  var SUBJ = { yo: 0, 'tú': 1, 'él': 2, ella: 2, usted: 2, nosotros: 3, nosotras: 3, vosotros: 4, vosotras: 4, ellos: 5, ellas: 5, ustedes: 5 };
  var SKIP = { no: 1, me: 1, te: 1, se: 1, nos: 1, os: 1, lo: 1, la: 1, le: 1, los: 1, las: 1, les: 1, ya: 1, 'también': 1, tambien: 1, siempre: 1, nunca: 1, todavía: 1, solo: 1, casi: 1 };
  var PNAME = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'vosotros', 'ellos/ustedes'];
  var TNAME = { presente: 'الحاضر', indefinido: 'الماضي البسيط', imperfecto: 'الماضي المستمر', futuro: 'المستقبل', condicional: 'الشرطي', subjuntivo: 'الـ subjuntivo' };

  var ACCENTS = { tambien: 'también', despues: 'después', aqui: 'aquí', alli: 'allí', dia: 'día', dias: 'días', facil: 'fácil', dificil: 'difícil', ingles: 'inglés', espanol: 'español', espanola: 'española', telefono: 'teléfono', medico: 'médico', medica: 'médica', musica: 'música', pais: 'país', arabe: 'árabe', ademas: 'además', rapido: 'rápido', rapida: 'rápida', ultimo: 'último', ultima: 'última', numero: 'número', sabado: 'sábado', miercoles: 'miércoles', jamas: 'jamás', adios: 'adiós', autobus: 'autobús', estacion: 'estación', nacion: 'nación', informacion: 'información', habitacion: 'habitación', comision: 'comisión', examenes: 'exámenes', jovenes: 'jóvenes', arbol: 'árbol', lapiz: 'lápiz', mama: 'mamá', papa: 'papá', cafe: 'café', sofa: 'sofá', razon: 'razón', corazon: 'corazón', opinion: 'opinión', reunion: 'reunión', avion: 'avión', jardin: 'jardín', leccion: 'lección', cancion: 'canción', tambien_: 'también', despues_: 'después', util: 'útil', tipico: 'típico', politica: 'política', economico: 'económico', publico: 'público', historico: 'histórico', tu_eres: 'tú eres', manana: 'mañana', espana: 'España', nino: 'niño', nina: 'niña', ninos: 'niños', ano: 'año', anos: 'años', senor: 'señor', senora: 'señora', pequeno: 'pequeño', companero: 'compañero', ensenar: 'enseñar' };
  var GENDER = { problema: 'el', tema: 'el', sistema: 'el', programa: 'el', idioma: 'el', mapa: 'el', 'día': 'el', dia: 'el', clima: 'el', mano: 'la', foto: 'la', moto: 'la', radio: 'la', ciudad: 'la', 'estación': 'la', estacion: 'la', 'habitación': 'la', leche: 'la', calle: 'la', noche: 'la', gente: 'la', clase: 'la', parte: 'la', carne: 'la', nacionalidad: 'la', universidad: 'la', coche: 'el', viaje: 'el', hospital: 'el', hotel: 'el', 'país': 'el', pais: 'el', 'árbol': 'el', examen: 'el' };

  function tokens(text) {
    return String(text || '').toLowerCase().replace(/[^a-záéíóúüñ\s]/g, ' ').split(/\s+/).filter(function (x) { return x; });
  }

  K.analyze = function (text) {
    var issues = [], seen = {}, t = String(text || ''), low = t.toLowerCase(), toks = tokens(t), rev = CJ.reverseIndex();
    function add(key, frag, fix, why) { if (seen[key]) return; seen[key] = 1; issues.push({ frag: frag, fix: fix, why: why }); }

    // 1. subject – verb agreement
    for (var i = 0; i < toks.length; i++) {
      var sp = SUBJ[toks[i]];
      if (sp === undefined) continue;
      var j = i + 1;
      while (j < toks.length && SKIP[toks[j]]) j++;
      var w = toks[j];
      if (!w || !rev[w]) continue;
      var cands = rev[w], ok = false;
      for (var c = 0; c < cands.length; c++) if (cands[c].p === sp) ok = true;
      if (ok) continue;
      var cand = cands[0];
      if (!cand || (w === 'que' || w === 'como')) continue;
      var right;
      try { right = CJ.conjugate(cand.v, cand.t)[sp]; } catch (e) { continue; }
      if (!right || right === w) continue;
      add('sv' + i, toks[i] + ' ' + w, toks[i] + ' ' + right,
        'الفعل لا يطابق الفاعل: مع **' + toks[i] + '** (' + PNAME[sp] + ') يُصرَّف الفعل [[' + cand.v + ']] في ' + (TNAME[cand.t] || cand.t) + ' هكذا: [[' + right + ']]. أنت استخدمت صيغة ' + PNAME[cand.p] + '.');
    }
    // 2. frequent patterns
    var P = [
      [/\b(soy|es|eres|somos|son)\s+(\d+|[a-záéíóú]+)\s+años\b/, 'العمر يُعبَّر عنه بـ [[tener]]: [[Tengo 58 años]] وليس ser.', 'tengo … años'],
      [/\bme\s+gusta\s+(los|las|mis|tus)\s/, 'إذا كان الشيء المعجِب جمعًا نقول [[me gustan]]: [[Me gustan los gatos]].', 'me gustan …'],
      [/\byo\s+gusto\b/, 'gustar تُستخدم بضمير المفعول: [[Me gusta…]] وليس yo gusto.', 'me gusta'],
      [/\bhay\s+(el|la|los|las)\s/, 'لا نستخدم hay مع أداة التعريف؛ للشيء المعروف استخدم [[está/están]]: [[El banco está en la plaza]].', 'el/la … está'],
      [/\ba\s+el\b/, 'a + el تُدمج: [[al]]: [[Voy al médico]].', 'al'],
      [/\bde\s+el\b/, 'de + el تُدمج: [[del]]: [[al lado del banco]].', 'del'],
      [/\bcuando\s+(\w+)(ré|rás|rá|remos|réis|rán)(?![a-záéíóúüñ])/, 'بعد [[cuando]] للمستقبل لا نستخدم المستقبل بل الـ subjuntivo: [[Cuando llegue…]] وليس cuando llegaré.', 'cuando + subjuntivo'],
      [/\bsi\s+(\w+)(ría|rías|ríamos|rían)(?![a-záéíóúüñ])/, 'بعد [[si]] لا يأتي الشرطي أبدًا؛ استخدم [[si + imperfecto de subjuntivo]]: [[Si tuviera…, viajaría]].', 'si + tuviera/fuera…'],
      [/\baunque\b[^.]*\bpero\b/, 'لا نجمع [[aunque]] و[[pero]] في جملة واحدة (خطأ شائع من «رغم… إلا أن»). احذف pero.', 'aunque … (sin pero)'],
      [/\b(estoy|está|estás|estamos|están)\s+(médico|profesor|profesora|taxista|ingeniero|enfermera|abogado|cocinero|conductor|estudiante)(?![a-záéíóúüñ])/, 'المهنة تأتي مع [[ser]]: [[Soy médico]].', 'soy …'],
      [/\b(soy|es|somos|son)\s+en\s+(casa|madrid|el|la|españa|clase)(?![a-záéíóúüñ])/, 'المكان يأتي مع [[estar]]: [[Estoy en casa]].', 'estoy en …'],
      [/\b(soy|es|eres)\s+(cansado|cansada|enfermo|enferma|nervioso|nerviosa|ocupado|ocupada)(?![a-záéíóúüñ])/, 'الحالة المؤقتة تأتي مع [[estar]]: [[Estoy cansado]].', 'estoy …'],
      [/\btengo\s+de\s+\w+r\b/, 'الوجوب: [[tener que + infinitivo]] وليس tener de.', 'tengo que …'],
      [/\bvoy\s+(estudiar|trabajar|ir|comer|hacer|ver|hablar|viajar|comprar|llamar)(?![a-záéíóúüñ])/, 'التركيب [[ir a + infinitivo]] يحتاج a: [[Voy a estudiar]].', 'voy a …'],
      [/\bquiero\s+que\s+(vienes|tienes|haces|vas|eres|estás|puedes|hablas|comes|vives|estudias)(?![a-záéíóúüñ])/, 'بعد [[quiero que]] يأتي الـ subjuntivo: [[Quiero que vengas / tengas / hagas]].', 'quiero que + subjuntivo'],
      [/\bespero\s+que\s+(es|está|tiene|tienes|eres|estás|puedes|va|vas|hace)(?![a-záéíóúüñ])/, 'بعد [[espero que]] يأتي الـ subjuntivo: [[Espero que sea / esté / tengas]].', 'espero que + subjuntivo'],
      [/\bno\s+creo\s+que\s+(es|está|tiene|hay|va|puede|son)(?![a-záéíóúüñ])/, 'بعد [[no creo que]] يأتي الـ subjuntivo: [[No creo que sea / haya]].', 'no creo que + subjuntivo'],
      [/\bayer\s+(he|has|ha|hemos|habéis|han)\s+\w+/, 'مع [[ayer]] (فترة منتهية) نستخدم الـ indefinido: [[Ayer fui / comí / trabajé]].', 'ayer + indefinido'],
      [/\btu\s+(eres|tienes|estás|estas|puedes|vas|quieres|sabes|hablas|vives|trabajas)(?![a-záéíóúüñ])/, 'الضمير «أنت» يُكتب بنبرة: [[tú]]. أما [[tu]] بلا نبرة فتعني «ـكَ» (ملكية): [[tu casa]].', 'tú …'],
      [/\bmuy\s+mucho\b/, 'لا نقول muy mucho؛ قل [[muchísimo]] أو [[mucho]].', 'muchísimo'],
      [/\bpor\s+que\b[^.]*\?/, 'في السؤال «لماذا» تُكتب [[por qué]] منفصلة وبنبرة.', '¿por qué…?']
    ];
    for (var k = 0; k < P.length; k++) {
      var m = low.match(P[k][0]);
      if (m) add('p' + k, m[0], P[k][2], P[k][1]);
    }
    // 3. article–noun gender for frequent tricky nouns
    for (var g = 0; g + 1 < toks.length; g++) {
      var art = toks[g], noun = toks[g + 1], gen = GENDER[noun];
      if (!gen) continue;
      var masc = art === 'el' || art === 'un', fem = art === 'la' || art === 'una';
      if ((gen === 'el' && fem) || (gen === 'la' && masc)) {
        var fix = gen === 'el' ? (art === 'una' ? 'un' : 'el') : (art === 'un' ? 'una' : 'la');
        add('g' + g, art + ' ' + noun, fix + ' ' + noun, 'الاسم [[' + noun + ']] ' + (gen === 'el' ? 'مذكّر' : 'مؤنث') + ' في الإسبانية، فنقول [[' + fix + ' ' + noun + ']].');
      }
    }
    // 4. punctuation ¿ ¡
    var sentences = t.replace(/([.!?])\s+/g, '$1\n').split('\n');
    for (var s = 0; s < sentences.length; s++) {
      var sen = sentences[s];
      if (/\?\s*$/.test(sen) && sen.indexOf('¿') === -1) add('q' + s, sen.slice(-40), '¿' + sen.replace(/^\s+/, '').slice(0, 38) + '…', 'السؤال الإسباني يبدأ بعلامة مقلوبة [[¿]] وينتهي بـ [[?]].');
      if (/!\s*$/.test(sen) && sen.indexOf('¡') === -1) add('e' + s, sen.slice(-40), '¡…!', 'التعجب يبدأ بـ [[¡]] وينتهي بـ [[!]].');
    }
    // 5. missing accents / ñ (only unambiguous words)
    var acc = [];
    U.each(toks, function (w) { if (ACCENTS[w] && acc.indexOf(w) === -1) acc.push(w); });
    if (acc.length) add('acc', acc.join('، '), U.map(acc, function (w) { return ACCENTS[w]; }).join('، '), 'كلمات تحتاج نبرة أو حرف ñ. (إذا كنت تكتب على لوحة مفاتيح بلا هذه الأحرف، استخدم الأزرار تحت المربع.)');
    return issues;
  };

  K.strengths = function (text) {
    var low = String(text || '').toLowerCase(), toks = tokens(text), rev = CJ.reverseIndex(), tenses = {};
    if (/\b(he|has|ha|hemos|habéis|han)\s+\w+(ado|ido|cho|sto|to|uesto|ierto)\b/.test(low)) tenses['الماضي القريب (perfecto)'] = 1;
    if (/\b(voy|vas|va|vamos|vais|van)\s+a\s+\w+(ar|er|ir)\b/.test(low)) tenses['ir a + infinitivo'] = 1;
    U.each(toks, function (w) { var c = rev[w]; if (c && w.length > 2) U.each(c, function (x) { if (x.t !== 'presente' && TNAME[x.t] && !/^(que|como|era)$/.test(w)) tenses[TNAME[x.t]] = 1; if (x.t === 'presente') tenses['الحاضر'] = 1; }); });
    var con = U.filter(['porque', 'pero', 'cuando', 'además', 'aunque', 'también', 'después', 'luego', 'primero', 'sin embargo', 'por eso', 'entonces', 'mientras'], function (c) { return low.indexOf(c) !== -1; });
    return { tenses: U.keys(tenses), connectors: con, words: toks.length };
  };

  K.render = function (text, opt) {
    opt = opt || {};
    var issues = K.analyze(text), st = K.strengths(text), h = '';
    if (!String(text || '').replace(/\s/g, '')) return '<div class="fb no">اكتب أو سجّل إجابة أولًا.</div>';
    h += '<div class="fb ' + (issues.length ? 'no' : 'ok') + '"><b class="t">' + (issues.length ? 'ملاحظات على إجابتك (' + issues.length + ')' : 'لم نجد أخطاء من الأنواع التي نفحصها ✓') + '</b>';
    U.each(issues, function (x) {
      h += '<div class="mistake-pair" style="background:#fff"><span class="wrong" lang="es">' + esc(x.frag) + '</span><span class="right" lang="es">→ ' + esc(x.fix) + '</span><div class="small mt8">' + U.rich(x.why) + '</div></div>';
    });
    h += '</div>';
    h += '<div class="fb info"><b class="t">نقاط القوة</b>عدد الكلمات: <b>' + st.words + '</b>' + (opt.target ? ' (المطلوب نحو ' + opt.target + ')' : '') +
      (st.tenses.length ? '<br>الأزمنة التي استخدمتها: ' + esc(st.tenses.join('، ')) : '') +
      (st.connectors.length ? '<br>أدوات الربط: <span class="es-inline" lang="es" dir="ltr">' + esc(st.connectors.join(', ')) + '</span>' : '<br>جرّب إضافة أدوات ربط مثل <span class="es-inline" lang="es" dir="ltr">porque, pero, cuando, además</span>.') + '</div>';
    if (opt.req) {
      var n = U.norm(text, true), miss = [];
      U.each(opt.req, function (r, i) { var alts = r.split('|'), hit = false; U.each(alts, function (a) { if (n.indexOf(U.norm(a, true)) !== -1 || String(text).indexOf(a) !== -1) hit = true; }); if (!hit) miss.push(alts[0]); });
      if (miss.length) h += '<div class="fb no"><b class="t">عناصر قد تكون ناقصة</b>لم نجد في نصّك ما يدل على: <span class="es-inline" lang="es" dir="ltr">' + esc(miss.join(' · ')) + '</span>. راجع قائمة التحقق.</div>';
    }
    h += '<p class="small muted">هذه مراجعة آلية مساعدة تكتشف أخطاء شائعة محددة فقط، وقد تفوتها أخطاء أخرى. ليست تقييمًا رسميًا مثل تقييم ممتحِني DELE.</p>';
    return h;
  };

  ECM.writingCheck = function (text, s) { return K.render(text, { target: s.words, req: s.req }); };
})(window.ECM);
