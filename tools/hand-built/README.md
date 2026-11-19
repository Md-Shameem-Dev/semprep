# Hand-built guides

FLA (21CSC301T) and Discrete Mathematics (21MAB302T) were built by reading the 9 past papers each
from THE HELPER, instead of calling Gemini.

- `*-data.mjs`: every Part B / Part C question, tagged with topics (the counts come from the app's own `tally()`).
- `*-content.mjs`: the written guide (patterns, unit notes, expected questions, formulas, revision lists, tips).
- `build-guide.mjs`: counts, builds and checks the guide; add `--save` to store it in the running server.

    node tools/hand-built/build-guide.mjs fla --save
    node tools/hand-built/build-guide.mjs dm --save

To add a new paper, append its questions to the subject's `PAPERS` list and re-run.
