(() => {
  "use strict";

  const S = window.SEMPREP;
  const G = window.SEMPREP_GEN;
  const app = document.getElementById("app");

  /* ---------- helpers ---------- */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Everything lives in localStorage. When the local server is running
  // (node server.mjs) each change is also mirrored to saved/store.json, and
  // restored at startup if the browser forgot (cleared data, new profile).
  // The API key and theme are never mirrored.
  const NEVER_MIRROR = /^(ai:key|ai:code|theme)$/;
  let mirrorOk = true; // flips off if the host has no /store (e.g. static hosting)
  const mirror = (method, k, body) => {
    if (!mirrorOk || NEVER_MIRROR.test(k)) return;
    fetch("store/" + encodeURIComponent(k), { method, headers: { "content-type": "application/json" }, body, signal: AbortSignal.timeout(8000) })
      .then((r) => { if (r.status === 404) mirrorOk = false; }).catch(() => { /* offline: browser copy still works */ });
  };
  const store = {
    get(k, d) { try { const v = localStorage.getItem("semprep:" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("semprep:" + k, JSON.stringify(v)); mirror("PUT", k, JSON.stringify(v)); return true; } catch { return false; } },
    del(k) { try { localStorage.removeItem("semprep:" + k); mirror("DELETE", k); } catch { /* ignore */ } }
  };
  // Two-way, non-destructive sync at startup: disk fills gaps in the browser, browser fills gaps on disk.
  async function syncWithDisk() {
    try {
      const r = await fetch("store", { signal: AbortSignal.timeout(2000) });
      if (!r.ok) { mirrorOk = false; return; }
      const disk = await r.json();
      let restored = 0;
      for (const [k, v] of Object.entries(disk)) {
        const have = localStorage.getItem("semprep:" + k);
        if (have == null) { localStorage.setItem("semprep:" + k, JSON.stringify(v)); restored++; }
        else if (k === "guides-index" && Array.isArray(v)) {
          // a guide that exists on disk but not in this browser's list (added on disk or from another browser) is added to it,
          // and a list entry that is newer on disk replaces the browser's older one
          try {
            const local = JSON.parse(have), byId = new Map(local.map((g) => [g.id, g]));
            let changed = 0;
            for (const g of v) {
              if (!disk["guide:" + g.id]) continue;
              const cur = byId.get(g.id);
              if (!cur) { byId.set(g.id, g); changed++; }
              else if (String(g.at) > String(cur.at)) { byId.set(g.id, g); changed++; }
            }
            if (changed) {
              const order = [...v.map((g) => g.id), ...local.map((g) => g.id)];
              localStorage.setItem("semprep:guides-index", JSON.stringify([...new Set(order)].map((id) => byId.get(id)).filter(Boolean)));
              restored += changed;
            }
          } catch { /* unreadable list: leave it */ }
        }
        else if (k.startsWith("guide:") && v && v.generated) {
          // the same guide, rebuilt more recently on disk: take the newer one
          try {
            const local = JSON.parse(have);
            if (!local.generated || String(v.generated.at) > String(local.generated.at)) { localStorage.setItem("semprep:" + k, JSON.stringify(v)); restored++; }
          } catch { localStorage.setItem("semprep:" + k, JSON.stringify(v)); restored++; }
        }
      }
      for (let i = 0; i < localStorage.length; i++) {
        const full = localStorage.key(i);
        if (!full || !full.startsWith("semprep:")) continue;
        const k = full.slice(8);
        if (!(k in disk) && !NEVER_MIRROR.test(k)) mirror("PUT", k, localStorage.getItem(full));
      }
      if (restored) console.info(`SemPrep: restored ${restored} saved item(s) from disk`);
    } catch { mirrorOk = false; }
  }
  const pad = (n) => String(n).padStart(2, "0");
  const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
  const fmtDate = (iso) => { try { return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }); } catch { return ""; } };
  const hashParams = () => new URLSearchParams((location.hash.split("?")[1] || ""));

  /* ---------- theme ---------- */
  const applyTheme = (t) => { if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; };
  applyTheme(store.get("theme", null));
  document.getElementById("themeBtn").addEventListener("click", () => {
    const next = (document.documentElement.dataset.theme || "dark") === "dark" ? "light" : "dark";
    applyTheme(next); store.set("theme", next);
  });

  /* ---------- guides: built-in + generated (stored in this browser) ---------- */
  const genId = (subject) => "gen-" + slug(subject.code || subject.name);
  const getGuide = (id) => S.guides[id] || store.get("guide:" + id, null);
  const guideIndex = () => store.get("guides-index", []);
  function saveGuide(id, guide) {
    if (!store.set("guide:" + id, guide)) return false;
    const idx = guideIndex().filter((g) => g.id !== id);
    idx.unshift({ id, code: guide.code, name: guide.name, year: guide.meta.year, sem: guide.meta.sem, courseId: guide.meta.courseId, course: guide.meta.course, at: guide.generated.at, basis: guide.basis });
    store.set("guides-index", idx);
    return true;
  }
  function deleteGuide(id) {
    const g = getGuide(id);
    if (g && g.meta && g.meta.custom) store.set("custom-subjects", store.get("custom-subjects", []).filter((x) => genId(x) !== id));
    store.del("guide:" + id); store.del("progress:" + id); store.del("exam:" + id);
    store.set("guides-index", guideIndex().filter((g) => g.id !== id));
  }
  // The same subject can be listed under two semesters (SRM Helper and THE HELPER sometimes disagree),
  // so a saved guide is also matched by subject name.
  const normName = (s) => String(s).toLowerCase().replace(/\(.*?\)/g, "").replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
  const guideByName = (subject) => { const n = normName(subject.name); const hit = guideIndex().find((g) => normName(g.name) === n && getGuide(g.id)); return hit ? hit.id : null; };
  const guideIdFor = (subject) => S.builtinGuides[subject.code] || (getGuide(genId(subject)) ? genId(subject) : guideByName(subject));
  let justSaved = null; // id of the guide generated a moment ago, to show "saved" on its page

  // Removing a guide you generated deletes it (and its progress/exam date).
  // The ready-made built-in guide can't be deleted from the app, so removing it
  // just hides it from My Guides (it stays on the Dashboard; "Show again" brings it back).
  // Every removal returns an undo function, so no confirmation dialog is needed.
  const hiddenGuides = () => store.get("hidden-guides", []);
  function removeGuide(id) {
    if (S.guides[id]) {
      store.set("hidden-guides", [...new Set([...hiddenGuides(), id])]);
      return () => store.set("hidden-guides", hiddenGuides().filter((x) => x !== id));
    }
    const snap = {
      guide: store.get("guide:" + id, null), progress: store.get("progress:" + id, null), exam: store.get("exam:" + id, null),
      index: guideIndex().find((g) => g.id === id) || null,
      custom: store.get("custom-subjects", []).find((x) => genId(x) === id) || null
    };
    deleteGuide(id);
    return () => {
      if (snap.guide) store.set("guide:" + id, snap.guide);
      if (snap.progress) store.set("progress:" + id, snap.progress);
      if (snap.exam) store.set("exam:" + id, snap.exam);
      if (snap.index) store.set("guides-index", [snap.index, ...guideIndex().filter((g) => g.id !== id)]);
      if (snap.custom) store.set("custom-subjects", [...store.get("custom-subjects", []).filter((x) => genId(x) !== id), snap.custom]);
    };
  }
  let toastTimer = null;
  function toast(message, actionLabel, onAction) {
    let el = document.getElementById("toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.innerHTML = `<span class="toast-msg"></span>${actionLabel ? `<button class="btn" type="button" data-toast-act>${esc(actionLabel)}</button>` : ""}<button class="toast-x" type="button" aria-label="Dismiss">×</button>`;
    el.querySelector(".toast-msg").textContent = message;
    const hide = () => el.classList.remove("show");
    el.querySelector(".toast-x").onclick = hide;
    const act = el.querySelector("[data-toast-act]");
    if (act) act.onclick = () => { onAction(); hide(); };
    el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(hide, 12000);
  }
  function removeWithUndo(ids) {
    const names = ids.map((id) => (getGuide(id) || {}).name || id);
    const undos = ids.map(removeGuide);
    updateGuideCount();
    toast(ids.length === 1 ? `Removed “${names[0]}”.` : `Removed ${ids.length} guides.`, "Undo", () => {
      undos.reverse().forEach((u) => u());
      updateGuideCount();
      if ((location.hash || "").startsWith("#/guides")) route();
    });
  }

  const allGuideEntries = () => [
    ...Object.keys(S.guides).filter((id) => !hiddenGuides().includes(id)).map((id) => { const g = S.guides[id]; return { id, code: g.code, name: g.name, builtin: true, basis: "papers", at: "" }; }),
    ...guideIndex().filter((g) => !S.guides[g.id] && getGuide(g.id))
  ];
  function updateGuideCount() {
    const $c = document.getElementById("guideCount"); if (!$c) return;
    const n = allGuideEntries().length; $c.textContent = n; $c.hidden = !n;
  }

  /* ---------- AI availability ---------- */
  let serverStatus = null;
  async function aiStatus() {
    if (!serverStatus) {
      serverStatus = fetch("api/status").then((r) => (r.ok ? r.json() : { serverKey: false })).catch(() => ({ serverKey: false }));
    }
    const s = await serverStatus;
    const ownKey = store.get("ai:key", "");
    return { server: !!s.serverKey, needsCode: !!s.accessCode, ownKey: !!ownKey, ready: !!ownKey || !!s.serverKey };
  }

  /* ---------- learning links ---------- */
  const VIS = [
    [/merge sort|quicksort|insertion sort|sorting/i, "https://visualgo.net/en/sorting"],
    [/recurrence|recursion tree|master theorem/i, "https://visualgo.net/en/recursion"],
    [/\bbfs\b|\bdfs\b|graph traversal/i, "https://visualgo.net/en/dfsbfs"],
    [/spanning tree|kruskal|prim'?s/i, "https://visualgo.net/en/mst"],
    [/floyd/i, "https://www.cs.usfca.edu/~galles/visualization/Floyd.html"],
    [/\blcs\b|longest common/i, "https://www.cs.usfca.edu/~galles/visualization/DPLCS.html"],
    [/n-queens|queens/i, "https://www.cs.usfca.edu/~galles/visualization/RecQueens.html"],
    [/binary search tree|\bbst\b|avl/i, "https://visualgo.net/en/bst"],
    [/linked list|stack|queue/i, "https://visualgo.net/en/list"],
    [/hash/i, "https://visualgo.net/en/hashtable"],
    [/heap/i, "https://visualgo.net/en/heap"]
  ];
  const topicName = (text) => String(text).split(" — ")[0].replace(/\(.*?\)/g, "").replace(/\s+/g, " ").trim();
  function learnLinks(text, subjectName) {
    const t = topicName(text);
    const q = encodeURIComponent(`${t} ${subjectName}`.trim());
    const vis = VIS.find(([re]) => re.test(text));
    return `<span class="learn">
      <a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener" title="Video lectures on YouTube">▶ Videos</a>
      <a href="https://www.google.com/search?q=${encodeURIComponent("site:geeksforgeeks.org " + t)}" target="_blank" rel="noopener" title="Notes on GeeksforGeeks">GfG notes</a>
      ${vis ? `<a href="${vis[1]}" target="_blank" rel="noopener" title="Interactive animation">Visualize</a>` : ""}
    </span>`;
  }

  /* ---------- progress ---------- */
  const progKey = (id) => "progress:" + id;
  const getProg = (id) => store.get(progKey(id), {});
  // Progress is keyed by the item's text (not its position), so ticks survive
  // regenerating a guide wherever the same question/topic comes back.
  const hkey = (s) => { let h = 5381; for (const ch of String(s).toLowerCase().replace(/\s+/g, " ").trim()) h = ((h * 33) ^ ch.charCodeAt(0)) >>> 0; return h.toString(36); };
  const K = {
    top: (t) => "top-" + hkey(t.q),
    topic: (u, t) => `u${u.n}-` + hkey(t.t),
    rev: (col, x) => `rev-${col}-` + hkey(x)
  };
  function guideKeys(g) {
    const keys = [];
    g.top.forEach((t) => keys.push(K.top(t)));
    g.units.forEach((u) => u.topics.forEach((t) => keys.push(K.topic(u, t))));
    ["must", "ifTime", "mcq"].forEach((col) => (g.revision[col] || []).forEach((x) => keys.push(K.rev(col, x))));
    return keys;
  }
  function progressPct(id) {
    const g = getGuide(id); if (!g) return 0;
    const p = getProg(id), keys = guideKeys(g);
    return keys.length ? Math.round((keys.filter((k) => p[k]).length / keys.length) * 100) : 0;
  }

  /* ---------- routing ---------- */
  function route() {
    const h = location.hash || "#/";
    const path = h.split("?")[0];
    const here = path === "#" ? "#/" : path;
    document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", here === (a.dataset.nav === "home" ? "#/" : "#/" + a.dataset.nav)));
    app.onchange = null; app.oninput = null; app.onclick = null;
    updateGuideCount();
    const m = path.match(/^#\/g\/([\w-]+)/);
    if (m && getGuide(m[1])) renderGuide(m[1]);
    else if (path === "#/guides") renderGuides();
    else if (path === "#/new") renderGenerate();
    else if (path === "#/analyzer") renderAnalyzer();
    else if (path === "#/settings") renderSettings();
    else renderDashboard();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* =========================================================
     DASHBOARD
     ========================================================= */
  const customSubjects = () => store.get("custom-subjects", []);

  function renderDashboard() {
    document.title = "SemPrep — Semester Exam Guides";
    const sel = store.get("selection", { course: S.catalog[0].id, year: 2, sem: 4, subject: "" });

    app.innerHTML = `
      <div class="hero-dash">
        <div class="eyebrow">Semester exam prep</div>
        <h1>Study what actually shows up in the paper.</h1>
        <p>Pick your course, year, semester and subject. Open a ready guide, or generate one in a few minutes from the subject's past papers on THE HELPER: most repeated questions, unit-wise topics, long- and short-answer patterns, predictions and a last-minute revision list.</p>
      </div>
      <div id="aiBanner"></div>
      <div class="picker">
        <div class="step"><label for="selCourse"><b>01</b>Course</label><select id="selCourse"></select></div>
        <div class="step"><label for="selYear"><b>02</b>Year</label><select id="selYear"></select></div>
        <div class="step"><label for="selSem"><b>03</b>Semester</label><select id="selSem"></select></div>
        <div class="step"><label for="selSubject"><b>04</b>Subject</label><select id="selSubject"></select></div>
      </div>
      <p class="hint" id="courseNote"></p>
      <div id="subjects" class="subjects"></div>
      <div id="myGuides"></div>
    `;
    const $c = app.querySelector("#selCourse"), $y = app.querySelector("#selYear"), $s = app.querySelector("#selSem"),
      $sub = app.querySelector("#selSubject"), $list = app.querySelector("#subjects");

    aiStatus().then((st) => {
      if (!st.ready) app.querySelector("#aiBanner").innerHTML = `<div class="callout star" style="margin-bottom:16px"><h4>One-time setup</h4><p>To generate guides, add a free Gemini API key in <a href="#/settings">Settings</a> (takes a minute). Ready-made guides like DAA work without it.</p></div>`;
    });

    $c.innerHTML = S.catalog.map((c) => `<option value="${c.id}">${esc(c.name)}</option>`).join("");
    const course = () => S.catalog.find((c) => c.id === $c.value) || S.catalog[0];
    const year = () => course().years.find((y) => String(y.year) === $y.value);
    const sem = () => year()?.semesters.find((s) => String(s.sem) === $s.value);
    const subjectsHere = () => {
      const base = sem()?.subjects || [];
      const custom = customSubjects().filter((c) => c.courseId === $c.value && c.sem === +$s.value);
      return [...base, ...custom.map((c) => ({ ...c, custom: true }))];
    };

    function fillYears(pref) {
      $y.innerHTML = course().years.map((y) => `<option value="${y.year}">Year ${y.year}</option>`).join("");
      if (course().years.some((y) => y.year === pref)) $y.value = String(pref);
    }
    function fillSems(pref) {
      const ss = year()?.semesters || [];
      $s.innerHTML = ss.map((s) => `<option value="${s.sem}">Semester ${s.sem}</option>`).join("");
      if (ss.some((s) => s.sem === pref)) $s.value = String(pref);
    }
    function fillSubjects(pref) {
      const subs = subjectsHere();
      $sub.innerHTML = `<option value="">All subjects (${subs.length})</option>` + subs.map((s) => `<option value="${esc(s.code || s.name)}">${s.code ? esc(s.code) + " · " : ""}${esc(s.name)}</option>`).join("");
      if (pref && subs.some((s) => (s.code || s.name) === pref)) $sub.value = pref;
      app.querySelector("#courseNote").textContent = course().note || "";
      drawSubjects();
    }
    function drawSubjects() {
      const subs = subjectsHere().filter((s) => !$sub.value || (s.code || s.name) === $sub.value);
      store.set("selection", { course: $c.value, year: +$y.value, sem: +$s.value, subject: $sub.value });
      const addCard = `<a class="subj add" href="#/new?custom=1&course=${encodeURIComponent($c.value)}&sem=${$s.value}">
          <span class="code">Not listed?</span><h3>+ Add a subject</h3>
          <span class="hint">Any subject, any university. Give its units or syllabus, add past papers, and generate a guide.</span></a>`;
      if (!subs.length) {
        $list.innerHTML = `<div class="empty" style="grid-column:1/-1">${+$s.value === 8 && $c.value === "srmist-2021" ? "Semester 8 is the major project / internship, so it has no written-exam subjects listed." : "No subjects listed for this semester yet."}</div>` + addCard;
        return;
      }
      $list.innerHTML = subs.map((s) => {
        const gid = guideIdFor(s);
        const newUrl = s.custom
          ? `#/new?custom=1&id=${encodeURIComponent(genId(s))}`
          : `#/new?course=${encodeURIComponent($c.value)}&sem=${$s.value}&code=${encodeURIComponent(s.code || s.name)}`;
        if (gid) {
          const g = getGuide(gid), pct = progressPct(gid);
          const label = S.guides[gid] ? `${g.papers.length} papers analysed` : g.basis === "papers" ? `Generated from ${g.papers.length} paper${g.papers.length > 1 ? "s" : ""} · ${fmtDate(g.generated.at)}` : `Generated from syllabus · ${fmtDate(g.generated.at)}`;
          return `<a class="subj" href="#/g/${gid}">
            <span class="code">${esc(s.code || "Custom")}${s.credits ? ` · ${s.credits} credits` : ""}</span>
            <h3>${esc(s.name)}</h3>
            <span class="hint">${esc(label)}</span>
            <div class="mini-progress" aria-label="${pct}% done"><i style="width:${pct}%"></i></div>
            <div class="meta"><span>${pct}% studied</span><span class="pill ${S.guides[gid] || g.basis === "papers" ? "ready" : "accent"}">${S.guides[gid] ? "Paper-analysed" : g.basis === "papers" ? `From ${g.papers.length} past papers` : "Syllabus-based"}</span></div>
          </a>`;
        }
        return `<a class="subj" href="${newUrl}">
          <span class="code">${esc(s.code || "Custom")}${s.credits ? ` · ${s.credits} credits` : ""}</span>
          <h3>${esc(s.name)}</h3>
          <span class="hint">${s.units?.length ? `${s.units.length} units: ${esc(s.units.slice(0, 3).join(", "))}${s.units.length > 3 ? "…" : ""}` : "Units not listed — you can add them."}</span>
          <div class="meta"><span>${s.helper ? "Papers on THE HELPER" : "No guide yet"}</span><span class="pill info">Generate guide →</span></div>
        </a>`;
      }).join("") + addCard;
    }

    $c.value = sel.course; if (!$c.value) $c.selectedIndex = 0;
    fillYears(sel.year); fillSems(sel.sem); fillSubjects(sel.subject);
    $c.onchange = () => { fillYears(); fillSems(); fillSubjects(); };
    $y.onchange = () => { fillSems(); fillSubjects(); };
    $s.onchange = () => fillSubjects();
    $sub.onchange = drawSubjects;

    const mine = guideIndex();
    if (mine.length) {
      app.querySelector("#myGuides").innerHTML = `
        <section class="sec"><div class="sec-head"><span class="sec-num">★</span><h2>My generated guides</h2></div>
        <div class="subjects">${mine.map((g) => `<a class="subj" href="#/g/${g.id}">
          <span class="code">${esc(g.code || "Custom")} · Year ${g.year} · Sem ${g.sem}</span><h3>${esc(g.name)}</h3>
          <div class="mini-progress"><i style="width:${progressPct(g.id)}%"></i></div>
          <div class="meta"><span>${progressPct(g.id)}% studied</span><span class="pill ${g.basis === "papers" ? "ready" : "accent"}">${g.basis === "papers" ? "From past papers" : "Syllabus-based"}</span></div></a>`).join("")}</div></section>`;
    }
  }

  /* =========================================================
     GENERATE — build a guide for any subject
     ========================================================= */
  let pdfjsReady = null;
  function loadPdfJs() {
    if (!pdfjsReady) {
      pdfjsReady = new Promise((ok, fail) => {
        const s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        s.onload = () => { window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"; ok(window.pdfjsLib); };
        s.onerror = () => { pdfjsReady = null; fail(new Error("Could not load the PDF reader (offline?)")); };
        document.head.appendChild(s);
      });
    }
    return pdfjsReady;
  }
  const toBase64 = (buf) => { let s = ""; const b = new Uint8Array(buf); for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(s); };

  async function readPaperFile(file) {
    const label = file.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim().slice(0, 40) || "Paper";
    if (/\.txt$/i.test(file.name) || file.type === "text/plain") return { label, text: await file.text(), kind: "text" };
    const buf = await file.arrayBuffer();
    if (file.type === "application/pdf" || /\.pdf$/i.test(file.name)) {
      let text = "";
      try {
        const pdfjs = await loadPdfJs();
        const doc = await pdfjs.getDocument({ data: buf.slice(0) }).promise;
        for (let i = 1; i <= Math.min(doc.numPages, 30); i++) {
          const c = await (await doc.getPage(i)).getTextContent();
          text += c.items.map((it) => it.str).join(" ") + "\n";
        }
      } catch { /* fall back to sending the file */ }
      if (text.replace(/\s+/g, "").length > 300) return { label, text, kind: "pdf-text" };
      return { label, mime: "application/pdf", data: toBase64(buf), kind: "pdf-scan", bytes: buf.byteLength };
    }
    if (/^image\//.test(file.type)) return { label, mime: file.type, data: toBase64(buf), kind: "image", bytes: buf.byteLength };
    throw new Error(`${file.name}: use PDF, image or .txt`);
  }

  async function renderGenerate() {
    const p = hashParams();
    const isCustom = p.get("custom") === "1";
    let subject, courseId = p.get("course") || "custom", sem = +p.get("sem") || 1, course, institution;

    // existing guide (regenerate) takes precedence for prefill
    const existingId = p.get("id");
    const existing = existingId ? getGuide(existingId) : null;

    if (!isCustom) {
      const c = S.catalog.find((x) => x.id === courseId);
      const found = c?.years.flatMap((y) => y.semesters).find((s) => s.sem === sem)?.subjects.find((s) => (s.code || s.name) === p.get("code"));
      if (!found) { location.hash = "#/"; return; }
      subject = { ...found }; course = c.name; institution = c.institution;
    } else {
      const saved = customSubjects().find((x) => genId(x) === existingId);
      const m = existing?.meta || saved || {};
      const c = S.catalog.find((x) => x.id === (m.courseId || courseId));
      courseId = m.courseId || courseId; sem = m.sem || sem;
      subject = { name: existing?.name || saved?.name || "", code: existing?.code || saved?.code || "", units: m.units || saved?.units || [] };
      course = m.course || saved?.course || (c && c.id !== "custom" ? c.name : "");
      institution = m.institution || saved?.institution || (c?.institution || "");
    }
    const prevGuide = existing || getGuide(genId(subject));
    const year = Math.ceil(sem / 2);
    document.title = `Generate — ${subject.name || "New subject"} | SemPrep`;
    const st = await aiStatus();
    const papers = [];

    app.innerHTML = `
      <div class="g-hero">
        <div class="crumbs"><a href="#/">Dashboard</a> / Generate guide</div>
        <h1>${isCustom && !subject.name ? "Add a subject" : esc(subject.name)}</h1>
        <p>${subject.code ? `${esc(subject.code)} · ` : ""}${esc(course || "")}${course ? " · " : ""}Year ${year} · Semester ${sem}${subject.credits ? ` · ${subject.credits} credits` : ""}
          ${subject.source ? ` · <a href="${subject.source}" target="_blank" rel="noopener">units from SRM Helper</a>` : ""}</p>
      </div>

      <div class="az-grid" style="margin-top:24px">
        <div>
          ${isCustom ? `
          <div class="card" style="margin-bottom:16px">
            <h3>Subject</h3>
            <div class="form-grid">
              <label>Subject name<input id="fName" value="${esc(subject.name)}" placeholder="e.g. Compiler Design" required></label>
              <label>Course code<input id="fCode" value="${esc(subject.code)}" placeholder="optional"></label>
              <label>Course / programme<input id="fCourse" value="${esc(course)}" placeholder="e.g. B.Tech CSE"></label>
              <label>University<input id="fInst" value="${esc(institution)}" placeholder="e.g. Anna University"></label>
              <label>Semester<select id="fSem">${Array.from({ length: 10 }, (_, i) => `<option ${i + 1 === sem ? "selected" : ""}>${i + 1}</option>`).join("")}</select></label>
            </div>
          </div>` : ""}
          <div class="card" style="margin-bottom:16px">
            <h3>Units</h3>
            <p class="hint">One unit title per line. ${subject.units?.length ? "Pre-filled with the official titles." : "Add them from your syllabus for a more accurate guide."}</p>
            <textarea id="fUnits" style="min-height:130px;margin-top:8px" placeholder="Unit 1 title&#10;Unit 2 title&#10;…">${esc((subject.units || []).join("\n"))}</textarea>
            <details style="margin-top:10px"><summary class="hint" style="cursor:pointer">Paste full syllabus text (optional)</summary>
              <textarea id="fSyllabus" style="margin-top:8px" placeholder="Topics under each unit, from your syllabus PDF…"></textarea></details>
          </div>
        </div>

        <div>
          ${subject.helper ? `<div class="card" style="margin-bottom:16px" id="helperCard">
            <h3>From THE HELPER <span class="pill ready" style="margin-left:6px">Automatic</span></h3>
            <p class="hint">Papers and material for this subject on <a href="https://www.thehelpers.tech/semesters/${subject.helper.sem}/subjects/${encodeURIComponent(subject.helper.name)}" target="_blank" rel="noopener">thehelpers.tech</a>. Ticked files are read by the AI.</p>
            <div id="helperList" class="hint" style="margin-top:10px">Looking up files…</div>
          </div>` : ""}
          <div class="card" style="margin-bottom:16px">
            <h3>${subject.helper ? "Your own papers (optional)" : `Past papers <span class="pill ready" style="margin-left:6px">Best results</span>`}</h3>
            <p class="hint">Add end-semester / CT / model papers: PDFs (scanned ones work too), phone photos, or text. The guide then ranks questions by how many papers they really appeared in.</p>
            <div class="row" style="margin-top:10px">
              <label class="btn primary" for="fFiles" style="cursor:pointer">+ Add files</label>
              <input id="fFiles" type="file" accept=".pdf,image/*,.txt" multiple hidden>
              <button class="btn" id="fPasteBtn" type="button">+ Paste text</button>
            </div>
            <div id="paperList" style="margin-top:12px"></div>
            <p class="hint" style="margin-top:8px">No papers? You still get a full syllabus-based guide, marked as estimated.</p>
          </div>
          <div class="card">
            <h3>Generate</h3>
            <p class="hint" id="aiLine">${st.ownKey ? "Using your Gemini key (Settings)." : st.server ? "Using this site's AI key." : `No AI key yet. <a href="#/settings">Add a free Gemini key in Settings</a>.`}</p>
            ${prevGuide ? `<p class="hint">A guide already exists (${fmtDate(prevGuide.generated?.at)}${prevGuide.basis === "papers" ? `, from ${prevGuide.papers.length} papers` : ", syllabus-based"}). Generating again replaces it; your ticked progress is kept where items match.</p>` : ""}
            <div class="row" style="margin-top:10px"><button class="btn primary" id="genBtn" ${st.ready ? "" : "disabled"}>Generate study guide</button>
              ${prevGuide ? `<a class="btn" href="#/g/${existingId || genId(subject)}">Open current guide</a>` : ""}</div>
            <div id="genStatus" class="hint" style="margin-top:10px" aria-live="polite"></div>
          </div>
        </div>
      </div>
    `;

    const $list = app.querySelector("#paperList"), $status = app.querySelector("#genStatus");

    /* THE HELPER: fetch this subject's files */
    let helperData = null;
    const KIND = { pyq: ["Past papers", "paper", true], ct: ["CT papers", "reference", true], questionbank: ["Question bank", "reference", true], syllabus: ["Syllabus", "reference", true], notes: ["Notes & resources", "reference", false] };
    if (subject.helper) {
      const $h = app.querySelector("#helperList");
      fetch(`api/helper?sem=${subject.helper.sem}&subject=${encodeURIComponent(subject.helper.name)}`, { signal: AbortSignal.timeout(90000) })
        .then(async (r) => {
          const j = await r.json().catch(() => null);
          if (r.status === 404 || r.status === 405) throw new Error("this copy of SemPrep has no server, so papers can't be fetched automatically. Run it on your PC with the SemPrep shortcut for that");
          if (!r.ok || !j) throw new Error(j && j.message ? j.message : r.status === 503 ? "you're offline" : `error ${r.status}`);
          return j;
        })
        .then((data) => {
          helperData = data;
          if (!data.items.length) { $h.textContent = "No files listed for this subject on THE HELPER yet — add your own papers below."; return; }
          const groups = Object.keys(KIND).map((k) => [k, data.items.filter((i) => i.kind === k)]).filter(([, l]) => l.length);
          $h.innerHTML = groups.map(([k, l]) => `
            <div class="helper-group"><b>${KIND[k][0]}</b> <span class="hint">(${l.length})</span>
              ${l.map((it) => `<label class="helper-item"><input type="checkbox" class="chk" data-url="${esc(it.url)}" data-kind="${k}" ${KIND[k][2] ? "checked" : ""}>
                <span>${esc(it.name)}${k === "notes" && it.folder ? ` <span class="hint">· ${esc(it.folder.split(" / ").pop())}</span>` : ""}</span>
                <a href="${esc(it.url)}" target="_blank" rel="noopener" class="hint">open</a></label>`).join("")}
            </div>`).join("");
        })
        .catch((e) => { $h.innerHTML = `Couldn't reach THE HELPER right now (${esc(e.message)}). You can still add papers yourself below.`; });
    }
    const helperPicked = () => helperData ? [...app.querySelectorAll("#helperList input:checked")].map((el) => {
      const it = helperData.items.find((i) => i.url === el.dataset.url);
      return { label: it.name, url: it.url, kind: it.kind, role: KIND[it.kind][1] };
    }) : [];
    const kindLabel = { text: "text", "pdf-text": "PDF · text read", "pdf-scan": "scanned PDF · AI reads it", image: "photo · AI reads it" };
    const drawPapers = () => {
      $list.innerHTML = papers.map((pp, i) => `
        <div class="paper-row">
          <input value="${esc(pp.label)}" data-i="${i}" aria-label="Paper label (e.g. May 2024)">
          <span class="pill">${kindLabel[pp.kind] || pp.kind}${pp.bytes ? ` · ${(pp.bytes / 1048576).toFixed(1)} MB` : pp.text ? ` · ${Math.round(pp.text.length / 1000)}k chars` : ""}</span>
          <button class="btn" data-del="${i}" aria-label="Remove paper">✕</button>
        </div>`).join("") || `<p class="hint">No papers added.</p>`;
    };
    drawPapers();
    $list.oninput = (e) => { if (e.target.dataset.i != null) papers[+e.target.dataset.i].label = e.target.value.trim() || `Paper ${+e.target.dataset.i + 1}`; };
    $list.onclick = (e) => { if (e.target.dataset.del != null) { papers.splice(+e.target.dataset.del, 1); drawPapers(); } };

    app.querySelector("#fFiles").onchange = async (e) => {
      const files = [...e.target.files]; e.target.value = "";
      for (const f of files) {
        $status.textContent = `Reading ${f.name}…`;
        try { papers.push(await readPaperFile(f)); } catch (err) { $status.textContent = err.message; continue; }
        drawPapers();
      }
      if (/^Reading/.test($status.textContent)) $status.textContent = "";
    };
    app.querySelector("#fPasteBtn").onclick = () => {
      const text = prompt("Paste the question paper text:");
      if (text && text.trim()) { papers.push({ label: `Paper ${papers.length + 1}`, text, kind: "text" }); drawPapers(); }
    };

    app.querySelector("#genBtn").onclick = async () => {
      const btn = app.querySelector("#genBtn");
      if (!navigator.onLine) { $status.innerHTML = `<span style="color:var(--hot)">You're offline. Generating needs the internet. Your saved guides in <a href="#/guides">My Guides</a> still work.</span>`; return; }
      if (isCustom) {
        subject = { name: app.querySelector("#fName").value.trim(), code: app.querySelector("#fCode").value.trim().toUpperCase() };
        course = app.querySelector("#fCourse").value.trim(); institution = app.querySelector("#fInst").value.trim();
        sem = +app.querySelector("#fSem").value;
        if (!subject.name) { $status.textContent = "Enter the subject name first."; return; }
      }
      const units = app.querySelector("#fUnits").value.split("\n").map((s) => s.replace(/^\s*(unit\s*)?\d+\s*[.:)—–-]?\s*/i, "").trim()).filter(Boolean);
      const labels = new Set();
      const cleanPapers = papers.map((pp, i) => {
        let label = pp.label || `Paper ${i + 1}`; while (labels.has(label)) label += " (2)"; labels.add(label);
        return { label, text: pp.text, mime: pp.mime, data: pp.data };
      });
      const input = {
        subject: { ...subject, units }, course, courseId: isCustom ? (courseId || "custom") : courseId, institution,
        year: Math.ceil(sem / 2), sem, units, syllabus: app.querySelector("#fSyllabus").value.trim(), papers: cleanPapers
      };

      const remote = helperPicked().map((r) => { let label = r.label; while (labels.has(label)) label += " (THE HELPER)"; labels.add(label); return { ...r, label }; });
      input.references = [];

      const status = await aiStatus();
      const inlineBytes = cleanPapers.reduce((n, pp) => n + (pp.data ? pp.data.length : 0) + (pp.text ? pp.text.length : 0), 0);
      if (!status.ownKey && inlineBytes > 3.8e6) { $status.innerHTML = `These files are too large to send through the server (max ~4 MB). Add your own Gemini key in <a href="#/settings">Settings</a> to send them directly, or remove a file.`; return; }

      btn.disabled = true;
      const t0 = Date.now();
      let phase = "Starting";
      const remotePapers = remote.filter((r) => r.role === "paper"), remoteRefs = remote.filter((r) => r.role !== "paper");
      const twoStep = cleanPapers.length + remotePapers.length > 0;
      const tick = setInterval(() => { $status.textContent = `${phase}… ${Math.round((Date.now() - t0) / 1000)}s — ${twoStep ? "papers are read in parallel groups, about 3–6 minutes in total" : "about 2–4 minutes"}. Keep this tab open.`; }, 500);
      const key = store.get("ai:key", "");
      const models = store.get("ai:models", "").split(",").map((s) => s.trim()).filter(Boolean);
      const post = async (url, payload) => {
        const r = await fetch(url, { method: "POST", headers: { "content-type": "application/json", "x-access-code": store.get("ai:code", "") }, body: JSON.stringify(payload), signal: AbortSignal.timeout(11 * 60 * 1000) });
        const j = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(j.message || `Server error ${r.status}`);
        return j;
      };
      // own-key mode: THE HELPER files come through our proxy (their host sends no CORS headers)
      const download = async (list) => {
        const docs = [];
        for (const r of list) {
          try {
            const resp = await fetch(`api/helper?file=${encodeURIComponent(r.url)}`, { signal: AbortSignal.timeout(60000) });
            if (resp.ok) docs.push({ label: r.label, kind: r.kind, mime: resp.headers.get("content-type") || "application/pdf", data: toBase64(await resp.arrayBuffer()) });
          } catch { /* skip a file that won't download */ }
        }
        return docs;
      };
      try {
        let result;
        if (twoStep) {
          // STEP 1: read the papers in parallel groups into structured questions; count in code
          let allItems;
          if (status.ownKey) {
            phase = "Step 1 of 2: downloading the papers";
            input.papers.push(...await download(remotePapers));
            allItems = input.papers.slice();
          } else {
            // server mode: THE HELPER files are downloaded server-side, so only their size is a guess
            allItems = [...cleanPapers, ...remotePapers.map((r) => ({ ...r, size: 400000 }))];
          }
          const batches = G.planBatches(allItems);
          let done = 0;
          const setPhase = () => { phase = batches.length > 1 ? `Step 1 of 2: reading the papers (${done}/${batches.length} groups done)` : "Step 1 of 2: reading the papers"; };
          setPhase();
          const readBatch = async (batch) => {
            let lastErr;
            for (let attempt = 0; attempt < 2; attempt++) {
              try {
                let r;
                if (status.ownKey) {
                  const body = G.buildExtractRequest({ ...input, papers: batch });
                  const ex = await G.callGemini(key, body, models);
                  r = { raw: ex.raw, labels: batch.map((p) => p.label).filter((l) => !body.skipped.includes(l)) };
                } else {
                  const ex = await post("api/extract", { subject: input.subject, units, papers: batch.filter((p) => !p.url), remote: batch.filter((p) => p.url) });
                  r = { raw: ex.raw, labels: ex.papers };
                }
                done++; setPhase();
                return r;
              } catch (e) {
                lastErr = e;
                if (/quota|429|exhaust|too long/i.test(e.message)) break; // retrying can't help
              }
            }
            return { error: lastErr };
          };
          const results = await Promise.all(batches.map(readBatch));
          const okBatches = results.filter((r) => r.raw);
          if (!okBatches.length) throw results[0].error || new Error("Couldn't read the papers.");
          // unify topic names across groups (text-only, quick); if it fails, identical names still merge
          let merged = null;
          if (okBatches.length > 1) {
            phase = "Step 1 of 2: matching topics across the papers";
            try {
              merged = status.ownKey
                ? (await G.callGemini(key, G.buildMergeRequest(input, okBatches.map((r) => r.raw)), models)).raw
                : (await post("api/merge", { subject: input.subject, batches: okBatches.map((r) => r.raw) })).raw;
            } catch { merged = null; }
          }
          // every attempted paper is passed in, so a failed group's papers show up as "couldn't read"
          const counted = G.tally(G.mergeBatches(okBatches.map((r) => r.raw), merged), allItems.map((p) => p.label));
          if (!counted.read.length) throw new Error("Couldn't read any questions from the papers. Try again, or add clearer copies.");          input.tally = counted;
          input.papers = counted.read.map((label) => ({ label })); // step 2 gets the counted table, not the PDFs again
          phase = "Step 2 of 2: writing the guide";
        } else {
          phase = "Writing the guide";
        }
        // STEP 2: write the guide (from the counted table, plus syllabus / question bank / CT references)
        if (status.ownKey) {
          input.references.push(...await download(remoteRefs));
          result = await G.callGemini(key, G.buildRequest(input), models);
        } else {
          result = await post("api/generate", { ...input, remote: remoteRefs });
        }
        const guide = G.normalize(result.raw, { ...input, papers: input.papers.map((pp) => ({ label: pp.label })), _model: result.model });
        guide.meta.key = subject.code || subject.name;
        if (subject.helper) guide.helper = { sem: subject.helper.sem, name: subject.helper.name, used: remote.map((r) => r.label) };
        if (!guide.top.length || !guide.units.length) throw new Error("The AI returned an incomplete guide. Try again.");
        if (subject.source) guide.meta.source = subject.source;
        guide.meta.custom = isCustom;
        const id = genId(subject);
        if (!saveGuide(id, guide)) throw new Error("Browser storage is full or blocked — delete an old guide and retry.");
        justSaved = id; // shown on the guide page; the guide is now in My Guides and works offline
        if (isCustom) {
          const list = customSubjects().filter((x) => genId(x) !== id);
          list.push({ courseId: input.courseId, course, institution, sem, year: input.year, code: subject.code, name: subject.name, units });
          store.set("custom-subjects", list);
        }
        clearInterval(tick);
        location.hash = "#/g/" + id;
      } catch (err) {
        clearInterval(tick);
        btn.disabled = false;
        const quota = /429|quota|exhaust/i.test(err.message);
        $status.innerHTML = `<span style="color:var(--hot)">${esc(quota ? "Daily free AI limit reached for now. Try again later, or use another Gemini key in Settings." : err.message)}</span>`;
      }
    };
  }

  /* =========================================================
     MY GUIDES — everything saved on this device; works offline
     ========================================================= */
  function renderGuides() {
    document.title = "My Guides | SemPrep";
    app.innerHTML = `
      <div class="hero-dash"><div class="eyebrow">My Guides</div><h1>Your saved study guides</h1>
        <p>Every guide you generate is saved here automatically and opens without internet.${navigator.onLine ? "" : " <b>You're offline right now, and everything on this page still works.</b>"}</p></div>
      <div class="guides-bar">
        <input class="search" id="mgSearch" type="search" placeholder="Search guides…" aria-label="Search guides">
        <select id="mgSort" aria-label="Sort guides"><option value="recent">Recently made</option><option value="progress">Most studied</option><option value="name">Name A→Z</option></select>
        <button class="btn" id="mgSelAll" type="button">Select</button>
        <button class="btn danger" id="mgRemoveSel" type="button" hidden>Remove selected</button>
        <span class="grow"></span>
        <button class="btn" id="mgBackup" title="Download all guides, progress and dates as one file">Back up</button>
        <label class="btn" for="mgRestore" style="cursor:pointer">Restore</label><input id="mgRestore" type="file" accept="application/json,.json" hidden>
      </div>
      <div id="mgList" class="subjects"></div>
      <p class="hint" id="mgHidden" style="margin-top:12px"></p>
      <p class="hint" id="mgMsg" aria-live="polite" style="margin-top:12px"></p>`;
    const $s = app.querySelector("#mgSearch"), $sort = app.querySelector("#mgSort"), $list = app.querySelector("#mgList"), $msg = app.querySelector("#mgMsg");
    const $selAll = app.querySelector("#mgSelAll"), $rm = app.querySelector("#mgRemoveSel"), $hidden = app.querySelector("#mgHidden");
    const picked = new Set();   // ids ticked for removal
    let shown = [];             // ids currently listed (after search)

    const card = (g) => {
      const pct = progressPct(g.id);
      const full = getGuide(g.id);
      const basis = g.builtin ? "Built-in" : g.basis === "papers" ? `From ${full?.papers?.length || ""} past papers`.replace("From  past", "From past") : "Syllabus-based";
      return `<div class="subj guide-card ${picked.has(g.id) ? "picked" : ""}">
        <label class="gc-pick" title="Select for removal"><input type="checkbox" class="chk" data-pick="${g.id}" ${picked.has(g.id) ? "checked" : ""} aria-label="Select ${esc(g.name)}"></label>
        <span class="code">${esc(g.code || "Custom")}${g.year ? ` · Year ${g.year} · Sem ${g.sem}` : ""}</span>
        <h3><a href="#/g/${g.id}" style="color:inherit">${esc(g.name)}</a></h3>
        <span class="hint">${g.at ? `Saved ${fmtDate(g.at)}` : "Ready-made guide"}</span>
        <div class="mini-progress" aria-label="${pct}% studied"><i style="width:${pct}%"></i></div>
        <div class="meta"><span>${pct}% studied</span><span class="pill ${g.builtin || g.basis === "papers" ? "ready" : "accent"}">${esc(basis)}</span></div>
        <div class="row" style="margin-top:4px"><a class="btn primary" href="#/g/${g.id}">Open</a><button class="btn" data-del="${g.id}" aria-label="Remove ${esc(g.name)}">Remove</button></div>
      </div>`;
    };
    const updateSel = () => {
      for (const id of [...picked]) if (!allGuideEntries().some((g) => g.id === id)) picked.delete(id); // gone elsewhere
      $rm.hidden = !picked.size;
      $rm.textContent = `Remove selected (${picked.size})`;
      $selAll.textContent = shown.length && shown.every((id) => picked.has(id)) ? "Clear selection" : "Select all";
      if (!shown.length) $selAll.textContent = "Select all";
    };
    const drawHidden = () => {
      const n = hiddenGuides().filter((id) => S.guides[id]).length;
      $hidden.innerHTML = n ? `${n} built-in guide${n > 1 ? "s are" : " is"} hidden from this list (still on the Dashboard). <button class="btn" id="mgUnhide" type="button">Show again</button>` : "";
      const u = $hidden.querySelector("#mgUnhide");
      if (u) u.onclick = () => { store.set("hidden-guides", []); updateGuideCount(); draw(); };
    };
    const draw = () => {
      const q = $s.value.trim().toLowerCase();
      const list = allGuideEntries().filter((g) => !q || `${g.name} ${g.code || ""}`.toLowerCase().includes(q));
      const by = $sort.value;
      list.sort((a, b) => by === "name" ? a.name.localeCompare(b.name) : by === "progress" ? progressPct(b.id) - progressPct(a.id) : String(b.at || "").localeCompare(String(a.at || "")));
      shown = list.map((g) => g.id);
      $list.innerHTML = list.length ? list.map(card).join("")
        : `<div class="empty" style="grid-column:1/-1">${q ? "No guide matches that." : `No guides yet. Pick a subject on the <a href="#/">Dashboard</a> and click <b>Generate guide</b>. It's saved here automatically.`}</div>`;
      updateSel(); drawHidden();
    };
    $s.oninput = draw; $sort.onchange = draw;
    $list.onclick = (e) => {
      const id = e.target.dataset && e.target.dataset.del; if (!id) return;
      picked.delete(id); removeWithUndo([id]); draw();
    };
    $list.onchange = (e) => {
      const id = e.target.dataset && e.target.dataset.pick; if (!id) return;
      if (e.target.checked) picked.add(id); else picked.delete(id);
      e.target.closest(".guide-card").classList.toggle("picked", e.target.checked);
      updateSel();
    };
    $selAll.onclick = () => {
      if (shown.length && shown.every((id) => picked.has(id))) shown.forEach((id) => picked.delete(id)); else shown.forEach((id) => picked.add(id));
      draw();
    };
    $rm.onclick = () => { const ids = [...picked]; picked.clear(); removeWithUndo(ids); draw(); };

    app.querySelector("#mgBackup").onclick = () => {
      const items = {};
      for (let i = 0; i < localStorage.length; i++) {
        const full = localStorage.key(i);
        if (!full || !full.startsWith("semprep:")) continue;
        const k = full.slice(8);
        if (NEVER_MIRROR.test(k)) continue; // never the API key
        try { items[k] = JSON.parse(localStorage.getItem(full)); } catch { /* skip unreadable */ }
      }
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify({ app: "semprep", version: 1, savedAt: new Date().toISOString(), items })], { type: "application/json" }));
      a.download = `semprep-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      $msg.textContent = `Backed up ${allGuideEntries().filter((g) => !g.builtin).length} guide(s) plus progress and exam dates. Your API key is not included.`;
    };
    app.querySelector("#mgRestore").onchange = async (e) => {
      const f = e.target.files[0]; e.target.value = ""; if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        if (data.app !== "semprep" || typeof data.items !== "object") throw new Error("not a SemPrep backup");
        let n = 0;
        for (const [k, v] of Object.entries(data.items)) {
          if (!/^[a-z0-9:_.\-]{1,120}$/i.test(k) || NEVER_MIRROR.test(k)) continue;
          if (k === "guides-index" && Array.isArray(v)) { // merge by id, keep the newer entry
            const have = new Map(guideIndex().map((g) => [g.id, g]));
            v.forEach((g) => { const cur = have.get(g.id); if (!cur || String(g.at) > String(cur.at)) have.set(g.id, g); });
            store.set(k, [...have.values()]);
          } else store.set(k, v);
          n++;
        }
        updateGuideCount(); draw();
        $msg.textContent = `Restored ${n} item(s) from ${f.name}.`;
      } catch (err) { $msg.innerHTML = `<span style="color:var(--hot)">Couldn't restore: ${esc(err.message)}.</span>`; }
    };
    draw();
  }

  /* =========================================================
     SETTINGS
     ========================================================= */
  async function renderSettings() {
    document.title = "Settings | SemPrep";
    const st = await aiStatus();
    app.innerHTML = `
      <div class="hero-dash"><div class="eyebrow">Settings</div><h1>AI for guide generation</h1>
        <p>Guides are generated with Google Gemini. ${st.server ? "This computer already has a key saved, so you don't need to add one." : "Add your own free key. It's sent only to Google, and kept in this browser and on this computer."}</p></div>
      <div class="card" style="max-width:640px">
        <div class="form-grid" style="grid-template-columns:1fr">
          <label>Your Gemini API key ${st.server ? "(optional)" : ""}
            <input id="sKey" type="password" autocomplete="off" value="${esc(store.get("ai:key", ""))}" placeholder="AIza…"></label>
          ${st.needsCode ? `<label>Access code for this site<input id="sCode" value="${esc(store.get("ai:code", ""))}"></label>` : ""}
          <label>Model order (advanced — leave empty)<input id="sModels" value="${esc(store.get("ai:models", ""))}" placeholder="${esc(G.MODELS.join(", "))}"></label>
          ${store.get("ai:models", "") && !store.get("ai:models", "").split(",").map((s) => s.trim()).filter(Boolean).every((m) => /^gemini-[a-z0-9.\-]+$/i.test(m)) ? `<p class="hint" style="color:var(--hot)">The model box has something that isn't a model name (names look like gemini-2.5-flash). Invalid entries are ignored and the built-in models are used. Clear the box to remove this note.</p>` : ""}
        </div>
        <p class="hint">Get a free key at <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> → Create API key → paste it in the <b>first box only</b>. The free tier allows a handful of guides per day per model.</p>
        <div class="row"><button class="btn primary" id="sSave">Save</button><button class="btn" id="sClear">Remove key</button><span class="hint" id="sMsg"></span></div>
      </div>`;
    // The key is kept in this browser AND (via the local server) in a file outside
    // OneDrive, so it survives browser resets. That endpoint only accepts same-origin
    // requests from this computer; elsewhere (static hosting) the browser copy is used.
    const keyRequest = (key) => fetch("admin/key", { method: key ? "PUT" : "DELETE", headers: { "content-type": "application/json", "x-semprep": "1" }, body: key ? JSON.stringify({ key }) : undefined, signal: AbortSignal.timeout(5000) });
    app.querySelector("#sSave").onclick = async () => {
      const $m = app.querySelector("#sMsg"), key = app.querySelector("#sKey").value.trim();
      store.set("ai:key", key);
      // keep only real model names; anything else (e.g. "gemini") would only cause errors
      const cleanModels = app.querySelector("#sModels").value.split(",").map((s) => s.trim()).filter((m) => /^gemini-[a-z0-9.\-]+$/i.test(m)).join(", ");
      app.querySelector("#sModels").value = cleanModels;
      store.set("ai:models", cleanModels);
      const c = app.querySelector("#sCode"); if (c) store.set("ai:code", c.value.trim());
      $m.textContent = "Saved in this browser.";
      try {
        const r = await keyRequest(key);
        serverStatus = null;
        if (r.ok) $m.textContent = key ? "Saved in this browser and on this computer, so it survives browser resets." : "Saved.";
        else if (r.status === 400) $m.innerHTML = `<span style="color:var(--hot)">Saved in this browser only: that doesn't look like a Gemini key (they start with AIza).</span>`;
      } catch { /* no local server: the browser copy is enough */ }
    };
    app.querySelector("#sClear").onclick = async () => {
      store.del("ai:key"); app.querySelector("#sKey").value = "";
      try { await keyRequest(""); serverStatus = null; } catch { /* ignore */ }
      app.querySelector("#sMsg").textContent = "Key removed.";
    };
  }

  /* =========================================================
     GUIDE
     ========================================================= */
  const SECTIONS = [
    ["overview", "Overview"], ["top", "Top Questions"], ["units", "Unit-wise"], ["eight", "Part B"],
    ["fifteen", "Part C"], ["predict", "High Probability"], ["formulas", "Formulas"],
    ["revision", "Last-Minute"], ["tips", "Exam Tips"], ["resources", "Resources"]
  ];

  /* Part A: MCQ sheet + quiz (guides that carry a `mcq` bank) */
  const mcqShort = (l) => String(l).replace(/^PYQ /, "");
  function mcqBody(m) {
    const N = m.papers.length;
    const rep = m.families.filter((f) => f.count >= 2).length;
    return `
      <p class="hint">Part A is 20 one-mark MCQs. ${m.questions.length} questions from ${N} papers are listed below, grouped into the topics that keep coming back. ${esc(m.note || "")}</p>
      <h3 class="mcq-h">Last-minute MCQ sheet <span class="hint">— ${rep} repeating topics, most frequent first</span></h3>
      <div class="grid-2">${m.families.map((f) => `
        <div class="card mcq-fam" data-search>
          <div class="fam-head"><h3>${esc(f.title)}</h3><span class="pill ${f.count / N >= 0.6 ? "hot" : f.count / N >= 0.4 ? "accent" : "info"}">${f.count}/${N} papers</span></div>
          <p>${esc(f.tip)}</p>
          <p class="hint">Asked in: ${esc(f.papers.map(mcqShort).join(", "))}</p>
        </div>`).join("")}</div>
      <h3 class="mcq-h" style="margin-top:22px">Practice quiz</h3>
      <div class="mcq-bar">
        <label>Show <select id="mcqMode" aria-label="Which questions">
          <option value="recent">Last 2 papers (most likely to repeat)</option>
          <option value="rep">Topics asked in 4+ papers</option>
          <option value="all">All ${m.questions.length} questions</option></select></label>
        <label>Unit <select id="mcqUnit" aria-label="Unit"><option value="0">All units</option>${m.units.map((u, i) => `<option value="${i + 1}">${i + 1}. ${esc(u)}</option>`).join("")}</select></label>
        <label class="mcq-reveal"><input type="checkbox" id="mcqReveal"> Show answers</label>
        <button class="btn" id="mcqReset" type="button">Restart</button>
        <span class="pill" id="mcqScore">0 of 0 correct</span>
      </div>
      <div id="mcqList" class="mcq-list"></div>`;
  }
  function initMcq(m) {
    const $mode = app.querySelector("#mcqMode"), $unit = app.querySelector("#mcqUnit"), $rev = app.querySelector("#mcqReveal");
    const $list = app.querySelector("#mcqList"), $score = app.querySelector("#mcqScore");
    const famCount = new Map(m.families.map((f) => [f.id, f.count]));
    const N = m.papers.length;
    let shown = [], done = new Map(); // question index -> chosen option
    const L = "ABCD";
    const cardHtml = (q, i) => {
      const f = m.families.find((x) => x.id === q.fam);
      return `<div class="mcq-q" data-i="${i}" data-search>
        <div class="mcq-meta"><span class="pill">${esc(mcqShort(m.papers[q.p]))} · Q${q.n}</span><span class="pill">${esc(m.units[q.unit - 1] || "")}</span>${f ? `<span class="pill ${f.count / N >= 0.6 ? "hot" : "accent"}">${esc(f.title)} · ${f.count}/${N}</span>` : ""}${q.low ? `<span class="pill" title="Answer worked out by hand and less certain: check it in your notes">check answer</span>` : ""}</div>
        <div class="mcq-stem">${esc(q.q)}</div>
        <div class="mcq-opts">${q.o.map((o, k) => `<button type="button" class="mcq-opt" data-k="${k}"><b>${L[k]}</b><span>${esc(o)}</span></button>`).join("")}</div>
        <div class="mcq-res" hidden></div>
      </div>`;
    };
    const mark = (card, q, chosen, reveal) => {
      card.querySelectorAll(".mcq-opt").forEach((b) => {
        const k = +b.dataset.k;
        b.classList.toggle("right", (chosen != null || reveal) && k === q.a);
        b.classList.toggle("wrong", chosen != null && k === chosen && k !== q.a);
      });
      const $r = card.querySelector(".mcq-res");
      $r.hidden = chosen == null && !reveal;
      $r.textContent = chosen == null && !reveal ? "" : `${chosen != null ? (chosen === q.a ? "Correct. " : "Not quite. ") : ""}Answer: ${L[q.a]} — ${q.o[q.a]}${q.low ? " (less certain, verify)" : ""}`;
    };
    const draw = () => {
      const mode = $mode.value, unit = +$unit.value;
      shown = m.questions.map((q, i) => ({ q, i })).filter(({ q }) => (!unit || q.unit === unit) &&
        (mode === "all" || (mode === "recent" && q.p >= N - 2) || (mode === "rep" && q.fam && famCount.get(q.fam) >= 4)));
      // newest paper first, then by question number (already sorted); questions of one family are kept together in "rep"
      if ($mode.value === "rep") shown.sort((a, b) => famCount.get(b.q.fam) - famCount.get(a.q.fam) || String(a.q.fam).localeCompare(String(b.q.fam)) || b.q.p - a.q.p || a.q.n - b.q.n);
      done = new Map();
      $list.innerHTML = shown.length ? shown.map(({ q, i }) => cardHtml(q, i)).join("") : `<p class="hint">No questions for this choice.</p>`;
      if ($rev.checked) $list.querySelectorAll(".mcq-q").forEach((c) => mark(c, m.questions[+c.dataset.i], null, true));
      score();
    };
    const score = () => { const r = [...done].filter(([i, k]) => m.questions[i].a === k).length; $score.textContent = `${r} of ${done.size} correct · ${shown.length} questions`; };
    $list.addEventListener("click", (e) => {
      const b = e.target.closest(".mcq-opt"); if (!b) return;
      const card = b.closest(".mcq-q"), i = +card.dataset.i;
      if (done.has(i)) return;
      done.set(i, +b.dataset.k);
      mark(card, m.questions[i], +b.dataset.k, $rev.checked);
      score();
    });
    $rev.addEventListener("change", () => $list.querySelectorAll(".mcq-q").forEach((c) => { const i = +c.dataset.i; mark(c, m.questions[i], done.has(i) ? done.get(i) : null, $rev.checked); }));
    [$mode, $unit].forEach((el) => el.addEventListener("change", draw));
    app.querySelector("#mcqReset").addEventListener("click", draw);
    draw();
  }

  function renderGuide(id) {
    const g = getGuide(id);
    const isGen = !S.guides[id];
    document.title = `${g.short} — ${g.name} | SemPrep`;
    const prog = getProg(id);
    const chk = (key) => `<input type="checkbox" class="chk" data-key="${key}" ${prog[key] ? "checked" : ""} aria-label="Mark as studied">`;
    const N = g.papers.length;
    const freqDots = (f) => `<span class="freq" title="${f}/${N} papers">${Array.from({ length: N }, (_, i) => `<i class="${i < f ? "on" : ""}"></i>`).join("")}</span>`;
    const stars = (n) => `<span class="stars" title="Importance ${n}/5">${"★".repeat(n)}<span>${"★".repeat(5 - n)}</span></span>`;
    const levelPill = (l) => `<span class="pill ${/hot/i.test(l) ? "hot" : /high/i.test(l) ? "accent" : "info"}">${esc(l)}</span>`;
    const sec = (key, num, title, body) => `<section class="sec" id="sec-${key}"><div class="sec-head"><span class="sec-num">${num}</span><h2>${title}</h2></div>${body}</section>`;
    const callouts = (list) => (list && list.length ? `<div class="grid-2" style="margin-top:12px">${list.map((c) => `<div class="callout ${c.tone}"><h4>${esc(c.title)}</h4><p>${esc(c.text)}</p></div>`).join("")}</div>` : "");
    const subjQ = encodeURIComponent(g.name);
    const res = S.commonResources[id] || [
      { label: `${g.name} — full lecture series on YouTube`, url: `https://www.youtube.com/results?search_query=${subjQ}+full+course`, kind: "Videos" },
      { label: `NPTEL courses on ${g.name}`, url: `https://www.google.com/search?q=${encodeURIComponent("site:nptel.ac.in " + g.name)}`, kind: "Course" },
      { label: `GeeksforGeeks — ${g.name}`, url: `https://www.google.com/search?q=${encodeURIComponent("site:geeksforgeeks.org " + g.name)}`, kind: "Notes" },
      { label: `MIT OpenCourseWare — ${g.name}`, url: `https://ocw.mit.edu/search/?q=${subjQ}`, kind: "Course" },
      ...(g.meta?.source ? [{ label: `Official unit list — SRM Helper`, url: g.meta.source, kind: "Syllabus" }] : [])
    ];
    const regenKey = g.meta?.key || g.code;
    const regenUrl = g.meta && !g.meta.custom && g.meta.courseId && g.meta.courseId !== "custom" && regenKey
      ? `#/new?course=${encodeURIComponent(g.meta.courseId)}&sem=${g.meta.sem}&code=${encodeURIComponent(regenKey)}`
      : `#/new?custom=1&id=${encodeURIComponent(id)}`;
    const paperBased = !isGen || g.basis === "papers";

    app.innerHTML = `
      <div class="g-hero">
        <div class="crumbs"><a href="#/">Dashboard</a> / ${esc(g.code || "Custom")} · ${esc(g.tagline)}</div>
        <h1>${esc(g.name)}</h1>
        <p>${esc(g.summary)}</p>
        ${isGen ? `<div class="callout ${paperBased ? "" : "star"} gen-banner">
          <h4>${paperBased ? `Generated from ${N} past paper${N > 1 ? "s" : ""}` : "Syllabus-based guide — estimated"}</h4>
          <p class="saved-note">${justSaved === id ? "✓ Saved to <a href=\"#/guides\">My Guides</a> automatically." : "Saved in <a href=\"#/guides\">My Guides</a>."} Opens offline, on this device.</p>
          <p>${paperBased && g.generated.method === "counted" ? `Every Part B/C question in ${esc(g.papers.join(", "))} was read and counted on ${fmtDate(g.generated.at)}, so the paper counts are exact. Open "See it in the papers" under any question to check it.${g.generated.unread && g.generated.unread.length ? ` <b>Couldn't read:</b> ${esc(g.generated.unread.join(", "))} — not counted.` : ""}${g.generated.excluded && g.generated.excluded.length ? ` <b>Left out (older exam format):</b> ${esc(g.generated.excluded.map((x) => x.label).join(", "))} — only papers in the current format are counted.` : ""}` : paperBased ? `AI-analysed ${esc(g.papers.join(", "))} on ${fmtDate(g.generated.at)}. Counts are the AI's estimate — regenerate to get exact counts.` : `Made on ${fmtDate(g.generated.at)} from the official units without past papers, so priorities and probabilities are estimates. Add past papers to rebuild it from real exam evidence.`}</p>
          <div class="row" style="margin-top:10px">
            <a class="btn primary" href="${regenUrl}">${paperBased ? "Regenerate / add papers" : "Add past papers"}</a>
            <button class="btn" id="dlBtn">Download guide file</button>
            <button class="btn" id="delBtn">Remove guide</button>
          </div></div>` : ""}
        <div class="g-stats">
          <div class="stat"><b>${paperBased ? N : "—"}</b><span>${paperBased ? `Papers analysed<br>${esc(g.papers.join(" · "))}` : "No papers yet<br>syllabus-based"}</span></div>
          <div class="stat"><b>${g.totalMarks || "—"}</b><span>Marks exam format</span></div>
          <div class="stat"><b id="pctTxt">0%</b><span>Studied</span><div class="progress"><i id="pctBar"></i></div></div>
          <div class="stat"><input type="date" id="examDate" aria-label="Exam date"><span id="countdown">Set your exam date</span></div>
        </div>
      </div>

      <nav class="g-nav" aria-label="Guide sections">
        ${(g.mcq ? [...SECTIONS.slice(0, 2), ["mcq", "MCQs"], ...SECTIONS.slice(2)] : SECTIONS).map(([k, l]) => `<a href="#" data-jump="${k}">${l}</a>`).join("")}
        <div class="g-tools">
          <input class="search" id="gSearch" type="search" placeholder="Search topics…" aria-label="Search this guide">
          <button class="btn" id="printBtn" title="Print or save as PDF">Print / PDF</button>
        </div>
      </nav>

      ${sec("overview", "01", "Exam Format &amp; Pattern", `
        <div class="grid-3">${g.format.map((f) => `<div class="card"><h3>${esc(f.part)}</h3><div class="big">${esc(f.marks)}${/mark/i.test(f.marks) ? "" : " marks"}</div><p>${esc(f.text)}</p></div>`).join("")}</div>
        ${callouts(g.callouts)}`)}

      ${sec("top", "02", `Top ${g.top.length} Must-Study Questions`, `
        <p class="hint">${paperBased ? `Ranked by how often they appeared across ${N} paper${N > 1 ? "s" : ""}.` : "Ranked by estimated importance (★)."} Tick each one when you can answer it without notes.</p>
        <div class="qlist">${g.top.map((t, i) => `
          <div class="q ${prog[K.top(t)] ? "done" : ""}" data-search>
            ${chk(K.top(t))}
            <span class="q-rank">${pad(i + 1)}</span>
            <div><div class="q-title">${esc(t.q)}</div><div class="q-seen">${esc(t.seen)}</div>
              ${t.evidence && t.evidence.length ? `<details class="evidence"><summary>See it in the papers (${t.evidence.length})</summary><ul>${t.evidence.map((e) => `<li><b>${esc(e.paper)}</b> · Q${esc(e.number)}${e.marks ? ` · ${e.marks} marks` : ""} — ${esc(e.text)}</li>`).join("")}</ul></details>` : ""}
              ${learnLinks(t.q, g.name)}</div>
            <div class="q-side">${t.freq != null ? `${freqDots(t.freq)}<span class="pill ${N && t.freq / N >= 0.8 ? "hot" : "accent"}">${t.freq}/${N}</span>` : stars(t.importance || 3)}<span class="pill">${esc(t.marks)}${/mark|mcq/i.test(t.marks) ? "" : " mark"} · U${t.unit}</span></div>
          </div>`).join("")}</div>
        ${g.repeats && g.repeats.length ? `
        <details class="card repeat-table" style="margin-top:12px">
          <summary><b>Full repeat table</b> <span class="hint">— all ${g.repeats.length} topics found in ${N} papers, exact counts</span></summary>
          <div class="table-wrap" style="margin-top:10px"><table>
            <thead><tr><th>Topic</th><th>Unit</th><th>Papers</th><th>Marks</th><th>Appeared in</th></tr></thead>
            <tbody>${g.repeats.map((t) => `<tr data-search><td>${esc(t.name)}</td><td>${t.unit}</td><td><b>${t.papers.length}/${N}</b></td><td>${esc((t.marks || []).join("/"))}</td><td class="hint">${esc(t.papers.join(", "))}</td></tr>`).join("")}</tbody>
          </table></div>
        </details>` : ""}`)}

      ${g.mcq ? sec("mcq", "A", "Part A — MCQs", mcqBody(g.mcq)) : ""}

      ${sec("units", "03", "Unit-wise Topic Analysis", g.units.map((u) => `
        <details class="unit" open>
          <summary><span class="unit-n">UNIT ${u.n}</span><h3>${esc(u.title)}</h3><span class="pill ${/very/i.test(u.weight) ? "hot" : /high/i.test(u.weight) ? "accent" : ""}">${esc(u.weight)} weightage</span></summary>
          <div class="unit-body">
            ${u.topics.map((t, i) => `
              <div class="topic ${prog[K.topic(u, t)] ? "done" : ""}" data-search>
                ${chk(K.topic(u, t))}
                <div><span class="t-text">${esc(t.t)}</span>${t.tag ? `<span class="pill ${/all|every/i.test(t.tag) ? "hot" : ""} t-tag">${esc(t.tag)}</span>` : ""}<br>${learnLinks(t.t, g.name)}</div>
              </div>`).join("")}
            <div class="unit-res">
              ${u.playlist ? `<a class="btn primary" href="${u.playlist}" target="_blank" rel="noopener">▶ Unit ${u.n} playlist</a>` : ""}
              <a class="btn" href="https://www.youtube.com/results?search_query=${encodeURIComponent(`${g.name} ${u.title}`)}" target="_blank" rel="noopener">▶ Unit ${u.n} lectures</a>
            </div>
          </div>
        </details>`).join(""))}

      ${sec("eight", "04", esc(g.eight.title || "Most Repeated 8-Mark Questions (Part B)"), `
        ${g.eight.strategy ? `<div class="callout star" style="margin-bottom:12px"><h4>Strategy</h4><p>${esc(g.eight.strategy)}</p></div>` : ""}
        <div class="grid-2">${g.eight.groups.map((gr) => `
          <div class="card"><h3><span class="sec-num">${esc(gr.q)}</span> &nbsp;Unit ${gr.unit}</h3>
            <ul style="margin:8px 0 0;padding-left:18px">${gr.items.map((it) => `<li data-search style="margin-bottom:6px">${esc(it)}</li>`).join("")}</ul>
          </div>`).join("")}
          ${g.eight.tip ? `<div class="callout"><h4>Quick win</h4><p>${esc(g.eight.tip)}</p></div>` : ""}
        </div>`)}

      ${sec("fifteen", "05", esc(g.fifteen.title || "Most Repeated 15-Mark Questions (Part C)"), `
        ${g.fifteen.note ? `<div class="callout hot" style="margin-bottom:12px"><h4>Pattern</h4><p>${esc(g.fifteen.note)}</p></div>` : ""}
        <div class="qlist">${g.fifteen.items.map((t, i) => `
          <div class="q" data-search style="grid-template-columns:34px 1fr auto">
            <span class="q-rank">${pad(i + 1)}</span>
            <div><div class="q-title">${esc(t.q)}</div><div class="q-seen">${esc(t.seen)}</div>${learnLinks(t.q, g.name)}</div>
            <div class="q-side">${levelPill(t.level)}</div>
          </div>`).join("")}</div>`)}

      ${sec("predict", "06", paperBased ? "High-Probability Questions" : "High-Probability Questions (estimated)", `
        <p class="hint">${esc(g.predict.note)}</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Question / Topic</th><th>Unit</th><th>Type</th><th>Probability</th><th>Reason</th></tr></thead>
          <tbody>${g.predict.rows.map(([t, u, ty, p, r]) => `<tr data-search><td>${esc(t)}</td><td>${u}</td><td>${esc(ty)}${/mark|mcq/i.test(ty) ? "" : "-mark"}</td>
            <td><div class="prob"><div class="bar"><i style="width:${p}%"></i></div><b>${p}%</b></div></td><td class="hint">${esc(r)}</td></tr>`).join("")}</tbody>
        </table></div>
        ${callouts(g.predict.callouts)}`)}

      ${sec("formulas", "07", "Key Formulas, Definitions &amp; Algorithms", `
        <div class="grid-2">${g.formulas.map((f) => `<div class="card" data-search><h3>${esc(f.title)}</h3><pre class="formula">${esc(f.lines.join("\n"))}</pre></div>`).join("")}</div>`)}

      ${sec("revision", "08", "Last-Minute Revision", `
        <p class="hint">Limited time? Start with the first column.</p>
        <div class="grid-3">${[["must", "Definitely revise", "hot"], ["ifTime", "Revise if time allows", "accent"], ["mcq", "Quick facts", "info"]].map(([col, label, tone]) => `
          <div class="card rev-col"><h3 class="pill ${tone}" style="display:inline-block">${label}</h3>
            ${(g.revision[col] || []).map((x) => `<label data-search>${chk(K.rev(col, x))}<span>${esc(x)}</span></label>`).join("")}
          </div>`).join("")}</div>`)}

      ${sec("tips", "09", "Tips for Scoring Well", `
        <div class="grid-2">${g.tips.map((t, i) => `<div class="card tip" data-search><span class="num">${pad(i + 1)}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join("")}</div>`)}

      ${sec("resources", "10", "Free Resources", `
        <p class="hint">Every topic above also has its own ▶ Videos, GfG notes and (where available) Visualize links.</p>
        <div id="helperRes"></div>
        <div class="grid-2">${res.map((r) => `<a class="card" href="${r.url}" target="_blank" rel="noopener" data-search><span class="pill">${esc(r.kind)}</span><h3 style="margin-top:8px">${esc(r.label)}</h3></a>`).join("")}</div>
        <p class="credit">${g.credit ? `Source analysis: ${g.sourceUrl ? `<a href="${g.sourceUrl}" target="_blank" rel="noopener">${esc(g.credit)}</a>` : esc(g.credit)}. ` : `AI-generated with ${esc(g.generated?.model || "Gemini")}. `}Question papers belong to their institution.</p>`)}
    `;

    if (g.mcq) initMcq(g.mcq);

    /* progress */
    const keys = guideKeys(g);
    const updatePct = () => {
      const p = getProg(id), pct = keys.length ? Math.round((keys.filter((k) => p[k]).length / keys.length) * 100) : 0;
      app.querySelector("#pctTxt").textContent = pct + "%";
      app.querySelector("#pctBar").style.width = pct + "%";
    };
    app.onchange = (e) => {
      const el = e.target;
      if (!el.matches(".chk")) return;
      const p = getProg(id); p[el.dataset.key] = el.checked; store.set(progKey(id), p);
      el.closest(".q, .topic")?.classList.toggle("done", el.checked);
      updatePct();
    };
    updatePct();

    /* countdown */
    const $d = app.querySelector("#examDate"), $cd = app.querySelector("#countdown");
    const drawCd = () => {
      if (!$d.value) { $cd.textContent = "Set your exam date"; return; }
      const days = Math.ceil((new Date($d.value + "T09:00") - new Date()) / 864e5);
      $cd.textContent = days > 1 ? `${days} days to the exam` : days === 1 ? "Exam is tomorrow" : days === 0 ? "Exam is today — good luck!" : "Exam date has passed";
    };
    $d.value = store.get("exam:" + id, "");
    $d.addEventListener("change", () => { store.set("exam:" + id, $d.value); drawCd(); });
    drawCd();

    /* section nav */
    const navLinks = [...app.querySelectorAll("[data-jump]")];
    navLinks.forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); app.querySelector("#sec-" + a.dataset.jump)?.scrollIntoView({ behavior: "smooth" }); }));
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", "sec-" + a.dataset.jump === en.target.id));
    }), { rootMargin: "-40% 0px -55% 0px" });
    app.querySelectorAll("section.sec").forEach((s) => io.observe(s));

    /* search */
    app.querySelector("#gSearch").addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      app.querySelectorAll("[data-search]").forEach((el) => el.classList.toggle("hidden-by-search", !!q && !el.textContent.toLowerCase().includes(q)));
      if (q) app.querySelectorAll("details.unit").forEach((d) => (d.open = true));
      // hide sections (and units) with nothing left, and say so when nothing matches at all
      let total = 0;
      app.querySelectorAll("section.sec, details.unit").forEach((s) => {
        const items = s.querySelectorAll("[data-search]");
        const shown = [...items].filter((el) => !el.classList.contains("hidden-by-search")).length;
        if (s.matches("section.sec")) total += shown;
        s.classList.toggle("hidden-by-search", !!q && (items.length === 0 || shown === 0));
      });
      let $none = app.querySelector("#noResults");
      if (!$none) { $none = document.createElement("div"); $none.id = "noResults"; $none.className = "empty"; $none.style.marginTop = "24px"; app.querySelector(".g-nav").after($none); }
      $none.hidden = !(q && total === 0);
      $none.textContent = `Nothing in this guide matches “${e.target.value.trim()}”.`;
    });
    app.querySelector("#printBtn").addEventListener("click", () => window.print());

    /* live study material from THE HELPER */
    const nrm = (s) => String(s).toLowerCase().replace(/\(.*?\)/g, "").replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
    const href = g.helper || S.catalog.flatMap((c) => c.years.flatMap((y) => y.semesters.flatMap((s) => s.subjects)))
      .find((s) => s.helper && ((g.code && s.code === g.code) || nrm(s.name) === nrm(g.name)))?.helper;
    if (href) {
      const $r = app.querySelector("#helperRes");
      const pageUrl = `https://www.thehelpers.tech/semesters/${href.sem}/subjects/${encodeURIComponent(href.name)}`;
      $r.innerHTML = `<p class="hint">Loading study material from THE HELPER…</p>`;
      const LABEL = { pyq: "Past papers", ct: "CT papers", questionbank: "Question bank", syllabus: "Syllabus", notes: "Notes & resources" };
      fetch(`api/helper?sem=${href.sem}&subject=${encodeURIComponent(href.name)}`, { signal: AbortSignal.timeout(90000) })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((d) => {
          if (!d.items.length) throw 0;
          $r.innerHTML = `<div class="card helper-res" style="margin-bottom:12px">
            <h3>Study material from THE HELPER <a class="hint" style="font-weight:400;margin-left:6px" href="${pageUrl}" target="_blank" rel="noopener">open subject ↗</a></h3>
            <div class="grid-2" style="margin-top:10px">${Object.keys(LABEL).map((k) => [k, d.items.filter((i) => i.kind === k)]).filter(([, l]) => l.length).map(([k, l]) => `
              <div><b class="hint" style="text-transform:uppercase;letter-spacing:.08em;font-size:11px">${LABEL[k]}</b>
                <ul style="margin:6px 0 0;padding-left:18px">${l.map((it) => `<li data-search><a href="${esc(it.url)}" target="_blank" rel="noopener">${esc(it.name)}</a>${k === "notes" && it.folder.includes("/") ? ` <span class="hint">· ${esc(it.folder.split(" / ").pop())}</span>` : ""}</li>`).join("")}</ul></div>`).join("")}</div>
            <p class="hint" style="margin-top:10px">Shared by students on <a href="${pageUrl}" target="_blank" rel="noopener">THE HELPER</a>. Papers belong to SRMIST.</p></div>`;
        })
        .catch(() => { $r.innerHTML = `<p class="hint">Papers and notes for this subject: <a href="${pageUrl}" target="_blank" rel="noopener">THE HELPER ↗</a></p>`; });
    }

    /* generated-guide actions */
    if (isGen) {
      app.querySelector("#dlBtn").onclick = () => {
        const fileId = (g.code || slug(g.name)).toLowerCase();
        const js = `// Generated by SemPrep on ${g.generated.at}. To ship it as a built-in guide:\n// save as data/guides/${fileId}.js, add a <script> tag in index.html,\n// and map the course code in S.builtinGuides (data/catalog.js).\nwindow.SEMPREP = window.SEMPREP || { guides: {} };\nwindow.SEMPREP.guides[${JSON.stringify(fileId)}] = ${JSON.stringify(g, null, 2)};\n`;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([js], { type: "text/javascript" }));
        a.download = `${fileId}.js`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      };
      app.querySelector("#delBtn").onclick = () => { removeWithUndo([id]); location.hash = "#/guides"; };
    }
  }

  /* =========================================================
     PAPER ANALYZER — keyword frequency across pasted papers
     ========================================================= */
  const STOP = new Set("the a an and or of to in for on with by is are be as at from that this using use given find explain write algorithm algorithms marks mark what how why which its it into any all each draw show between example examples suitable briefly describe discuss define state analyze analyse obtain apply solve following problem method time complexity also give".split(" "));

  function renderAnalyzer() {
    document.title = "Paper Analyzer | SemPrep";
    const saved = store.get("analyzer", null) || {
      papers: [{ name: "Paper 1", text: "" }, { name: "Paper 2", text: "" }, { name: "Paper 3", text: "" }],
      topics: "LCS: longest common subsequence, lcs\nHuffman Coding: huffman\nN-Queens: queen\nRecurrence: recurrence, recursion tree, master theorem, substitution\nQuicksort: quick sort, quicksort\nMatrix Chain: matrix chain\nKnapsack: knapsack\nRabin-Karp: rabin\nNP-Complete: np-complete, np complete, np-hard, np hard, 3-sat\nStrassen: strassen"
    };

    app.innerHTML = `
      <div class="hero-dash">
        <div class="eyebrow">Paper Analyzer</div>
        <h1>Count what repeats in your past papers.</h1>
        <p>A quick manual check: paste the questions from each paper, list topics with keywords, and get an exact frequency ranking. (To build a full guide from papers, use <b>Generate guide</b> on any subject instead.) Everything stays in this browser.</p>
      </div>
      <div class="az-grid">
        <div class="card">
          <h3>1 · Past papers</h3>
          <p class="hint">One box per paper. Paste the question text.</p>
          <div id="papers" style="margin-top:12px"></div>
          <div class="row"><button class="btn" id="addPaper">+ Add paper</button><button class="btn" id="suggest">Suggest topics from papers</button></div>
        </div>
        <div class="card">
          <h3>2 · Topics &amp; keywords</h3>
          <p class="hint">One topic per line: <code>Topic name: keyword, another keyword</code>. Matching ignores case.</p>
          <textarea id="topics" style="min-height:320px;margin-top:12px">${esc(saved.topics)}</textarea>
          <div class="row" style="margin-top:10px"><button class="btn primary" id="run">Analyze papers</button><button class="btn" id="clear">Reset</button></div>
        </div>
      </div>
      <section class="sec" id="azOut"></section>
    `;

    const $papers = app.querySelector("#papers"), $topics = app.querySelector("#topics"), $out = app.querySelector("#azOut");
    const papers = saved.papers;
    const drawPapers = () => {
      $papers.innerHTML = papers.map((p, i) => `
        <div class="paper">
          <div class="row"><input data-i="${i}" data-f="name" value="${esc(p.name)}" aria-label="Paper name" style="flex:1">
          ${papers.length > 1 ? `<button class="btn" data-del="${i}" aria-label="Remove paper">✕</button>` : ""}</div>
          <textarea data-i="${i}" data-f="text" placeholder="Paste questions from ${esc(p.name)}…">${esc(p.text)}</textarea>
        </div>`).join("");
    };
    const save = () => store.set("analyzer", { papers, topics: $topics.value });
    drawPapers();

    $papers.addEventListener("input", (e) => { const el = e.target; if (el.dataset.i == null) return; papers[+el.dataset.i][el.dataset.f] = el.value; save(); });
    $papers.addEventListener("click", (e) => { const d = e.target.dataset.del; if (d == null) return; papers.splice(+d, 1); drawPapers(); save(); });
    $topics.addEventListener("input", save);
    app.querySelector("#addPaper").onclick = () => { papers.push({ name: "Paper " + (papers.length + 1), text: "" }); drawPapers(); save(); };
    app.querySelector("#clear").onclick = () => { if (confirm("Clear all pasted papers and topics?")) { store.del("analyzer"); renderAnalyzer(); } };

    app.querySelector("#suggest").onclick = () => {
      const seenIn = new Map();
      papers.forEach((p, pi) => {
        const words = p.text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter(Boolean);
        const local = new Set();
        for (let n = 2; n <= 3; n++) for (let i = 0; i + n <= words.length; i++) {
          const gram = words.slice(i, i + n);
          if (STOP.has(gram[0]) || STOP.has(gram[n - 1]) || gram.some((w) => /^\d+$/.test(w) || w.length < 3)) continue;
          local.add(gram.join(" "));
        }
        local.forEach((gm) => { if (!seenIn.has(gm)) seenIn.set(gm, new Set()); seenIn.get(gm).add(pi); });
      });
      const ranked = [...seenIn].filter(([, s]) => s.size > 1).sort((a, b) => b[1].size - a[1].size || b[0].length - a[0].length);
      const picked = [];
      for (const [gm] of ranked) { if (picked.some((p) => p.includes(gm) || gm.includes(p))) continue; picked.push(gm); if (picked.length >= 25) break; }
      if (!picked.length) { alert("Paste at least two papers first — suggestions are phrases that repeat across papers."); return; }
      $topics.value = ($topics.value.trim() ? $topics.value.trim() + "\n" : "") + picked.map((gm) => `${gm.replace(/\b\w/g, (c) => c.toUpperCase())}: ${gm}`).join("\n");
      save();
    };

    app.querySelector("#run").onclick = () => {
      const used = papers.filter((p) => p.text.trim());
      if (!used.length) { $out.innerHTML = `<div class="empty">Paste at least one paper to analyze.</div>`; return; }
      const topics = $topics.value.split("\n").map((l) => l.trim()).filter(Boolean).map((l) => {
        const i = l.indexOf(":");
        const [name, kw] = i >= 0 ? [l.slice(0, i), l.slice(i + 1)] : [l, l];
        return { name: name.trim(), kws: kw.split(",").map((k) => k.trim().toLowerCase()).filter(Boolean) };
      });
      const N = used.length;
      const rows = topics.map((t) => {
        const hits = used.map((p) => { const txt = p.text.toLowerCase(); return t.kws.reduce((n, k) => n + txt.split(k).length - 1, 0); });
        return { ...t, papers: used.filter((_, i) => hits[i] > 0).map((p) => p.name), count: hits.filter((h) => h > 0).length, total: hits.reduce((a, b) => a + b, 0) };
      }).sort((a, b) => b.count - a.count || b.total - a.total);
      const tier = (c) => (c / N >= 0.8 ? ["Must study", "hot"] : c / N >= 0.5 ? ["High", "accent"] : c > 0 ? ["Watch", "info"] : ["Not seen", ""]);
      $out.innerHTML = `
        <div class="sec-head"><span class="sec-num">→</span><h2>Ranking across ${N} paper${N > 1 ? "s" : ""}</h2></div>
        <div class="table-wrap"><table>
          <thead><tr><th>#</th><th>Topic</th><th>Papers</th><th>Mentions</th><th>Priority</th><th>Seen in</th></tr></thead>
          <tbody>${rows.map((r, i) => { const [lab, tone] = tier(r.count); return `<tr>
            <td>${pad(i + 1)}</td><td>${esc(r.name)}<br>${learnLinks(r.name, "")}</td>
            <td><div class="prob"><div class="bar"><i style="width:${(r.count / N) * 100}%"></i></div><b>${r.count}/${N}</b></div></td>
            <td>${r.total}</td><td><span class="pill ${tone}">${lab}</span></td><td class="hint">${esc(r.papers.join(", ") || "—")}</td></tr>`; }).join("")}</tbody>
        </table></div>`;
      $out.scrollIntoView({ behavior: "smooth" });
    };
  }

  /* ---------- installable + works offline ---------- */
  const $net = document.getElementById("netPill"), $install = document.getElementById("installBtn");
  const syncNet = () => { if ($net) $net.hidden = navigator.onLine; };
  window.addEventListener("online", syncNet); window.addEventListener("offline", syncNet); syncNet();
  let installPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installPrompt = e; if ($install) $install.hidden = false; });
  window.addEventListener("appinstalled", () => { installPrompt = null; if ($install) $install.hidden = true; });
  if ($install) $install.onclick = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    try { await installPrompt.userChoice; } catch { /* dismissed */ }
    installPrompt = null; $install.hidden = true;
  };
  if ("serviceWorker" in navigator && (location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(location.hostname))) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => { /* app still works online */ }));
  }

  syncWithDisk().finally(route);
})();
