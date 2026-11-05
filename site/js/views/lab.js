/* The old grammar laboratory (#/lab) is now the Verb Laboratory (#/verbos). Old links keep working. */
(function (ECM) {
  'use strict';
  ECM.views.lab = function (el, args) {
    var v = args[0] && /^[a-záéíóúñü]+(ar|er|ir|ír)(se)?$/.test(args[0]) ? args[0] : '';
    ECM.app.go(v ? '#/verbos/v/' + v + (args[1] === 'drill' ? '/practicar' : '') : '#/verbos');
  };
})(window.ECM);
