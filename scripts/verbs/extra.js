/* Verbs that are missing from the Jehle source but are essential for daily life in Spain, DELE A2 and B1–B2.
 * Three documented methods (applied by scripts/build-verbs.js):
 *  REGULAR  — fully regular verbs: every form comes from the regular endings (checked: none ends in a
 *             spelling-change ending such as -car/-gar/-zar/-ger/-gir/-cer/-cir/-uir/-guir).
 *  MODEL    — same RAE conjugation model as a verb of the source: the model's prefix is replaced and
 *             every form of the model is rebuilt (contener ← tener, desplazar ← cruzar, transferir ← preferir).
 *             A monosyllabic model form gets the written accent the longer word needs (ten → contén).
 *  EXPLICIT — verbs with a pattern no source verb shares: forms written out and reviewed by hand.
 * Every resulting table is printed by `node scripts/build-verbs.js --extra` for review. */
'use strict';
var REGULAR = (
  'cantar solicitar tramitar rellenar empadronar jubilar ingresar retirar alojar archivar asegurar atrasar bloquear cambiar colaborar ' +
  'conectar consultar contratar demorar denunciar desconectar detectar disculpar donar elaborar escanear estacionar estropear examinar ' +
  'experimentar facturar fallar fichar financiar fotocopiar gestionar girar golpear grabar hospedar incorporar integrar intercambiar liberar ' +
  'limitar mejorar mencionar multar nombrar ocupar opinar ordenar pasear precisar prestar programar pronunciar proporcionar quitar reclamar ' +
  'recuperar redactar reembolsar reflexionar representar restar retrasar revisar seleccionar separar sumar teclear trasladar valorar vigilar ' +
  'desempeñar empeorar ensayar fundar habitar inquietar ocultar preocupar relacionar sobrar aportar ' +
  'acceder suspender comprometer emprender ' +
  'acudir dimitir discutir emitir existir interrumpir percibir presumir remitir repartir residir resistir transmitir confundir'
).split(' ');

// verb: [model, model prefix, new prefix, overrides]
var MODEL = {
  prevenir: ['venir', '', 'pre'], intervenir: ['venir', '', 'inter'], provenir: ['venir', '', 'pro'],
  retener: ['tener', '', 're'], sostener: ['tener', '', 'sos'], abstener: ['tener', '', 'abs', { o: 1 }],
  disponer: ['poner', '', 'dis'], imponer: ['poner', '', 'im'], reponer: ['poner', '', 're'],
  impedir: ['pedir', '', 'im'], distraer: ['traer', '', 'dis'],
  contradecir: ['decir', '', 'contra', { t: 'contradice' }],                                   // RAE: (tú) contradice
  rehacer: ['hacer', '', 're', { i: 'rehíce,rehiciste,rehízo,rehicimos,rehicisteis,rehicieron' }], // RAE: rehíce, rehízo
  inscribir: ['escribir', 'es', 'ins'],
  poseer: ['leer', 'l', 'pos'], proveer: ['leer', 'l', 'prov', { d2: 'provisto' }],
  transferir: ['preferir', 'pre', 'trans'], comprobar: ['probar', '', 'com'], concluir: ['incluir', 'in', 'con'],
  convivir: ['vivir', '', 'con'], envolver: ['volver', '', 'en'], promover: ['mover', '', 'pro'],
  tender: ['extender', 'ex', ''], fregar: ['regar', 'r', 'fr'], acoger: ['coger', '', 'a'], comparecer: ['parecer', '', 'com'],
  evaluar: ['actuar', 'act', 'eval'], averiar: ['enviar', 'env', 'aver'], enfriar: ['enviar', 'env', 'enfr'],
  esforzar: ['almorzar', 'alm', 'esf'],
  arrancar: ['buscar', 'bus', 'arran'], calificar: ['buscar', 'bus', 'califi'], identificar: ['buscar', 'bus', 'identifi'],
  planificar: ['buscar', 'bus', 'planifi'], justificar: ['buscar', 'bus', 'justifi'], destacar: ['buscar', 'bus', 'desta'],
  embarcar: ['buscar', 'bus', 'embar'], perjudicar: ['buscar', 'bus', 'perjudi'], convocar: ['buscar', 'bus', 'convo'],
  despegar: ['pagar', 'pa', 'despe'], descargar: ['pagar', 'pa', 'descar'], recargar: ['pagar', 'pa', 'recar'],
  encargar: ['pagar', 'pa', 'encar'], divulgar: ['pagar', 'pa', 'divul'], madrugar: ['pagar', 'pa', 'madru'],
  aterrizar: ['cruzar', 'cru', 'aterri'], garantizar: ['cruzar', 'cru', 'garanti'], indemnizar: ['cruzar', 'cru', 'indemni'],
  modernizar: ['cruzar', 'cru', 'moderni'], desplazar: ['cruzar', 'cru', 'despla']
};

var EXPLICIT = {
  haber: { // auxiliary; impersonal "hay" (there is/are) is shown in the lesson notes
    p: 'he,has,ha,hemos,habéis,han', i: 'hube,hubiste,hubo,hubimos,hubisteis,hubieron', f: 'habré,habrás,habrá,habremos,habréis,habrán',
    c: 'habría,habrías,habría,habríamos,habríais,habrían', s: 'haya,hayas,haya,hayamos,hayáis,hayan', t: 'he', en: 'to have (auxiliary); hay = there is/are'
  },
  adquirir: { p: 'adquiero,adquieres,adquiere,,,adquieren', s: 'adquiera,adquieras,adquiera,,,adquieran', t: 'adquiere', en: 'to acquire, obtain' },
  reunir: { p: 'reúno,reúnes,reúne,,,reúnen', s: 'reúna,reúnas,reúna,,,reúnan', t: 'reúne', en: 'to gather, meet; to fulfil (requirements)' },
  soltar: { p: 'suelto,sueltas,suelta,,,sueltan', s: 'suelte,sueltes,suelte,,,suelten', t: 'suelta', en: 'to release, let go' },
  cocer: {
    p: 'cuezo,cueces,cuece,,,cuecen', s: 'cueza,cuezas,cueza,cozamos,cozáis,cuezan', t: 'cuece', en: 'to cook, boil'
  }
};

module.exports = { REGULAR: REGULAR, MODEL: MODEL, EXPLICIT: EXPLICIT, verbs: {} };
