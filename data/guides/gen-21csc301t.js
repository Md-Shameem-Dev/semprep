// Hand-built from the past papers (see tools/hand-built/). Shipped as a built-in guide.
window.SEMPREP = window.SEMPREP || { guides: {} };
window.SEMPREP.guides["gen-21csc301t"] = {
    "code":  "21CSC301T",
    "name":  "Formal Language and Automata",
    "short":  "FLA",
    "tagline":  "Year 3 · Semester 5 · SRMIST — B.Tech (2021 Regulation)",
    "summary":  "Built from all 9 previous-year papers on THE HELPER (Nov 2023 – May 2026). Every Part B and Part C question was read from the scanned papers and counted by topic, so the repeat counts are exact. Unit 4 (Turing machines) and Unit 2 (grammar simplification and normal forms) carry the most marks.",
    "papers":  [
                   "PYQ Nov 2023",
                   "PYQ May 2024",
                   "PYQ Jul 2024",
                   "PYQ Nov 2024",
                   "PYQ May 2025",
                   "PYQ Jul 2025",
                   "PYQ Jul 2025 (Paper - 2)",
                   "PYQ Nov 2025",
                   "PYQ May 2026"
               ],
    "totalMarks":  75,
    "basis":  "papers",
    "generated":  {
                      "at":  "2026-11-19T06:23:00.785Z",
                      "model":  "claude-sonnet-5-5 (papers read by hand)",
                      "basis":  "papers",
                      "method":  "counted",
                      "unread":  [

                                 ]
                  },
    "repeats":  [
                    {
                        "id":  "T1",
                        "name":  "Turing machine design for languages (aⁿbⁿcⁿ, wwᴿ, substrings)",
                        "unit":  4,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ May 2024",
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a Turing machine for L={0ⁿ1ⁿ | n ≥ 1} and trace the string 0011 using IDs"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a TM that accepts strings containing \u0027aba\u0027 as a substring over {a,b}"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Construct a Turing machine that accepts all palindromes over {0,1}"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a TM for the language L={aⁿbⁿcⁿ | n ≥ 0}"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a TM for {aⁿbⁿcⁿ | n ≥ 0} and check that \u0027aaabbbccc\u0027 is accepted"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Give the tuple definition of a TM with instantaneous description; construct a TM for L={www | w ∈ {a,b}*}"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a TM for {wwᴿ | w ∈ {a,b}*} using the checking-off-symbols technique"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Construct a transition diagram for a Turing machine accepting L={wwᴿ | w ∈ (a+b)*}"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a TM for L={aⁿbⁿcⁿ | n ≥ 1} and demonstrate it on aabbcc"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a Turing machine for strings ending with b over {a,b}"
                                          }
                                      ]
                    },
                    {
                        "id":  "T2",
                        "name":  "Turing machine for arithmetic and transformations (add, subtract, multiply, 2\u0027s complement, copy)",
                        "unit":  4,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ May 2024",
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a Turing machine for the 2\u0027s complement of a binary number"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Obtain the code for \u003cM,1011\u003e for the given TM (δ table), and design a TM that adds two numbers"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(a) Construct a TM that replaces every occurrence of 111 by 101 in a string of 0\u0027s and 1\u0027s. (b) Construct a TM for proper subtraction m − n"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a Turing machine for addition and compute 2+3 with the steps"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Design a Turing machine that computes the multiplication of two numbers"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a Turing machine that checks whether the input is prime, using multiple tracks"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a Turing machine to compute the addition of two unary numbers"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Design a TM that multiplies two unary numbers (111 and 11) and show the steps"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Design a TM that takes w ∈ {0,1}* and outputs ww; show its action on 10 and 010"
                                          }
                                      ]
                    },
                    {
                        "id":  "T3",
                        "name":  "CFG simplification (null, unit, useless productions)",
                        "unit":  2,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ May 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      4,
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "22b(i)",
                                              "part":  "B",
                                              "marks":  4,
                                              "text":  "Simplify the given context-free grammar (A→a, B→b|C, B→C, E→C|ε)"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Simplify the grammar S→aA|a|C, A→aB|ε, B→aA, C→cCD"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for \u0027the dog catches the cat\u0027"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Remove unit, useless and null productions from S→aA|aBB, A→aaA|ε, B→bB|bbC, C→B; what language does it generate?"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Simplify the CFG S→XYX, X→0X|ε, Y→1Y|ε preserving its meaning"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(i) Define Chomsky\u0027s Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Voice-command grammar: (i) leftmost derivation of \u0027please open the door\u0027 (3 marks); (ii) convert to CNF then GNF (12 marks)"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Remove the null productions from the two given grammars"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"
                                          }
                                      ]
                    },
                    {
                        "id":  "T4",
                        "name":  "PDA design",
                        "unit":  3,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ May 2024",
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a PDA for L={wcwᴿ | w ∈ {a,b}+} accepting by empty stack"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a PDA for L={aⁿbᵐcⁿ⁺ᵐ | n,m ≥ 1} by empty stack and by final state"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a PDA for L={aⁿbᵐcᵐdⁿ | m,n ≥ 1}"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a PDA to accept L={wwᴿ | w ∈ {a,b}*}"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a PDA for {aⁿbⁿ | n ≥ 1} by empty stack, draw its diagram and show by ID that 0011 is accepted"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct PDAs for {aᵐ⁺ⁿbᵐcⁿ | n,m ≥ 0} and {aⁿbⁿc²ⁿ | n ≥ 0}"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "What are DPDA and NPDA? Design a PDA for L={aⁱbʲcᵏ | i=j or j=k}"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Design a PDA accepting strings with equal numbers of a\u0027s and b\u0027s. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct an NPDA for {w ∈ {a,b}* | nₐ(w)=n_b(w)} and trace the string baab"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a PDA for {aⁿbⁿcᵐdᵐ}"
                                          }
                                      ]
                    },
                    {
                        "id":  "T5",
                        "name":  "Post Correspondence Problem (PCP and MPCP)",
                        "unit":  5,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ May 2024",
                                       "PYQ Jul 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Define PCP. For lists A=(1,10111,10), B=(111,10,0) over {0,1} find a solution"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Let Σ={0,1}, A=(1,10111,10), B=(111,10,–): find an instance of PCP"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Define PCP and prove that PCP is undecidable"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(a) State and explain Rice\u0027s theorem. (b) Prove that MPCP reduces to PCP"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(i) Prove that PCP is undecidable. (ii) Does the given instance (ab/abbb, bbab/a, baa/aa, b/bbb) have a PCP solution? Find the MPCP instance"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Lists A=(1,10111,10), B=(111,10,0) over {0,1}: find the instance of PCP"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Lists A={a,bab,bb,abba}, B={ab,b,bab,ba}: find a PCP solution, an MPCP solution, and explain whether PCP is decidable"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Lists M=(ab,bab,bbaaa), N=(a,ba,bab): is there a solution to this PCP instance?"
                                          }
                                      ]
                    },
                    {
                        "id":  "T6",
                        "name":  "NFA design and NFA to DFA conversion",
                        "unit":  1,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a DFA equivalent to the given NFA M (4 states, input {0,1}) from its transition table"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson\u0027s construction, convert an NFA to a DFA"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a DFA equivalent to the given NFA with states {P,Q,R,S}"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring \u0027xxy\u0027"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2\u0027s complement of a binary input"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a DFA equivalent to the NFA M=({P,Q,R,S},{0,1},δ,P,{Q,S}) given by a table"
                                          }
                                      ]
                    },
                    {
                        "id":  "T7",
                        "name":  "CFG to PDA and PDA to CFG conversion",
                        "unit":  3,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "27i",
                                              "part":  "C",
                                              "marks":  8,
                                              "text":  "Convert the given PDA (δ(p,1,Z)={(p,XZ)} …) to a context-free grammar"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert the CFG S→0BB, B→0S|1S|0 to a PDA and check the string 010⁴"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Design a PDA accepting strings with equal numbers of a\u0027s and b\u0027s. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert the given PDA (states q0,q1,qf; stack symbols A,Z) into an equivalent CFG"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert E→E+E|E*E|a to a PDA and check the string a*a"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert S→aA, A→aABC|bB|a, B→b, C→c to a PDA and check whether abcba is accepted"
                                          }
                                      ]
                    },
                    {
                        "id":  "T8",
                        "name":  "Greibach Normal Form (GNF)",
                        "unit":  2,
                        "papers":  [
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert the grammar S→XA|BB, B→b|SB, X→b, A→a into Greibach Normal Form"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for \u0027the dog catches the cat\u0027"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert S→AA|a, A→SS|b into Greibach Normal Form"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert S→XB|AA, A→a|SA, B→b, X→a from CFG to GNF"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Voice-command grammar: (i) leftmost derivation of \u0027please open the door\u0027 (3 marks); (ii) convert to CNF then GNF (12 marks)"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"
                                          }
                                      ]
                    },
                    {
                        "id":  "T9",
                        "name":  "Regular expressions and finite automata (RE to FA, FA to RE)",
                        "unit":  1,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ May 2024",
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson\u0027s construction, convert an NFA to a DFA"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert the regular expression 10+(0+11)0*1 into an ε-NFA"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Employee IDs over {a,b} with at least one \u0027a\u0027: list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
                                          }
                                      ]
                    },
                    {
                        "id":  "T10",
                        "name":  "DFA minimization",
                        "unit":  1,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ Jul 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(1) State and prove the pumping lemma for CFLs; show {aⁿbⁿcⁿ} is not context-free. (2) Minimize the given finite automaton"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Use the table-filling algorithm to minimize the given 8-state DFA"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"
                                          }
                                      ]
                    },
                    {
                        "id":  "T11",
                        "name":  "Chomsky Normal Form (CNF)",
                        "unit":  2,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ Nov 2024",
                                       "PYQ Jul 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      4,
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "22b(ii)",
                                              "part":  "B",
                                              "marks":  4,
                                              "text":  "Check whether S→bA|aB, A→bAA|aS|a, B→bBB|bS|b is in Chomsky Normal Form"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for \u0027the dog catches the cat\u0027"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(i) Define Chomsky\u0027s Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Voice-command grammar: (i) leftmost derivation of \u0027please open the door\u0027 (3 marks); (ii) convert to CNF then GNF (12 marks)"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"
                                          }
                                      ]
                    },
                    {
                        "id":  "T12",
                        "name":  "Derivations, parse trees and ambiguity",
                        "unit":  2,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ May 2024",
                                       "PYQ Nov 2024",
                                       "PYQ Jul 2025",
                                       "PYQ Nov 2025"
                                   ],
                        "marks":  [
                                      4,
                                      7,
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "27ii",
                                              "part":  "C",
                                              "marks":  7,
                                              "text":  "For S→a|^|(T), T→T,S|S give leftmost and rightmost derivations and the parse tree for (((a,a),^(a)),a)"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Find leftmost and rightmost derivations and the parse tree for w=+*-xyxy using E→+EE|*EE|-EE|x|y"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "22a(i)",
                                              "part":  "B",
                                              "marks":  4,
                                              "text":  "Find whether the grammar S→AS|A, A→aAb|c is ambiguous"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "27",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for \u0027the dog catches the cat\u0027"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Voice-command grammar: (i) leftmost derivation of \u0027please open the door\u0027 (3 marks); (ii) convert to CNF then GNF (12 marks)"
                                          }
                                      ]
                    },
                    {
                        "id":  "T13",
                        "name":  "Regular language properties: closure and pumping lemma",
                        "unit":  2,
                        "papers":  [
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025"
                                   ],
                        "marks":  [
                                      4,
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Show that regular languages are closed under union, intersection, Kleene closure and difference"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "22a(ii)",
                                              "part":  "B",
                                              "marks":  4,
                                              "text":  "Discuss any four properties of a regular set with an example"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Prove that L={aⁿbⁿ | n ≥ 0} is not regular using the pumping lemma"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Prove that L={0ⁿ10ⁿ | n ≥ 1} is not regular"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"
                                          }
                                      ]
                    },
                    {
                        "id":  "T14",
                        "name":  "Halting problem, decidable and undecidable problems",
                        "unit":  5,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025 (Paper - 2)",
                                       "PYQ Nov 2025"
                                   ],
                        "marks":  [
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Define the diagonalization language and show that Ld is not recursively enumerable"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Describe in detail the Halting problem and Rice\u0027s theorem"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Compare and contrast decidable and undecidable languages with examples"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025 (Paper - 2)",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Classify decidable and undecidable problems with an example"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"
                                          }
                                      ]
                    },
                    {
                        "id":  "T15",
                        "name":  "TM variants, universal TM, recursive and RE languages",
                        "unit":  4,
                        "papers":  [
                                       "PYQ May 2024",
                                       "PYQ May 2025",
                                       "PYQ Nov 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Prove that the union of two recursive languages is recursive; discuss the complement property"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Obtain the code for \u003cM,1011\u003e for the given TM (δ table), and design a TM that adds two numbers"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "24b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Short notes on any two: extensions of TM, universal Turing machine, recursive and recursively enumerable languages"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Discuss any two variants of the Turing machine with examples and illustrations"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "24a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Write a short note on multitape and multihead Turing machines"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Discuss whether the sets of recursive and recursively enumerable languages are closed under complementation"
                                          }
                                      ]
                    },
                    {
                        "id":  "T16",
                        "name":  "Mealy and Moore machines",
                        "unit":  1,
                        "papers":  [
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Jul 2025",
                                       "PYQ May 2026"
                                   ],
                        "marks":  [
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design a Moore machine printing a/b/c for substring 10 / 11 / otherwise; convert it to a Mealy machine"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2\u0027s complement of a binary input"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"
                                          },
                                          {
                                              "paper":  "PYQ May 2026",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert the given Mealy machine (states q1–q4) to a Moore machine"
                                          }
                                      ]
                    },
                    {
                        "id":  "T17",
                        "name":  "CFG design (write a grammar for a language)",
                        "unit":  2,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Nov 2025"
                                   ],
                        "marks":  [
                                      4,
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "22a(i)",
                                              "part":  "B",
                                              "marks":  4,
                                              "text":  "Given S→aSb|aAb, A→bAa, A→ba, find the context-free language generated"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "22a(ii)",
                                              "part":  "B",
                                              "marks":  4,
                                              "text":  "Generate a context-free grammar for the positive and negative integers"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "22b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Design an unambiguous CFG for HTML code with tags body, h1, p, a, div and the text inside them"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "23b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "22a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Find CFGs for L₁={aⁿb²ⁿ | n ≥ 1} and L₂={aⁿbᵐcᵐdⁿ | n,m ≥ 1}"
                                          }
                                      ]
                    },
                    {
                        "id":  "T18",
                        "name":  "DFA design (construct a DFA for a language)",
                        "unit":  1,
                        "papers":  [
                                       "PYQ May 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025",
                                       "PYQ Nov 2025"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a DFA that accepts an odd number of 1\u0027s and an even number of 0\u0027s"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Employee IDs over {a,b} with at least one \u0027a\u0027: list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring \u0027xxy\u0027"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2025",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"
                                          }
                                      ]
                    },
                    {
                        "id":  "T19",
                        "name":  "P, NP, NP-complete and NP-hard",
                        "unit":  5,
                        "papers":  [
                                       "PYQ May 2024",
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ May 2025"
                                   ],
                        "marks":  [
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Write short notes on NP-hard and NP-complete and express the relationship between them"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Explain class P, class NP, NP-complete and NP-hard problems with examples in detail"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Explain in detail P, NP, NP-complete and NP-hard"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"
                                          }
                                      ]
                    },
                    {
                        "id":  "T20",
                        "name":  "Rice\u0027s theorem and the language Lₑ",
                        "unit":  5,
                        "papers":  [
                                       "PYQ Jul 2024",
                                       "PYQ Nov 2024",
                                       "PYQ Jul 2025"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(a) State and explain Rice\u0027s theorem. (b) Prove that MPCP reduces to PCP"
                                          },
                                          {
                                              "paper":  "PYQ Nov 2024",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Describe in detail the Halting problem and Rice\u0027s theorem"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "25a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "State and prove Rice\u0027s theorem for recursively enumerable index sets"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "25b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Define Lₑ and prove that Lₑ is not recursive"
                                          }
                                      ]
                    },
                    {
                        "id":  "T21",
                        "name":  "ε-NFA and ε-closure",
                        "unit":  1,
                        "papers":  [
                                       "PYQ Nov 2023",
                                       "PYQ May 2024",
                                       "PYQ Jul 2025"
                                   ],
                        "marks":  [
                                      8,
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Nov 2023",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson\u0027s construction, convert an NFA to a DFA"
                                          },
                                          {
                                              "paper":  "PYQ May 2024",
                                              "number":  "21b",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Convert the regular expression 10+(0+11)0*1 into an ε-NFA"
                                          },
                                          {
                                              "paper":  "PYQ Jul 2025",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2\u0027s complement of a binary input"
                                          }
                                      ]
                    },
                    {
                        "id":  "T22",
                        "name":  "DPDA vs NPDA",
                        "unit":  3,
                        "papers":  [
                                       "PYQ Jul 2024",
                                       "PYQ May 2025"
                                   ],
                        "marks":  [
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "What are deterministic and non-deterministic PDAs? Explain each with an example"
                                          },
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "23a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "What are DPDA and NPDA? Design a PDA for L={aⁱbʲcᵏ | i=j or j=k}"
                                          }
                                      ]
                    },
                    {
                        "id":  "T23",
                        "name":  "Proof by mathematical induction",
                        "unit":  1,
                        "papers":  [
                                       "PYQ Jul 2024"
                                   ],
                        "marks":  [
                                      8
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ Jul 2024",
                                              "number":  "21a",
                                              "part":  "B",
                                              "marks":  8,
                                              "text":  "Prove by induction that 1²+2²+3²+…+n² = n(n+1)(2n+1)/6 for all positive integers n"
                                          }
                                      ]
                    },
                    {
                        "id":  "T24",
                        "name":  "Pumping lemma for context-free languages",
                        "unit":  3,
                        "papers":  [
                                       "PYQ May 2025"
                                   ],
                        "marks":  [
                                      15
                                  ],
                        "questions":  [
                                          {
                                              "paper":  "PYQ May 2025",
                                              "number":  "26",
                                              "part":  "C",
                                              "marks":  15,
                                              "text":  "(1) State and prove the pumping lemma for CFLs; show {aⁿbⁿcⁿ} is not context-free. (2) Minimize the given finite automaton"
                                          }
                                      ]
                    }
                ],
    "meta":  {
                 "course":  "SRMIST — B.Tech (2021 Regulation)",
                 "courseId":  "srmist-2021",
                 "institution":  "SRM Institute of Science and Technology",
                 "year":  3,
                 "sem":  5,
                 "units":  [
                               "Finite Automata and Regular Expressions",
                               "Regular Sets and Context Free Grammars",
                               "Pushdown Automata and Parsing Algorithms",
                               "Turing Machines",
                               "Introduction to Computational Complexity"
                           ],
                 "source":  "https://srmhelper.pro/subjects/formal-language-and-automata/",
                 "key":  "21CSC301T",
                 "custom":  false
             },
    "format":  [
                   {
                       "part":  "Part A",
                       "marks":  "20 × 1 = 20",
                       "text":  "20 MCQs on the OMR sheet in the first 40 minutes. Short definitions and facts: DFA/PDA/TM formal definitions, ID notation, closure properties, language classes, NP-complete examples, small grammar or automaton tracing."
                   },
                   {
                       "part":  "Part B",
                       "marks":  "5 × 8 = 40",
                       "text":  "Q21–Q25, each with an either/or choice, one question per unit (Q21 = Unit 1 … Q25 = Unit 5). Constructions and conversions: a DFA/NFA, a grammar, a PDA, a Turing machine, a PCP instance."
                   },
                   {
                       "part":  "Part C",
                       "marks":  "1 × 15 = 15",
                       "text":  "Q26 or Q27, one to answer. Usually long multi-step work: a Turing machine for arithmetic or copying (Q27 in 6 of 9 papers), or simplify-then-convert a grammar to CNF/GNF."
                   }
               ],
    "callouts":  [
                     {
                         "tone":  "hot",
                         "title":  "Unit 4 is the safest bet",
                         "text":  "A Turing machine question appeared in Part B (Q24) in all 9 papers, and a Turing machine was the Part C choice (Q27) in 6 of 9. Practise aⁿbⁿcⁿ, wwᴿ, substring machines and unary add / subtract / multiply."
                     },
                     {
                         "tone":  "star",
                         "title":  "Grammar work never stops",
                         "text":  "CFG simplification came up in 8 of 9 papers and GNF in 7 of 9, including every paper since Jul 2024. Learn the exact order: remove ε-productions, then unit productions, then useless symbols."
                     }
                 ],
    "top":  [
                {
                    "q":  "Turing machine for a language — aⁿbⁿcⁿ, wwᴿ, 0ⁿ1ⁿ, a substring, strings ending in b",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
                    "freq":  9,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a Turing machine for L={0ⁿ1ⁿ | n ≥ 1} and trace the string 0011 using IDs"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a TM that accepts strings containing \u0027aba\u0027 as a substring over {a,b}"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Construct a Turing machine that accepts all palindromes over {0,1}"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a TM for the language L={aⁿbⁿcⁿ | n ≥ 0}"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a TM for {aⁿbⁿcⁿ | n ≥ 0} and check that \u0027aaabbbccc\u0027 is accepted"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Give the tuple definition of a TM with instantaneous description; construct a TM for L={www | w ∈ {a,b}*}"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a TM for {wwᴿ | w ∈ {a,b}*} using the checking-off-symbols technique"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Construct a transition diagram for a Turing machine accepting L={wwᴿ | w ∈ (a+b)*}"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a TM for L={aⁿbⁿcⁿ | n ≥ 1} and demonstrate it on aabbcc"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a Turing machine for strings ending with b over {a,b}"
                                     }
                                 ],
                    "importance":  5,
                    "marks":  "8–15",
                    "unit":  4
                },
                {
                    "q":  "Turing machine for arithmetic or a transformation — add, proper subtraction, multiply, 2\u0027s complement, copy ww, replace 111 by 101",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
                    "freq":  9,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a Turing machine for the 2\u0027s complement of a binary number"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Obtain the code for \u003cM,1011\u003e for the given TM (δ table), and design a TM that adds two numbers"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(a) Construct a TM that replaces every occurrence of 111 by 101 in a string of 0\u0027s and 1\u0027s. (b) Construct a TM for proper subtraction m − n"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a Turing machine for addition and compute 2+3 with the steps"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Design a Turing machine that computes the multiplication of two numbers"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a Turing machine that checks whether the input is prime, using multiple tracks"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a Turing machine to compute the addition of two unary numbers"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Design a TM that multiplies two unary numbers (111 and 11) and show the steps"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Design a TM that takes w ∈ {0,1}* and outputs ww; show its action on 10 and 010"
                                     }
                                 ],
                    "importance":  5,
                    "marks":  "8–15",
                    "unit":  4
                },
                {
                    "q":  "CFG simplification — remove null, unit and useless productions in the right order",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
                    "freq":  8,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "22b(i)",
                                         "part":  "B",
                                         "marks":  4,
                                         "text":  "Simplify the given context-free grammar (A→a, B→b|C, B→C, E→C|ε)"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Simplify the grammar S→aA|a|C, A→aB|ε, B→aA, C→cCD"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for \u0027the dog catches the cat\u0027"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Remove unit, useless and null productions from S→aA|aBB, A→aaA|ε, B→bB|bbC, C→B; what language does it generate?"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Simplify the CFG S→XYX, X→0X|ε, Y→1Y|ε preserving its meaning"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(i) Define Chomsky\u0027s Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Voice-command grammar: (i) leftmost derivation of \u0027please open the door\u0027 (3 marks); (ii) convert to CNF then GNF (12 marks)"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Remove the null productions from the two given grammars"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"
                                     }
                                 ],
                    "importance":  5,
                    "marks":  "4–8",
                    "unit":  2
                },
                {
                    "q":  "PDA design — aⁿbⁿ, wwᴿ, wcwᴿ, aⁿbᵐcⁿ⁺ᵐ, aⁿbⁿcᵐdᵐ, equal a\u0027s and b\u0027s, aⁱbʲcᵏ with i=j or j=k",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Nov 2025, PYQ May 2026",
                    "freq":  8,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a PDA for L={wcwᴿ | w ∈ {a,b}+} accepting by empty stack"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a PDA for L={aⁿbᵐcⁿ⁺ᵐ | n,m ≥ 1} by empty stack and by final state"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a PDA for L={aⁿbᵐcᵐdⁿ | m,n ≥ 1}"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a PDA to accept L={wwᴿ | w ∈ {a,b}*}"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a PDA for {aⁿbⁿ | n ≥ 1} by empty stack, draw its diagram and show by ID that 0011 is accepted"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct PDAs for {aᵐ⁺ⁿbᵐcⁿ | n,m ≥ 0} and {aⁿbⁿc²ⁿ | n ≥ 0}"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "What are DPDA and NPDA? Design a PDA for L={aⁱbʲcᵏ | i=j or j=k}"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Design a PDA accepting strings with equal numbers of a\u0027s and b\u0027s. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct an NPDA for {w ∈ {a,b}* | nₐ(w)=n_b(w)} and trace the string baab"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a PDA for {aⁿbⁿcᵐdᵐ}"
                                     }
                                 ],
                    "importance":  5,
                    "marks":  "8",
                    "unit":  3
                },
                {
                    "q":  "Post Correspondence Problem — find a solution to a given instance; prove PCP undecidable; MPCP",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
                    "freq":  8,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Define PCP. For lists A=(1,10111,10), B=(111,10,0) over {0,1} find a solution"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Let Σ={0,1}, A=(1,10111,10), B=(111,10,–): find an instance of PCP"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Define PCP and prove that PCP is undecidable"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(a) State and explain Rice\u0027s theorem. (b) Prove that MPCP reduces to PCP"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(i) Prove that PCP is undecidable. (ii) Does the given instance (ab/abbb, bbab/a, baa/aa, b/bbb) have a PCP solution? Find the MPCP instance"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Lists A=(1,10111,10), B=(111,10,0) over {0,1}: find the instance of PCP"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Lists A={a,bab,bb,abba}, B={ab,b,bab,ba}: find a PCP solution, an MPCP solution, and explain whether PCP is decidable"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Lists M=(ab,bab,bbaaa), N=(a,ba,bab): is there a solution to this PCP instance?"
                                     }
                                 ],
                    "importance":  5,
                    "marks":  "8–15",
                    "unit":  5
                },
                {
                    "q":  "NFA to DFA conversion — subset construction from a transition table, with test strings",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ May 2026",
                    "freq":  7,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a DFA equivalent to the given NFA M (4 states, input {0,1}) from its transition table"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson\u0027s construction, convert an NFA to a DFA"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a DFA equivalent to the given NFA with states {P,Q,R,S}"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring \u0027xxy\u0027"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2\u0027s complement of a binary input"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a DFA equivalent to the NFA M=({P,Q,R,S},{0,1},δ,P,{Q,S}) given by a table"
                                     }
                                 ],
                    "importance":  5,
                    "marks":  "8",
                    "unit":  1
                },
                {
                    "q":  "Greibach Normal Form — convert a CFG to GNF (including removing ε and left recursion first)",
                    "seen":  "Appeared in: PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
                    "freq":  7,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert the grammar S→XA|BB, B→b|SB, X→b, A→a into Greibach Normal Form"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for \u0027the dog catches the cat\u0027"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert S→AA|a, A→SS|b into Greibach Normal Form"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert S→XB|AA, A→a|SA, B→b, X→a from CFG to GNF"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Voice-command grammar: (i) leftmost derivation of \u0027please open the door\u0027 (3 marks); (ii) convert to CNF then GNF (12 marks)"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"
                                     }
                                 ],
                    "importance":  5,
                    "marks":  "8–15",
                    "unit":  2
                },
                {
                    "q":  "CFG ↔ PDA conversion — grammar to PDA and check a string; PDA to grammar",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
                    "freq":  7,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "27i",
                                         "part":  "C",
                                         "marks":  8,
                                         "text":  "Convert the given PDA (δ(p,1,Z)={(p,XZ)} …) to a context-free grammar"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert the CFG S→0BB, B→0S|1S|0 to a PDA and check the string 010⁴"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Design a PDA accepting strings with equal numbers of a\u0027s and b\u0027s. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert the given PDA (states q0,q1,qf; stack symbols A,Z) into an equivalent CFG"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert E→E+E|E*E|a to a PDA and check the string a*a"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "23a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert S→aA, A→aABC|bB|a, B→b, C→c to a PDA and check whether abcba is accepted"
                                     }
                                 ],
                    "importance":  4,
                    "marks":  "8",
                    "unit":  3
                },
                {
                    "q":  "Regular expression ↔ finite automaton — RE to ε-NFA/DFA, DFA to RE",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2)",
                    "freq":  6,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson\u0027s construction, convert an NFA to a DFA"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert the regular expression 10+(0+11)0*1 into an ε-NFA"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Employee IDs over {a,b} with at least one \u0027a\u0027: list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
                                     }
                                 ],
                    "importance":  4,
                    "marks":  "8–15",
                    "unit":  1
                },
                {
                    "q":  "DFA minimization — table-filling or partition method",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ Jul 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
                    "freq":  6,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(1) State and prove the pumping lemma for CFLs; show {aⁿbⁿcⁿ} is not context-free. (2) Minimize the given finite automaton"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Use the table-filling algorithm to minimize the given 8-state DFA"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"
                                     }
                                 ],
                    "importance":  4,
                    "marks":  "8",
                    "unit":  1
                },
                {
                    "q":  "Chomsky Normal Form — convert (after simplifying) a grammar to CNF",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
                    "freq":  6,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "22b(ii)",
                                         "part":  "B",
                                         "marks":  4,
                                         "text":  "Check whether S→bA|aB, A→bAA|aS|a, B→bBB|bS|b is in Chomsky Normal Form"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for \u0027the dog catches the cat\u0027"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(i) Define Chomsky\u0027s Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Voice-command grammar: (i) leftmost derivation of \u0027please open the door\u0027 (3 marks); (ii) convert to CNF then GNF (12 marks)"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"
                                     }
                                 ],
                    "importance":  4,
                    "marks":  "4–15",
                    "unit":  2
                },
                {
                    "q":  "Derivations, parse trees and ambiguity — leftmost/rightmost derivation, show a grammar is ambiguous",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Nov 2024, PYQ Jul 2025, PYQ Nov 2025",
                    "freq":  5,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "27ii",
                                         "part":  "C",
                                         "marks":  7,
                                         "text":  "For S→a|^|(T), T→T,S|S give leftmost and rightmost derivations and the parse tree for (((a,a),^(a)),a)"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Find leftmost and rightmost derivations and the parse tree for w=+*-xyxy using E→+EE|*EE|-EE|x|y"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "22a(i)",
                                         "part":  "B",
                                         "marks":  4,
                                         "text":  "Find whether the grammar S→AS|A, A→aAb|c is ambiguous"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "27",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for \u0027the dog catches the cat\u0027"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Voice-command grammar: (i) leftmost derivation of \u0027please open the door\u0027 (3 marks); (ii) convert to CNF then GNF (12 marks)"
                                     }
                                 ],
                    "importance":  4,
                    "marks":  "4–8",
                    "unit":  2
                },
                {
                    "q":  "Regular language properties — closure under union/intersection/star/difference, pumping lemma to prove non-regular",
                    "seen":  "Appeared in: PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
                    "freq":  5,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Show that regular languages are closed under union, intersection, Kleene closure and difference"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "22a(ii)",
                                         "part":  "B",
                                         "marks":  4,
                                         "text":  "Discuss any four properties of a regular set with an example"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Prove that L={aⁿbⁿ | n ≥ 0} is not regular using the pumping lemma"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Prove that L={0ⁿ10ⁿ | n ≥ 1} is not regular"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"
                                     }
                                 ],
                    "importance":  4,
                    "marks":  "4–8",
                    "unit":  2
                },
                {
                    "q":  "Halting problem and decidable vs undecidable problems",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
                    "freq":  5,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Define the diagonalization language and show that Ld is not recursively enumerable"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Describe in detail the Halting problem and Rice\u0027s theorem"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Compare and contrast decidable and undecidable languages with examples"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025 (Paper - 2)",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Classify decidable and undecidable problems with an example"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"
                                     }
                                 ],
                    "importance":  4,
                    "marks":  "8",
                    "unit":  5
                },
                {
                    "q":  "TM variants, universal Turing machine, recursive vs recursively enumerable languages",
                    "seen":  "Appeared in: PYQ May 2024, PYQ May 2025, PYQ Nov 2025, PYQ May 2026",
                    "freq":  4,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Prove that the union of two recursive languages is recursive; discuss the complement property"
                                     },
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Obtain the code for \u003cM,1011\u003e for the given TM (δ table), and design a TM that adds two numbers"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "24b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Short notes on any two: extensions of TM, universal Turing machine, recursive and recursively enumerable languages"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Discuss any two variants of the Turing machine with examples and illustrations"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "24a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Write a short note on multitape and multihead Turing machines"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Discuss whether the sets of recursive and recursively enumerable languages are closed under complementation"
                                     }
                                 ],
                    "importance":  4,
                    "marks":  "8",
                    "unit":  4
                },
                {
                    "q":  "Mealy and Moore machines — design, run on input, convert one to the other",
                    "seen":  "Appeared in: PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ May 2026",
                    "freq":  4,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design a Moore machine printing a/b/c for substring 10 / 11 / otherwise; convert it to a Mealy machine"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2\u0027s complement of a binary input"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "21b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"
                                     },
                                     {
                                         "paper":  "PYQ May 2026",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Convert the given Mealy machine (states q1–q4) to a Moore machine"
                                     }
                                 ],
                    "importance":  3,
                    "marks":  "8",
                    "unit":  1
                },
                {
                    "q":  "CFG design — write a grammar for aⁿb²ⁿ, aⁿbᵐcᵐdⁿ, integers, HTML tags",
                    "seen":  "Appeared in: PYQ Nov 2023, PYQ Nov 2024, PYQ May 2025, PYQ Nov 2025",
                    "freq":  4,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "22a(i)",
                                         "part":  "B",
                                         "marks":  4,
                                         "text":  "Given S→aSb|aAb, A→bAa, A→ba, find the context-free language generated"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2023",
                                         "number":  "22a(ii)",
                                         "part":  "B",
                                         "marks":  4,
                                         "text":  "Generate a context-free grammar for the positive and negative integers"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "22b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Design an unambiguous CFG for HTML code with tags body, h1, p, a, div and the text inside them"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "23b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "22a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Find CFGs for L₁={aⁿb²ⁿ | n ≥ 1} and L₂={aⁿbᵐcᵐdⁿ | n,m ≥ 1}"
                                     }
                                 ],
                    "importance":  3,
                    "marks":  "4–8",
                    "unit":  2
                },
                {
                    "q":  "DFA design — parity of 0s and 1s, a forbidden substring, aⁿbᵐ with limits",
                    "seen":  "Appeared in: PYQ May 2024, PYQ Nov 2024, PYQ May 2025, PYQ Nov 2025",
                    "freq":  4,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a DFA that accepts an odd number of 1\u0027s and an even number of 0\u0027s"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "Employee IDs over {a,b} with at least one \u0027a\u0027: list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring \u0027xxy\u0027"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2025",
                                         "number":  "21a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"
                                     }
                                 ],
                    "importance":  3,
                    "marks":  "8–15",
                    "unit":  1
                },
                {
                    "q":  "P, NP, NP-complete and NP-hard — definitions, relationship, examples",
                    "seen":  "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025",
                    "freq":  4,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ May 2024",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Write short notes on NP-hard and NP-complete and express the relationship between them"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Explain class P, class NP, NP-complete and NP-hard problems with examples in detail"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Explain in detail P, NP, NP-complete and NP-hard"
                                     },
                                     {
                                         "paper":  "PYQ May 2025",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"
                                     }
                                 ],
                    "importance":  3,
                    "marks":  "8",
                    "unit":  5
                },
                {
                    "q":  "Rice\u0027s theorem and the language Lₑ",
                    "seen":  "Appeared in: PYQ Jul 2024, PYQ Nov 2024, PYQ Jul 2025",
                    "freq":  3,
                    "counted":  true,
                    "evidence":  [
                                     {
                                         "paper":  "PYQ Jul 2024",
                                         "number":  "26",
                                         "part":  "C",
                                         "marks":  15,
                                         "text":  "(a) State and explain Rice\u0027s theorem. (b) Prove that MPCP reduces to PCP"
                                     },
                                     {
                                         "paper":  "PYQ Nov 2024",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Describe in detail the Halting problem and Rice\u0027s theorem"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "25a",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "State and prove Rice\u0027s theorem for recursively enumerable index sets"
                                     },
                                     {
                                         "paper":  "PYQ Jul 2025",
                                         "number":  "25b",
                                         "part":  "B",
                                         "marks":  8,
                                         "text":  "Define Lₑ and prove that Lₑ is not recursive"
                                     }
                                 ],
                    "importance":  3,
                    "marks":  "8–15",
                    "unit":  5
                }
            ],
    "units":  [
                  {
                      "n":  1,
                      "title":  "Finite Automata and Regular Expressions",
                      "weight":  "High",
                      "topics":  [
                                     {
                                         "t":  "NFA design and NFA → DFA subset construction — DFA states are sets of NFA states; a set is final if it contains an NFA final state; up to 2ⁿ states, build only the reachable ones",
                                         "tag":  "7/9"
                                     },
                                     {
                                         "t":  "Regular expressions and automata — RE → ε-NFA by Thompson\u0027s rules (union, concatenation, star); DFA → RE by state elimination or the Rᵢⱼ method",
                                         "tag":  "6/9"
                                     },
                                     {
                                         "t":  "DFA minimization — table-filling: mark final/non-final pairs, propagate, merge the unmarked pairs; always remove unreachable states first",
                                         "tag":  "6/9"
                                     },
                                     {
                                         "t":  "Mealy and Moore machines — Moore output sits on states, Mealy output on transitions; practice: 2\u0027s complement, divisibility by 3, pattern detectors; convert both ways",
                                         "tag":  "4/9"
                                     },
                                     {
                                         "t":  "DFA design — track what must be remembered: parity of 0s and 1s, last symbols, a forbidden substring; add a dead state",
                                         "tag":  "4/9"
                                     },
                                     {
                                         "t":  "ε-NFA and ε-closure — ε-closure(q) is every state reachable by ε moves; used to convert an ε-NFA to a DFA",
                                         "tag":  "3/9"
                                     },
                                     {
                                         "t":  "Proof by induction — base case, hypothesis, step (Jul 2024: sum of squares)",
                                         "tag":  "1/9"
                                     }
                                 ]
                  },
                  {
                      "n":  2,
                      "title":  "Regular Sets and Context Free Grammars",
                      "weight":  "Very High",
                      "topics":  [
                                     {
                                         "t":  "CFG simplification — order matters: ε-productions, then unit productions, then useless symbols (non-generating first, then unreachable)",
                                         "tag":  "8/9"
                                     },
                                     {
                                         "t":  "Greibach Normal Form — every rule A → aα; remove ε and unit rules and left recursion first, then substitute until each rule starts with a terminal",
                                         "tag":  "7/9"
                                     },
                                     {
                                         "t":  "Chomsky Normal Form — rules A → BC or A → a; simplify, replace terminals inside long rules by new variables, split rules longer than 2",
                                         "tag":  "6/9"
                                     },
                                     {
                                         "t":  "Derivations, parse trees and ambiguity — leftmost/rightmost derivation, yield; a grammar is ambiguous if one string has two parse trees",
                                         "tag":  "5/9"
                                     },
                                     {
                                         "t":  "Regular language properties — closed under union, concatenation, star, complement, intersection, difference; pumping lemma proves aⁿbⁿ and 0ⁿ10ⁿ are not regular",
                                         "tag":  "5/9"
                                     },
                                     {
                                         "t":  "CFG design — match counts with S → aSb; nest for aⁿbᵐcᵐdⁿ; keep grammars unambiguous (HTML tags, integers)",
                                         "tag":  "4/9"
                                     },
                                     {
                                         "t":  "Chomsky hierarchy — Type 3 regular, Type 2 CFG, Type 1 context-sensitive, Type 0 unrestricted",
                                         "tag":  "MCQ"
                                     }
                                 ]
                  },
                  {
                      "n":  3,
                      "title":  "Pushdown Automata and Parsing Algorithms",
                      "weight":  "High",
                      "topics":  [
                                     {
                                         "t":  "PDA design — use the stack to count or match; accept by empty stack or final state; aⁱbʲcᵏ with i=j or j=k needs nondeterminism",
                                         "tag":  "8/9"
                                     },
                                     {
                                         "t":  "CFG ↔ PDA — grammar to PDA: push the start symbol, expand non-terminals on top, pop matching terminals; PDA to grammar uses variables [p X q]",
                                         "tag":  "7/9"
                                     },
                                     {
                                         "t":  "DPDA vs NPDA — one move per (state, input, stack top) for a DPDA; wwᴿ needs an NPDA; DPDA ⊂ NPDA",
                                         "tag":  "2/9"
                                     },
                                     {
                                         "t":  "Pumping lemma for CFLs — z = uvwxy, |vwx| ≤ n, |vx| ≥ 1, uvⁱwxⁱy ∈ L; shows aⁿbⁿcⁿ is not context-free",
                                         "tag":  "1/9"
                                     },
                                     {
                                         "t":  "PDA configuration (q, w, γ) and the ⊢ relation; parsing top-down vs bottom-up",
                                         "tag":  "MCQ"
                                     },
                                     {
                                         "t":  "Closure of CFLs — closed under union, concatenation, star; not closed under intersection or complement",
                                         "tag":  "MCQ"
                                     }
                                 ]
                  },
                  {
                      "n":  4,
                      "title":  "Turing Machines",
                      "weight":  "Very High",
                      "topics":  [
                                     {
                                         "t":  "TM for a language — mark-and-return technique: aⁿbⁿcⁿ (X,Y,Z), wwᴿ (match the ends), a substring such as aba, strings ending in b, 0ⁿ1ⁿ0ⁿ",
                                         "tag":  "9/9"
                                     },
                                     {
                                         "t":  "TM for arithmetic and transformations — unary addition, proper subtraction, multiplication by repeated copying, 2\u0027s complement, copying ww, replacing 111 by 101, primality with tracks",
                                         "tag":  "9/9"
                                     },
                                     {
                                         "t":  "TM variants, universal TM, recursive vs RE languages — multitape, multihead, NTM all equal the basic TM in power; UTM simulates any TM from its code \u003cM,w\u003e",
                                         "tag":  "4/9"
                                     },
                                     {
                                         "t":  "TM definition and ID — 7-tuple (Q, Σ, Γ, δ, q₀, B, F); ID is α q β; if δ is undefined the machine halts",
                                         "tag":  "MCQ"
                                     },
                                     {
                                         "t":  "Recursive vs RE — recursive is closed under union, intersection, complement; RE is closed under union and intersection but not complement; L and L̄ both RE ⇒ L recursive",
                                         "tag":  "4/9"
                                     }
                                 ]
                  },
                  {
                      "n":  5,
                      "title":  "Introduction to Computational Complexity",
                      "weight":  "High",
                      "topics":  [
                                     {
                                         "t":  "Post Correspondence Problem — solve an instance by chaining tiles with a common prefix; MPCP forces tile 1 first; PCP is undecidable (reduction from MPCP / halting)",
                                         "tag":  "8/9"
                                     },
                                     {
                                         "t":  "Halting problem and decidability — halting is undecidable (diagonal argument); Ld is not RE; decidable vs undecidable examples",
                                         "tag":  "5/9"
                                     },
                                     {
                                         "t":  "P, NP, NP-complete, NP-hard — P ⊆ NP; NP-complete = NP ∩ NP-hard; SAT was the first NP-complete problem; polynomial-time reductions",
                                         "tag":  "4/9"
                                     },
                                     {
                                         "t":  "Rice\u0027s theorem — every non-trivial property of RE languages is undecidable; Lₑ is not recursive",
                                         "tag":  "3/9"
                                     }
                                 ]
                  }
              ],
    "eight":  {
                  "title":  "Most Repeated 8-Mark Questions (Part B)",
                  "strategy":  "Part B is Q21–Q25, one question per unit, each with an either/or choice. Prepare one confident option per unit. The Turing machine in Q24 has never been missing, so Unit 4 is the one to master first.",
                  "groups":  [
                                 {
                                     "q":  "Q21",
                                     "unit":  1,
                                     "items":  [
                                                   "Construct a DFA equivalent to a given NFA from its transition table (7 of 9 papers)",
                                                   "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, test 100010 and 100000 (Nov 2024, Jul 2025 Paper 2)",
                                                   "Convert a regular expression such as a(a+b+c)*(a+b+c) or 10+(0+11)0*1 into a minimized DFA or ε-NFA",
                                                   "Design or convert a Mealy / Moore machine (2\u0027s complement, divisibility by 3, pattern detector)"
                                               ]
                                 },
                                 {
                                     "q":  "Q22",
                                     "unit":  2,
                                     "items":  [
                                                   "Simplify a CFG by removing null, unit and useless productions (8 of 9 papers)",
                                                   "Convert a CFG to Greibach Normal Form",
                                                   "Check or convert a grammar to Chomsky Normal Form",
                                                   "Leftmost / rightmost derivation and parse tree; show a grammar is ambiguous",
                                                   "Prove a language is not regular with the pumping lemma, or show closure properties of regular languages"
                                               ]
                                 },
                                 {
                                     "q":  "Q23",
                                     "unit":  3,
                                     "items":  [
                                                   "Design a PDA for aⁿbⁿ, wwᴿ, wcwᴿ, aⁿbᵐcⁿ⁺ᵐ, aⁿbⁿcᵐdᵐ or equal numbers of a\u0027s and b\u0027s (8 of 9 papers)",
                                                   "Convert a CFG to a PDA and check a string such as 010⁴ or a*a",
                                                   "Convert a given PDA to a CFG",
                                                   "DPDA vs NPDA with examples"
                                               ]
                                 },
                                 {
                                     "q":  "Q24",
                                     "unit":  4,
                                     "items":  [
                                                   "Turing machine for aⁿbⁿcⁿ with a trace on a sample string (Q24 has a TM in every paper; aⁿbⁿcⁿ itself in Jul 2024, Nov 2024, Nov 2025)",
                                                   "Turing machine for wwᴿ using the checking-off technique, or for the substring aba / strings ending in b",
                                                   "Turing machine for unary addition, proper subtraction or 2\u0027s complement",
                                                   "Short notes: multitape and multihead TMs, universal TM, recursive vs RE languages"
                                               ]
                                 },
                                 {
                                     "q":  "Q25",
                                     "unit":  5,
                                     "items":  [
                                                   "Find a solution to a given PCP instance (8 of 9 papers; lists A=(1,10111,10), B=(111,10,0) appear three times)",
                                                   "Define PCP and prove it is undecidable",
                                                   "Explain P, NP, NP-complete and NP-hard with examples",
                                                   "Halting problem and Rice\u0027s theorem; decidable vs undecidable problems with examples"
                                               ]
                                 }
                             ],
                  "tip":  "For every construction show the table or diagram first, then a trace on a sample string. Marks are given for the structure even if one transition is wrong."
              },
    "fifteen":  {
                    "title":  "Most Repeated 15-Mark Questions (Part C)",
                    "note":  "Q26 or Q27, answer one. Across the 9 papers, Q27 was a Turing machine 6 times and Q26/Q27 asked for CNF/GNF conversion 5 times. Prepare both, since either could be your pick.",
                    "items":  [
                                  {
                                      "q":  "Turing machine for arithmetic or copying — multiplication of two unary numbers, copy ww, replace 111 by 101, proper subtraction, palindromes, with a trace",
                                      "seen":  "Q27 in May 2024, Jul 2024, May 2025, Jul 2025 Paper 2, Nov 2025 and May 2026 (6 of 9)",
                                      "level":  "Hot"
                                  },
                                  {
                                      "q":  "Simplify a grammar and convert it to CNF and/or GNF, then derive a string or draw a parse tree",
                                      "seen":  "Nov 2024 Q27, Jul 2025 Q27, Jul 2025 Paper 2 Q26, Nov 2025 Q26, May 2026 Q26 (5 of 9)",
                                      "level":  "Hot"
                                  },
                                  {
                                      "q":  "PCP / MPCP — prove PCP undecidable, solve an instance, reduce MPCP to PCP; state Rice\u0027s theorem",
                                      "seen":  "Jul 2024 Q26 and Jul 2025 Q26",
                                      "level":  "Likely"
                                  },
                                  {
                                      "q":  "Scenario-based automata: list the language, build a DFA, convert DFA to regular expression (Rᵢⱼ), Thompson ε-NFA, NFA to DFA",
                                      "seen":  "Nov 2023 Q26 (bus stops) and Nov 2024 Q26 (employee IDs)",
                                      "level":  "Watch"
                                  },
                                  {
                                      "q":  "Pumping lemma for CFLs with aⁿbⁿcⁿ, plus DFA minimization",
                                      "seen":  "May 2025 Q26",
                                      "level":  "Watch"
                                  },
                                  {
                                      "q":  "Encode a Turing machine as \u003cM, w\u003e and design an adder; or convert a PDA to a CFG and draw a parse tree",
                                      "seen":  "May 2024 Q26; Nov 2023 Q27",
                                      "level":  "Watch"
                                  }
                              ]
                },
    "predict":  {
                    "note":  "Based on topic rotation across your 9 paper(s).",
                    "rows":  [
                                 [
                                     "Turing machine for a language (aⁿbⁿcⁿ, wwᴿ, substring)",
                                     4,
                                     "8",
                                     95,
                                     "In Q24 of all 9 papers"
                                 ],
                                 [
                                     "PDA design (aⁿbⁿcᵐdᵐ, wwᴿ, equal a\u0027s and b\u0027s)",
                                     3,
                                     "8",
                                     90,
                                     "8 of 9 papers; aⁿbⁿcᵐdᵐ appeared in Jul 2025 and May 2026"
                                 ],
                                 [
                                     "Turing machine for arithmetic / copy (Part C)",
                                     4,
                                     "15",
                                     85,
                                     "Q27 in 6 of 9 papers, including the last two"
                                 ],
                                 [
                                     "CFG simplification (null, unit, useless)",
                                     2,
                                     "8",
                                     85,
                                     "8 of 9 papers, including May 2026"
                                 ],
                                 [
                                     "Post Correspondence Problem instance",
                                     5,
                                     "8",
                                     80,
                                     "8 of 9 papers, missing only in Nov 2024"
                                 ],
                                 [
                                     "NFA to DFA conversion",
                                     1,
                                     "8",
                                     80,
                                     "7 of 9 papers, including May 2026"
                                 ],
                                 [
                                     "Greibach Normal Form",
                                     2,
                                     "8–15",
                                     80,
                                     "Every paper since Jul 2024; Part C in May 2026"
                                 ],
                                 [
                                     "CFG ↔ PDA conversion",
                                     3,
                                     "8",
                                     75,
                                     "7 of 9 papers; May 2026 asked CFG → PDA"
                                 ],
                                 [
                                     "Chomsky Normal Form",
                                     2,
                                     "8–15",
                                     65,
                                     "6 of 9 papers; Nov 2025 and May 2026 both had it"
                                 ],
                                 [
                                     "Regular expression ↔ automaton",
                                     1,
                                     "8",
                                     60,
                                     "6 of 9 papers; absent from May 2026"
                                 ],
                                 [
                                     "DFA minimization",
                                     1,
                                     "8",
                                     60,
                                     "6 of 9 papers; not in May 2026, so it is due"
                                 ],
                                 [
                                     "TM variants / universal TM / RE vs recursive",
                                     4,
                                     "8",
                                     60,
                                     "Nov 2025 and May 2026 both asked it"
                                 ],
                                 [
                                     "Halting problem / decidable vs undecidable",
                                     5,
                                     "8",
                                     55,
                                     "5 of 9 papers; last seen in Nov 2025"
                                 ],
                                 [
                                     "Regular language closure and pumping lemma",
                                     2,
                                     "8",
                                     55,
                                     "5 of 9 papers; Nov 2025 had both parts"
                                 ],
                                 [
                                     "Mealy and Moore machines",
                                     1,
                                     "8",
                                     50,
                                     "4 of 9; May 2026 asked Mealy → Moore"
                                 ],
                                 [
                                     "P, NP, NP-complete, NP-hard",
                                     5,
                                     "8",
                                     45,
                                     "4 of 9 papers; none in the last four, so it is due"
                                 ],
                                 [
                                     "Rice\u0027s theorem",
                                     5,
                                     "8–15",
                                     35,
                                     "3 of 9 papers; last seen Jul 2025"
                                 ]
                             ],
                    "callouts":  [

                                 ]
                },
    "formulas":  [
                     {
                         "title":  "Formal definitions",
                         "lines":  [
                                       "DFA   = (Q, Σ, δ, q₀, F),  δ : Q × Σ → Q",
                                       "NFA   = (Q, Σ, δ, q₀, F),  δ : Q × Σ → 2^Q",
                                       "ε-NFA : δ : Q × (Σ ∪ {ε}) → 2^Q",
                                       "Moore = (Q, Σ, Δ, δ, λ, q₀),  λ : Q → Δ   (output on states)",
                                       "Mealy = (Q, Σ, Δ, δ, λ, q₀),  λ : Q × Σ → Δ   (output on transitions)",
                                       "PDA   = (Q, Σ, Γ, δ, q₀, Z₀, F),  δ : Q × (Σ ∪ {ε}) × Γ → finite subsets of Q × Γ*",
                                       "TM    = (Q, Σ, Γ, δ, q₀, B, F),  δ : Q × Γ → Q × Γ × {L, R}"
                                   ]
                     },
                     {
                         "title":  "Closure properties",
                         "lines":  [
                                       "Regular  : union, concatenation, star, complement, intersection, difference, reversal — all closed",
                                       "CFL      : union, concatenation, star, reversal closed",
                                       "           intersection, complement, difference NOT closed (CFL ∩ regular is CFL)",
                                       "Recursive: closed under union, intersection, complement",
                                       "RE       : closed under union, intersection, concatenation, star; NOT complement",
                                       "L and L̄ both RE  ⇒  L is recursive"
                                   ]
                     },
                     {
                         "title":  "Grammar simplification and normal forms",
                         "lines":  [
                                       "Order: 1) remove ε-productions  2) remove unit productions  3) remove useless symbols",
                                       "  useless = non-generating variables first, then unreachable ones",
                                       "CNF: every rule  A → BC  or  A → a",
                                       "  replace terminals inside long rules with Cₐ → a; split A → B₁B₂…Bₖ into A → B₁D₁, D₁ → B₂D₂, …",
                                       "GNF: every rule  A → aα  (a terminal, α a string of variables)",
                                       "  remove ε, unit and left recursion (A → Aα | β becomes A → βZ | β, Z → αZ | α), then substitute"
                                   ]
                     },
                     {
                         "title":  "NFA → DFA and DFA minimization",
                         "lines":  [
                                       "Subset construction: DFA state = set of NFA states, at most 2ⁿ of them",
                                       "ε-closure(S) = S plus every state reachable by ε moves",
                                       "δ\u0027(S, a) = ε-closure( δ( ε-closure(S), a ) )",
                                       "Table filling: mark (p, q) if exactly one is final",
                                       "  mark (p, q) if (δ(p,a), δ(q,a)) is already marked for some a",
                                       "  merge every unmarked pair; remove unreachable states first"
                                   ]
                     },
                     {
                         "title":  "Pumping lemmas (to prove a language is NOT in the class)",
                         "lines":  [
                                       "Regular: ∃ p such that every w ∈ L with |w| ≥ p splits as w = xyz,",
                                       "  |xy| ≤ p, |y| ≥ 1, and xyⁱz ∈ L for all i ≥ 0",
                                       "  proof recipe: pick w = aᵖbᵖ, show y lies in the a\u0027s so xy²z has more a\u0027s than b\u0027s",
                                       "CFL: ∃ p such that every z ∈ L with |z| ≥ p splits as z = uvwxy,",
                                       "  |vwx| ≤ p, |vx| ≥ 1, and uvⁱwxⁱy ∈ L for all i ≥ 0 (use on aⁿbⁿcⁿ)"
                                   ]
                     },
                     {
                         "title":  "Turing machine technique cheat-sheet",
                         "lines":  [
                                       "aⁿbⁿcⁿ : mark a→X, then b→Y, then c→Z, return left, repeat; accept when only X,Y,Z remain",
                                       "wwᴿ    : cross off the first and last symbol, compare, repeat",
                                       "Unary add m+n : replace the separator 0 by 1, erase the last 1",
                                       "Proper subtraction m∸n : cancel one 1 on each side until one side is empty",
                                       "Multiplication m×n : for each 1 in m, append a copy of n to the output",
                                       "2\u0027s complement : copy bits from the right up to and including the first 1, invert the rest"
                                   ]
                     },
                     {
                         "title":  "Decidability and complexity facts",
                         "lines":  [
                                       "Decidable   : DFA/NFA acceptance, emptiness, equivalence; CFG membership and emptiness",
                                       "Undecidable : Halting problem, TM emptiness, CFG equivalence, PCP, any non-trivial property of RE languages (Rice)",
                                       "P ⊆ NP;   NP-complete = NP ∩ NP-hard",
                                       "A ≤p B and B ∈ P  ⇒  A ∈ P",
                                       "A NP-complete, A ≤p B, B ∈ NP  ⇒  B is NP-complete",
                                       "SAT is NP-complete (Cook–Levin); if P ≠ NP then P ∩ NP-complete = ∅"
                                   ]
                     }
                 ],
    "revision":  {
                     "must":  [
                                  "Turing machine for aⁿbⁿcⁿ and wwᴿ with transition table and a trace",
                                  "Unary addition, proper subtraction and multiplication machines",
                                  "PDA for aⁿbⁿ, wwᴿ and equal numbers of a\u0027s and b\u0027s",
                                  "Order of CFG simplification: ε, unit, useless",
                                  "Convert a grammar to GNF, step by step",
                                  "Solve a PCP instance by chaining tiles",
                                  "NFA to DFA with a transition table",
                                  "CFG to PDA and check a string",
                                  "State the Halting problem and Rice\u0027s theorem",
                                  "PDA to CFG using [p X q] variables"
                              ],
                     "ifTime":  [
                                    "DFA minimization with the table-filling algorithm",
                                    "RE to ε-NFA by Thompson\u0027s construction",
                                    "Chomsky Normal Form conversion",
                                    "Mealy ↔ Moore conversion",
                                    "Pumping lemma proof for aⁿbⁿ",
                                    "Closure properties of regular languages",
                                    "Show a grammar is ambiguous",
                                    "TM variants and the universal Turing machine",
                                    "P, NP, NP-complete, NP-hard relationships"
                                ],
                     "mcq":  [
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
    "tips":  [
                 {
                     "title":  "Own Unit 4 first",
                     "text":  "A Turing machine is in Q24 of every paper and in Part C in 6 of 9. Practise six machines with transition tables: aⁿbⁿcⁿ, wwᴿ, substring aba, unary addition, subtraction and multiplication."
                 },
                 {
                     "title":  "Learn the Part C pattern",
                     "text":  "Part C has been a Turing machine (6/9) or a CNF/GNF grammar conversion (5/9). Be ready for both, so whichever appears you have a clear choice."
                 },
                 {
                     "title":  "Grammar steps in the right order",
                     "text":  "For CFG simplification always go ε-productions, unit productions, then useless symbols. Doing them in another order can bring back rules you already removed."
                 },
                 {
                     "title":  "Q25 is almost always PCP",
                     "text":  "PCP appeared in 8 of 9 papers. Practise finding a solution by starting with the tile whose strings share a prefix, and know the two proofs: PCP is undecidable, and MPCP reduces to PCP."
                 },
                 {
                     "title":  "Show the table, then trace",
                     "text":  "For subset construction, minimization and PDA/TM questions, draw the table or diagram first and then trace one sample string. Partial marks come from visible steps."
                 },
                 {
                     "title":  "Part A is definitions",
                     "text":  "The MCQs repeat: TM and PDA tuples, ID notation, DPDA definition, closure properties, which language class is accepted by which machine, NP-complete examples. Revise these in the last hour."
                 },
                 {
                     "title":  "Watch the clock",
                     "text":  "Part A about 40 minutes (OMR is collected), Part B about 80 minutes (16 each), Part C about 30 minutes. A neat Turing machine trace takes time, so start Q24 early."
                 }
             ],
    "helper":  {
                   "sem":  5,
                   "name":  "Formal Language And Automata",
                   "used":  [
                                "PYQ Nov 2023",
                                "PYQ May 2024",
                                "PYQ Jul 2024",
                                "PYQ Nov 2024",
                                "PYQ May 2025",
                                "PYQ Jul 2025",
                                "PYQ Jul 2025 (Paper - 2)",
                                "PYQ Nov 2025",
                                "PYQ May 2026"
                            ]
               }
};
