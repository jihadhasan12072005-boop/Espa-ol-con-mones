# Test report — Español con Mones

Date: 5 November 2026. Environment: Linux cloud container, Node 22, Chromium (Playwright).
**No real Safari or WebKit browser was available in this environment** (see “Not performed”).

## Automated checks run on every push (GitHub Actions: `npm run check`) — PASSED
| Check | Result |
|---|---|
| Every app script parses as strict **ES5** (acorn, ecmaVersion 5) | ✅ all files |
| No arrow functions, let/const, template literals, Promise, fetch, `includes`, regex look-behind, optional chaining, `Object.values` | ✅ |
| CSS free of variables, flex `gap`, `inset`, `clamp`, `aspect-ratio`, `:is/:where` | ✅ |
| All scripts, photos, thumbnails, fallbacks, fonts, icons and 404 page exist | ✅ |
| Conjugation unit tests, run twice: through the verified verb dataset **and** through the rule engine alone | ✅ 153/153 + 153/153 |
| **Verb laboratory:** the engine reproduces every form of every tense of the source dataset (637 entries × 18 tenses + gerunds); the only differences are 62 reviewed corrections listed in `scripts/build-verbs.js` | ✅ |
| Verb catalogue: 732 verbs, each with Arabic meaning, level, categories; **every example sentence's marked verb form is checked against the tables** | ✅ 732/732 |
| Tense guide: 20 tenses, each with explanation, formation, uses, signal words, mistakes and ≥10 examples; every example form checked against that tense | ✅ 221 examples |
| Comparison lab: 9 lessons, each with table, ≥6 examples and a quiz with explanations | ✅ |
| Spot checks against hand-verified forms (tuve, fuésemos, habrán hecho, dijere, levantémonos, vestíos, idos, oíd, quepo, rio, huis, guie, contén…) | ✅ 32/32 |
| 44 grammar lessons: 13-part structure; ≥3 uses, ≥3 steps, ≥15 examples, ≥3 mistakes, comparison, ≥6 practice items, Spanish definition + ≥3 terms, regular/irregular note, **5-question final assessment** with explanations | ✅ |
| 300 exam models (250 language: levels 24 q, mixed 22 q incl. reading + listening; 50 CCSE: 25 q, 10/3/3/3/6): valid answers, unique options, explanations, **no two models with the same question set** | ✅ 300/300 |
| Culture academy: 32 lessons across the 5 CCSE areas; 430 original practice questions, every lesson link valid | ✅ |
| DELE A2: 2 complete simulations (25 reading + 25 listening, 2 writing, 4 oral each) | ✅ |
| Adventures: every step has a correct path, branches valid | ✅ 11 adventures |

## Browser end-to-end tests (`node tests/e2e.js`, Chromium) — 30/30 PASSED
- All **91 routes** render with **no JavaScript errors** and **no blank screens** (incl. every verb-lab, citizenship and culture page, and an unknown route).
- Refreshing a nested route keeps the page.
- Full language exam (24 questions): answer, submit, report, history saved, wrong answers saved to the mistake notebook.
- Progress **persists after reload** and after **closing and reopening**; **backup export → import** restores progress; old backup format accepted; invalid file rejected.
- Lesson practice: **no correct answer highlighted before answering**; finishing practice marks the lesson complete.
- Grammar lesson shows **13 numbered parts**; the final assessment result is saved; part 12 lists the learner's own wrong answers with the correct answer and explanation.
- CCSE simulation: 25 questions, 45:00 timer.
- Verb lab: search in **Arabic** finds the Spanish verb; favourite **survives reload**; verb page shows the verified table (conozco…); a wrong typed answer is stored and replayed in the adaptive mode; old `#/lab/…` links redirect.
- **Old-browser simulation:** app works with `Promise`, `fetch`, `Array.includes/find`, `Object.assign/values`, `NodeList.forEach` and the speech APIs removed.
- Without speech recognition: no dead microphone button; typing box shown and analysed.
- Storage blocked (private mode): app runs and warns. Corrupted save: recovered from the last-good snapshot.
- Phone width (390 px): no horizontal scrolling on 13 key pages, including the verb lab and a B1 lesson.

## Deployment — VERIFIED BY GITHUB
- GitHub Actions run #5: Quality checks ✅ → Deploy ✅ — “Reported success!”, URL `https://jihadhasan12072005-boop.github.io/Espa-ol-con-mones/`.
- A “Verify the live site” job was added after this report: it fetches the live page, assets and a nested path from GitHub’s runner on every deploy. Check its result in the Actions tab.

## Not performed / limitations (honest)
- **Real Safari on an old Mac**: not available here. Mitigations: ES5-only code verified by parser, legacy-API simulation, conservative CSS. **Please open the link on the MacBook and tell me what you see**, including the macOS/Safari version (Apple menu → About This Mac; Safari → About Safari).
- **Real microphone / Apple Dictation**: cannot be tested in a headless container. The code uses feature detection, explicit start/stop, and auto-restart after pauses. Safari needs version 14.1+ and Dictation enabled. Older Safari shows the typing box instead.
- **Spanish TTS voice quality**: depends on the voices installed on the Mac.
- **Loading the live site from this sandbox**: blocked by the sandbox proxy, so it is verified through GitHub’s own deploy and verify jobs instead.
- **Official CCSE manual — verified:** a GitHub Actions job downloaded *Manual de preparación de la prueba CCSE 2026* (Instituto Cervantes, 102 pages) and counted **315 official questions** (Tarea 1: 134, 2: 36, 3: 25, 4: 36, 5: 84). The official question texts are **not reproduced** in the app (copyright); the app links to the PDF and offers a tracker by question number.
- **Exam format (CCSE 25 questions / 45 min / pass 15; DELE A2 timings)**: the manual's text does not state these and the Cervantes web pages returned only a script shell to the automated job, so these figures come from the published exam description as known, **not re-verified in this session**. Please confirm on examenes.cervantes.es.
- **Verb conjugations**: the independent npm conjugator I wanted to use as a third source could not be installed in this environment (third-party code blocked). Validation therefore relies on the Jehle dataset, the app's own rule engine (153 hand-checked tests), consistency rules valid for every verb, and manual review of every disagreement.
- **Verb levels (A1–B2) and “useful for DELE A2” tags** are the app's teaching estimate, not an official list.
