/*
 * Guide generator shared by the browser (script tag) and the API route
 * (side-effect import). No imports/exports so it runs in both; it installs
 * itself on globalThis.SEMPREP_GEN.
 *
 * Flow: buildRequest(input) -> callGemini(key, body) -> normalize(raw, input)
 */
(function () {
  "use strict";

  // Tried in order; on quota (429), missing model (404) or overload (5xx)
  // the next one is used. Free tier quota is per model, so this also
  // stretches the daily allowance.
  const MODELS = ["gemini-3.6-flash", "gemini-2.5-flash"];
  const ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/";
  const TIMEOUT_MS = 10 * 60 * 1000;
  // Gemini rejects inline requests over ~20 MB; stay under it and drop the
  // least useful files (references after papers) if a selection is too big.
  const INLINE_BUDGET = 17 * 1024 * 1024;

  const S = (description) => ({ type: "STRING", description });
  const I = (description) => ({ type: "INTEGER", description });
  const A = (items, description) => ({ type: "ARRAY", items, description });
  const O = (properties, required, description) => ({ type: "OBJECT", properties, required: required || Object.keys(properties), propertyOrdering: Object.keys(properties), description });

  const SCHEMA = O({
    summary: S("Two sentences on what this guide covers and how it was built."),
    examPattern: O({
      totalMarks: I("Total marks of the end-semester paper."),
      parts: A(O({ part: S("e.g. Part A"), marks: S("e.g. 20 × 1 = 20"), text: S("What this part contains and how to approach it.") }))
    }),
    callouts: A(O({ title: S("Short heading"), text: S("One or two sentences.") }), "Exactly 2: the highest-weight units, and the topics that must not be skipped."),
    top: A(O({
      question: S("A specific exam question or topic, phrased like the paper: 'Topic — what is asked'."),
      unit: I("Unit number 1-5."),
      marks: S("Typical marks, e.g. 8 or 8–15 or MCQ + 8."),
      importance: I("1-5, how likely and how valuable."),
      topicIds: A(S("Topic id such as T3"), "Ids from the COUNTED TOPIC TABLE that this item covers. Empty if no table was given."),
      appearedIn: A(S("Paper label"), "Labels of provided papers where this actually appears. Empty if no papers were provided or a counted table was given."),
      note: S("One short line: where it appeared, or why it matters.")
    }), "15 to 20 items, most important first."),
    units: A(O({
      n: I("Unit number"),
      title: S("Unit title"),
      weight: S("One of: Very High, High, Medium"),
      topics: A(O({ topic: S("Topic — key points to know"), tag: S("Short tag such as 'Every paper', '3/5', 'MCQ', or empty") }, ["topic", "tag"]), "6 to 9 topics.")
    })),
    shortAnswer: O({
      title: S("Section title for the medium-length questions, e.g. 'Most Repeated 8-Mark Questions (Part B)'."),
      strategy: S("How this part is structured and how to choose."),
      groups: A(O({ label: S("e.g. Q21"), unit: I("Unit number"), items: A(S("Question"), "4 or 5 questions.") }), "One group per unit."),
      tip: S("One answer-writing tip.")
    }),
    longAnswer: O({
      title: S("Section title for the long questions, e.g. 'Most Repeated 15-Mark Questions (Part C)'."),
      note: S("Pattern of the long-answer part."),
      items: A(O({ question: S("Question"), level: S("One of: Hot, High, Likely, Watch"), note: S("Where it appeared or why it is likely.") }), "4 to 6 items.")
    }),
    predictions: A(O({
      topic: S("Question or topic"), unit: I("Unit"), type: S("Marks, e.g. 8 or 15"),
      probability: I("0-100"), reason: S("Short reason")
    }), "10 to 15 rows, highest probability first."),
    formulas: A(O({ title: S("Heading"), lines: A(S("One line; plain text and Unicode math, no LaTeX.")) }), "3 to 6 cards of formulas, definitions, algorithms or diagrams-to-remember."),
    revision: O({
      must: A(S("Item"), "8 to 10 must-revise items."),
      ifTime: A(S("Item"), "8 to 10 items to revise if time allows."),
      quickFacts: A(S("Fact"), "8 to 10 one-line facts for MCQs / short answers.")
    }),
    tips: A(O({ title: S("Short heading"), text: S("One to three sentences.") }), "6 to 8 tips specific to this subject and exam.")
  });

  /* ---------- step 1: read every paper into structured questions ---------- */
  // topicList is written FIRST (propertyOrdering), so every question across
  // every paper is tagged from one shared vocabulary — no "TM design" vs
  // "TM for addition" splits that would undercount repeats.
  const EXTRACT_SCHEMA = O({
    topicList: A(O({
      id: S("Short id: K1, K2, …"),
      name: S("Revision-sized topic, e.g. 'Turing machine design', 'GNF conversion', 'Rice's theorem'"),
      unit: I("Syllabus unit 1-5")
    }), "25 to 60 topics covering every descriptive question in the papers, each one thing a student revises as a unit."),
    papers: A(O({
      label: S("The paper's label exactly as given in its === PAPER: label === header."),
      pattern: S("This paper's structure, e.g. 'Part A 20×1 MCQ; Part B 5×8 either/or; Part C 1×15 choose 1; total 75'."),
      partBQuestions: I("How many Part B questions a student must ANSWER (e.g. 5 for 'five questions, each with an OR choice'; 4 for 'answer any 4 of 6'). 0 if there is no Part B or you cannot tell."),
      partBMarksEach: I("Marks each Part B question carries (e.g. 8 or 10). 0 if unknown."),
      partBEitherOr: S("'yes' if every Part B question offers its own OR alternative; 'no' if the student picks some questions out of a longer list; '' if unclear."),
      questions: A(O({
        number: S("Question number as printed in THIS paper, e.g. 21a, 24b(ii), 26"),
        part: S("Part letter, e.g. B or C"),
        marks: I("Marks for this question or sub-question"),
        unit: I("Syllabus unit 1-5 it belongs to"),
        topicIds: A(S("Id from topicList"), "Every topicList id this question tests (1 to 4). A multi-step question gets one id per concept it asks for."),
        text: S("The question as printed in THIS paper, condensed to at most 200 characters, keeping its given values.")
      }), "Every descriptive question (Part B and Part C, including each OR alternative and sub-question). Skip one-mark MCQs.")
    }))
  });

  function buildExtractPrompt(input) {
    const unitList = (input.units || []).filter(Boolean).map((u, i) => `${i + 1}. ${u}`).join("\n");
    return [
      `You are digitising previous-year exam papers for ${input.subject.name}${input.subject.code ? ` (${input.subject.code})` : ""}.`,
      unitList ? `Syllabus units:\n${unitList}` : ``,
      `First, read all the papers and write topicList: the concepts these papers examine, each sized as one thing a student revises. Right size: "Turing machine design" (covers TMs for aⁿbⁿcⁿ, addition, 2's complement…), "GNF conversion", "PDA ↔ CFG conversion", "Halting problem", "Rice's theorem". Too narrow: "TM for 2+3". Too broad: "Unit 4". Topics must NOT overlap: no parent/child pairs (never both "Turing machine design" and "TM for specific languages" or "TM for arithmetic"; never both "PDA design" and "PDA for specific languages") — pick one revision-sized topic per concept. Never list the same concept twice under different names.`,
      `Then, for EACH attached paper, list every descriptive question (Part B and Part C, including every OR alternative and every sub-question). Skip the one-mark MCQs. Tag each question with every topicList id it tests: a question asking to "remove null productions, convert to CNF, then GNF" gets the simplification, CNF and GNF ids.`,
      `For each paper also record its Part B layout exactly as printed in its instructions (partBQuestions, partBMarksEach, partBEitherOr). Older papers sometimes use a different layout, such as "answer any 4 of 6, 10 marks each", from the current "5 questions, 8 marks each, every one with an OR choice"; report what THIS paper says, not what other papers say.`,
      `Copy the paper label exactly from its header. Each question's number and text must come from THAT paper only — papers often contain similar questions, never copy one paper's wording into another. If a page is unreadable, skip it rather than guess.`
    ].filter(Boolean).join("\n\n");
  }

  function buildExtractRequest(input) {
    const parts = [{ text: buildExtractPrompt(input) }];
    let used = 0;
    const skipped = [];
    for (const p of input.papers || []) {
      const size = (p.text ? p.text.length : 0) + (p.data ? p.data.length : 0);
      if (!size) continue;
      if (used + size > INLINE_BUDGET) { skipped.push(p.label); continue; }
      used += size;
      if (p.text && p.text.trim()) parts.push({ text: `\n=== PAPER: ${p.label} ===\n${p.text.slice(0, 60000)}` });
      else { parts.push({ text: `\n=== PAPER: ${p.label} ===` }); parts.push({ inline_data: { mime_type: p.mime, data: p.data } }); }
    }
    const body = { contents: [{ role: "user", parts }], generationConfig: { responseMimeType: "application/json", responseSchema: EXTRACT_SCHEMA, temperature: 0.1, maxOutputTokens: 32768 } };
    Object.defineProperty(body, "skipped", { value: skipped, enumerable: false });
    return body;
  }

  /* ---------- step 2: count in code (exact, checkable) ---------- */
  // Returns { topics: [{ id, name, unit, papers: [label], marks: [n], questions: [{paper, number, part, marks, text}] }],
  //           read: [label], unread: [label], patterns: [string] }
  function tally(rawExtract, labels) {
    const key = (l) => str(l).toLowerCase().replace(/[^a-z0-9]/g, "");
    const canon = new Map(labels.map((l) => [key(l), l]));
    const tkey = (t) => str(t).toLowerCase().replace(/\b(the|of|a|an|using|and)\b/g, "").replace(/[^a-z0-9]/g, "");
    // shared vocabulary: id -> topic bucket; topics listed twice under the same name share a bucket
    const byTopic = new Map();
    const idToKey = new Map();
    for (const t of arr(rawExtract && rawExtract.topicList)) {
      const name = str(t.name); if (!name) continue;
      const k = tkey(name);
      if (!byTopic.has(k)) byTopic.set(k, { name, units: [], listUnit: int(t.unit, 1, 12, 0), papers: new Set(), marks: [], questions: [] });
      idToKey.set(str(t.id).toUpperCase(), k);
    }
    const read = new Set();
    const patterns = [];
    const { excluded, format } = findOldFormat(arr(rawExtract && rawExtract.papers), canon, key);
    const dropped = new Set(excluded.map((x) => x.label));
    for (const p of arr(rawExtract && rawExtract.papers)) {
      const label = canon.get(key(p.label));
      if (!label || dropped.has(label)) continue;
      const qs = arr(p.questions);
      if (qs.length) read.add(label);
      if (str(p.pattern)) patterns.push(`${label}: ${str(p.pattern)}`);
      for (const q of qs) {
        // tags from the shared list; a legacy single "topic" string still works as a fallback
        let keys = [...new Set(arr(q.topicIds).map((x) => idToKey.get(str(x).toUpperCase())).filter(Boolean))];
        if (!keys.length && str(q.topic)) {
          const k = tkey(q.topic);
          if (!byTopic.has(k)) byTopic.set(k, { name: str(q.topic), units: [], listUnit: 0, papers: new Set(), marks: [], questions: [] });
          keys = [k];
        }
        const entry = { paper: label, number: str(q.number), part: str(q.part), marks: int(q.marks, 0, 100, 0), text: str(q.text) };
        for (const k of keys) {
          const t = byTopic.get(k);
          if (t.questions.some((x) => x.paper === label && x.number === entry.number && x.text === entry.text)) continue;
          t.papers.add(label);
          t.units.push(int(q.unit, 1, 12, 1));
          if (Number(q.marks) > 0) t.marks.push(int(q.marks, 1, 100, 0));
          t.questions.push(entry);
        }
      }
    }
    for (const [k, t] of byTopic) if (!t.papers.size) byTopic.delete(k); // listed but never asked
    const mode = (xs) => { const c = {}; xs.forEach((x) => (c[x] = (c[x] || 0) + 1)); return +Object.keys(c).sort((a, b) => c[b] - c[a])[0] || 1; };
    const order = new Map(labels.map((l, i) => [l, i]));
    const topics = [...byTopic.values()]
      .map((t) => ({ name: t.name, unit: t.units.length ? mode(t.units) : t.listUnit || 1, papers: [...t.papers].sort((a, b) => order.get(a) - order.get(b)), marks: [...new Set(t.marks)].sort((a, b) => a - b), questions: t.questions }))
      .sort((a, b) => b.papers.length - a.papers.length || b.questions.length - a.questions.length || a.unit - b.unit)
      .map((t, i) => ({ id: "T" + (i + 1), ...t }));
    return { topics, read: labels.filter((l) => read.has(l)), unread: labels.filter((l) => !read.has(l) && !dropped.has(l)), patterns, excluded, format };
  }

  /* ---------- papers in an older exam format are left out ---------- */
  // Each paper reports its Part B layout (questions to answer, marks each, either/or).
  // The CURRENT format is the one most of the newest papers use; any paper with a
  // different known layout is excluded, because its questions were set under other rules.
  // Never leaves fewer than 3 papers: with too few papers, keep them all.
  const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  function labelDate(label) {
    const s = str(label).toLowerCase();
    const y = /(20\d\d)/.exec(s), m = /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/.exec(s);
    return y ? +y[1] * 12 + (m ? MONTHS.indexOf(m[1]) : 0) : null;
  }
  function layoutOf(p) {
    const n = int(p.partBQuestions, 0, 30, 0), marks = int(p.partBMarksEach, 0, 100, 0);
    if (!n || !marks) return null;
    const e = /^y/i.test(str(p.partBEitherOr)) ? "yes" : /^n/i.test(str(p.partBEitherOr)) ? "no" : "";
    return { n, marks, either: e };
  }
  const sameLayout = (a, b) => a.n === b.n && a.marks === b.marks && (!a.either || !b.either || a.either === b.either);
  const layoutText = (l) => `Part B: ${l.n} × ${l.marks} marks${l.either === "yes" ? ", each question with an OR choice" : l.either === "no" ? ", choose some from a longer list" : ""}`;
  function findOldFormat(papers, canon, key) {
    const rows = papers.map((p) => ({ label: canon.get(key(p.label)), layout: layoutOf(p), has: arr(p.questions).length > 0 }))
      .filter((r) => r.label && r.has);
    const known = rows.filter((r) => r.layout);
    if (known.length < 2) return { excluded: [], format: null };
    // reference = majority layout among the 3 newest dated papers (all of them if no dates)
    const dated = known.filter((r) => labelDate(r.label) != null).sort((a, b) => labelDate(b.label) - labelDate(a.label));
    const recent = (dated.length ? dated : known).slice(0, 3);
    let ref = recent[0].layout, best = 0;
    for (const r of recent) { const c = recent.filter((x) => sameLayout(x.layout, r.layout)).length; if (c > best) { best = c; ref = r.layout; } }
    const odd = known.filter((r) => !sameLayout(r.layout, ref));
    if (!odd.length || rows.length - odd.length < 3) return { excluded: [], format: layoutText(ref) };
    return {
      excluded: odd.map((r) => ({ label: r.label, layout: layoutText(r.layout), reason: `${layoutText(r.layout)} (older format); the current format is ${layoutText(ref)}` })),
      format: layoutText(ref)
    };
  }

  /* ---------- batching: read papers in parallel groups ---------- */
  const BATCH_PAPERS = 4;                  // papers per Gemini call
  const BATCH_BYTES = 9 * 1024 * 1024;     // base64 per call, well under the inline limit

  // Spread items evenly over the fewest batches that respect both limits.
  // item.size (if set) overrides the measured size (used for not-yet-downloaded files).
  function planBatches(items) {
    const sizeOf = (p) => p.size != null ? p.size : (p.text ? p.text.length : 0) + (p.data ? p.data.length : 0);
    const total = items.reduce((n, p) => n + sizeOf(p), 0);
    const nb = Math.max(1, Math.ceil(items.length / BATCH_PAPERS), Math.ceil(total / BATCH_BYTES));
    const batches = Array.from({ length: Math.min(nb, items.length || 1) }, () => []);
    items.forEach((p, i) => batches[i % batches.length].push(p));
    return batches.filter((b) => b.length);
  }

  /* ---------- merging topic vocabularies from separate batches ---------- */
  const MERGE_SCHEMA = O({
    topics: A(O({
      name: S("Revision-sized topic name"),
      unit: I("Syllabus unit 1-5"),
      members: A(S("Entry id exactly as listed, e.g. B0.K3"), "Every entry that is this same concept.")
    }), "Merged topics. Every listed entry id must appear in exactly one group.")
  });

  function buildMergeRequest(input, rawBatches) {
    const lines = rawBatches.flatMap((r, i) => arr(r && r.topicList).map((t) => `B${i}.${str(t.id).toUpperCase()} | ${str(t.name)} | unit ${int(t.unit, 1, 12, 1)}`));
    const prompt = [
      `These topic lists were written separately, from different sets of previous-year papers for the SAME subject (${input.subject.name}).`,
      `Group the entries that are the same concept (the same thing a student revises as one unit) under one clear name. Different concepts stay in separate groups. Do not merge a topic with a broader one that contains other concepts; "Turing machine design" and "Halting problem" are different topics.`,
      `Every entry id must appear in exactly one group. Copy ids exactly.`,
      lines.join("\n")
    ].join("\n\n");
    return { contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig: { responseMimeType: "application/json", responseSchema: MERGE_SCHEMA, temperature: 0, maxOutputTokens: 16384 } };
  }

  // Combine per-batch extractions into one extraction with a shared vocabulary.
  // mergeRaw may be null (merge call failed): topics with equal names still merge in tally().
  function mergeBatches(rawBatches, mergeRaw) {
    const idMap = new Map();
    const topicList = [];
    arr(mergeRaw && mergeRaw.topics).forEach((m, k) => {
      const name = str(m.name); if (!name) return;
      const id = "M" + (k + 1);
      topicList.push({ id, name, unit: int(m.unit, 1, 12, 1) });
      arr(m.members).forEach((x) => idMap.set(str(x).toUpperCase(), id));
    });
    rawBatches.forEach((r, i) => arr(r && r.topicList).forEach((t) => {
      const q = `B${i}.${str(t.id).toUpperCase()}`;
      if (!idMap.has(q)) { topicList.push({ id: q, name: str(t.name), unit: int(t.unit, 1, 12, 1) }); idMap.set(q, q); }
    }));
    const papers = rawBatches.flatMap((r, i) => arr(r && r.papers).map((p) => ({
      ...p,
      questions: arr(p.questions).map((q) => ({ ...q, topicIds: arr(q.topicIds).map((x) => idMap.get(`B${i}.${str(x).toUpperCase()}`)).filter(Boolean) }))
    })));
    return { topicList, papers };
  }

  function topicTableText(tally) {
    const n = tally.read.length;
    return tally.topics.slice(0, 80).map((t) => {
      const ex = t.questions.slice(0, 2).map((q) => `"${q.text.slice(0, 140)}" (${q.paper} Q${q.number})`).join("; ");
      return `${t.id} | ${t.name} | unit ${t.unit} | in ${t.papers.length}/${n} papers: ${t.papers.join(", ")} | marks ${t.marks.join("/") || "?"} | e.g. ${ex}`;
    }).join("\n");
  }

  function buildPrompt(input) {
    const { subject, course, institution, year, sem, units, syllabus, papers, references } = input;
    const refs = (references || []).map((r) => `${r.label} (${r.kind || "reference"})`);
    const labels = (papers || []).map((p) => p.label);
    const hasPapers = labels.length > 0;
    const unitList = (units || []).filter(Boolean).map((u, i) => `${i + 1}. ${u}`).join("\n");

    return [
      `You are an experienced professor and exam coach. Build a semester-exam study guide.`,
      ``,
      `Subject: ${subject.name}${subject.code ? ` (${subject.code})` : ""}`,
      `Course: ${course || "unspecified"}${institution ? ` — ${institution}` : ""}`,
      `Year ${year}, Semester ${sem}`,
      unitList ? `\nOfficial syllabus units (use exactly these as the units, in this order):\n${unitList}` : `\nNo unit list was given: infer the standard 5-unit structure for this subject.`,
      syllabus ? `\nSyllabus text provided by the student:\n"""\n${syllabus.slice(0, 20000)}\n"""` : ``,
      ``,
      input.tally
        ? [
            `${input.tally.read.length} previous-year papers were read and every Part B/C question was counted by topic. The counts below are EXACT; do not change or re-estimate them.`,
            `Exam pattern as printed on the papers:\n${input.tally.patterns.slice(0, 4).join("\n")}`,
            ...(input.tally.excluded && input.tally.excluded.length ? [`Left out on purpose (older exam format, not counted anywhere): ${input.tally.excluded.map((x) => x.label).join(", ")}. Write about the CURRENT format only and never mention these papers.`] : []),
            `COUNTED TOPIC TABLE (id | topic | unit | papers it appeared in | marks | example wording):\n${topicTableText(input.tally)}`,
            `Build the guide from this table. Each "top" item must set topicIds to the table ids it covers (usually one), and leave appearedIn empty — the app fills paper names from the table. Order "top" by paper count, highest first, and include every topic that appeared in at least half the papers. If two table topics are really the same thing a student revises (e.g. a general and a specific version), make ONE top item listing both ids — never two near-duplicate top items.`,
            `Phrase questions the way the papers phrase them. Predictions should use the counts and which papers a topic is missing from.`
          ].join("\n\n")
        : hasPapers
        ? [
            `${labels.length} previous-year question paper(s) are provided, labelled: ${labels.join(", ")}.`,
            `They are the primary source. Rank questions by how many papers they actually appear in.`,
            `appearedIn must contain only those exact labels, and only where the question or a close variant really appears in that paper. Never guess a label.`,
            `Take the exam pattern (parts, marks, number of questions) from the papers themselves.`,
            `Phrase questions the way the papers phrase them, keeping given values (strings, matrices, frequencies) where useful.`
          ].join("\n")
        : [
            `No past papers were provided. appearedIn must be an empty list for every item.`,
            `Base importance and probabilities on how central each topic is to the syllabus and how commonly such topics are examined. These are estimates.`,
            institution && /srm/i.test(institution)
              ? `Assume the usual SRMIST 2021-regulation theory end-semester pattern: Part A objective questions, Part B either/or long answers with one question per unit, Part C one long question to choose from two.`
              : `Assume a typical university end-semester pattern unless the syllabus says otherwise.`
          ].join("\n"),
      refs.length
        ? `\nReference documents are also attached: ${refs.join(", ")}. Use them for topics, phrasing, expected answers and (for a syllabus) the unit structure. They are NOT end-semester papers: never put a reference label in appearedIn.`
        : ``,
      ``,
      `Rules:`,
      `- Every value must be literal study content, never a sentence about what you are doing.`,
      `- Be specific to this subject: name the actual algorithms, theorems, derivations, diagrams, numericals or definitions students must write.`,
      `- Use plain text and Unicode symbols for maths (θ, Σ, ≤, ², √); no LaTeX, no markdown.`,
      `- Keep each line short enough to scan in revision.`
    ].filter((l) => l !== undefined).join("\n");
  }

  // input.papers: [{ label, text?, mime?, data? (base64) }]
  function buildRequest(input) {
    const parts = [{ text: buildPrompt(input) }];
    let used = 0;
    const skipped = [];
    const attach = (p, head) => {
      const size = (p.text ? p.text.length : 0) + (p.data ? p.data.length : 0);
      if (used + size > INLINE_BUDGET) { skipped.push(p.label); return; }
      used += size;
      if (p.text && p.text.trim()) parts.push({ text: `\n=== ${head}: ${p.label} ===\n${p.text.slice(0, 60000)}` });
      else if (p.data && p.mime) {
        parts.push({ text: `\n=== ${head}: ${p.label} (attached file) ===` });
        parts.push({ inline_data: { mime_type: p.mime, data: p.data } });
      }
    };
    for (const p of input.papers || []) attach(p, "PAPER");
    for (const r of input.references || []) attach(r, `REFERENCE (${r.kind || "reference"})`);
    if (skipped.length) parts.push({ text: `\n(Note: ${skipped.join(", ")} could not be attached — too large. Do not list them in appearedIn.)` });
    const body = {
      contents: [{ role: "user", parts }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: SCHEMA,
        temperature: 0.4,
        maxOutputTokens: 32768
      }
    };
    // not enumerable, so it never goes to Gemini (it rejects unknown fields)
    Object.defineProperty(body, "skipped", { value: skipped, enumerable: false });
    return body;
  }

  async function callGemini(key, body, models) {
    // Only real-looking model names are honoured (a typo like "gemini" would
    // 404 every call), and the built-in models are always kept as fallbacks.
    const mine = (models || []).map((m) => String(m).trim()).filter((m) => /^gemini-[a-z0-9.\-]+$/i.test(m));
    const list = [...mine, ...MODELS.filter((m) => !mine.includes(m))];
    let lastErr;
    for (const model of list) {
      let res;
      try {
        res = await fetch(`${ENDPOINT}${model}:generateContent`, {
          method: "POST",
          headers: { "content-type": "application/json", "x-goog-api-key": key },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(TIMEOUT_MS)
        });
      } catch (e) {
        // a timeout already cost ~10 min; don't make the student wait for a second model
        if (e.name === "TimeoutError") throw new Error("Gemini took too long (over 10 minutes). Try again with fewer files ticked.");
        lastErr = new Error(`Network error calling Gemini: ${e.message}`); continue;
      }
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = json?.error?.message || `HTTP ${res.status}`;
        if (/API key not valid|API_KEY_INVALID/i.test(msg)) throw Object.assign(new Error("Google rejected the Gemini key. Check it in Settings (it should start with AIza)."), { status: 401 });
        if (res.status === 403) throw Object.assign(new Error("This Gemini key isn't allowed to use the API. Create a new key at aistudio.google.com/apikey."), { status: 403 });
        lastErr = Object.assign(new Error(`${model}: ${msg}`), { status: res.status });
        if (res.status === 429 || res.status === 404 || res.status >= 500) continue; // try next model
        throw lastErr; // bad key, bad request: no point retrying
      }
      const cand = json?.candidates?.[0];
      const text = (cand?.content?.parts || []).map((p) => p.text || "").join("");
      if (!text) { lastErr = new Error(`${model}: empty response (${cand?.finishReason || json?.promptFeedback?.blockReason || "unknown"})`); continue; }
      try { return { raw: JSON.parse(text), model }; }
      catch { lastErr = new Error(`${model}: response was cut off or not valid JSON (${cand?.finishReason || "?"})`); continue; }
    }
    throw lastErr || new Error("No Gemini model available");
  }

  /* ---------- normalise model output into the guide renderer's shape ---------- */
  const arr = (x) => (Array.isArray(x) ? x : []);
  const str = (x) => (x == null ? "" : String(x).trim());
  const int = (x, lo, hi, d) => { const n = Math.round(Number(x)); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d; };

  function normalize(raw, input) {
    const T = input.tally || null;
    // with a counted table, only papers that were actually read count
    const labels = T ? T.read : (input.papers || []).map((p) => p.label);
    const basis = labels.length ? "papers" : "syllabus";
    // match the model's label to a real one even if spacing/case/punctuation differ
    const key = (l) => str(l).toLowerCase().replace(/[^a-z0-9]/g, "");
    const canon = new Map(labels.map((l) => [key(l), l]));
    const toLabel = (l) => canon.get(key(l)) || null;
    const r = raw || {};
    const ep = r.examPattern || {};
    const unitTitles = (input.units || []).filter(Boolean);

    const units = arr(r.units).map((u, i) => ({
      n: int(u.n, 1, 12, i + 1),
      title: str(unitTitles[i] || u.title) || `Unit ${i + 1}`,
      weight: /very/i.test(u.weight) ? "Very High" : /high/i.test(u.weight) ? "High" : "Medium",
      topics: arr(u.topics).map((t) => ({ t: str(t.topic), tag: str(t.tag) })).filter((t) => t.t)
    }));

    const byId = T ? new Map(T.topics.map((t) => [t.id.toUpperCase(), t])) : null;
    const order = new Map(labels.map((l, i) => [l, i]));
    const top = arr(r.top).map((t) => {
      let seenIn, evidence = null, counted = false;
      const ids = T ? [...new Set(arr(t.topicIds).map((x) => str(x).toUpperCase()))].filter((x) => byId.has(x)) : [];
      if (T && ids.length) {
        // exact: union of the papers the referenced topics were found in
        counted = true;
        const ts = ids.map((x) => byId.get(x));
        seenIn = [...new Set(ts.flatMap((x) => x.papers))].sort((a, b) => order.get(a) - order.get(b));
        const seenQ = new Set();
        evidence = ts.flatMap((x) => x.questions)
          .filter((q) => { const k = `${q.paper}|${q.number}|${q.text}`; if (seenQ.has(k)) return false; seenQ.add(k); return true; })
          .sort((a, b) => order.get(a.paper) - order.get(b.paper));
      } else {
        // no table (or the model didn't link one): fall back to its own labels
        seenIn = [...new Set(arr(t.appearedIn).map(toLabel).filter(Boolean))];
      }
      return {
        q: str(t.question),
        seen: basis === "papers" ? (seenIn.length ? `Appeared in: ${seenIn.join(", ")}` : str(t.note)) : str(t.note),
        freq: basis === "papers" ? seenIn.length : null,
        counted,
        evidence,
        importance: int(t.importance, 1, 5, 3),
        marks: str(t.marks) || "—",
        unit: int(t.unit, 1, 12, 1)
      };
    }).filter((t) => t.q);
    if (basis === "papers") top.sort((a, b) => b.freq - a.freq || b.importance - a.importance);

    const tones = ["hot", "star"];
    const s = input.subject;
    return {
      code: s.code || "",
      name: s.name,
      short: s.short || s.code || s.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 5).toUpperCase(),
      tagline: `Year ${input.year} · Semester ${input.sem}${input.course ? ` · ${input.course}` : ""}`,
      summary: str(r.summary),
      papers: labels,
      totalMarks: int(ep.totalMarks, 0, 1000, 0) || null,
      basis,
      generated: { at: new Date().toISOString(), model: input._model || "", basis, method: T ? "counted" : "estimated", unread: T ? T.unread : [], excluded: T && T.excluded ? T.excluded : [], format: T && T.format ? T.format : "" },
      // the full counted table: every topic, every paper, every question
      repeats: T ? T.topics.map((t) => ({ id: t.id, name: t.name, unit: t.unit, papers: t.papers, marks: t.marks, questions: t.questions })) : null,
      meta: { course: input.course, courseId: input.courseId, institution: input.institution, year: input.year, sem: input.sem, units: unitTitles, source: s.source || "" },
      format: arr(ep.parts).map((p) => ({ part: str(p.part), marks: str(p.marks), text: str(p.text) })),
      callouts: arr(r.callouts).slice(0, 2).map((c, i) => ({ tone: tones[i % 2], title: str(c.title), text: str(c.text) })),
      top,
      units,
      eight: {
        title: str(r.shortAnswer?.title) || "Most Repeated Medium-Length Questions",
        strategy: str(r.shortAnswer?.strategy),
        groups: arr(r.shortAnswer?.groups).map((g, i) => ({ q: str(g.label) || `Unit ${i + 1}`, unit: int(g.unit, 1, 12, i + 1), items: arr(g.items).map(str).filter(Boolean) })),
        tip: str(r.shortAnswer?.tip)
      },
      fifteen: {
        title: str(r.longAnswer?.title) || "Most Repeated Long Questions",
        note: str(r.longAnswer?.note),
        items: arr(r.longAnswer?.items).map((t) => ({ q: str(t.question), seen: str(t.note), level: ["Hot", "High", "Likely", "Watch"].find((l) => new RegExp(l, "i").test(t.level)) || "Watch" })).filter((t) => t.q)
      },
      predict: {
        note: basis === "papers" ? `Based on topic rotation across your ${labels.length} paper(s).` : "Estimated from the syllabus — add past papers for evidence-based predictions.",
        rows: arr(r.predictions).map((p) => [str(p.topic), int(p.unit, 1, 12, 1), str(p.type) || "—", int(p.probability, 0, 100, 50), str(p.reason)]).filter((p) => p[0]).sort((a, b) => b[3] - a[3]),
        callouts: []
      },
      formulas: arr(r.formulas).map((f) => ({ title: str(f.title), lines: arr(f.lines).map((l) => String(l ?? "")) })).filter((f) => f.title),
      revision: {
        must: arr(r.revision?.must).map(str).filter(Boolean),
        ifTime: arr(r.revision?.ifTime).map(str).filter(Boolean),
        mcq: arr(r.revision?.quickFacts).map(str).filter(Boolean)
      },
      tips: arr(r.tips).map((t) => ({ title: str(t.title), text: str(t.text) })).filter((t) => t.title || t.text)
    };
  }

  globalThis.SEMPREP_GEN = { MODELS, SCHEMA, EXTRACT_SCHEMA, MERGE_SCHEMA, buildPrompt, buildRequest, buildExtractRequest, planBatches, buildMergeRequest, mergeBatches, tally, callGemini, normalize };
})();
