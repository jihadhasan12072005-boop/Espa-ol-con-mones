/* Reads Fred Jehle's Conjugated Spanish Verb Database (CC BY-NC-SA 3.0, see scripts/verbs/README.md),
 * normalises spelling to the current RAE orthography (2010) and applies documented errata. Node only. */
'use strict';
var fs = require('fs'), path = require('path');
var P = ['1s', '2s', '3s', '1p', '2p', '3p'];
function parseCsv(t) {
  var rows = [], row = [], f = '', q = false;
  for (var i = 0; i < t.length; i++) {
    var c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true; else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; } else if (c !== '\r') f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows;
}
var KEY = {
  'Indicativo|Presente': 'presente', 'Indicativo|Pretérito': 'indefinido', 'Indicativo|Imperfecto': 'imperfecto',
  'Indicativo|Futuro': 'futuro', 'Indicativo|Condicional': 'condicional', 'Indicativo|Pretérito perfecto': 'perfecto',
  'Indicativo|Pluscuamperfecto': 'pluscuamperfecto', 'Indicativo|Pretérito anterior': 'anterior',
  'Indicativo|Futuro perfecto': 'futuroPerfecto', 'Indicativo|Condicional perfecto': 'condicionalPerfecto',
  'Subjuntivo|Presente': 'subjPresente', 'Subjuntivo|Imperfecto': 'subjImperfecto', 'Subjuntivo|Futuro': 'subjFuturo',
  'Subjuntivo|Pretérito perfecto': 'subjPerfecto', 'Subjuntivo|Pluscuamperfecto': 'subjPluscuamperfecto',
  'Subjuntivo|Futuro perfecto': 'subjFuturoPerfecto', 'Imperativo Afirmativo|Presente': 'imperativo', 'Imperativo Negativo|Presente': 'imperativoNeg'
};

/* --- 2010 RAE orthography: words that are monosyllables by orthographic convention lose the written accent
 *     (rio, frio, crie, guio, hui, riais, fiais…). Diacritic accents (dé, sé) are kept. --- */
var STRONG = 'aeoáéó', WEAK = 'iuü';
function syllables(w) {
  w = w.toLowerCase().replace(/qu([ei])/g, 'q$1').replace(/gu([ei])/g, 'g$1');
  var n = 0, prev = null;
  for (var i = 0; i < w.length; i++) {
    var c = w[i], isV = /[aeiouáéíóúü]/.test(c);
    if (!isV) { prev = null; continue; }
    if (prev === null) { n++; prev = c; continue; }
    // two vowels: hiatus if both strong, or accented weak vowel next to a strong one
    var hiatus = (STRONG.indexOf(prev) >= 0 && STRONG.indexOf(c) >= 0) || /[íú]/.test(c) && STRONG.indexOf(prev) >= 0 || /[íú]/.test(prev) && STRONG.indexOf(c) >= 0;
    if (hiatus) n++;
    prev = c;
  }
  return n;
}
var DIACRITIC = { 'dé': 1, 'sé': 1 };
function plain(s) { return s.replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u'); }
function rae2010word(w) {
  // a written monosyllable never takes an accent mark, except the diacritic ones
  if (DIACRITIC[w] || !/[áéíóú]/.test(w)) return w;
  return syllables(w) === 1 ? plain(w) : w;
}
function rae2010(form) { return form.split(' ').map(rae2010word).join(' '); }

/* --- errata found by cross-checking against the app's engine and the consistency rules (each one reviewed) --- */
var ERRATA = {
  'soñar|imperativo|3': ['sonemos', 'soñemos'],            // typo in source
  'soñar|imperativoNeg|3': ['no sonemos', 'no soñemos'],
  'ser|imperativoNeg|4': ['no seais', 'no seáis']           // se-áis is two syllables: accent required
};

function load() {
  var R = parseCsv(fs.readFileSync(path.join(__dirname, 'jehle_verb_database.csv'), 'utf8')), H = R.shift(), out = {}, changed = [];
  R.forEach(function (r) {
    if (r.length < 10) return;
    var o = {}; H.forEach(function (h, i) { o[h] = r[i]; });
    var k = KEY[o.mood + '|' + o.tense]; if (!k) throw new Error('unknown tense ' + o.mood + '|' + o.tense);
    var v = out[o.infinitive] = out[o.infinitive] || { en: o.infinitive_english, t: {} };
    v.ger = rae2010(o.gerund); v.part = rae2010(o.pastparticiple);
    v.t[k] = P.map(function (p, i) {
      var f = o['form_' + p], g = rae2010(f), e = ERRATA[o.infinitive + '|' + k + '|' + i];
      if (g !== f) changed.push(o.infinitive + ' ' + k + ' ' + f + ' → ' + g);
      if (e) { if (g !== e[0]) throw new Error('erratum no longer matches ' + o.infinitive + ' ' + k + ' ' + i + ': ' + g); g = e[1]; }
      return g;
    });
  });
  return { verbs: out, orthography: changed };
}
module.exports = { load: load, rae2010: rae2010, syllables: syllables };
if (require.main === module) { var d = load(); console.log(Object.keys(d.verbs).length + ' verbs'); console.log(d.orthography.join('\n')); }
