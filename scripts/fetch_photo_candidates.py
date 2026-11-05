#!/usr/bin/env python3
"""Fetch candidate photos of Spain from Wikimedia Commons (run in GitHub Actions).

For each subject it searches Commons, keeps only freely licensed (CC0 / PD /
CC BY / CC BY-SA) landscape JPEGs, downloads up to two 1280px thumbnails,
re-encodes them, and writes credits + a contact sheet so a human (or Claude)
can pick the best one. Chosen photos are then copied into site/img/photos.
"""
import json, os, sys, time, urllib.parse, urllib.request, io

UA = "EspanolConMonesBuild/1.0 (educational project; github.com/jihadhasan12072005-boop/Espa-ol-con-mones)"
API = "https://commons.wikimedia.org/w/api.php"
OUT = sys.argv[1] if len(sys.argv) > 1 else "photo-candidates"

SUBJECTS = [
    ("granvia", "Gran Via Madrid Metropolis"),
    ("palacioreal", "Palacio Real de Madrid fachada"),
    ("plazamayor", "Plaza Mayor Madrid"),
    ("barcelona", "Sagrada Familia Barcelona"),
    ("sevilla", "Plaza de España Sevilla"),
    ("toledo", "Toledo panorama Tajo"),
    ("cafe", "terraza cafe Madrid"),
    ("metro", "Metro de Madrid estación andén"),
    ("congreso", "Congreso de los Diputados Madrid fachada"),
    ("mercado", "Mercado de San Miguel Madrid"),
    ("granada", "Alhambra Granada"),
    ("salamanca", "Plaza Mayor Salamanca"),
    ("valencia", "Ciudad de las Artes y las Ciencias Valencia"),
    ("bilbao", "Museo Guggenheim Bilbao"),
    ("street", "Calle Madrid edificios balcones"),
    ("pharmacy", "Farmacia España cruz verde"),
    ("ayuntamiento", "Palacio de Cibeles Madrid"),
    ("hospital", "centro de salud Madrid"),
    ("bank", "Banco de España Madrid edificio"),
    ("tienda", "Calle Preciados Madrid"),
    ("cordoba", "Mezquita Córdoba interior"),
    ("cibeles", "Fuente de Cibeles Madrid"),
    ("retiro", "Parque del Retiro estanque Madrid"),
    ("segovia", "Acueducto de Segovia"),
]
ALLOWED = ("cc0", "cc by", "cc-by", "public domain", "pd")


def get(params):
    params = dict(params, format="json", formatversion="2")
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.load(r)


def search(q, extra):
    d = get({"action": "query", "list": "search", "srnamespace": 6, "srlimit": 15,
             "srsearch": q + " filemime:image/jpeg filew:>1500 " + extra})
    return [x["title"] for x in d.get("query", {}).get("search", [])]


def info(titles):
    d = get({"action": "query", "titles": "|".join(titles), "prop": "imageinfo",
             "iiprop": "url|size|extmetadata", "iiurlwidth": 1280})
    out = []
    for p in d.get("query", {}).get("pages", []):
        ii = (p.get("imageinfo") or [None])[0]
        if not ii:
            continue
        md = ii.get("extmetadata", {})
        lic = md.get("LicenseShortName", {}).get("value", "")
        artist = md.get("Artist", {}).get("value", "")
        out.append({"title": p["title"], "w": ii.get("width", 0), "h": ii.get("height", 0),
                    "thumb": ii.get("thumburl"), "page": ii.get("descriptionurl"),
                    "license": lic, "licenseUrl": md.get("LicenseUrl", {}).get("value", ""),
                    "artist": strip_html(artist)})
    order = {t: i for i, t in enumerate(titles)}
    out.sort(key=lambda x: order.get(x["title"], 99))
    return out


def strip_html(s):
    import re
    s = re.sub(r"<[^>]+>", "", s or "")
    return " ".join(s.split())[:120]


def ok(c):
    l = c["license"].lower()
    return c["thumb"] and c["w"] > c["h"] * 1.2 and any(l.startswith(a) for a in ALLOWED) and "nc" not in l.split()


def download(url, path):
    from PIL import Image
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    im = Image.open(io.BytesIO(data)).convert("RGB")
    if im.width > 1280:
        im = im.resize((1280, round(im.height * 1280 / im.width)), Image.LANCZOS)
    im.save(path, "JPEG", quality=80, optimize=True, progressive=True)
    return im.size


def main():
    os.makedirs(OUT, exist_ok=True)
    credits = {}
    for key, q in SUBJECTS:
        picked = []
        for extra in ("incategory:Quality_images", ""):
            try:
                titles = search(q, extra)
                time.sleep(0.5)
                if not titles:
                    continue
                for c in info(titles[:10]):
                    if ok(c) and c["title"] not in [p["title"] for p in picked]:
                        picked.append(c)
                        break
            except Exception as e:  # noqa
                print("search failed", key, extra, e)
            time.sleep(0.5)
        for i, c in enumerate(picked[:2]):
            fn = "%s-%d.jpg" % (key, i + 1)
            try:
                size = download(c["thumb"], os.path.join(OUT, fn))
                c["file"] = fn
                c["size"] = size
                credits.setdefault(key, []).append(c)
                print("OK", fn, size, c["license"], c["title"])
            except Exception as e:  # noqa
                print("download failed", key, c["title"], e)
            time.sleep(1)
        if key not in credits:
            print("NONE for", key)
    with open(os.path.join(OUT, "credits.json"), "w", encoding="utf-8") as f:
        json.dump(credits, f, ensure_ascii=False, indent=1)
    sheet(credits)


def sheet(credits):
    from PIL import Image, ImageDraw
    items = [(c["file"]) for k in credits for c in credits[k]]
    W, H, cols = 320, 200, 6
    rows = (len(items) + cols - 1) // cols
    s = Image.new("RGB", (W * cols, (H + 16) * max(rows, 1)), "white")
    d = ImageDraw.Draw(s)
    for i, fn in enumerate(items):
        im = Image.open(os.path.join(OUT, fn))
        im.thumbnail((W - 4, H))
        x, y = (i % cols) * W, (i // cols) * (H + 16)
        s.paste(im, (x, y))
        d.text((x + 3, y + H + 2), fn, fill="black")
    s.save(os.path.join(OUT, "_sheet.jpg"), quality=70)


if __name__ == "__main__":
    main()
