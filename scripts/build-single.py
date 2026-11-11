#!/usr/bin/env python3
"""Build ONE self-contained HTML file of the app (like «Deutsch mit Dina»): every script, the stylesheet, the fonts
and compressed photos are embedded, so the file opens on any device without a server or other files.
Usage: python3 scripts/build-single.py [output.html]   (default: site/Espanol_con_Mones.html)
Needs Pillow (pip install pillow) to recompress the photos."""
import base64, io, json, os, re, sys
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'site')
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'Espanol_con_Mones.html')


def read(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f:
        return f.read()


def b64(data):
    return base64.b64encode(data).decode('ascii')


def photo(path, width):
    im = Image.open(os.path.join(ROOT, path)).convert('RGB')
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, 'JPEG', quality=60, optimize=True, progressive=True)
    return 'data:image/jpeg;base64,' + b64(buf.getvalue())


html = read('index.html')

# 1. stylesheet with the fonts embedded (.woff only: every Safari version reads it)
css = read('css/app.css')
def font(m):
    name = m.group(1)
    with open(os.path.join(ROOT, 'fonts', name + '.woff'), 'rb') as f:
        return "url(data:font/woff;base64,%s) format('woff')" % b64(f.read())
css = re.sub(r"url\(\.\./fonts/([\w-]+)\.woff2\) format\('woff2'\), url\(\.\./fonts/[\w-]+\.woff\) format\('woff'\)", font, css)
assert '../fonts/' not in css, 'a font was not embedded'
html = re.sub(r'<link rel="stylesheet" href="css/app\.css[^"]*">', lambda m: '<style>\n' + css + '\n</style>', html)

# 2. photos (stored once; U.img maps the thumbnail path to the same copy)
imgs = {}
for f in sorted(os.listdir(os.path.join(ROOT, 'img/photos'))):
    if f.endswith('.jpg'):
        d = photo('img/photos/' + f, 1000 if f.startswith('mapa_') else 820)
        imgs['img/photos/' + f] = d
for f in sorted(os.listdir(os.path.join(ROOT, 'img/fallback'))):
    if f.endswith('.jpg'):
        imgs['img/fallback/' + f] = photo('img/fallback/' + f, 700)
img_script = '<script>window.ECM_IMG = ' + json.dumps(imgs) + ';</script>'

# 3. scripts inlined in order (the first one gets the image table before it)
def script(m):
    src = m.group(1)
    code = read(src).replace('</script', '<\\/script')
    return '<script>/* ' + src + ' */\n' + code + '\n</script>'
first = re.search(r'<script src="js/', html).start()
html = html[:first] + img_script + '\n' + html[first:]
html = re.sub(r'<script src="(js/[^"?]+)(?:\?[^"]*)?"></script>', script, html)
assert '<script src=' not in html, 'a script was not inlined'

# 4. icons and manifest (no other files exist next to the single file)
with open(os.path.join(ROOT, 'img/icon-180.png'), 'rb') as f:
    html = re.sub(r'href="img/icon-180\.png"', 'href="data:image/png;base64,' + b64(f.read()) + '"', html)
html = re.sub(r'<link rel="(?:icon|manifest)"[^>]*>\s*', '', html)
html = html.replace('<title>', '<meta name="ecm-build" content="single-file">\n<title>', 1)

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(html)
print('wrote %s (%.1f MB, %d embedded images)' % (OUT, os.path.getsize(OUT) / 1e6, len(imgs)))
