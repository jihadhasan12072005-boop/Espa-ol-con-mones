# Test report — Español con Mones

Date: 5 November 2026. Environment: Linux cloud container, Node 22, Chromium (Playwright).
**No real Safari or WebKit browser was available in this environment** (see “Not performed”).

## Automated checks run on every push (GitHub Actions: `npm run check`) — PASSED
| Check | Result |
|---|---|
| Every app script parses as strict **ES5** (acorn, ecmaVersion 5) | ✅ all 28 files |
| No arrow functions, let/const, template literals, Promise, fetch, `includes`, regex look-behind, optional chaining, `Object.values` | ✅ |
| CSS free of variables, flex `gap`, `inset`, `clamp`, `aspect-ratio`, `:is/:where` | ✅ |
| All scripts, photos, thumbnails, fallbacks, fonts, icons and 404 page exist | ✅ |
| Conjugation engine unit tests (regular, stem-changing, spelling changes, irregulars, subjunctive, imperative, compound tenses) | ✅ 153/153 |
| 44 grammar lessons: each has ≥3 uses, ≥3 construction steps, ≥15 translated examples, ≥3 common mistakes, a comparison and ≥6 practice items | ✅ |
| 300 exam models: correct length (20 / CCSE 25), valid answers, unique options, explanation on every item, **no two models with the same question set**, CCSE distribution 10/3/3/3/6 | ✅ 300/300 |
| DELE A2: 2 complete simulations with exactly 25 reading + 25 listening items, 2 writing and 4 oral tasks each | ✅ |
| Adventures: every step has a correct path, branches valid | ✅ 11 adventures |

## Browser end-to-end tests (`node tests/e2e.js`, Chromium) — 21/21 PASSED
- All 52 routes render with **no JavaScript errors** and **no blank screens** (incl. unknown route → friendly page).
- Refreshing a nested route keeps the page.
- Full exam: answer, submit, report, history saved, wrong answers saved to the mistake notebook.
- Progress **persists after reload** and after **closing and reopening** (new tab).
- **Backup export → import** into a fresh profile restores exams and mistakes; survives reload.
- Old-app backup format (`jihad_v3` / `{progress}`) accepted; invalid file rejected safely.
- Lesson practice: **no correct answer highlighted before answering**; finishing practice marks the lesson complete.
- CCSE simulation: 25 questions, 45:00 timer.
- **Old-browser simulation:** app works with `Promise`, `fetch`, `Array.includes/find/findIndex`, `Object.assign/values/entries`, `String.includes/startsWith`, `NodeList.forEach`, speech synthesis and speech recognition all removed.
- Without speech recognition: **no dead microphone button**; explanation and typing box shown; typed answer analysed (“yo es” → “yo soy” with Arabic explanation).
- Storage blocked (private mode): app still runs and shows a “cannot save” warning.
- Corrupted save data: recovered automatically from the last-good snapshot.
- Phone width (390 px): no horizontal scrolling on 7 key pages.

## Deployment — VERIFIED BY GITHUB
- GitHub Actions run #5: Quality checks ✅ → Deploy ✅ — “Reported success!”, URL `https://jihadhasan12072005-boop.github.io/Espa-ol-con-mones/`.
- A “Verify the live site” job was added after this report: it fetches the live page, assets and a nested path from GitHub’s runner on every deploy. Check its result in the Actions tab.

## Not performed / limitations (honest)
- **Real Safari on an old Mac**: not available here. Mitigations: ES5-only code verified by parser, legacy-API simulation, conservative CSS. **Please open the link on the MacBook and tell me what you see**, including the macOS/Safari version (Apple menu → About This Mac; Safari → About Safari).
- **Real microphone / Apple Dictation**: cannot be tested in a headless container. The code uses feature detection, explicit start/stop, and auto-restart after pauses. Safari needs version 14.1+ and Dictation enabled. Older Safari shows the typing box instead.
- **Spanish TTS voice quality**: depends on the voices installed on the Mac.
- **Loading the live site from this sandbox**: blocked by the sandbox proxy, so it is verified through GitHub’s own deploy and verify jobs instead.
- **Official exam specifications** (DELE A2 timings/scoring, CCSE format/pass mark): the official Cervantes websites were unreachable from this environment. The app uses the published structure as known (DELE A2: 60/35/45/15+15 min, two groups of 50, ≥30 each; CCSE: 25 questions, 45 min, pass 15) and tells the learner to confirm on examenes.cervantes.es.
