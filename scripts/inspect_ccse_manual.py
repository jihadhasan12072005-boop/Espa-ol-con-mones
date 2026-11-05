#!/usr/bin/env python3
"""Inspect the official CCSE preparation manual (run in GitHub Actions, which has
internet access). It does NOT republish the manual: it prints only
  * the PDF links found and the manual's year/title lines,
  * exam-format sentences (number of questions, time, pass mark),
  * the number of questions per tarea,
  * for each official question, its number and a few KEY FACT TERMS
    (proper nouns / numbers) and whether those facts are covered by the app's
    own lessons and original questions.
Facts are not copyrightable; the question wording is not printed.
"""
import io, json, re, sys, urllib.request, urllib.parse, subprocess, os

UA = "Mozilla/5.0 (compatible; EspanolConMonesBuild/1.0; educational)"
PAGES = [
    "https://examenes.cervantes.es/es/ccse",
    "https://examenes.cervantes.es/es/ccse/preparar-prueba",
    "https://examenes.cervantes.es/es/ccse/que-es",
    "https://examenes.cervantes.es/es/ccse/examen",
    "https://examenes.cervantes.es/es/nacionalidad",
    "https://examenes.cervantes.es/",
]


def get(url, binary=False):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
        return data if binary else data.decode("utf-8", "replace")


def find_pdfs():
    found = {}
    for p in PAGES:
        try:
            html = get(p)
        except Exception as e:  # noqa
            print("page failed", p, e)
            continue
        print("page ok", p, len(html), "bytes")
        for href in re.findall(r'href="([^"]+)"', html):
            full = urllib.parse.urljoin(p, href)
            low = full.lower()
            if low.endswith(".pdf") or ".pdf?" in low:
                found[full] = p
            elif "ccse" in low and ("manual" in low or "prepar" in low) and full not in PAGES:
                print("  related page:", full)
    return found


def corpus_text():
    txt = []
    for f in ["site/js/data/ccse.js", "site/js/data/culture.js"]:
        if os.path.exists(f):
            txt.append(open(f, encoding="utf-8").read())
    return "\n".join(txt).lower()


STOP = set("El La Los Las Un Una En De Del Al Y O A Qué Cuál Cuáles Quién Cómo Dónde Cuándo Cuántos Cuántas Es Son Se Según España Español Española Españoles Verdadero Falso".split())


def main():
    pdfs = find_pdfs()
    print("\nPDF links found:")
    for u in pdfs:
        print(" ", u)
    cand = [u for u in pdfs if "ccse" in u.lower() or "manual" in u.lower()]
    if not cand:
        print("No CCSE manual PDF link found automatically.")
        return
    from pypdf import PdfReader
    corpus = corpus_text()
    for url in cand[:4]:
        print("\n==== ", url)
        try:
            data = get(url, binary=True)
        except Exception as e:  # noqa
            print("download failed", e)
            continue
        reader = PdfReader(io.BytesIO(data))
        pages = [p.extract_text() or "" for p in reader.pages]
        text = "\n".join(pages)
        print("pages:", len(pages), " chars:", len(text))
        head = [l.strip() for l in pages[0].splitlines() if l.strip()][:12] if pages else []
        print("title lines:", " | ".join(head))
        years = sorted(set(re.findall(r"\b20[2-3][0-9]\b", text[:6000])))
        print("years mentioned near start:", years)
        for pat in [r"[^.\n]*\b25 preguntas[^.\n]*", r"[^.\n]*\b45 minutos[^.\n]*", r"[^.\n]*\b15 respuestas[^.\n]*", r"[^.\n]*preguntas de respuesta[^.\n]*", r"[^.\n]*verdadero o falso[^.\n]*"]:
            for m in re.findall(pat, text, flags=re.I)[:3]:
                print("format:", " ".join(m.split())[:220])
        # questions: lines like "1001 ¿..." or "1. ..." ; detect numbered question ids
        ids = re.findall(r"(?m)^\s*(\d{4})\s", text)
        print("4-digit question ids found:", len(ids), "unique:", len(set(ids)))
        by_t = {}
        for i in set(ids):
            by_t[i[0]] = by_t.get(i[0], 0) + 1
        print("questions per tarea (by first digit):", json.dumps(dict(sorted(by_t.items()))))
        # split into questions and extract key fact terms
        blocks = re.split(r"(?m)^\s*(\d{4})\s", text)
        rows = []
        for k in range(1, len(blocks) - 1, 2):
            qid, body = blocks[k], blocks[k + 1][:700]
            terms = []
            for w in re.findall(r"\b[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+(?:\s+(?:de|del|la|los|las|y)?\s*[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+)*|\b\d{1,4}\b", body):
                w = w.strip()
                if w in STOP or len(w) < 2:
                    continue
                if w not in terms:
                    terms.append(w)
            terms = terms[:6]
            missing = [t for t in terms if t.lower() not in corpus]
            rows.append((qid, terms, missing))
        print("\nKEY-FACT COVERAGE (question id: key terms | not yet in app content)")
        for qid, terms, missing in sorted(set((r[0], tuple(r[1]), tuple(r[2])) for r in rows)):
            print("%s: %s | MISSING: %s" % (qid, ", ".join(terms), ", ".join(missing) if missing else "-"))


if __name__ == "__main__":
    main()
