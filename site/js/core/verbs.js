/* Español con Mones — verb laboratory engine (ES5, no modern APIs).
 *
 * Irregular-capable forms come from ECM.VERBDB, built by scripts/build-verbs.js from Fred Jehle's
 * Conjugated Spanish Verb Database (CC BY-NC-SA 3.0), normalised to the 2010 RAE spelling and reviewed.
 * Only the simple tenses that can be irregular are stored (as differences from the regular model).
 * Everything that follows a strict rule in every Spanish verb is derived here: compound tenses
 * (haber + participle), the imperfect (-ra/-se) and future subjunctive (from the 3rd plural preterite),
 * the imperative except tú, the negative imperative, and every reflexive form (pronouns, and enclitic
 * + written accent in the affirmative imperative and gerund).
 * scripts/check.js verifies that this reproduces the reviewed dataset for every verb and every tense.
 */
(function (root) {
  'use strict';
  var ECM = root.ECM = root.ECM || {};

  var RFX = ['me', 'te', 'se', 'nos', 'os', 'se'];
  var HAB = {
    perfecto: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
    pluscuamperfecto: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
    anterior: ['hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'],
    futuroPerfecto: ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'],
    condicionalPerfecto: ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'],
    subjPerfecto: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
    subjPluscuamperfectoRa: ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'],
    subjPluscuamperfectoSe: ['hubiese', 'hubieses', 'hubiese', 'hubiésemos', 'hubieseis', 'hubiesen'],
    subjFuturoPerfecto: ['hubiere', 'hubieres', 'hubiere', 'hubiéremos', 'hubiereis', 'hubieren']
  };
  var END = {
    p: { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] },
    i: { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] },
    m: { ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'] },
    s: { ar: ['e', 'es', 'e', 'emos', 'éis', 'en'], er: ['a', 'as', 'a', 'amos', 'áis', 'an'], ir: ['a', 'as', 'a', 'amos', 'áis', 'an'] },
    f: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
    c: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
  };
  var SIMPLE = { presente: 'p', indefinido: 'i', imperfecto: 'm', futuro: 'f', condicional: 'c', subjPresente: 's' };

  /* ------------------------------------------------------------------ tenses */
  var T = [
    ['presente', 'ind', 'Presente', 'المضارع (الحاضر)', 'A1'],
    ['perfecto', 'ind', 'Pretérito perfecto compuesto', 'الماضي القريب (المرتبط بالحاضر)', 'A2'],
    ['imperfecto', 'ind', 'Pretérito imperfecto', 'الماضي المستمر / الاعتيادي', 'A2'],
    ['indefinido', 'ind', 'Pretérito perfecto simple (indefinido)', 'الماضي البسيط المنتهي', 'A2'],
    ['pluscuamperfecto', 'ind', 'Pretérito pluscuamperfecto', 'الماضي الأسبق', 'B1'],
    ['anterior', 'ind', 'Pretérito anterior', 'الماضي السابق (أدبي نادر)', 'B2'],
    ['futuro', 'ind', 'Futuro simple', 'المستقبل البسيط', 'A2'],
    ['futuroPerfecto', 'ind', 'Futuro compuesto (perfecto)', 'المستقبل التام', 'B1'],
    ['condicional', 'ind', 'Condicional simple', 'الشرطي البسيط', 'B1'],
    ['condicionalPerfecto', 'ind', 'Condicional compuesto', 'الشرطي التام', 'B2'],
    ['subjPresente', 'sub', 'Presente de subjuntivo', 'المضارع الالتزامي (الذاتي)', 'B1'],
    ['subjPerfecto', 'sub', 'Pretérito perfecto de subjuntivo', 'الماضي القريب الالتزامي', 'B1'],
    ['subjImperfectoRa', 'sub', 'Pretérito imperfecto de subjuntivo (-ra)', 'الماضي الالتزامي بصيغة ‎-ra', 'B2'],
    ['subjImperfectoSe', 'sub', 'Pretérito imperfecto de subjuntivo (-se)', 'الماضي الالتزامي بصيغة ‎-se', 'B2'],
    ['subjPluscuamperfectoRa', 'sub', 'Pretérito pluscuamperfecto de subjuntivo (-ra)', 'الماضي الأسبق الالتزامي ‎-ra', 'B2'],
    ['subjPluscuamperfectoSe', 'sub', 'Pretérito pluscuamperfecto de subjuntivo (-se)', 'الماضي الأسبق الالتزامي ‎-se', 'B2'],
    ['subjFuturo', 'sub', 'Futuro simple de subjuntivo (arcaico)', 'المستقبل الالتزامي — قديم', 'B2'],
    ['subjFuturoPerfecto', 'sub', 'Futuro compuesto de subjuntivo (arcaico)', 'المستقبل التام الالتزامي — قديم', 'B2'],
    ['imperativo', 'imp', 'Imperativo afirmativo', 'الأمر', 'A2'],
    ['imperativoNeg', 'imp', 'Imperativo negativo', 'النهي (الأمر المنفي)', 'B1']
  ];
  var TENSES = {}, ORDER = [];
  for (var ti = 0; ti < T.length; ti++) {
    TENSES[T[ti][0]] = { key: T[ti][0], mood: T[ti][1], es: T[ti][2], ar: T[ti][3], level: T[ti][4], archaic: /arcaico/.test(T[ti][2]), compound: !!HAB[T[ti][0]] };
    ORDER.push(T[ti][0]);
  }
  var MOODS = [
    { id: 'ind', es: 'Indicativo', ar: 'صيغة الإخبار' },
    { id: 'sub', es: 'Subjuntivo', ar: 'الصيغة الالتزامية (الذاتية)' },
    { id: 'imp', es: 'Imperativo', ar: 'صيغة الأمر' }
  ];

  /* ------------------------------------------------------------ phonology */
  var ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' }, UNACC = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
  function plain(s) { return String(s).replace(/[áéíóú]/g, function (c) { return UNACC[c]; }); }
  function isVowel(c) { return 'aeiouáéíóúü'.indexOf(c) >= 0; }
  function strongV(c) { return 'aeoáéóíú'.indexOf(c) >= 0; } // a written í/ú behaves like a strong vowel (hiatus)
  var CLUSTER = { bl: 1, br: 1, cl: 1, cr: 1, dr: 1, fl: 1, fr: 1, gl: 1, gr: 1, kl: 1, kr: 1, pl: 1, pr: 1, tr: 1, ch: 1, ll: 1, rr: 1, qu: 1, gu: 1 };

  /* Split a word into written syllables (diphthongs, hiatus, inseparable consonant clusters, silent u). */
  function syllabify(word) {
    var w = String(word).toLowerCase(), n = w.length, vow = [], i;
    for (i = 0; i < n; i++) {
      var v = isVowel(w.charAt(i));
      if (w.charAt(i) === 'u' && i > 0 && /[qg]/.test(w.charAt(i - 1)) && /[eiéí]/.test(w.charAt(i + 1) || '')) v = false; // que, gui
      if (w.charAt(i) === 'y' && i === n - 1 && i > 0 && isVowel(w.charAt(i - 1))) v = false;                          // hay, estoy
      vow.push(v);
    }
    var spans = [];
    i = 0;
    while (i < n) {
      if (!vow[i]) { i++; continue; }
      var s = i; i++;
      while (i < n && vow[i] && !(strongV(w.charAt(i - 1)) && strongV(w.charAt(i)))) i++;
      spans.push([s, i]);
    }
    if (!spans.length) return [w];
    var syl = [], start = 0;
    for (var k = 0; k < spans.length; k++) {
      var end = spans[k][1];
      if (k === spans.length - 1) { syl.push(w.slice(start)); break; }
      var run = w.slice(end, spans[k + 1][0]), cut;
      if (run.length <= 1) cut = 0;
      else if (run.length === 2) cut = CLUSTER[run] ? 0 : 1;
      else cut = CLUSTER[run.slice(-2)] ? run.length - 2 : run.length - 1;
      syl.push(w.slice(start, end + cut));
      start = end + cut;
    }
    return syl;
  }
  /* index of the stressed syllable (accent mark, or the default rules) */
  function stressIndex(syl) {
    for (var i = 0; i < syl.length; i++) if (/[áéíóú]/.test(syl[i])) return i;
    if (syl.length === 1) return 0;
    return /[aeiouns]$/.test(syl.join('')) ? syl.length - 2 : syl.length - 1;
  }
  /* write the accent mark required by the general rules, stress on syllable si (syllables without accents) */
  function writeAccent(syl, si) {
    var w = syl.join(''), n = syl.length, need;
    if (n === 1) need = false;
    else if (si === n - 1) need = /[aeiouns]$/.test(w);
    else if (si === n - 2) need = !/[aeiouns]$/.test(w);
    else need = true;
    if (!need) return w;
    var x = syl[si], pos = x.search(/[aeo]/);
    if (pos < 0) pos = Math.max(x.lastIndexOf('i'), x.lastIndexOf('u'));
    if (pos < 0) return w;
    var out = syl.slice(); out[si] = x.slice(0, pos) + ACC[x.charAt(pos)] + x.slice(pos + 1);
    return out.join('');
  }
  /* attach enclitic pronoun(s) keeping the stress of the verb form: levanta + te -> levántate */
  function enclitic(form, clitic, dropS) {
    var syl = syllabify(form), si = stressIndex(syl), stem = dropS ? form.replace(/s$/, '') : form;
    // a stressed í/ú in hiatus keeps its accent whatever happens (ríete, reúnase)
    if (/[íú]/.test(syl[si]) && /[íú][aeoh]|[aeo]h?[íú]/.test(form)) return stem + clitic;
    return writeAccent(syllabify(plain(stem) + clitic), si);
  }
  function accentLast(s) { for (var i = s.length - 1; i >= 0; i--) if (ACC[s.charAt(i)]) return s.slice(0, i) + ACC[s.charAt(i)] + s.slice(i + 1); return s; }
  /* rough phonetic key: equal keys = same pronunciation, different spelling (busqué ~ buscé, cojo ~ cogo) */
  function phon(w) {
    return plain(w).replace(/gü/g, 'Gw').replace(/gu(?=[aou])/g, 'Gw').replace(/qu(?=[ei])/g, 'k').replace(/c(?=[aou])/g, 'k').replace(/c(?=[ei])/g, 'θ')
      .replace(/z/g, 'θ').replace(/gu(?=[ei])/g, 'G').replace(/g(?=[ei])/g, 'x').replace(/g/g, 'G').replace(/j/g, 'x')
      .replace(/([aeiou])y(?=[aeiou])/g, '$1i').replace(/i(?=[aeo])/g, 'i');
  }

  /* --------------------------------------------------------------- decode */
  function group(inf) { var e = plain(inf).slice(-2); return e === 'ar' ? 'ar' : (e === 'er' ? 'er' : 'ir'); }
  function regular(inf, code) {
    var g = group(inf), st = inf.slice(0, -2), o = [], p, fs = plain(inf);
    if (code === 'f' || code === 'c') { for (p = 0; p < 6; p++) o.push(fs + END[code][p]); return o; }
    for (p = 0; p < 6; p++) o.push(st + END[code][g][p]);
    return o;
  }
  function regularPart(inf) { return inf.slice(0, -2) + (group(inf) === 'ar' ? 'ado' : 'ido'); }
  function regularGer(inf) { return inf.slice(0, -2) + (group(inf) === 'ar' ? 'ando' : 'iendo'); }

  function db() { return ECM.VERBDB || { v: {} }; }
  function entry(lex) { var d = db().v; return d.hasOwnProperty(lex) ? d[lex] : null; }
  /* reflexive infinitives (levantarse) are stored under the plain infinitive (levantar) */
  function lexOf(inf) { return /se$/.test(inf) ? inf.slice(0, -2) : inf; }
  function known(inf) { return !!entry(lexOf(String(inf || '').toLowerCase())); }
  function stored(lex) {
    var e = entry(lex); if (!e) return null;
    var r = {}, codes = ['p', 'i', 'm', 'f', 'c', 's'];
    for (var k = 0; k < codes.length; k++) {
      var c = codes[k], v = e[c];
      r[c] = v ? v.split(',') : regular(lex, c);
      // an empty slot inside a stored list means "regular form" (keeps the data file small)
      for (var p = 0; p < 6; p++) if (v && r[c][p] === '') r[c][p] = regular(lex, c)[p];
    }
    r.t = e.t || r.p[2]; r.g = e.g || regularGer(lex); r.d = e.d || regularPart(lex); r.d2 = e.d2 || ''; r.def = e.def || 0;
    return r;
  }
  /* persons that exist (weather verbs: 3rd singular; doler-type: 3rd singular + plural) */
  function personsOf(s) {
    if (s.def === 1) return [false, false, true, false, false, false];
    if (s.def === 3) return [false, false, true, false, false, true];
    return [true, true, true, true, true, true];
  }
  function derive(s, lex, tense) {
    var b = s.i[5].replace(/ron$/, ''), o = [], p;
    if (SIMPLE[tense]) return s[SIMPLE[tense]].slice();
    if (tense === 'subjImperfectoRa') return [b + 'ra', b + 'ras', b + 'ra', accentLast(b) + 'ramos', b + 'rais', b + 'ran'];
    if (tense === 'subjImperfectoSe') return [b + 'se', b + 'ses', b + 'se', accentLast(b) + 'semos', b + 'seis', b + 'sen'];
    if (tense === 'subjFuturo') return [b + 're', b + 'res', b + 're', accentLast(b) + 'remos', b + 'reis', b + 'ren'];
    if (HAB[tense]) { for (p = 0; p < 6; p++) o.push(HAB[tense][p] + ' ' + s.d); return o; }
    if (tense === 'imperativo') {
      var vos = /[eo]ír$/.test(lex) ? lex.replace(/r$/, 'd') : plain(lex).replace(/r$/, 'd'); // oíd, reíd
      return [null, s.t, s.s[2], lex === 'ir' ? 'vamos' : s.s[3], vos, s.s[5]];
    }
    if (tense === 'imperativoNeg') return [null, 'no ' + s.s[1], 'no ' + s.s[2], 'no ' + s.s[3], 'no ' + s.s[4], 'no ' + s.s[5]];
    return null;
  }

  /* full conjugation of one tense: array of 6 (null where the form does not exist) */
  function forms(inf, tense) {
    inf = String(inf).toLowerCase();
    var rf = /se$/.test(inf), lex = lexOf(inf), s = stored(lex);
    if (!s) return null;
    var out = derive(s, lex, tense); if (!out) return null;
    var has = personsOf(s), p;
    if (rf && tense === 'imperativo') {
      out = [null, enclitic(s.t, 'te'), enclitic(s.s[2], 'se'), enclitic(lex === 'ir' ? 'vamos' : s.s[3], 'nos', true),
        lex === 'ir' ? 'idos' : (group(lex) === 'ir' ? plain(lex).slice(0, -2) + 'íos' : plain(lex).slice(0, -1) + 'os'),
        enclitic(s.s[5], 'se')];
    } else if (rf && tense === 'imperativoNeg') {
      for (p = 1; p < 6; p++) out[p] = 'no ' + RFX[p] + ' ' + s.s[p];
    } else if (rf) {
      for (p = 0; p < 6; p++) out[p] = RFX[p] + ' ' + out[p];
    }
    for (p = 0; p < 6; p++) if (!has[p]) out[p] = null;
    return out;
  }
  function nonFinite(inf) {
    inf = String(inf).toLowerCase();
    var rf = /se$/.test(inf), s = stored(lexOf(inf));
    if (!s) return null;
    return { infinitivo: inf, gerundio: rf ? enclitic(s.g, 'se') : s.g, participio: s.d, participioAlt: s.d2 };
  }

  /* the fully regular model of the same ending (for highlighting irregular forms) */
  function regularOf(lex, tense) {
    var fake = { p: regular(lex, 'p'), i: regular(lex, 'i'), m: regular(lex, 'm'), f: regular(lex, 'f'), c: regular(lex, 'c'), s: regular(lex, 's') };
    fake.t = fake.p[2]; fake.d = regularPart(lex);
    return derive(fake, lex, tense);
  }
  /* sound of the regular form, keeping the sound of the infinitive's stem (busc-ar -> /busk/ + é) */
  function regSound(lex, regForm) {
    var st = lex.slice(0, -2), ps = phon(lex).slice(0, -2);
    return String(regForm).split(' ').map(function (w) { return w.indexOf(st) === 0 && w !== st ? ps + phon(w.slice(st.length)) : phon(w); }).join(' ');
  }
  function kind(lex, f, r) {
    if (!f || !r || f === r) return 0;
    if (plain(f) === plain(r)) return 1;            // written accent only (envío, actúo)
    if (phon(f) === regSound(lex, r)) return 1;     // spelling keeps the sound (busqué, cojo, venzo)
    return 2;
  }
  /* per form: 0 regular, 1 spelling/accent change only (same sound), 2 irregular */
  function irregularMask(inf, tense) {
    var lex = lexOf(String(inf).toLowerCase()), f = forms(lex, tense); if (!f) return null;
    var reg = regularOf(lex, tense), m = [];
    for (var p = 0; p < 6; p++) m.push(kind(lex, f[p], reg[p]));
    return m;
  }
  /* split a simple form into stem + regular ending (null if the ending is not the regular one) */
  function split(inf, tense, p, form) {
    if (!form || / /.test(form)) return null;
    var g = group(lexOf(inf)), e;
    if (tense === 'futuro') e = END.f[p];
    else if (tense === 'condicional') e = END.c[p];
    else if (SIMPLE[tense]) e = END[SIMPLE[tense]][g][p];
    else if (tense === 'subjImperfectoRa') e = ['ra', 'ras', 'ra', 'ramos', 'rais', 'ran'][p];
    else if (tense === 'subjImperfectoSe') e = ['se', 'ses', 'se', 'semos', 'seis', 'sen'][p];
    else if (tense === 'subjFuturo') e = ['re', 'res', 're', 'remos', 'reis', 'ren'][p];
    if (!e || form.length <= e.length || form.slice(-e.length) !== e) return null;
    return [form.slice(0, -e.length), e];
  }
  /* verb class: 'r' regular, 'o' spelling change only, 'a' written-accent change, 'i' irregular */
  function classify(inf) {
    var lex = lexOf(String(inf).toLowerCase()), s = stored(lex);
    if (!s) return null;
    var keys = ['presente', 'indefinido', 'imperfecto', 'futuro', 'subjPresente', 'imperativo'], irr = false, spell = false, acc = false, k, p;
    for (k = 0; k < keys.length; k++) {
      var f = forms(lex, keys[k]), reg = regularOf(lex, keys[k]);
      for (p = 0; p < 6; p++) {
        var kd = kind(lex, f[p], reg[p]);
        if (kd === 2) irr = true;
        else if (kd === 1) { if (plain(f[p]) === plain(reg[p])) acc = true; else spell = true; }
      }
    }
    if (kind(lex, s.d, regularPart(lex)) === 2) irr = true;
    if (kind(lex, s.g, regularGer(lex)) === 2) irr = true;
    return irr ? 'i' : (acc ? 'a' : (spell ? 'o' : 'r'));
  }


  /* ------------------------------------------------------------ catalogue */
  var CATS = {
    d: 'الحياة اليومية', c: 'التواصل والكلام', m: 'الحركة والسفر', w: 'العمل والمال', a: 'الإدارة والأوراق', e: 'المشاعر والعلاقات',
    b: 'الجسم والصحة', f: 'الطعام والمطبخ', h: 'البيت', s: 'الدراسة', t: 'التفكير والإدراك', l: 'الترفيه والفنون والرياضة',
    n: 'الطبيعة والطقس', g: 'المجتمع والقانون', x: 'أفعال عامة'
  };
  var PRIORITY = ['presente', 'indefinido', 'imperfecto', 'perfecto', 'futuro', 'condicional', 'subjPresente', 'imperativo', 'imperativoNeg',
    'pluscuamperfecto', 'futuroPerfecto', 'condicionalPerfecto', 'subjPerfecto', 'subjImperfectoRa', 'subjImperfectoSe', 'subjPluscuamperfectoRa',
    'subjPluscuamperfectoSe', 'anterior', 'subjFuturo', 'subjFuturoPerfecto'];
  var BASIC = { presente: 1, indefinido: 1, imperfecto: 1, futuro: 1, condicional: 1, subjPresente: 1, subjImperfectoRa: 1 };
  function bare(f) { return f ? f.replace(/^no /, '').replace(/^(me|te|se|nos|os) /, '') : f; }
  /* which tense/person a form written in an example belongs to */
  function analyze(inf, form, annot) {
    var w = String(form).charAt(0).toLowerCase() + String(form).slice(1), hits = [], basic = 0, i, p;
    for (i = 0; i < PRIORITY.length; i++) {
      var t = PRIORITY[i], fs = forms(inf, t) || [];
      if (/se$/.test(inf) && t !== 'imperativo') fs = fs.concat(forms(lexOf(inf), t) || []);
      for (p = 0; p < fs.length; p++) if (fs[p] && (bare(fs[p]) === w || fs[p] === w)) { hits.push({ t: t, p: p % 6 }); break; }
    }
    var nf = nonFinite(inf), nfl = nonFinite(lexOf(inf));
    var nonfin = w === nf.infinitivo || w === lexOf(inf) || w === nf.gerundio || w === nfl.gerundio || w === nf.participio || (nf.participioAlt && nf.participioAlt.split(', ').indexOf(w) >= 0);
    if (annot) {
      for (i = 0; i < hits.length; i++) if (hits[i].t === annot) return { ok: true, tense: annot, person: hits[i].p };
      return { ok: false, why: 'not a form of ' + annot };
    }
    if (!hits.length) return nonfin ? { ok: true, tense: 'nf' } : { ok: false, why: 'not a form of ' + inf };
    for (i = 0; i < hits.length; i++) if (BASIC[hits[i].t]) basic++;
    if (basic > 1) return { ok: false, why: 'ambiguous (' + hits.map(function (h) { return h.t; }).join('/') + '): add |tense' };
    return { ok: true, tense: hits[0].t, person: hits[0].p };
  }
  var CAT = null;
  function catalog() {
    if (CAT) return CAT;
    var list = [], by = {}, src = ECM.VERBMETA || [];
    for (var i = 0; i < src.length; i++) {
      var f = src[i].split('|');
      var m = /\[\[([^\]:]+)(?::([a-zA-Z]+))?\]\]/.exec(f[4] || '');
      var it = { inf: f[0], lex: lexOf(f[0]), ar: f[1], level: f[2], cats: (f[3] || '').split(' '), es: f[4], esAr: f[5],
        form: m ? m[1] : '', annot: m ? (m[2] || '') : '' };
      var e = entry(it.lex) || {};
      it.cls = entry(it.lex) ? classify(it.lex) : null;
      it.rx = !!e.rx; it.onlyRefl = !!e.o; it.source = e.x === 'r' || e.x === 'm' || e.x === 'e' ? e.x : 'j';
      list.push(it); by[it.lex] = it;
    }
    list.sort(function (a, b) { return plain(a.lex) < plain(b.lex) ? -1 : (plain(a.lex) > plain(b.lex) ? 1 : 0); });
    CAT = { list: list, by: by };
    return CAT;
  }
  function exampleInfo(it) { if (!it.form) return null; var r = analyze(it.inf, it.form, it.annot); return r.ok ? r : null; }

  ECM.verbs = {
    TENSES: TENSES, ORDER: ORDER, MOODS: MOODS,
    PERSONS: ['yo', 'tú', 'él / ella / usted', 'nosotros / nosotras', 'vosotros / vosotras', 'ellos / ellas / ustedes'],
    PERSONS_AR: ['أنا', 'أنتَ / أنتِ', 'هو / هي / حضرتك', 'نحن', 'أنتم (إسبانيا)', 'هم / هنّ / حضراتكم'],
    IMP_PERSONS: [null, 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'],
    forms: forms, nonFinite: nonFinite, irregularMask: irregularMask, regularOf: regularOf, split: split, classify: classify,
    CATS: CATS, catalog: catalog, analyze: analyze, exampleInfo: exampleInfo,
    known: known, entry: entry, lexOf: lexOf, group: group, plain: plain, phon: phon,
    syllabify: syllabify, stressIndex: stressIndex, enclitic: enclitic,
    accentAt: function (word, si) { return writeAccent(syllabify(plain(word)), si); }
  };
})(typeof window !== 'undefined' ? window : this);
