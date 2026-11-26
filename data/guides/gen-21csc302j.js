// Hand-built from the past papers (see tools/hand-built/). Shipped as a built-in guide.
window.SEMPREP = window.SEMPREP || { guides: {} };
window.SEMPREP.guides["gen-21csc302j"] = {
  "code": "21CSC302J",
  "name": "Computer Networks",
  "short": "CN",
  "tagline": "Year 3 · Semester 5 · SRMIST — B.Tech (2021 Regulation)",
  "summary": "Built from the 8 most recent previous-year papers on THE HELPER in the current format (Jan 2024 – May 2026). Every Part B and Part C question was read from the scanned papers and counted by topic, so the repeat counts are exact. Error detection (CRC), the OSI/TCP-IP models, routing algorithms, TCP vs UDP and addressing (CIDR, subnetting) carry most of the marks.",
  "papers": [
    "PYQ Jan 2024",
    "PYQ May 2024",
    "PYQ Jul 2024",
    "PYQ Nov 2024",
    "PYQ Jul 2025",
    "PYQ Jul 2025 (Paper - 2)",
    "PYQ Nov 2025",
    "PYQ May 2026"
  ],
  "totalMarks": 75,
  "basis": "papers",
  "generated": {
    "at": "2026-11-26T16:08:31.968Z",
    "model": "claude-sonnet-5-5 (papers read by hand)",
    "basis": "papers",
    "method": "counted",
    "unread": [],
    "excluded": [],
    "format": "Part B: 5 × 8 marks, each question with an OR choice"
  },
  "repeats": [
    {
      "id": "T1",
      "name": "Error detection: parity, VRC and CRC",
      "unit": 4,
      "papers": [
        "PYQ Jan 2024",
        "PYQ May 2024",
        "PYQ Jul 2024",
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
          "paper": "PYQ Jan 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "CRC: 3-bit CRC for M(x)=x⁵+x⁴+x with G(x)=x³+x²+1"
        },
        {
          "paper": "PYQ May 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Error detection strategies in the data link layer"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Error detection and correction mechanisms"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Vertical redundancy check (even parity) for data words 1101, 1010, 0111, 0001; final transmitted message"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "CRC remainder for M=1100101110 with divisor x⁴+x²+x+1; how the receiver checks for errors"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Working of CRC in error detection with an example"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "CRC with G(x)=x³+x+1 (1011) for data 1101011011: CRC bits; check received 1101011011101"
        }
      ]
    },
    {
      "id": "T2",
      "name": "OSI and TCP/IP reference models",
      "unit": 1,
      "papers": [
        "PYQ Jan 2024",
        "PYQ May 2024",
        "PYQ Jul 2024",
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
          "paper": "PYQ Jan 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Role of the network layer in the OSI model and its working"
        },
        {
          "paper": "PYQ Jan 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "TCP/IP model with a neat diagram"
        },
        {
          "paper": "PYQ May 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Layers of the TCP/IP suite and data flow between two hosts across the internet (figure)"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "ISO-OSI model with neat diagram"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Sketch the OSI layers, role of each layer, how layers interact"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Data flow through each ISO-OSI layer and the key function of every layer"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "OSI reference model: role of each layer; compare with the TCP/IP suite"
        }
      ]
    },
    {
      "id": "T3",
      "name": "Distance vector routing (Bellman-Ford, RIP, count to infinity)",
      "unit": 3,
      "papers": [
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ Nov 2024",
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
          "paper": "PYQ May 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Bellman-Ford convergence table; count-to-infinity after link failure; split horizon with poison reverse"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Distance vector routing with an example"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Distance vector (RIP): routing loop after link failure R1–R2 (count to infinity); prevention mechanisms"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Distance vector (RIP) with routers A, B, C and new router D: routing table updates, routes to D, algorithm"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Advantages of link state over distance vector routing: scalability, convergence"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Distance vector routing: working principles with example and diagrams"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Distance vector routing with the Bellman-Ford algorithm; how routes are reconstructed, with examples"
        }
      ]
    },
    {
      "id": "T4",
      "name": "TCP vs UDP",
      "unit": 5,
      "papers": [
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ Nov 2024",
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
          "paper": "PYQ May 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Compare the working of TCP and UDP"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Notes on UDP"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Compare TCP and UDP"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Differentiate TCP and UDP"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Video call: protocol used (UDP/RTP), why better than TCP for real time, handling packet loss"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Transmission mechanism of UDP and TCP"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "TCP vs UDP: reliability, connection establishment, applications"
        }
      ]
    },
    {
      "id": "T5",
      "name": "Classless addressing (CIDR) and address blocks",
      "unit": 2,
      "papers": [
        "PYQ Jan 2024",
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jan 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "ISP block 190.100.0.0/16 for 3 customer groups (64×256, 128×128, 128×64): sub-blocks in slash notation, addresses left"
        },
        {
          "paper": "PYQ May 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "CIDR: number of addresses for 192.168.100.0/23 and /25"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Classful and classless subnetting with examples"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "First and last address of blocks 14.12.72.8/24 and 200.107.16.17/18"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Classless address 167.199.170.82/27: number of addresses, first and last address"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Classful vs classless IPv4 addressing; advantages of classless"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "How classless addressing (CIDR) improves address utilisation over classful; example of aggregating networks"
        }
      ]
    },
    {
      "id": "T6",
      "name": "TCP: segment format, handshake, transport functions",
      "unit": 5,
      "papers": [
        "PYQ Jan 2024",
        "PYQ Jul 2024",
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
          "paper": "PYQ Jan 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "TCP packet format and fields; data transfer with the handshake"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Functions of the transport layer with an example"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "TCP three-way handshake mechanism"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Transmission mechanism of UDP and TCP"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "TCP vs UDP: reliability, connection establishment, applications"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "TCP segment format and fields; data transfer with the handshake (connection setup and teardown)"
        }
      ]
    },
    {
      "id": "T7",
      "name": "DNS, HTTP and FTP",
      "unit": 5,
      "papers": [
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
          "paper": "PYQ May 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Application layer protocols: HTTP and DNS"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Types of DNS records"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Role of DNS in a network and its components"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Types of DNS records and their role in DNS resolution"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Role of DNS and how it gives users access to websites"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "HTTP and FTP: working principles and key features"
        }
      ]
    },
    {
      "id": "T8",
      "name": "Subnetting: FLSM and VLSM",
      "unit": 2,
      "papers": [
        "PYQ Jan 2024",
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ May 2026"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Jan 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Divide 200.1.2.0 into 4 subnets: subnet IPs, addresses, hosts, first/last host, direct and limited broadcast"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Classful and classless subnetting with examples"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Subnet 192.168.1.0/24 for 2×30 and 3×10 hosts; 5 subnets of 10.0.0.0/24 with 20 hosts each: mask and ranges"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "FLSM: 192.168.10.0 into exactly 4 subnets: new mask, hosts per subnet, table of network ID, first/last host, broadcast"
        },
        {
          "paper": "PYQ May 2026",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "VLSM of 10.50.16.0/22 for 250, 90, 40, 18, 8, 3 hosts: network ID, prefix, mask, host range, broadcast; static vs dynamic routing"
        }
      ]
    },
    {
      "id": "T9",
      "name": "Link state routing (Dijkstra, OSPF LSAs)",
      "unit": 3,
      "papers": [
        "PYQ Jan 2024",
        "PYQ May 2024",
        "PYQ Jul 2025",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Jan 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Link state routing with an example; relevance of the age field in a link state packet"
        },
        {
          "paper": "PYQ May 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Dijkstra shortest path tree and forwarding table for node A; advantages over distance vector"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Advantages of link state over distance vector routing: scalability, convergence"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Dijkstra's algorithm in link state routing with an example"
        },
        {
          "paper": "PYQ May 2026",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Dijkstra link-state: shortest path tree from router F, iteration table, final paths and costs"
        }
      ]
    },
    {
      "id": "T10",
      "name": "Network topologies",
      "unit": 1,
      "papers": [
        "PYQ Jan 2024",
        "PYQ Jul 2024",
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jan 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "What is topology; types of topologies with examples"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Types of network topologies"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Network topologies in detail with neat sketch"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Star vs mesh topology for a company: structure, advantages, disadvantages, recommend one"
        }
      ]
    },
    {
      "id": "T11",
      "name": "Routing protocols compared: RIP, OSPF, EIGRP, BGP",
      "unit": 3,
      "papers": [
        "PYQ Jan 2024",
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ Nov 2025"
      ],
      "marks": [
        8,
        15
      ],
      "questions": [
        {
          "paper": "PYQ Jan 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Routing using BGP"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "EIGRP protocol with diagrams"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "OSPF link state advertisements: point-to-point link; designated router advertising a network"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "RIP (v1 and v2) vs OSPF; why OSPF is preferred in large networks"
        }
      ]
    },
    {
      "id": "T12",
      "name": "Flow and error control: ARQ and sliding window",
      "unit": 4,
      "papers": [
        "PYQ Nov 2024",
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
          "paper": "PYQ Nov 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Go-Back-N and Selective Repeat sliding window ARQ: working and trade-offs"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "ARQ protocol for error control; how it ensures reliability; types of ARQ"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "ARQ protocols for error control and reliability; types of ARQ (Stop-and-Wait, Go-Back-N, Selective Repeat)"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Working of sliding window flow control; how it improves throughput"
        }
      ]
    },
    {
      "id": "T13",
      "name": "Random access: CSMA/CD and CSMA/CA",
      "unit": 4,
      "papers": [
        "PYQ Jan 2024",
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jan 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Collision avoidance in CSMA/CA and its strategies"
        },
        {
          "paper": "PYQ May 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "CSMA/CA collision-avoidance strategies"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Collision detection and resolution in CSMA/CD"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "How collisions are handled in CSMA/CD and prevented in CSMA/CA, with labelled diagram"
        }
      ]
    },
    {
      "id": "T14",
      "name": "Email: SMTP, POP3, IMAP, MIME",
      "unit": 5,
      "papers": [
        "PYQ Jan 2024",
        "PYQ Jul 2024",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jan 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Email format and mailing system architecture"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "IMAP and MIME with an example"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Email protocols SMTP, POP3, IMAP and their roles"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Email format and architecture of a mail delivery system with its protocols"
        }
      ]
    },
    {
      "id": "T15",
      "name": "Circuit switching vs packet switching",
      "unit": 1,
      "papers": [
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Why circuit switching needs end-to-end addressing at setup/teardown and packet switching during data transfer"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Circuit switching vs packet switching"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Differentiate packet switching and circuit switching: data transmission and resource allocation, with diagram"
        }
      ]
    },
    {
      "id": "T16",
      "name": "Transmission media (guided and unguided)",
      "unit": 1,
      "papers": [
        "PYQ Jul 2025",
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Twisted pair vs coaxial cable: construction, usage, performance"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Unguided (wireless) transmission media for rural internet: properties, performance, best choice"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Compare twisted pair, coaxial cable and optical fibre (data rate, distance, noise); best for high-speed long distance"
        }
      ]
    },
    {
      "id": "T17",
      "name": "Network devices: hub, switch, bridge, router",
      "unit": 1,
      "papers": [
        "PYQ May 2024",
        "PYQ Nov 2024",
        "PYQ Jul 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Switch filtering table vs router routing table"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Different network devices used in computer networks"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Network devices and their applications"
        }
      ]
    },
    {
      "id": "T18",
      "name": "IPv4 classes and binary / dotted-decimal notation",
      "unit": 2,
      "papers": [
        "PYQ Jul 2025 (Paper - 2)",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Convert binary IP addresses to dotted decimal; find class and default subnet mask"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Classful vs classless IPv4 addressing; advantages of classless"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Convert four IP addresses from binary to dotted-decimal and find the class of each"
        }
      ]
    },
    {
      "id": "T19",
      "name": "IPv6: address, packet format, transition",
      "unit": 3,
      "papers": [
        "PYQ Jul 2025",
        "PYQ Nov 2025",
        "PYQ May 2026"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Security features of IPv6 and how they improve on IPv4"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Differences between IPv4 and IPv6 addressing; why IPv6 is essential"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "IPv6 features, packet format and IPv4-to-IPv6 transition, with diagram"
        }
      ]
    },
    {
      "id": "T20",
      "name": "Hamming code",
      "unit": 4,
      "papers": [
        "PYQ May 2024",
        "PYQ Jul 2024",
        "PYQ Jul 2025 (Paper - 2)"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ May 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Error detection strategies in the data link layer"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Error detection and correction mechanisms"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Hamming code: check bits for a 16-bit message; transmitted pattern for 1101001100110101 (even parity)"
        }
      ]
    },
    {
      "id": "T21",
      "name": "Network Address Translation (NAT)",
      "unit": 2,
      "papers": [
        "PYQ Nov 2024",
        "PYQ Jul 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "NAT using a pool of IP addresses and using both IP and port addresses"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Network Address Translation (NAT): types and functions"
        }
      ]
    },
    {
      "id": "T22",
      "name": "IEEE 802.11 and 802.5 MAC",
      "unit": 4,
      "papers": [
        "PYQ Jan 2024",
        "PYQ Jul 2024"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jan 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Token management in IEEE 802.5"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "MAC sub-layer protocol and frame structure of IEEE 802.11"
        }
      ]
    },
    {
      "id": "T23",
      "name": "Network types: LAN, MAN, WAN, PAN",
      "unit": 1,
      "papers": [
        "PYQ Nov 2025"
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
          "text": "Compare LAN, MAN, WAN and PAN: coverage, usage, examples"
        }
      ]
    },
    {
      "id": "T24",
      "name": "Bandwidth, latency and delay",
      "unit": 1,
      "papers": [
        "PYQ Nov 2025"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Nov 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Define bandwidth and latency; components of delay in data communication"
        }
      ]
    },
    {
      "id": "T25",
      "name": "Forwarding: next-hop and route methods",
      "unit": 3,
      "papers": [
        "PYQ Jul 2025 (Paper - 2)"
      ],
      "marks": [
        8
      ],
      "questions": [
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Route method and next-hop forwarding: differences with diagram"
        }
      ]
    },
    {
      "id": "T26",
      "name": "Congestion control",
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
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Congestion control algorithms"
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
      "Introduction to Networks",
      "Addressing",
      "Routing",
      "Medium Access Control",
      "Transport and Application Layer Protocols"
    ],
    "source": "https://srmhelper.pro/subjects/computer-networks/",
    "key": "21CSC302J",
    "custom": false
  },
  "format": [
    {
      "part": "Part A",
      "marks": "20 × 1 = 20",
      "text": "20 MCQs on the OMR sheet in the first 40 minutes. Many repeat word for word: the Jan 2024 and Jul 2024 papers share almost the same 20, and May 2026 repeated several of Nov 2024's. Expect subnet arithmetic (hosts, masks, broadcast), port numbers, RIP/OSPF/BGP facts, CSMA, ARQ window sizes and protocol trivia."
    },
    {
      "part": "Part B",
      "marks": "5 × 8 = 40",
      "text": "Q21–Q25, each with an either/or choice, one question per unit (Q21 = Unit 1 … Q25 = Unit 5). Mostly theory with diagrams, plus one or two numericals: CRC, CIDR first/last address, subnetting, Hamming code."
    },
    {
      "part": "Part C",
      "marks": "1 × 15 = 15",
      "text": "Q26 or Q27, answer one. In 8 papers it was the OSI/TCP-IP model 4 times, a routing algorithm (Dijkstra, Bellman-Ford, RIP vs OSPF) in 4 papers, and subnetting/VLSM twice."
    }
  ],
  "callouts": [
    {
      "tone": "hot",
      "title": "Five topics carry the paper",
      "text": "CRC/error detection (7 of 8 papers), the OSI and TCP/IP models (6), distance vector routing (6), TCP vs UDP (6), and CIDR/subnetting (5 each). Prepare one full answer for each before anything else."
    },
    {
      "tone": "star",
      "title": "Part C is predictable",
      "text": "Every Part C choice in 8 papers was either a layer model (OSI/TCP-IP), a routing algorithm worked on a graph, or a subnetting/VLSM problem, with a few one-offs. Prepare the OSI model in full and one Dijkstra plus one Bellman-Ford table."
    }
  ],
  "top": [
    {
      "q": "CRC — append the remainder (modulo-2 division by the generator) and check a received word; parity and VRC",
      "seen": "Appeared in: PYQ Jan 2024, PYQ May 2024, PYQ Jul 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 7,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "CRC: 3-bit CRC for M(x)=x⁵+x⁴+x with G(x)=x³+x²+1"
        },
        {
          "paper": "PYQ May 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Error detection strategies in the data link layer"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Error detection and correction mechanisms"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Vertical redundancy check (even parity) for data words 1101, 1010, 0111, 0001; final transmitted message"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "CRC remainder for M=1100101110 with divisor x⁴+x²+x+1; how the receiver checks for errors"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Working of CRC in error detection with an example"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "CRC with G(x)=x³+x+1 (1011) for data 1101011011: CRC bits; check received 1101011011101"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 4
    },
    {
      "q": "OSI reference model (and TCP/IP) — role of every layer, data flow, comparison",
      "seen": "Appeared in: PYQ Jan 2024, PYQ May 2024, PYQ Jul 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
      "freq": 6,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Role of the network layer in the OSI model and its working"
        },
        {
          "paper": "PYQ Jan 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "TCP/IP model with a neat diagram"
        },
        {
          "paper": "PYQ May 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Layers of the TCP/IP suite and data flow between two hosts across the internet (figure)"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "ISO-OSI model with neat diagram"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Sketch the OSI layers, role of each layer, how layers interact"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Data flow through each ISO-OSI layer and the key function of every layer"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "OSI reference model: role of each layer; compare with the TCP/IP suite"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 1
    },
    {
      "q": "Distance vector routing — Bellman-Ford table, RIP, count-to-infinity, split horizon / poison reverse",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ May 2026",
      "freq": 6,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Bellman-Ford convergence table; count-to-infinity after link failure; split horizon with poison reverse"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Distance vector routing with an example"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Distance vector (RIP): routing loop after link failure R1–R2 (count to infinity); prevention mechanisms"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Distance vector (RIP) with routers A, B, C and new router D: routing table updates, routes to D, algorithm"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Advantages of link state over distance vector routing: scalability, convergence"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Distance vector routing: working principles with example and diagrams"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Distance vector routing with the Bellman-Ford algorithm; how routes are reconstructed, with examples"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 3
    },
    {
      "q": "TCP vs UDP — reliability, connection setup, header, applications (and why video calls use UDP)",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
      "freq": 6,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Compare the working of TCP and UDP"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Notes on UDP"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Compare TCP and UDP"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Differentiate TCP and UDP"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Video call: protocol used (UDP/RTP), why better than TCP for real time, handling packet loss"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Transmission mechanism of UDP and TCP"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "TCP vs UDP: reliability, connection establishment, applications"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 5
    },
    {
      "q": "Classless addressing (CIDR) — number of addresses, first and last address, ISP sub-blocks, aggregation",
      "seen": "Appeared in: PYQ Jan 2024, PYQ May 2024, PYQ Nov 2024, PYQ Nov 2025, PYQ May 2026",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "ISP block 190.100.0.0/16 for 3 customer groups (64×256, 128×128, 128×64): sub-blocks in slash notation, addresses left"
        },
        {
          "paper": "PYQ May 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "CIDR: number of addresses for 192.168.100.0/23 and /25"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Classful and classless subnetting with examples"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "First and last address of blocks 14.12.72.8/24 and 200.107.16.17/18"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Classless address 167.199.170.82/27: number of addresses, first and last address"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Classful vs classless IPv4 addressing; advantages of classless"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "How classless addressing (CIDR) improves address utilisation over classful; example of aggregating networks"
        }
      ],
      "importance": 5,
      "marks": "8",
      "unit": 2
    },
    {
      "q": "Subnetting — FLSM (4 equal subnets) and VLSM tables: network ID, mask, host range, broadcast",
      "seen": "Appeared in: PYQ Jan 2024, PYQ May 2024, PYQ Nov 2024, PYQ Jul 2025 (Paper - 2), PYQ May 2026",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Divide 200.1.2.0 into 4 subnets: subnet IPs, addresses, hosts, first/last host, direct and limited broadcast"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Classful and classless subnetting with examples"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Subnet 192.168.1.0/24 for 2×30 and 3×10 hosts; 5 subnets of 10.0.0.0/24 with 20 hosts each: mask and ranges"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "FLSM: 192.168.10.0 into exactly 4 subnets: new mask, hosts per subnet, table of network ID, first/last host, broadcast"
        },
        {
          "paper": "PYQ May 2026",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "VLSM of 10.50.16.0/22 for 250, 90, 40, 18, 8, 3 hosts: network ID, prefix, mask, host range, broadcast; static vs dynamic routing"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 2
    },
    {
      "q": "Link state routing — Dijkstra shortest path tree, LSAs, OSPF, advantages over distance vector",
      "seen": "Appeared in: PYQ Jan 2024, PYQ May 2024, PYQ Jul 2025, PYQ Nov 2025, PYQ May 2026",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Link state routing with an example; relevance of the age field in a link state packet"
        },
        {
          "paper": "PYQ May 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "Dijkstra shortest path tree and forwarding table for node A; advantages over distance vector"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Advantages of link state over distance vector routing: scalability, convergence"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "Dijkstra's algorithm in link state routing with an example"
        },
        {
          "paper": "PYQ May 2026",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Dijkstra link-state: shortest path tree from router F, iteration table, final paths and costs"
        }
      ],
      "importance": 5,
      "marks": "8–15",
      "unit": 3
    },
    {
      "q": "TCP segment format and connection setup / teardown (three-way handshake, four-way close)",
      "seen": "Appeared in: PYQ Jan 2024, PYQ Jul 2024, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "TCP packet format and fields; data transfer with the handshake"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Functions of the transport layer with an example"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "26",
          "part": "C",
          "marks": 15,
          "text": "TCP three-way handshake mechanism"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Transmission mechanism of UDP and TCP"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "TCP vs UDP: reliability, connection establishment, applications"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "TCP segment format and fields; data transfer with the handshake (connection setup and teardown)"
        }
      ],
      "importance": 4,
      "marks": "8–15",
      "unit": 5
    },
    {
      "q": "DNS (role, records, resolution), HTTP and FTP",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2)",
      "freq": 5,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Application layer protocols: HTTP and DNS"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Types of DNS records"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "Role of DNS in a network and its components"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Types of DNS records and their role in DNS resolution"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Role of DNS and how it gives users access to websites"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "HTTP and FTP: working principles and key features"
        }
      ],
      "importance": 4,
      "marks": "8–15",
      "unit": 5
    },
    {
      "q": "Network topologies — bus, star, ring, mesh, hybrid with sketches; star vs mesh",
      "seen": "Appeared in: PYQ Jan 2024, PYQ Jul 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2)",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "What is topology; types of topologies with examples"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Types of network topologies"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Network topologies in detail with neat sketch"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Star vs mesh topology for a company: structure, advantages, disadvantages, recommend one"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "CSMA/CD collision detection and CSMA/CA collision avoidance (IFS, contention window, ACK, RTS/CTS)",
      "seen": "Appeared in: PYQ Jan 2024, PYQ May 2024, PYQ Nov 2024, PYQ May 2026",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Collision avoidance in CSMA/CA and its strategies"
        },
        {
          "paper": "PYQ May 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "CSMA/CA collision-avoidance strategies"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Collision detection and resolution in CSMA/CD"
        },
        {
          "paper": "PYQ May 2026",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "How collisions are handled in CSMA/CD and prevented in CSMA/CA, with labelled diagram"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 4
    },
    {
      "q": "ARQ and sliding window — Stop-and-Wait, Go-Back-N, Selective Repeat and their trade-offs",
      "seen": "Appeared in: PYQ Nov 2024, PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ Nov 2025",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Nov 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Go-Back-N and Selective Repeat sliding window ARQ: working and trade-offs"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "ARQ protocol for error control; how it ensures reliability; types of ARQ"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "ARQ protocols for error control and reliability; types of ARQ (Stop-and-Wait, Go-Back-N, Selective Repeat)"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Working of sliding window flow control; how it improves throughput"
        }
      ],
      "importance": 4,
      "marks": "8–15",
      "unit": 4
    },
    {
      "q": "Email — message format, mail architecture, SMTP, POP3, IMAP, MIME",
      "seen": "Appeared in: PYQ Jan 2024, PYQ Jul 2024, PYQ Nov 2025, PYQ May 2026",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "25a",
          "part": "B",
          "marks": 8,
          "text": "Email format and mailing system architecture"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "IMAP and MIME with an example"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Email protocols SMTP, POP3, IMAP and their roles"
        },
        {
          "paper": "PYQ May 2026",
          "number": "25b",
          "part": "B",
          "marks": 8,
          "text": "Email format and architecture of a mail delivery system with its protocols"
        }
      ],
      "importance": 4,
      "marks": "8",
      "unit": 5
    },
    {
      "q": "Routing protocols compared — RIP v1/v2 vs OSPF, EIGRP, BGP",
      "seen": "Appeared in: PYQ Jan 2024, PYQ May 2024, PYQ Nov 2024, PYQ Nov 2025",
      "freq": 4,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jan 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Routing using BGP"
        },
        {
          "paper": "PYQ May 2024",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "EIGRP protocol with diagrams"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "23a",
          "part": "B",
          "marks": 8,
          "text": "OSPF link state advertisements: point-to-point link; designated router advertising a network"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "27",
          "part": "C",
          "marks": 15,
          "text": "RIP (v1 and v2) vs OSPF; why OSPF is preferred in large networks"
        }
      ],
      "importance": 3,
      "marks": "8–15",
      "unit": 3
    },
    {
      "q": "Circuit switching vs packet switching",
      "seen": "Appeared in: PYQ May 2024, PYQ Nov 2024, PYQ May 2026",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Why circuit switching needs end-to-end addressing at setup/teardown and packet switching during data transfer"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Circuit switching vs packet switching"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21a",
          "part": "B",
          "marks": 8,
          "text": "Differentiate packet switching and circuit switching: data transmission and resource allocation, with diagram"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "Transmission media — twisted pair, coaxial, optical fibre, wireless",
      "seen": "Appeared in: PYQ Jul 2025, PYQ Jul 2025 (Paper - 2), PYQ May 2026",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jul 2025",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Twisted pair vs coaxial cable: construction, usage, performance"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Unguided (wireless) transmission media for rural internet: properties, performance, best choice"
        },
        {
          "paper": "PYQ May 2026",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Compare twisted pair, coaxial cable and optical fibre (data rate, distance, noise); best for high-speed long distance"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 1
    },
    {
      "q": "IPv6 — features, header format, IPv4 vs IPv6, transition (dual stack, tunnelling, translation)",
      "seen": "Appeared in: PYQ Jul 2025, PYQ Nov 2025, PYQ May 2026",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jul 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Security features of IPv6 and how they improve on IPv4"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "Differences between IPv4 and IPv6 addressing; why IPv6 is essential"
        },
        {
          "paper": "PYQ May 2026",
          "number": "23b",
          "part": "B",
          "marks": 8,
          "text": "IPv6 features, packet format and IPv4-to-IPv6 transition, with diagram"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 3
    },
    {
      "q": "Hamming code — number of check bits and the transmitted pattern",
      "seen": "Appeared in: PYQ May 2024, PYQ Jul 2024, PYQ Jul 2025 (Paper - 2)",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "24b",
          "part": "B",
          "marks": 8,
          "text": "Error detection strategies in the data link layer"
        },
        {
          "paper": "PYQ Jul 2024",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Error detection and correction mechanisms"
        },
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "24a",
          "part": "B",
          "marks": 8,
          "text": "Hamming code: check bits for a 16-bit message; transmitted pattern for 1101001100110101 (even parity)"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 4
    },
    {
      "q": "IPv4 classes and binary ↔ dotted-decimal conversion with class and default mask",
      "seen": "Appeared in: PYQ Jul 2025 (Paper - 2), PYQ Nov 2025, PYQ May 2026",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ Jul 2025 (Paper - 2)",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Convert binary IP addresses to dotted decimal; find class and default subnet mask"
        },
        {
          "paper": "PYQ Nov 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Classful vs classless IPv4 addressing; advantages of classless"
        },
        {
          "paper": "PYQ May 2026",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Convert four IP addresses from binary to dotted-decimal and find the class of each"
        }
      ],
      "importance": 3,
      "marks": "8",
      "unit": 2
    },
    {
      "q": "Network devices (hub, switch, bridge, router, gateway) and NAT types",
      "seen": "Appeared in: PYQ May 2024, PYQ Nov 2024, PYQ Jul 2025",
      "freq": 3,
      "counted": true,
      "evidence": [
        {
          "paper": "PYQ May 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Switch filtering table vs router routing table"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "21b",
          "part": "B",
          "marks": 8,
          "text": "Different network devices used in computer networks"
        },
        {
          "paper": "PYQ Nov 2024",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "NAT using a pool of IP addresses and using both IP and port addresses"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22b",
          "part": "B",
          "marks": 8,
          "text": "Network devices and their applications"
        },
        {
          "paper": "PYQ Jul 2025",
          "number": "22a",
          "part": "B",
          "marks": 8,
          "text": "Network Address Translation (NAT): types and functions"
        }
      ],
      "importance": 2,
      "marks": "8",
      "unit": 2
    }
  ],
  "units": [
    {
      "n": 1,
      "title": "Introduction to Networks",
      "weight": "High",
      "topics": [
        {
          "t": "OSI model: Physical, Data Link, Network, Transport, Session, Presentation, Application; headers are added going down; TCP/IP has 4–5 layers (Application, Transport, Internet, Network access)",
          "tag": "6/8"
        },
        {
          "t": "Topologies: mesh needs n(n−1)/2 links; star uses a central hub/switch; ring passes a token; bus shares one cable",
          "tag": "4/8"
        },
        {
          "t": "Circuit switching reserves a path (FDM/TDM) before data; packet switching sends independent packets with addresses in each",
          "tag": "3/8"
        },
        {
          "t": "Media: twisted pair (cheap, noisy), coaxial (100 kHz–500 MHz), optical fibre (light, highest bandwidth, immune to EMI), wireless for rural links",
          "tag": "3/8"
        },
        {
          "t": "Devices: hub (physical, multiport repeater), bridge/switch (data link, MAC), router (network, IP), gateway (all layers), repeater regenerates signals",
          "tag": "3/8"
        },
        {
          "t": "LAN / MAN / WAN / PAN; bandwidth vs latency; delay = transmission + propagation + processing + queuing",
          "tag": "1/8"
        }
      ]
    },
    {
      "n": 2,
      "title": "Addressing",
      "weight": "Very High",
      "topics": [
        {
          "t": "CIDR: a /n block has 2^(32−n) addresses; first = address AND mask, last = first + size − 1; ISP sub-blocks in slash notation",
          "tag": "5/8"
        },
        {
          "t": "Subnetting: FLSM gives equal subnets; VLSM allocates the largest need first; usable hosts = 2^h − 2",
          "tag": "5/8"
        },
        {
          "t": "Classes: A 1–126 (/8), B 128–191 (/16), C 192–223 (/24), D multicast, E reserved; binary to dotted-decimal",
          "tag": "3/8"
        },
        {
          "t": "NAT: static (one-to-one), dynamic (pool), PAT/overload (IP + port); the router holds the translation table",
          "tag": "2/8"
        },
        {
          "t": "ARP maps IP → MAC; TTL limits a datagram's lifetime; broadcast = all host bits 1",
          "tag": "MCQ"
        }
      ]
    },
    {
      "n": 3,
      "title": "Routing",
      "weight": "Very High",
      "topics": [
        {
          "t": "Distance vector: Bellman-Ford D(x,y) = min over neighbours (c(x,v) + D(v,y)); neighbours only; RIP max 15 hops, 16 = unreachable; count-to-infinity fixed by split horizon and poison reverse",
          "tag": "6/8"
        },
        {
          "t": "Link state: flood LSAs, every router builds the full map, runs Dijkstra; OSPF; the age field removes old LSAs",
          "tag": "5/8"
        },
        {
          "t": "RIP vs OSPF vs EIGRP (Cisco, bandwidth + delay) vs BGP (path vector, AS_PATH, exterior)",
          "tag": "4/8"
        },
        {
          "t": "IPv6: 128-bit, ::1 loopback, :: compression, no NAT needed, unicast/multicast/anycast, IPsec built in",
          "tag": "3/8"
        },
        {
          "t": "Forwarding: next-hop vs route method; default route used when nothing else matches",
          "tag": "1/8"
        },
        {
          "t": "Congestion control: leaky bucket, token bucket (time = C / (M − R))",
          "tag": "1/8"
        }
      ]
    },
    {
      "n": 4,
      "title": "Medium Access Control",
      "weight": "Very High",
      "topics": [
        {
          "t": "CRC: append r zeros, divide by the (r+1)-bit generator using XOR, append the remainder; receiver remainder 0 = no error",
          "tag": "7/8"
        },
        {
          "t": "CSMA/CD: sense, transmit, detect collision, send jam, exponential backoff; CSMA/CA: IFS, contention window, ACK, RTS/CTS (hidden terminal)",
          "tag": "4/8"
        },
        {
          "t": "ARQ: Stop-and-Wait (window 1), Go-Back-N (≤ 2^m − 1), Selective Repeat (≤ 2^(m−1)); sliding window allows several frames before an ACK",
          "tag": "4/8"
        },
        {
          "t": "Hamming code: r check bits with 2^r ≥ m + r + 1 (16-bit data → 5); corrects single-bit errors only",
          "tag": "3/8"
        },
        {
          "t": "IEEE 802.11 MAC (DCF, PCF, frame), 802.5 token ring; HDLC is bit-oriented with flag 01111110; Ethernet minimum frame 512 bits",
          "tag": "2/8"
        }
      ]
    },
    {
      "n": 5,
      "title": "Transport and Application Layer Protocols",
      "weight": "Very High",
      "topics": [
        {
          "t": "TCP vs UDP: TCP connection-oriented, reliable, ordered, flow and congestion control; UDP connectionless, fast, used for DNS, VoIP, video (RTP)",
          "tag": "6/8"
        },
        {
          "t": "TCP segment: ports, sequence and ACK numbers, header length, flags (SYN, ACK, FIN, RST, PSH, URG), window, checksum; SYN → SYN+ACK → ACK",
          "tag": "5/8"
        },
        {
          "t": "DNS: hierarchy (root, TLD, authoritative), records A, AAAA, CNAME, MX, NS, PTR, SOA; HTTP methods and status codes; FTP control 21 / data 20",
          "tag": "5/8"
        },
        {
          "t": "Email: user agent, MTA, mailbox; SMTP sends (25), POP3 (110) and IMAP (143) retrieve; MIME carries non-ASCII content",
          "tag": "4/8"
        },
        {
          "t": "Ports: FTP 20/21, SSH 22, Telnet 23 (TCP), SMTP 25, DNS 53, HTTP 80, POP3 110, IMAP 143, HTTPS 443; well-known ports are 0–1023",
          "tag": "MCQ"
        }
      ]
    }
  ],
  "eight": {
    "title": "Most Repeated 8-Mark Questions (Part B)",
    "strategy": "Part B is Q21–Q25, one question per unit with an either/or choice. Most are theory with a diagram; keep one numerical (CRC, CIDR, subnetting) ready for Q22 and Q24 because they come back with new numbers.",
    "groups": [
      {
        "q": "Q21",
        "unit": 1,
        "items": [
          "Types of network topologies with sketches; star vs mesh for a company (Jan 2024, Jul 2024, Jul 2025, Jul 2025 Paper 2)",
          "Circuit switching vs packet switching, with diagram (May 2024, Nov 2024, May 2026)",
          "Compare twisted pair, coaxial and optical fibre; wireless media for rural internet (Jul 2025, Jul 2025 Paper 2, May 2026)",
          "OSI model with a neat diagram; role of the network layer (Jan 2024, Jul 2024)",
          "Network devices and their uses (Nov 2024); LAN/MAN/WAN/PAN and delay components (Nov 2025)"
        ]
      },
      {
        "q": "Q22",
        "unit": 2,
        "items": [
          "CIDR block: number of addresses, first and last address (167.199.170.82/27 → 32 addresses, .64 to .95; 14.12.72.8/24; 200.107.16.17/18) (Nov 2024, Nov 2025)",
          "Subnetting: divide a network into 4 subnets with subnet IP, hosts, first/last host and broadcast (Jan 2024, Jul 2025 Paper 2)",
          "ISP sub-blocks from 190.100.0.0/16 for three customer groups (Jan 2024); /23 and /25 address counts (May 2024)",
          "Binary to dotted-decimal with class and default mask (Jul 2025 Paper 2, May 2026); classful vs classless and CIDR aggregation (Nov 2025, May 2026)",
          "NAT types and functions (Nov 2024, Jul 2025); switch filtering table vs router routing table (May 2024)"
        ]
      },
      {
        "q": "Q23",
        "unit": 3,
        "items": [
          "Distance vector routing with Bellman-Ford, with example; routing loops after a link failure and how they are prevented (Jul 2024, Nov 2024, Jul 2025 Paper 2, May 2026)",
          "Link state routing with Dijkstra; age field; OSPF LSAs; link state vs distance vector (Jan 2024, Nov 2024, Jul 2025, Nov 2025)",
          "IPv6 features, header and transition; IPv4 vs IPv6; IPv6 security (Jul 2025, Nov 2025, May 2026)",
          "BGP routing (Jan 2024), EIGRP (May 2024), congestion control algorithms (Jul 2024), next-hop forwarding (Jul 2025 Paper 2)"
        ]
      },
      {
        "q": "Q24",
        "unit": 4,
        "items": [
          "CRC: compute the check bits and verify a received word (May 2026: data 1101011011, G = 1011 → CRC 100; received 1101011011101 leaves remainder 001, so an error occurred) (Nov 2025, Jul 2025 Paper 2, May 2026)",
          "CSMA/CD collision handling and CSMA/CA avoidance with diagrams (Jan 2024, May 2024, Nov 2024, May 2026)",
          "ARQ for error control; Go-Back-N vs Selective Repeat; sliding window flow control (Nov 2024, Jul 2025, Nov 2025)",
          "Error detection and correction mechanisms; VRC for 1101, 1010, 0111, 0001; Hamming check bits for a 16-bit message (May 2024, Jul 2024, Jul 2025, Jul 2025 Paper 2)",
          "IEEE 802.11 MAC and frame (Jul 2024); token management in IEEE 802.5 (Jan 2024)"
        ]
      },
      {
        "q": "Q25",
        "unit": 5,
        "items": [
          "TCP vs UDP: reliability, connection setup, applications (May 2024, Nov 2024, Jul 2025, Jul 2025 Paper 2, Nov 2025)",
          "TCP segment format and data transfer with the handshake (Jan 2024, May 2026)",
          "Email format and mail system architecture; SMTP, POP3, IMAP; IMAP and MIME (Jan 2024, Jul 2024, Nov 2025, May 2026)",
          "DNS records and their role; how DNS lets users reach websites; HTTP and FTP (May 2024, Jul 2024, Nov 2024, Jul 2025, Jul 2025 Paper 2)"
        ]
      }
    ],
    "tip": "For every theory answer draw the diagram first (layer stack, frame or segment format, topology, timeline). For CRC, show the long division line by line; for CIDR and subnetting, write the block size before any addresses."
  },
  "fifteen": {
    "title": "Most Repeated 15-Mark Questions (Part C)",
    "note": "Q26 or Q27, answer one. Each paper has offered either a layer model, a routing algorithm on a graph, or a subnetting problem, so you will always have one of these.",
    "items": [
      {
        "q": "OSI reference model: role of every layer, how data flows down and up, and comparison with TCP/IP",
        "seen": "Jan 2024 (TCP/IP), Jul 2025, Jul 2025 Paper 2, Nov 2025 (4 of 8)",
        "level": "Hot"
      },
      {
        "q": "Routing algorithm on a graph: Dijkstra shortest path tree and forwarding table, or Bellman-Ford tables with count-to-infinity and split horizon",
        "seen": "May 2024 (both options), Nov 2024, Nov 2025 (RIP vs OSPF), May 2026 (4 of 8)",
        "level": "Hot"
      },
      {
        "q": "Subnetting / VLSM: e.g. 10.50.16.0/22 for 250, 90, 40, 18, 8, 3 hosts → /24, /25, /26, /27, /28, /29 from 10.50.16.0 upward",
        "seen": "Nov 2024, May 2026",
        "level": "High"
      },
      {
        "q": "CRC code generation: M(x) = x⁵+x⁴+x, G(x) = x³+x²+1 → append 100",
        "seen": "Jan 2024 Q27",
        "level": "Watch"
      },
      {
        "q": "TCP three-way handshake; why a video call uses UDP/RTP instead of TCP",
        "seen": "Jul 2024 Q26, Jul 2025 Q27",
        "level": "Watch"
      },
      {
        "q": "ARQ types for reliable transmission; role of DNS and its components",
        "seen": "Jul 2025 Paper 2 Q27, Jul 2024 Q27",
        "level": "Watch"
      }
    ]
  },
  "predict": {
    "note": "Based on topic rotation across your 8 paper(s).",
    "rows": [
      [
        "CRC calculation and check",
        4,
        "8",
        90,
        "7 of 8 papers; in each of the last two"
      ],
      [
        "OSI / TCP-IP model (Part C)",
        1,
        "15",
        85,
        "6 of 8 papers; Part C in 3 of the last 4"
      ],
      [
        "TCP vs UDP",
        5,
        "8",
        85,
        "6 of 8 papers"
      ],
      [
        "Distance vector routing / Bellman-Ford",
        3,
        "8–15",
        80,
        "6 of 8 papers, including May 2026"
      ],
      [
        "Dijkstra / link state routing",
        3,
        "8–15",
        75,
        "5 of 8 papers; Part C in May 2024 and May 2026"
      ],
      [
        "CIDR first and last address / block size",
        2,
        "8",
        75,
        "5 of 8 papers"
      ],
      [
        "Subnetting with a table (FLSM/VLSM)",
        2,
        "8–15",
        70,
        "5 of 8 papers; Part C in Nov 2024 and May 2026"
      ],
      [
        "CSMA/CD and CSMA/CA",
        4,
        "8",
        65,
        "4 of 8 papers; back in May 2026"
      ],
      [
        "TCP segment format and handshake",
        5,
        "8",
        65,
        "5 of 8 papers"
      ],
      [
        "Email architecture and protocols",
        5,
        "8",
        60,
        "4 of 8 papers; in the last two"
      ],
      [
        "Network topologies",
        1,
        "8",
        55,
        "4 of 8 papers; not in the last two"
      ],
      [
        "DNS records, HTTP and FTP",
        5,
        "8",
        55,
        "5 of 8 papers"
      ],
      [
        "ARQ: Go-Back-N vs Selective Repeat",
        4,
        "8",
        55,
        "4 of 8 papers"
      ],
      [
        "IPv6 features and IPv4 vs IPv6",
        3,
        "8",
        50,
        "3 of 8 papers: Jul 2025, Nov 2025, May 2026"
      ],
      [
        "Circuit vs packet switching",
        1,
        "8",
        45,
        "3 of 8 papers; May 2026"
      ],
      [
        "Hamming code",
        4,
        "8",
        35,
        "3 of 8 papers"
      ]
    ],
    "callouts": []
  },
  "formulas": [
    {
      "title": "Addressing and subnetting",
      "lines": [
        "Block of /n has 2^(32−n) addresses; usable hosts = 2^(32−n) − 2",
        "Block size in the interesting octet = 256 − mask octet (.192 → 64, .224 → 32, .240 → 16)",
        "First (network) = address AND mask;  last (broadcast) = first + block − 1",
        "Borrow s bits for 2^s subnets: 12 subnets → 4 bits → /28 (255.255.255.240)",
        "VLSM: sort needs largest first; each need h → smallest 2^k ≥ h + 2",
        "Classes: A 1–126, B 128–191, C 192–223, D 224–239, E 240–255;  127 = loopback"
      ]
    },
    {
      "title": "CRC and parity",
      "lines": [
        "Generator of degree r → append r zeros to the data",
        "Divide with XOR (modulo-2); the r-bit remainder is the CRC",
        "Codeword = data + CRC;  receiver divides again: remainder 0 → no error",
        "G(x) with (x+1) as a factor detects all odd numbers of bit errors",
        "Even parity: parity bit makes the count of 1s even;  VRC = parity per data unit"
      ]
    },
    {
      "title": "Hamming code and distance",
      "lines": [
        "Check bits r: smallest r with 2^r ≥ m + r + 1  (m = 16 → r = 5, m = 7 → r = 4)",
        "Parity bits sit at positions 1, 2, 4, 8, 16 …",
        "Hamming distance = number of differing bits;  d_min detects d−1, corrects ⌊(d−1)/2⌋",
        "Hamming code corrects single-bit errors only"
      ]
    },
    {
      "title": "Flow control and MAC",
      "lines": [
        "Stop-and-Wait window = 1;  Go-Back-N ≤ 2^m − 1;  Selective Repeat ≤ 2^(m−1)",
        "Stop-and-Wait efficiency = 1 / (1 + 2a),  a = propagation time / transmission time",
        "Token bucket: max burst time = C / (M − R)  (16 Mb, 10 Mbps, 2 Mbps → 2 s)",
        "1-bit length = propagation speed / bit rate  (200 m/µs ÷ 10^7 bps = 20 m)",
        "Ethernet minimum frame 64 bytes = 512 bits;  HDLC flag 01111110"
      ]
    },
    {
      "title": "Routing",
      "lines": [
        "Bellman-Ford: D_x(y) = min_v { c(x,v) + D_v(y) }",
        "Dijkstra: pick the closest unvisited node, relax its neighbours, repeat",
        "RIP: hop count, max 15 (16 = infinity), updates every 30 s",
        "OSPF: link state, cost = reference bandwidth / bandwidth;  EIGRP: bandwidth + delay by default",
        "BGP: path vector, chooses by AS_PATH;  mesh links = n(n−1)/2"
      ]
    },
    {
      "title": "Transport and application",
      "lines": [
        "TCP handshake: SYN → SYN+ACK → ACK;  close: FIN → ACK, FIN → ACK",
        "TCP header 20–60 bytes;  UDP header 8 bytes",
        "Ports: FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, HTTP 80, POP3 110, IMAP 143, HTTPS 443",
        "HTTP: GET fetches, HEAD fetches headers only, POST submits;  200 OK, 301 moved, 404 not found, 500 server error"
      ]
    }
  ],
  "revision": {
    "must": [
      "CRC long division and the receiver check",
      "OSI layers with one job each, plus the TCP/IP mapping",
      "Bellman-Ford table and count-to-infinity with split horizon",
      "Dijkstra table for a 6-node graph",
      "TCP vs UDP comparison table",
      "CIDR first/last address and number of addresses",
      "FLSM and VLSM tables (network, mask, hosts, broadcast)",
      "TCP header fields and the handshake",
      "CSMA/CD flow chart and CSMA/CA steps",
      "Email architecture with SMTP, POP3, IMAP"
    ],
    "ifTime": [
      "Topologies with sketches and star vs mesh",
      "Circuit vs packet switching",
      "Guided vs unguided media comparison",
      "Go-Back-N vs Selective Repeat",
      "Hamming code for a 16-bit message",
      "IPv6 header and transition methods",
      "DNS records and resolution",
      "NAT types",
      "RIP vs OSPF vs BGP"
    ],
    "mcq": [
      "12 devices in a full mesh need 66 links",
      "/26 → 62 usable hosts; /25 → 126; mask .240 → 14 hosts",
      "RIP max hop count 15; BGP is path vector and uses AS_PATH",
      "Distance vector talks to neighbours only; link state floods LSAs",
      "CSMA/CA avoids collisions; RTS/CTS solves the hidden terminal problem",
      "Selective Repeat window ≤ 2^(n−1); Stop-and-Wait has one frame in transit",
      "Telnet uses TCP port 23; SMTP 25; DNS resolves names to IP addresses",
      "ARP finds the MAC address for an IP address",
      "IPv6 is 128 bits; loopback ::1",
      "Presentation layer does encryption; transport layer does process-to-process delivery"
    ]
  },
  "tips": [
    {
      "title": "Start with the big five",
      "text": "CRC, the OSI/TCP-IP model, distance vector routing, TCP vs UDP and CIDR/subnetting together appear in almost every paper and cover both Part C options most years."
    },
    {
      "title": "MCQs repeat word for word",
      "text": "Jan 2024 and Jul 2024 share nearly the same 20 MCQs, and May 2026 repeated several of Nov 2024's. Do the MCQ quiz on the last two papers, then the repeating topics."
    },
    {
      "title": "Show the arithmetic",
      "text": "For CRC, write every XOR line. For CIDR, state the block size and the mask, then the first and last address. Marks are given for steps, not just the answer."
    },
    {
      "title": "Draw before you write",
      "text": "Layer diagrams, TCP segment format, CSMA/CD flow chart, topologies and mail architecture each earn marks on their own. Put the diagram first."
    },
    {
      "title": "Pick Part C by confidence",
      "text": "If you can draw the OSI model and explain each layer in two lines, that is the safer Part C. If a graph is given, Dijkstra and Bellman-Ford tables are mechanical and score fully when every iteration is shown."
    },
    {
      "title": "Budget your time",
      "text": "Part A ends at 40 minutes. Then about 18 minutes per Part B question and 35 minutes for Part C."
    },
    {
      "title": "Cross-check with the topic list",
      "text": "THE HELPER also has a 'CN Important Topics' sheet and a pattern analysis. The topics here match what the 8 papers actually asked."
    }
  ],
  "helper": {
    "sem": 5,
    "name": "Computer Networks",
    "used": [
      "PYQ Jan 2024",
      "PYQ May 2024",
      "PYQ Jul 2024",
      "PYQ Nov 2024",
      "PYQ Jul 2025",
      "PYQ Jul 2025 (Paper - 2)",
      "PYQ Nov 2025",
      "PYQ May 2026"
    ]
  },
  "mcq": {
    "papers": [
      "PYQ Jan 2024",
      "PYQ May 2024",
      "PYQ Jul 2024",
      "PYQ Nov 2024",
      "PYQ Jul 2025",
      "PYQ Jul 2025 (Paper - 2)",
      "PYQ Nov 2025",
      "PYQ May 2026"
    ],
    "units": [
      "Introduction to networks",
      "Addressing",
      "Routing",
      "Medium access control",
      "Transport and application"
    ],
    "questions": [
      {
        "p": 7,
        "n": 1,
        "q": "Network type typically used to connect devices within a home",
        "o": [
          "WAN",
          "LAN",
          "MAN",
          "PAN"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K16"
      },
      {
        "p": 7,
        "n": 2,
        "q": "OSI layer responsible for error detection and framing",
        "o": [
          "Transport",
          "Data Link",
          "Network",
          "Session"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K4"
      },
      {
        "p": 7,
        "n": 3,
        "q": "Links needed to connect 12 devices in a fully connected mesh",
        "o": [
          "144",
          "66",
          "72",
          "112"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K3"
      },
      {
        "p": 7,
        "n": 4,
        "q": "Guided medium with highest data rate and immune to EMI",
        "o": [
          "Twisted pair",
          "Coaxial cable",
          "Microwave link",
          "Fiber optic cable"
        ],
        "a": 3,
        "unit": 1,
        "fam": "K6"
      },
      {
        "p": 7,
        "n": 5,
        "q": "192.168.1.0/24 divided into 4 equal subnets: subnet mask",
        "o": [
          "255.255.255.192",
          "255.255.255.128",
          "255.255.255.224",
          "255.255.255.240"
        ],
        "a": 0,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 7,
        "n": 6,
        "q": "Errors in i) 11.56.045.78 ii) 221.34.7.8.20 iii) 75.45.256.14 iv) 10.23.14.01",
        "o": [
          "Only i, ii, iii",
          "Only ii, iii, iv",
          "All 4 have errors",
          "All 4 correct"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K2"
      },
      {
        "p": 7,
        "n": 7,
        "q": "Router maps one private IP to one public IP without changing port numbers: NAT type",
        "o": [
          "Dynamic NAT",
          "Static NAT",
          "PAT",
          "NAT overload"
        ],
        "a": 1,
        "unit": 5
      },
      {
        "p": 7,
        "n": 8,
        "q": "TRUE about networking devices",
        "o": [
          "Switch forwards on IP, router on MAC",
          "Hub performs collision detection and retransmits",
          "Router connects networks with different IP subnets and forwards using its routing table",
          "Bridge works at network layer with IP routing"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K16"
      },
      {
        "p": 7,
        "n": 9,
        "q": "Main characteristic of a path vector routing protocol (BGP)",
        "o": [
          "Shares entire link-state database",
          "Exchanges only the best path and the list of ASes traversed",
          "Uses hop count only",
          "Periodically floods updates to all neighbours"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 7,
        "n": 10,
        "q": "EIGRP composite metric uses by default",
        "o": [
          "Bandwidth and Delay",
          "Bandwidth, Delay, Load, Reliability",
          "Hop count and Delay",
          "Only hop count"
        ],
        "a": 0,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 7,
        "n": 11,
        "q": "RIP: maximum hop count allowed before a destination is unreachable",
        "o": [
          "10",
          "15",
          "16",
          "32"
        ],
        "a": 1,
        "unit": 3,
        "low": 1,
        "fam": "K5"
      },
      {
        "p": 7,
        "n": 12,
        "q": "Valid compressed IPv6 address",
        "o": [
          "2001:db8::1",
          "2001:0db8:0000:0000:0000:0000:0000:1",
          "2001:db8:0:0:0:0:0:1",
          "Both A and C"
        ],
        "a": 3,
        "unit": 3,
        "low": 1,
        "fam": "K18"
      },
      {
        "p": 7,
        "n": 13,
        "q": "Ethernet CSMA/CD: station action when a collision is detected",
        "o": [
          "Immediately retransmit",
          "Abort transmission and wait a random backoff time",
          "Stop permanently",
          "Send jam and shut down"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K10"
      },
      {
        "p": 7,
        "n": 14,
        "q": "TRUE about Sliding Window ARQ",
        "o": [
          "Receiver accepts only one frame at a time",
          "Sender can transmit multiple frames before waiting for ACK",
          "Cannot recover lost frames",
          "Less efficient than Stop-and-Wait"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 7,
        "n": 15,
        "q": "Purpose of the HDLC flag field 01111110",
        "o": [
          "Type of control frame",
          "Marks the beginning and end of a frame",
          "Error detection",
          "Next expected frame number"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K12"
      },
      {
        "p": 7,
        "n": 16,
        "q": "Dataword 1011 sent with even parity, receiver gets 1001",
        "o": [
          "Accepts (no error)",
          "Detects an error due to wrong parity bit",
          "Requests retransmission using CRC",
          "Corrects using Hamming code"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K13"
      },
      {
        "p": 7,
        "n": 17,
        "q": "Protocol commonly used with UDP for real-time applications",
        "o": [
          "HTTP",
          "FTP",
          "SMTP",
          "RTP"
        ],
        "a": 3,
        "unit": 5,
        "fam": "K8"
      },
      {
        "p": 7,
        "n": 18,
        "q": "Email sent with SMTP: protocol the recipient uses to retrieve it",
        "o": [
          "HTTP",
          "FTP",
          "POP3 or IMAP",
          "Telnet"
        ],
        "a": 2,
        "unit": 5,
        "fam": "K14"
      },
      {
        "p": 7,
        "n": 19,
        "q": "HTTP status code for a successful request",
        "o": [
          "200 OK",
          "404 Not Found",
          "500 Internal Server Error",
          "301 Moved Permanently"
        ],
        "a": 0,
        "unit": 5,
        "fam": "K9"
      },
      {
        "p": 7,
        "n": 20,
        "q": "Protocol Telnet uses for communication",
        "o": [
          "ICMP",
          "UDP",
          "TCP",
          "IP"
        ],
        "a": 2,
        "unit": 5,
        "fam": "K7"
      },
      {
        "p": 6,
        "n": 1,
        "q": "Topology with dedicated links between every pair of devices: robust but much cabling",
        "o": [
          "Star",
          "Bus",
          "Mesh",
          "Ring"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K16"
      },
      {
        "p": 6,
        "n": 2,
        "q": "Example of a Metropolitan Area Network",
        "o": [
          "Bluetooth connection",
          "Ethernet LAN",
          "Satellite Internet",
          "Cable TV network"
        ],
        "a": 3,
        "unit": 1,
        "fam": "K16"
      },
      {
        "p": 6,
        "n": 3,
        "q": "OSI layer responsible for process-to-process delivery",
        "o": [
          "Network",
          "Data Link",
          "Transport",
          "Session"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K4"
      },
      {
        "p": 6,
        "n": 4,
        "q": "Medium that uses light signals and gives the highest bandwidth",
        "o": [
          "Coaxial cable",
          "Fiber optic cable",
          "Radio waves",
          "Twisted pair"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K6"
      },
      {
        "p": 6,
        "n": 5,
        "q": "Broadcast address of network 192.168.1.0/24",
        "o": [
          "192.168.1.255",
          "192.168.1.0",
          "192.168.1.1",
          "192.168.0.255"
        ],
        "a": 0,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 6,
        "n": 6,
        "q": "Purpose of subnetting in IPv4",
        "o": [
          "Increase hosts per network",
          "Increase the number of networks",
          "Assign public IPs",
          "Replace MAC addresses"
        ],
        "a": 1,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 6,
        "n": 7,
        "q": "Usable hosts in a /26 network",
        "o": [
          "64",
          "32",
          "126",
          "62"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 6,
        "n": 8,
        "q": "Device that operates only at the physical layer",
        "o": [
          "Hub",
          "Switch",
          "Router",
          "Modem"
        ],
        "a": 0,
        "unit": 1,
        "fam": "K16"
      },
      {
        "p": 6,
        "n": 9,
        "q": "Distance Vector Routing uses which algorithm",
        "o": [
          "Dijkstra",
          "Bellman-Ford",
          "A*",
          "Floyd-Warshall"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 6,
        "n": 10,
        "q": "Protocol that uses Path Vector Routing",
        "o": [
          "RIP",
          "OSPF",
          "BGP",
          "EIGRP"
        ],
        "a": 2,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 6,
        "n": 11,
        "q": "RIP v2 supports",
        "o": [
          "Only hop count of 15",
          "AS path",
          "Multicast address 224.0.0.1",
          "Subnet information"
        ],
        "a": 3,
        "unit": 5,
        "fam": "K5"
      },
      {
        "p": 6,
        "n": 12,
        "q": "TRUE about IPv6",
        "o": [
          "Uses 32-bit addresses",
          "NAT is required",
          "Supports unicast, multicast and anycast",
          "Cannot coexist with IPv4"
        ],
        "a": 2,
        "unit": 3,
        "fam": "K18"
      },
      {
        "p": 6,
        "n": 13,
        "q": "CSMA works on which basic principle",
        "o": [
          "Transmit before sense",
          "Sense before transmit",
          "Random retransmission only",
          "Collision detection after transmission"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K10"
      },
      {
        "p": 6,
        "n": 14,
        "q": "HDLC is a",
        "o": [
          "Bit-oriented protocol",
          "Connectionless protocol",
          "Character-oriented protocol",
          "Wireless protocol"
        ],
        "a": 0,
        "unit": 4,
        "fam": "K12"
      },
      {
        "p": 6,
        "n": 15,
        "q": "Minimum frame size in standard Ethernet",
        "o": [
          "368 bits",
          "1024 bits",
          "512 bits",
          "256 bits"
        ],
        "a": 2,
        "unit": 4
      },
      {
        "p": 6,
        "n": 16,
        "q": "CRC is based on",
        "o": [
          "Decimal subtraction",
          "Logical OR",
          "Modulo-2 binary division",
          "Simple parity addition"
        ],
        "a": 2,
        "unit": 4,
        "fam": "K13"
      },
      {
        "p": 6,
        "n": 17,
        "q": "Connectionless transport layer protocol",
        "o": [
          "TCP",
          "UDP",
          "FTP",
          "HTTP"
        ],
        "a": 1,
        "unit": 5,
        "fam": "K8"
      },
      {
        "p": 6,
        "n": 18,
        "q": "Resolves hostnames to IP addresses",
        "o": [
          "HTTP",
          "SMTP",
          "FTP",
          "DNS"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K14"
      },
      {
        "p": 6,
        "n": 19,
        "q": "Telnet is used for",
        "o": [
          "File transfer",
          "Email",
          "Remote login",
          "Web browsing"
        ],
        "a": 2,
        "unit": 5,
        "fam": "K7"
      },
      {
        "p": 6,
        "n": 20,
        "q": "Port number 25 is reserved for",
        "o": [
          "FTP",
          "HTTP",
          "DNS",
          "SMTP"
        ],
        "a": 3,
        "unit": 5,
        "fam": "K7"
      },
      {
        "p": 5,
        "n": 1,
        "q": "Small shop networking 4 computers with a shared printer: best network",
        "o": [
          "WAN",
          "MAN",
          "PAN",
          "LAN"
        ],
        "a": 3,
        "unit": 1,
        "fam": "K16"
      },
      {
        "p": 5,
        "n": 2,
        "q": "Total time for a message to reach its destination (transmission, propagation, processing, queuing delays)",
        "o": [
          "Throughput",
          "Latency",
          "Bandwidth",
          "Data rate"
        ],
        "a": 1,
        "unit": 1
      },
      {
        "p": 5,
        "n": 3,
        "q": "Medium most suitable where there is high electrical interference",
        "o": [
          "UTP",
          "Coaxial cable",
          "Fiber optic cable",
          "STP"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K6"
      },
      {
        "p": 5,
        "n": 4,
        "q": "Technology commonly used in circuit-switched networks for efficient bandwidth allocation",
        "o": [
          "Packet switching",
          "Message switching",
          "FDM",
          "TDM"
        ],
        "a": 3,
        "unit": 1,
        "low": 1,
        "fam": "K17"
      },
      {
        "p": 5,
        "n": 5,
        "q": "172.16.0.0 with mask 255.255.255.240: usable hosts per subnet",
        "o": [
          "16",
          "14",
          "30",
          "62"
        ],
        "a": 1,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 5,
        "n": 6,
        "q": "Bits for Network ID and Host ID in a Class B address",
        "o": [
          "16 and 16",
          "24 and 8",
          "8 and 24",
          "10 and 22"
        ],
        "a": 0,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 5,
        "n": 7,
        "q": "192.168.10.0/25: usable hosts per subnet",
        "o": [
          "62",
          "14",
          "30",
          "126"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 5,
        "n": 8,
        "q": "Device that regenerates and amplifies signals to extend distance",
        "o": [
          "Switch",
          "Router",
          "Repeater",
          "Gateway"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K16"
      },
      {
        "p": 5,
        "n": 9,
        "q": "Primary purpose of a default route",
        "o": [
          "Route packets to all networks",
          "Used when no specific route is found in the routing table",
          "Block unknown traffic",
          "Segment packets"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 5,
        "n": 10,
        "q": "Routing protocol known for fast convergence and Cisco proprietary",
        "o": [
          "EIGRP",
          "OSPF",
          "RIP",
          "BGP"
        ],
        "a": 0,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 5,
        "n": 11,
        "q": "In Distance Vector Routing, routers exchange information with",
        "o": [
          "All routers",
          "Only destination routers",
          "Their directly connected neighbours",
          "A central server"
        ],
        "a": 2,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 5,
        "n": 12,
        "q": "Loopback address in IPv6",
        "o": [
          "127.0.0.1",
          "::1",
          "FE80::1",
          "255.255.255.0"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K18"
      },
      {
        "p": 5,
        "n": 13,
        "q": "Primary purpose of Hamming codes",
        "o": [
          "Detect and correct single-bit errors",
          "Detect and correct multiple-bit errors",
          "Increase speed",
          "Reduce bits"
        ],
        "a": 0,
        "unit": 4,
        "fam": "K13"
      },
      {
        "p": 5,
        "n": 14,
        "q": "Window size in Sliding Window ARQ determines",
        "o": [
          "Packet size",
          "Packets that can be received",
          "Number of packets that can be sent before receiving an acknowledgment",
          "Errors that can be corrected"
        ],
        "a": 2,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 5,
        "n": 15,
        "q": "Technique used in wireless networks to avoid the hidden terminal problem",
        "o": [
          "ALOHA",
          "RTS/CTS",
          "CSMA/CD",
          "TDMA"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K10"
      },
      {
        "p": 5,
        "n": 16,
        "q": "HDLC frame primarily used for transmitting user data",
        "o": [
          "Supervisory (S) frame",
          "Unnumbered (U) frame",
          "Control frame",
          "Information (I) frame"
        ],
        "a": 3,
        "unit": 4,
        "fam": "K12"
      },
      {
        "p": 5,
        "n": 17,
        "q": "Transport protocol for real-time applications like VoIP due to low overhead",
        "o": [
          "TCP",
          "UDP",
          "FTP",
          "HTTP"
        ],
        "a": 1,
        "unit": 5,
        "fam": "K8"
      },
      {
        "p": 5,
        "n": 18,
        "q": "Port number used by Telnet",
        "o": [
          "21",
          "22",
          "23",
          "25"
        ],
        "a": 2,
        "unit": 5,
        "fam": "K7"
      },
      {
        "p": 5,
        "n": 19,
        "q": "HTTP method to retrieve metadata without fetching the content",
        "o": [
          "TRACE",
          "HEAD",
          "CONNECT",
          "OPTIONS"
        ],
        "a": 1,
        "unit": 5,
        "fam": "K9"
      },
      {
        "p": 5,
        "n": 20,
        "q": "Purpose of a URL",
        "o": [
          "Create web applications",
          "Encrypt traffic",
          "Identify and locate a resource on the internet",
          "Store pages locally"
        ],
        "a": 2,
        "unit": 5,
        "fam": "K9"
      },
      {
        "p": 4,
        "n": 1,
        "q": "___ defines how long it takes for an entire message to arrive at the destination",
        "o": [
          "Packet loss",
          "Latency",
          "Throughput",
          "Bandwidth"
        ],
        "a": 1,
        "unit": 1
      },
      {
        "p": 4,
        "n": 2,
        "q": "Topology with each node connected to a central device, easy to add or remove nodes, high reliability",
        "o": [
          "Bus",
          "Mesh",
          "Star",
          "Ring"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K17"
      },
      {
        "p": 4,
        "n": 3,
        "q": "Technique used by a typical circuit switching protocol",
        "o": [
          "Datagram packets",
          "Virtual circuit",
          "FDM",
          "TDM"
        ],
        "a": 3,
        "unit": 1,
        "fam": "K17"
      },
      {
        "p": 4,
        "n": 4,
        "q": "As data moves from upper to lower layers, headers are",
        "o": [
          "Added",
          "Removed",
          "Rearranged",
          "Modified"
        ],
        "a": 0,
        "unit": 1,
        "fam": "K4"
      },
      {
        "p": 4,
        "n": 5,
        "q": "172.16.13.5 with mask 255.255.255.128: class, network address, broadcast",
        "o": [
          "Class A, 172.16.13.0, 172.16.13.127",
          "Class B, 172.16.13.0, 172.16.13.127",
          "Class B, 172.16.13.0, 172.16.13.255",
          "Class B, 172.16.0.0, 172.16.255.255"
        ],
        "a": 1,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 4,
        "n": 6,
        "q": "Possible addresses per network in a Class C network",
        "o": [
          "65536",
          "128",
          "256",
          "512"
        ],
        "a": 2,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 4,
        "n": 7,
        "q": "Broadcast address of 10.10.10.0 with mask 255.255.255.128",
        "o": [
          "10.10.10.127",
          "10.10.10.128",
          "10.10.10.254",
          "10.10.10.255"
        ],
        "a": 0,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 4,
        "n": 8,
        "q": "Possible unique addresses in IPv4",
        "o": [
          "About 4 million",
          "About 16 million",
          "About 8 billion",
          "About 4 billion"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 4,
        "n": 9,
        "q": "Example of an Exterior Gateway Protocol (EGP)",
        "o": [
          "OSPF",
          "IS-IS",
          "BGP",
          "RIPv1"
        ],
        "a": 2,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 4,
        "n": 10,
        "q": "Address length of IPv6",
        "o": [
          "16 bit",
          "32 bit",
          "64 bit",
          "128 bit"
        ],
        "a": 3,
        "unit": 3,
        "fam": "K18"
      },
      {
        "p": 4,
        "n": 11,
        "q": "Purpose of a default route in a router",
        "o": [
          "Directs traffic to all networks",
          "Used when no other route is found in the routing table",
          "Best route",
          "Updates the table automatically"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 4,
        "n": 12,
        "q": "Link-state routing: first step after detecting a topology change",
        "o": [
          "Updates its routing table",
          "Waits for other routers",
          "Recalculates with Bellman-Ford",
          "Floods a link-state advertisement (LSA) to all routers"
        ],
        "a": 3,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 4,
        "n": 13,
        "q": "Primary limitation of Hamming code",
        "o": [
          "Cannot correct errors",
          "Too much bandwidth",
          "Cannot detect double-bit errors",
          "Can only correct single-bit errors"
        ],
        "a": 3,
        "unit": 4,
        "low": 1,
        "fam": "K13"
      },
      {
        "p": 4,
        "n": 14,
        "q": "Odd parity bits for 1001011, 0001100, 1000000, 1110111",
        "o": [
          "1011",
          "0100",
          "0010",
          "1101"
        ],
        "a": 0,
        "unit": 4,
        "fam": "K13"
      },
      {
        "p": 4,
        "n": 15,
        "q": "Frames in transit at a time in Stop-and-Wait ARQ",
        "o": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "a": 0,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 4,
        "n": 16,
        "q": "Sliding window of size n−1 (n = sequence numbers): maximum frames sent but not yet acknowledged",
        "o": [
          "0",
          "1",
          "n",
          "n−1"
        ],
        "a": 3,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 4,
        "n": 17,
        "q": "Primary role of an authoritative DNS server",
        "o": [
          "Resolve recursive queries",
          "Store DNS records for a specific domain",
          "Forward queries",
          "Cache responses"
        ],
        "a": 1,
        "unit": 5,
        "fam": "K14"
      },
      {
        "p": 4,
        "n": 18,
        "q": "HTTP GET method is used to",
        "o": [
          "Submit data",
          "Request data from the server",
          "Delete data",
          "Update data"
        ],
        "a": 1,
        "unit": 5,
        "fam": "K9"
      },
      {
        "p": 4,
        "n": 19,
        "q": "Protocol that provides reliable communication",
        "o": [
          "UDP",
          "WWW",
          "TELNET",
          "TCP"
        ],
        "a": 3,
        "unit": 1,
        "fam": "K15"
      },
      {
        "p": 4,
        "n": 20,
        "q": "The well-known port among the following",
        "o": [
          "65535",
          "1020",
          "8080",
          "10000"
        ],
        "a": 1,
        "unit": 5,
        "low": 1,
        "fam": "K7"
      },
      {
        "p": 3,
        "n": 1,
        "q": "Dedicated links needed for 6 devices in a mesh topology",
        "o": [
          "15",
          "14",
          "9",
          "8"
        ],
        "a": 0,
        "unit": 1,
        "fam": "K3"
      },
      {
        "p": 3,
        "n": 2,
        "q": "Communication between a traditional monitor and the computer uses ___ mode",
        "o": [
          "Full-duplex",
          "Half-duplex",
          "Simplex",
          "Automatic"
        ],
        "a": 2,
        "unit": 1,
        "low": 1,
        "fam": "K17"
      },
      {
        "p": 3,
        "n": 3,
        "q": "Match: Router, Hub, Bridge, Gateway with Data Link, Network, All layers, Physical",
        "o": [
          "1-iv, 2-iii, 3-i, 4-ii",
          "1-ii, 2-iv, 3-i, 4-iii",
          "1-iii, 2-iv, 3-ii, 4-i",
          "1-i, 2-iii, 3-ii, 4-iv"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K16"
      },
      {
        "p": 3,
        "n": 4,
        "q": "Layer 2 groups raw bits into chunks called",
        "o": [
          "Packets",
          "Datagrams",
          "Segments",
          "Frames"
        ],
        "a": 3,
        "unit": 1,
        "fam": "K4"
      },
      {
        "p": 3,
        "n": 5,
        "q": "Errors in i) 11.56.045.78 ii) 221.34.7.8.20 iii) 75.45.256.14 iv) 10.23.14.01",
        "o": [
          "Only i, ii, iii",
          "Only ii, iii, iv",
          "All 4 have errors",
          "All 4 correct"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K2"
      },
      {
        "p": 3,
        "n": 6,
        "q": "Broadcast address for destination 132.168.16.4/20",
        "o": [
          "132.168.31.255",
          "132.168.15.255",
          "132.168.16.255",
          "132.168.255.255"
        ],
        "a": 0,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 3,
        "n": 7,
        "q": "IP header field that limits how long a datagram can stay in the network",
        "o": [
          "Identification",
          "Options",
          "Type of Service",
          "Time To Live (TTL)"
        ],
        "a": 3,
        "unit": 1
      },
      {
        "p": 3,
        "n": 8,
        "q": "2-port device that interconnects two LANs using the same protocol",
        "o": [
          "Switch",
          "Bridge",
          "Router",
          "Modem"
        ],
        "a": 1,
        "unit": 5,
        "fam": "K16"
      },
      {
        "p": 3,
        "n": 9,
        "q": "How Distance Vector routing prevents routing loops",
        "o": [
          "Periodic Hello messages",
          "Split-horizon rule",
          "Link-state advertisement",
          "Spanning Tree Protocol"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 3,
        "n": 10,
        "q": "Algorithm used by link state routing to compute shortest paths",
        "o": [
          "Floyd-Warshall",
          "Bellman-Ford",
          "A*",
          "Dijkstra"
        ],
        "a": 3,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 3,
        "n": 11,
        "q": "Example of a Path Vector routing protocol",
        "o": [
          "BGP",
          "RIP v1",
          "OSPF",
          "RIP v2"
        ],
        "a": 0,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 3,
        "n": 12,
        "q": "Attribute BGP uses to choose the best path",
        "o": [
          "Bandwidth",
          "Hop count",
          "AS_Path",
          "Delay"
        ],
        "a": 2,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 3,
        "n": 13,
        "q": "CSMA/CD: action when a collision is detected",
        "o": [
          "Stops transmitting and sends a jamming signal",
          "Immediately retransmits",
          "Continues at lower power",
          "Waits a fixed time then retransmits"
        ],
        "a": 0,
        "unit": 4,
        "fam": "K10"
      },
      {
        "p": 3,
        "n": 14,
        "q": "Primary function of the MAC address in an Ethernet frame",
        "o": [
          "Segment data",
          "Encrypt data",
          "Identify source and destination within a local network",
          "Route to the correct IP"
        ],
        "a": 2,
        "unit": 4
      },
      {
        "p": 3,
        "n": 15,
        "q": "Hamming distance between 101010 and 100100",
        "o": [
          "2",
          "3",
          "4",
          "5"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K13"
      },
      {
        "p": 3,
        "n": 16,
        "q": "Primary difference between Stop-and-Wait and Sliding Window ARQ",
        "o": [
          "Stop-and-Wait allows multiple packets",
          "Stop-and-Wait uses a sliding window",
          "Sliding window is for analog",
          "Sliding Window allows multiple packets before an ACK; Stop-and-Wait sends one at a time"
        ],
        "a": 3,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 3,
        "n": 17,
        "q": "Protocol commonly used with UDP for real-time applications",
        "o": [
          "HTTP",
          "FTP",
          "RTP",
          "SMTP"
        ],
        "a": 2,
        "unit": 5,
        "fam": "K8"
      },
      {
        "p": 3,
        "n": 18,
        "q": "Mechanism TCP uses to ensure reliable transmission",
        "o": [
          "TTL",
          "Retransmission of lost packets",
          "Packet filtering",
          "Encryption"
        ],
        "a": 1,
        "unit": 5,
        "fam": "K15"
      },
      {
        "p": 3,
        "n": 19,
        "q": "HTTP status code for success",
        "o": [
          "200 OK",
          "404 Not Found",
          "500 Internal Server Error",
          "301 Moved Permanently"
        ],
        "a": 0,
        "unit": 5,
        "fam": "K9"
      },
      {
        "p": 3,
        "n": 20,
        "q": "Protocol Telnet uses",
        "o": [
          "ICMP",
          "UDP",
          "IP",
          "TCP"
        ],
        "a": 3,
        "unit": 5,
        "fam": "K7"
      },
      {
        "p": 2,
        "n": 1,
        "q": "OSI layer whose functions include encryption and decryption",
        "o": [
          "Transport",
          "Session",
          "Presentation",
          "Application"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K4"
      },
      {
        "p": 2,
        "n": 2,
        "q": "A topology that involves tokens",
        "o": [
          "Star",
          "Ring",
          "Bus",
          "Daisy chaining"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K17"
      },
      {
        "p": 2,
        "n": 3,
        "q": "Links needed to connect 12 devices in a fully connected mesh",
        "o": [
          "144",
          "66",
          "72",
          "112"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K3"
      },
      {
        "p": 2,
        "n": 4,
        "q": "Frequency range of coaxial cable",
        "o": [
          "100 kHz to 500 MHz",
          "100 MHz to 500 MHz",
          "10 MHz to 50 MHz",
          "1000 kHz to 500 MHz"
        ],
        "a": 0,
        "unit": 1,
        "low": 1,
        "fam": "K6"
      },
      {
        "p": 2,
        "n": 5,
        "q": "193.103.20.0/24 split into 50 subnets: hosts per network and number of networks",
        "o": [
          "20 hosts, 50 subnets",
          "6 hosts, 64 subnets",
          "4 hosts, 50 subnets",
          "2 hosts, 64 subnets"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 2,
        "n": 6,
        "q": "___ implies that all subnets use the same subnet mask",
        "o": [
          "Static subnetting",
          "Dynamic subnetting",
          "Variable length subnetting",
          "Dynamic length subnetting"
        ],
        "a": 0,
        "unit": 2,
        "low": 1,
        "fam": "K1"
      },
      {
        "p": 2,
        "n": 7,
        "q": "Subnetting 172.17.32.0/23 into /27: subnets and usable hosts per subnet",
        "o": [
          "8 subnets, 31 hosts",
          "8 subnets, 32 hosts",
          "16 subnets, 30 hosts",
          "16 subnets, 32 hosts"
        ],
        "a": 2,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 2,
        "n": 8,
        "q": "Mask for 12 subnets from a Class C network",
        "o": [
          "255.255.255.252",
          "255.255.255.240",
          "255.255.255.255",
          "255.255.255.248"
        ],
        "a": 1,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 2,
        "n": 9,
        "q": "Packets of the same session may be routed through different paths in",
        "o": [
          "TCP but not UDP",
          "TCP and UDP",
          "UDP but not TCP",
          "Neither"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K15"
      },
      {
        "p": 2,
        "n": 10,
        "q": "ARP is used for",
        "o": [
          "Finding the IP address from DNS",
          "Finding the IP of the default gateway",
          "Finding the IP for a MAC address",
          "Finding the MAC address for an IP address"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K16"
      },
      {
        "p": 2,
        "n": 11,
        "q": "Why bridges use the spanning tree algorithm",
        "o": [
          "Shortest path routing",
          "To avoid loops in the routing paths",
          "Fault tolerance",
          "Minimising collisions"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K16"
      },
      {
        "p": 2,
        "n": 12,
        "q": "Command needed to use all 8 subnets with Class C mask 255.255.255.224",
        "o": [
          "ip classless",
          "no ip classful",
          "ip unnumbered",
          "ip subnet-zero"
        ],
        "a": 3,
        "unit": 2,
        "low": 1,
        "fam": "K1"
      },
      {
        "p": 2,
        "n": 13,
        "q": "Maximum window size for selective reject (repeat) with n-bit sequence numbers",
        "o": [
          "2^n",
          "2^(n−1)",
          "2^n − 1",
          "2^(n−2)"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 2,
        "n": 15,
        "q": "Token bucket on 10 Mbps, filled at 2 Mbps, initially 16 Mb: max time at full 10 Mbps",
        "o": [
          "2 s",
          "1.6 s",
          "5 s",
          "6 s"
        ],
        "a": 0,
        "unit": 4
      },
      {
        "p": 2,
        "n": 16,
        "q": "Token ring at 10^7 bps, propagation 200 m/µs: 1-bit delay equals",
        "o": [
          "500 m",
          "200 m",
          "20 m",
          "50 m of cable"
        ],
        "a": 2,
        "unit": 4
      },
      {
        "p": 2,
        "n": 17,
        "q": "Condition on G(x) to detect an odd number of bit errors in CRC",
        "o": [
          "G(x) has more than two terms",
          "G(x) does not divide 1+x^k",
          "1+x is a factor of G(x)",
          "G(x) has an odd number of terms"
        ],
        "a": 2,
        "unit": 4,
        "fam": "K13"
      },
      {
        "p": 2,
        "n": 18,
        "q": "Maximum size of data the application layer can pass to TCP",
        "o": [
          "Any size",
          "2^16 bytes − TCP header",
          "2^16 bytes",
          "1500 bytes"
        ],
        "a": 0,
        "unit": 5,
        "low": 1,
        "fam": "K15"
      },
      {
        "p": 2,
        "n": 19,
        "q": "Server did socket(), bind(), listen() but no accept(); client calls connect(): what happens",
        "o": [
          "connect() returns successfully",
          "connect() blocks",
          "connect() returns an error",
          "core dump"
        ],
        "a": 0,
        "unit": 5,
        "low": 1,
        "fam": "K15"
      },
      {
        "p": 2,
        "n": 20,
        "q": "Transport layer protocol used to support electronic mail",
        "o": [
          "SMTP",
          "STCP",
          "UDP",
          "TCP"
        ],
        "a": 3,
        "unit": 5,
        "fam": "K7"
      },
      {
        "p": 1,
        "n": 1,
        "q": "A LAN interconnects hosts; a WAN interconnects",
        "o": [
          "Networking devices",
          "LANs",
          "PCs",
          "PANs"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K16"
      },
      {
        "p": 1,
        "n": 2,
        "q": "A ___ is always available between two end systems, active or inactive based on the switch",
        "o": [
          "Packet-switched network",
          "Point-to-point WAN",
          "Circuit-switched network",
          "Networking devices"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K17"
      },
      {
        "p": 1,
        "n": 3,
        "q": "Process-to-process delivery of the entire message is the job of the ___ layer",
        "o": [
          "Network",
          "Transport",
          "Application",
          "Physical"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K4"
      },
      {
        "p": 1,
        "n": 4,
        "q": "Which primarily uses guided media",
        "o": [
          "Cellular telephone",
          "Local telephone system",
          "Satellite",
          "Radio broadcasting"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K6"
      },
      {
        "p": 1,
        "n": 5,
        "q": "___ is the multiport repeater",
        "o": [
          "Hub",
          "Bridge",
          "Switch",
          "Router"
        ],
        "a": 0,
        "unit": 5,
        "fam": "K16"
      },
      {
        "p": 1,
        "n": 6,
        "q": "IP 201.14.78.65 with mask 255.255.255.224: subnet address",
        "o": [
          "201.14.78.32",
          "201.14.78.65",
          "201.14.78.64",
          "201.14.78.12"
        ],
        "a": 2,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 1,
        "n": 7,
        "q": "Class with the greatest number of hosts per network address",
        "o": [
          "A",
          "B",
          "C",
          "D"
        ],
        "a": 0,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 1,
        "n": 8,
        "q": "On a network using NAT, the ___ has the translation table",
        "o": [
          "Switch",
          "Bridge",
          "Server",
          "Router"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K16"
      },
      {
        "p": 1,
        "n": 9,
        "q": "In distance vector routing each router receives information directly from",
        "o": [
          "Every router",
          "Routers less than two units away",
          "A table of hosts",
          "Its neighbours only"
        ],
        "a": 3,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 1,
        "n": 10,
        "q": "RIP: B hears Net1 is 2 hops via A, then 5 hops via A: B's table entry for Net1",
        "o": [
          "2",
          "3",
          "6",
          "7"
        ],
        "a": 2,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 1,
        "n": 11,
        "q": "Dijkstra's algorithm is used to",
        "o": [
          "Create LSAs",
          "Flood an internet",
          "Calculate the routing tables",
          "Create a link state database"
        ],
        "a": 2,
        "unit": 3,
        "fam": "K5"
      },
      {
        "p": 1,
        "n": 12,
        "q": "___ is not a multicasting application",
        "o": [
          "Teleconferencing",
          "Distance learning",
          "Information dissemination",
          "Train announcements"
        ],
        "a": 3,
        "unit": 5,
        "low": 1
      },
      {
        "p": 1,
        "n": 13,
        "q": "In the ___ random access method there is no collision",
        "o": [
          "ALOHA",
          "CSMA/CA",
          "CSMA/CD",
          "Token passing"
        ],
        "a": 1,
        "unit": 4,
        "low": 1,
        "fam": "K10"
      },
      {
        "p": 1,
        "n": 14,
        "q": "Flow control is needed to prevent",
        "o": [
          "Bit errors",
          "Overflow of the sender buffer",
          "Overflow of the receiver buffer",
          "Collision"
        ],
        "a": 2,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 1,
        "n": 15,
        "q": "Sliding window of size n−1: maximum frames sent but unacknowledged",
        "o": [
          "0",
          "n−1",
          "n",
          "n+1"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 1,
        "n": 16,
        "q": "HDLC stands for",
        "o": [
          "High-duplex line communication",
          "High-level data link control",
          "Half-duplex digital link",
          "Host double-level circuit"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K12"
      },
      {
        "p": 1,
        "n": 17,
        "q": "UDP needs the ___ address to deliver the datagram to the correct application",
        "o": [
          "Application",
          "Max",
          "IP",
          "Port"
        ],
        "a": 3,
        "unit": 5,
        "fam": "K7"
      },
      {
        "p": 1,
        "n": 18,
        "q": "The ___ defines the server program",
        "o": [
          "Ephemeral port number",
          "IP address",
          "Well-known port number",
          "MAC address"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K7"
      },
      {
        "p": 1,
        "n": 19,
        "q": "To prevent silly window syndrome by a slow receiver ___ can be used",
        "o": [
          "Clark's solution",
          "Nagle's algorithm",
          "Delayed acknowledgement",
          "Zero timer"
        ],
        "a": 0,
        "unit": 4
      },
      {
        "p": 1,
        "n": 20,
        "q": "Host srm.sco.ktr.univ is on which level of the DNS tree (root = level 1)",
        "o": [
          "4th",
          "5th",
          "6th",
          "7th"
        ],
        "a": 1,
        "unit": 5,
        "low": 1,
        "fam": "K14"
      },
      {
        "p": 0,
        "n": 1,
        "q": "OSI layer whose functions include encryption and decryption",
        "o": [
          "Transport",
          "Session",
          "Presentation",
          "Application"
        ],
        "a": 2,
        "unit": 1,
        "fam": "K4"
      },
      {
        "p": 0,
        "n": 2,
        "q": "The ___ topology involves tokens",
        "o": [
          "Star",
          "Ring",
          "Bus",
          "Daisy chaining"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K17"
      },
      {
        "p": 0,
        "n": 3,
        "q": "Links needed to connect 12 devices in a fully connected mesh",
        "o": [
          "144",
          "66",
          "72",
          "112"
        ],
        "a": 1,
        "unit": 1,
        "fam": "K3"
      },
      {
        "p": 0,
        "n": 4,
        "q": "Frequency range of coaxial cable",
        "o": [
          "100 kHz to 500 MHz",
          "100 MHz to 500 MHz",
          "1000 kHz to 500 MHz",
          "10 MHz to 50 MHz"
        ],
        "a": 0,
        "unit": 1,
        "low": 1,
        "fam": "K6"
      },
      {
        "p": 0,
        "n": 5,
        "q": "193.103.20.0/24 split into 50 subnets: hosts per network and number of networks",
        "o": [
          "20 hosts, 50 subnets",
          "6 hosts, 64 subnets",
          "4 hosts, 50 subnets",
          "2 hosts, 64 subnets"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 0,
        "n": 6,
        "q": "___ implies that all subnets use the same subnet mask",
        "o": [
          "Static subnetting",
          "Dynamic subnetting",
          "Variable length subnetting",
          "Dynamic length subnetting"
        ],
        "a": 0,
        "unit": 2,
        "low": 1,
        "fam": "K1"
      },
      {
        "p": 0,
        "n": 7,
        "q": "Subnetting 172.17.32.0/23 into /27: subnets and usable hosts per subnet",
        "o": [
          "8 subnets, 31 hosts",
          "8 subnets, 32 hosts",
          "16 subnets, 30 hosts",
          "16 subnets, 32 hosts"
        ],
        "a": 2,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 0,
        "n": 8,
        "q": "Mask for 12 subnets from a Class C network",
        "o": [
          "255.255.255.252",
          "255.255.255.255",
          "255.255.255.240",
          "255.255.255.248"
        ],
        "a": 2,
        "unit": 2,
        "fam": "K1"
      },
      {
        "p": 0,
        "n": 9,
        "q": "Packets of the same session may be routed through different paths in",
        "o": [
          "TCP but not UDP",
          "TCP and UDP",
          "UDP but not TCP",
          "Neither"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K15"
      },
      {
        "p": 0,
        "n": 10,
        "q": "ARP is used for",
        "o": [
          "Finding the IP address from DNS",
          "Finding the IP of the default gateway",
          "Finding the IP for a MAC address",
          "Finding the MAC address for an IP address"
        ],
        "a": 3,
        "unit": 2,
        "fam": "K16"
      },
      {
        "p": 0,
        "n": 11,
        "q": "Why bridges use the spanning tree algorithm",
        "o": [
          "Shortest path routing",
          "To avoid loops in the routing paths",
          "Fault tolerance",
          "Minimising collisions"
        ],
        "a": 1,
        "unit": 3,
        "fam": "K16"
      },
      {
        "p": 0,
        "n": 12,
        "q": "Command needed to use all 8 subnets with Class C mask 255.255.255.224",
        "o": [
          "ip classless",
          "no ip classful",
          "ip unnumbered",
          "ip subnet-zero"
        ],
        "a": 3,
        "unit": 2,
        "low": 1,
        "fam": "K1"
      },
      {
        "p": 0,
        "n": 13,
        "q": "Maximum window size for selective reject (repeat) with n-bit sequence numbers",
        "o": [
          "2^n",
          "2^(n−1)",
          "2^n − 1",
          "2^(n−2)"
        ],
        "a": 1,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 0,
        "n": 14,
        "q": "Sliding window protocol works on ___, with simultaneous two-way communication",
        "o": [
          "No duplex",
          "Half duplex",
          "Full duplex",
          "Single duplex"
        ],
        "a": 2,
        "unit": 4,
        "fam": "K11"
      },
      {
        "p": 0,
        "n": 15,
        "q": "Token bucket on 10 Mbps, filled at 2 Mbps, initially 16 Mb: max time at full 10 Mbps",
        "o": [
          "1.6 s",
          "2 s",
          "5 s",
          "8 s"
        ],
        "a": 1,
        "unit": 4
      },
      {
        "p": 0,
        "n": 16,
        "q": "Token ring at 10^7 bps, propagation 200 m/µs: 1-bit delay equals",
        "o": [
          "500 m",
          "200 m",
          "20 m",
          "50 m of cable"
        ],
        "a": 2,
        "unit": 4
      },
      {
        "p": 0,
        "n": 17,
        "q": "Condition on G(x) to detect an odd number of bit errors in CRC",
        "o": [
          "G(x) has more than two terms",
          "G(x) does not divide 1+x^k",
          "1+x is a factor of G(x)",
          "G(x) has an odd number of terms"
        ],
        "a": 2,
        "unit": 4,
        "fam": "K13"
      },
      {
        "p": 0,
        "n": 18,
        "q": "Maximum size of data the application layer can pass to TCP",
        "o": [
          "Any size",
          "2^16 bytes − TCP header",
          "2^16 bytes",
          "1500 bytes"
        ],
        "a": 0,
        "unit": 5,
        "low": 1,
        "fam": "K15"
      },
      {
        "p": 0,
        "n": 19,
        "q": "Server did socket(), bind(), listen() but no accept(); client calls connect(): what happens",
        "o": [
          "connect() returns successfully",
          "connect() blocks",
          "connect() returns an error",
          "core dump"
        ],
        "a": 0,
        "unit": 5,
        "low": 1,
        "fam": "K15"
      },
      {
        "p": 0,
        "n": 20,
        "q": "Transport layer protocol used to support electronic mail",
        "o": [
          "SMTP",
          "STCP",
          "TCP",
          "UDP"
        ],
        "a": 2,
        "unit": 5,
        "fam": "K7"
      }
    ],
    "families": [
      {
        "id": "K1",
        "title": "Subnet arithmetic",
        "papers": [
          "PYQ Jan 2024",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 8,
        "questions": 24,
        "tip": "Usable hosts = 2^h − 2 (/26 → 62, /25 → 126, .240 → 14). Block = 256 − mask octet. Broadcast = all host bits 1 (192.168.1.255; 10.10.10.0/25 → .127; 132.168.16.4/20 → 132.168.31.255). 12 subnets of a Class C → 255.255.255.240. /23 into /27 → 16 subnets of 30 hosts. Class B = 16 network + 16 host bits; IPv4 ≈ 4 billion addresses.",
        "unit": 2
      },
      {
        "id": "K7",
        "title": "Telnet, ports and protocols",
        "papers": [
          "PYQ Jan 2024",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 8,
        "questions": 10,
        "tip": "Telnet = remote login over TCP port 23. SMTP 25. Port addresses deliver to the right application; well-known ports (0–1023) identify servers. Email uses TCP.",
        "unit": 5
      },
      {
        "id": "K16",
        "title": "Network devices and types",
        "papers": [
          "PYQ Jan 2024",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 7,
        "questions": 16,
        "tip": "Hub = multiport repeater (physical layer). Bridge = 2-port, data link, spanning tree avoids loops. Router: network layer, holds the NAT table. Gateway works at all layers. Repeater regenerates. ARP finds the MAC address for an IP. Home = LAN (or PAN), cable TV = MAN.",
        "unit": 2
      },
      {
        "id": "K11",
        "title": "ARQ and sliding window",
        "papers": [
          "PYQ Jan 2024",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ May 2026"
        ],
        "count": 7,
        "questions": 10,
        "tip": "Sliding window sends several frames before an ACK; Stop-and-Wait has one in transit. Window n−1 → n−1 frames outstanding. Selective repeat window ≤ 2^(n−1). Flow control prevents receiver-buffer overflow. Sliding window works in full duplex.",
        "unit": 4
      },
      {
        "id": "K13",
        "title": "Error detection and correction",
        "papers": [
          "PYQ Jan 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 7,
        "questions": 8,
        "tip": "CRC is modulo-2 division; (1+x) as a factor of G(x) detects odd numbers of errors. Hamming codes correct single-bit errors only. Wrong parity → error detected. Hamming distance 101010 vs 100100 = 3.",
        "unit": 4
      },
      {
        "id": "K4",
        "title": "OSI layer jobs",
        "papers": [
          "PYQ Jan 2024",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 7,
        "questions": 7,
        "tip": "Data link: framing and error detection (chunks are frames). Transport: process-to-process delivery. Presentation: encryption. Headers are added going down the stack.",
        "unit": 1
      },
      {
        "id": "K5",
        "title": "Routing protocols",
        "papers": [
          "PYQ May 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 6,
        "questions": 19,
        "tip": "Distance vector uses Bellman-Ford and talks to neighbours only; split horizon prevents loops. Link state floods LSAs and runs Dijkstra. BGP is path vector (EGP) and chooses by AS_PATH. EIGRP is Cisco, fast, metric bandwidth + delay. RIP max 15 hops; RIP v2 carries subnet information. A default route is used when nothing else matches.",
        "unit": 3
      },
      {
        "id": "K17",
        "title": "Topologies and switching",
        "papers": [
          "PYQ Jan 2024",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)"
        ],
        "count": 6,
        "questions": 7,
        "tip": "Token → ring topology. Central device → star. Circuit switching uses TDM and is always available end to end. Monitor and computer use simplex.",
        "unit": 1
      },
      {
        "id": "K6",
        "title": "Transmission media",
        "papers": [
          "PYQ Jan 2024",
          "PYQ May 2024",
          "PYQ Jul 2024",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 6,
        "questions": 6,
        "tip": "Optical fibre: light, highest bandwidth, immune to EMI. Coaxial: about 100 kHz to 500 MHz. Local telephone uses guided media.",
        "unit": 1
      },
      {
        "id": "K10",
        "title": "CSMA",
        "papers": [
          "PYQ May 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 5,
        "questions": 5,
        "tip": "CSMA = sense before transmit. CSMA/CD on collision: stop, send a jam signal, wait a random backoff. CSMA/CA avoids collisions; RTS/CTS fixes the hidden terminal problem.",
        "unit": 1
      },
      {
        "id": "K15",
        "title": "TCP",
        "papers": [
          "PYQ Jan 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ Jul 2025"
        ],
        "count": 4,
        "questions": 8,
        "tip": "TCP is reliable: it retransmits lost packets. Packets of the same session may take different paths in both TCP and UDP. connect() succeeds once listen() has run, even before accept().",
        "unit": 3
      },
      {
        "id": "K9",
        "title": "HTTP",
        "papers": [
          "PYQ Nov 2024",
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ May 2026"
        ],
        "count": 4,
        "questions": 5,
        "tip": "200 OK = success; GET requests data; HEAD gets only headers (metadata); a URL identifies and locates a resource.",
        "unit": 5
      },
      {
        "id": "K3",
        "title": "Mesh links",
        "papers": [
          "PYQ Jan 2024",
          "PYQ Jul 2024",
          "PYQ Nov 2024",
          "PYQ May 2026"
        ],
        "count": 4,
        "questions": 4,
        "tip": "Full mesh needs n(n−1)/2 links: 12 devices → 66, 6 devices → 15.",
        "unit": 1
      },
      {
        "id": "K8",
        "title": "UDP for real time",
        "papers": [
          "PYQ Nov 2024",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 4,
        "questions": 4,
        "tip": "Real-time apps (VoIP, video, gaming) use UDP, usually with RTP. UDP is the connectionless transport protocol.",
        "unit": 5
      },
      {
        "id": "K12",
        "title": "HDLC",
        "papers": [
          "PYQ May 2024",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 4,
        "questions": 4,
        "tip": "High-level Data Link Control is bit-oriented; flag 01111110 marks the start and end of a frame; I-frames carry user data.",
        "unit": 4
      },
      {
        "id": "K14",
        "title": "Email and DNS",
        "papers": [
          "PYQ May 2024",
          "PYQ Jul 2025",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 4,
        "questions": 4,
        "tip": "SMTP sends; POP3/IMAP retrieve. DNS resolves names to IP addresses; an authoritative server stores a domain's records.",
        "unit": 5
      },
      {
        "id": "K18",
        "title": "IPv6",
        "papers": [
          "PYQ Jul 2025",
          "PYQ Jul 2025 (Paper - 2)",
          "PYQ Nov 2025",
          "PYQ May 2026"
        ],
        "count": 4,
        "questions": 4,
        "tip": "128-bit addresses; ::1 loopback; supports unicast, multicast and anycast; 2001:db8::1 and 2001:db8:0:0:0:0:0:1 are both valid.",
        "unit": 3
      },
      {
        "id": "K2",
        "title": "Invalid IPv4 addresses",
        "papers": [
          "PYQ Nov 2024",
          "PYQ May 2026"
        ],
        "count": 2,
        "questions": 2,
        "tip": "Leading zeros (045, 01), more than four octets, and any octet above 255 are all errors: all four given addresses are wrong.",
        "unit": 1
      }
    ],
    "note": "Part A is 20 one-mark MCQs. The papers print no answer key: every answer here was worked out by hand, and the ones marked “check” are less certain."
  }
};
