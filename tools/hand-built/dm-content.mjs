// Discrete Mathematics guide content. topicIds refer to the counted table (T1…T21) printed by
// build-guide.mjs; paper names and counts come from that table. Every statement about which
// paper asked what was checked against dm-data.mjs.
export const raw = {
  summary: "Built from the 8 previous-year papers on THE HELPER in the current format (May 2024 – May 2026). Every Part B and Part C question was read from the scanned papers and counted by topic, so the repeat counts are exact. Questions repeat with the same numbers, so working the recurring problems is the fastest way to prepare.",
  examPattern: {
    totalMarks: 75,
    parts: [
      { part: "Part A", marks: "20 × 1 = 20", text: "20 MCQs on the OMR sheet in the first 40 minutes: set and relation facts, counting, gcd/lcm, logical equivalences, group and code properties, graph terms (degree, tree, chromatic number)." },
      { part: "Part B", marks: "5 × 8 = 40", text: "Q21–Q25, each with an either/or choice, one question per unit (Q21 = Unit 1 … Q25 = Unit 5)." },
      { part: "Part C", marks: "1 × 15 = 15", text: "Q26 or Q27, answer one. In practice it is Warshall's algorithm (Q26) or a coding-theory decode (Q27); Kruskal's and the Euclidean algorithm have also been set here." }
    ]
  },
  callouts: [
    { title: "Three questions in every paper", text: "Kruskal's minimum spanning tree, the Euclidean algorithm and a logic derivation (rules of inference or inconsistent premises) appeared in all 8 papers. Master these three first." },
    { title: "Part C is predictable", text: "Warshall's algorithm was a Part C choice in 7 of 8 papers and a coding-theory decode in 6 of 8. Prepare both with full step-by-step working." }
  ],
  top: [
    { question: "Rules of inference — show premises are inconsistent (Rama gets his degree…), derive a conclusion by the indirect method or CP rule", unit: 3, marks: "8–15", importance: 5, topicIds: ["T1"] },
    { question: "Euclidean algorithm — find gcd and write it as a linear combination ma + nb (512m+320n=64, 154x+250y=2, gcd(12345, 54321))", unit: 2, marks: "8–15", importance: 5, topicIds: ["T4"] },
    { question: "Minimum spanning tree by Kruskal's algorithm — with the order of edges and the total weight", unit: 5, marks: "8–15", importance: 5, topicIds: ["T5"] },
    { question: "Warshall's algorithm — transitive closure of a relation on {1,…,5}, showing every matrix W₀…W₅", unit: 1, marks: "8–15", importance: 5, topicIds: ["T2"] },
    { question: "Inclusion–exclusion — 250 students and three languages; integers 1–250 not divisible by 2, 3, 5, 7", unit: 2, marks: "8", importance: 5, topicIds: ["T3"] },
    { question: "Graph theorems — handshaking, maximum edges (n−k)(n−k+1)/2 with k components, bipartite ≤ n²/4, Euler graphs", unit: 5, marks: "8", importance: 4, topicIds: ["T7"] },
    { question: "Coding theory — code words from a parity-check matrix; parity-check matrix and decoding from a generator matrix", unit: 4, marks: "8–15", importance: 5, topicIds: ["T6"] },
    { question: "Hasse diagrams — draw the diagram and prove the relation is a partial order (divisibility, P({a,b,c}), D₃₀)", unit: 1, marks: "8–15", importance: 4, topicIds: ["T8"] },
    { question: "Groups — prove an operation such as a*b = a+b−ab or ab/2 forms an abelian group", unit: 4, marks: "8", importance: 4, topicIds: ["T11"] },
    { question: "Set identities — prove A∩(B−C) = (A∩B)−(A∩C) and similar, or find minsets and maxsets", unit: 1, marks: "8", importance: 3, topicIds: ["T9"] },
    { question: "Functions — one-one, onto and inverse of a piecewise or rational function; inverse of a composition", unit: 1, marks: "8", importance: 3, topicIds: ["T12"] },
    { question: "Mathematical induction — divisibility (n³+2n by 3, 8ⁿ−3ⁿ by 5), inequalities (2ⁿ < n!), sums", unit: 3, marks: "8", importance: 4, topicIds: ["T10"] },
    { question: "Permutation groups and cyclic groups — every subgroup of a cyclic group is cyclic; products of permutations", unit: 4, marks: "8", importance: 3, topicIds: ["T13"] },
    { question: "Graph isomorphism — compare degrees and edges, build the mapping, give the adjacency matrices", unit: 5, marks: "8", importance: 3, topicIds: ["T14"] },
    { question: "Relations — prove a relation is an equivalence relation; matrices of R∪S, R∩S, R∘S, R⊕S", unit: 1, marks: "8", importance: 3, topicIds: ["T15"] },
    { question: "Truth tables and equivalence without truth tables; duals", unit: 3, marks: "4–8", importance: 2, topicIds: ["T16"] },
    { question: "Subgroup criterion — a non-empty H is a subgroup iff a, b ∈ H ⇒ a*b⁻¹ ∈ H", unit: 4, marks: "8", importance: 2, topicIds: ["T19"] },
    { question: "Pigeonhole principle — 26 points in a 20 cm × 15 cm rectangle", unit: 2, marks: "4", importance: 2, topicIds: ["T17"] },
    { question: "Permutations and combinations — arrangements with a group together (garland with red roses)", unit: 2, marks: "4", importance: 2, topicIds: ["T18"] }
  ],
  units: [
    { n: 1, title: "Set Theory", weight: "High", topics: [
      { topic: "Warshall's algorithm — W₀ = M_R; for each k, W_k[i][j] = W_{k−1}[i][j] OR (W_{k−1}[i][k] AND W_{k−1}[k][j]); the last matrix is the transitive closure; show every W_k", tag: "8/8" },
      { topic: "Hasse diagrams and partial orders — a poset is reflexive, antisymmetric, transitive; from the digraph drop loops, transitive edges and arrow directions; D₃₀, divisibility on {1,…,8}, P({a,b,c})", tag: "6/8" },
      { topic: "Set identities — prove by showing each side is a subset of the other, or by the algebra of sets; minsets and maxsets partition the universal set", tag: "5/8" },
      { topic: "Functions — one-one, onto, inverse; piecewise f: Z→N, f(x)=x/(x−2); (g∘f)⁻¹ = f⁻¹∘g⁻¹", tag: "4/8" },
      { topic: "Relations — equivalence = reflexive + symmetric + transitive; matrix forms: R∪S (OR), R∩S (AND), R∘S (Boolean product), R⁻¹ (transpose), R⊕S (XOR)", tag: "2/8" }
    ]},
    { n: 2, title: "Combinatorics and Number Theory", weight: "High", topics: [
      { topic: "Euclidean algorithm — repeated division gives gcd(a,b) = gcd(b, a mod b); back-substitute to write gcd = ma + nb; lcm = ab / gcd", tag: "8/8" },
      { topic: "Inclusion–exclusion — |A∪B∪C| = Σ|A| − Σ|A∩B| + |A∩B∩C|; numbers up to N not divisible by 2,3,5,7: N − Σ⌊N/p⌋ + Σ⌊N/pq⌋ − Σ⌊N/pqr⌋ + ⌊N/210⌋", tag: "8/8" },
      { topic: "Pigeonhole principle — n objects in m boxes forces a box with at least ⌈n/m⌉ objects; split a region into boxes", tag: "1/8" },
      { topic: "Permutations and combinations — n!, P(n,r), C(n,r), circular (n−1)!, repeated letters n!/(p!q!…); treat 'together' items as one block", tag: "1/8" },
      { topic: "Fundamental theorem of arithmetic; gcd·lcm = product; gcd(ka,kb) = k·gcd(a,b)", tag: "MCQ" }
    ]},
    { n: 3, title: "Mathematical Logic", weight: "High", topics: [
      { topic: "Rules of inference — Rule P (premise), Rule T (implied by earlier lines), Rule CP (assume the antecedent); the indirect method adds ¬conclusion as a premise and reaches a contradiction", tag: "8/8" },
      { topic: "Inconsistent premises — derive a contradiction from the premises; the Rama 'degree, job, married, higher studies' set appears in three papers", tag: "4/8" },
      { topic: "Mathematical induction — base case, assume P(k), prove P(k+1); divisibility, 2ⁿ < n!, Σ 1/(n(n+1)) = n/(n+1)", tag: "5/8" },
      { topic: "Truth tables, tautologies and duals — the dual swaps ∧↔∨ and T↔F; prove equivalences with the laws of logic", tag: "2/8" }
    ]},
    { n: 4, title: "Algebraic Structures and Coding Theory", weight: "Very High", topics: [
      { topic: "Coding theory — encoding e: Bᵐ→Bⁿ with a parity-check matrix or generator matrix; decode with the syndrome; Hamming distance and weight; d_min detects d−1 and corrects ⌊(d−1)/2⌋ errors", tag: "7/8" },
      { topic: "Groups — closure, associativity, identity, inverse; for a*b = a+b−ab the identity is 0, for ab/2 on Q⁺ it is 2; abelian also needs commutativity", tag: "5/8" },
      { topic: "Permutation groups and cyclic groups — |Sₙ| = n!; multiply permutations carefully; every subgroup of a cyclic group is cyclic", tag: "3/8" },
      { topic: "Subgroups — a non-empty subset H is a subgroup iff a, b ∈ H ⇒ a*b⁻¹ ∈ H", tag: "1/8" },
      { topic: "Rings, integral domains and fields — an integral domain is a commutative ring with unity and no zero divisors; every finite integral domain is a field", tag: "1/8" }
    ]},
    { n: 5, title: "Graph Theory", weight: "High", topics: [
      { topic: "Minimum spanning tree — Kruskal: sort the edges, add the cheapest that does not form a cycle until n−1 edges; give the total weight", tag: "8/8" },
      { topic: "Graph theorems — handshaking Σdeg(v) = 2|E|; odd-degree vertices come in pairs; a graph with k components has at most (n−k)(n−k+1)/2 edges; bipartite ≤ n²/4", tag: "7/8" },
      { topic: "Graph isomorphism — match vertex count, edge count and degree sequence, then give an edge-preserving bijection or show none exists", tag: "3/8" },
      { topic: "Adjacency and incidence matrices — adjacency is symmetric for undirected graphs; the row sums give the degrees", tag: "1/8" },
      { topic: "Trees and colouring — a tree on n vertices has n−1 edges; χ(bipartite) = 2, χ(Kₙ) = n; a connected graph has an Euler circuit iff every degree is even", tag: "MCQ" }
    ]}
  ],
  shortAnswer: {
    title: "Most Repeated 8-Mark Questions (Part B)",
    strategy: "Part B is Q21–Q25, one question per unit with an either/or choice. The same problems come back with identical numbers, so rehearse the recurring ones below and you will recognise most of the paper.",
    groups: [
      { label: "Q21", unit: 1, items: [
        "Draw a Hasse diagram and prove the relation is a partial order: divisibility on {1,…,8}, on {2,4,5,10,12,20,25}, D₃₀, P({a,b,c}) (6 of 8 papers)",
        "Prove a set identity: A∩(B−C) = (A∩B)−(A∩C) (May 2024, May 2025) or (A∩B)−C = (A−C)∩(B−C) (Jul 2024)",
        "One-one, onto and inverse of f: Z→N with 2x−1 / −2x (Jul 2025); of x/(x−2) and x/(x+4) (Jul 2025 Paper 2, Nov 2025)",
        "Prove a relation is an equivalence relation, or find M_R, M_{R⁻¹}, R∪S, R∩S, R∘S, R⊕S (Nov 2025, May 2026)"
      ]},
      { label: "Q22", unit: 2, items: [
        "Euclidean algorithm with gcd as a linear combination: 512m+320n=64 (Jul 2024), 28844m+15712n=4, 154x+250y=2, gcd(3587,1819), gcd(18,19,35,87), gcd(12345, 54321) (three recent papers)",
        "250 students taking Fortran, C and Java: how many took none (May 2024, May 2025)",
        "Integers between 1 and 250 not divisible by 2, 3, 5 or 7 (Nov 2024, Jul 2025, Jul 2025 Paper 2)",
        "Pigeonhole (26 points in a rectangle) and the garland with red roses together (Nov 2025)"
      ]},
      { label: "Q23", unit: 3, items: [
        "Show the premises (Rama gets his degree → job → married; higher study → not married) are inconsistent (May 2025, Jul 2025, Jul 2025 Paper 2)",
        "Derive b from a→b, c→b, d→(a∨c), d by the indirect method (May 2024, May 2026)",
        "Derive a conclusion with the CP rule: p→(q→s), ¬r∨p, q ⊢ r→s (Jul 2024); the 'A works hard' argument (Nov 2025)",
        "Induction: n³+2n by 3, 8ⁿ−3ⁿ by 5, 3ⁿ+7ⁿ−2 by 8, 2ⁿ < n!, Σ 1/(n(n+1)) = n/(n+1) (last five papers)"
      ]},
      { label: "Q24", unit: 4, items: [
        "Prove {R,*} or {R−{1},*} with a*b = a+b−ab is an abelian group (Jul 2024, May 2025, Nov 2025); ab/2 and ab/3 on Q⁺ (Nov 2024, May 2026)",
        "Find the code words for e: B³→B⁶ from a parity-check matrix H, or from a generator matrix G (6 of 8 papers)",
        "Every subgroup of a cyclic group is cyclic (Nov 2024, Jul 2025 Paper 2); the subgroup criterion a*b⁻¹ ∈ H (May 2024)",
        "Products of permutations in S₅: αβ, βα, α², αβγ (May 2025)"
      ]},
      { label: "Q25", unit: 5, items: [
        "Kruskal's algorithm on a weighted graph with the total weight (every paper)",
        "Prove a simple disconnected graph with n vertices and k components has at most (n−k)(n−k+1)/2 edges (May 2024, Jul 2025, Jul 2025 Paper 2, May 2026)",
        "Graph isomorphism with adjacency matrices (Jul 2024, May 2025, Nov 2025); bipartite graph has at most n²/4 edges (Nov 2024, Nov 2025)",
        "Number of vertices, edges and degrees of a graph and the handshaking theorem (May 2025)"
      ]}
    ],
    tip: "The same weighted graphs come back: practise the 9-vertex A–I graph (Jul 2024, May 2025) and the A–F graph with edges 16, 21, 11, 5, 19, 40, 14, 6, 18, 10 (Nov 2024, Jul 2025)."
  },
  longAnswer: {
    title: "Most Repeated 15-Mark Questions (Part C)",
    note: "Q26 or Q27, answer one. The choice has been Warshall's algorithm or a coding-theory decode in almost every paper, so prepare both completely.",
    items: [
      { question: "Warshall's algorithm — find the transitive closure of a relation on {1,…,5}, showing every step", level: "Hot", note: "Part C in May 2024, Jul 2024, May 2025, Jul 2025 (10 of 15 marks), Jul 2025 Paper 2, Nov 2025, May 2026 (7 of 8)" },
      { question: "Coding theory — from a generator matrix find all code words, the parity-check matrix, decode the received words, and say whether each is decoded uniquely", level: "Hot", note: "Q27 in May 2024, Jul 2024, Nov 2024, Jul 2025 Paper 2 and May 2026; Q26 in Jul 2025 (6 of 8)" },
      { question: "Kruskal's algorithm on a weighted graph", level: "Watch", note: "Part C in May 2025 (Q27); in Part B (Q25) of every paper" },
      { question: "Euclidean algorithm: gcd(12345, 54321), express it as a linear combination, and find the LCM", level: "Watch", note: "Nov 2025 Q27" },
      { question: "Define a poset; prove ⊆ is a partial order on P({a,b,c}) and draw the Hasse diagram", level: "Watch", note: "Nov 2024 Q26" },
      { question: "Prove A−(B∩C) = (A−B)∪(A−C) (5 marks) together with Warshall's algorithm (10 marks)", level: "Watch", note: "Jul 2025 Q27" }
    ]
  },
  predictions: [
    { topic: "Kruskal's minimum spanning tree", unit: 5, type: "8", probability: 95, reason: "In all 8 papers" },
    { topic: "Rules of inference / inconsistent premises / CP rule", unit: 3, type: "8", probability: 95, reason: "In all 8 papers; three of them used the Rama premises" },
    { topic: "Euclidean algorithm with linear combination", unit: 2, type: "8", probability: 90, reason: "In all 8 papers; gcd(12345, 54321) came up three times recently" },
    { topic: "Warshall's algorithm (Part C)", unit: 1, type: "15", probability: 90, reason: "In all 8 papers, and Part C in 7 of them" },
    { topic: "Inclusion–exclusion counting", unit: 2, type: "8", probability: 85, reason: "In all 8 papers, including the last two" },
    { topic: "Coding theory: code words, parity-check matrix, decoding", unit: 4, type: "8–15", probability: 85, reason: "7 of 8 papers; Q24 or Q27 in each of the last four" },
    { topic: "Graph theorems: (n−k)(n−k+1)/2, bipartite n²/4, handshaking", unit: 5, type: "8", probability: 80, reason: "7 of 8 papers; the k-components proof appeared 4 times" },
    { topic: "Mathematical induction", unit: 3, type: "8", probability: 80, reason: "Asked in each of the last five papers" },
    { topic: "Abelian group proof under a given operation", unit: 4, type: "8", probability: 75, reason: "5 of 8 papers; last seen May 2026" },
    { topic: "Hasse diagram and partial order", unit: 1, type: "8", probability: 60, reason: "6 of 8 papers; not in the last two, so it is due" },
    { topic: "Functions: one-one, onto, inverse", unit: 1, type: "8", probability: 50, reason: "4 of 8 papers; last seen Nov 2025" },
    { topic: "Set identity proof", unit: 1, type: "8", probability: 45, reason: "5 of 8 papers; last in Jul 2025" },
    { topic: "Equivalence relation / relation matrices", unit: 1, type: "8", probability: 45, reason: "Asked in both of the last two papers" },
    { topic: "Graph isomorphism", unit: 5, type: "8", probability: 45, reason: "3 of 8 papers; last Nov 2025" },
    { topic: "Cyclic subgroup / permutation products", unit: 4, type: "8", probability: 45, reason: "3 of 8 papers; not in the last two" },
    { topic: "Pigeonhole principle and arrangements", unit: 2, type: "4–8", probability: 30, reason: "Only in Nov 2025, but on the student topic list" },
    { topic: "Truth tables and equivalence without tables", unit: 3, type: "4–8", probability: 30, reason: "2 of 8 papers" }
  ],
  formulas: [
    { title: "Counting and inclusion–exclusion", lines: [
      "|A ∪ B| = |A| + |B| − |A ∩ B|",
      "|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|",
      "None of the sets = N − |A ∪ B ∪ C|",
      "Not divisible by 2,3,5,7 up to N: N − Σ⌊N/p⌋ + Σ⌊N/pq⌋ − Σ⌊N/pqr⌋ + ⌊N/210⌋",
      "|P(A)| = 2ⁿ;   n! ;   P(n,r) = n!/(n−r)!;   C(n,r) = n!/(r!(n−r)!)",
      "Circular arrangements (n−1)!;  necklace (n−1)!/2;  repeats n!/(p! q! r!)",
      "Pigeonhole: n objects in m boxes ⇒ some box has at least ⌈n/m⌉"
    ]},
    { title: "Relations, Hasse diagrams and Warshall", lines: [
      "Reflexive (a,a) ∈ R;  symmetric (a,b) ⇒ (b,a);  antisymmetric;  transitive",
      "Equivalence relation = reflexive + symmetric + transitive",
      "Partial order = reflexive + antisymmetric + transitive",
      "Hasse diagram: remove loops, remove edges implied by transitivity, draw upwards",
      "M_{R∪S} = M_R ∨ M_S;  M_{R∩S} = M_R ∧ M_S;  M_{R∘S} = Boolean product;  M_{R⁻¹} = M_Rᵀ",
      "Warshall: W₀ = M_R;  W_k[i][j] = W_{k−1}[i][j] ∨ (W_{k−1}[i][k] ∧ W_{k−1}[k][j]);  answer = W_n"
    ]},
    { title: "Functions", lines: [
      "One-one: f(a) = f(b) ⇒ a = b;   onto: every y has some x with f(x) = y",
      "To find f⁻¹: put y = f(x), solve for x, swap the names",
      "(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹;   g ∘ f of bijections is a bijection",
      "Number of functions A → B is |B|^|A|"
    ]},
    { title: "Number theory", lines: [
      "gcd(a, b) = gcd(b, a mod b)   (Euclid)",
      "Back-substitute the remainders to get gcd = m·a + n·b",
      "gcd(a, b) · lcm(a, b) = a · b",
      "gcd(ka, kb) = k · gcd(a, b);   if gcd(a,b) = 1 and a | bc then a | c"
    ]},
    { title: "Logic and proof", lines: [
      "p → q ≡ ¬p ∨ q;   contrapositive ¬q → ¬p;   converse q → p;   inverse ¬p → ¬q",
      "De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q;   ¬(p ∨ q) ≡ ¬p ∧ ¬q;   absorption p ∨ (p ∧ q) ≡ p",
      "Dual: swap ∧ ↔ ∨ and T ↔ F",
      "Rule P (premise), Rule T (implied), Rule CP (assume antecedent, derive consequent)",
      "Indirect method: add ¬conclusion as a premise and derive a contradiction",
      "Induction: base case; assume P(k); show P(k+1)"
    ]},
    { title: "Groups", lines: [
      "Group: closure, associativity, identity e, inverse a⁻¹;  abelian if a*b = b*a",
      "(a*b)⁻¹ = b⁻¹ * a⁻¹;   the identity and inverses are unique",
      "a*b = a+b−ab on R−{1}:  e = 0,  a⁻¹ = a/(a−1)",
      "a*b = ab/2 on Q⁺:  e = 2,  a⁻¹ = 4/a;   a*b = ab/3:  e = 3,  a⁻¹ = 9/a",
      "Subgroup test: H ≠ ∅ and a, b ∈ H ⇒ a*b⁻¹ ∈ H",
      "|Sₙ| = n!;   every cyclic group is abelian;   every subgroup of a cyclic group is cyclic"
    ]},
    { title: "Coding theory", lines: [
      "Hamming weight = number of 1s;  distance d(x, y) = weight(x ⊕ y)",
      "d_min ≥ k+1 detects k errors;  d_min ≥ 2k+1 corrects k errors",
      "G = [ I_m | A ],  code word c = b · G (mod 2);   H = [ A ; I_r ]  (n × r),  c · H = 0",
      "Parity-check encoding: append the check bits formed by the columns of A",
      "Decoding: syndrome s = r · H;  s = 0 ⇒ accept;  s equals row j of H ⇒ flip bit j",
      "A code corrects every single error iff the rows of H are distinct and non-zero"
    ]},
    { title: "Graph theory", lines: [
      "Handshaking: Σ deg(v) = 2|E|;  the number of odd-degree vertices is even",
      "Kₙ has n(n−1)/2 edges;  a tree on n vertices has n−1 edges",
      "Simple graph with k components: |E| ≤ (n−k)(n−k+1)/2",
      "Bipartite graph: |E| ≤ n²/4;   χ(bipartite) = 2,  χ(Kₙ) = n",
      "Euler circuit iff connected and every degree is even;  Euler path iff exactly two odd degrees",
      "Kruskal: sort edges, add the cheapest that creates no cycle, stop at n−1 edges"
    ]}
  ],
  revision: {
    must: [
      "Kruskal's algorithm with the sorted edge list and total weight",
      "Euclidean algorithm and back-substitution to gcd = ma + nb",
      "Inclusion–exclusion for three sets and for 'not divisible by 2, 3, 5, 7'",
      "Warshall's algorithm with every matrix W₀ to W₅",
      "Code words from a parity-check matrix H",
      "Generator matrix → parity-check matrix → decoding with syndromes",
      "Prove premises inconsistent (the Rama set) and the indirect method",
      "Abelian group proof for a*b = a+b−ab",
      "Induction proofs for divisibility",
      "Proof that a graph with k components has at most (n−k)(n−k+1)/2 edges"
    ],
    ifTime: [
      "Hasse diagram and partial-order proof for divisibility and P({a,b,c})",
      "One-one, onto and inverse of a piecewise function",
      "Set identity proofs with Venn reasoning and algebra",
      "Graph isomorphism with adjacency matrices",
      "Every subgroup of a cyclic group is cyclic",
      "Products of permutations in S₅",
      "Equivalence relation proof and relation matrices",
      "Pigeonhole and 'together' arrangements",
      "Truth table and equivalence without truth tables"
    ],
    quickFacts: [
      "A relation that is reflexive, symmetric and transitive is an equivalence relation",
      "|P(A)| = 2ⁿ for an n-element set",
      "gcd(a,b) · lcm(a,b) = a·b",
      "p → q ≡ ¬p ∨ q; the dual swaps ∧ with ∨ and T with F",
      "Rule P introduces a premise at any point; Rule T uses earlier results",
      "Every cyclic group is abelian; every subgroup of a cyclic group is cyclic",
      "|Sₙ| = n!",
      "d_min = 5 corrects 2 errors and detects 4",
      "Σ deg(v) = 2|E|; Kₙ has n(n−1)/2 edges; a tree on n vertices has n−1 edges",
      "A connected graph has an Euler circuit iff every vertex has even degree"
    ]
  },
  tips: [
    { title: "Start with the three that never miss", text: "Kruskal's MST, the Euclidean algorithm and a logic derivation were in all 8 papers. If you can do these three cleanly you already hold about 24 marks." },
    { title: "Part C is Warshall or a coding decode", text: "Warshall's algorithm was a Part C choice in 7 of 8 papers and a coding-theory decode in 6 of 8. Show every matrix W₀ to W₅, and for decoding show the syndrome of each received word." },
    { title: "Questions repeat with the same numbers", text: "Practise 512m+320n=64, 154x+250y=2, gcd(12345, 54321), the 250-students problem, integers 1–250 not divisible by 2, 3, 5, 7, and the Rama premises. They came back several times." },
    { title: "Practise the recurring graphs", text: "The A–I weighted graph (Jul 2024, May 2025) and the A–F graph with edge weights 16, 21, 11 (Nov 2024, Jul 2025) have both been used twice for Kruskal's." },
    { title: "Prove, then verify", text: "For group and graph theorems write the statement, the proof and a quick check on a small example. For Kruskal, always list the edges in sorted order and cross out the ones that form a cycle." },
    { title: "Cross-check with the student topic list", text: "A student-made 'Maths Imp Topics' sheet on THE HELPER lists Hasse diagrams, equivalence relations, Warshall, pigeonhole, GCD, truth tables, induction, CP rule, groups, encoder/decoder, isomorphism and MST. It matches what these papers show." },
    { title: "Pick one option per unit", text: "Part B is five 8-mark questions, one per unit, each with an either/or choice. Prepare one confident option for every unit, and the more repeated one of the two first." }
  ]
};
