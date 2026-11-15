#!/usr/bin/env python3
"""Check the official DELE exam format (run in GitHub Actions, which has internet access).
Downloads the Instituto Cervantes exam guides and prints only the passages that state the exam
structure (duration, number of tasks and items, scoring), so the app's simulations follow the
real format. The guides themselves are not stored or republished."""
import io, re, sys, urllib.request

UA = "Mozilla/5.0 (compatible; EspanolConMonesBuild/1.0; educational)"
CANDIDATES = {
    "A1": [
        "https://agenda.cervantes.es/sites/default/files/DELE_A1_v2020_Guia-de-examen.pdf",
        "https://examenes.cervantes.es/sites/default/files/DELE_A1_v2020_Guia-de-examen.pdf",
        "https://agenda.cervantes.es/sites/default/files/DELE_A1_v2020_Gu%C3%ADa%20de%20examen.pdf",
    ],
    "A2": [
        "https://agenda.cervantes.es/sites/default/files/DELE_A2_v2020_Guia-de-examen.pdf",
        "https://examenes.cervantes.es/sites/default/files/DELE_A2_v2020_Guia-de-examen.pdf",
        "https://agenda.cervantes.es/sites/default/files/DELE_A2_v2020_Gu%C3%ADa%20de%20examen.pdf",
        "https://examenes.cervantes.es/sites/default/files/dele_a2_guia_de_examen_2020.pdf",
    ],
    "ALL": ["https://ucm.es/data/cont/media/www/pag-93416/DELEEstructura2020.pdf"],
}
KEY = re.compile(r"minutos|ítems|items|tareas?\b|puntuaci|apto|grupo|palabras|preparaci|veces|opciones|duraci", re.I)


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as r:
        return r.read()


def main():
    from pypdf import PdfReader
    for level, urls in CANDIDATES.items():
        done = False
        for url in urls:
            try:
                data = get(url)
            except Exception as e:  # noqa
                print("FAILED", level, url, repr(e)[:120]); continue
            if not data.startswith(b"%PDF"):
                print("NOT A PDF", level, url, len(data), "bytes"); continue
            pages = [(p.extract_text() or "") for p in PdfReader(io.BytesIO(data)).pages]
            print("\n==== %s  %s  (%d pages, %d bytes)" % (level, url, len(pages), len(data)))
            budget = 14000
            for i, t in enumerate(pages):
                lines = [re.sub(r"\s+", " ", l).strip() for l in t.split("\n")]
                hits = [l for l in lines if l and KEY.search(l)]
                if len(hits) < 3:
                    continue
                out = " | ".join(hits)
                print("-- p%d: %s" % (i + 1, out[: min(budget, 2600)]))
                budget -= min(len(out), 2600)
                if budget <= 0:
                    print("(budget reached)"); break
            done = True
            break
        if not done:
            print("NO GUIDE FOUND for", level)


if __name__ == "__main__":
    main()
