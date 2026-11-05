# Verb data (Laboratorio de verbos)

* `jehle_verb_database.csv` — Fred Jehle's *Conjugated Spanish Verb Database* (637 entries, all moods and tenses),
  compiled by ghidinelli: https://github.com/ghidinelli/fred-jehle-spanish-verbs
  **License: Creative Commons Attribution-NonCommercial-ShareAlike 3.0.** The derived file
  `site/js/data/verbs-db.js` is shared under the same license. This app is a private, non-commercial family project.
* `jehle.js` — reads the CSV and converts written accents to the current RAE spelling (2010): a written
  monosyllable takes no accent except diacritic `dé`/`sé` (frio, crie, guie, hui, huis, riais…).
* `validate.js` — rules that hold for every Spanish verb (compound = haber + participle; -ra/-re subjunctive from the
  3rd plural preterite; negative imperative = no + subjunctive; …). They found 62 errors in the source, each reviewed
  and listed in `scripts/build-verbs.js` (`REVIEWED_SOURCE_ERRORS`).
* `extra.js` — 160 verbs missing from the source, added with documented methods (regular / same RAE model / explicit).
* `node scripts/build-verbs.js` rebuilds `site/js/data/verbs-db.js` and fails if the app's engine does not reproduce
  every reviewed form. `scripts/check.js` (run in CI on every deploy) repeats that proof, checks every example sentence
  against the tables, and runs 153 hand-checked unit tests through both engines.
