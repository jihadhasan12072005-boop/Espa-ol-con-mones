/* Español con Mones — Spanish conjugation engine (ES5).
 * Persons: 0 yo, 1 tú, 2 él/ella/usted, 3 nosotros, 4 vosotros, 5 ellos/ellas/ustedes.
 * Covers regular verbs, stem-changing verbs, spelling changes and the most
 * frequent irregular verbs. Verified by tests/conjugate.test.js.
 */
(function (root) {
  'use strict';
  var ECM = root.ECM = root.ECM || {};

  var PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros / nosotras', 'vosotros / vosotras', 'ellos / ellas / ustedes'];
  var PERSONS_SHORT = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];
  var PERSONS_AR = ['أنا', 'أنتَ/أنتِ', 'هو / هي / حضرتك', 'نحن', 'أنتم (إسبانيا)', 'هم / هنّ / حضراتكم'];

  var TENSES = {
    presente: { es: 'Presente de indicativo', ar: 'المضارع (الحاضر)' },
    indefinido: { es: 'Pretérito indefinido', ar: 'الماضي البسيط (المنتهي)' },
    imperfecto: { es: 'Pretérito imperfecto', ar: 'الماضي المستمر/الاعتيادي' },
    perfecto: { es: 'Pretérito perfecto', ar: 'الماضي القريب (المرتبط بالحاضر)' },
    pluscuamperfecto: { es: 'Pretérito pluscuamperfecto', ar: 'الماضي الأسبق' },
    futuro: { es: 'Futuro simple', ar: 'المستقبل البسيط' },
    condicional: { es: 'Condicional simple', ar: 'الشرطي' },
    subjuntivo: { es: 'Presente de subjuntivo', ar: 'المضارع الالتزامي (الصيغة الذاتية)' },
    subjImperfecto: { es: 'Pretérito imperfecto de subjuntivo', ar: 'الماضي الالتزامي' },
    imperativo: { es: 'Imperativo afirmativo', ar: 'الأمر (الإثبات)' },
    imperativoNeg: { es: 'Imperativo negativo', ar: 'النهي (الأمر المنفي)' }
  };

  var END = {
    presente: { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] },
    indefinido: { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] },
    imperfecto: { ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'] },
    subjuntivo: { ar: ['e', 'es', 'e', 'emos', 'éis', 'en'], er: ['a', 'as', 'a', 'amos', 'áis', 'an'], ir: ['a', 'as', 'a', 'amos', 'áis', 'an'] }
  };
  var FUT = ['é', 'ás', 'á', 'emos', 'éis', 'án'];
  var COND = ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'];
  var HABER_PRES = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
  var HABER_IMPF = ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'];

  /* Verb dictionary: infinitive -> [arabic meaning, stem change, notes]
   * stem change: 'ie' (e>ie), 'ue' (o>ue), 'i' (e>i), 'jugar' (u>ue)          */
  var VERBS = {
    hablar: ['يتكلم'], trabajar: ['يعمل'], estudiar: ['يدرس'], escuchar: ['يستمع'], comprar: ['يشتري'],
    llamar: ['يتصل/يسمّى'], llegar: ['يصل'], tomar: ['يأخذ/يتناول'], viajar: ['يسافر'], cocinar: ['يطبخ'],
    ayudar: ['يساعد'], esperar: ['ينتظر/يأمل'], necesitar: ['يحتاج'], pagar: ['يدفع'], buscar: ['يبحث'],
    practicar: ['يمارس/يتدرب'], visitar: ['يزور'], preguntar: ['يسأل'], terminar: ['ينهي'], usar: ['يستخدم'],
    mirar: ['ينظر'], bailar: ['يرقص'], cantar: ['يغني'], caminar: ['يمشي'], cenar: ['يتعشى'], desayunar: ['يفطر'],
    limpiar: ['ينظف'], lavar: ['يغسل'], alquilar: ['يستأجر'], firmar: ['يوقّع'], explicar: ['يشرح'],
    empezar: ['يبدأ', 'ie'], pensar: ['يفكر', 'ie'], cerrar: ['يغلق', 'ie'], comenzar: ['يبدأ', 'ie'],
    despertar: ['يوقظ', 'ie'], recomendar: ['ينصح/يوصي', 'ie'],
    contar: ['يعدّ/يروي', 'ue'], encontrar: ['يجد', 'ue'], costar: ['يكلّف', 'ue'], recordar: ['يتذكر', 'ue'],
    probar: ['يجرّب/يتذوق', 'ue'], acostar: ['يُنيم', 'ue'], soñar: ['يحلم', 'ue'], mostrar: ['يُري/يعرض', 'ue'],
    jugar: ['يلعب', 'jugar'],
    comer: ['يأكل'], beber: ['يشرب'], aprender: ['يتعلم'], leer: ['يقرأ'], vender: ['يبيع'], comprender: ['يفهم'],
    correr: ['يركض'], creer: ['يعتقد'], deber: ['يجب عليه'], responder: ['يجيب'], romper: ['يكسر'],
    coger: ['يأخذ/يركب (مواصلات)'], meter: ['يُدخل'], ver: ['يرى'],
    querer: ['يريد/يحب', 'ie'], entender: ['يفهم', 'ie'], perder: ['يخسر/يضيّع', 'ie'], encender: ['يشعل', 'ie'],
    poder: ['يستطيع', 'ue'], volver: ['يعود', 'ue'], mover: ['يحرّك', 'ue'], llover: ['تمطر', 'ue'],
    devolver: ['يُرجع', 'ue'], resolver: ['يحلّ', 'ue'], doler: ['يؤلم', 'ue'],
    vivir: ['يعيش/يسكن'], escribir: ['يكتب'], abrir: ['يفتح'], recibir: ['يستلم'], subir: ['يصعد'],
    decidir: ['يقرر'], compartir: ['يشارك'], permitir: ['يسمح'], cubrir: ['يغطي'], describir: ['يصف'],
    preferir: ['يفضّل', 'ie'], sentir: ['يشعر/يأسف', 'ie'], mentir: ['يكذب', 'ie'], divertir: ['يُسلّي', 'ie'],
    dormir: ['ينام', 'ue'], morir: ['يموت', 'ue'],
    pedir: ['يطلب', 'i'], servir: ['يخدم/يصلح', 'i'], repetir: ['يكرر', 'i'], seguir: ['يتابع/يستمر', 'i'],
    vestir: ['يُلبس', 'i'], elegir: ['يختار', 'i'], conseguir: ['يحصل على', 'i'], medir: ['يقيس', 'i'],
    conocer: ['يعرف (شخصًا/مكانًا)'], parecer: ['يبدو'], ofrecer: ['يعرض/يقدّم'], conducir: ['يقود (سيارة)'],
    traducir: ['يترجم'], producir: ['يُنتج'], construir: ['يبني'], destruir: ['يدمّر'], incluir: ['يتضمن'],
    ser: ['يكون (صفة دائمة)'], estar: ['يكون (حالة/مكان)'], ir: ['يذهب'], haber: ['فعل مساعد/يوجد'],
    tener: ['يملك'], hacer: ['يفعل/يصنع'], decir: ['يقول'], venir: ['يأتي'], poner: ['يضع'], salir: ['يخرج'],
    saber: ['يعرف (معلومة)'], dar: ['يعطي'], traer: ['يُحضر'], oir: ['يسمع'], caer: ['يقع'], andar: ['يمشي'],
    mantener: ['يحافظ على'], obtener: ['يحصل على'], proponer: ['يقترح'], suponer: ['يفترض'], prevenir: ['يقي']
  };
  // accented key for oír
  VERBS['oír'] = VERBS.oir; delete VERBS.oir;

  /* Full irregular overrides (only the tenses that differ). */
  var IRR = {
    ser: {
      presente: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
      indefinido: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
      imperfecto: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
      subjuntivo: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
      impTu: 'sé', gerundio: 'siendo'
    },
    estar: {
      presente: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
      indefinido: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'],
      subjuntivo: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
      impTu: 'está'
    },
    ir: {
      presente: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
      indefinido: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
      imperfecto: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
      subjuntivo: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
      impTu: 've', impVos: 'id', impNos: 'vamos', gerundio: 'yendo'
    },
    haber: {
      presente: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
      indefinido: ['hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'],
      subjuntivo: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
      futStem: 'habr'
    },
    tener: { yo: 'tengo', pret: 'tuv', futStem: 'tendr', impTu: 'ten' },
    venir: { yo: 'vengo', pret: 'vin', futStem: 'vendr', impTu: 'ven', gerundio: 'viniendo' },
    poner: { yo: 'pongo', pret: 'pus', futStem: 'pondr', impTu: 'pon' },
    salir: { yo: 'salgo', futStem: 'saldr', impTu: 'sal' },
    hacer: { yo: 'hago', pret: 'hic', pret3: 'hizo', futStem: 'har', impTu: 'haz' },
    decir: { yo: 'digo', pret: 'dij', futStem: 'dir', impTu: 'di', gerundio: 'diciendo' },
    traer: { yo: 'traigo', pret: 'traj', gerundio: 'trayendo' },
    caer: {
      yo: 'caigo', gerundio: 'cayendo',
      indefinido: ['caí', 'caíste', 'cayó', 'caímos', 'caísteis', 'cayeron']
    },
    'oír': {
      presente: ['oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'],
      indefinido: ['oí', 'oíste', 'oyó', 'oímos', 'oísteis', 'oyeron'],
      impTu: 'oye', impVos: 'oíd', gerundio: 'oyendo'
    },
    saber: { presente0: 'sé', pret: 'sup', futStem: 'sabr', subjStem: 'sep' },
    poder: { pret: 'pud', futStem: 'podr', gerundio: 'pudiendo' },
    querer: { pret: 'quis', futStem: 'querr' },
    andar: { pret: 'anduv' },
    conducir: { pret: 'conduj' }, traducir: { pret: 'traduj' }, producir: { pret: 'produj' },
    dar: {
      presente: ['doy', 'das', 'da', 'damos', 'dais', 'dan'],
      indefinido: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
      subjuntivo: ['dé', 'des', 'dé', 'demos', 'deis', 'den']
    },
    ver: {
      presente: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'],
      indefinido: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
      imperfecto: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían']
    },
    leer: { indefinido: ['leí', 'leíste', 'leyó', 'leímos', 'leísteis', 'leyeron'], gerundio: 'leyendo' },
    creer: { indefinido: ['creí', 'creíste', 'creyó', 'creímos', 'creísteis', 'creyeron'], gerundio: 'creyendo' },
    mantener: { base: 'tener', prefix: 'man' }, obtener: { base: 'tener', prefix: 'ob' },
    proponer: { base: 'poner', prefix: 'pro' }, suponer: { base: 'poner', prefix: 'su' },
    prevenir: { base: 'venir', prefix: 'pre' }
  };

  var PARTICIPLES = {
    abrir: 'abierto', cubrir: 'cubierto', decir: 'dicho', escribir: 'escrito', describir: 'descrito',
    hacer: 'hecho', morir: 'muerto', poner: 'puesto', romper: 'roto', ver: 'visto', volver: 'vuelto',
    devolver: 'devuelto', resolver: 'resuelto', proponer: 'propuesto', suponer: 'supuesto',
    leer: 'leído', creer: 'creído', traer: 'traído', caer: 'caído', 'oír': 'oído'
  };

  var ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
  function accentLastVowel(s) {
    for (var i = s.length - 1; i >= 0; i--) {
      if (ACC[s.charAt(i)]) return s.slice(0, i) + ACC[s.charAt(i)] + s.slice(i + 1);
    }
    return s;
  }
  function stripAccents(s) {
    return String(s).replace(/[áàä]/g, 'a').replace(/[éèë]/g, 'e').replace(/[íìï]/g, 'i')
      .replace(/[óòö]/g, 'o').replace(/[úùü]/g, 'u');
  }

  function group(inf) {
    var e = stripAccents(inf).slice(-2);
    return e === 'ar' ? 'ar' : (e === 'er' ? 'er' : 'ir');
  }
  function stemOf(inf) { return inf.slice(0, -2); }

  /* apply stem change to the LAST e/o/u of the stem */
  function changeStem(stem, type, target) {
    var from = type === 'ue' ? 'o' : (type === 'jugar' ? 'u' : 'e');
    var to = target || (type === 'ie' ? 'ie' : (type === 'ue' || type === 'jugar' ? 'ue' : 'i'));
    var i = stem.lastIndexOf(from);
    if (i < 0) return stem;
    return stem.slice(0, i) + to + stem.slice(i + 1);
  }

  function info(inf) { var v = VERBS[inf]; return v ? { ar: v[0], sc: v[1] || '' } : { ar: '', sc: '' }; }

  /* spelling adjustments for the yo present (and the subjunctive stem) */
  function yoPresent(inf) {
    var ir = IRR[inf];
    if (ir && ir.yo) return ir.yo;
    if (ir && ir.presente0) return ir.presente0;
    if (ir && ir.presente) return ir.presente[0];
    var g = group(inf), stem = stemOf(inf), sc = info(inf).sc;
    if (sc) stem = changeStem(stem, sc);
    if (/guir$/.test(inf)) return stem.slice(0, -1) + 'o';           // seguir -> sigo
    if (/[gG](er|ir)$/.test(inf)) return stem.slice(0, -1) + 'jo';    // coger -> cojo, elegir -> elijo
    if (/[aeiou]c(er|ir)$/.test(inf)) return stem.slice(0, -1) + 'zco'; // conocer -> conozco
    if (/uir$/.test(inf)) return stem + 'yo';                         // construir -> construyo
    return stem + 'o';
  }

  function presente(inf) {
    var ir = IRR[inf];
    if (ir && ir.presente) return ir.presente.slice();
    var g = group(inf), stem = stemOf(inf), sc = info(inf).sc, e = END.presente[g], out = [];
    if (inf === 'decir') sc = 'i';
    if (inf === 'tener' || inf === 'venir') sc = 'ie';
    for (var p = 0; p < 6; p++) {
      var s = stem;
      if (sc && (p === 0 || p === 1 || p === 2 || p === 5)) s = changeStem(stem, sc);
      if (/uir$/.test(inf) && !/guir$/.test(inf) && p !== 3 && p !== 4) s = stem + 'y';
      out.push(s + e[p]);
    }
    out[0] = yoPresent(inf);
    return out;
  }

  function preteriteStrong(stem, inf) {
    var j = /j$/.test(stem);
    var out = [stem + 'e', stem + 'iste', stem + 'o', stem + 'imos', stem + 'isteis', stem + (j ? 'eron' : 'ieron')];
    if (IRR[inf] && IRR[inf].pret3) out[2] = IRR[inf].pret3;
    return out;
  }

  function indefinido(inf) {
    var ir = IRR[inf];
    if (ir && ir.indefinido) return ir.indefinido.slice();
    if (ir && ir.pret) return preteriteStrong(ir.pret, inf);
    var g = group(inf), stem = stemOf(inf), e = END.indefinido[g], out = [], sc = info(inf).sc;
    for (var p = 0; p < 6; p++) {
      var s = stem, end = e[p];
      if (g === 'ir' && sc && (p === 2 || p === 5)) s = changeStem(stem, sc === 'ue' ? 'ue' : 'i', sc === 'ue' ? 'u' : 'i');
      if (/uir$/.test(inf) && !/guir$/.test(inf) && (p === 2 || p === 5)) end = p === 2 ? 'yó' : 'yeron';
      out.push(s + end);
    }
    if (g === 'ar') {
      if (/car$/.test(inf)) out[0] = stem.slice(0, -1) + 'qué';
      else if (/gar$/.test(inf)) out[0] = stem + 'ué';
      else if (/zar$/.test(inf)) out[0] = stem.slice(0, -1) + 'cé';
    }
    return out;
  }

  function imperfecto(inf) {
    var ir = IRR[inf];
    if (ir && ir.imperfecto) return ir.imperfecto.slice();
    var g = group(inf), e = END.imperfecto[g], stem = stemOf(inf), out = [];
    for (var p = 0; p < 6; p++) out.push(stem + e[p]);
    return out;
  }

  function futStem(inf) {
    var ir = IRR[inf];
    if (ir && ir.futStem) return ir.futStem;
    return stripAccents(inf); // oír -> oir
  }
  function futuro(inf) { var s = futStem(inf), o = []; for (var p = 0; p < 6; p++) o.push(s + FUT[p]); return o; }
  function condicional(inf) { var s = futStem(inf), o = []; for (var p = 0; p < 6; p++) o.push(s + COND[p]); return o; }

  function subjuntivo(inf) {
    var ir = IRR[inf];
    if (ir && ir.subjuntivo) return ir.subjuntivo.slice();
    var g = group(inf), sc = info(inf).sc, e = END.subjuntivo[g], out = [];
    var base;
    if (ir && ir.subjStem) base = ir.subjStem;
    else base = yoPresent(inf).replace(/o$/, '');
    // spelling for -car/-gar/-zar
    if (g === 'ar') {
      if (/car$/.test(inf)) base = base.slice(0, -1) + 'qu';
      else if (/gar$/.test(inf)) base = base + 'u';
      else if (/zar$/.test(inf)) base = base.slice(0, -1) + 'c';
    }
    for (var p = 0; p < 6; p++) {
      var s = base;
      if (sc && (p === 3 || p === 4) && !(ir && (ir.yo || ir.subjStem))) {
        // nosotros/vosotros: -ar/-er keep original stem; -ir e>i, o>u
        var plain = stemOf(inf);
        if (g === 'ir') s = changeStem(plain, sc === 'ue' ? 'ue' : 'i', sc === 'ue' ? 'u' : 'i');
        else s = plain;
        if (/guir$/.test(inf)) s = s.slice(0, -1);
        else if (/[g](er|ir)$/.test(inf)) s = s.slice(0, -1) + 'j';
        else if (g === 'ar') {
          if (/car$/.test(inf)) s = s.slice(0, -1) + 'qu';
          else if (/gar$/.test(inf)) s = s + 'u';
          else if (/zar$/.test(inf)) s = s.slice(0, -1) + 'c';
        }
      }
      out.push(s + e[p]);
    }
    return out;
  }

  function subjImperfecto(inf) {
    var b = indefinido(inf)[5].replace(/ron$/, '');
    var o = [b + 'ra', b + 'ras', b + 'ra', accentLastVowel(b) + 'ramos', b + 'rais', b + 'ran'];
    return o;
  }

  function participio(inf) {
    if (PARTICIPLES[inf]) return PARTICIPLES[inf];
    var g = group(inf);
    return stemOf(inf) + (g === 'ar' ? 'ado' : 'ido');
  }

  function gerundio(inf) {
    var ir = IRR[inf];
    if (ir && ir.gerundio) return ir.gerundio;
    var g = group(inf), stem = stemOf(inf), sc = info(inf).sc;
    if (g === 'ar') return stem + 'ando';
    if (/uir$/.test(inf) && !/guir$/.test(inf)) return stem + 'yendo';
    if (g === 'ir' && sc) stem = changeStem(stem, sc === 'ue' ? 'ue' : 'i', sc === 'ue' ? 'u' : 'i');
    return stem + 'iendo';
  }

  /* imperative: returns [null, tú, usted, nosotros, vosotros, ustedes] */
  function imperativo(inf) {
    var ir = IRR[inf] || {}, sub = subjuntivo(inf), pres = presente(inf);
    var tu = ir.impTu || pres[2];
    var vos = ir.impVos || (stripAccents(inf).slice(0, -1) + 'd');
    var nos = ir.impNos || sub[3];
    return [null, tu, sub[2], nos, vos, sub[5]];
  }
  function imperativoNeg(inf) {
    var s = derived(inf, subjuntivo) || subjuntivo(inf);
    return [null, 'no ' + s[1], 'no ' + s[2], 'no ' + s[3], 'no ' + s[4], 'no ' + s[5]];
  }

  function derived(inf, fn) {
    var ir = IRR[inf];
    if (ir && ir.base) {
      var r = fn(ir.base);
      if (typeof r === 'string') return ir.prefix + r;
      var o = [];
      for (var i = 0; i < r.length; i++) o.push(r[i] === null ? null : fixAccentDerived(ir.prefix + r[i], r[i]));
      return o;
    }
    return null;
  }
  // compound verbs keep stress: tengo -> mantengo; ten -> mantén; pon -> propón
  function fixAccentDerived(full, base) {
    if (base === 'ten' || base === 'pon' || base === 'ven') return accentLastVowel(full);
    return full;
  }

  var FN = {
    presente: presente, indefinido: indefinido, imperfecto: imperfecto, futuro: futuro,
    condicional: condicional, subjuntivo: subjuntivo, subjImperfecto: subjImperfecto,
    imperativo: imperativo, imperativoNeg: imperativoNeg
  };

  /* Verbs in the verified dataset (ECM.verbs, 730+ verbs) are conjugated from it; this rule engine is the
   * fallback for any other verb typed by the learner. */
  var MAPT = { presente: 'presente', indefinido: 'indefinido', imperfecto: 'imperfecto', perfecto: 'perfecto', pluscuamperfecto: 'pluscuamperfecto',
    futuro: 'futuro', condicional: 'condicional', subjuntivo: 'subjPresente', subjImperfecto: 'subjImperfectoRa', imperativo: 'imperativo', imperativoNeg: 'imperativoNeg' };
  function fromDataset(inf, tense) {
    var V = ECM.verbs;
    if (!V || !V.known(inf)) return null;
    if (tense === 'participio') return V.nonFinite(inf.replace(/se$/, '')).participio;
    if (tense === 'gerundio') return V.nonFinite(inf).gerundio;
    if (!MAPT[tense]) return null;
    var f = V.forms(inf, MAPT[tense]);
    if (!f) return null;
    for (var i = 0; i < f.length; i++) if (f[i] === undefined) f[i] = null;
    return f;
  }

  function conjugate(inf, tense) {
    inf = String(inf).toLowerCase();
    if (inf === 'oir') inf = 'oír';
    var ds = fromDataset(inf, tense);
    if (ds) return ds;
    var reflexive = false;
    if (/se$/.test(inf) && inf.length > 4 && (VERBS[inf.slice(0, -2)] || /(ar|er|ir|ír)se$/.test(inf))) {
      reflexive = true; inf = inf.slice(0, -2);
    }
    var forms;
    if (tense === 'perfecto' || tense === 'pluscuamperfecto') {
      var part = participio(inf), aux = tense === 'perfecto' ? HABER_PRES : HABER_IMPF;
      var d = derived(inf, participio); if (d) part = d;
      forms = []; for (var p = 0; p < 6; p++) forms.push(aux[p] + ' ' + part);
    } else if (tense === 'participio') {
      return derived(inf, participio) || participio(inf);
    } else if (tense === 'gerundio') {
      return derived(inf, gerundio) || gerundio(inf);
    } else {
      var f = FN[tense];
      if (!f) throw new Error('Unknown tense ' + tense);
      forms = tense === 'imperativoNeg' ? f(inf) : (derived(inf, f) || f(inf));
    }
    if (reflexive && tense !== 'imperativo' && tense !== 'imperativoNeg') {
      var pr = ['me', 'te', 'se', 'nos', 'os', 'se'];
      for (var k = 0; k < 6; k++) forms[k] = pr[k] + ' ' + forms[k];
    } else if (reflexive && tense === 'imperativoNeg') {
      var pn = [null, 'te', 'se', 'nos', 'os', 'se'];
      for (var n = 1; n < 6; n++) forms[n] = forms[n].replace(/^no /, 'no ' + pn[n] + ' ');
    } else if (reflexive && tense === 'imperativo') {
      return [null, null, null, null, null, null]; // handled in content (enclitic + accent)
    }
    return forms;
  }

  /* Is the form irregular compared with a fully regular model? (for highlighting) */
  function regularForms(inf, tense) {
    var g = group(inf), st = stemOf(inf), o = [], p;
    if (tense === 'presente' || tense === 'indefinido' || tense === 'imperfecto' || tense === 'subjuntivo') {
      for (p = 0; p < 6; p++) o.push(st + END[tense][g][p]);
      return o;
    }
    if (tense === 'futuro') { for (p = 0; p < 6; p++) o.push(inf + FUT[p]); return o; }
    if (tense === 'condicional') { for (p = 0; p < 6; p++) o.push(inf + COND[p]); return o; }
    return null;
  }

  /* Reverse index: form -> list of {v, t, p} (used by the speaking checker). */
  var REV = null;
  function reverseIndex() {
    if (REV) return REV;
    REV = {};
    var ts = ['presente', 'indefinido', 'imperfecto', 'futuro', 'condicional', 'subjuntivo'];
    for (var inf in VERBS) {
      if (!VERBS.hasOwnProperty(inf)) continue;
      for (var i = 0; i < ts.length; i++) {
        var fs;
        try { fs = conjugate(inf, ts[i]); } catch (e) { continue; }
        for (var p = 0; p < 6; p++) {
          var k = fs[p];
          (REV[k] = REV[k] || []).push({ v: inf, t: ts[i], p: p });
        }
      }
    }
    return REV;
  }

  ECM.conj = {
    PERSONS: PERSONS, PERSONS_SHORT: PERSONS_SHORT, PERSONS_AR: PERSONS_AR, TENSES: TENSES, VERBS: VERBS,
    conjugate: conjugate, participio: function (v) { return conjugate(v, 'participio'); },
    gerundio: function (v) { return conjugate(v, 'gerundio'); },
    regularForms: regularForms, reverseIndex: reverseIndex, group: group,
    stripAccents: stripAccents, isKnown: function (v) { return !!VERBS[v]; },
    meaning: function (v) { return VERBS[v] ? VERBS[v][0] : ''; },
    stemChange: function (v) { return VERBS[v] ? (VERBS[v][1] || '') : ''; },
    isIrregular: function (v) { if (ECM.verbs && ECM.verbs.known(v)) { var c = ECM.verbs.classify(v); return c === 'i'; } return !!IRR[v]; }
  };
})(typeof window !== 'undefined' ? window : this);
