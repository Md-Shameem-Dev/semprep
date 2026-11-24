// Hand-built from the past papers (see tools/hand-built/). Shipped as a built-in guide.
window.SEMPREP = window.SEMPREP || { guides: {} };
window.SEMPREP.guides["gen-21csc301t"] = {
  "code": "21CSC301T",
  "name": "Formal Language and Automata",
  "short": "FLA",
  "tagline": "Year 3 · Semester 5 · SRMIST — B.Tech (2021 Regulation)",
  "summary": "Built from all 9 previous-year papers on THE HELPER (Nov 2023 – May 2026). Every Part B and Part C question was read from the scanned papers and counted by topic, so the repeat counts are exact. Unit 4 (Turing machines) and Unit 2 (grammar simplification and normal forms) carry the most marks.",
  "papers": [
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
  "totalMarks": 75,
  "basis": "papers",
  "generated": {
    "at": "2026-11-19T06:23:00.785Z",
    "model": "claude-sonnet-5-5 (papers read by hand)",
    "basis": "papers",
    "method": "counted",
    "unread": []
  },
  "repeats": [
    {
      "id": "T1",
      "name": "Turing machine design for languages (aⁿbⁿcⁿ, wwᴿ, substrings)",
      "unit": 4,
      "papers": [
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
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Design a Turing machine for L={0ⁿ1ⁿ | n ≥ 1} and trace the string 0011 using IDs"
        },
        {
          "paper": "PYQ May 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a TM that accepts strings containing 'aba' as a substring over {a,b}"
        },
        {
          "paper": "PYQ May 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Construct a Turing machine that accepts all palindromes over {0,1}"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a TM for the language L={aⁿbⁿcⁿ | n ≥ 0}"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Construct a TM for {aⁿbⁿcⁿ | n ≥ 0} and check that 'aaabbbccc' is accepted"
        },
        {
          "paper": "PYQ May 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Give the tuple definition of a TM with instantaneous description; construct a TM for L={www | w ∈ {a,b}*}"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Design a TM for {wwᴿ | w ∈ {a,b}*} using the checking-off-symbols technique"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Construct a transition diagram for a Turing machine accepting L={wwᴿ | w ∈ (a+b)*}"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a TM for L={aⁿbⁿcⁿ | n ≥ 1} and demonstrate it on aabbcc"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a Turing machine for strings ending with b over {a,b}"
        }
      ]
    },
    {
      "id": "T2",
      "name": "Turing machine for arithmetic and transformations (add, subtract, multiply, 2's complement, copy)",
      "unit": 4,
      "papers": [
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
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a Turing machine for the 2's complement of a binary number"
        },
        {
          "paper": "PYQ May 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Obtain the code for <M,1011> for the given TM (δ table), and design a TM that adds two numbers"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(a) Construct a TM that replaces every occurrence of 111 by 101 in a string of 0's and 1's. (b) Construct a TM for proper subtraction m − n"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Design a Turing machine for addition and compute 2+3 with the steps"
        },
        {
          "paper": "PYQ May 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Design a Turing machine that computes the multiplication of two numbers"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Design a Turing machine that checks whether the input is prime, using multiple tracks"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Design a Turing machine to compute the addition of two unary numbers"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Design a TM that multiplies two unary numbers (111 and 11) and show the steps"
        },
        {
          "paper": "PYQ May 2026",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Design a TM that takes w ∈ {0,1}* and outputs ww; show its action on 10 and 010"
        }
      ]
    },
    {
      "id": "T3",
      "name": "CFG simplification (null, unit, useless productions)",
      "unit": 2,
      "papers": [
        "PYQ Nov 2023",
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        4,
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "22b(i)",
          "part": "B",
          "marks": 4,
          "text": "Simplify the given context-free grammar (A→a, B→b|C, B→C, E→C|ε)"
        },
        {
          "paper": "PYQ May 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Simplify the grammar S→aA|a|C, A→aB|ε, B→aA, C→cCD"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"
        },
        {
          "paper": "PYQ May 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Remove unit, useless and null productions from S→aA|aBB, A→aaA|ε, B→bB|bbC, C→B; what language does it generate?"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Simplify the CFG S→XYX, X→0X|ε, Y→1Y|ε preserving its meaning"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(i) Define Chomsky's Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Remove the null productions from the two given grammars"
        },
        {
          "paper": "PYQ May 2026",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"
        }
      ]
    },
    {
      "id": "T4",
      "name": "PDA design",
      "unit": 3,
      "papers": [
        "PYQ Nov 2023",
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Construct a PDA for L={wcwᴿ | w ∈ {a,b}+} accepting by empty stack"
        },
        {
          "paper": "PYQ Nov 2023",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a PDA for L={aⁿbᵐcⁿ⁺ᵐ | n,m ≥ 1} by empty stack and by final state"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Design a PDA for L={aⁿbᵐcᵐdⁿ | m,n ≥ 1}"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a PDA to accept L={wwᴿ | w ∈ {a,b}*}"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a PDA for {aⁿbⁿ | n ≥ 1} by empty stack, draw its diagram and show by ID that 0011 is accepted"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Construct PDAs for {aᵐ⁺ⁿbᵐcⁿ | n,m ≥ 0} and {aⁿbⁿc²ⁿ | n ≥ 0}"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "What are DPDA and NPDA? Design a PDA for L={aⁱbʲcᵏ | i=j or j=k}"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "(i) Design a PDA accepting strings with equal numbers of a's and b's. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Construct an NPDA for {w ∈ {a,b}* | nₐ(w)=n_b(w)} and trace the string baab"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Design a PDA for {aⁿbⁿcᵐdᵐ}"
        }
      ]
    },
    {
      "id": "T5",
      "name": "Post Correspondence Problem (PCP and MPCP)",
      "unit": 5,
      "papers": [
        "PYQ Nov 2023",
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Define PCP. For lists A=(1,10111,10), B=(111,10,0) over {0,1} find a solution"
        },
        {
          "paper": "PYQ May 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Let Σ={0,1}, A=(1,10111,10), B=(111,10,–): find an instance of PCP"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Define PCP and prove that PCP is undecidable"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(a) State and explain Rice's theorem. (b) Prove that MPCP reduces to PCP"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(i) Prove that PCP is undecidable. (ii) Does the given instance (ab/abbb, bbab/a, baa/aa, b/bbb) have a PCP solution? Find the MPCP instance"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Lists A=(1,10111,10), B=(111,10,0) over {0,1}: find the instance of PCP"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Lists A={a,bab,bb,abba}, B={ab,b,bab,ba}: find a PCP solution, an MPCP solution, and explain whether PCP is decidable"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Lists M=(ab,bab,bbaaa), N=(a,ba,bab): is there a solution to this PCP instance?"
        }
      ]
    },
    {
      "id": "T6",
      "name": "NFA design and NFA to DFA conversion",
      "unit": 1,
      "papers": [
        "PYQ Nov 2023",
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ May 2026"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Construct a DFA equivalent to the given NFA M (4 states, input {0,1}) from its transition table"
        },
        {
          "paper": "PYQ Nov 2023",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson's construction, convert an NFA to a DFA"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Construct a DFA equivalent to the given NFA with states {P,Q,R,S}"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring 'xxy'"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2's complement of a binary input"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Construct a DFA equivalent to the NFA M=({P,Q,R,S},{0,1},δ,P,{Q,S}) given by a table"
        }
      ]
    },
    {
      "id": "T7",
      "name": "CFG to PDA and PDA to CFG conversion",
      "unit": 3,
      "papers": [
        "PYQ Nov 2023",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "27i",
          "part": "C",
          "marks": 8,
          "text": "Convert the given PDA (δ(p,1,Z)={(p,XZ)} …) to a context-free grammar"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Convert the CFG S→0BB, B→0S|1S|0 to a PDA and check the string 010⁴"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "(i) Design a PDA accepting strings with equal numbers of a's and b's. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Convert the given PDA (states q0,q1,qf; stack symbols A,Z) into an equivalent CFG"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Convert E→E+E|E*E|a to a PDA and check the string a*a"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Convert S→aA, A→aABC|bB|a, B→b, C→c to a PDA and check whether abcba is accepted"
        }
      ]
    },
    {
      "id": "T8",
      "name": "Greibach Normal Form (GNF)",
      "unit": 2,
      "papers": [
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Convert the grammar S→XA|BB, B→b|SB, X→b, A→a into Greibach Normal Form"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"
        },
        {
          "paper": "PYQ May 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Convert S→AA|a, A→SS|b into Greibach Normal Form"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Convert S→XB|AA, A→a|SA, B→b, X→a from CFG to GNF"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"
        },
        {
          "paper": "PYQ May 2026",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"
        }
      ]
    },
    {
      "id": "T9",
      "name": "Regular expressions and finite automata (RE to FA, FA to RE)",
      "unit": 1,
      "papers": [
        "PYQ Nov 2023",
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
        },
        {
          "paper": "PYQ Nov 2023",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson's construction, convert an NFA to a DFA"
        },
        {
          "paper": "PYQ May 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Convert the regular expression 10+(0+11)0*1 into an ε-NFA"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Employee IDs over {a,b} with at least one 'a': list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
        }
      ]
    },
    {
      "id": "T10",
      "name": "DFA minimization",
      "unit": 1,
      "papers": [
        "PYQ Nov 2023",
        "PYQ Jul 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"
        },
        {
          "paper": "PYQ May 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(1) State and prove the pumping lemma for CFLs; show {aⁿbⁿcⁿ} is not context-free. (2) Minimize the given finite automaton"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Use the table-filling algorithm to minimize the given 8-state DFA"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"
        }
      ]
    },
    {
      "id": "T11",
      "name": "Chomsky Normal Form (CNF)",
      "unit": 2,
      "papers": [
        "PYQ Nov 2023",
        "PYQ Nov 2024",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        4,
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "22b(ii)",
          "part": "B",
          "marks": 4,
          "text": "Check whether S→bA|aB, A→bAA|aS|a, B→bBB|bS|b is in Chomsky Normal Form"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(i) Define Chomsky's Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"
        }
      ]
    },
    {
      "id": "T12",
      "name": "Derivations, parse trees and ambiguity",
      "unit": 2,
      "papers": [
        "PYQ Nov 2023",
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ Jul 2025",
        "PYQ Nov 2025"
      ],
      "marks": [
        4,
        7,
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "27ii",
          "part": "C",
          "marks": 7,
          "text": "For S→a|^|(T), T→T,S|S give leftmost and rightmost derivations and the parse tree for (((a,a),^(a)),a)"
        },
        {
          "paper": "PYQ May 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Find leftmost and rightmost derivations and the parse tree for w=+*-xyxy using E→+EE|*EE|-EE|x|y"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22a(i)",
          "part": "B",
          "marks": 4,
          "text": "Find whether the grammar S→AS|A, A→aAb|c is ambiguous"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"
        }
      ]
    },
    {
      "id": "T13",
      "name": "Regular language properties: closure and pumping lemma",
      "unit": 2,
      "papers": [
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025"
      ],
      "marks": [
        4,
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Show that regular languages are closed under union, intersection, Kleene closure and difference"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22a(ii)",
          "part": "B",
          "marks": 4,
          "text": "Discuss any four properties of a regular set with an example"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Prove that L={aⁿbⁿ | n ≥ 0} is not regular using the pumping lemma"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Prove that L={0ⁿ10ⁿ | n ≥ 1} is not regular"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"
        }
      ]
    },
    {
      "id": "T14",
      "name": "Halting problem, decidable and undecidable problems",
      "unit": 5,
      "papers": [
        "PYQ Nov 2023",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Define the diagonalization language and show that Ld is not recursively enumerable"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Describe in detail the Halting problem and Rice's theorem"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Compare and contrast decidable and undecidable languages with examples"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Classify decidable and undecidable problems with an example"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"
        }
      ]
    },
    {
      "id": "T15",
      "name": "TM variants, universal TM, recursive and RE languages",
      "unit": 4,
      "papers": [
        "PYQ May 2024",
        "PYQ May 2025",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Prove that the union of two recursive languages is recursive; discuss the complement property"
        },
        {
          "paper": "PYQ May 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Obtain the code for <M,1011> for the given TM (δ table), and design a TM that adds two numbers"
        },
        {
          "paper": "PYQ May 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Short notes on any two: extensions of TM, universal Turing machine, recursive and recursively enumerable languages"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Discuss any two variants of the Turing machine with examples and illustrations"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Write a short note on multitape and multihead Turing machines"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Discuss whether the sets of recursive and recursively enumerable languages are closed under complementation"
        }
      ]
    },
    {
      "id": "T16",
      "name": "Mealy and Moore machines",
      "unit": 1,
      "papers": [
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Design a Moore machine printing a/b/c for substring 10 / 11 / otherwise; convert it to a Mealy machine"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2's complement of a binary input"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Convert the given Mealy machine (states q1–q4) to a Moore machine"
        }
      ]
    },
    {
      "id": "T17",
      "name": "CFG design (write a grammar for a language)",
      "unit": 2,
      "papers": [
        "PYQ Nov 2023",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Nov 2025"
      ],
      "marks": [
        4,
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "22a(i)",
          "part": "B",
          "marks": 4,
          "text": "Given S→aSb|aAb, A→bAa, A→ba, find the context-free language generated"
        },
        {
          "paper": "PYQ Nov 2023",
          "number": "22a(ii)",
          "part": "B",
          "marks": 4,
          "text": "Generate a context-free grammar for the positive and negative integers"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Design an unambiguous CFG for HTML code with tags body, h1, p, a, div and the text inside them"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Find CFGs for L₁={aⁿb²ⁿ | n ≥ 1} and L₂={aⁿbᵐcᵐdⁿ | n,m ≥ 1}"
        }
      ]
    },
    {
      "id": "T18",
      "name": "DFA design (construct a DFA for a language)",
      "unit": 1,
      "papers": [
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Nov 2025"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Construct a DFA that accepts an odd number of 1's and an even number of 0's"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Employee IDs over {a,b} with at least one 'a': list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring 'xxy'"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"
        }
      ]
    },
    {
      "id": "T19",
      "name": "P, NP, NP-complete and NP-hard",
      "unit": 5,
      "papers": [
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ May 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Write short notes on NP-hard and NP-complete and express the relationship between them"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Explain class P, class NP, NP-complete and NP-hard problems with examples in detail"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Explain in detail P, NP, NP-complete and NP-hard"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"
        }
      ]
    },
    {
      "id": "T20",
      "name": "Rice's theorem and the language Lₑ",
      "unit": 5,
      "papers": [
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ Jul 2025"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(a) State and explain Rice's theorem. (b) Prove that MPCP reduces to PCP"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Describe in detail the Halting problem and Rice's theorem"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "State and prove Rice's theorem for recursively enumerable index sets"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Define Lₑ and prove that Lₑ is not recursive"
        }
      ]
    },
    {
      "id": "T21",
      "name": "ε-NFA and ε-closure",
      "unit": 1,
      "papers": [
        "PYQ Nov 2023",
        "PYQ May 2024",
        "PYQ Jul 2025"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2023",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson's construction, convert an NFA to a DFA"
        },
        {
          "paper": "PYQ May 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Convert the regular expression 10+(0+11)0*1 into an ε-NFA"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2's complement of a binary input"
        }
      ]
    },
    {
      "id": "T22",
      "name": "DPDA vs NPDA",
      "unit": 3,
      "papers": [
        "PYQ Jul 2024",
        "PYQ May 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "What are deterministic and non-deterministic PDAs? Explain each with an example"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "What are DPDA and NPDA? Design a PDA for L={aⁱbʲcᵏ | i=j or j=k}"
        }
      ]
    },
    {
      "id": "T23",
      "name": "Proof by mathematical induction",
      "unit": 1,
      "papers": [
        "PYQ Jul 2024"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Prove by induction that 1²+2²+3²+…+n² = n(n+1)(2n+1)/6 for all positive integers n"
        }
      ]
    },
    {
      "id": "T24",
      "name": "Pumping lemma for context-free languages",
      "unit": 3,
      "papers": [
        "PYQ May 2025"
      ],
      "marks": [
        15
      ],
      "questions": [
        {
          "paper": "PYQ May 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(1) State and prove the pumping lemma for CFLs; show {aⁿbⁿcⁿ} is not context-free. (2) Minimize the given finite automaton"
        }
      ]
    }
  ],
  "meta": {
    "course": "SRMIST — B.Tech (2021 Regulation)",
    "courseId": "srmist-2021",
    "institution": "SRM Institute of Science and Technology",
    "year": 3,
    "sem": 5,
    "units": [
      "Finite Automata and Regular Expressions",
      "Regular Sets and Context Free Grammars",
      "Pushdown Automata and Parsing Algorithms",
      "Turing Machines",
      "Introduction to Computational Complexity"
    ],
    "source": "https://srmhelper.pro/subjects/formal-language-and-automata/",
    "key": "21CSC301T",
    "custom": false
  },
  "format": [
    {
      "part": "Part A",
      "marks": "20 × 1 = 20",
      "text": "20 MCQs on the OMR sheet in the first 40 minutes. Short definitions and facts: DFA/PDA/TM formal definitions, ID notation, closure properties, language classes, NP-complete examples, small grammar or automaton tracing."
    },
    {
      "part": "Part B",
      "marks": "5 × 8 = 40",
      "text": "Q21–Q25, each with an either/or choice, one question per unit (Q21 = Unit 1 … Q25 = Unit 5). Constructions and conversions: a DFA/NFA, a grammar, a PDA, a Turing machine, a PCP instance."
    },
    {
      "part": "Part C",
      "marks": "1 × 15 = 15",
      "text": "Q26 or Q27, one to answer. Usually long multi-step work: a Turing machine for arithmetic or copying (Q27 in 6 of 9 papers), or simplify-then-convert a grammar to CNF/GNF."
    }
  ],
  "callouts": [
    {
      "tone": "hot",
      "title": "Unit 4 is the safest bet",
      "text": "A Turing machine question appeared in Part B (Q24) in all 9 papers, and a Turing machine was the Part C choice (Q27) in 6 of 9. Practise aⁿbⁿcⁿ, wwᴿ, substring machines and unary add / subtract / multiply."
    },
    {
      "tone": "star",
      "title": "Grammar work never stops",
      "text": "CFG simplification came up in 8 of 9 papers and GNF in 7 of 9, including every paper since Jul 2024. Learn the exact order: remove ε-productions, then unit productions, then useless symbols."
    }
  ],
  "top": [
    {
      "q": "Turing machine for a language — aⁿbⁿcⁿ, wwᴿ, 0ⁿ1ⁿ, a substring, strings ending in b",
      "seen": "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 9,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Design a Turing machine for L={0ⁿ1ⁿ | n ≥ 1} and trace the string 0011 using IDs"
        },
        {
          "paper": "PYQ May 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a TM that accepts strings containing 'aba' as a substring over {a,b}"
        },
        {
          "paper": "PYQ May 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Construct a Turing machine that accepts all palindromes over {0,1}"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a TM for the language L={aⁿbⁿcⁿ | n ≥ 0}"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Construct a TM for {aⁿbⁿcⁿ | n ≥ 0} and check that 'aaabbbccc' is accepted"
        },
        {
          "paper": "PYQ May 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Give the tuple definition of a TM with instantaneous description; construct a TM for L={www | w ∈ {a,b}*}"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Design a TM for {wwᴿ | w ∈ {a,b}*} using the checking-off-symbols technique"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Construct a transition diagram for a Turing machine accepting L={wwᴿ | w ∈ (a+b)*}"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a TM for L={aⁿbⁿcⁿ | n ≥ 1} and demonstrate it on aabbcc"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a Turing machine for strings ending with b over {a,b}"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 4
    },
    {
      "q": "Turing machine for arithmetic or a transformation — add, proper subtraction, multiply, 2's complement, copy ww, replace 111 by 101",
      "seen": "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 9,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Construct a Turing machine for the 2's complement of a binary number"
        },
        {
          "paper": "PYQ May 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Obtain the code for <M,1011> for the given TM (δ table), and design a TM that adds two numbers"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(a) Construct a TM that replaces every occurrence of 111 by 101 in a string of 0's and 1's. (b) Construct a TM for proper subtraction m − n"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Design a Turing machine for addition and compute 2+3 with the steps"
        },
        {
          "paper": "PYQ May 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Design a Turing machine that computes the multiplication of two numbers"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "(i) Design a TM for proper subtraction m∸n and simulate it. (ii) Design a TM for {0ⁿ1ⁿ0ⁿ | n ≥ 1}"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Design a Turing machine that checks whether the input is prime, using multiple tracks"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Design a Turing machine to compute the addition of two unary numbers"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Design a TM that multiplies two unary numbers (111 and 11) and show the steps"
        },
        {
          "paper": "PYQ May 2026",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Design a TM that takes w ∈ {0,1}* and outputs ww; show its action on 10 and 010"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 4
    },
    {
      "q": "CFG simplification — remove null, unit and useless productions in the right order",
      "seen": "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 8,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "22b(i)",
          "part": "B",
          "marks": 4,
          "text": "Simplify the given context-free grammar (A→a, B→b|C, B→C, E→C|ε)"
        },
        {
          "paper": "PYQ May 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Simplify the grammar S→aA|a|C, A→aB|ε, B→aA, C→cCD"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"
        },
        {
          "paper": "PYQ May 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Remove unit, useless and null productions from S→aA|aBB, A→aaA|ε, B→bB|bbC, C→B; what language does it generate?"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Simplify the CFG S→XYX, X→0X|ε, Y→1Y|ε preserving its meaning"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(i) Define Chomsky's Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Remove the null productions from the two given grammars"
        },
        {
          "paper": "PYQ May 2026",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"
        }
      ],
      "importance": 5,
      "marks": "4–8",
      "unit": 2
    },
    {
      "q": "PDA design — aⁿbⁿ, wwᴿ, wcwᴿ, aⁿbᵐcⁿ⁺ᵐ, aⁿbⁿcᵐdᵐ, equal a's and b's, aⁱbʲcᵏ with i=j or j=k",
      "seen": "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Nov 2025, PYQ May 2026",
      "freq": 8,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Construct a PDA for L={wcwᴿ | w ∈ {a,b}+} accepting by empty stack"
        },
        {
          "paper": "PYQ Nov 2023",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a PDA for L={aⁿbᵐcⁿ⁺ᵐ | n,m ≥ 1} by empty stack and by final state"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Design a PDA for L={aⁿbᵐcᵐdⁿ | m,n ≥ 1}"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a PDA to accept L={wwᴿ | w ∈ {a,b}*}"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a PDA for {aⁿbⁿ | n ≥ 1} by empty stack, draw its diagram and show by ID that 0011 is accepted"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Construct PDAs for {aᵐ⁺ⁿbᵐcⁿ | n,m ≥ 0} and {aⁿbⁿc²ⁿ | n ≥ 0}"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "What are DPDA and NPDA? Design a PDA for L={aⁱbʲcᵏ | i=j or j=k}"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "(i) Design a PDA accepting strings with equal numbers of a's and b's. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Construct an NPDA for {w ∈ {a,b}* | nₐ(w)=n_b(w)} and trace the string baab"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Design a PDA for {aⁿbⁿcᵐdᵐ}"
        }
      ],
      "importance": 5,
      "marks": "8",
      "unit": 3
    },
    {
      "q": "Post Correspondence Problem — find a solution to a given instance; prove PCP undecidable; MPCP",
      "seen": "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 8,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Define PCP. For lists A=(1,10111,10), B=(111,10,0) over {0,1} find a solution"
        },
        {
          "paper": "PYQ May 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Let Σ={0,1}, A=(1,10111,10), B=(111,10,–): find an instance of PCP"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Define PCP and prove that PCP is undecidable"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(a) State and explain Rice's theorem. (b) Prove that MPCP reduces to PCP"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(i) Prove that PCP is undecidable. (ii) Does the given instance (ab/abbb, bbab/a, baa/aa, b/bbb) have a PCP solution? Find the MPCP instance"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Lists A=(1,10111,10), B=(111,10,0) over {0,1}: find the instance of PCP"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Lists A={a,bab,bb,abba}, B={ab,b,bab,ba}: find a PCP solution, an MPCP solution, and explain whether PCP is decidable"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Lists M=(ab,bab,bbaaa), N=(a,ba,bab): is there a solution to this PCP instance?"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 5
    },
    {
      "q": "NFA to DFA conversion — subset construction from a transition table, with test strings",
      "seen": "Appeared in: PYQ Nov 2023, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ May 2026",
      "freq": 7,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Construct a DFA equivalent to the given NFA M (4 states, input {0,1}) from its transition table"
        },
        {
          "paper": "PYQ Nov 2023",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson's construction, convert an NFA to a DFA"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Construct a DFA equivalent to the given NFA with states {P,Q,R,S}"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring 'xxy'"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2's complement of a binary input"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, and test 100010 and 100000"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Construct a DFA equivalent to the NFA M=({P,Q,R,S},{0,1},δ,P,{Q,S}) given by a table"
        }
      ],
      "importance": 5,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "Greibach Normal Form — convert a CFG to GNF (including removing ε and left recursion first)",
      "seen": "Appeared in: PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 7,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jul 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Convert the grammar S→XA|BB, B→b|SB, X→b, A→a into Greibach Normal Form"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"
        },
        {
          "paper": "PYQ May 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Convert S→AA|a, A→SS|b into Greibach Normal Form"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Convert S→XB|AA, A→a|SA, B→b, X→a from CFG to GNF"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"
        },
        {
          "paper": "PYQ May 2026",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Convert S→aA|bB, B→bB|ε, A→aA|ε into Greibach Normal Form"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 2
    },
    {
      "q": "CFG ↔ PDA conversion — grammar to PDA and check a string; PDA to grammar",
      "seen": "Appeared in: PYQ Nov 2023, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 7,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "27i",
          "part": "C",
          "marks": 8,
          "text": "Convert the given PDA (δ(p,1,Z)={(p,XZ)} …) to a context-free grammar"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Convert the CFG S→0BB, B→0S|1S|0 to a PDA and check the string 010⁴"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "(i) Design a PDA accepting strings with equal numbers of a's and b's. (ii) For S→0BB, B→0S|1S|0 construct a PDA and test 010⁴"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "(i) Find a PDA for {aⁿbⁿcᵐdᵐ | n,m ≥ 1}. (ii) Convert the given PDA (six δ-rules) to a CFG"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Convert the given PDA (states q0,q1,qf; stack symbols A,Z) into an equivalent CFG"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Convert E→E+E|E*E|a to a PDA and check the string a*a"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Convert S→aA, A→aABC|bB|a, B→b, C→c to a PDA and check whether abcba is accepted"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 3
    },
    {
      "q": "Regular expression ↔ finite automaton — RE to ε-NFA/DFA, DFA to RE",
      "seen": "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2)",
      "freq": 6,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
        },
        {
          "paper": "PYQ Nov 2023",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Bus-stop pattern: write a regular expression, draw a DFA, list accepted strings, design an ε-NFA by Thompson's construction, convert an NFA to a DFA"
        },
        {
          "paper": "PYQ May 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Convert the regular expression 10+(0+11)0*1 into an ε-NFA"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Employee IDs over {a,b} with at least one 'a': list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
        }
      ],
      "importance": 4,
      "marks": "8–15",
      "unit": 1
    },
    {
      "q": "DFA minimization — table-filling or partition method",
      "seen": "Appeared in: PYQ Nov 2023, PYQ Jul 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
      "freq": 6,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "(1) Construct a minimized DFA for the RE 10+(0+11)0*1. (2) Prove that for every regular expression r there is an ε-NFA accepting L(r)"
        },
        {
          "paper": "PYQ May 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(1) State and prove the pumping lemma for CFLs; show {aⁿbⁿcⁿ} is not context-free. (2) Minimize the given finite automaton"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Use the table-filling algorithm to minimize the given 8-state DFA"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Design a minimized DFA by converting the regular expression a(a+b+c)*(a+b+c)"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "Chomsky Normal Form — convert (after simplifying) a grammar to CNF",
      "seen": "Appeared in: PYQ Nov 2023, PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 6,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "22b(ii)",
          "part": "B",
          "marks": 4,
          "text": "Check whether S→bA|aB, A→bAA|aS|a, B→bBB|bS|b is in Chomsky Normal Form"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Convert S→ABC, A→BC|a, B→bAC|ε, C→cAB|ε to CNF showing the steps. (ii) Find the regular expression for the given automaton"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(i) Define Chomsky's Normal Form; simplify and convert the given grammar to CNF (12 marks). (ii) Remove unit productions (3 marks)"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Convert the grammar S→aAa|bBb|ε, A→C|a, B→C|b, C→CDE|ε, D→A|B|ab to CNF"
        }
      ],
      "importance": 4,
      "marks": "4–15",
      "unit": 2
    },
    {
      "q": "Derivations, parse trees and ambiguity — leftmost/rightmost derivation, show a grammar is ambiguous",
      "seen": "Appeared in: PYQ Nov 2023, PYQ May 2024, PYQ Nov 2024, PYQ Jul 2025, PYQ Nov 2025",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "27ii",
          "part": "C",
          "marks": 7,
          "text": "For S→a|^|(T), T→T,S|S give leftmost and rightmost derivations and the parse tree for (((a,a),^(a)),a)"
        },
        {
          "paper": "PYQ May 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Find leftmost and rightmost derivations and the parse tree for w=+*-xyxy using E→+EE|*EE|-EE|x|y"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22a(i)",
          "part": "B",
          "marks": 4,
          "text": "Find whether the grammar S→AS|A, A→aAb|c is ambiguous"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "For the NP–VP grammar: remove null and unit productions, convert to CNF and GNF, derive the parse tree for 'the dog catches the cat'"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) Convert S→AB, S→BSB|BB|b, S→aAb|a to GNF. (ii) Test whether S→0S1S|1S0S|ε and S→AA, A→aAb|bAa|ε are ambiguous"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Voice-command grammar: (i) leftmost derivation of 'please open the door' (3 marks); (ii) convert to CNF then GNF (12 marks)"
        }
      ],
      "importance": 4,
      "marks": "4–8",
      "unit": 2
    },
    {
      "q": "Regular language properties — closure under union/intersection/star/difference, pumping lemma to prove non-regular",
      "seen": "Appeared in: PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jul 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Show that regular languages are closed under union, intersection, Kleene closure and difference"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22a(ii)",
          "part": "B",
          "marks": 4,
          "text": "Discuss any four properties of a regular set with an example"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Prove that L={aⁿbⁿ | n ≥ 0} is not regular using the pumping lemma"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Prove that L={0ⁿ10ⁿ | n ≥ 1} is not regular"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) Show that regular languages are closed under concatenation and Kleene closure. (ii) Show that S→aSb|bSa|SS|ε is ambiguous"
        }
      ],
      "importance": 4,
      "marks": "4–8",
      "unit": 2
    },
    {
      "q": "Halting problem and decidable vs undecidable problems",
      "seen": "Appeared in: PYQ Nov 2023, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Define the diagonalization language and show that Ld is not recursively enumerable"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Describe in detail the Halting problem and Rice's theorem"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Compare and contrast decidable and undecidable languages with examples"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Classify decidable and undecidable problems with an example"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 5
    },
    {
      "q": "TM variants, universal Turing machine, recursive vs recursively enumerable languages",
      "seen": "Appeared in: PYQ May 2024, PYQ May 2025, PYQ Nov 2025, PYQ May 2026",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Prove that the union of two recursive languages is recursive; discuss the complement property"
        },
        {
          "paper": "PYQ May 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Obtain the code for <M,1011> for the given TM (δ table), and design a TM that adds two numbers"
        },
        {
          "paper": "PYQ May 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Short notes on any two: extensions of TM, universal Turing machine, recursive and recursively enumerable languages"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Discuss any two variants of the Turing machine with examples and illustrations"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Differentiate recursive and recursively enumerable languages; describe undecidable problems with examples"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Write a short note on multitape and multihead Turing machines"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Discuss whether the sets of recursive and recursively enumerable languages are closed under complementation"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 4
    },
    {
      "q": "Mealy and Moore machines — design, run on input, convert one to the other",
      "seen": "Appeared in: PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ May 2026",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Design a Moore machine printing a/b/c for substring 10 / 11 / otherwise; convert it to a Mealy machine"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(1) Compare Mealy and Moore machines; build a Moore machine for divisibility of a binary number by 3. (2) Can a regular expression be designed for palindromes? Justify"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(i) For the given ε-NFA find the ε-closures and convert it to a DFA. (ii) Construct a Mealy machine for the 2's complement of a binary input"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(i) Convert the given NFA to a DFA. (ii) Run the given Moore machine on aabab and ababb and find the outputs"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Convert the given Mealy machine (states q1–q4) to a Moore machine"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "CFG design — write a grammar for aⁿb²ⁿ, aⁿbᵐcᵐdⁿ, integers, HTML tags",
      "seen": "Appeared in: PYQ Nov 2023, PYQ Nov 2024, PYQ May 2025, PYQ Nov 2025",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2023",
          "number": "22a(i)",
          "part": "B",
          "marks": 4,
          "text": "Given S→aSb|aAb, A→bAa, A→ba, find the context-free language generated"
        },
        {
          "paper": "PYQ Nov 2023",
          "number": "22a(ii)",
          "part": "B",
          "marks": 4,
          "text": "Generate a context-free grammar for the positive and negative integers"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Design an unambiguous CFG for HTML code with tags body, h1, p, a, div and the text inside them"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Construct a CFG for {aⁿbᵐaⁿ | m,n ≥ 1} ∪ {aⁿcⁿ | n ≥ 1} and the equivalent PDA"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Find CFGs for L₁={aⁿb²ⁿ | n ≥ 1} and L₂={aⁿbᵐcᵐdⁿ | n,m ≥ 1}"
        }
      ],
      "importance": 3,
      "marks": "4–8",
      "unit": 2
    },
    {
      "q": "DFA design — parity of 0s and 1s, a forbidden substring, aⁿbᵐ with limits",
      "seen": "Appeared in: PYQ May 2024, PYQ Nov 2024, PYQ May 2025, PYQ Nov 2025",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Construct a DFA that accepts an odd number of 1's and an even number of 0's"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Employee IDs over {a,b} with at least one 'a': list the strings, construct the DFA, convert the DFA to a regular expression by the Rᵢⱼ method"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(1) Illustrate the formal description of DFA and NFA with examples. (2) Construct a DFA over {x,y} accepting strings that never contain the substring 'xxy'"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Construct a minimal DFA for L={aⁿbᵐ | n ≥ 2, m ≥ 1} over {a,b}"
        }
      ],
      "importance": 3,
      "marks": "8–15",
      "unit": 1
    },
    {
      "q": "P, NP, NP-complete and NP-hard — definitions, relationship, examples",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Write short notes on NP-hard and NP-complete and express the relationship between them"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Explain class P, class NP, NP-complete and NP-hard problems with examples in detail"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Explain in detail P, NP, NP-complete and NP-hard"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "(1) Does PCP with A=(y, yxy³, yx), B=(y³, yx, x) have a solution? (2) Discuss NP-hard and NP-complete problems with examples"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 5
    },
    {
      "q": "Rice's theorem and the language Lₑ",
      "seen": "Appeared in: PYQ Jul 2024, PYQ Nov 2024, PYQ Jul 2025",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jul 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(a) State and explain Rice's theorem. (b) Prove that MPCP reduces to PCP"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Describe in detail the Halting problem and Rice's theorem"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "State and prove Rice's theorem for recursively enumerable index sets"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Define Lₑ and prove that Lₑ is not recursive"
        }
      ],
      "importance": 3,
      "marks": "8–15",
      "unit": 5
    }
  ],
  "units": [
    {
      "n": 1,
      "title": "Finite Automata and Regular Expressions",
      "weight": "High",
      "topics": [
        {
          "t": "NFA design and NFA → DFA subset construction — DFA states are sets of NFA states; a set is final if it contains an NFA final state; up to 2ⁿ states, build only the reachable ones",
          "tag": "7/9"
        },
        {
          "t": "Regular expressions and automata — RE → ε-NFA by Thompson's rules (union, concatenation, star); DFA → RE by state elimination or the Rᵢⱼ method",
          "tag": "6/9"
        },
        {
          "t": "DFA minimization — table-filling: mark final/non-final pairs, propagate, merge the unmarked pairs; always remove unreachable states first",
          "tag": "6/9"
        },
        {
          "t": "Mealy and Moore machines — Moore output sits on states, Mealy output on transitions; practice: 2's complement, divisibility by 3, pattern detectors; convert both ways",
          "tag": "4/9"
        },
        {
          "t": "DFA design — track what must be remembered: parity of 0s and 1s, last symbols, a forbidden substring; add a dead state",
          "tag": "4/9"
        },
        {
          "t": "ε-NFA and ε-closure — ε-closure(q) is every state reachable by ε moves; used to convert an ε-NFA to a DFA",
          "tag": "3/9"
        },
        {
          "t": "Proof by induction — base case, hypothesis, step (Jul 2024: sum of squares)",
          "tag": "1/9"
        }
      ]
    },
    {
      "n": 2,
      "title": "Regular Sets and Context Free Grammars",
      "weight": "Very High",
      "topics": [
        {
          "t": "CFG simplification — order matters: ε-productions, then unit productions, then useless symbols (non-generating first, then unreachable)",
          "tag": "8/9"
        },
        {
          "t": "Greibach Normal Form — every rule A → aα; remove ε and unit rules and left recursion first, then substitute until each rule starts with a terminal",
          "tag": "7/9"
        },
        {
          "t": "Chomsky Normal Form — rules A → BC or A → a; simplify, replace terminals inside long rules by new variables, split rules longer than 2",
          "tag": "6/9"
        },
        {
          "t": "Derivations, parse trees and ambiguity — leftmost/rightmost derivation, yield; a grammar is ambiguous if one string has two parse trees",
          "tag": "5/9"
        },
        {
          "t": "Regular language properties — closed under union, concatenation, star, complement, intersection, difference; pumping lemma proves aⁿbⁿ and 0ⁿ10ⁿ are not regular",
          "tag": "5/9"
        },
        {
          "t": "CFG design — match counts with S → aSb; nest for aⁿbᵐcᵐdⁿ; keep grammars unambiguous (HTML tags, integers)",
          "tag": "4/9"
        },
        {
          "t": "Chomsky hierarchy — Type 3 regular, Type 2 CFG, Type 1 context-sensitive, Type 0 unrestricted",
          "tag": "MCQ"
        }
      ]
    },
    {
      "n": 3,
      "title": "Pushdown Automata and Parsing Algorithms",
      "weight": "High",
      "topics": [
        {
          "t": "PDA design — use the stack to count or match; accept by empty stack or final state; aⁱbʲcᵏ with i=j or j=k needs nondeterminism",
          "tag": "8/9"
        },
        {
          "t": "CFG ↔ PDA — grammar to PDA: push the start symbol, expand non-terminals on top, pop matching terminals; PDA to grammar uses variables [p X q]",
          "tag": "7/9"
        },
        {
          "t": "DPDA vs NPDA — one move per (state, input, stack top) for a DPDA; wwᴿ needs an NPDA; DPDA ⊂ NPDA",
          "tag": "2/9"
        },
        {
          "t": "Pumping lemma for CFLs — z = uvwxy, |vwx| ≤ n, |vx| ≥ 1, uvⁱwxⁱy ∈ L; shows aⁿbⁿcⁿ is not context-free",
          "tag": "1/9"
        },
        {
          "t": "PDA configuration (q, w, γ) and the ⊢ relation; parsing top-down vs bottom-up",
          "tag": "MCQ"
        },
        {
          "t": "Closure of CFLs — closed under union, concatenation, star; not closed under intersection or complement",
          "tag": "MCQ"
        }
      ]
    },
    {
      "n": 4,
      "title": "Turing Machines",
      "weight": "Very High",
      "topics": [
        {
          "t": "TM for a language — mark-and-return technique: aⁿbⁿcⁿ (X,Y,Z), wwᴿ (match the ends), a substring such as aba, strings ending in b, 0ⁿ1ⁿ0ⁿ",
          "tag": "9/9"
        },
        {
          "t": "TM for arithmetic and transformations — unary addition, proper subtraction, multiplication by repeated copying, 2's complement, copying ww, replacing 111 by 101, primality with tracks",
          "tag": "9/9"
        },
        {
          "t": "TM variants, universal TM, recursive vs RE languages — multitape, multihead, NTM all equal the basic TM in power; UTM simulates any TM from its code <M,w>",
          "tag": "4/9"
        },
        {
          "t": "TM definition and ID — 7-tuple (Q, Σ, Γ, δ, q₀, B, F); ID is α q β; if δ is undefined the machine halts",
          "tag": "MCQ"
        },
        {
          "t": "Recursive vs RE — recursive is closed under union, intersection, complement; RE is closed under union and intersection but not complement; L and L̄ both RE ⇒ L recursive",
          "tag": "4/9"
        }
      ]
    },
    {
      "n": 5,
      "title": "Introduction to Computational Complexity",
      "weight": "High",
      "topics": [
        {
          "t": "Post Correspondence Problem — solve an instance by chaining tiles with a common prefix; MPCP forces tile 1 first; PCP is undecidable (reduction from MPCP / halting)",
          "tag": "8/9"
        },
        {
          "t": "Halting problem and decidability — halting is undecidable (diagonal argument); Ld is not RE; decidable vs undecidable examples",
          "tag": "5/9"
        },
        {
          "t": "P, NP, NP-complete, NP-hard — P ⊆ NP; NP-complete = NP ∩ NP-hard; SAT was the first NP-complete problem; polynomial-time reductions",
          "tag": "4/9"
        },
        {
          "t": "Rice's theorem — every non-trivial property of RE languages is undecidable; Lₑ is not recursive",
          "tag": "3/9"
        }
      ]
    }
  ],
  "eight": {
    "title": "Most Repeated 8-Mark Questions (Part B)",
    "strategy": "Part B is Q21–Q25, one question per unit, each with an either/or choice. Prepare one confident option per unit. The Turing machine in Q24 has never been missing, so Unit 4 is the one to master first.",
    "groups": [
      {
        "q": "Q21",
        "unit": 1,
        "items": [
          "Construct a DFA equivalent to a given NFA from its transition table (7 of 9 papers)",
          "Design an NFA for strings whose second-last symbol is 1, convert it to a DFA, test 100010 and 100000 (Nov 2024, Jul 2025 Paper 2)",
          "Convert a regular expression such as a(a+b+c)*(a+b+c) or 10+(0+11)0*1 into a minimized DFA or ε-NFA",
          "Design or convert a Mealy / Moore machine (2's complement, divisibility by 3, pattern detector)"
        ]
      },
      {
        "q": "Q22",
        "unit": 2,
        "items": [
          "Simplify a CFG by removing null, unit and useless productions (8 of 9 papers)",
          "Convert a CFG to Greibach Normal Form",
          "Check or convert a grammar to Chomsky Normal Form",
          "Leftmost / rightmost derivation and parse tree; show a grammar is ambiguous",
          "Prove a language is not regular with the pumping lemma, or show closure properties of regular languages"
        ]
      },
      {
        "q": "Q23",
        "unit": 3,
        "items": [
          "Design a PDA for aⁿbⁿ, wwᴿ, wcwᴿ, aⁿbᵐcⁿ⁺ᵐ, aⁿbⁿcᵐdᵐ or equal numbers of a's and b's (8 of 9 papers)",
          "Convert a CFG to a PDA and check a string such as 010⁴ or a*a",
          "Convert a given PDA to a CFG",
          "DPDA vs NPDA with examples"
        ]
      },
      {
        "q": "Q24",
        "unit": 4,
        "items": [
          "Turing machine for aⁿbⁿcⁿ with a trace on a sample string (Q24 has a TM in every paper; aⁿbⁿcⁿ itself in Jul 2024, Nov 2024, Nov 2025)",
          "Turing machine for wwᴿ using the checking-off technique, or for the substring aba / strings ending in b",
          "Turing machine for unary addition, proper subtraction or 2's complement",
          "Short notes: multitape and multihead TMs, universal TM, recursive vs RE languages"
        ]
      },
      {
        "q": "Q25",
        "unit": 5,
        "items": [
          "Find a solution to a given PCP instance (8 of 9 papers; lists A=(1,10111,10), B=(111,10,0) appear three times)",
          "Define PCP and prove it is undecidable",
          "Explain P, NP, NP-complete and NP-hard with examples",
          "Halting problem and Rice's theorem; decidable vs undecidable problems with examples"
        ]
      }
    ],
    "tip": "For every construction show the table or diagram first, then a trace on a sample string. Marks are given for the structure even if one transition is wrong."
  },
  "fifteen": {
    "title": "Most Repeated 15-Mark Questions (Part C)",
    "note": "Q26 or Q27, answer one. Across the 9 papers, Q27 was a Turing machine 6 times and Q26/Q27 asked for CNF/GNF conversion 5 times. Prepare both, since either could be your pick.",
    "items": [
      {
        "q": "Turing machine for arithmetic or copying — multiplication of two unary numbers, copy ww, replace 111 by 101, proper subtraction, palindromes, with a trace",
        "seen": "Q27 in May 2024, Jul 2024, May 2025, Jul 2025 Paper 2, Nov 2025 and May 2026 (6 of 9)",
        "level": "Hot"
      },
      {
        "q": "Simplify a grammar and convert it to CNF and/or GNF, then derive a string or draw a parse tree",
        "seen": "Nov 2024 Q27, Jul 2025 Q27, Jul 2025 Paper 2 Q26, Nov 2025 Q26, May 2026 Q26 (5 of 9)",
        "level": "Hot"
      },
      {
        "q": "PCP / MPCP — prove PCP undecidable, solve an instance, reduce MPCP to PCP; state Rice's theorem",
        "seen": "Jul 2024 Q26 and Jul 2025 Q26",
        "level": "Likely"
      },
      {
        "q": "Scenario-based automata: list the language, build a DFA, convert DFA to regular expression (Rᵢⱼ), Thompson ε-NFA, NFA to DFA",
        "seen": "Nov 2023 Q26 (bus stops) and Nov 2024 Q26 (employee IDs)",
        "level": "Watch"
      },
      {
        "q": "Pumping lemma for CFLs with aⁿbⁿcⁿ, plus DFA minimization",
        "seen": "May 2025 Q26",
        "level": "Watch"
      },
      {
        "q": "Encode a Turing machine as <M, w> and design an adder; or convert a PDA to a CFG and draw a parse tree",
        "seen": "May 2024 Q26; Nov 2023 Q27",
        "level": "Watch"
      }
    ]
  },
  "predict": {
    "note": "Based on topic rotation across your 9 paper(s).",
    "rows": [
      [
        "Turing machine for a language (aⁿbⁿcⁿ, wwᴿ, substring)",
        4,
        "8",
        95,
        "In Q24 of all 9 papers"
      ],
      [
        "PDA design (aⁿbⁿcᵐdᵐ, wwᴿ, equal a's and b's)",
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
        "Rice's theorem",
        5,
        "8–15",
        35,
        "3 of 9 papers; last seen Jul 2025"
      ]
    ],
    "callouts": []
  },
  "formulas": [
    {
      "title": "Formal definitions",
      "lines": [
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
      "title": "Closure properties",
      "lines": [
        "Regular  : union, concatenation, star, complement, intersection, difference, reversal — all closed",
        "CFL      : union, concatenation, star, reversal closed",
        "           intersection, complement, difference NOT closed (CFL ∩ regular is CFL)",
        "Recursive: closed under union, intersection, complement",
        "RE       : closed under union, intersection, concatenation, star; NOT complement",
        "L and L̄ both RE  ⇒  L is recursive"
      ]
    },
    {
      "title": "Grammar simplification and normal forms",
      "lines": [
        "Order: 1) remove ε-productions  2) remove unit productions  3) remove useless symbols",
        "  useless = non-generating variables first, then unreachable ones",
        "CNF: every rule  A → BC  or  A → a",
        "  replace terminals inside long rules with Cₐ → a; split A → B₁B₂…Bₖ into A → B₁D₁, D₁ → B₂D₂, …",
        "GNF: every rule  A → aα  (a terminal, α a string of variables)",
        "  remove ε, unit and left recursion (A → Aα | β becomes A → βZ | β, Z → αZ | α), then substitute"
      ]
    },
    {
      "title": "NFA → DFA and DFA minimization",
      "lines": [
        "Subset construction: DFA state = set of NFA states, at most 2ⁿ of them",
        "ε-closure(S) = S plus every state reachable by ε moves",
        "δ'(S, a) = ε-closure( δ( ε-closure(S), a ) )",
        "Table filling: mark (p, q) if exactly one is final",
        "  mark (p, q) if (δ(p,a), δ(q,a)) is already marked for some a",
        "  merge every unmarked pair; remove unreachable states first"
      ]
    },
    {
      "title": "Pumping lemmas (to prove a language is NOT in the class)",
      "lines": [
        "Regular: ∃ p such that every w ∈ L with |w| ≥ p splits as w = xyz,",
        "  |xy| ≤ p, |y| ≥ 1, and xyⁱz ∈ L for all i ≥ 0",
        "  proof recipe: pick w = aᵖbᵖ, show y lies in the a's so xy²z has more a's than b's",
        "CFL: ∃ p such that every z ∈ L with |z| ≥ p splits as z = uvwxy,",
        "  |vwx| ≤ p, |vx| ≥ 1, and uvⁱwxⁱy ∈ L for all i ≥ 0 (use on aⁿbⁿcⁿ)"
      ]
    },
    {
      "title": "Turing machine technique cheat-sheet",
      "lines": [
        "aⁿbⁿcⁿ : mark a→X, then b→Y, then c→Z, return left, repeat; accept when only X,Y,Z remain",
        "wwᴿ    : cross off the first and last symbol, compare, repeat",
        "Unary add m+n : replace the separator 0 by 1, erase the last 1",
        "Proper subtraction m∸n : cancel one 1 on each side until one side is empty",
        "Multiplication m×n : for each 1 in m, append a copy of n to the output",
        "2's complement : copy bits from the right up to and including the first 1, invert the rest"
      ]
    },
    {
      "title": "Decidability and complexity facts",
      "lines": [
        "Decidable   : DFA/NFA acceptance, emptiness, equivalence; CFG membership and emptiness",
        "Undecidable : Halting problem, TM emptiness, CFG equivalence, PCP, any non-trivial property of RE languages (Rice)",
        "P ⊆ NP;   NP-complete = NP ∩ NP-hard",
        "A ≤p B and B ∈ P  ⇒  A ∈ P",
        "A NP-complete, A ≤p B, B ∈ NP  ⇒  B is NP-complete",
        "SAT is NP-complete (Cook–Levin); if P ≠ NP then P ∩ NP-complete = ∅"
      ]
    }
  ],
  "revision": {
    "must": [
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
    "ifTime": [
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
    "mcq": [
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
  "tips": [
    {
      "title": "Own Unit 4 first",
      "text": "A Turing machine is in Q24 of every paper and in Part C in 6 of 9. Practise six machines with transition tables: aⁿbⁿcⁿ, wwᴿ, substring aba, unary addition, subtraction and multiplication."
    },
    {
      "title": "Learn the Part C pattern",
      "text": "Part C has been a Turing machine (6/9) or a CNF/GNF grammar conversion (5/9). Be ready for both, so whichever appears you have a clear choice."
    },
    {
      "title": "Grammar steps in the right order",
      "text": "For CFG simplification always go ε-productions, unit productions, then useless symbols. Doing them in another order can bring back rules you already removed."
    },
    {
      "title": "Q25 is almost always PCP",
      "text": "PCP appeared in 8 of 9 papers. Practise finding a solution by starting with the tile whose strings share a prefix, and know the two proofs: PCP is undecidable, and MPCP reduces to PCP."
    },
    {
      "title": "Show the table, then trace",
      "text": "For subset construction, minimization and PDA/TM questions, draw the table or diagram first and then trace one sample string. Partial marks come from visible steps."
    },
    {
      "title": "Part A is definitions",
      "text": "The MCQs repeat: TM and PDA tuples, ID notation, DPDA definition, closure properties, which language class is accepted by which machine, NP-complete examples. Revise these in the last hour."
    },
    {
      "title": "Watch the clock",
      "text": "Part A about 40 minutes (OMR is collected), Part B about 80 minutes (16 each), Part C about 30 minutes. A neat Turing machine trace takes time, so start Q24 early."
    }
  ],
  "helper": {
    "sem": 5,
    "name": "Formal Language And Automata",
    "used": [
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
  },
  "mcq": {
    "papers": [
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
    "units": [
      "Finite automata and regex",
      "Grammars",
      "Pushdown automata",
      "Turing machines",
      "Complexity and decidability"
    ],
    "questions": [
      {
        "p": 8,
        "n": 1,
        "q": "A DFA cannot be represented in the format",
        "o": [
          "Transition Graph",
          "Transition Table",
          "Transition Function",
          "Undirected Graph"
        ],
        "a": 3,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 8,
        "n": 2,
        "q": "States needed to simulate a computer with memory storing 3 words each of length 8",
        "o": [
          "2^(3*8)",
          "3^(2*8)",
          "2^(8+3)",
          "3^(8*3)"
        ],
        "a": 0,
        "unit": 1
      },
      {
        "p": 8,
        "n": 3,
        "q": "Moore machine is an application of",
        "o": [
          "Finite automata without input",
          "Finite automata with input",
          "Finite automata without output",
          "Finite automata with output"
        ],
        "a": 3,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 8,
        "n": 4,
        "q": "Transition function of a DFA maps",
        "o": [
          "Σ*Q→Q",
          "Σ*Q→Σ",
          "Q*Σ→Q",
          "Q*Q→Σ"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 8,
        "n": 5,
        "q": "Productions of the form A→aα (a terminal, α∈V*) is known as",
        "o": [
          "Regular Grammar",
          "Chomsky normal form",
          "Linear grammar",
          "Greibach Normal form"
        ],
        "a": 3,
        "unit": 2,
        "fam": "H9"
      },
      {
        "p": 8,
        "n": 6,
        "q": "CFG S→aS|bS|a|b is equivalent to the regular expression",
        "o": [
          "a+b",
          "(a+b)*",
          "(a+b)(a+b)*",
          "(a+b)(a+b)"
        ],
        "a": 2,
        "unit": 2,
        "fam": "H13"
      },
      {
        "p": 8,
        "n": 7,
        "q": "Not generated by S→SaSbS|ε",
        "o": [
          "aabb",
          "aaabb",
          "aababb",
          "abab"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H10"
      },
      {
        "p": 8,
        "n": 8,
        "q": "Concatenation of leaf labels of a derivation tree left to right is the",
        "o": [
          "Root",
          "Yield",
          "Child",
          "Production"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H10"
      },
      {
        "p": 8,
        "n": 9,
        "q": "A DPDA is a PDA in which",
        "o": [
          "No state p has two outgoing transitions",
          "More than one state can have two or more outgoing transitions",
          "At least one state has more than one transition",
          "A state p has any number of incoming and outgoing transitions"
        ],
        "a": 0,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 8,
        "n": 10,
        "q": "NOT a type of transition in top-down parsing of PDA",
        "o": [
          "If input fully read and stack full go to final state F",
          "If top of stack matches input being read, pop it",
          "Push start symbol S",
          "Pop the non-terminal and push the right-hand side"
        ],
        "a": 0,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 8,
        "n": 11,
        "q": "PDA configuration (p,w,y) is",
        "o": [
          "(current state, unprocessed input, stack content)",
          "(unprocessed input, stack content, current state)",
          "(current state, stack content, unprocessed input)",
          "(current symbol, unprocessed input, stack input)"
        ],
        "a": 0,
        "unit": 3,
        "fam": "H5"
      },
      {
        "p": 8,
        "n": 12,
        "q": "The symbol Z₀ in the formal definition of PDA is used for",
        "o": [
          "Input symbol",
          "stack symbol",
          "buffer symbol",
          "greek symbol"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 8,
        "n": 13,
        "q": "TM transition function is defined on a state and ___ symbol",
        "o": [
          "both input and tape",
          "only input",
          "only tape (not input)",
          "only blank"
        ],
        "a": 2,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 8,
        "n": 14,
        "q": "If a language L is recursive then",
        "o": [
          "a TM that does not guarantee halting exists",
          "a TM that never halts",
          "we can't construct a TM",
          "a TM that always halts exists"
        ],
        "a": 3,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 8,
        "n": 15,
        "q": "An instantaneous description of a TM consists of",
        "o": [
          "Present state and input to be processed",
          "Present state only",
          "Present input only",
          "Previous state and input"
        ],
        "a": 0,
        "unit": 4,
        "fam": "H5"
      },
      {
        "p": 8,
        "n": 16,
        "q": "True about Non-deterministic Turing Machines",
        "o": [
          "NTMs less powerful than DTMs",
          "NTMs equivalent in power to DTMs",
          "NTMs more powerful",
          "NTMs not equal to DTMs"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 8,
        "n": 17,
        "q": "If L and L-complement are recursively enumerable then L is",
        "o": [
          "Regular",
          "Context Sensitive",
          "Context Free",
          "Recursive"
        ],
        "a": 3,
        "unit": 4,
        "fam": "H2"
      },
      {
        "p": 8,
        "n": 18,
        "q": "Language accepted by a TM that, for words not in L, rejects or loops",
        "o": [
          "Recursive",
          "Recursively enumerable",
          "NP-hard",
          "NP-complete"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H7"
      },
      {
        "p": 8,
        "n": 19,
        "q": "Problem in class P",
        "o": [
          "Hamiltonian circuit",
          "Travelling Salesman",
          "Finding shortest path in a graph",
          "Graph colouring"
        ],
        "a": 2,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 8,
        "n": 20,
        "q": "If P≠NP which holds",
        "o": [
          "NP-hard=NP",
          "P=NP-complete",
          "NP-complete ∩ P = Φ",
          "NP-complete=NP"
        ],
        "a": 2,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 7,
        "n": 1,
        "q": "NOT a property of finite automata",
        "o": [
          "NFA and DFA equal in power",
          "FA recognise regular languages",
          "FA has stack as memory",
          "DFA minimisation reduces states preserving language"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 7,
        "n": 2,
        "q": "R=(ab|a)*: which is true",
        "o": [
          "Both DFA and NFA can be built and are equivalent",
          "Only ε-NFA can be built",
          "DFA needs infinitely many states",
          "NFA exists but no DFA"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 7,
        "n": 3,
        "q": "Correct regular expression identity",
        "o": [
          "(R*)⁺=R*",
          "R(R⁺)=R*",
          "(R*)⁺=R⁰",
          "(R*)⁺=R¹"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 7,
        "n": 4,
        "q": "DFA q0 -a→q1, q0 -b→q0, q1 -a→q1, q1 -b→q2, q2 -a→q1, q2 -b→q0, final q2: accepts",
        "o": [
          "aaba",
          "abb",
          "aab",
          "ababb"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 7,
        "n": 5,
        "q": "Context free language is generated by ___ grammar",
        "o": [
          "Type 3",
          "Type 2",
          "Type 1",
          "Type 0"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H7"
      },
      {
        "p": 7,
        "n": 6,
        "q": "NOT correct about regular sets",
        "o": [
          "Union is associative and commutative",
          "Concatenation is associative and commutative",
          "{ε} is the identity for concatenation",
          "Concatenation distributes over union"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H4"
      },
      {
        "p": 7,
        "n": 7,
        "q": "Production in CNF",
        "o": [
          "a→AA",
          "D→aDD",
          "A→aB",
          "D→AB"
        ],
        "a": 3,
        "unit": 2,
        "fam": "H8"
      },
      {
        "p": 7,
        "n": 8,
        "q": "In a parse tree for a CFG a leaf node always represents",
        "o": [
          "terminals",
          "variables",
          "start symbols",
          "production rules"
        ],
        "a": 0,
        "unit": 2,
        "fam": "H10"
      },
      {
        "p": 7,
        "n": 9,
        "q": "Transition function of a PDA",
        "o": [
          "δ:Q×(Σ∪{ε})×Γ→Q×Γ*",
          "δ:Q×(Σ∪{ε})→Q×Γ*",
          "δ:Q×(Σ∪{ε})×Γ→Q",
          "δ:Q×(Σ∪{ε})×Γ→Γ*"
        ],
        "a": 0,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 7,
        "n": 10,
        "q": "Instantaneous description of a PDA (q state, w unread input, u stack)",
        "o": [
          "(u,q,w)",
          "(q,u,w)",
          "(w,q,u)",
          "(q,w,u)"
        ],
        "a": 3,
        "unit": 3,
        "fam": "H5"
      },
      {
        "p": 7,
        "n": 11,
        "q": "δ(q0,a,0)={(q0,10),(q1,ε)} represents a",
        "o": [
          "Deterministic PDA",
          "Deterministic FA",
          "Non-deterministic FA",
          "Non-deterministic PDA"
        ],
        "a": 3,
        "unit": 1,
        "fam": "H6"
      },
      {
        "p": 7,
        "n": 12,
        "q": "δ(q0,a,b)={(q2,cd)}: top of stack afterwards",
        "o": [
          "d",
          "c",
          "Z₀",
          "ε"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 7,
        "n": 13,
        "q": "Universal Turing Machine is capable of",
        "o": [
          "Solving only arithmetic functions",
          "Working only as a Mealy machine",
          "Simulating any other Turing Machine",
          "Accepting only regular languages"
        ],
        "a": 2,
        "unit": 5,
        "fam": "H17"
      },
      {
        "p": 7,
        "n": 14,
        "q": "The Halting Problem for Turing Machines is",
        "o": [
          "Decidable",
          "Undecidable",
          "Regular",
          "Context Free"
        ],
        "a": 1,
        "unit": 5,
        "fam": "H3"
      },
      {
        "p": 7,
        "n": 15,
        "q": "Recursively enumerable languages are closed under",
        "o": [
          "Complement",
          "Union but not intersection",
          "Intersection but not union",
          "Union and Intersection"
        ],
        "a": 3,
        "unit": 4,
        "fam": "H4"
      },
      {
        "p": 7,
        "n": 16,
        "q": "NTM runs in polynomial time: language decided belongs to",
        "o": [
          "P",
          "NP-Hard",
          "NP-Complete",
          "NP"
        ],
        "a": 3,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 7,
        "n": 17,
        "q": "TRUE about complexity classes",
        "o": [
          "Every NP-Complete problem is NP-Hard and in NP",
          "NP-Hard ⊆ P",
          "NP-Complete ⊆ P",
          "Every NP-Hard is NP-Complete"
        ],
        "a": 0,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 7,
        "n": 18,
        "q": "Modified PCP differs from PCP because",
        "o": [
          "MPCP is decidable while PCP is not",
          "MPCP needs an even number of tiles",
          "Sequence must start with first tile in PCP",
          "Sequence must always start with the first tile in MPCP"
        ],
        "a": 3,
        "unit": 5,
        "fam": "H16"
      },
      {
        "p": 7,
        "n": 19,
        "q": "Problem that is NP Complete",
        "o": [
          "Finding GCD",
          "Finding shortest path",
          "SAT (Boolean Satisfiability)",
          "String Matching"
        ],
        "a": 2,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 7,
        "n": 20,
        "q": "Languages whose solution can be verified in polynomial time by a deterministic TM are called",
        "o": [
          "P",
          "NP",
          "NP-hard",
          "NP-complete"
        ],
        "a": 1,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 6,
        "n": 1,
        "q": "L={ab,aa,baa}: strings in L*: 1) abaabaaabaa 2) aaaabaaaa 3) baaaaabaaaab 4) baaaaabaa",
        "o": [
          "1,2 and 3",
          "2,3 and 4",
          "1,2 and 4",
          "1,3 and 4"
        ],
        "a": 2,
        "unit": 1
      },
      {
        "p": 6,
        "n": 2,
        "q": "Minimum states in DFA accepting all strings over {a,b} with no two consecutive a's",
        "o": [
          "2",
          "3",
          "4",
          "5"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 6,
        "n": 3,
        "q": "The set of all strings over {a,b} (including ε)",
        "o": [
          "(a+b)*",
          "(a+b)+",
          "(a+b)",
          "(a*b*)*"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 6,
        "n": 4,
        "q": "Finite State Machines can recognize",
        "o": [
          "any grammar",
          "only CFG",
          "any unambiguous grammar",
          "only regular grammar"
        ],
        "a": 3,
        "unit": 1
      },
      {
        "p": 6,
        "n": 5,
        "q": "Null production in a CFG",
        "o": [
          "A→εA",
          "A→BA",
          "A→aBA",
          "A→aA"
        ],
        "a": 0,
        "unit": 2,
        "fam": "H11"
      },
      {
        "p": 6,
        "n": 6,
        "q": "In a derivation tree the internal nodes represent",
        "o": [
          "Terminals",
          "Non-terminals",
          "Productions",
          "Start symbols"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H10"
      },
      {
        "p": 6,
        "n": 7,
        "q": "In Greibach Normal Form each production has the form",
        "o": [
          "A→BCA",
          "A→aBA",
          "A→BaA",
          "B→BBaaAA"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H9"
      },
      {
        "p": 6,
        "n": 8,
        "q": "To minimize a DFA the method typically used",
        "o": [
          "Eliminate unit and null productions",
          "Merge equivalent states",
          "Convert DFA to NFA and back",
          "Convert DFA to a CFG"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 6,
        "n": 9,
        "q": "Languages recognised by a Pushdown Automaton",
        "o": [
          "Regular",
          "Context-sensitive",
          "Context-free",
          "Recursively enumerable"
        ],
        "a": 2,
        "unit": 3,
        "fam": "H7"
      },
      {
        "p": 6,
        "n": 10,
        "q": "Component of a PDA not present in a finite automaton",
        "o": [
          "Input tape",
          "Stack",
          "State transition function",
          "Acceptance condition"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 6,
        "n": 11,
        "q": "Type of PDA equivalent to a context-free grammar",
        "o": [
          "Deterministic PDA",
          "Non-deterministic PDA",
          "Finite automaton",
          "Turing machine"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 6,
        "n": 12,
        "q": "Pumping Lemma for regular languages primarily helps to prove",
        "o": [
          "a language is regular",
          "a language is not regular",
          "a language is context-free",
          "a language is finite"
        ],
        "a": 1,
        "unit": 1
      },
      {
        "p": 6,
        "n": 13,
        "q": "In TM T=(Q,Σ,Γ,q0,δ), what Γ represents",
        "o": [
          "Tape alphabets",
          "Input symbols",
          "Transition function",
          "Initial state"
        ],
        "a": 0,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 6,
        "n": 14,
        "q": "An instantaneous description of a Turing machine consists of",
        "o": [
          "Present state and input to be processed",
          "Present state and entire input to be processed",
          "Present input only",
          "Present state only"
        ],
        "a": 0,
        "unit": 4,
        "low": 1,
        "fam": "H5"
      },
      {
        "p": 6,
        "n": 15,
        "q": "If δ is not defined on the current state and current tape symbol the machine",
        "o": [
          "does not halt",
          "halts",
          "goes into loop forever",
          "does not go into loop"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 6,
        "n": 16,
        "q": "Halting states of a Turing machine are",
        "o": [
          "Start and Stop",
          "Start and reject",
          "Accept and Reject",
          "Reject and allow"
        ],
        "a": 2,
        "unit": 4,
        "fam": "H1"
      },
      {
        "p": 6,
        "n": 17,
        "q": "Problem known to be NP-complete",
        "o": [
          "Travelling Salesman Problem",
          "Sorting",
          "Finding the GCD",
          "Matrix Multiplication"
        ],
        "a": 0,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 6,
        "n": 18,
        "q": "Modified PCP is primarily concerned with",
        "o": [
          "Finding a solution for a given PCP instance",
          "Modifying strings to ensure a unique solution",
          "Constraints to make PCP easier",
          "Determining whether a matching sequence exists with specific constraints"
        ],
        "a": 3,
        "unit": 5,
        "fam": "H16"
      },
      {
        "p": 6,
        "n": 19,
        "q": "Technique often used to prove a problem is NP-complete",
        "o": [
          "Turing reduction",
          "Randomized reduction",
          "Polynomial-time reduction",
          "Enumeration"
        ],
        "a": 2,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 6,
        "n": 20,
        "q": "Space complexity of a Turing Machine that recognises a regular language",
        "o": [
          "Constant space",
          "Linear space",
          "Polynomial space",
          "Exponential space"
        ],
        "a": 0,
        "unit": 5
      },
      {
        "p": 5,
        "n": 1,
        "q": "S1: initial state of NFA is initial state of DFA. S2: final states of DFA will be every combination of final states of NFA",
        "o": [
          "S1 true, S2 true",
          "S1 true, S2 false",
          "S1 can be true, S2 true",
          "S1 false, S2 false"
        ],
        "a": 1,
        "unit": 1,
        "low": 1,
        "fam": "H12"
      },
      {
        "p": 5,
        "n": 3,
        "q": "DFA A-0→B, A-1→C, B-1→D, D-1→B, D-0→A, C-0→D; input 011100101: edge NOT traversed",
        "o": [
          "AB",
          "C",
          "CD",
          "DA"
        ],
        "a": 2,
        "unit": 1
      },
      {
        "p": 5,
        "n": 4,
        "q": "Mealy machine output for input 0010 from q1",
        "o": [
          "1000",
          "0101",
          "1010",
          "1001"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 5,
        "n": 6,
        "q": "Language of (0+1)*0(0+1)*0(0+1)*",
        "o": [
          "strings containing the substring 00",
          "at most two 0's",
          "at least two 0's",
          "begin and end with 0 or 1"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 5,
        "n": 8,
        "q": "CFG to CNF: nonterminals to introduce for terminals in S→ABaA, A→aabB, B→Ac",
        "o": [
          "2",
          "3",
          "4",
          "1"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H8"
      },
      {
        "p": 5,
        "n": 9,
        "q": "S→aS|bS|a|b: regular expression of L",
        "o": [
          "a+b",
          "(a+b)(a+b)*",
          "(a+b)*",
          "(aa+bb)a*b*"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 5,
        "n": 10,
        "q": "Automata that takes stack as storage",
        "o": [
          "Finite automata",
          "Regular expression",
          "Push down automata",
          "Turing machine"
        ],
        "a": 2,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 5,
        "n": 11,
        "q": "Push down automata accepts ___ languages",
        "o": [
          "Type 3",
          "Type 2",
          "Type 1",
          "Type 0"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H7"
      },
      {
        "p": 5,
        "n": 12,
        "q": "Language that cannot be accepted by a PDA",
        "o": [
          "aⁿbⁿ⁺ᵐcᵐ",
          "aⁿbᵐcᵐ",
          "aⁿbⁿcᵐdᵐ",
          "aⁿbⁿcⁿ"
        ],
        "a": 3,
        "unit": 3
      },
      {
        "p": 5,
        "n": 13,
        "q": "L={0ⁱ1²ⁱ | i≥0} over {0,1,2} is",
        "o": [
          "Not recursive",
          "Recursive and deterministic CFL",
          "Regular",
          "CFL but not deterministic CFL"
        ],
        "a": 1,
        "unit": 1
      },
      {
        "p": 5,
        "n": 14,
        "q": "Deterministic CFLs among L1={0ⁿ1ⁿ}, L2={wcwᴿ}, L3={wwᴿ}",
        "o": [
          "Only L3",
          "Only L1",
          "Only L1 and L2",
          "All three"
        ],
        "a": 2,
        "unit": 1
      },
      {
        "p": 5,
        "n": 15,
        "q": "Halting states of Turing machine are",
        "o": [
          "Start and stop",
          "Accept and reject",
          "Start and reject",
          "Reject and allow"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H1"
      },
      {
        "p": 5,
        "n": 16,
        "q": "Language {aᵖ | p is prime}",
        "o": [
          "regular but not CF",
          "neither regular nor CF but accepted by a TM",
          "not accepted by a TM",
          "CF but not regular"
        ],
        "a": 1,
        "unit": 1
      },
      {
        "p": 5,
        "n": 17,
        "q": "Conversion NOT possible algorithmically",
        "o": [
          "Regular grammar to CFG",
          "NPDA to DPDA",
          "NFA to DFA",
          "NTM to DTM"
        ],
        "a": 1,
        "unit": 5
      },
      {
        "p": 5,
        "n": 18,
        "q": "Which is true",
        "o": [
          "complement of recursive is recursive or RE",
          "complement of RE is RE",
          "complement of a recursive language is recursive",
          "complement of CFL is CF"
        ],
        "a": 2,
        "unit": 1
      },
      {
        "p": 5,
        "n": 19,
        "q": "If L and L' are recursively enumerable then L is",
        "o": [
          "Regular",
          "Context-free",
          "Recursive",
          "Context sensitive"
        ],
        "a": 2,
        "unit": 4,
        "fam": "H2"
      },
      {
        "p": 5,
        "n": 20,
        "q": "Which problem is solvable",
        "o": [
          "Determining whether a UTM and input will halt",
          "Determining whether an arbitrary TM is a UTM",
          "Determining whether a UTM can be written with fewer than k instructions",
          "Writing a universal Turing machine"
        ],
        "a": 3,
        "unit": 1,
        "fam": "H17"
      },
      {
        "p": 4,
        "n": 1,
        "q": "Pair of regular expressions NOT equivalent",
        "o": [
          "1(01)* and (10)*1",
          "x(xx)* and (xx)*x",
          "(ab)* and a*b*",
          "x+ and x*x+"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 4,
        "n": 2,
        "q": "Minimum states in a DFA (with dead state) to check if the 3rd bit is 1, |n|≥3 over {0,1}",
        "o": [
          "3",
          "4",
          "5",
          "1"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 4,
        "n": 3,
        "q": "Reverse of a DFA can be formed by",
        "o": [
          "making final state non-final",
          "making final as starting state and starting state as final",
          "using PDA",
          "None"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 4,
        "n": 4,
        "q": "Expressive power of NFA and ε-NFA",
        "o": [
          "Different",
          "Same",
          "ε-NFA more powerful",
          "NFA more powerful"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 4,
        "n": 5,
        "q": "Maximum number of steps machine M takes on any input of size N is",
        "o": [
          "Time Complexity",
          "Space Complexity",
          "Time Space Complexity",
          "None"
        ],
        "a": 0,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 4,
        "n": 6,
        "q": "Steps required O(N^k): problem is solved in",
        "o": [
          "Non-polynomial time",
          "Polynomial time",
          "Infinite time",
          "None"
        ],
        "a": 1,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 4,
        "n": 7,
        "q": "Symbols contained in the stack of a PDA",
        "o": [
          "Variable",
          "Terminal",
          "Epsilon",
          "Variable and Terminal"
        ],
        "a": 3,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 4,
        "n": 8,
        "q": "S→AB/CD, A→BG/0, B→AD/ε, C→CD/1, D→BB/E, E→AF/B1, F→EG/0C, G→AG/BD: true statement",
        "o": [
          "E is not nullable",
          "G is not nullable",
          "C is not nullable",
          "B is not nullable"
        ],
        "a": 0,
        "unit": 1,
        "low": 1,
        "fam": "H11"
      },
      {
        "p": 4,
        "n": 9,
        "q": "The symbol Z0 in the PDA definition denotes",
        "o": [
          "Initial state",
          "Initial stack alphabet",
          "Variable",
          "Stack content"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 4,
        "n": 10,
        "q": "Push down machine represents",
        "o": [
          "Type 3 grammar",
          "Type 2 grammar",
          "Type 1 grammar",
          "Type 0 grammar"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H7"
      },
      {
        "p": 4,
        "n": 11,
        "q": "Language generated by an unrestricted grammar is",
        "o": [
          "Recursive",
          "Context free",
          "Regular",
          "Context sensitive"
        ],
        "a": 0,
        "unit": 2,
        "low": 1,
        "fam": "H7"
      },
      {
        "p": 4,
        "n": 12,
        "q": "S→AS, S→AAS, S→SA, A→aa: productions that deny CNF",
        "o": [
          "2,4",
          "1,3",
          "1,2,3,4",
          "2,3,4"
        ],
        "a": 0,
        "unit": 2,
        "fam": "H8"
      },
      {
        "p": 4,
        "n": 13,
        "q": "A string is accepted by a PDA when",
        "o": [
          "Stack is empty",
          "Acceptance state",
          "Both (A) and (B)",
          "Rejected state"
        ],
        "a": 2,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 4,
        "n": 14,
        "q": "G: S→aA, A→a, A→B, B→A, B→bb: simplified grammar",
        "o": [
          "S→aA, A→a | bb, B→a | bb",
          "S→aA, A→a, B→bb",
          "S→aA, A→a, B→A | bb",
          "S→aA, A→B, B→A, B→b"
        ],
        "a": 0,
        "unit": 2,
        "low": 1,
        "fam": "H11"
      },
      {
        "p": 4,
        "n": 15,
        "q": "S→0A|1B, A→0AA|1S|1, B→1BB|0S|0: TRUE",
        "o": [
          "Grammar is not ambiguous",
          "Grammar is ambiguous",
          "Does not generate 001110",
          "Both B and C"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H10"
      },
      {
        "p": 4,
        "n": 16,
        "q": "Recursively Enumerable Languages are closed under",
        "o": [
          "Union only",
          "Intersection only",
          "Both Union and Intersection",
          "Neither"
        ],
        "a": 2,
        "unit": 4,
        "fam": "H4"
      },
      {
        "p": 4,
        "n": 17,
        "q": "Problems that have no algorithm are referred to as",
        "o": [
          "Decidable",
          "Undecidable",
          "Computable",
          "Finite"
        ],
        "a": 1,
        "unit": 5,
        "fam": "H3"
      },
      {
        "p": 4,
        "n": 18,
        "q": "Turing machine uses ___ representation",
        "o": [
          "Binary",
          "Ternary",
          "Unary",
          "Normal"
        ],
        "a": 2,
        "unit": 4,
        "low": 1,
        "fam": "H14"
      },
      {
        "p": 4,
        "n": 19,
        "q": "Problem that is NOT NP-hard",
        "o": [
          "Hamiltonian circuit",
          "0/1 Knapsack",
          "Finding bi-connected component of a graph",
          "Graph colouring"
        ],
        "a": 2,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 4,
        "n": 20,
        "q": "If δ(q,a)=(p,y,R) then qabxcd ⊢",
        "o": [
          "ypbxcd",
          "ybpxcd",
          "apybxcd",
          "pybxcd"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H14"
      },
      {
        "p": 3,
        "n": 1,
        "q": "S1: {0^(2n), n≥1} and S2: {0^m1^n0^q, m,n,q≥1} regular?",
        "o": [
          "Only S1",
          "Only S2",
          "Both S1 and S2",
          "Neither"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 3,
        "n": 2,
        "q": "Important mechanism of finite automaton",
        "o": [
          "Generation of sentences",
          "Recognition of Languages",
          "Grammar generation",
          "Checking numerical values"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 3,
        "n": 3,
        "q": "3 states, number of times R_ijk values calculated: find R33(3)",
        "o": [
          "28",
          "27",
          "18",
          "9"
        ],
        "a": 1,
        "unit": 1,
        "low": 1,
        "fam": "H12"
      },
      {
        "p": 3,
        "n": 4,
        "q": "A DFA transition function takes state and input symbol and returns a",
        "o": [
          "Input symbol",
          "State",
          "Output",
          "Value"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 3,
        "n": 5,
        "q": "Language accepted by a Pushdown Automaton",
        "o": [
          "Context Free",
          "Regular",
          "Recursive",
          "Context aware"
        ],
        "a": 0,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 3,
        "n": 6,
        "q": "Class of Context Free Grammar is not closed under",
        "o": [
          "Concatenation",
          "Intersection",
          "Union",
          "Minus"
        ],
        "a": 1,
        "unit": 2,
        "low": 1,
        "fam": "H4"
      },
      {
        "p": 3,
        "n": 7,
        "q": "L={a,b}*, X={aⁿbⁿ⁺², n>0}: L∪X and X are respectively",
        "o": [
          "Regular, Regular",
          "Not Regular, Not Regular",
          "Not Regular, Regular",
          "Regular, Not Regular"
        ],
        "a": 3,
        "unit": 1
      },
      {
        "p": 3,
        "n": 8,
        "q": "Match Type 0,1,2,3 with Regular, CSG, Unrestricted, CFG",
        "o": [
          "1-iii,2-ii,3-iv,4-i",
          "1-iv,2-iii,3-ii,4-i",
          "1-i,2-ii,3-iii,4-iv",
          "1-ii,2-iii,3-iv,4-i"
        ],
        "a": 0,
        "unit": 2,
        "fam": "H7"
      },
      {
        "p": 3,
        "n": 9,
        "q": "Automaton with a stack as auxiliary storage",
        "o": [
          "Finite automata",
          "Pushdown automata",
          "Deterministic automata",
          "Linear bound automata"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 3,
        "n": 10,
        "q": "Most suitable data structure for derivations in parsing",
        "o": [
          "Queue",
          "Linked List",
          "Tree",
          "Hash Tables"
        ],
        "a": 2,
        "unit": 3
      },
      {
        "p": 3,
        "n": 11,
        "q": "A string is accepted by a PDA",
        "o": [
          "Only when stack is empty",
          "Only when it reaches the acceptance state",
          "When both stack is empty and acceptance state reached",
          "When it reaches the initial state"
        ],
        "a": 2,
        "unit": 3,
        "low": 1,
        "fam": "H6"
      },
      {
        "p": 3,
        "n": 12,
        "q": "Symbol z0 in PDA notation",
        "o": [
          "An element of state",
          "Initial stack symbol",
          "Final state",
          "Top stack alphabet"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 3,
        "n": 13,
        "q": "Number of internal states of a Universal Turing Machine should be at least",
        "o": [
          "1",
          "2",
          "3",
          "4"
        ],
        "a": 1,
        "unit": 5,
        "low": 1,
        "fam": "H17"
      },
      {
        "p": 3,
        "n": 14,
        "q": "A Turing machine operates over",
        "o": [
          "Infinite memory tape",
          "Finite memory tape",
          "No memory tape",
          "Queue memory"
        ],
        "a": 0,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 3,
        "n": 15,
        "q": "NOT performed by a TM after reading a symbol",
        "o": [
          "Writes the symbol",
          "Moves tape one cell left/right",
          "Proceeds with next instruction or halts",
          "Jumps n cells at a time"
        ],
        "a": 3,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 3,
        "n": 16,
        "q": "Halting states of the Turing machine are",
        "o": [
          "Start and stop",
          "Accept and reject",
          "Start and reject",
          "Reject and allow"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H1"
      },
      {
        "p": 3,
        "n": 17,
        "q": "If a problem has an algorithm to answer it, we call it",
        "o": [
          "Decidable",
          "Solved",
          "Recognizable",
          "Algorithmic"
        ],
        "a": 0,
        "unit": 5,
        "fam": "H3"
      },
      {
        "p": 3,
        "n": 18,
        "q": "Stages in the non-deterministic algorithm",
        "o": [
          "3",
          "1",
          "2",
          "5"
        ],
        "a": 2,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 3,
        "n": 19,
        "q": "CNF-Satisfiability problem belongs to",
        "o": [
          "NP class",
          "P class",
          "NP-Complete",
          "NP-Hard"
        ],
        "a": 2,
        "unit": 2,
        "fam": "H15"
      },
      {
        "p": 3,
        "n": 20,
        "q": "Choice of polynomial class led to an extensive theory called",
        "o": [
          "Computational complexity",
          "Time complexity",
          "Problem complexity",
          "Decision complexity"
        ],
        "a": 0,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 2,
        "n": 1,
        "q": "Genuine regular expression identity",
        "o": [
          "(x+y)*=x*+y*",
          "(x+y)*=x*y*",
          "(x+y)*=(x*y*)*",
          "x*y*=x*+y*"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 2,
        "n": 2,
        "q": "The limitation of finite automata is",
        "o": [
          "Recognize non regular grammar",
          "Fails to recognize regular grammar",
          "Recognize context free grammar",
          "Cannot remember large amount of memory"
        ],
        "a": 3,
        "unit": 1
      },
      {
        "p": 2,
        "n": 3,
        "q": "Regular expression for {x∈{0,1}* | x ends with 0 and starts with 1}",
        "o": [
          "0(0*1*)*1",
          "0(0*+1*)1",
          "1(0*+1*)*0",
          "1(0*+1*)0"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 2,
        "n": 4,
        "q": "DFA q0-b→q0, q0-a→q1, q1-a→q1, q1-b→q2, q2-a→q1, q2-b→q0, final q2: accepts",
        "o": [
          "aaabbbab",
          "ababa",
          "bbbaaaa",
          "bbaaabb"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 2,
        "n": 5,
        "q": "X1: X→aXb|bXa|XX|a and X→aXb|bXa|a not equivalent. X2: X→XX|XXX|aXb|bXa|ε and X→XX|aXb|bXa|ε equivalent",
        "o": [
          "X1 correct, X2 not",
          "Both not correct",
          "X1 correct and X2 correct",
          "Both correct (variant)"
        ],
        "a": 2,
        "unit": 1
      },
      {
        "p": 2,
        "n": 6,
        "q": "A context sensitive grammar is",
        "o": [
          "Type 0",
          "Type 1",
          "Type 2",
          "Type 3"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H7"
      },
      {
        "p": 2,
        "n": 7,
        "q": "All productions have a single non terminal on the left side: grammar is",
        "o": [
          "Context Sensitive Grammar",
          "Context Free Grammar",
          "Unrestricted Grammar",
          "Pharser Grammar"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H7"
      },
      {
        "p": 2,
        "n": 8,
        "q": "General format of Chomsky Normal Form",
        "o": [
          "A→aB | a",
          "X→YZ | d",
          "X→ABC | ac",
          "A→aXY | a"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H8"
      },
      {
        "p": 2,
        "n": 9,
        "q": "Push Down Automata does not have",
        "o": [
          "Finite set of input symbols",
          "Starting state",
          "Special rejection state",
          "Transition function"
        ],
        "a": 2,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 2,
        "n": 10,
        "q": "A Deterministic PDA is a PDA with",
        "o": [
          "No state p has two or more outgoing transitions on same input and stack symbol",
          "No state p has two or more outgoing transitions",
          "More than one state can have two or more outgoing transitions",
          "At least one state has more than one transition"
        ],
        "a": 0,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 2,
        "n": 11,
        "q": "PDA configuration (q0,a,b) represents",
        "o": [
          "(Current State, Input, Stack symbol)",
          "(Current State, Stack symbol, Input)",
          "(Next State, Input, Stack symbol)",
          "(Next State, Stack symbol, Input)"
        ],
        "a": 0,
        "unit": 3,
        "fam": "H5"
      },
      {
        "p": 2,
        "n": 12,
        "q": "Push Down Automata with two stacks is equivalent to",
        "o": [
          "Deterministic FA",
          "Epsilon NFA",
          "Turing Machine",
          "Non Deterministic FA"
        ],
        "a": 2,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 2,
        "n": 13,
        "q": "In a multi head Turing machine there are",
        "o": [
          "More than one heads",
          "More than one input tapes",
          "Similar to basic TM",
          "Multiple tracks in the input tape"
        ],
        "a": 0,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 2,
        "n": 14,
        "q": "An instantaneous description of a Turing machine consists of",
        "o": [
          "Current state and entire input to be processed",
          "Current state and processed input",
          "Next state and already processed input",
          "Next state and entire input to be processed"
        ],
        "a": 0,
        "unit": 4,
        "low": 1,
        "fam": "H5"
      },
      {
        "p": 2,
        "n": 15,
        "q": "Number of tuples used to represent a Turing Machine",
        "o": [
          "5",
          "6",
          "7",
          "8"
        ],
        "a": 2,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 2,
        "n": 16,
        "q": "Tape after processing '10110' by TM with δ(q0,1)=(q1,a,R), δ(q1,0)=(qaccept,b,R)",
        "o": [
          "ab110",
          "10bba",
          "10110",
          "abbba"
        ],
        "a": 0,
        "unit": 4,
        "low": 1,
        "fam": "H14"
      },
      {
        "p": 2,
        "n": 17,
        "q": "If L and L' are recursively enumerable then L is",
        "o": [
          "Regular",
          "Recursive",
          "Context free",
          "Context Sensitive"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H2"
      },
      {
        "p": 2,
        "n": 18,
        "q": "Relationship among RE, CS, RL and CFL",
        "o": [
          "CFL⊂CS⊂RL⊂RE",
          "CFL⊂CS⊂RE⊂RL",
          "RE⊂RL⊂CS⊂CFL",
          "RL⊂RE⊂CS⊂CFL"
        ],
        "a": 0,
        "unit": 2,
        "fam": "H7"
      },
      {
        "p": 2,
        "n": 19,
        "q": "Select the FALSE statement",
        "o": [
          "All Context Sensitive Languages are Recursive",
          "The non-Recursively Enumerable language set is countable",
          "RE and Recursive languages are closed under Reversal",
          "RE languages are closed under Union"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H4"
      },
      {
        "p": 2,
        "n": 20,
        "q": "A decidable, B not decidable: correct option",
        "o": [
          "C undecidable if C reducible to B",
          "C undecidable if B is reducible to C",
          "C decidable if A is reducible to C",
          "C decidable if C reducible to B's complement"
        ],
        "a": 1,
        "unit": 5,
        "fam": "H3"
      },
      {
        "p": 1,
        "n": 1,
        "q": "Automata that can be used to develop a learning model and involved in decision making",
        "o": [
          "Push down automata",
          "Linear bounded automata",
          "Finite automata",
          "Discrete automata"
        ],
        "a": 2,
        "unit": 1,
        "low": 1
      },
      {
        "p": 1,
        "n": 2,
        "q": "NFA with N states: DFA can have maximum of",
        "o": [
          "2^N states",
          "N/2 states",
          "2N states",
          "N states"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 1,
        "n": 3,
        "q": "A language is regular if and only if",
        "o": [
          "accepted by DFA",
          "accepted by PDA",
          "accepted by LBA",
          "accepted by Turing machine"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 1,
        "n": 4,
        "q": "NOT an example of a finite state machine system",
        "o": [
          "Elevator mechanism",
          "Combination locks",
          "Traffic lights",
          "Digital watches"
        ],
        "a": 1,
        "unit": 1,
        "low": 1
      },
      {
        "p": 1,
        "n": 5,
        "q": "In G=(V,E,P,S) of a CFG, S represents",
        "o": [
          "Accepting State",
          "Starting Variable",
          "Sensitive Grammar",
          "Starting state"
        ],
        "a": 1,
        "unit": 2
      },
      {
        "p": 1,
        "n": 6,
        "q": "A grammar with n parse trees where n>1 is called",
        "o": [
          "Unambiguous",
          "Ambiguous",
          "Regular",
          "Recursive"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H10"
      },
      {
        "p": 1,
        "n": 7,
        "q": "NOT a grammar simplification procedure",
        "o": [
          "Removal of epsilon productions",
          "Removal of unit productions",
          "Removal of useless symbols",
          "Removal of non-reachable states"
        ],
        "a": 3,
        "unit": 2,
        "fam": "H11"
      },
      {
        "p": 1,
        "n": 8,
        "q": "Which is a CNF production",
        "o": [
          "A→Aw",
          "A→x",
          "A→xw",
          "A→Xw"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H8"
      },
      {
        "p": 1,
        "n": 9,
        "q": "Data structure used in processing the string in a PDA",
        "o": [
          "Stack",
          "Queue",
          "List",
          "Array"
        ],
        "a": 0,
        "unit": 3,
        "fam": "H6"
      },
      {
        "p": 1,
        "n": 10,
        "q": "Most appropriate language accepted by a DPDA",
        "o": [
          "Regular Expression",
          "Context free language",
          "Recursively enumerable",
          "Regular grammar"
        ],
        "a": 1,
        "unit": 3,
        "fam": "H7"
      },
      {
        "p": 1,
        "n": 11,
        "q": "Attempt to reduce the input string to the start symbol of a grammar",
        "o": [
          "Top-down parsing",
          "Bottom-up parsing",
          "Syntactic parsing",
          "Hybrid parsing"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H10"
      },
      {
        "p": 1,
        "n": 12,
        "q": "NOT a property of CFL",
        "o": [
          "Kleene closure",
          "Homomorphism",
          "Intersection",
          "Concatenation"
        ],
        "a": 2,
        "unit": 2,
        "fam": "H4"
      },
      {
        "p": 1,
        "n": 13,
        "q": "Can accept even palindrome over {a,b}",
        "o": [
          "Deterministic (PDA)",
          "Turing machine",
          "NDFA",
          "Linear bounded automata"
        ],
        "a": 1,
        "unit": 1,
        "low": 1,
        "fam": "H14"
      },
      {
        "p": 1,
        "n": 14,
        "q": "A Turing machine has",
        "o": [
          "Finite memory",
          "Infinite memory",
          "No memory",
          "Stack memory"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 1,
        "n": 15,
        "q": "Type 0 languages are called",
        "o": [
          "Recursive Enumerable (RE)",
          "Regular expressions",
          "Context free language",
          "Context free grammar"
        ],
        "a": 0,
        "unit": 2,
        "fam": "H7"
      },
      {
        "p": 1,
        "n": 16,
        "q": "6-tuple TM (Q,X,Σ,δ,q0,F): X represents",
        "o": [
          "Tape alphabet",
          "Stack symbol",
          "Initial state",
          "Final state"
        ],
        "a": 0,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 1,
        "n": 17,
        "q": "A problem that can be validated in polynomial time",
        "o": [
          "NP problem",
          "P problem",
          "PCP problem",
          "None"
        ],
        "a": 0,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 1,
        "n": 18,
        "q": "Post Correspondence problem is",
        "o": [
          "decidable decision problem",
          "undecidable decision problem",
          "not a decision problem",
          "NP problem"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H16"
      },
      {
        "p": 1,
        "n": 19,
        "q": "Problems in NP class have",
        "o": [
          "Deterministic algorithm",
          "Non deterministic polynomial algorithm",
          "Non polynomial algorithm",
          "No solution"
        ],
        "a": 1,
        "unit": 5,
        "fam": "H15"
      },
      {
        "p": 1,
        "n": 20,
        "q": "Subset sum problem is an ideal example of",
        "o": [
          "P",
          "NP",
          "NP-hard",
          "Undecidable"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H15"
      },
      {
        "p": 0,
        "n": 1,
        "q": "Regular expression for the set of all strings over {1} having odd length",
        "o": [
          "1*",
          "1(11)*",
          "(111)*",
          "1+"
        ],
        "a": 1,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 0,
        "n": 2,
        "q": "True for DFA and NFA",
        "o": [
          "DFA has one transition for each alphabet symbol",
          "NFA will have finite states for transition each alphabet",
          "DFA will have epsilon moves",
          "DFA can have many transitions for each alphabet"
        ],
        "a": 0,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 0,
        "n": 3,
        "q": "L={w | w is of the form x01y, x and y any strings of 0s and 1s} represents",
        "o": [
          "Language that can read the input (0+1)+",
          "Accepts all strings of 0s and 1s that may not have 01",
          "Accepts all and only strings that must have the sequence 01 somewhere",
          "Accepts only 0s and 1s separately"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H13"
      },
      {
        "p": 0,
        "n": 5,
        "q": "A CFG is in Chomsky normal form if every production is of the form",
        "o": [
          "A→BC or A→A",
          "A→BC or A→a",
          "A→BCa or B→b",
          "A→BC or A→B"
        ],
        "a": 1,
        "unit": 2,
        "fam": "H8"
      },
      {
        "p": 0,
        "n": 6,
        "q": "A context free language is called ambiguous if",
        "o": [
          "two or more leftmost derivations for some string",
          "two or more rightmost derivations for some string",
          "Both (A) and (B)",
          "one leftmost derivation for some string"
        ],
        "a": 2,
        "unit": 2,
        "fam": "H10"
      },
      {
        "p": 0,
        "n": 7,
        "q": "Which statement is false",
        "o": [
          "CFL can be converted into Chomsky normal form",
          "CFL can be converted into Greibach normal form",
          "CFL is accepted by pushdown automata",
          "Above all the statements are false"
        ],
        "a": 3,
        "unit": 1
      },
      {
        "p": 0,
        "n": 9,
        "q": "Pair with different expressive power",
        "o": [
          "Deterministic FA and non-deterministic FA",
          "Deterministic PDA and non-deterministic PDA",
          "Deterministic single tape TM and non-deterministic single tape TM",
          "Single tape TM and multiple tape TM"
        ],
        "a": 1,
        "unit": 1
      },
      {
        "p": 0,
        "n": 10,
        "q": "Lexical analysis for a modern language such as Java needs the power of",
        "o": [
          "Finite state automata",
          "Deterministic pushdown automata",
          "Non-deterministic pushdown automata",
          "Turing machine"
        ],
        "a": 0,
        "unit": 1
      },
      {
        "p": 0,
        "n": 11,
        "q": "Recognizing capability of NFSM and DFSM",
        "o": [
          "is different",
          "sometimes different",
          "is the same",
          "sometimes same"
        ],
        "a": 2,
        "unit": 1,
        "fam": "H12"
      },
      {
        "p": 0,
        "n": 12,
        "q": "Finite State Machine can recognize",
        "o": [
          "any grammar",
          "only CFG",
          "any unambiguous grammar",
          "only regular grammar"
        ],
        "a": 3,
        "unit": 1
      },
      {
        "p": 0,
        "n": 13,
        "q": "FALSE statement",
        "o": [
          "CFG can be used to specify both lexical and syntax rules",
          "Type checking is done before parsing",
          "High-level programs can be translated to different intermediate representations",
          "Arguments to a function can be passed using the program stack"
        ],
        "a": 1,
        "unit": 1
      },
      {
        "p": 0,
        "n": 15,
        "q": "NOT a possible result of executing a TM on an input",
        "o": [
          "may halt and accept",
          "may halt by changing the input",
          "may halt and reject",
          "may never halt"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 0,
        "n": 16,
        "q": "Why a Turing machine is more impressive than an FSM",
        "o": [
          "head moves in one direction",
          "head moves in both directions",
          "head moves continued in both directions",
          "TM can remember arbitrarily long sequences of the input string"
        ],
        "a": 3,
        "unit": 4,
        "fam": "H14"
      },
      {
        "p": 0,
        "n": 17,
        "q": "If a problem has an algorithm to answer it, we call it",
        "o": [
          "Decidable",
          "Solved",
          "Recognizable",
          "Decidable and solvable"
        ],
        "a": 0,
        "unit": 5,
        "fam": "H3"
      },
      {
        "p": 0,
        "n": 18,
        "q": "True for the Halting problem",
        "o": [
          "It is recursively enumerable",
          "It is undecidable",
          "Both (a) and (b)",
          "It is enumerable"
        ],
        "a": 2,
        "unit": 5,
        "fam": "H3"
      },
      {
        "p": 0,
        "n": 19,
        "q": "A language L is ___ if there is a TM M with L(M)=L and M halts at every point",
        "o": [
          "Turing acceptable",
          "Decidable",
          "Undecidable",
          "Turing unacceptable"
        ],
        "a": 1,
        "unit": 4,
        "fam": "H3"
      },
      {
        "p": 0,
        "n": 20,
        "q": "Problems with no algorithm, whether or not accepted by a TM that fails to halt on some input",
        "o": [
          "Decidable",
          "Undecidable",
          "Computable",
          "Decidable and Computable"
        ],
        "a": 1,
        "unit": 5,
        "fam": "H3"
      }
    ],
    "families": [
      {
        "id": "H12",
        "title": "DFA and NFA basics",
        "papers": [
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
        "count": 9,
        "questions": 22,
        "tip": "NFA with N states → DFA with at most 2^N. NFA, ε-NFA and DFA have the same power. DFA δ: Q×Σ→Q. Minimise by merging equivalent states. Reverse a DFA: swap start and final.",
        "unit": 1
      },
      {
        "id": "H6",
        "title": "PDA basics",
        "papers": [
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ May 2025",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 8,
        "questions": 20,
        "tip": "Z0 is the initial stack symbol. DPDA: no state has two moves for the same input and stack symbol. A PDA accepts by final state or empty stack. A PDA is an NFA plus a stack and accepts exactly the CFLs. A PDA with two stacks equals a TM.",
        "unit": 3
      },
      {
        "id": "H7",
        "title": "Chomsky hierarchy",
        "papers": [
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ May 2025",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 8,
        "questions": 12,
        "tip": "Type 3 regular (FA), Type 2 CFL (PDA), Type 1 CSL (LBA), Type 0 RE (TM). CFL ⊂ CSL ⊂ Recursive ⊂ RE.",
        "unit": 2
      },
      {
        "id": "H14",
        "title": "Turing machine basics",
        "papers": [
          "PYQ Nov 2023",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ May 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ May 2026"
        ],
        "count": 7,
        "questions": 17,
        "tip": "TM has an infinite tape and 7 components (Q,Σ,Γ,δ,q0,B,F); Γ = tape alphabet; NTM and multi-head TM have the same power as a TM; a TM beats an FSM because it can remember arbitrarily long strings.",
        "unit": 4
      },
      {
        "id": "H13",
        "title": "Regular expressions",
        "papers": [
          "PYQ Nov 2023",
          "PYQ Jul 2024",
          "PYQ May 2025",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 7,
        "questions": 10,
        "tip": "(x+y)* = (x*y*)*; (R*)⁺ = R*; (ab)* ≠ a*b*; odd number of 1s: 1(11)*; (a+b)(a+b)* = all non-empty strings; (0+1)*0(0+1)*0(0+1)* = at least two 0s.",
        "unit": 1
      },
      {
        "id": "H15",
        "title": "P, NP and NP-complete",
        "papers": [
          "PYQ May 2024",
          "PYQ Nov 2024",
          "PYQ May 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 6,
        "questions": 17,
        "tip": "NP = verifiable in polynomial time (NTM in polynomial time). SAT, CNF-SAT, TSP, subset sum are NP-complete; shortest path is in P. Every NP-complete problem is NP-hard and in NP. If P≠NP then NP-complete ∩ P = ∅. Prove NP-completeness by polynomial-time reduction.",
        "unit": 5
      },
      {
        "id": "H10",
        "title": "Ambiguity and parse trees",
        "papers": [
          "PYQ Nov 2023",
          "PYQ May 2024",
          "PYQ May 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 6,
        "questions": 8,
        "tip": "Ambiguous = two or more parse trees (or leftmost derivations) for some string. Yield = leaves read left to right; leaves are terminals; internal nodes are variables.",
        "unit": 2
      },
      {
        "id": "H8",
        "title": "Chomsky normal form",
        "papers": [
          "PYQ Nov 2023",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ May 2025",
          "PYQ Jul 2025",
          "PYQ Nov 2025"
        ],
        "count": 6,
        "questions": 6,
        "tip": "CNF: A→BC or A→a. S→AAS (three variables) and A→aa are not CNF.",
        "unit": 2
      },
      {
        "id": "H3",
        "title": "Decidability",
        "papers": [
          "PYQ Nov 2023",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ May 2025",
          "PYQ Nov 2025"
        ],
        "count": 5,
        "questions": 8,
        "tip": "A problem with an algorithm is decidable; with none, undecidable. The halting problem is undecidable but recursively enumerable. L is decidable iff some TM halts on every input. A universal TM can be written.",
        "unit": 5
      },
      {
        "id": "H4",
        "title": "Closure properties",
        "papers": [
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ May 2025",
          "PYQ Nov 2025"
        ],
        "count": 5,
        "questions": 6,
        "tip": "RE languages are closed under union and intersection; CFLs are not closed under intersection; concatenation is associative but not commutative; {ε} is its identity.",
        "unit": 1
      },
      {
        "id": "H5",
        "title": "ID and configuration",
        "papers": [
          "PYQ Jul 2024",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 4,
        "questions": 6,
        "tip": "TM ID = present state + input still to process. PDA configuration = (state, unread input, stack).",
        "unit": 3
      },
      {
        "id": "H11",
        "title": "Grammar simplification",
        "papers": [
          "PYQ May 2024",
          "PYQ May 2025",
          "PYQ Jul 2025 (Paper - 2)"
        ],
        "count": 3,
        "questions": 4,
        "tip": "Remove null, unit and useless productions. Removing non-reachable states is not a grammar-simplification step.",
        "unit": 2
      },
      {
        "id": "H1",
        "title": "Halting states of a TM",
        "papers": [
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)"
        ],
        "count": 3,
        "questions": 3,
        "tip": "Halting states are accept and reject.",
        "unit": 4
      },
      {
        "id": "H2",
        "title": "L and its complement both RE",
        "papers": [
          "PYQ Jul 2024",
          "PYQ Jul 2025",
          "PYQ May 2026"
        ],
        "count": 3,
        "questions": 3,
        "tip": "If L and L̄ are recursively enumerable then L is recursive.",
        "unit": 4
      },
      {
        "id": "H16",
        "title": "PCP and MPCP",
        "papers": [
          "PYQ May 2024",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025"
        ],
        "count": 3,
        "questions": 3,
        "tip": "PCP is an undecidable decision problem. MPCP forces the sequence to start with the first tile.",
        "unit": 5
      },
      {
        "id": "H17",
        "title": "Universal Turing machine",
        "papers": [
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Nov 2025"
        ],
        "count": 3,
        "questions": 3,
        "tip": "A universal TM simulates any other TM; building one is possible.",
        "unit": 1
      },
      {
        "id": "H9",
        "title": "Greibach normal form",
        "papers": [
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ May 2026"
        ],
        "count": 2,
        "questions": 2,
        "tip": "GNF: A→aα, a terminal followed by variables.",
        "unit": 2
      }
    ],
    "note": "Part A is 20 one-mark MCQs. The papers print no answer key: every answer here was worked out by hand, and the ones marked “check” are less certain."
  }
};
