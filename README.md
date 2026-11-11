# Español con Mones — أكاديمية الإسبانية لمؤنس

A Spanish academy for an Arabic-speaking adult preparing for Spanish nationality:
**A1→B2 course · DELE A2 · CCSE · 300 practice exams · speaking studio · adventures**.
The interface is in Arabic (RTL), and the learning content is in Spanish from Spain.

**Live app:** https://jihadhasan12072005-boop.github.io/Espa-ol-con-mones/

---

## 🇸🇾 بالعربية — ما تحتاجه فقط

### رابط التطبيق
**https://jihadhasan12072005-boop.github.io/Espa-ol-con-mones/**

### على MacBook والدك (مرة واحدة فقط)
1. افتح **Safari** واكتب الرابط أعلاه.
2. اضغط **⌘D** (أو قائمة «الإشارات» ← «إضافة إشارة») واحفظه في **«المفضلة»** باسم «إسبانية مؤنس».
3. (اختياري) اسحب الرابط من شريط العنوان إلى **سطح المكتب** فيصبح أيقونة.
4. في Safari الحديث (macOS Sonoma فأحدث) يمكن أيضًا: قائمة «ملف» ← **«إضافة إلى Dock»**.
5. لأفضل صوت إسباني: إعدادات النظام ← إمكانية الوصول ← المحتوى المنطوق ← صوت النظام ← إدارة الأصوات ← **الإسبانية (إسبانيا)** مثل «Mónica».

لا يحتاج أي تثبيت أو برامج أو Terminal. التحديثات تظهر تلقائيًا في الرابط نفسه.

### الحفظ والنسخ الاحتياطي (مهم)
- التقدّم يُحفظ **تلقائيًا** في Safari على هذا الجهاز (يظهر «آخر حفظ» أعلى الصفحة).
- **ليس** حفظًا سحابيًا، ولا ينتقل وحده إلى جهاز آخر.
- مسح بيانات Safari أو التصفح الخاص قد يضيّع التقدّم، وبعض إصدارات Safari تحذف بيانات المواقع غير المستخدمة لأيام.
- **الحل:** صفحة «تقدّمي» ← **«تنزيل نسخة احتياطية»** مرة أسبوعيًا، واحفظ الملف في «المستندات». الاستعادة من الصفحة نفسها.
- التطبيق يحتفظ أيضًا بنسخة استرداد داخلية تلقائية إذا تلف الحفظ.

### النشر من iPhone (لك يا جهاد)
**الوضع الحالي:** التطبيق **منشور ويعمل**. كل تعديل يُدفع إلى الفرع الافتراضي يُختبر ويُنشر تلقائيًا عبر GitHub Actions.

للتحقق من نجاح أي نشر:
1. افتح github.com في Safari على iPhone ← المستودع **Espa-ol-con-mones** ← تبويب **Actions**.
2. افتح آخر تشغيل باسم «Build and deploy to GitHub Pages».
3. يجب أن تكون المهام الثلاث خضراء ✓: **Quality checks** ← **Deploy** ← **Verify the live site**.
4. افتح الرابط وحدّث الصفحة.

إذا كانت هناك علامة ✗ حمراء: افتح المهمة وانسخ آخر سطور الخطأ وأرسلها لي.

**ملاحظة عن الفرع:** الفرع الافتراضي حاليًا اسمه `claude/espanol-con-mones-final-7gks9c` لأنه أول فرع رُفع إلى المستودع الفارغ. هذا يعمل تمامًا. إذا أردت اسم `main` (اختياري):
Settings ← General ← Default branch ← أيقونة القلم بجانب الاسم ← اكتب `main` ← Rename.
بعدها يعمل النشر من `main` تلقائيًا (سير العمل يكتشف الفرع الافتراضي بنفسه، سواء كان main أو master أو غيره). إذا ظهر خطأ «Branch is not allowed to deploy» بعد إعادة التسمية: Settings ← Environments ← github-pages ← اسمح بالفرع `main`.

---

## English — technical notes

### Project layout
```
site/                     ← the deployed static app (no build step needed)
  index.html, 404.html    ← hash routing (#/learn/A2/a2-01); 404.html redirects stray paths
  css/app.css             ← design system (navy/ivory/emerald/gold), Safari 9+ safe CSS
  fonts/                  ← self-hosted IBM Plex Sans Arabic + Playfair Display (OFL)
  img/photos[/thumb]      ← 25 Wikimedia Commons photos (credited in-app), optimised
  img/fallback            ← offline fallback images layered under each photo
  js/core/                ← util+polyfills, store, speech (TTS/STT), conjugator, UI/quiz, checker, app/router
  js/data/                ← all learning content (grammar A1–B2 + 13-part extras, culture academy, CCSE bank, DELE, vocab, skills,
                             adventures, speaking, verb dataset verbs-db.js (generated), verb catalogue, tense guide, comparisons)
  js/views/               ← one file per section
scripts/check.js          ← quality gate run by CI (ES5 parse, API/CSS scan, content + 300-model + verb-table validation)
scripts/build-verbs.js    ← rebuilds site/js/data/verbs-db.js from scripts/verbs/ (see scripts/verbs/README.md)
tests/                    ← conjugation unit tests, Playwright e2e (local), screenshot helper
.github/workflows/pages.yml  ← check → deploy (default branch) → verify live URL
```

### Compatibility strategy (older MacBook / Safari)
- All JavaScript is hand-written **ES5**. CI parses every file with `acorn` at `ecmaVersion: 5` and rejects arrow functions, `let/const`, template literals, `Promise`, `fetch`, `includes`, regex look-behind, optional chaining, etc.
- Minimal polyfills (`Array.find/findIndex`, `Object.assign`, `Element.closest/matches`).
- CSS: no custom properties, no flex `gap`, no `inset`, `clamp()`, `aspect-ratio`, `:is()`; flexbox with margins and `-webkit-` prefixes.
- Feature detection for speech synthesis, speech recognition, `localStorage`, `Blob`/`download`, `FileReader`. Each one has a working fallback.
- Hash routing works on GitHub Pages, survives refresh, and needs no server configuration.

### Storage contract
- Keys `ecm.v1` (state) and `ecm.v1.prev` (last-good snapshot). **Never rename them.** For schema changes, add a step in `MIGRATIONS` in `js/core/store.js`.
- Export/import JSON backups. Old single-file app backups (`jihad_v3` / `{progress:…}`) are accepted and kept under “legacy”.

### Commands (developer only — not needed by Mones)
```
python3 scripts/build-single.py   # rebuild site/Espanol_con_Mones.html: the whole app in ONE file (like Deutsch mit Dina)
npm ci && npm run check      # quality gate (same as CI)
node tests/e2e.js            # browser tests (needs Playwright + Chromium)
node tests/shot.js out.png "/ccse" 1440 900   # screenshot a route
```

### Content honesty
- Verb conjugations: Fred Jehle's Conjugated Spanish Verb Database (**CC BY-NC-SA 3.0**), normalised to the 2010 RAE spelling, 62 source errors corrected after review, plus 160 documented additions. The derived data keeps the same license.
- CCSE questions (430, incl. lesson questions) and DELE A2 simulations are **original practice material** on the official subject areas and exam structure. They are not official exam items.
- Writing/speaking feedback is rule-based (catches specific frequent errors). It is **not** equivalent to official examiner grading.
- Listening uses the device’s text-to-speech voice, not studio recordings.
