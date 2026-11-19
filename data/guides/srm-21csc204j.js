/*
 * DAA — 21CSC204J (SRMIST). Content from the analysis of 5 previous-year
 * papers (May 2023 – Dec 2025) published at daa-semester-important.vercel.app
 * (developed by Vakul, IG: Vakul_23). Question papers belong to the institution.
 */
window.SEMPREP = window.SEMPREP || { guides: {} };

window.SEMPREP.guides["srm-21csc204j"] = {
  code: "21CSC204J",
  name: "Design & Analysis of Algorithms",
  short: "DAA",
  tagline: "Fourth semester · B.Tech / M.Tech Integrated",
  summary:
    "Deep analysis of 5 previous-year papers (May 2023 – Dec 2025). Every repeated question, key concept and exam trend, organised for exam performance.",
  papers: ["May 2023", "Jul 2023", "Nov 2024", "May 2025", "Dec 2025"],
  totalMarks: 75,
  credit: "Analysis by Vakul (IG: Vakul_23) — daa-semester-important.vercel.app",
  sourceUrl: "https://daa-semester-important.vercel.app/",

  format: [
    { part: "Part A", marks: "20 × 1 = 20", text: "MCQs on the OMR sheet within the first 40 minutes. Covers all 5 units equally: definitions, time complexities, identifying the paradigm." },
    { part: "Part B", marks: "5 × 8 = 40", text: "Q21–Q25, each with an either/or choice. One question per unit. Mix of derivation, application and explanation." },
    { part: "Part C", marks: "1 × 15 = 15", text: "Answer one of Q26 / Q27. Long-form algorithm design, trace and analysis. Usually from Unit 2 (D&C) or Unit 3 (DP / Greedy)." }
  ],
  callouts: [
    { tone: "hot", title: "Hottest units", text: "Unit 2 (Divide & Conquer) and Unit 3 (DP + Greedy) dominate — about 55% of Part B and C marks together." },
    { tone: "star", title: "In every paper", text: "LCS (DP), Huffman Coding (Greedy), N-Queens (Backtracking) and Recurrence Relations appeared in every paper examined." }
  ],

  top: [
    { q: "Longest Common Subsequence (LCS) using Dynamic Programming — construct 2D table, trace solution", seen: "May 2023, Jul 2023, Nov 2024, May 2025, Dec 2025 — all 5 papers", freq: 5, marks: "8", unit: 3 },
    { q: "Huffman Coding — construct tree, encode characters, explain greedy choice & optimal substructure", seen: "Jul 2023, Nov 2024, May 2025, Dec 2025 + MCQ in all", freq: 5, marks: "8", unit: 3 },
    { q: "N-Queens Problem using Backtracking — state-space tree, PLACE() function, algorithm trace", seen: "May 2023, Jul 2023, Nov 2024, May 2025, Dec 2025", freq: 5, marks: "8–15", unit: 4 },
    { q: "Recurrence Relations — Recursion Tree Method, Substitution Method, Master Theorem", seen: "All 5 papers have at least one recurrence question in Part B", freq: 5, marks: "8", unit: 1 },
    { q: "Quicksort — algorithm, time complexity analysis, worst/best/average cases, pivot selection", seen: "May 2023, May 2025, Dec 2025 (Part C), Nov 2024 (MCQ)", freq: 4, marks: "8–15", unit: 2 },
    { q: "Matrix Chain Multiplication — DP table construction, optimal parenthesization", seen: "Jul 2023, May 2025 (Part C), Nov 2024, Dec 2025 (implied in OBST)", freq: 4, marks: "8–15", unit: 3 },
    { q: "Fractional Knapsack (Greedy) — sort by value/weight ratio, fill greedily, pseudocode", seen: "Jul 2023, Nov 2024 (Part C), May 2023 MCQ; often contrasted with 0/1", freq: 4, marks: "8–15", unit: 3 },
    { q: "Rabin-Karp String Matching — hashing technique, preprocessing time, spurious hits", seen: "Jul 2023, May 2025, Dec 2025 — very consistent in recent papers", freq: 4, marks: "8", unit: 5 },
    { q: "NP-Hard & NP-Complete — definitions, differences, examples, polynomial reduction, SAT/3-SAT", seen: "May 2023, Jul 2023, Nov 2024, May 2025, Dec 2025", freq: 5, marks: "8", unit: 5 },
    { q: "Strassen's Matrix Multiplication — recurrence T(N)=7T(N/2)+O(N²), time complexity derivation", seen: "Nov 2024, May 2025, Dec 2025 — growing trend", freq: 3, marks: "8", unit: 2 },
    { q: "Merge Sort — algorithm, trace on example, recurrence relation, stability, worst case", seen: "May 2025, Dec 2025; recurrence appears in all papers", freq: 4, marks: "8", unit: 2 },
    { q: "Subset Sum Problem using Backtracking — state-space tree construction, pruning conditions", seen: "Jul 2023, May 2025, Dec 2025; often paired with N-Queens", freq: 3, marks: "8", unit: 4 },
    { q: "Floyd-Warshall Algorithm — all-pairs shortest path, matrix iteration, O(V³)", seen: "May 2023, Dec 2025; MCQ form in others", freq: 3, marks: "8", unit: 3 },
    { q: "Optimal Binary Search Tree — e-table, w-table, root-table, recurrence relations", seen: "Jul 2023 (MCQ), Nov 2024, Dec 2025 (Part C)", freq: 3, marks: "8–15", unit: 3 },
    { q: "Branch & Bound for TSP — bounding function, state-space tree, pruning, optimal tour", seen: "Jul 2023, Nov 2024, May 2025, Dec 2025", freq: 4, marks: "8", unit: 4 },
    { q: "Minimum Spanning Tree — Kruskal's vs Prim's, algorithm comparison, MST properties", seen: "May 2023, Jul 2023, Nov 2024; MCQ in Dec 2025", freq: 3, marks: "8", unit: 3 },
    { q: "Big-O, Omega, Theta Notations — graphical representation, mathematical definitions", seen: "Nov 2024 (8-mark), MCQ in all 5 papers", freq: 5, marks: "MCQ + 8", unit: 1 },
    { q: "Vertex Cover Problem — approximation algorithm, 2-approximation guarantee", seen: "Jul 2023, Nov 2024 (Part C), Dec 2025", freq: 3, marks: "8–15", unit: 5 },
    { q: "Closest Pair of Points (D&C) — algorithm, merge step 7-point proof, O(n log n)", seen: "Jul 2023 (Part C), Nov 2024 MCQ, Dec 2025", freq: 3, marks: "8–15", unit: 2 },
    { q: "Randomized Quicksort / Randomized Algorithms — Las Vegas vs Monte Carlo, hiring problem", seen: "May 2023, Nov 2024, Dec 2025 MCQs; Nov 2024 Part B", freq: 3, marks: "8", unit: 5 }
  ],

  units: [
    {
      n: 1, title: "Algorithm Analysis Fundamentals", weight: "High",
      playlist: "https://www.youtube.com/watch?v=EolP-WNP-Zc&list=PLERZXVMwiajpac_R04Wy9q0XOZaEFDGgC",
      topics: [
        { t: "Asymptotic Notations (O, Ω, Θ, o, ω) — definitions, graphs, mathematical proofs", tag: "Every paper" },
        { t: "Time & Space Complexity Analysis — operation count method, step-count method" },
        { t: "Recurrence Relations — Recursion Tree, Substitution (guess & verify), Master Theorem", tag: "Every paper" },
        { t: "Insertion Sort — best / worst / average cases, insertion logic", tag: "4/5" },
        { t: "Algorithm properties — Definiteness, Finiteness, Effectiveness, Correctness" },
        { t: "Growth rate order — O(1) < O(log log n) < O(log n) < O((log n)²) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ)" },
        { t: "Master Theorem cases — all 3 with examples T(n)=4T(n/4)+n, T(n)=4T(n/2)+n²" },
        { t: "BFS / DFS — data structures and traversal", tag: "3/5" }
      ]
    },
    {
      n: 2, title: "Divide & Conquer", weight: "Very High",
      topics: [
        { t: "Merge Sort — recurrence T(n)=2T(n/2)+O(n), stability, trace on examples", tag: "4/5" },
        { t: "Quicksort — pivot selection, worst case O(n²), average O(n log n), partition", tag: "4/5" },
        { t: "Strassen's Matrix Multiplication — T(N)=7T(N/2)+O(N²) → O(N^2.81)", tag: "3/5" },
        { t: "Closest Pair of Points — strip algorithm, 7-point proof in merge step, O(n log n)", tag: "3/5" },
        { t: "Maximum Subarray Sum (Kadane's / D&C) — recurrence, negative array handling", tag: "3/5" },
        { t: "Convex Hull — Quickhull algorithm, O(n log n) average case", tag: "2/5" },
        { t: "Binary Search — Θ(1) best, Θ(log n) average & worst" },
        { t: "Min-Max finding — comparisons: naive 2N−2, optimised 3N/2−2" }
      ]
    },
    {
      n: 3, title: "Greedy & Dynamic Programming", weight: "Very High",
      topics: [
        { t: "Longest Common Subsequence (LCS) — 2D DP table, O(mn)", tag: "All 5 papers" },
        { t: "Huffman Coding — min-heap construction, encode, greedy proof, compression ratio", tag: "All 5 papers" },
        { t: "Matrix Chain Multiplication — cost table, split table, O(n³)", tag: "4/5" },
        { t: "Fractional Knapsack — sort by v/w ratio, greedy selection, pseudocode", tag: "4/5" },
        { t: "0/1 Knapsack — DP table, cannot be solved greedily, compare with fractional", tag: "4/5 MCQ" },
        { t: "Optimal Binary Search Tree — recurrences for e[i,j], w[i,j], root[i,j], O(n³)", tag: "3/5" },
        { t: "Minimum Spanning Tree — Kruskal's (Union-Find) vs Prim's (priority queue)", tag: "3/5" },
        { t: "Floyd-Warshall — all-pairs shortest path, D⁽ᵏ⁾ matrices, O(V³)", tag: "3/5" },
        { t: "Dynamic Programming properties — optimal substructure + overlapping subproblems" }
      ]
    },
    {
      n: 4, title: "Backtracking & Branch and Bound", weight: "High",
      topics: [
        { t: "N-Queens Problem — PLACE(k) function, state-space tree, solutions for N=4,5,8", tag: "All 5 papers" },
        { t: "Subset Sum Problem — promising / non-promising conditions, bounding inequalities", tag: "4/5" },
        { t: "Hamiltonian Circuit — backtracking algorithm, adjacency check, state-space tree", tag: "3/5" },
        { t: "Branch and Bound for TSP — lower-bound cost function, pruning", tag: "4/5" },
        { t: "Backtracking vs Branch & Bound — key differences, when to use each", tag: "Every paper MCQ" },
        { t: "Graph Coloring — chromatic number, chromatic index, m-coloring" },
        { t: "State-space tree terminology — live node, dead node, E-node" }
      ]
    },
    {
      n: 5, title: "Advanced Topics (NP, String Matching, Randomized)", weight: "High",
      topics: [
        { t: "P, NP, NP-Hard, NP-Complete — definitions, relationships, class diagram", tag: "All 5 papers" },
        { t: "SAT & 3-SAT — NP-completeness proof, CNF, 3-SAT vs 2-SAT", tag: "3/5" },
        { t: "Rabin-Karp Algorithm — rolling hash, spurious hits, preprocessing Θ(m), matching Θ((n−m+1)m)", tag: "4/5" },
        { t: "Vertex Cover Problem — 2-approximation algorithm, NP-Hard classification", tag: "3/5" },
        { t: "Randomized Algorithms — Las Vegas vs Monte Carlo, hiring problem, randomized quicksort", tag: "3/5" },
        { t: "Polynomial Reduction — reducing SAT → B to prove NP-completeness" },
        { t: "Hamiltonian Cycle as an NP-Complete problem" }
      ]
    }
  ],

  eight: {
    strategy: "Part B has 5 questions × 2 choices. Know at least one option per question well. Q21 = Unit 1, Q22 = Unit 2, Q23 = Unit 3, Q24 = Unit 4, Q25 = Unit 5.",
    groups: [
      { q: "Q21", unit: 1, items: [
        "Recursion Tree for T(n)=T(n/3)+T(2n/3)+n — draw the full tree, calculate levels",
        "Big-O, Omega, Theta — mathematical definitions + graph + examples",
        "Solve T(n)=2T(n−1) — substitution method, show O(2ⁿ)",
        "Insertion Sort analysis — best Ω(n), worst O(n²), average Θ(n²)",
        "Master Theorem: T(n)=4T(n/4)+n → O(n log n); T(n)=4T(n/2)+n² → O(n² log n)"
      ]},
      { q: "Q22", unit: 2, items: [
        "Merge Sort trace + recurrence — sort letters alphabetically, prove worst case",
        "Strassen's Matrix Multiplication — 7 multiplications, recurrence, O(n^2.81)",
        "Maximum Subarray (D&C) — FIND-MAXIMUM-SUBARRAY, recurrence",
        "Closest Pair of Points — 7-point strip proof, O(n log n)",
        "Convex Hull (Quickhull) — O(n log n) algorithm"
      ]},
      { q: "Q23", unit: 3, items: [
        "LCS with specific strings — build full 2D table, trace back the LCS",
        "Huffman Coding with given frequencies — draw tree, assign codes, average bits",
        "Huffman for MISSISSIPPI — compression ratio vs fixed-length",
        "Matrix Chain Multiplication — fill m-table, find optimal split",
        "Fractional Knapsack with W=60 and items A, B, C, D"
      ]},
      { q: "Q24", unit: 4, items: [
        "Subset Sum — A={1,3,4,5}, d=11 or n=4, Sum=13, w={3,4,5,6}",
        "Floyd-Warshall on a given matrix — show D⁽ᵏ⁾ after each iteration",
        "Branch & Bound for TSP — given distance matrix, draw state-space tree",
        "N-Queens (4 or 5 queens) — full solution, backtracking trace",
        "Hamiltonian Circuit in a given graph — all cycles"
      ]},
      { q: "Q25", unit: 5, items: [
        "Rabin-Karp — algorithm, modulo q example, count spurious hits",
        "NP-Hard vs NP-Complete — definitions, examples, Hamiltonian cycle proof",
        "3-SAT NP-Completeness — structure, comparison with 2-SAT and SAT",
        "Randomized Quicksort — algorithm + complexity analysis",
        "Vertex Cover — construct, 2-approximation guarantee"
      ]}
    ],
    tip: "Structure every 8-mark answer as Definition → Algorithm / Steps → Example Trace → Time Complexity → Space Complexity."
  },

  fifteen: {
    note: "Q26 or Q27 — choose one. Recent trend: Q26 = sorting / D&C design, Q27 = DP (Matrix Chain or OBST) or Backtracking (Hamiltonian / N-Queens). Prepare both.",
    items: [
      { q: "Quicksort — design the algorithm, apply to S,O,R,T,I,N,G, draw recursion tree, analyse recurrence, worst case", seen: "Dec 2025 Q26; May 2025 Q26 (pivot design); Jul 2023 Q27 (bolt-nut matching via Quicksort)", level: "Hot" },
      { q: "Matrix Chain Multiplication — 4 matrices, all parenthesizations, DP table, minimum multiplications, O(n³)", seen: "May 2025 Q27; Nov 2024 MCQ; Jul 2023 Q23", level: "High" },
      { q: "Optimal Binary Search Tree — given pᵢ and qᵢ, fill e / w / root tables, recurrences, O(n³)", seen: "Dec 2025 Q27; Nov 2024 as illustration; Jul 2023 MCQ", level: "Likely" },
      { q: "Fractional Knapsack — full algorithm, apply to given items (W=60, 5 items), optimal solution, complexity", seen: "Nov 2024 Q26; Jul 2023 Q22b", level: "Likely" },
      { q: "Hamiltonian Cycles using Backtracking — full state-space tree, all cycles in a given graph", seen: "Jul 2023 Q26", level: "Watch" },
      { q: "Vertex Cover — explain, apply greedy to a given graph, find minimum vertex cover, complexity", seen: "Nov 2024 Q27; Jul 2023 Q24b", level: "Watch" }
    ]
  },

  predict: {
    note: "Based on topic rotation, recent emphasis and what was absent from the last exam (Dec 2025).",
    rows: [
      ["LCS with given strings", 3, "8", 95, "Appeared in all 5 papers"],
      ["Huffman Coding with given frequencies", 3, "8", 95, "Every paper, often MISSISSIPPI or Fibonacci frequencies"],
      ["N-Queens (4 or 5 queens) backtracking", 4, "8", 90, "All 5 papers; Dec 2025 had an 8-queen variant"],
      ["Recurrence via Recursion Tree or Substitution", 1, "8", 90, "Every Part B Q21 has this"],
      ["NP-Hard & NP-Complete with examples", 5, "8", 90, "All 5 papers; Dec 2025 had 3-SAT"],
      ["Matrix Chain Multiplication (Part C)", 3, "15", 85, "May 2025 Part C; absent Dec 2025 → due"],
      ["Rabin-Karp String Matching", 5, "8", 85, "Jul 2023, May 2025, Dec 2025"],
      ["Strassen's Matrix Multiplication", 2, "8", 80, "Nov 2024, Dec 2025 — rising"],
      ["Merge Sort trace + recurrence", 2, "8", 80, "Dec 2025 Q22a; 4 of 5 papers"],
      ["Branch & Bound for TSP", 4, "8", 80, "Jul 2023, May 2025, Dec 2025 (MCQ)"],
      ["Quicksort (Part C) — full design + analysis", 2, "15", 75, "Dec 2025 and May 2025 Part C were D&C sorting"],
      ["Optimal Binary Search Tree (Part C)", 3, "15", 70, "Dec 2025 Q27; rarely repeats immediately"],
      ["Fractional Knapsack (Part C)", 3, "15", 70, "Nov 2024 Part C; skipped Dec 2025 → likely back"],
      ["Closest Pair of Points (D&C)", 2, "8", 65, "Dec 2025 Q22b; 3 papers"],
      ["Randomized Quicksort / Algorithm", 5, "8", 65, "Nov 2024 Q25b; Dec 2025 MCQ"]
    ],
    callouts: [
      { tone: "hot", title: "Lock these in", text: "LCS, Huffman Coding, N-Queens, Recurrence Relations, NP-Hard/Complete, Rabin-Karp. These 6 topics alone cover 40+ marks." },
      { tone: "star", title: "Smart prediction", text: "Dec 2025 had OBST in Part C, which rarely repeats immediately. Matrix Chain Multiplication or Fractional Knapsack is more probable for Part C — prepare both." }
    ]
  },

  formulas: [
    { title: "Master Theorem", lines: [
      "T(n) = aT(n/b) + f(n)",
      "Case 1: f(n)=O(n^(log_b a − ε)) → Θ(n^log_b a)",
      "Case 2: f(n)=Θ(n^log_b a) → Θ(n^log_b a · log n)",
      "Case 3: f(n)=Ω(n^(log_b a + ε)) → Θ(f(n))",
      "",
      "4T(n/4)+n → Case 2 → Θ(n log n)",
      "4T(n/2)+n² → Case 2 → Θ(n² log n)",
      "7T(n/2)+n² → Case 1 → Θ(n^2.807)  (Strassen)",
      "2T(n/2)+n → Case 2 → Θ(n log n)  (Merge Sort)"
    ]},
    { title: "Key Time Complexities", lines: [
      "Insertion Sort   O(n²) worst, O(n) best",
      "Merge Sort       O(n log n) all cases",
      "Quicksort        O(n log n) avg, O(n²) worst",
      "Binary Search    O(log n) worst",
      "Frac. Knapsack   O(n log n)",
      "LCS (DP)         O(mn)",
      "Matrix Chain     O(n³)",
      "OBST             O(n³)",
      "Floyd-Warshall   O(V³)",
      "Prim's (matrix)  O(V²)",
      "Kruskal's        O(E log E)",
      "Rabin-Karp pre.  Θ(m)"
    ]},
    { title: "LCS Recurrence", lines: [
      "c[i,j] = 0                        if i=0 or j=0",
      "       = c[i−1,j−1] + 1           if xᵢ = yⱼ",
      "       = max(c[i,j−1], c[i−1,j])  if xᵢ ≠ yⱼ"
    ]},
    { title: "OBST Recurrences", lines: [
      "w[i,j] = w[i,j−1] + p[j] + q[j]",
      "e[i,j] = min over r ∈ [i..j] of",
      "         e[i,r−1] + e[r+1,j] + w[i,j]",
      "root[i,j] = r achieving the minimum"
    ]},
    { title: "N-Queens: PLACE(k)", lines: [
      "Same column:   x[i] ≠ x[k]",
      "Same diagonal: |x[i] − x[k]| ≠ |i − k|",
      "Same row: impossible (one queen per row)"
    ]},
    { title: "Subset Sum Pruning", lines: [
      "Non-promising if:",
      "  s + w[k] > d          (overshoots target)",
      "  s + remaining < d     (can't reach target)"
    ]}
  ],

  revision: {
    must: [
      "LCS 2D table construction", "Huffman tree building", "N-Queens state-space tree",
      "Big-O, Ω, Θ definitions + graph", "Master Theorem — 3 cases",
      "Recursion tree for T(n)=T(n/3)+T(2n/3)+n", "NP vs NP-Hard vs NP-Complete",
      "Rabin-Karp hash matching", "Strassen's recurrence", "Fractional Knapsack greedy"
    ],
    ifTime: [
      "Matrix Chain Multiplication table", "Floyd-Warshall D⁽ᵏ⁾ iterations", "Quicksort partition trace",
      "Merge Sort trace on letters", "Subset Sum pruning + state tree", "Branch & Bound TSP bounding",
      "Optimal BST e/w/root tables", "Kruskal's vs Prim's differences",
      "Hamiltonian circuit backtracking", "3-SAT NP-completeness argument"
    ],
    mcq: [
      "Merge sort: always O(n log n)", "0/1 Knapsack → DP, not greedy", "Fractional Knapsack → greedy",
      "MST with n vertices → n−1 edges", "Backtracking builds a state-space tree",
      "BFS uses a queue; DFS uses a stack", "Floyd-Warshall → O(V³) → DP",
      "NP → non-deterministic polynomial", "Rabin-Karp → hashing", "Vertex cover approx ≤ 2 × optimal"
    ]
  },

  tips: [
    { title: "Bank Part A first", text: "Part A is 20 fast marks. Know exact time complexities, asymptotic definitions, growth order and which algorithm belongs to which paradigm. Never leave an MCQ blank." },
    { title: "Use the 5-part answer", text: "Definition, Algorithm / Pseudocode, Worked Example, Time Complexity, Space Complexity. This structure consistently earns full marks." },
    { title: "Draw by hand", text: "LCS table, Huffman tree, OBST tables, Floyd-Warshall matrices, state-space trees. Neat diagrams earn marks even with small errors." },
    { title: "Q21 is a recurrence", text: "Practise all three methods: recursion tree, substitution (guess then prove by induction), Master Theorem. Minimum: T(n)=T(n/3)+T(2n/3)+n and T(n)=4T(n/2)+n²." },
    { title: "Plan the 15-marker", text: "Plan before writing. Draw diagrams, label every step, show the recurrence and solve it. Partial credit is given step by step." },
    { title: "Compare in one shot", text: "Merge vs Quick sort, Kruskal vs Prim, Backtracking vs Branch & Bound, 0/1 vs Fractional Knapsack — keep a comparison table for each pair." },
    { title: "Q25 is NP", text: "P ⊆ NP; NP-Hard need not be in NP; NP-Complete = NP ∩ NP-Hard. TSP (NP-Hard), 3-SAT and Hamiltonian Cycle (NP-Complete). If X is NP-Complete and X ≤p Y, then Y is NP-Hard." },
    { title: "Budget your time", text: "Part A ~40 min, Part B ~80 min (about 16 min each), Part C ~30 min. Never spend more than 18 minutes on one Part B question." }
  ]
};
