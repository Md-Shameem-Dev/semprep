// FLA guide content (what the AI "writer" step would return). topicIds refer to the
// counted table printed by fla-build.mjs (T1…T24); paper names/counts come from that table.
export const raw = {
  summary: "Built from all 9 previous-year papers on THE HELPER (Nov 2023 – May 2026). Every Part B and Part C question was read from the scanned papers and counted by topic, so the repeat counts are exact. Unit 4 (Turing machines) and Unit 2 (grammar simplification and normal forms) carry the most marks.",
  examPattern: {
    totalMarks: 75,
    parts: [
      { part: "Part A", marks: "20 × 1 = 20", text: "20 MCQs on the OMR sheet in the first 40 minutes. Short definitions and facts: DFA/PDA/TM formal definitions, ID notation, closure properties, language classes, NP-complete examples, small grammar or automaton tracing." },
      { part: "Part B", marks: "5 × 8 = 40", text: "Q21–Q25, each with an either/or choice, one question per unit (Q21 = Unit 1 … Q25 = Unit 5). Constructions and conversions: a DFA/NFA, a grammar, a PDA, a Turing machine, a PCP instance." },
      { part: "Part C", marks: "1 × 15 = 15", text: "Q26 or Q27, one to answer. Usually long multi-step work: a Turing machine for arithmetic or copying (Q27 in 6 of 9 papers), or simplify-then-convert a grammar to CNF/GNF." }
    ]
  },
  callouts: [
    { title: "Unit 4 is the safest bet", text: "A Turing machine question appeared in Part B (Q24) in all 9 papers, and a Turing machine was the Part C choice (Q27) in 6 of 9. Practise aⁿbⁿcⁿ, wwᴿ, substring machines and unary add / subtract / multiply." },
    { title: "Grammar work never stops", text: "CFG simplification came up in 8 of 9 papers and GNF in 7 of 9, including every paper since Jul 2024. Learn the exact order: remove ε-productions, then unit productions, then useless symbols." }
  ],
  top: [
    { question: "Turing machine for a language — aⁿbⁿcⁿ, wwᴿ, 0ⁿ1ⁿ, a substring, strings ending in b", unit: 4, marks: "8–15", importance: 5, topicIds: ["T1"] },
    { question: "Turing machine for arithmetic or a transformation — add, proper subtraction, multiply, 2's complement, copy ww, replace 111 by 101", unit: 4, marks: "8–15", importance: 5, topicIds: ["T2"] },
    { question: "CFG simplification — remove null, unit and useless productions in the right order", unit: 2, marks: "4–8", importance: 5, topicIds: ["T3"] },
    { question: "PDA design — aⁿbⁿ, wwᴿ, wcwᴿ, aⁿbᵐcⁿ⁺ᵐ, aⁿbⁿcᵐdᵐ, equal a's and b's, aⁱbʲcᵏ with i=j or j=k", unit: 3, marks: "8", importance: 5, topicIds: ["T4"] },
    { question: "Post Correspondence Problem — find a solution to a given instance; prove PCP undecidable; MPCP", unit: 5, marks: "8–15", importance: 5, topicIds: ["T5"] },
    { question: "NFA to DFA conversion — subset construction from a transition table, with test strings", unit: 1, marks: "8", importance: 5, topicIds: ["T6"] },
    { question: "CFG ↔ PDA conversion — grammar to PDA and check a string; PDA to grammar", unit: 3, marks: "8", importance: 4, topicIds: ["T7"] },
    { question: "Greibach Normal Form — convert a CFG to GNF (including removing ε and left recursion first)", unit: 2, marks: "8–15", importance: 5, topicIds: ["T8"] },
    { question: "Regular expression ↔ finite automaton — RE to ε-NFA/DFA, DFA to RE", unit: 1, marks: "8–15", importance: 4, topicIds: ["T9"] },
    { question: "DFA minimization — table-filling or partition method", unit: 1, marks: "8", importance: 4, topicIds: ["T10"] },
    { question: "Chomsky Normal Form — convert (after simplifying) a grammar to CNF", unit: 2, marks: "4–15", importance: 4, topicIds: ["T11"] },
    { question: "Derivations, parse trees and ambiguity — leftmost/rightmost derivation, show a grammar is ambiguous", unit: 2, marks: "4–8", importance: 4, topicIds: ["T12"] },
    { question: "Regular language properties — closure under union/intersection/star/difference, pumping lemma to prove non-regular", unit: 2, marks: "4–8", importance: 4, topicIds: ["T13"] },
    { question: "Halting problem and decidable vs undecidable problems", unit: 5, marks: "8", importance: 4, topicIds: ["T14"] },
    { question: "TM variants, universal Turing machine, recursive vs recursively enumerable languages", unit: 4, marks: "8", importance: 4, topicIds: ["T15"] },
    { question: "Mealy and Moore machines — design, run on input, convert one to the other", unit: 1, marks: "8", importance: 3, topicIds: ["T16"] },
    { question: "CFG design — write a grammar for aⁿb²ⁿ, aⁿbᵐcᵐdⁿ, integers, HTML tags", unit: 2, marks: "4–8", importance: 3, topicIds: ["T17"] },
    { question: "DFA design — parity of 0s and 1s, a forbidden substring, aⁿbᵐ with limits", unit: 1, marks: "8–15", importance: 3, topicIds: ["T18"] },
    { question: "P, NP, NP-complete and NP-hard — definitions, relationship, examples", unit: 5, marks: "8", importance: 3, topicIds: ["T19"] },
    { question: "Rice's theorem and the language Lₑ", unit: 5, marks: "8–15", importance: 3, topicIds: ["T20"] }
  ],
  units: [
    { n: 1, title: "Finite Automata and Regular Expressions", weight: "High", topics: [
      { topic: "NFA design and NFA → DFA subset construction — DFA states are sets of NFA states; a set is final if it contains an NFA final state; up to 2ⁿ states, build only the reachable ones", tag: "7/9" },
      { topic: "Regular expressions and automata — RE → ε-NFA by Thompson's rules (union, concatenation, star); DFA → RE by state elimination or the Rᵢⱼ method", tag: "6/9" },
      { topic: "DFA minimization — table-filling: mark final/non-final pairs, propagate, merge the unmarked pairs; always remove unreachable states first", tag: "6/9" },
      { topic: "Mealy and Moore machines — Moore output sits on states, Mealy output on transitions; practice: 2's complement, divisibility by 3, pattern detectors; convert both ways", tag: "4/9" },
      { topic: "DFA design — track what must be remembered: parity of 0s and 1s, last symbols, a forbidden substring; add a dead state", tag: "4/9" },
      { topic: "ε-NFA and ε-closure — ε-closure(q) is every state reachable by ε moves; used to convert an ε-NFA to a DFA", tag: "3/9" },
      { topic: "Proof by induction — base case, hypothesis, step (Jul 2024: sum of squares)", tag: "1/9" }
    ]},
    { n: 2, title: "Regular Sets and Context Free Grammars", weight: "Very High", topics: [
      { topic: "CFG simplification — order matters: ε-productions, then unit productions, then useless symbols (non-generating first, then unreachable)", tag: "8/9" },
      { topic: "Greibach Normal Form — every rule A → aα; remove ε and unit rules and left recursion first, then substitute until each rule starts with a terminal", tag: "7/9" },
      { topic: "Chomsky Normal Form — rules A → BC or A → a; simplify, replace terminals inside long rules by new variables, split rules longer than 2", tag: "6/9" },
      { topic: "Derivations, parse trees and ambiguity — leftmost/rightmost derivation, yield; a grammar is ambiguous if one string has two parse trees", tag: "5/9" },
      { topic: "Regular language properties — closed under union, concatenation, star, complement, intersection, difference; pumping lemma proves aⁿbⁿ and 0ⁿ10ⁿ are not regular", tag: "5/9" },
      { topic: "CFG design — match counts with S → aSb; nest for aⁿbᵐcᵐdⁿ; keep grammars unambiguous (HTML tags, integers)", tag: "4/9" },
      { topic: "Chomsky hierarchy — Type 3 regular, Type 2 CFG, Type 1 context-sensitive, Type 0 unrestricted", tag: "MCQ" }
    ]},
    { n: 3, title: "Pushdown Automata and Parsing Algorithms", weight: "High", topics: [
      { topic: "PDA design — use the stack to count or match; accept by empty stack or final state; aⁱbʲcᵏ with i=j or j=k needs nondeterminism", tag: "8/9" },
      { topic: "CFG ↔ PDA — grammar to PDA: push the start symbol, expand non-terminals on top, pop matching terminals; PDA to grammar uses variables [p X q]", tag: "7/9" },
      { topic: "DPDA vs NPDA — one move per (state, input, stack top) for a DPDA; wwᴿ needs an NPDA; DPDA ⊂ NPDA", tag: "2/9" },
      { topic: "Pumping lemma for CFLs — z = uvwxy, |vwx| ≤ n, |vx| ≥ 1, uvⁱwxⁱy ∈ L; shows aⁿbⁿcⁿ is not context-free", tag: "1/9" },
      { topic: "PDA configuration (q, w, γ) and the ⊢ relation; parsing top-down vs bottom-up", tag: "MCQ" },
      { topic: "Closure of CFLs — closed under union, concatenation, star; not closed under intersection or complement", tag: "MCQ" }
    ]},
    { n: 4, title: "Turing Machines", weight: "Very High", topics: [
      { topic: "TM for a language — mark-and-return technique: aⁿbⁿcⁿ (X,Y,Z), wwᴿ (match the ends), a substring such as aba, strings ending in b, 0ⁿ1ⁿ0ⁿ", tag: "9/9" },
      { topic: "TM for arithmetic and transformations — unary addition, proper subtraction, multiplication by repeated copying, 2's complement, copying ww, replacing 111 by 101, primality with tracks", tag: "9/9" },
      { topic: "TM variants, universal TM, recursive vs RE languages — multitape, multihead, NTM all equal the basic TM in power; UTM simulates any TM from its code <M,w>", tag: "4/9" },
      { topic: "TM definition and ID — 7-tuple (Q, Σ, Γ, δ, q₀, B, F); ID is α q β; if δ is undefined the machine halts", tag: "MCQ" },
      { topic: "Recursive vs RE — recursive is closed under union, intersection, complement; RE is closed under union and intersection but not complement; L and L̄ both RE ⇒ L recursive", tag: "4/9" }
    ]},
    { n: 5, title: "Introduction to Computational Complexity", weight: "High", topics: [
      { topic: "Post Correspondence Problem — solve an instance by chaining tiles with a common prefix; MPCP forces tile 1 first; PCP is undecidable (reduction from MPCP / halting)", tag: "8/9" },
      { topic: "Halting problem and decidability — halting is undecidable (diagonal argument); Ld is not RE; decidable vs undecidable examples", tag: "5/9" },
      { topic: "P, NP, NP-complete, NP-hard — P ⊆ NP; NP-complete = NP ∩ NP-hard; SAT was the first NP-complete problem; polynomial-time reductions", tag: "4/9" },
      { topic: "Rice's theorem — every non-trivial property of RE languages is undecidable; Lₑ is not recursive", tag: "3/9" }
    ]}
  ],
  shortAnswer: {
    title: "Most Repeated 8-Mark Questions (Part B)",
    strategy: "Part B is Q21–Q25, one question per unit, each with an either/or choice. Prepare one confident option per unit. The Turing machine in Q24 has never been missing, so Unit 4 is the one to master first.",
    groups: [
      { label: "Q21", unit: 1, items: [
        "Construct a DFA equivalent to a given NFA from its transition table (7 of 9 papers)",
        "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, test 100010 and 100000 (Nov 2024, Jul 2025 Paper 2)",
        "Convert a regular expression such as a(a+b+c)*(a+b+c) or 10+(0+11)0*1 into a minimized DFA or ε-NFA",
        "Design or convert a Mealy / Moore machine (2's complement, divisibility by 3, pattern detector)"
      ]},
      { label: "Q22", unit: 2, items: [
        "Simplify a CFG by removing null, unit and useless productions (8 of 9 papers)",
        "Convert a CFG to Greibach Normal Form",
        "Check or convert a grammar to Chomsky Normal Form",
        "Leftmost / rightmost derivation and parse tree; show a grammar is ambiguous",
        "Prove a language is not regular with the pumping lemma, or show closure properties of regular languages"
      ]},
      { label: "Q23", unit: 3, items: [
        "Design a PDA for aⁿbⁿ, wwᴿ, wcwᴿ, aⁿbᵐcⁿ⁺ᵐ, aⁿbⁿcᵐdᵐ or equal numbers of a's and b's (8 of 9 papers)",
        "Convert a CFG to a PDA and check a string such as 010⁴ or a*a",
        "Convert a given PDA to a CFG",
        "DPDA vs NPDA with examples"
      ]},
      { label: "Q24", unit: 4, items: [
        "Turing machine for aⁿbⁿcⁿ with a trace on a sample string (Q24 has a TM in every paper; aⁿbⁿcⁿ itself in Jul 2024, Nov 2024, Nov 2025)",
        "Turing machine for wwᴿ using the checking-off technique, or for the substring aba / strings ending in b",
        "Turing machine for unary addition, proper subtraction or 2's complement",
        "Short notes: multitape and multihead TMs, universal TM, recursive vs RE languages"
      ]},
      { label: "Q25", unit: 5, items: [
        "Find a solution to a given PCP instance (8 of 9 papers; lists A=(1,10111,10), B=(111,10,0) appear three times)",
        "Define PCP and prove it is undecidable",
        "Explain P, NP, NP-complete and NP-hard with examples",
        "Halting problem and Rice's theorem; decidable vs undecidable problems with examples"
      ]}
    ],
    tip: "For every construction show the table or diagram first, then a trace on a sample string. Marks are given for the structure even if one transition is wrong."
  },
  longAnswer: {
    title: "Most Repeated 15-Mark Questions (Part C)",
    note: "Q26 or Q27, answer one. Across the 9 papers, Q27 was a Turing machine 6 times and Q26/Q27 asked for CNF/GNF conversion 5 times. Prepare both, since either could be your pick.",
    items: [
      { question: "Turing machine for arithmetic or copying — multiplication of two unary numbers, copy ww, replace 111 by 101, proper subtraction, palindromes, with a trace", level: "Hot", note: "Q27 in May 2024, Jul 2024, May 2025, Jul 2025 Paper 2, Nov 2025 and May 2026 (6 of 9)" },
      { question: "Simplify a grammar and convert it to CNF and/or GNF, then derive a string or draw a parse tree", level: "Hot", note: "Nov 2024 Q27, Jul 2025 Q27, Jul 2025 Paper 2 Q26, Nov 2025 Q26, May 2026 Q26 (5 of 9)" },
      { question: "PCP / MPCP — prove PCP undecidable, solve an instance, reduce MPCP to PCP; state Rice's theorem", level: "Likely", note: "Jul 2024 Q26 and Jul 2025 Q26" },
      { question: "Scenario-based automata: list the language, build a DFA, convert DFA to regular expression (Rᵢⱼ), Thompson ε-NFA, NFA to DFA", level: "Watch", note: "Nov 2023 Q26 (bus stops) and Nov 2024 Q26 (employee IDs)" },
      { question: "Pumping lemma for CFLs with aⁿbⁿcⁿ, plus DFA minimization", level: "Watch", note: "May 2025 Q26" },
      { question: "Encode a Turing machine as <M, w> and design an adder; or convert a PDA to a CFG and draw a parse tree", level: "Watch", note: "May 2024 Q26; Nov 2023 Q27" }
    ]
  },
  predictions: [
    { topic: "Turing machine for a language (aⁿbⁿcⁿ, wwᴿ, substring)", unit: 4, type: "8", probability: 95, reason: "In Q24 of all 9 papers" },
    { topic: "Turing machine for arithmetic / copy (Part C)", unit: 4, type: "15", probability: 85, reason: "Q27 in 6 of 9 papers, including the last two" },
    { topic: "PDA design (aⁿbⁿcᵐdᵐ, wwᴿ, equal a's and b's)", unit: 3, type: "8", probability: 90, reason: "8 of 9 papers; aⁿbⁿcᵐdᵐ appeared in Jul 2025 and May 2026" },
    { topic: "CFG simplification (null, unit, useless)", unit: 2, type: "8", probability: 85, reason: "8 of 9 papers, including May 2026" },
    { topic: "Post Correspondence Problem instance", unit: 5, type: "8", probability: 80, reason: "8 of 9 papers, missing only in Nov 2024" },
    { topic: "NFA to DFA conversion", unit: 1, type: "8", probability: 80, reason: "7 of 9 papers, including May 2026" },
    { topic: "Greibach Normal Form", unit: 2, type: "8–15", probability: 80, reason: "Every paper since Jul 2024; Part C in May 2026" },
    { topic: "CFG ↔ PDA conversion", unit: 3, type: "8", probability: 75, reason: "7 of 9 papers; May 2026 asked CFG → PDA" },
    { topic: "Chomsky Normal Form", unit: 2, type: "8–15", probability: 65, reason: "6 of 9 papers; Nov 2025 and May 2026 both had it" },
    { topic: "Regular expression ↔ automaton", unit: 1, type: "8", probability: 60, reason: "6 of 9 papers; absent from May 2026" },
    { topic: "DFA minimization", unit: 1, type: "8", probability: 60, reason: "6 of 9 papers; not in May 2026, so it is due" },
    { topic: "TM variants / universal TM / RE vs recursive", unit: 4, type: "8", probability: 60, reason: "Nov 2025 and May 2026 both asked it" },
    { topic: "Halting problem / decidable vs undecidable", unit: 5, type: "8", probability: 55, reason: "5 of 9 papers; last seen in Nov 2025" },
    { topic: "Regular language closure and pumping lemma", unit: 2, type: "8", probability: 55, reason: "5 of 9 papers; Nov 2025 had both parts" },
    { topic: "Mealy and Moore machines", unit: 1, type: "8", probability: 50, reason: "4 of 9; May 2026 asked Mealy → Moore" },
    { topic: "P, NP, NP-complete, NP-hard", unit: 5, type: "8", probability: 45, reason: "4 of 9 papers; none in the last four, so it is due" },
    { topic: "Rice's theorem", unit: 5, type: "8–15", probability: 35, reason: "3 of 9 papers; last seen Jul 2025" }
  ],
  formulas: [
    { title: "Formal definitions", lines: [
      "DFA   = (Q, Σ, δ, q₀, F),  δ : Q × Σ → Q",
      "NFA   = (Q, Σ, δ, q₀, F),  δ : Q × Σ → 2^Q",
      "ε-NFA : δ : Q × (Σ ∪ {ε}) → 2^Q",
      "Moore = (Q, Σ, Δ, δ, λ, q₀),  λ : Q → Δ   (output on states)",
      "Mealy = (Q, Σ, Δ, δ, λ, q₀),  λ : Q × Σ → Δ   (output on transitions)",
      "PDA   = (Q, Σ, Γ, δ, q₀, Z₀, F),  δ : Q × (Σ ∪ {ε}) × Γ → finite subsets of Q × Γ*",
      "TM    = (Q, Σ, Γ, δ, q₀, B, F),  δ : Q × Γ → Q × Γ × {L, R}"
    ]},
    { title: "Closure properties", lines: [
      "Regular  : union, concatenation, star, complement, intersection, difference, reversal — all closed",
      "CFL      : union, concatenation, star, reversal closed",
      "           intersection, complement, difference NOT closed (CFL ∩ regular is CFL)",
      "Recursive: closed under union, intersection, complement",
      "RE       : closed under union, intersection, concatenation, star; NOT complement",
      "L and L̄ both RE  ⇒  L is recursive"
    ]},
    { title: "Grammar simplification and normal forms", lines: [
      "Order: 1) remove ε-productions  2) remove unit productions  3) remove useless symbols",
      "  useless = non-generating variables first, then unreachable ones",
      "CNF: every rule  A → BC  or  A → a",
      "  replace terminals inside long rules with Cₐ → a; split A → B₁B₂…Bₖ into A → B₁D₁, D₁ → B₂D₂, …",
      "GNF: every rule  A → aα  (a terminal, α a string of variables)",
      "  remove ε, unit and left recursion (A → Aα | β becomes A → βZ | β, Z → αZ | α), then substitute"
    ]},
    { title: "NFA → DFA and DFA minimization", lines: [
      "Subset construction: DFA state = set of NFA states, at most 2ⁿ of them",
      "ε-closure(S) = S plus every state reachable by ε moves",
      "δ'(S, a) = ε-closure( δ( ε-closure(S), a ) )",
      "Table filling: mark (p, q) if exactly one is final",
      "  mark (p, q) if (δ(p,a), δ(q,a)) is already marked for some a",
      "  merge every unmarked pair; remove unreachable states first"
    ]},
    { title: "Pumping lemmas (to prove a language is NOT in the class)", lines: [
      "Regular: ∃ p such that every w ∈ L with |w| ≥ p splits as w = xyz,",
      "  |xy| ≤ p, |y| ≥ 1, and xyⁱz ∈ L for all i ≥ 0",
      "  proof recipe: pick w = aᵖbᵖ, show y lies in the a's so xy²z has more a's than b's",
      "CFL: ∃ p such that every z ∈ L with |z| ≥ p splits as z = uvwxy,",
      "  |vwx| ≤ p, |vx| ≥ 1, and uvⁱwxⁱy ∈ L for all i ≥ 0 (use on aⁿbⁿcⁿ)"
    ]},
    { title: "Turing machine technique cheat-sheet", lines: [
      "aⁿbⁿcⁿ : mark a→X, then b→Y, then c→Z, return left, repeat; accept when only X,Y,Z remain",
      "wwᴿ    : cross off the first and last symbol, compare, repeat",
      "Unary add m+n : replace the separator 0 by 1, erase the last 1",
      "Proper subtraction m∸n : cancel one 1 on each side until one side is empty",
      "Multiplication m×n : for each 1 in m, append a copy of n to the output",
      "2's complement : copy bits from the right up to and including the first 1, invert the rest"
    ]},
    { title: "Decidability and complexity facts", lines: [
      "Decidable   : DFA/NFA acceptance, emptiness, equivalence; CFG membership and emptiness",
      "Undecidable : Halting problem, TM emptiness, CFG equivalence, PCP, any non-trivial property of RE languages (Rice)",
      "P ⊆ NP;   NP-complete = NP ∩ NP-hard",
      "A ≤p B and B ∈ P  ⇒  A ∈ P",
      "A NP-complete, A ≤p B, B ∈ NP  ⇒  B is NP-complete",
      "SAT is NP-complete (Cook–Levin); if P ≠ NP then P ∩ NP-complete = ∅"
    ]}
  ],
  revision: {
    must: [
      "Turing machine for aⁿbⁿcⁿ and wwᴿ with transition table and a trace",
      "Unary addition, proper subtraction and multiplication machines",
      "PDA for aⁿbⁿ, wwᴿ and equal numbers of a's and b's",
      "Order of CFG simplification: ε, unit, useless",
      "Convert a grammar to GNF, step by step",
      "Solve a PCP instance by chaining tiles",
      "NFA to DFA with a transition table",
      "CFG to PDA and check a string",
      "State the Halting problem and Rice's theorem",
      "PDA to CFG using [p X q] variables"
    ],
    ifTime: [
      "DFA minimization with the table-filling algorithm",
      "RE to ε-NFA by Thompson's construction",
      "Chomsky Normal Form conversion",
      "Mealy ↔ Moore conversion",
      "Pumping lemma proof for aⁿbⁿ",
      "Closure properties of regular languages",
      "Show a grammar is ambiguous",
      "TM variants and the universal Turing machine",
      "P, NP, NP-complete, NP-hard relationships"
    ],
    quickFacts: [
      "DFA and NFA recognise exactly the regular languages",
      "An NFA with n states gives a DFA with up to 2ⁿ states",
      "A TM tuple has 7 elements; a PDA tuple has 7 elements",
      "DPDA is weaker than NPDA; wwᴿ needs an NPDA",
      "RE languages are closed under union and intersection, not complement",
      "If L and its complement are both RE, L is recursive",
      "The Halting problem is undecidable but recursively enumerable",
      "PCP is undecidable; MPCP must start with tile 1",
      "Moore output is on states, Mealy output is on transitions",
      "NP-complete problems are in NP and NP-hard; SAT is the first one"
    ]
  },
  tips: [
    { title: "Own Unit 4 first", text: "A Turing machine is in Q24 of every paper and in Part C in 6 of 9. Practise six machines with transition tables: aⁿbⁿcⁿ, wwᴿ, substring aba, unary addition, subtraction and multiplication." },
    { title: "Learn the Part C pattern", text: "Part C has been a Turing machine (6/9) or a CNF/GNF grammar conversion (5/9). Be ready for both, so whichever appears you have a clear choice." },
    { title: "Grammar steps in the right order", text: "For CFG simplification always go ε-productions, unit productions, then useless symbols. Doing them in another order can bring back rules you already removed." },
    { title: "Q25 is almost always PCP", text: "PCP appeared in 8 of 9 papers. Practise finding a solution by starting with the tile whose strings share a prefix, and know the two proofs: PCP is undecidable, and MPCP reduces to PCP." },
    { title: "Show the table, then trace", text: "For subset construction, minimization and PDA/TM questions, draw the table or diagram first and then trace one sample string. Partial marks come from visible steps." },
    { title: "Part A is definitions", text: "The MCQs repeat: TM and PDA tuples, ID notation, DPDA definition, closure properties, which language class is accepted by which machine, NP-complete examples. Revise these in the last hour." },
    { title: "Watch the clock", text: "Part A about 40 minutes (OMR is collected), Part B about 80 minutes (16 each), Part C about 30 minutes. A neat Turing machine trace takes time, so start Q24 early." }
  ]
};
