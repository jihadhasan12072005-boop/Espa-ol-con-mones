/* Internal consistency rules that hold for every Spanish verb. Used by build + check. */
'use strict';
var HABER = {
  perfecto: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'], pluscuamperfecto: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
  anterior: ['hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'], futuroPerfecto: ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'],
  condicionalPerfecto: ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'], subjPerfecto: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
  subjPluscuamperfecto: ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'], subjFuturoPerfecto: ['hubiere', 'hubieres', 'hubiere', 'hubiéremos', 'hubiereis', 'hubieren']
};
var RFX = ['me', 'te', 'se', 'nos', 'os', 'se'];
var ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
function accentLast(s) { for (var i = s.length - 1; i >= 0; i--) if (ACC[s[i]]) return s.slice(0, i) + ACC[s[i]] + s.slice(i + 1); return s; }
function check(inf, v, fail) {
  var t = v.t, rf = /se$/.test(inf), ok = function (c, m) { if (!c) fail(inf + ': ' + m); };
  var pre = function (p) { return rf ? RFX[p] + ' ' : ''; };
  var persons = [0, 1, 2, 3, 4, 5].filter(function (p) { return t.presente[p]; }); // defective verbs (llover, doler…) have gaps
  // compound tenses = haber + participle
  Object.keys(HABER).forEach(function (k) { persons.forEach(function (p) { ok(t[k][p] === pre(p) + HABER[k][p] + ' ' + v.part, k + ' ' + p + ' ' + t[k][p]); }); });
  // imperfect subjunctive (-ra) and future subjunctive from the 3rd plural preterite
  var b = t.indefinido[5] ? t.indefinido[5].replace(/^(se) /, '').replace(/ron$/, '') : null;
  if (b) {
    var ra = [b + 'ra', b + 'ras', b + 'ra', accentLast(b) + 'ramos', b + 'rais', b + 'ran'];
    var re = [b + 're', b + 'res', b + 're', accentLast(b) + 'remos', b + 'reis', b + 'ren'];
    persons.forEach(function (p) { ok(t.subjImperfecto[p] === pre(p) + ra[p], 'subjImperfecto ' + p + ' ' + t.subjImperfecto[p] + ' ≠ ' + ra[p]); ok(t.subjFuturo[p] === pre(p) + re[p], 'subjFuturo ' + p + ' ' + t.subjFuturo[p]); });
  }
  // conditional shares the future stem
  persons.forEach(function (p) {
    var fs = t.futuro[p].replace(/^\S+ (?=\S)/, rf ? '' : '$&').split(' ').pop(), cs = t.condicional[p].split(' ').pop();
    ok(fs.replace(/(é|ás|á|emos|éis|án)$/, '') === cs.replace(/(ía|ías|ía|íamos|íais|ían)$/, ''), 'futuro/condicional stem ' + fs + ' / ' + cs);
  });
  // negative imperative = no + (pronoun) + present subjunctive
  [1, 2, 3, 4, 5].forEach(function (p) { if (t.subjPresente[p]) ok(t.imperativoNeg[p] === 'no ' + t.subjPresente[p], 'imperativoNeg ' + p + ' ' + t.imperativoNeg[p] + ' ≠ no ' + t.subjPresente[p]); });
  // affirmative imperative (non-reflexive): usted/ustedes = subjunctive; vosotros = infinitive -r +d
  if (!rf && t.subjPresente[2]) {
    ok(t.imperativo[2] === t.subjPresente[2], 'imperativo usted ' + t.imperativo[2]);
    ok(t.imperativo[5] === t.subjPresente[5], 'imperativo ustedes ' + t.imperativo[5]);
    if (t.subjPresente[3]) ok(t.imperativo[3] === t.subjPresente[3] || (inf === 'ir' && t.imperativo[3] === 'vamos'), 'imperativo nosotros ' + t.imperativo[3]);
    if (t.imperativo[4]) ok(t.imperativo[4] === inf.replace(/ír$/, 'ir').replace(/r$/, 'd'), 'imperativo vosotros ' + t.imperativo[4]);
  }
  // reflexive variants must equal the base verb with pronouns
  if (rf && v.base) persons.forEach(function (p) {
    ['presente', 'indefinido', 'imperfecto', 'futuro', 'condicional', 'subjPresente'].forEach(function (k) { if (v.base.t[k][p]) ok(t[k][p] === RFX[p] + ' ' + v.base.t[k][p], 'reflexive ' + k + ' ' + p + ' ' + t[k][p] + ' vs ' + v.base.t[k][p]); });
  });
}
module.exports = function validate(verbs) {
  var fails = [];
  Object.keys(verbs).forEach(function (inf) {
    var v = verbs[inf]; if (/se$/.test(inf) && verbs[inf.slice(0, -2)]) v.base = verbs[inf.slice(0, -2)];
    check(inf, v, function (m) { fails.push(m); }); delete v.base;
  });
  return fails;
};
if (require.main === module) { var f = module.exports(require('./jehle.js').load().verbs); console.log(f.length + ' violations'); console.log(f.join('\n')); }
