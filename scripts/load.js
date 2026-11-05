/* Loads the app's data + logic scripts into a Node VM (no DOM) for checks/tests. */
var vm = require('vm'), fs = require('fs'), path = require('path');
module.exports = function load() {
  var html = fs.readFileSync(path.join(__dirname, '../site/index.html'), 'utf8');
  var srcs = []; html.replace(/<script src="([^"?]+)/g, function (m, s) { srcs.push(s); });
  var store = {};
  var win = { localStorage: { getItem: function (k) { return store[k] || null; }, setItem: function (k, v) { store[k] = String(v); }, removeItem: function (k) { delete store[k]; } },
    addEventListener: function () {}, location: { protocol: 'https:', hostname: 'x', hash: '' }, navigator: {}, console: console, setTimeout: setTimeout, clearTimeout: clearTimeout, setInterval: function () {} };
  win.window = win;
  var ctx = vm.createContext(win);
  srcs.forEach(function (s) {
    if (/views\/|core\/app\.js/.test(s) && !/views\/(learn|exams|ccse)\.js/.test(s)) return;
    vm.runInContext(fs.readFileSync(path.join(__dirname, '../site', s), 'utf8'), ctx, { filename: s });
  });
  return win.ECM;
};
