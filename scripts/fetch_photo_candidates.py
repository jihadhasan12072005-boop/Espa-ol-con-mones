#!/usr/bin/env python3
"""Fetch candidate photos of Spain from Wikimedia Commons (run in GitHub Actions).

For each subject it searches Commons, keeps only freely licensed (CC0 / PD /
CC BY / CC BY-SA) landscape JPEGs, downloads up to two 1280px thumbnails,
re-encodes them, and writes credits + a contact sheet so a human (or Claude)
can pick the best one. Chosen photos are then copied into site/img/photos.
"""
import json, os, sys, time, urllib.parse, urllib.request, urllib.error, io

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
    ("granada", "Alhambra Granada vista"),
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
    ("ronda", "Puente Nuevo Ronda"),
    ("cadiz", "Cádiz catedral playa"),
    ("pueblo", "pueblo blanco Andalucía"),
    ("tapas", "tapas bar Spain"),
    ("cibeles", "Fuente de Cibeles Madrid"),
    ("retiro", "Parque del Retiro estanque Madrid"),
    ("segovia", "Acueducto de Segovia"),
]
SUBJECTS2 = [
    ("senado", "Palacio del Senado Madrid fachada", "jpeg"),
    ("supremo", "Palacio de las Salesas Reales Tribunal Supremo Madrid", "jpeg"),
    ("moncloa", "Palacio de la Moncloa", "jpeg"),
    ("prado", "Museo del Prado fachada Velázquez", "jpeg"),
    ("teide", "Teide Tenerife", "jpeg"),
    ("donana", "Parque Nacional de Doñana", "jpeg"),
    ("altamira", "Cueva de Altamira bisonte", "jpeg"),
    ("escorial", "Monasterio de El Escorial", "jpeg"),
    ("fallas", "Fallas Valencia falla", "jpeg"),
    ("flamenco", "flamenco baile Sevilla", "jpeg"),
    ("santiago", "Catedral de Santiago de Compostela Obradoiro", "jpeg"),
    ("merida", "Teatro romano de Mérida", "jpeg"),
    ("sagrada", "Sagrada Familia exterior fachada", "jpeg"),
    ("mapa_ccaa", "Autonomous communities of Spain map", "drawing"),
    ("mapa_prov", "Provinces of Spain map", "drawing"),
    ("mapa_rios", "Rivers of Spain map", "drawing"),
    ("bandera", "Flag of Spain", "drawing"),
    ("escudo", "Coat of Arms of Spain", "drawing"),
]
ALLOWED = ("cc0", "cc by", "cc-by", "public domain", "pd")


def get(params):
    params = dict(params, format="json", formatversion="2", maxlag="5")
    url = API + "?" + urllib.parse.urlencode(params)
    for attempt in range(5):
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=40) as r:
                time.sleep(3)
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 4:
                wait = 20 * (attempt + 1)
                print("429 — waiting", wait, "s")
                time.sleep(wait)
                continue
            raise


def search(q, extra, kind="jpeg"):
    flt = " filemime:image/jpeg filew:>1500 " if kind == "jpeg" else " filetype:drawing "
    d = get({"action": "query", "list": "search", "srnamespace": 6, "srlimit": 15,
             "srsearch": q + flt + extra})
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


def ok(c, kind="jpeg"):
    l = c["license"].lower()
    shape = c["w"] > c["h"] * 1.2 if kind == "jpeg" else True
    return c["thumb"] and shape and any(l.startswith(a) for a in ALLOWED) and "nc" not in l.split()


def download(url, path):
    from PIL import Image
    data = None
    for attempt in range(4):
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            break
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 3:
                time.sleep(30 * (attempt + 1)); continue
            raise
    im = Image.open(io.BytesIO(data))
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA"); bg = Image.new("RGB", im.size, "white"); bg.paste(im, mask=im.split()[-1]); im = bg
    else:
        im = im.convert("RGB")
    if im.width > 1280:
        im = im.resize((1280, round(im.height * 1280 / im.width)), Image.LANCZOS)
    im.save(path, "JPEG", quality=80, optimize=True, progressive=True)
    return im.size


def main():
    os.makedirs(OUT, exist_ok=True)
    cpath = os.path.join(OUT, "credits.json")
    credits = json.load(open(cpath, encoding="utf-8")) if os.path.exists(cpath) else {}
    subjects = [(k, q, "jpeg") for k, q in SUBJECTS] if os.environ.get("BATCH") != "2" else SUBJECTS2
    for key, q, kind in subjects:
        if key in credits:
            continue
        picked = []
        for extra in (("incategory:Quality_images", "") if kind == "jpeg" else ("",)):
            try:
                titles = search(q, extra, kind)
                time.sleep(0.5)
                if not titles:
                    continue
                for c in info(titles[:10]):
                    if ok(c, kind) and c["title"] not in [p["title"] for p in picked]:
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
            time.sleep(4)
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
