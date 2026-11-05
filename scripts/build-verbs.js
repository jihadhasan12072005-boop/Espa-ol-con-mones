/* Builds site/js/data/verbs-db.js from the reviewed Jehle dataset (+ documented additions) and proves that
 * the runtime engine (site/js/core/verbs.js) reproduces every form of every tense.
 * Run: node scripts/build-verbs.js   (fails on any unexpected difference) */
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');
var J = require('./verbs/jehle.js'), validate = require('./verbs/validate.js'), EXTRA = require('./verbs/extra.js');
var OUT = path.join(__dirname, '../site/js/data/verbs-db.js');

var ENG = (function () { var w = {}; w.window = w; vm.createContext(w); vm.runInContext(fs.readFileSync(path.join(__dirname, '../site/js/core/verbs.js'), 'utf8'), w); return w; })();
var V = ENG.ECM.verbs;

/* Forms in the source that break a rule valid for every Spanish verb (found by scripts/verbs/validate.js and
 * reviewed one by one). The engine derives these forms by rule, so the corrected value is what the app shows. */
var REVIEWED_SOURCE_ERRORS = {
  'acercarse|indefinido|4': 'os acercasteis', 'alegrarse|indefinido|4': 'os alegrasteis', 'divorciarse|indefinido|4': 'os divorciasteis',
  'equivocarse|indefinido|4': 'os equivocasteis', 'arrepentirse|imperativoNeg|4': 'no os arrepintáis', 'sentirse|imperativoNeg|4': 'no os sintáis',
  'vestirse|imperativoNeg|4': 'no os vistáis', 'graduar|imperativoNeg|4': 'no graduéis', 'gruñir|imperativo|4': 'gruñid',
  'invertir|subjImperfecto|3': 'invirtiéramos', 'presentir|subjImperfecto|3': 'presintiéramos',
  'lavarse|indefinido|4': 'os lavasteis', 'levantarse|indefinido|4': 'os levantasteis', 'quebrarse|indefinido|4': 'os quebrasteis', 'secarse|indefinido|4': 'os secasteis',
  'maquillarse|imperativo|1': 'maquíllate', 'maquillarse|imperativo|2': 'maquíllese',              // source: "te maquíllate"
  'moverse|imperativo|4': 'moveos',                                                                // source: "movíos" (-er verb)
  'secarse|imperativo|1': 'sécate', 'secarse|imperativo|2': 'séquese', 'secarse|imperativo|5': 'séquense', // source copied equivocarse
  // deliberate: the RAE gives "vamos" / "vámonos" as the usual affirmative imperative (vayamos is also correct)
  'ir|imperativo|3': 'vamos', 'irse|imperativo|3': 'vámonos'
};

function lexForms(src, rf) {
  // strip reflexive pronouns from a reflexive-only verb's simple tenses
  if (!rf) return src;
  var o = {}; Object.keys(src).forEach(function (k) { o[k] = src[k].map(function (f) { return f.replace(/^(me|te|se|nos|os) /, ''); }); }); return o;
}
function encode(lex, arr, code) {
  var V2 = ENG.ECM, reg = (function () { var save = V2.VERBDB; V2.VERBDB = { v: {} }; V2.VERBDB.v[lex] = {}; var r = V.forms(lex, { p: 'presente', i: 'indefinido', m: 'imperfecto', f: 'futuro', c: 'condicional', s: 'subjPresente' }[code]); V2.VERBDB = save; return r; })();
  var diff = false, o = arr.map(function (f, p) { if (f === reg[p] || (!f && !reg[p])) return ''; diff = true; return f; });
  return diff ? o.join(',') : null;
}

function build() {
  var src = J.load(), verbs = src.verbs, fails = validate(verbs);
  var unexplained = fails.filter(function (f) { return !/: (perfecto|pluscuamperfecto|anterior|futuroPerfecto|condicionalPerfecto|subjPerfecto|subjPluscuamperfecto|subjFuturoPerfecto) /.test(f) && !/reflexive indefinido 4/.test(f) && !/imperativo vosotros (freíd|oíd|reíd|sonreíd)$/.test(f) && !/imperativo ustedes (lluevan|nieven)$/.test(f); });
  var known = ['arrepentirse: imperativoNeg 4', 'sentirse: imperativoNeg 4', 'vestirse: imperativoNeg 4', 'graduar: imperativoNeg 4', 'gruñir: imperativo vosotros', 'invertir: subjImperfecto 3', 'presentir: subjImperfecto 3'];
  unexplained = unexplained.filter(function (f) { return !known.some(function (k) { return f.indexOf(k) === 0; }); });
  if (unexplained.length) throw new Error('Unreviewed source problems:\n' + unexplained.join('\n'));

  var out = {}, refl = {};
  Object.keys(verbs).forEach(function (inf) {
    var rf = /se$/.test(inf), lex = rf ? inf.slice(0, -2) : inf;
    if (rf && verbs[lex]) { refl[lex] = 1; return; }       // reflexive variant of a stored verb: derived
    var v = verbs[inf], t = lexForms(v.t, rf), e = {};
    if (rf) e.o = 1;                                         // used only as a reflexive verb (quejarse)
    if (!t.presente[0]) e.def = t.presente[3] || t.presente[1] ? 0 : (t.presente[5] ? 3 : 1);
    ENG.ECM.VERBDB = { v: {} }; ENG.ECM.VERBDB.v[lex] = {};
    [['p', 'presente'], ['i', 'indefinido'], ['m', 'imperfecto'], ['f', 'futuro'], ['c', 'condicional'], ['s', 'subjPresente']].forEach(function (x) {
      var arr = t[x[1]].slice();
      if (e.def) arr = arr.map(function (f, p) { return f || V.forms(lex, x[1])[p]; }); // fill unused persons with the regular-model form (never shown)
      var enc = encode(lex, arr, x[0]); if (enc) e[x[0]] = enc;
    });
    var tu = (rf ? null : t.imperativo[1]) || (rf ? lexForms({ x: [v.t.subjPresente[2]] }, true).x[0] : '');
    if (rf) tu = deriveTuFromReflexive(v.t.imperativo[1], lex);
    if (tu && tu !== (e.p ? e.p.split(',')[2] || V.forms(lex, 'presente')[2] : V.forms(lex, 'presente')[2])) e.t = tu;
    var part = (t.perfecto[2] || t.perfecto[5] || '').replace(/^(se )?(ha|han) /, '');
    if (part && part !== lex.slice(0, -2) + (/ar$/.test(lex) ? 'ado' : 'ido')) e.d = part;
    var alt = v.part.split(/,\s*/).filter(function (x) { return x && x !== part; });
    if (alt.length) e.d2 = alt.join(', ');
    var ger = rf ? stripGerund(v.ger) : v.ger;
    if (ger !== lex.slice(0, -2) + (/ar$/.test(lex) ? 'ando' : 'iendo')) e.g = ger;
    e.en = v.en;
    out[lex] = e;
  });
  Object.keys(refl).forEach(function (lex) { out[lex].rx = 1; });
  addExtras(out);
  return { out: out, src: verbs };
}
/* documented additions (verbs missing from the source): see scripts/verbs/extra.js */
function addExtras(out) {
  var added = {};
  function fresh(lex) { if (out[lex] || added[lex]) throw new Error('extra verb already present: ' + lex); added[lex] = 1; }
  EXTRA.REGULAR.forEach(function (lex) {
    fresh(lex);
    if (/(car|gar|zar|guar|ger|gir|[aeiou]cer|[aeiou]cir|uir|guir|quir|eer|ñir|llir|eír|iar|uar)$/.test(lex) && !/^(cambiar|financiar|fotocopiar|intercambiar|pronunciar|denunciar)$/.test(lex)) throw new Error('not safely regular: ' + lex);
    out[lex] = { x: 'r' };
  });
  Object.keys(EXTRA.MODEL).forEach(function (lex) {
    fresh(lex);
    var m = EXTRA.MODEL[lex], model = m[0], mp = m[1], np = m[2], ov = m[3] || {};
    if (model.indexOf(mp) !== 0 || lex !== np + model.slice(mp.length)) throw new Error('model mismatch ' + lex + ' / ' + model);
    ENG.ECM.VERBDB = { v: out };
    function tr(form) {
      if (!form) return form;
      if (form.indexOf(mp) !== 0) throw new Error(lex + ': model form ' + form + ' does not start with ' + mp);
      var w = np + form.slice(mp.length);
      if (V.syllabify(form).length === 1 && V.syllabify(w).length > 1 && !/[áéíóú]/.test(form)) w = V.accentAt(w, V.syllabify(w).length - 1);
      return w;
    }
    var e = { x: 'm', m: model };
    ENG.ECM.VERBDB = { v: out };
    var nf = V.nonFinite(model), tu = V.forms(model, 'imperativo')[1];
    var conv = {};
    [['p', 'presente'], ['i', 'indefinido'], ['m', 'imperfecto'], ['f', 'futuro'], ['c', 'condicional'], ['s', 'subjPresente']].forEach(function (x) {
      conv[x[0]] = V.forms(model, x[1]).map(tr);
    });
    var cand = { t: tr(tu), g: tr(nf.gerundio), d: tr(nf.participio) };
    if (out[model].d2) cand.d2 = out[model].d2.split(', ').map(tr).join(', ');
    if (out[model].def) e.def = out[model].def;
    ENG.ECM.VERBDB = { v: {} }; ENG.ECM.VERBDB.v[lex] = {};
    Object.keys(conv).forEach(function (c) { var enc = encode(lex, conv[c], c); if (enc) e[c] = enc; });
    var reg = { t: V.forms(lex, 'presente')[2], g: V.nonFinite(lex).gerundio, d: V.nonFinite(lex).participio };
    var regP = (e.p ? conv.p[2] : reg.t);
    if (cand.t !== regP) e.t = cand.t;
    if (cand.g !== reg.g) e.g = cand.g;
    if (cand.d !== reg.d) e.d = cand.d;
    if (cand.d2) e.d2 = cand.d2;
    Object.keys(ov).forEach(function (k) { e[k] = ov[k]; });
    e.en = '';
    out[lex] = e;
  });
  Object.keys(EXTRA.EXPLICIT).forEach(function (lex) { fresh(lex); var e = JSON.parse(JSON.stringify(EXTRA.EXPLICIT[lex])); e.x = 'e'; out[lex] = e; });
}
function stripGerund(g) { return V.plain(g.replace(/se$/, '')) === g.replace(/se$/, '') ? g.replace(/se$/, '') : unaccentGer(g.replace(/se$/, '')); }
function unaccentGer(g) { return g.replace(/á(?=ndo$)/, 'a').replace(/é(?=ndo$)/, 'e'); }
function deriveTuFromReflexive(imp, lex) {
  // quéjate -> queja ; arrepiéntete -> arrepiente ; atrévete -> atreve
  var w = imp.replace(/te$/, ''), syl = V.syllabify(imp), si = V.stressIndex(syl);
  var base = V.plain(w), s2 = V.syllabify(base);
  // re-apply accent only if needed by the general rules for the bare form
  var need = s2.length > 1 && (si === s2.length - 1 ? /[aeiouns]$/.test(base) : si === s2.length - 2 ? !/[aeiouns]$/.test(base) : true);
  if (!need) return base;
  var x = s2[si], pos = x.search(/[aeo]/); if (pos < 0) pos = Math.max(x.lastIndexOf('i'), x.lastIndexOf('u'));
  s2[si] = x.slice(0, pos) + { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' }[x.charAt(pos)] + x.slice(pos + 1);
  return s2.join('');
}

var COMPOUND = {
  perfecto: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'], pluscuamperfecto: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
  anterior: ['hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'], futuroPerfecto: ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'],
  condicionalPerfecto: ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'], subjPerfecto: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
  subjPluscuamperfecto: ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'], subjFuturoPerfecto: ['hubiere', 'hubieres', 'hubiere', 'hubiéremos', 'hubiereis', 'hubieren']
};
function verify(out, src) {
  ENG.ECM.VERBDB = { v: out };
  var problems = [], fixed = [];
  var MAP = ['presente', 'indefinido', 'imperfecto', 'futuro', 'condicional', 'perfecto', 'pluscuamperfecto', 'anterior', 'futuroPerfecto', 'condicionalPerfecto',
    'subjPresente', 'subjPerfecto', 'subjFuturo', 'subjFuturoPerfecto', 'imperativo', 'imperativoNeg'];
  var ALIAS = { subjImperfecto: 'subjImperfectoRa', subjPluscuamperfecto: 'subjPluscuamperfectoRa' };
  Object.keys(src).forEach(function (inf) {
    var v = src[inf], keys = MAP.concat(Object.keys(ALIAS));
    keys.forEach(function (k) {
      var ours = V.forms(inf, ALIAS[k] || k), theirs = v.t[k];
      for (var p = 0; p < 6; p++) {
        var a = ours[p] || '', b = theirs[p] || '';
        if (!b && a && k !== 'imperativo' && k !== 'imperativoNeg') { if (!/^(llover|nevar|doler|gustar|encantar|importar|interesar|parecer|faltar|bastar|acontecer|suceder|ocurrir|tronar|helar|granizar|amanecer|anochecer|lloviznar|relampaguear)$/.test(inf)) problems.push(inf + ' ' + k + ' ' + p + ' extra ' + a); continue; }
        if (!b) continue;
        if (a === b) continue;
        if ((k === 'imperativo' || k === 'imperativoNeg') && out[V.lexOf(inf)].def) { fixed.push(inf + ' ' + k + ' ' + p + ': not shown (verb used only in 3rd person)'); continue; }
        var rev = REVIEWED_SOURCE_ERRORS[inf + '|' + k + '|' + p];
        if (rev && rev === a) { fixed.push(inf + ' ' + k + ' ' + p + ': ' + b + ' → ' + a); continue; }
        if (COMPOUND[k] && b !== COMPOUND[k][p] + ' ' + v.part.split(/,\s*/)[0] && b.indexOf(COMPOUND[k][p] + ' ') !== 0) { fixed.push(inf + ' ' + k + ' ' + p + ': malformed ' + b + ' → ' + a); continue; }
        problems.push(inf + ' ' + k + ' ' + p + ': source=' + b + ' engine=' + a);
      }
    });
    var nf = V.nonFinite(inf);
    if (nf.gerundio !== v.ger) problems.push(inf + ' gerundio source=' + v.ger + ' engine=' + nf.gerundio);
  });
  return { problems: problems, fixed: fixed };
}

if (require.main === module) {
  var b = build(), r = verify(b.out, b.src);
  console.log('stored verbs: ' + Object.keys(b.out).length);
  console.log('reviewed source corrections applied: ' + r.fixed.length + '\n  ' + r.fixed.join('\n  '));
  if (r.problems.length) { console.error('\n' + r.problems.length + ' differences:\n' + r.problems.slice(0, 200).join('\n')); process.exit(1); }
  if (process.argv.indexOf('--extra') >= 0) {
    ENG.ECM.VERBDB = { v: b.out };
    Object.keys(b.out).filter(function (k) { return b.out[k].x === 'm' || b.out[k].x === 'e'; }).forEach(function (k) {
      console.log('\n' + k + ' (' + (b.out[k].m ? 'model ' + b.out[k].m : 'explicit') + ')  ger ' + V.nonFinite(k).gerundio + '  part ' + V.nonFinite(k).participio + (b.out[k].d2 ? ' / ' + b.out[k].d2 : ''));
      ['presente', 'indefinido', 'futuro', 'subjPresente', 'subjImperfectoRa', 'imperativo'].forEach(function (t) { console.log('  ' + t + ': ' + V.forms(k, t).filter(Boolean).join(' ')); });
    });
  }
  var js = '/* GENERATED by scripts/build-verbs.js — do not edit by hand.\n * Conjugations: Fred Jehle, Conjugated Spanish Verb Database (CC BY-NC-SA 3.0), normalised to the 2010 RAE\n * spelling, reviewed, plus the documented additions in scripts/verbs/extra.js. See scripts/verbs/README.md. */\n' +
    'window.ECM = window.ECM || {};\nwindow.ECM.VERBDB = ' + JSON.stringify({ license: 'CC BY-NC-SA 3.0 (Fred Jehle database, adapted)', v: b.out }) + ';\n';
  fs.writeFileSync(OUT, js);
  console.log('wrote ' + OUT + ' (' + Math.round(js.length / 1024) + ' KB)');
}
module.exports = { build: build, verify: verify };
