// FLA (21CSC301T) — every Part B / Part C question from the 9 papers on THE HELPER,
// read by hand from the scanned PDFs. Entry: [number, marks, [topic ids], condensed text].
// Topic ids refer to TOPICS below. Papers listed oldest -> newest.
export const TOPICS = [
  ["K1", "DFA design (construct a DFA for a language)", 1],
  ["K2", "NFA design and NFA to DFA conversion", 1],
  ["K3", "ε-NFA and ε-closure", 1],
  ["K4", "Regular expressions and finite automata (RE to FA, FA to RE)", 1],
  ["K5", "DFA minimization", 1],
  ["K6", "Mealy and Moore machines", 1],
  ["K7", "Regular language properties: closure and pumping lemma", 2],
  ["K8", "Proof by mathematical induction", 1],
  ["K9", "CFG design (write a grammar for a language)", 2],
  ["K10", "Derivations, parse trees and ambiguity", 2],
  ["K11", "CFG simplification (null, unit, useless productions)", 2],
  ["K12", "Chomsky Normal Form (CNF)", 2],
  ["K13", "Greibach Normal Form (GNF)", 2],
  ["K14", "PDA design", 3],
  ["K15", "CFG to PDA and PDA to CFG conversion", 3],
  ["K16", "DPDA vs NPDA", 3],
  ["K17", "Pumping lemma for context-free languages", 3],
  ["K18", "Turing machine design for languages (aⁿbⁿcⁿ, wwᴿ, substrings)", 4],
  ["K19", "Turing machine for arithmetic and transformations (add, subtract, multiply, 2's complement, copy)", 4],
  ["K20", "TM variants, universal TM, recursive and RE languages", 4],
  ["K21", "Post Correspondence Problem (PCP and MPCP)", 5],
  ["K22", "Rice's theorem and the language Lₑ", 5],
  ["K23", "Halting problem, decidable and undecidable problems", 5],
  ["K24", "P, NP, NP-complete and NP-hard", 5]
];

const PATTERN = "Part A 20×1 MCQ (OMR); Part B 5×8 either/or, one per unit (Q21–Q25); Part C 1×15 choose one of Q26/Q27; 75 marks, 3 hours";

export const PAPERS = [
  ["PYQ Nov 2023", [
    ["21a", 8, [2], "Construct a DFA equivalent to the given NFA M (4 states, input {0,1}) from its transition table"],
    ["21b", 8, [4, 5], "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"],
    ["22a(i)", 4, [9], "Given S→aSb|aAb, A→bAa, A→ba, find the context-free language generated"],
    ["22a(ii)", 4, [9], "Generate a context-free grammar for the positive and negative integers"],
    ["22b(i)", 4, [11], "Simplify the given context-free grammar (A→a, B→b|C, B→C, E→C|ε)"],
    ["22b(ii)", 4, [12], "Check whether S→bA|aB, A→bAA|aS|a, B→bBB|bS|b is in Chomsky Normal Form"],
    ["23a", 8, [14], "Construct a PDA for L={wcwᴿ | w ∈ {a,b}+} accepting by empty stack"],
    ["23b", 8, [14], "Construct a PDA for L={aⁿbᵐcⁿ⁺ᵐ | n,m ≥ 1} by empty stack and by final state"],
    ["24a", 8, [18], "Design a Turing machine for L={0ⁿ1ⁿ | n ≥ 1} and trace the string 0011 using IDs"],
    ["24b", 8, [19], "Construct a Turing machine for the 2's complement of a binary number"],
    ["25a", 8, [21], "Define PCP. For lists A=(1,10111,10), B=(111,10,0) over {0,1} find a solution"],
    ["25b", 8, [23], "Define the diagonalization language and show that Ld is not recursively enumerable"],
    ["26", 15, [4, 3, 2], "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson's construction, convert an NFA to a DFA"],
    ["27i", 8, [15], "Convert the given PDA (δ(p,1,Z)={(p,XZ)} …) to a context-free grammar"],
    ["27ii", 7, [10], "For S→a|^|(T), T→T,S|S give leftmost and rightmost derivations and the parse tree for (((a,a),^(a)),a)"]
  ]],
  ["PYQ May 2024", [
    ["21a", 8, [1], "Construct a DFA that accepts an odd number of 1's and an even number of 0's"],
    ["21b", 8, [4, 3], "Convert the regular expression 10+(0+11)0*1 into an ε-NFA"],
    ["22a", 8, [11], "Simplify the grammar S→aA|a|C, A→aB|ε, B→aA, C→cCD"],
    ["22b", 8, [10], "Find leftmost and rightmost derivations and the parse tree for w=+*-xyxy using E→+EE|*EE|-EE|x|y"],
    ["23a", 8, [14], "Design a PDA for L={aⁿbᵐcᵐdⁿ | m,n ≥ 1}"],
    ["23b", 8, [14], "Construct a PDA to accept L={wwᴿ | w ∈ {a,b}*}"],
    ["24a", 8, [20], "Prove that the union of two recursive languages is recursive; discuss the complement property"],
    ["24b", 8, [18], "Construct a TM that accepts strings containing 'aba' as a substring over {a,b}"],
    ["25a", 8, [24], "Write short notes on NP-hard and NP-complete and express the relationship between them"],
    ["25b", 8, [21], "Let Σ={0,1}, A=(1,10111,10), B=(111,10,–): find an instance of PCP"],
    ["26", 15, [20, 19], "Obtain the code for <M,1011> for the given TM (δ table), and design a TM that adds two numbers"],
    ["27", 15, [18], "Construct a Turing machine that accepts all palindromes over {0,1}"]
  ]],
  ["PYQ Jul 2024", [
    ["21a", 8, [8], "Prove by induction that 1²+2²+3²+…+n² = n(n+1)(2n+1)/6 for all positive integers n"],
    ["21b", 8, [2], "Construct a DFA equivalent to the given NFA with states {P,Q,R,S}"],
    ["22a", 8, [4, 5], "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"],
    ["22b", 8, [7], "Show that regular languages are closed under union, intersection, Kleene closure and difference"],
    ["23a", 8, [16], "What are deterministic and non-deterministic PDAs? Explain each with an example"],
    ["23b", 8, [14], "Construct a PDA for {aⁿbⁿ | n ≥ 1} by empty stack, draw its diagram and show by ID that 0011 is accepted"],
    ["24a", 8, [13], "Convert the grammar S→XA|BB, B→b|SB, X→b, A→a into Greibach Normal Form"],
    ["24b", 8, [18], "Construct a TM for the language L={aⁿbⁿcⁿ | n ≥ 0}"],
    ["25a", 8, [21], "Define PCP and prove that PCP is undecidable"],
    ["25b", 8, [24], "Explain class P, class NP, NP-complete and NP-hard problems with examples in detail"],
    ["26", 15, [22, 21], "(a) State and explain Rice's theorem. (b) Prove that MPCP reduces to PCP"],
    ["27", 15, [19], "(a) Construct a TM that replaces every occurrence of 111 by 101 in a string of 0's and 1's. (b) Construct a TM for proper subtraction m − n"]
  ]],
  ["PYQ Nov 2024", [
    ["21a", 8, [2], "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"],
    ["21b", 8, [6], "Design a Moore machine printing a/b/c for substring 10 / 11 / otherwise; convert it to a Mealy machine"],
    ["22a(i)", 4, [10], "Find whether the grammar S→AS|A, A→aAb|c is ambiguous"],
    ["22a(ii)", 4, [7], "Discuss any four properties of a regular set with an example"],
    ["22b", 8, [9], "Design an unambiguous CFG for HTML code with tags body, h1, p, a, div and the text inside them"],
    ["23a", 8, [14], "Construct PDAs for {aᵐ⁺ⁿbᵐcⁿ | n,m ≥ 0} and {aⁿbⁿc²ⁿ | n ≥ 0}"],
    ["23b", 8, [15], "Convert the CFG S→0BB, B→0S|1S|0 to a PDA and check the string 010⁴"],
    ["24a", 8, [18], "Construct a TM for {aⁿbⁿcⁿ | n ≥ 0} and check that 'aaabbbccc' is accepted"],
    ["24b", 8, [19], "Design a Turing machine for addition and compute 2+3 with the steps"],
    ["25a", 8, [24], "Explain in detail P, NP, NP-complete and NP-hard"],
    ["25b", 8, [23, 22], "Describe in detail the Halting problem and Rice's theorem"],
    ["26", 15, [1, 4], "Employee IDs over {a,b} with at least one 'a': list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"],
    ["27", 15, [11, 12, 13, 10], "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"]
  ]],
  ["PYQ May 2025", [
    ["21a", 8, [1, 2], "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring 'xxy'"],
    ["21b", 8, [6, 7], "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"],
    ["22a", 8, [11], "Remove unit, useless and null productions from S→aA|aBB, A→aaA|ε, B→bB|bbC, C→B; what language does it generate?"],
    ["22b", 8, [13], "Convert S→AA|a, A→SS|b into Greibach Normal Form"],
    ["23a", 8, [16, 14], "What are DPDA and NPDA? Design a PDA for L={aⁱbʲcᵏ | i=j or j=k}"],
    ["23b", 8, [9, 15], "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"],
    ["24a", 8, [18], "Give the tuple definition of a TM with instantaneous description; construct a TM for L={www | w ∈ {a,b}*}"],
    ["24b", 8, [20], "Short notes on any two: extensions of TM, universal Turing machine, recursive and recursively enumerable languages"],
    ["25a", 8, [21, 24], "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"],
    ["25b", 8, [23], "Compare and contrast decidable and undecidable languages with examples"],
    ["26", 15, [17, 5], "(1) State and prove the pumping lemma for CFLs; show {aⁿbⁿcⁿ} is not context-free. (2) Minimize the given finite automaton"],
    ["27", 15, [19], "Design a Turing machine that computes the multiplication of two numbers"]
  ]],
  ["PYQ Jul 2025", [
    ["21a", 8, [3, 2, 6], "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2's complement of a binary input"],
    ["21b", 8, [2, 6], "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"],
    ["22a", 8, [5], "Use the table-filling algorithm to minimize the given 8-state DFA"],
    ["22b", 8, [13, 10], "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"],
    ["23a", 8, [14, 15], "(i) Design a PDA accepting strings with equal numbers of a's and b's. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"],
    ["23b", 8, [14, 15], "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"],
    ["24a", 8, [19, 18], "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"],
    ["24b", 8, [18], "Design a TM for {wwᴿ | w ∈ {a,b}*} using the checking-off-symbols technique"],
    ["25a", 8, [22], "State and prove Rice's theorem for recursively enumerable index sets"],
    ["25b", 8, [22], "Define Lₑ and prove that Lₑ is not recursive"],
    ["26", 15, [21], "(i) Prove that PCP is undecidable. (ii) Does the given instance (ab/abbb, bbab/a, baa/aa, b/bbb) have a PCP solution? Find the MPCP instance"],
    ["27", 15, [12, 11, 4], "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"]
  ]],
  ["PYQ Jul 2025 (Paper - 2)", [
    ["21a", 8, [4, 5], "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"],
    ["21b", 8, [2], "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"],
    ["22a", 8, [11], "Simplify the CFG S→XYX, X→0X|ε, Y→1Y|ε preserving its meaning"],
    ["22b", 8, [13], "Convert S→XB|AA, A→a|SA, B→b, X→a from CFG to GNF"],
    ["23a", 8, [15], "Convert the given PDA (states q0,q1,qf; stack symbols A,Z) into an equivalent CFG"],
    ["23b", 8, [7], "Prove that L={aⁿbⁿ | n ≥ 0} is not regular using the pumping lemma"],
    ["24a", 8, [19], "Design a Turing machine that checks whether the input is prime, using multiple tracks"],
    ["24b", 8, [19], "Design a Turing machine to compute the addition of two unary numbers"],
    ["25a", 8, [21], "Lists A=(1,10111,10), B=(111,10,0) over {0,1}: find the instance of PCP"],
    ["25b", 8, [23], "Classify decidable and undecidable problems with an example"],
    ["26", 15, [12, 11], "(i) Define Chomsky's Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"],
    ["27", 15, [18], "Construct a transition diagram for a Turing machine accepting L={wwᴿ | w ∈ (a+b)*}"]
  ]],
  ["PYQ Nov 2025", [
    ["21a", 8, [1, 5], "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"],
    ["21b", 8, [7], "Prove that L={0ⁿ10ⁿ | n ≥ 1} is not regular"],
    ["22a", 8, [9], "Find CFGs for L₁={aⁿb²ⁿ | n ≥ 1} and L₂={aⁿbᵐcᵐdⁿ | n,m ≥ 1}"],
    ["22b", 8, [7, 10], "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"],
    ["23a", 8, [14], "Construct an NPDA for {w ∈ {a,b}* | nₐ(w)=n_b(w)} and trace the string baab"],
    ["23b", 8, [15], "Convert E→E+E|E*E|a to a PDA and check the string a*a"],
    ["24a", 8, [20], "Discuss any two variants of the Turing machine with examples and illustrations"],
    ["24b", 8, [18], "Construct a TM for L={aⁿbⁿcⁿ | n ≥ 1} and demonstrate it on aabbcc"],
    ["25a", 8, [20, 23], "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"],
    ["25b", 8, [21], "Lists A={a,bab,bb,abba}, B={ab,b,bab,ba}: find a PCP solution, an MPCP solution, and explain whether PCP is decidable"],
    ["26", 15, [10, 12, 13, 11], "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"],
    ["27", 15, [19], "Design a TM that multiplies two unary numbers (111 and 11) and show the steps"]
  ]],
  ["PYQ May 2026", [
    ["21a", 8, [6], "Convert the given Mealy machine (states q1–q4) to a Moore machine"],
    ["21b", 8, [2], "Construct a DFA equivalent to the NFA M=({P,Q,R,S},{0,1},δ,P,{Q,S}) given by a table"],
    ["22a", 8, [11, 12], "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"],
    ["22b", 8, [11], "Remove the null productions from the two given grammars"],
    ["23a", 8, [15], "Convert S→aA, A→aABC|bB|a, B→b, C→c to a PDA and check whether abcba is accepted"],
    ["23b", 8, [14], "Design a PDA for {aⁿbⁿcᵐdᵐ}"],
    ["24a", 8, [20], "Write a short note on multitape and multihead Turing machines"],
    ["24b", 8, [18], "Construct a Turing machine for strings ending with b over {a,b}"],
    ["25a", 8, [20], "Discuss whether the sets of recursive and recursively enumerable languages are closed under complementation"],
    ["25b", 8, [21], "Lists M=(ab,bab,bbaaa), N=(a,ba,bab): is there a solution to this PCP instance?"],
    ["26", 15, [13, 11], "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"],
    ["27", 15, [19], "Design a TM that takes w ∈ {0,1}* and outputs ww; show its action on 10 and 010"]
  ]]
];

// Build the same shape the app's extractor returns (see EXTRACT_SCHEMA in lib/gen.js).
export function asExtraction() {
  const unitOf = new Map(TOPICS.map(([id, , u]) => [id, u]));
  return {
    topicList: TOPICS.map(([id, name, unit]) => ({ id, name, unit })),
    papers: PAPERS.map(([label, qs]) => ({
      label, pattern: PATTERN, partBQuestions: 5, partBMarksEach: 8, partBEitherOr: "yes",
      questions: qs.map(([number, marks, ids, text]) => ({
        number, part: parseInt(number, 10) >= 26 ? "C" : "B", marks,
        unit: unitOf.get("K" + ids[0]) || unitOf.get(ids[0]) || 1,
        topicIds: ids.map((n) => "K" + n), text
      }))
    }))
  };
}
export const LABELS = PAPERS.map(([l]) => l);

export const SUBJECT = {
  id: "gen-21csc301t",
  key: "21CSC301T",                       // what the app's Regenerate link uses (code || name)
  subject: { name: "Formal Language and Automata", code: "21CSC301T", short: "FLA", credits: 3, source: "https://srmhelper.pro/subjects/formal-language-and-automata/" },
  units: ["Finite Automata and Regular Expressions", "Regular Sets and Context Free Grammars", "Pushdown Automata and Parsing Algorithms", "Turing Machines", "Introduction to Computational Complexity"],
  year: 3, sem: 5,
  helper: { sem: 5, name: "Formal Language And Automata" }
};
