/* Dev helper: node tests/shot.js <outdir> <hash> [width] [height] [fullPage]
 * Serves ./site on a local port, opens the hash route, saves a screenshot and prints JS errors. */
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..', 'site');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json' };
function serve() {
  return new Promise(res => {
    const s = http.createServer((req, rsp) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
      const f = path.join(root, p);
      fs.readFile(f, (e, d) => { if (e) { rsp.writeHead(404); rsp.end('nf'); return; } rsp.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); rsp.end(d); });
    }).listen(0, () => res(s));
  });
}
module.exports = { serve };
if (require.main === module) (async () => {
  const [out, hash = '', w = '1440', h = '900', full = '0', sy = '0'] = process.argv.slice(2);
  const s = await serve(), port = s.address().port;
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: +w, height: +h } });
  const errs = [];
  pg.on('pageerror', e => errs.push(e.message)); pg.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await pg.goto(`http://localhost:${port}/index.html#${hash}`); await pg.waitForTimeout(900); if (+sy) { await pg.evaluate(y => window.scrollTo(0, y), +sy); await pg.waitForTimeout(300); }
  await pg.screenshot({ path: out, fullPage: full === '1' });
  console.log('errors:', JSON.stringify(errs)); await b.close(); s.close();
})();
