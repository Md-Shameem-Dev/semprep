/*
 * Catalog: Course -> Year -> Semester -> Subjects.
 * SRMIST subjects come from data/srm-2021.js (imported from SRM Helper).
 * Hand-built guides (data/guides/*.js) are attached by course code in
 * BUILTIN_GUIDES; every other subject gets an AI-generated guide on demand.
 * Students can also add their own course/subject ("custom").
 */
window.SEMPREP = window.SEMPREP || { guides: {} };

(function () {
  const S = window.SEMPREP;

  S.builtinGuides = { "21CSC204J": "srm-21csc204j", "21CSC301T": "gen-21csc301t", "21MAB302T": "gen-discrete-mathematics", "21CSC302J": "gen-21csc302j" };

  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  // Match names across the two sites ("Physics-Mechanics" = "Physics: Mechanics").
  const norm = (s) => String(s).toLowerCase().replace(/\(.*?\)/g, "").replace(/&/g, "and").replace(/thoery/g, "theory").replace(/[^a-z0-9]/g, "");
  const SKIP = /^(professional elective|open elective|project & mooc|major project|internship)/i;
  const helper = S.helperSubjects || {};
  const helperRef = (name, sem) => {
    const n = norm(name);
    const same = (helper[sem] || []).find((h) => norm(h) === n);
    if (same) return { sem, name: same };
    for (const s of Object.keys(helper)) { const h = helper[s].find((x) => norm(x) === n); if (h) return { sem: +s, name: h }; }
    return null;
  };

  const subjectsFor = (sem) => {
    const list = S.srm2021
      .filter((r) => r[0] === sem)
      .map(([, code, name, short, credits, slug, units]) => ({
        code, name, short, credits, units,
        source: `https://srmhelper.pro/subjects/${slug}/`,
        helper: helperRef(name, sem)
      }));
    // Subjects only THE HELPER lists (other branches, electives) — no code/units
    // known; the generator reads the syllabus PDF from THE HELPER instead.
    const have = new Set(list.map((s) => norm(s.name)));
    for (const h of helper[sem] || []) {
      if (SKIP.test(h) || have.has(norm(h))) continue;
      have.add(norm(h));
      list.push({ code: "", name: h.replace(/\s*\(([^)]*)\)\s*$/, (m, x) => (/^[A-Z]{2,5}$/.test(x) ? "" : m)).trim(), short: (h.match(/\(([A-Z]{2,5})\)\s*$/) || [])[1] || "", units: [], helper: { sem, name: h } });
    }
    return list;
  };

  S.catalog = [
    {
      id: "srmist-2021",
      name: "SRMIST — B.Tech (2021 Regulation)",
      institution: "SRM Institute of Science and Technology",
      note: "Papers, question banks, syllabus and notes are pulled automatically from THE HELPER (thehelpers.tech). Course codes and unit titles from SRM Helper (srmhelper.pro). Semester 8 is the major project / internship.",
      years: [1, 2, 3, 4].map((year) => ({
        year,
        semesters: semesters.filter((s) => Math.ceil(s / 2) === year).map((sem) => ({ sem, subjects: subjectsFor(sem) }))
      }))
    },
    {
      id: "custom",
      name: "Other university / course",
      institution: "",
      note: "Add any subject from any university. Give its units or paste the syllabus, and add past papers for the best result.",
      years: [1, 2, 3, 4, 5].map((year) => ({
        year,
        semesters: [year * 2 - 1, year * 2].map((sem) => ({ sem, subjects: [] }))
      }))
    }
  ];

  /* Free, verified resources shown on built-in guides. */
  S.commonResources = {
    "srm-21csc204j": [
      { label: "MIT OCW 6.046J — Design & Analysis of Algorithms", url: "https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/", kind: "Course" },
      { label: "NPTEL — DAA (Prof. Madhavan Mukund, CMI)", url: "https://nptel.ac.in/courses/106106131", kind: "Course" },
      { label: "NPTEL — DAA (IIT Bombay)", url: "https://nptel.ac.in/courses/106101060", kind: "Course" },
      { label: "VisuAlgo — animated sorting, graphs, MST, shortest paths", url: "https://visualgo.net/en", kind: "Visualizer" },
      { label: "USF Galles — LCS, N-Queens, Floyd-Warshall animations", url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html", kind: "Visualizer" },
      { label: "GeeksforGeeks — Analysis of Algorithms", url: "https://www.geeksforgeeks.org/design-and-analysis-of-algorithms/", kind: "Notes" }
    ]
  };
})();
