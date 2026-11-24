// Hand-built from the past papers (see tools/hand-built/). Shipped as a built-in guide.
window.SEMPREP = window.SEMPREP || { guides: {} };
window.SEMPREP.guides["gen-discrete-mathematics"] = {
  "code": "21MAB302T",
  "name": "Discrete Mathematics",
  "short": "DM",
  "tagline": "Year 3 · Semester 5 · SRMIST — B.Tech (2021 Regulation)",
  "summary": "Built from the 8 previous-year papers on THE HELPER in the current format (May 2024 – May 2026). Every Part B and Part C question was read from the scanned papers and counted by topic, so the repeat counts are exact. Questions repeat with the same numbers, so working the recurring problems is the fastest way to prepare.",
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
  "totalMarks": 75,
  "basis": "papers",
  "generated": {
    "at": "2026-11-24T07:12:14.672Z",
    "model": "claude-sonnet-5-5 (papers read by hand)",
    "basis": "papers",
    "method": "counted",
    "unread": []
  },
  "repeats": [
    {
      "id": "T1",
      "name": "Rules of inference: direct, CP rule, indirect proof, consistency",
      "unit": 3,
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
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Derive b from a→b, c→b, d→(a∨c), d by the indirect method"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Prove that the premises p→q, q→r, s→¬r and p∧s are inconsistent"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Construct an argument with rules of inference: 'Radha works hard', 'if she works hard she is a dull girl', 'if dull she will not get a job' imply 'Radha will not get a job'"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Derive r→s using the CP rule from the premises p→(q→s), (¬r∨p), q"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Using the indirect method derive p→¬s from p→q∨r, q→¬p, s→¬r, p"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Show that the premises (Rama gets his degree → job → married; higher study → not married; degree and higher study) are inconsistent"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Prove that the premises (Rama gets his degree → job → married; higher study → not married; degree and higher study) are inconsistent"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Show that the set of premises (Rama gets his degree, job, married soon, higher study) is inconsistent"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Translate 'If A works hard then B or C enjoys …' into symbolic form and prove the conclusion using the CP rule"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Show that b can be derived from a→b, c→b, d→(a∨c), d by the indirect method"
        }
      ]
    },
    {
      "id": "T2",
      "name": "Warshall's algorithm (transitive closure)",
      "unit": 1,
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
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,2),(1,5),(2,2),(3,3),(3,4),(4,4),(5,1)} on {1,…,5} using Warshall's algorithm"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,1),(1,3),(2,1),(2,4),(3,2),(3,3),(4,1),(4,5),(5,1),(5,5)} on {1,…,5} by Warshall's algorithm"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Using Warshall's algorithm find the transitive closure of R={(1,2),(2,1),(2,3),(3,4),(4,1)} on {1,2,3,4}"
        },
        {
          "paper": "PYQ May 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,1),(1,3),(2,3),(3,4),(4,1),(4,2)} on {1,2,3,4} using Warshall's algorithm"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Prove analytically that A−(B∩C) = (A−B)∪(A−C) (5 marks). (ii) Find the transitive closure of R on {1,…,5} using Warshall's algorithm (10 marks)"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,2),(2,1),(2,3),(3,4),(4,2),(5,1),(5,5)} on {1,…,5} using Warshall's algorithm"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,1),(1,3),(1,5),(2,3),(2,4),(3,3),(3,5),(4,2),(4,4),(5,4)} on {1,…,5} using Warshall's algorithm"
        },
        {
          "paper": "PYQ May 2026",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,2),(2,3),(3,4),(5,1),(5,4)} on {1,…,5} using Warshall's algorithm"
        }
      ]
    },
    {
      "id": "T3",
      "name": "Inclusion–exclusion principle",
      "unit": 2,
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
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "250 students: 188 Fortran, 100 C, 35 Java, 88 F&C, 23 C&J, 29 F&J, 19 all three; how many took none?"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Find the number of integers between 1 and 100 that are not divisible by 2, 3, 5 or 7"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Find the number of integers between 1 and 250 (inclusive) not divisible by any of 2, 3, 5, 7"
        },
        {
          "paper": "PYQ May 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "250 students: 188 Fortran, 100 C, 35 Java, 88 F&C, 23 C&J, 29 F&J, 19 all three; how many took none?"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Find the number of integers between 1 and 250 (inclusive) not divisible by any of 2, 3, 5, 7"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Find the number of integers between 1 and 250 (inclusive) not divisible by any of 2, 3, 5, 7"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "How many integers from 1 to 300 are divisible by (i) at least one of 3,5,7, (ii) 3 and 5 but not 7, (iii) 5 but neither 3 nor 7?"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "1232 took Tamil, 879 English, 114 Hindi; 103 Tamil&English, 23 Tamil&Hindi, 14 English&Hindi; 2092 took at least one: how many took all three?"
        }
      ]
    },
    {
      "id": "T4",
      "name": "GCD and the Euclidean algorithm",
      "unit": 2,
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
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find m and n with 28844m+15712n=4"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find integers m and n with 512m+320n=64"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find gcd(3587, 1819) and express it as a linear combination of the two numbers"
        },
        {
          "paper": "PYQ May 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean division algorithm to find gcd(18,19,35,87) and express it as a linear combination"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find x and y such that 154x+250y=2"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find gcd(12345, 54321) and express it as a linear combination"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Use the Euclidean algorithm to find gcd(12345, 54321), express it as a linear combination of the two numbers, and find lcm(12345, 54321)"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find gcd(12345, 54321) and express it as a linear combination"
        }
      ]
    },
    {
      "id": "T5",
      "name": "Minimum spanning tree (Kruskal's and Prim's)",
      "unit": 5,
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
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Find the minimum spanning tree of the given weighted graph using Kruskal's algorithm"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Use Kruskal's algorithm to find a minimum spanning tree of the given weighted graph"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Find a minimum spanning tree of the given weighted graph by Kruskal's algorithm and its total weight"
        },
        {
          "paper": "PYQ May 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Use Kruskal's algorithm to find a minimum spanning tree of the given weighted graph"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Find a minimum spanning tree of the given weighted graph by Kruskal's algorithm and its minimum total weight"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Find a minimum spanning tree of the given 10-vertex weighted graph using Kruskal's algorithm"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Use Kruskal's algorithm to find a minimum spanning tree of the given weighted graph"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Find a minimum spanning tree of the given weighted graph using Kruskal's algorithm"
        }
      ]
    },
    {
      "id": "T6",
      "name": "Coding theory: generator and parity-check matrices, encoding and decoding",
      "unit": 4,
      "papers": [
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ Nov 2024",
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
          "paper": "PYQ May 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by the 5×3 parity-check matrix H for the encoding function B³→B⁵"
        },
        {
          "paper": "PYQ May 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "From the generator matrix G (2×5) list the code words, find the parity-check matrix and decode seven received words; are they all decoded uniquely?"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by the encoding function B³→B⁶ for the given 3×6 generator matrix G"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "From the generator matrix G (2×5) find the code words and the parity-check matrix, and decode 11101, 11011, 11010; are they all decoded uniquely?"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(a) Find the minimum distance between the codes 10110, 11110, 10011. (b) Find the code words generated by the given 6×3 parity-check matrix, e: B³→B⁶"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "For the 5×3 parity-check matrix H determine the (2,5) group code function e_H: B²→B⁵"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "From the 4×7 generator matrix G (e_G: B⁴→B⁷) find the parity-check matrix and use it to decode four received words and find the original messages"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by e: B³→B⁶ with respect to the given 6×3 parity-check matrix H"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "From the 4×7 generator matrix G (e_G: B⁴→B⁷) find the parity-check matrix and decode four received words to recover the original messages"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by the parity-check matrix H when the encoding function is e: B³→B⁶"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by e: B³→B⁶ with respect to the given 6×3 parity-check matrix H"
        },
        {
          "paper": "PYQ May 2026",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "From the 3×6 generator matrix G (e: B³→B⁶) find the parity-check matrix and decode four received words; are all decoded uniquely?"
        }
      ]
    },
    {
      "id": "T7",
      "name": "Graph theorems: handshaking, degrees, Euler and Hamilton",
      "unit": 5,
      "papers": [
        "PYQ May 2024",
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
          "paper": "PYQ May 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Prove that a simple disconnected graph with n vertices and k components has at most (n−k)(n−k+1)/2 edges"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Prove that the maximum number of edges in a bipartite graph with n vertices is at most (n/2)²"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Find the number of vertices, edges and the degree of each vertex of the given graph and verify the handshaking theorem"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Prove that a simple disconnected graph with n vertices and k components has at most (n−k)(n−k+1)/2 edges"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Prove that the maximum number of edges in a simple disconnected graph with n vertices and k components is (n−k)(n−k+1)/2"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "(i) Prove that a bipartite graph with n vertices has at most n²/4 edges. (ii) Determine whether the graphs G and H are isomorphic"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Prove that a simple graph with n vertices and k connected components has at most (n−k)(n−k+1)/2 edges"
        }
      ]
    },
    {
      "id": "T8",
      "name": "Hasse diagrams and partial orders",
      "unit": 1,
      "papers": [
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Nov 2025"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Draw the Hasse diagram of 'a divides b' on {1,…,8} from the digraph and prove it is a partial order"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Draw the Hasse diagram of the divisibility relation on {2,4,5,10,12,20,25} from the digraph and prove it is a partial order"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(a) Define a partially ordered set. (b) Prove that ⊆ is a partial order on P(S), S={a,b,c}, and draw the Hasse diagram"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Draw the Hasse diagram of the partial order {(A,B) | A ≤ B} on the power set P(S), S={a,b,c}"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(i) Define a partially ordered set. (ii) Draw the Hasse diagram of the poset {D₃₀, ≤} where ≤ is divisibility"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(i) Show f: R−{−4} → R−{1}, f(x)=x/(x+4) is one-one and onto and find f⁻¹. (ii) Draw the Hasse diagram of divisibility on {1,2,3,4,6,8,9,12,18,24}"
        }
      ]
    },
    {
      "id": "T9",
      "name": "Sets: identities, subsets and power sets",
      "unit": 1,
      "papers": [
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ May 2025",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)"
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
          "text": "Prove the set identity A∩(B−C) = (A∩B)−(A∩C) both by Venn reasoning and analytically"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Prove analytically and verify with set identities that (A∩B)−C = (A−C)∩(B−C)"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Prove analytically and graphically that A∩(B−C) = (A∩B)−(A∩C)"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Prove analytically that A−(B∩C) = (A−B)∪(A−C) (5 marks). (ii) Find the transitive closure of R on {1,…,5} using Warshall's algorithm (10 marks)"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Find the minsets and maxsets generated by A, B, C in U={1,…,10} and prove that the minsets form a partition of U"
        }
      ]
    },
    {
      "id": "T10",
      "name": "Mathematical induction",
      "unit": 3,
      "papers": [
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
          "paper": "PYQ May 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Prove by mathematical induction that n³+2n is divisible by 3 for n ≥ 1"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Use mathematical induction to prove that 8ⁿ − 3ⁿ is divisible by 5 for n ≥ 1"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Use mathematical induction to prove that 3ⁿ + 7ⁿ − 2 is divisible by 8 for n ≥ 1"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "(i) Write the dual of ¬(p∧q)→(¬p∨(¬p∨q)) ≡ (¬p∨q) and prove the duals without truth tables. (ii) Prove 2ⁿ < n! for n ≥ 4 by induction"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Prove by induction that 1/(1·2) + 1/(2·3) + … + 1/(n(n+1)) = n/(n+1)"
        }
      ]
    },
    {
      "id": "T11",
      "name": "Groups: axioms and properties",
      "unit": 4,
      "papers": [
        "PYQ Jul 2024",
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "If a*b=a+b−ab on R, show that {R,*} is an abelian group"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Show that the positive rationals form an abelian group under a*b = ab/2"
        },
        {
          "paper": "PYQ May 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "If a*b=a+b−ab on R, show that {R,*} is an abelian group"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Prove that {R−{1}, *} with a*b = a+b−ab is an abelian group"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "If a*b = ab/3 on Q⁺, show that (Q⁺, *) is an abelian group"
        }
      ]
    },
    {
      "id": "T12",
      "name": "Functions: one-one, onto, inverse, composition",
      "unit": 1,
      "papers": [
        "PYQ Nov 2024",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025"
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
          "text": "If f and g are invertible functions, prove that g∘f is invertible and (g∘f)⁻¹ = f⁻¹∘g⁻¹"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "f: Z→N, f(x)=2x−1 for x>0 and −2x for x≤0: prove f is one-one, onto, and find f⁻¹"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "A={x∈R | x≠2}, B={x∈R | x≠1}, f(x)=x/(x−2): prove f is one-one and onto and find f⁻¹"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(i) Show f: R−{−4} → R−{1}, f(x)=x/(x+4) is one-one and onto and find f⁻¹. (ii) Draw the Hasse diagram of divisibility on {1,2,3,4,6,8,9,12,18,24}"
        }
      ]
    },
    {
      "id": "T13",
      "name": "Permutation groups, cyclic groups, Lagrange's theorem",
      "unit": 4,
      "papers": [
        "PYQ Nov 2024",
        "PYQ May 2025",
        "PYQ Jul 2025 (Paper - 2)"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Prove that every subgroup of a cyclic group is cyclic"
        },
        {
          "paper": "PYQ May 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "For the permutations α, β, γ, δ of {1,2,3,4,5} find αβ, βα, α², αβγ"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Prove that every subgroup of a cyclic group is cyclic"
        }
      ]
    },
    {
      "id": "T14",
      "name": "Graph isomorphism",
      "unit": 5,
      "papers": [
        "PYQ Jul 2024",
        "PYQ May 2025",
        "PYQ Nov 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Determine whether two 8-vertex graphs G₁, G₂ are isomorphic, explain, and find the adjacency matrix of each"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Determine whether the two given graphs G₁ and G₂ are isomorphic"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "(i) Prove that a bipartite graph with n vertices has at most n²/4 edges. (ii) Determine whether the graphs G and H are isomorphic"
        }
      ]
    },
    {
      "id": "T15",
      "name": "Relations: equivalence, closures and properties",
      "unit": 1,
      "papers": [
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "On A={1,2,3}, (a,b) ∈ R iff a+b is even: find M_R, M_R⁻¹, the complement matrix and M_R²"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "On the integers, (a,b) ∈ R iff 3a+4b = 7n for some integer n: prove R is an equivalence relation"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "For the relations R and S given by matrices M_R and M_S find the matrices of R∪S, R∩S, R∘S and R⊕S"
        }
      ]
    },
    {
      "id": "T16",
      "name": "Truth tables, tautologies and normal forms",
      "unit": 3,
      "papers": [
        "PYQ Nov 2024",
        "PYQ Nov 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "(i) Construct the truth table for (P→(Q→R))→((P→Q)→(P→R)). (ii) Prove p→(q→p) ≡ ¬p→(p→q) without truth tables"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "(i) Write the dual of ¬(p∧q)→(¬p∨(¬p∨q)) ≡ (¬p∨q) and prove the duals without truth tables. (ii) Prove 2ⁿ < n! for n ≥ 4 by induction"
        }
      ]
    },
    {
      "id": "T17",
      "name": "Pigeonhole principle",
      "unit": 2,
      "papers": [
        "PYQ Nov 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) 26 points in a 20 cm × 15 cm rectangle: show two are within 5 cm. (ii) Ways to make a garland with 3 yellow, 4 pink and 2 red roses with the two red roses together"
        }
      ]
    },
    {
      "id": "T18",
      "name": "Permutations and combinations",
      "unit": 2,
      "papers": [
        "PYQ Nov 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) 26 points in a 20 cm × 15 cm rectangle: show two are within 5 cm. (ii) Ways to make a garland with 3 yellow, 4 pink and 2 red roses with the two red roses together"
        }
      ]
    },
    {
      "id": "T19",
      "name": "Subgroups and their criterion",
      "unit": 4,
      "papers": [
        "PYQ May 2024"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Prove that a non-empty subset H of a group is a subgroup iff a,b ∈ H ⇒ a*b⁻¹ ∈ H"
        }
      ]
    },
    {
      "id": "T20",
      "name": "Rings, integral domains and fields",
      "unit": 4,
      "papers": [
        "PYQ Jul 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Show that (Z, +, ·) with a+b = a+b−1 and a·b = a+b−ab is a commutative ring with identity"
        }
      ]
    },
    {
      "id": "T21",
      "name": "Adjacency and incidence matrices",
      "unit": 5,
      "papers": [
        "PYQ Jul 2024"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Determine whether two 8-vertex graphs G₁, G₂ are isomorphic, explain, and find the adjacency matrix of each"
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
      "Set Theory",
      "Combinatorics and Number Theory",
      "Mathematical Logic",
      "Algebraic Structures and Coding Theory",
      "Graph Theory"
    ],
    "source": "https://srmhelper.pro/subjects/discrete-mathematics/",
    "key": "Discrete Mathematics",
    "custom": false
  },
  "format": [
    {
      "part": "Part A",
      "marks": "20 × 1 = 20",
      "text": "20 MCQs on the OMR sheet in the first 40 minutes: set and relation facts, counting, gcd/lcm, logical equivalences, group and code properties, graph terms (degree, tree, chromatic number)."
    },
    {
      "part": "Part B",
      "marks": "5 × 8 = 40",
      "text": "Q21–Q25, each with an either/or choice, one question per unit (Q21 = Unit 1 … Q25 = Unit 5)."
    },
    {
      "part": "Part C",
      "marks": "1 × 15 = 15",
      "text": "Q26 or Q27, answer one. In practice it is Warshall's algorithm (Q26) or a coding-theory decode (Q27); Kruskal's and the Euclidean algorithm have also been set here."
    }
  ],
  "callouts": [
    {
      "tone": "hot",
      "title": "Three questions in every paper",
      "text": "Kruskal's minimum spanning tree, the Euclidean algorithm and a logic derivation (rules of inference or inconsistent premises) appeared in all 8 papers. Master these three first."
    },
    {
      "tone": "star",
      "title": "Part C is predictable",
      "text": "Warshall's algorithm was a Part C choice in 7 of 8 papers and a coding-theory decode in 6 of 8. Prepare both with full step-by-step working."
    }
  ],
  "top": [
    {
      "q": "Rules of inference — show premises are inconsistent (Rama gets his degree…), derive a conclusion by the indirect method or CP rule",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 8,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Derive b from a→b, c→b, d→(a∨c), d by the indirect method"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Prove that the premises p→q, q→r, s→¬r and p∧s are inconsistent"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Construct an argument with rules of inference: 'Radha works hard', 'if she works hard she is a dull girl', 'if dull she will not get a job' imply 'Radha will not get a job'"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Derive r→s using the CP rule from the premises p→(q→s), (¬r∨p), q"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Using the indirect method derive p→¬s from p→q∨r, q→¬p, s→¬r, p"
        },
        {
          "paper": "PYQ May 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Show that the premises (Rama gets his degree → job → married; higher study → not married; degree and higher study) are inconsistent"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Prove that the premises (Rama gets his degree → job → married; higher study → not married; degree and higher study) are inconsistent"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Show that the set of premises (Rama gets his degree, job, married soon, higher study) is inconsistent"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Translate 'If A works hard then B or C enjoys …' into symbolic form and prove the conclusion using the CP rule"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Show that b can be derived from a→b, c→b, d→(a∨c), d by the indirect method"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 3
    },
    {
      "q": "Euclidean algorithm — find gcd and write it as a linear combination ma + nb (512m+320n=64, 154x+250y=2, gcd(12345, 54321))",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 8,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find m and n with 28844m+15712n=4"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find integers m and n with 512m+320n=64"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find gcd(3587, 1819) and express it as a linear combination of the two numbers"
        },
        {
          "paper": "PYQ May 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean division algorithm to find gcd(18,19,35,87) and express it as a linear combination"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find x and y such that 154x+250y=2"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find gcd(12345, 54321) and express it as a linear combination"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Use the Euclidean algorithm to find gcd(12345, 54321), express it as a linear combination of the two numbers, and find lcm(12345, 54321)"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Use the Euclidean algorithm to find gcd(12345, 54321) and express it as a linear combination"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 2
    },
    {
      "q": "Minimum spanning tree by Kruskal's algorithm — with the order of edges and the total weight",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 8,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Find the minimum spanning tree of the given weighted graph using Kruskal's algorithm"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Use Kruskal's algorithm to find a minimum spanning tree of the given weighted graph"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Find a minimum spanning tree of the given weighted graph by Kruskal's algorithm and its total weight"
        },
        {
          "paper": "PYQ May 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Use Kruskal's algorithm to find a minimum spanning tree of the given weighted graph"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Find a minimum spanning tree of the given weighted graph by Kruskal's algorithm and its minimum total weight"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Find a minimum spanning tree of the given 10-vertex weighted graph using Kruskal's algorithm"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Use Kruskal's algorithm to find a minimum spanning tree of the given weighted graph"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Find a minimum spanning tree of the given weighted graph using Kruskal's algorithm"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 5
    },
    {
      "q": "Warshall's algorithm — transitive closure of a relation on {1,…,5}, showing every matrix W₀…W₅",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 8,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,2),(1,5),(2,2),(3,3),(3,4),(4,4),(5,1)} on {1,…,5} using Warshall's algorithm"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,1),(1,3),(2,1),(2,4),(3,2),(3,3),(4,1),(4,5),(5,1),(5,5)} on {1,…,5} by Warshall's algorithm"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Using Warshall's algorithm find the transitive closure of R={(1,2),(2,1),(2,3),(3,4),(4,1)} on {1,2,3,4}"
        },
        {
          "paper": "PYQ May 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,1),(1,3),(2,3),(3,4),(4,1),(4,2)} on {1,2,3,4} using Warshall's algorithm"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Prove analytically that A−(B∩C) = (A−B)∪(A−C) (5 marks). (ii) Find the transitive closure of R on {1,…,5} using Warshall's algorithm (10 marks)"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,2),(2,1),(2,3),(3,4),(4,2),(5,1),(5,5)} on {1,…,5} using Warshall's algorithm"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,1),(1,3),(1,5),(2,3),(2,4),(3,3),(3,5),(4,2),(4,4),(5,4)} on {1,…,5} using Warshall's algorithm"
        },
        {
          "paper": "PYQ May 2026",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Find the transitive closure of R={(1,2),(2,3),(3,4),(5,1),(5,4)} on {1,…,5} using Warshall's algorithm"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 1
    },
    {
      "q": "Inclusion–exclusion — 250 students and three languages; integers 1–250 not divisible by 2, 3, 5, 7",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 8,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "250 students: 188 Fortran, 100 C, 35 Java, 88 F&C, 23 C&J, 29 F&J, 19 all three; how many took none?"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Find the number of integers between 1 and 100 that are not divisible by 2, 3, 5 or 7"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Find the number of integers between 1 and 250 (inclusive) not divisible by any of 2, 3, 5, 7"
        },
        {
          "paper": "PYQ May 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "250 students: 188 Fortran, 100 C, 35 Java, 88 F&C, 23 C&J, 29 F&J, 19 all three; how many took none?"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Find the number of integers between 1 and 250 (inclusive) not divisible by any of 2, 3, 5, 7"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Find the number of integers between 1 and 250 (inclusive) not divisible by any of 2, 3, 5, 7"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "How many integers from 1 to 300 are divisible by (i) at least one of 3,5,7, (ii) 3 and 5 but not 7, (iii) 5 but neither 3 nor 7?"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "1232 took Tamil, 879 English, 114 Hindi; 103 Tamil&English, 23 Tamil&Hindi, 14 English&Hindi; 2092 took at least one: how many took all three?"
        }
      ],
      "importance": 5,
      "marks": "8",
      "unit": 2
    },
    {
      "q": "Coding theory — code words from a parity-check matrix; parity-check matrix and decoding from a generator matrix",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 7,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by the 5×3 parity-check matrix H for the encoding function B³→B⁵"
        },
        {
          "paper": "PYQ May 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "From the generator matrix G (2×5) list the code words, find the parity-check matrix and decode seven received words; are they all decoded uniquely?"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by the encoding function B³→B⁶ for the given 3×6 generator matrix G"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "From the generator matrix G (2×5) find the code words and the parity-check matrix, and decode 11101, 11011, 11010; are they all decoded uniquely?"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(a) Find the minimum distance between the codes 10110, 11110, 10011. (b) Find the code words generated by the given 6×3 parity-check matrix, e: B³→B⁶"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "For the 5×3 parity-check matrix H determine the (2,5) group code function e_H: B²→B⁵"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "From the 4×7 generator matrix G (e_G: B⁴→B⁷) find the parity-check matrix and use it to decode four received words and find the original messages"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by e: B³→B⁶ with respect to the given 6×3 parity-check matrix H"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "From the 4×7 generator matrix G (e_G: B⁴→B⁷) find the parity-check matrix and decode four received words to recover the original messages"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by the parity-check matrix H when the encoding function is e: B³→B⁶"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Find the code words generated by e: B³→B⁶ with respect to the given 6×3 parity-check matrix H"
        },
        {
          "paper": "PYQ May 2026",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "From the 3×6 generator matrix G (e: B³→B⁶) find the parity-check matrix and decode four received words; are all decoded uniquely?"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 4
    },
    {
      "q": "Graph theorems — handshaking, maximum edges (n−k)(n−k+1)/2 with k components, bipartite ≤ n²/4, Euler graphs",
      "seen": "Appeared in: PYQ May 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 7,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Prove that a simple disconnected graph with n vertices and k components has at most (n−k)(n−k+1)/2 edges"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Prove that the maximum number of edges in a bipartite graph with n vertices is at most (n/2)²"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Find the number of vertices, edges and the degree of each vertex of the given graph and verify the handshaking theorem"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Prove that a simple disconnected graph with n vertices and k components has at most (n−k)(n−k+1)/2 edges"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Prove that the maximum number of edges in a simple disconnected graph with n vertices and k components is (n−k)(n−k+1)/2"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "(i) Prove that a bipartite graph with n vertices has at most n²/4 edges. (ii) Determine whether the graphs G and H are isomorphic"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Prove that a simple graph with n vertices and k connected components has at most (n−k)(n−k+1)/2 edges"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 5
    },
    {
      "q": "Hasse diagrams — draw the diagram and prove the relation is a partial order (divisibility, P({a,b,c}), D₃₀)",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025, PYQ Nov 2025",
      "freq": 6,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Draw the Hasse diagram of 'a divides b' on {1,…,8} from the digraph and prove it is a partial order"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Draw the Hasse diagram of the divisibility relation on {2,4,5,10,12,20,25} from the digraph and prove it is a partial order"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "(a) Define a partially ordered set. (b) Prove that ⊆ is a partial order on P(S), S={a,b,c}, and draw the Hasse diagram"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Draw the Hasse diagram of the partial order {(A,B) | A ≤ B} on the power set P(S), S={a,b,c}"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "(i) Define a partially ordered set. (ii) Draw the Hasse diagram of the poset {D₃₀, ≤} where ≤ is divisibility"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(i) Show f: R−{−4} → R−{1}, f(x)=x/(x+4) is one-one and onto and find f⁻¹. (ii) Draw the Hasse diagram of divisibility on {1,2,3,4,6,8,9,12,18,24}"
        }
      ],
      "importance": 4,
      "marks": "8–15",
      "unit": 1
    },
    {
      "q": "Groups — prove an operation such as a*b = a+b−ab or ab/2 forms an abelian group",
      "seen": "Appeared in: PYQ Jul 2024, PYQ Nov 2024, PYQ May 2025, PYQ Nov 2025, PYQ May 2026",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jul 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "If a*b=a+b−ab on R, show that {R,*} is an abelian group"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Show that the positive rationals form an abelian group under a*b = ab/2"
        },
        {
          "paper": "PYQ May 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "If a*b=a+b−ab on R, show that {R,*} is an abelian group"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Prove that {R−{1}, *} with a*b = a+b−ab is an abelian group"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "If a*b = ab/3 on Q⁺, show that (Q⁺, *) is an abelian group"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 4
    },
    {
      "q": "Mathematical induction — divisibility (n³+2n by 3, 8ⁿ−3ⁿ by 5), inequalities (2ⁿ < n!), sums",
      "seen": "Appeared in: PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Prove by mathematical induction that n³+2n is divisible by 3 for n ≥ 1"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Use mathematical induction to prove that 8ⁿ − 3ⁿ is divisible by 5 for n ≥ 1"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Use mathematical induction to prove that 3ⁿ + 7ⁿ − 2 is divisible by 8 for n ≥ 1"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "(i) Write the dual of ¬(p∧q)→(¬p∨(¬p∨q)) ≡ (¬p∨q) and prove the duals without truth tables. (ii) Prove 2ⁿ < n! for n ≥ 4 by induction"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Prove by induction that 1/(1·2) + 1/(2·3) + … + 1/(n(n+1)) = n/(n+1)"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 3
    },
    {
      "q": "Set identities — prove A∩(B−C) = (A∩B)−(A∩C) and similar, or find minsets and maxsets",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ May 2025, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2)",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Prove the set identity A∩(B−C) = (A∩B)−(A∩C) both by Venn reasoning and analytically"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Prove analytically and verify with set identities that (A∩B)−C = (A−C)∩(B−C)"
        },
        {
          "paper": "PYQ May 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Prove analytically and graphically that A∩(B−C) = (A∩B)−(A∩C)"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "(i) Prove analytically that A−(B∩C) = (A−B)∪(A−C) (5 marks). (ii) Find the transitive closure of R on {1,…,5} using Warshall's algorithm (10 marks)"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Find the minsets and maxsets generated by A, B, C in U={1,…,10} and prove that the minsets form a partition of U"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "Functions — one-one, onto and inverse of a piecewise or rational function; inverse of a composition",
      "seen": "Appeared in: PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "If f and g are invertible functions, prove that g∘f is invertible and (g∘f)⁻¹ = f⁻¹∘g⁻¹"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "f: Z→N, f(x)=2x−1 for x>0 and −2x for x≤0: prove f is one-one, onto, and find f⁻¹"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "A={x∈R | x≠2}, B={x∈R | x≠1}, f(x)=x/(x−2): prove f is one-one and onto and find f⁻¹"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "(i) Show f: R−{−4} → R−{1}, f(x)=x/(x+4) is one-one and onto and find f⁻¹. (ii) Draw the Hasse diagram of divisibility on {1,2,3,4,6,8,9,12,18,24}"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "Permutation groups and cyclic groups — every subgroup of a cyclic group is cyclic; products of permutations",
      "seen": "Appeared in: PYQ Nov 2024, PYQ May 2025, PYQ Jul 2025 (Paper - 2)",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Prove that every subgroup of a cyclic group is cyclic"
        },
        {
          "paper": "PYQ May 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "For the permutations α, β, γ, δ of {1,2,3,4,5} find αβ, βα, α², αβγ"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Prove that every subgroup of a cyclic group is cyclic"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 4
    },
    {
      "q": "Graph isomorphism — compare degrees and edges, build the mapping, give the adjacency matrices",
      "seen": "Appeared in: PYQ Jul 2024, PYQ May 2025, PYQ Nov 2025",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jul 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Determine whether two 8-vertex graphs G₁, G₂ are isomorphic, explain, and find the adjacency matrix of each"
        },
        {
          "paper": "PYQ May 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Determine whether the two given graphs G₁ and G₂ are isomorphic"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "(i) Prove that a bipartite graph with n vertices has at most n²/4 edges. (ii) Determine whether the graphs G and H are isomorphic"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 5
    },
    {
      "q": "Relations — prove a relation is an equivalence relation; matrices of R∪S, R∩S, R∘S, R⊕S",
      "seen": "Appeared in: PYQ Nov 2025, PYQ May 2026",
      "freq": 2,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "On A={1,2,3}, (a,b) ∈ R iff a+b is even: find M_R, M_R⁻¹, the complement matrix and M_R²"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "On the integers, (a,b) ∈ R iff 3a+4b = 7n for some integer n: prove R is an equivalence relation"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "For the relations R and S given by matrices M_R and M_S find the matrices of R∪S, R∩S, R∘S and R⊕S"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "Truth tables and equivalence without truth tables; duals",
      "seen": "Appeared in: PYQ Nov 2024, PYQ Nov 2025",
      "freq": 2,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "(i) Construct the truth table for (P→(Q→R))→((P→Q)→(P→R)). (ii) Prove p→(q→p) ≡ ¬p→(p→q) without truth tables"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "(i) Write the dual of ¬(p∧q)→(¬p∨(¬p∨q)) ≡ (¬p∨q) and prove the duals without truth tables. (ii) Prove 2ⁿ < n! for n ≥ 4 by induction"
        }
      ],
      "importance": 2,
      "marks": "4–8",
      "unit": 3
    },
    {
      "q": "Subgroup criterion — a non-empty H is a subgroup iff a, b ∈ H ⇒ a*b⁻¹ ∈ H",
      "seen": "Appeared in: PYQ May 2024",
      "freq": 1,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Prove that a non-empty subset H of a group is a subgroup iff a,b ∈ H ⇒ a*b⁻¹ ∈ H"
        }
      ],
      "importance": 2,
      "marks": "8",
      "unit": 4
    },
    {
      "q": "Pigeonhole principle — 26 points in a 20 cm × 15 cm rectangle",
      "seen": "Appeared in: PYQ Nov 2025",
      "freq": 1,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) 26 points in a 20 cm × 15 cm rectangle: show two are within 5 cm. (ii) Ways to make a garland with 3 yellow, 4 pink and 2 red roses with the two red roses together"
        }
      ],
      "importance": 2,
      "marks": "4",
      "unit": 2
    },
    {
      "q": "Permutations and combinations — arrangements with a group together (garland with red roses)",
      "seen": "Appeared in: PYQ Nov 2025",
      "freq": 1,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "(i) 26 points in a 20 cm × 15 cm rectangle: show two are within 5 cm. (ii) Ways to make a garland with 3 yellow, 4 pink and 2 red roses with the two red roses together"
        }
      ],
      "importance": 2,
      "marks": "4",
      "unit": 2
    }
  ],
  "units": [
    {
      "n": 1,
      "title": "Set Theory",
      "weight": "High",
      "topics": [
        {
          "t": "Warshall's algorithm — W₀ = M_R; for each k, W_k[i][j] = W_{k−1}[i][j] OR (W_{k−1}[i][k] AND W_{k−1}[k][j]); the last matrix is the transitive closure; show every W_k",
          "tag": "8/8"
        },
        {
          "t": "Hasse diagrams and partial orders — a poset is reflexive, antisymmetric, transitive; from the digraph drop loops, transitive edges and arrow directions; D₃₀, divisibility on {1,…,8}, P({a,b,c})",
          "tag": "6/8"
        },
        {
          "t": "Set identities — prove by showing each side is a subset of the other, or by the algebra of sets; minsets and maxsets partition the universal set",
          "tag": "5/8"
        },
        {
          "t": "Functions — one-one, onto, inverse; piecewise f: Z→N, f(x)=x/(x−2); (g∘f)⁻¹ = f⁻¹∘g⁻¹",
          "tag": "4/8"
        },
        {
          "t": "Relations — equivalence = reflexive + symmetric + transitive; matrix forms: R∪S (OR), R∩S (AND), R∘S (Boolean product), R⁻¹ (transpose), R⊕S (XOR)",
          "tag": "2/8"
        }
      ]
    },
    {
      "n": 2,
      "title": "Combinatorics and Number Theory",
      "weight": "High",
      "topics": [
        {
          "t": "Euclidean algorithm — repeated division gives gcd(a,b) = gcd(b, a mod b); back-substitute to write gcd = ma + nb; lcm = ab / gcd",
          "tag": "8/8"
        },
        {
          "t": "Inclusion–exclusion — |A∪B∪C| = Σ|A| − Σ|A∩B| + |A∩B∩C|; numbers up to N not divisible by 2,3,5,7: N − Σ⌊N/p⌋ + Σ⌊N/pq⌋ − Σ⌊N/pqr⌋ + ⌊N/210⌋",
          "tag": "8/8"
        },
        {
          "t": "Pigeonhole principle — n objects in m boxes forces a box with at least ⌈n/m⌉ objects; split a region into boxes",
          "tag": "1/8"
        },
        {
          "t": "Permutations and combinations — n!, P(n,r), C(n,r), circular (n−1)!, repeated letters n!/(p!q!…); treat 'together' items as one block",
          "tag": "1/8"
        },
        {
          "t": "Fundamental theorem of arithmetic; gcd·lcm = product; gcd(ka,kb) = k·gcd(a,b)",
          "tag": "MCQ"
        }
      ]
    },
    {
      "n": 3,
      "title": "Mathematical Logic",
      "weight": "High",
      "topics": [
        {
          "t": "Rules of inference — Rule P (premise), Rule T (implied by earlier lines), Rule CP (assume the antecedent); the indirect method adds ¬conclusion as a premise and reaches a contradiction",
          "tag": "8/8"
        },
        {
          "t": "Inconsistent premises — derive a contradiction from the premises; the Rama 'degree, job, married, higher studies' set appears in three papers",
          "tag": "4/8"
        },
        {
          "t": "Mathematical induction — base case, assume P(k), prove P(k+1); divisibility, 2ⁿ < n!, Σ 1/(n(n+1)) = n/(n+1)",
          "tag": "5/8"
        },
        {
          "t": "Truth tables, tautologies and duals — the dual swaps ∧↔∨ and T↔F; prove equivalences with the laws of logic",
          "tag": "2/8"
        }
      ]
    },
    {
      "n": 4,
      "title": "Algebraic Structures and Coding Theory",
      "weight": "Very High",
      "topics": [
        {
          "t": "Coding theory — encoding e: Bᵐ→Bⁿ with a parity-check matrix or generator matrix; decode with the syndrome; Hamming distance and weight; d_min detects d−1 and corrects ⌊(d−1)/2⌋ errors",
          "tag": "7/8"
        },
        {
          "t": "Groups — closure, associativity, identity, inverse; for a*b = a+b−ab the identity is 0, for ab/2 on Q⁺ it is 2; abelian also needs commutativity",
          "tag": "5/8"
        },
        {
          "t": "Permutation groups and cyclic groups — |Sₙ| = n!; multiply permutations carefully; every subgroup of a cyclic group is cyclic",
          "tag": "3/8"
        },
        {
          "t": "Subgroups — a non-empty subset H is a subgroup iff a, b ∈ H ⇒ a*b⁻¹ ∈ H",
          "tag": "1/8"
        },
        {
          "t": "Rings, integral domains and fields — an integral domain is a commutative ring with unity and no zero divisors; every finite integral domain is a field",
          "tag": "1/8"
        }
      ]
    },
    {
      "n": 5,
      "title": "Graph Theory",
      "weight": "High",
      "topics": [
        {
          "t": "Minimum spanning tree — Kruskal: sort the edges, add the cheapest that does not form a cycle until n−1 edges; give the total weight",
          "tag": "8/8"
        },
        {
          "t": "Graph theorems — handshaking Σdeg(v) = 2|E|; odd-degree vertices come in pairs; a graph with k components has at most (n−k)(n−k+1)/2 edges; bipartite ≤ n²/4",
          "tag": "7/8"
        },
        {
          "t": "Graph isomorphism — match vertex count, edge count and degree sequence, then give an edge-preserving bijection or show none exists",
          "tag": "3/8"
        },
        {
          "t": "Adjacency and incidence matrices — adjacency is symmetric for undirected graphs; the row sums give the degrees",
          "tag": "1/8"
        },
        {
          "t": "Trees and colouring — a tree on n vertices has n−1 edges; χ(bipartite) = 2, χ(Kₙ) = n; a connected graph has an Euler circuit iff every degree is even",
          "tag": "MCQ"
        }
      ]
    }
  ],
  "eight": {
    "title": "Most Repeated 8-Mark Questions (Part B)",
    "strategy": "Part B is Q21–Q25, one question per unit with an either/or choice. The same problems come back with identical numbers, so rehearse the recurring ones below and you will recognise most of the paper.",
    "groups": [
      {
        "q": "Q21",
        "unit": 1,
        "items": [
          "Draw a Hasse diagram and prove the relation is a partial order: divisibility on {1,…,8}, on {2,4,5,10,12,20,25}, D₃₀, P({a,b,c}) (6 of 8 papers)",
          "Prove a set identity: A∩(B−C) = (A∩B)−(A∩C) (May 2024, May 2025) or (A∩B)−C = (A−C)∩(B−C) (Jul 2024)",
          "One-one, onto and inverse of f: Z→N with 2x−1 / −2x (Jul 2025); of x/(x−2) and x/(x+4) (Jul 2025 Paper 2, Nov 2025)",
          "Prove a relation is an equivalence relation, or find M_R, M_{R⁻¹}, R∪S, R∩S, R∘S, R⊕S (Nov 2025, May 2026)"
        ]
      },
      {
        "q": "Q22",
        "unit": 2,
        "items": [
          "Euclidean algorithm with gcd as a linear combination: 512m+320n=64 (Jul 2024), 28844m+15712n=4, 154x+250y=2, gcd(3587,1819), gcd(18,19,35,87), gcd(12345, 54321) (three recent papers)",
          "250 students taking Fortran, C and Java: how many took none (May 2024, May 2025)",
          "Integers between 1 and 250 not divisible by 2, 3, 5 or 7 (Nov 2024, Jul 2025, Jul 2025 Paper 2)",
          "Pigeonhole (26 points in a rectangle) and the garland with red roses together (Nov 2025)"
        ]
      },
      {
        "q": "Q23",
        "unit": 3,
        "items": [
          "Show the premises (Rama gets his degree → job → married; higher study → not married) are inconsistent (May 2025, Jul 2025, Jul 2025 Paper 2)",
          "Derive b from a→b, c→b, d→(a∨c), d by the indirect method (May 2024, May 2026)",
          "Derive a conclusion with the CP rule: p→(q→s), ¬r∨p, q ⊢ r→s (Jul 2024); the 'A works hard' argument (Nov 2025)",
          "Induction: n³+2n by 3, 8ⁿ−3ⁿ by 5, 3ⁿ+7ⁿ−2 by 8, 2ⁿ < n!, Σ 1/(n(n+1)) = n/(n+1) (last five papers)"
        ]
      },
      {
        "q": "Q24",
        "unit": 4,
        "items": [
          "Prove {R,*} or {R−{1},*} with a*b = a+b−ab is an abelian group (Jul 2024, May 2025, Nov 2025); ab/2 and ab/3 on Q⁺ (Nov 2024, May 2026)",
          "Find the code words for e: B³→B⁶ from a parity-check matrix H, or from a generator matrix G (6 of 8 papers)",
          "Every subgroup of a cyclic group is cyclic (Nov 2024, Jul 2025 Paper 2); the subgroup criterion a*b⁻¹ ∈ H (May 2024)",
          "Products of permutations in S₅: αβ, βα, α², αβγ (May 2025)"
        ]
      },
      {
        "q": "Q25",
        "unit": 5,
        "items": [
          "Kruskal's algorithm on a weighted graph with the total weight (every paper)",
          "Prove a simple disconnected graph with n vertices and k components has at most (n−k)(n−k+1)/2 edges (May 2024, Jul 2025, Jul 2025 Paper 2, May 2026)",
          "Graph isomorphism with adjacency matrices (Jul 2024, May 2025, Nov 2025); bipartite graph has at most n²/4 edges (Nov 2024, Nov 2025)",
          "Number of vertices, edges and degrees of a graph and the handshaking theorem (May 2025)"
        ]
      }
    ],
    "tip": "The same weighted graphs come back: practise the 9-vertex A–I graph (Jul 2024, May 2025) and the A–F graph with edges 16, 21, 11, 5, 19, 40, 14, 6, 18, 10 (Nov 2024, Jul 2025)."
  },
  "fifteen": {
    "title": "Most Repeated 15-Mark Questions (Part C)",
    "note": "Q26 or Q27, answer one. The choice has been Warshall's algorithm or a coding-theory decode in almost every paper, so prepare both completely.",
    "items": [
      {
        "q": "Warshall's algorithm — find the transitive closure of a relation on {1,…,5}, showing every step",
        "seen": "Part C in May 2024, Jul 2024, May 2025, Jul 2025 (10 of 15 marks), Jul 2025 Paper 2, Nov 2025, May 2026 (7 of 8)",
        "level": "Hot"
      },
      {
        "q": "Coding theory — from a generator matrix find all code words, the parity-check matrix, decode the received words, and say whether each is decoded uniquely",
        "seen": "Q27 in May 2024, Jul 2024, Nov 2024, Jul 2025 Paper 2 and May 2026; Q26 in Jul 2025 (6 of 8)",
        "level": "Hot"
      },
      {
        "q": "Kruskal's algorithm on a weighted graph",
        "seen": "Part C in May 2025 (Q27); in Part B (Q25) of every paper",
        "level": "Watch"
      },
      {
        "q": "Euclidean algorithm: gcd(12345, 54321), express it as a linear combination, and find the LCM",
        "seen": "Nov 2025 Q27",
        "level": "Watch"
      },
      {
        "q": "Define a poset; prove ⊆ is a partial order on P({a,b,c}) and draw the Hasse diagram",
        "seen": "Nov 2024 Q26",
        "level": "Watch"
      },
      {
        "q": "Prove A−(B∩C) = (A−B)∪(A−C) (5 marks) together with Warshall's algorithm (10 marks)",
        "seen": "Jul 2025 Q27",
        "level": "Watch"
      }
    ]
  },
  "predict": {
    "note": "Based on topic rotation across your 8 paper(s).",
    "rows": [
      [
        "Kruskal's minimum spanning tree",
        5,
        "8",
        95,
        "In all 8 papers"
      ],
      [
        "Rules of inference / inconsistent premises / CP rule",
        3,
        "8",
        95,
        "In all 8 papers; three of them used the Rama premises"
      ],
      [
        "Euclidean algorithm with linear combination",
        2,
        "8",
        90,
        "In all 8 papers; gcd(12345, 54321) came up three times recently"
      ],
      [
        "Warshall's algorithm (Part C)",
        1,
        "15",
        90,
        "In all 8 papers, and Part C in 7 of them"
      ],
      [
        "Inclusion–exclusion counting",
        2,
        "8",
        85,
        "In all 8 papers, including the last two"
      ],
      [
        "Coding theory: code words, parity-check matrix, decoding",
        4,
        "8–15",
        85,
        "7 of 8 papers; Q24 or Q27 in each of the last four"
      ],
      [
        "Graph theorems: (n−k)(n−k+1)/2, bipartite n²/4, handshaking",
        5,
        "8",
        80,
        "7 of 8 papers; the k-components proof appeared 4 times"
      ],
      [
        "Mathematical induction",
        3,
        "8",
        80,
        "Asked in each of the last five papers"
      ],
      [
        "Abelian group proof under a given operation",
        4,
        "8",
        75,
        "5 of 8 papers; last seen May 2026"
      ],
      [
        "Hasse diagram and partial order",
        1,
        "8",
        60,
        "6 of 8 papers; not in the last two, so it is due"
      ],
      [
        "Functions: one-one, onto, inverse",
        1,
        "8",
        50,
        "4 of 8 papers; last seen Nov 2025"
      ],
      [
        "Set identity proof",
        1,
        "8",
        45,
        "5 of 8 papers; last in Jul 2025"
      ],
      [
        "Equivalence relation / relation matrices",
        1,
        "8",
        45,
        "Asked in both of the last two papers"
      ],
      [
        "Graph isomorphism",
        5,
        "8",
        45,
        "3 of 8 papers; last Nov 2025"
      ],
      [
        "Cyclic subgroup / permutation products",
        4,
        "8",
        45,
        "3 of 8 papers; not in the last two"
      ],
      [
        "Pigeonhole principle and arrangements",
        2,
        "4–8",
        30,
        "Only in Nov 2025, but on the student topic list"
      ],
      [
        "Truth tables and equivalence without tables",
        3,
        "4–8",
        30,
        "2 of 8 papers"
      ]
    ],
    "callouts": []
  },
  "formulas": [
    {
      "title": "Counting and inclusion–exclusion",
      "lines": [
        "|A ∪ B| = |A| + |B| − |A ∩ B|",
        "|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|",
        "None of the sets = N − |A ∪ B ∪ C|",
        "Not divisible by 2,3,5,7 up to N: N − Σ⌊N/p⌋ + Σ⌊N/pq⌋ − Σ⌊N/pqr⌋ + ⌊N/210⌋",
        "|P(A)| = 2ⁿ;   n! ;   P(n,r) = n!/(n−r)!;   C(n,r) = n!/(r!(n−r)!)",
        "Circular arrangements (n−1)!;  necklace (n−1)!/2;  repeats n!/(p! q! r!)",
        "Pigeonhole: n objects in m boxes ⇒ some box has at least ⌈n/m⌉"
      ]
    },
    {
      "title": "Relations, Hasse diagrams and Warshall",
      "lines": [
        "Reflexive (a,a) ∈ R;  symmetric (a,b) ⇒ (b,a);  antisymmetric;  transitive",
        "Equivalence relation = reflexive + symmetric + transitive",
        "Partial order = reflexive + antisymmetric + transitive",
        "Hasse diagram: remove loops, remove edges implied by transitivity, draw upwards",
        "M_{R∪S} = M_R ∨ M_S;  M_{R∩S} = M_R ∧ M_S;  M_{R∘S} = Boolean product;  M_{R⁻¹} = M_Rᵀ",
        "Warshall: W₀ = M_R;  W_k[i][j] = W_{k−1}[i][j] ∨ (W_{k−1}[i][k] ∧ W_{k−1}[k][j]);  answer = W_n"
      ]
    },
    {
      "title": "Functions",
      "lines": [
        "One-one: f(a) = f(b) ⇒ a = b;   onto: every y has some x with f(x) = y",
        "To find f⁻¹: put y = f(x), solve for x, swap the names",
        "(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹;   g ∘ f of bijections is a bijection",
        "Number of functions A → B is |B|^|A|"
      ]
    },
    {
      "title": "Number theory",
      "lines": [
        "gcd(a, b) = gcd(b, a mod b)   (Euclid)",
        "Back-substitute the remainders to get gcd = m·a + n·b",
        "gcd(a, b) · lcm(a, b) = a · b",
        "gcd(ka, kb) = k · gcd(a, b);   if gcd(a,b) = 1 and a | bc then a | c"
      ]
    },
    {
      "title": "Logic and proof",
      "lines": [
        "p → q ≡ ¬p ∨ q;   contrapositive ¬q → ¬p;   converse q → p;   inverse ¬p → ¬q",
        "De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q;   ¬(p ∨ q) ≡ ¬p ∧ ¬q;   absorption p ∨ (p ∧ q) ≡ p",
        "Dual: swap ∧ ↔ ∨ and T ↔ F",
        "Rule P (premise), Rule T (implied), Rule CP (assume antecedent, derive consequent)",
        "Indirect method: add ¬conclusion as a premise and derive a contradiction",
        "Induction: base case; assume P(k); show P(k+1)"
      ]
    },
    {
      "title": "Groups",
      "lines": [
        "Group: closure, associativity, identity e, inverse a⁻¹;  abelian if a*b = b*a",
        "(a*b)⁻¹ = b⁻¹ * a⁻¹;   the identity and inverses are unique",
        "a*b = a+b−ab on R−{1}:  e = 0,  a⁻¹ = a/(a−1)",
        "a*b = ab/2 on Q⁺:  e = 2,  a⁻¹ = 4/a;   a*b = ab/3:  e = 3,  a⁻¹ = 9/a",
        "Subgroup test: H ≠ ∅ and a, b ∈ H ⇒ a*b⁻¹ ∈ H",
        "|Sₙ| = n!;   every cyclic group is abelian;   every subgroup of a cyclic group is cyclic"
      ]
    },
    {
      "title": "Coding theory",
      "lines": [
        "Hamming weight = number of 1s;  distance d(x, y) = weight(x ⊕ y)",
        "d_min ≥ k+1 detects k errors;  d_min ≥ 2k+1 corrects k errors",
        "G = [ I_m | A ],  code word c = b · G (mod 2);   H = [ A ; I_r ]  (n × r),  c · H = 0",
        "Parity-check encoding: append the check bits formed by the columns of A",
        "Decoding: syndrome s = r · H;  s = 0 ⇒ accept;  s equals row j of H ⇒ flip bit j",
        "A code corrects every single error iff the rows of H are distinct and non-zero"
      ]
    },
    {
      "title": "Graph theory",
      "lines": [
        "Handshaking: Σ deg(v) = 2|E|;  the number of odd-degree vertices is even",
        "Kₙ has n(n−1)/2 edges;  a tree on n vertices has n−1 edges",
        "Simple graph with k components: |E| ≤ (n−k)(n−k+1)/2",
        "Bipartite graph: |E| ≤ n²/4;   χ(bipartite) = 2,  χ(Kₙ) = n",
        "Euler circuit iff connected and every degree is even;  Euler path iff exactly two odd degrees",
        "Kruskal: sort edges, add the cheapest that creates no cycle, stop at n−1 edges"
      ]
    }
  ],
  "revision": {
    "must": [
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
    "ifTime": [
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
    "mcq": [
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
  "tips": [
    {
      "title": "Start with the three that never miss",
      "text": "Kruskal's MST, the Euclidean algorithm and a logic derivation were in all 8 papers. If you can do these three cleanly you already hold about 24 marks."
    },
    {
      "title": "Part C is Warshall or a coding decode",
      "text": "Warshall's algorithm was a Part C choice in 7 of 8 papers and a coding-theory decode in 6 of 8. Show every matrix W₀ to W₅, and for decoding show the syndrome of each received word."
    },
    {
      "title": "Questions repeat with the same numbers",
      "text": "Practise 512m+320n=64, 154x+250y=2, gcd(12345, 54321), the 250-students problem, integers 1–250 not divisible by 2, 3, 5, 7, and the Rama premises. They came back several times."
    },
    {
      "title": "Practise the recurring graphs",
      "text": "The A–I weighted graph (Jul 2024, May 2025) and the A–F graph with edge weights 16, 21, 11 (Nov 2024, Jul 2025) have both been used twice for Kruskal's."
    },
    {
      "title": "Prove, then verify",
      "text": "For group and graph theorems write the statement, the proof and a quick check on a small example. For Kruskal, always list the edges in sorted order and cross out the ones that form a cycle."
    },
    {
      "title": "Cross-check with the student topic list",
      "text": "A student-made 'Maths Imp Topics' sheet on THE HELPER lists Hasse diagrams, equivalence relations, Warshall, pigeonhole, GCD, truth tables, induction, CP rule, groups, encoder/decoder, isomorphism and MST. It matches what these papers show."
    },
    {
      "title": "Pick one option per unit",
      "text": "Part B is five 8-mark questions, one per unit, each with an either/or choice. Prepare one confident option for every unit, and the more repeated one of the two first."
    }
  ],
  "helper": {
    "sem": 5,
    "name": "Discrete Mathematics",
    "used": [
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
