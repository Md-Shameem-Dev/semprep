// Computer Networks guide content. topicIds refer to the counted table (T1…T26) printed by
// build-guide.mjs; paper names and counts come from that table. Worked numbers (CRC, CIDR,
// VLSM, Hamming) were computed with a script, not by hand.
export const raw = {
  summary: "Built from the 8 most recent previous-year papers on THE HELPER in the current format (Jan 2024 – May 2026). Every Part B and Part C question was read from the scanned papers and counted by topic, so the repeat counts are exact. Error detection (CRC), the OSI/TCP-IP models, routing algorithms, TCP vs UDP and addressing (CIDR, subnetting) carry most of the marks.",
  examPattern: {
    totalMarks: 75,
    parts: [
      { part: "Part A", marks: "20 × 1 = 20", text: "20 MCQs on the OMR sheet in the first 40 minutes. Many repeat word for word: the Jan 2024 and Jul 2024 papers share almost the same 20, and May 2026 repeated several of Nov 2024's. Expect subnet arithmetic (hosts, masks, broadcast), port numbers, RIP/OSPF/BGP facts, CSMA, ARQ window sizes and protocol trivia." },
      { part: "Part B", marks: "5 × 8 = 40", text: "Q21–Q25, each with an either/or choice, one question per unit (Q21 = Unit 1 … Q25 = Unit 5). Mostly theory with diagrams, plus one or two numericals: CRC, CIDR first/last address, subnetting, Hamming code." },
      { part: "Part C", marks: "1 × 15 = 15", text: "Q26 or Q27, answer one. In 8 papers it was the OSI/TCP-IP model 4 times, a routing algorithm (Dijkstra, Bellman-Ford, RIP vs OSPF) in 4 papers, and subnetting/VLSM twice." }
    ]
  },
  callouts: [
    { title: "Five topics carry the paper", text: "CRC/error detection (7 of 8 papers), the OSI and TCP/IP models (6), distance vector routing (6), TCP vs UDP (6), and CIDR/subnetting (5 each). Prepare one full answer for each before anything else." },
    { title: "Part C is predictable", text: "Every Part C choice in 8 papers was either a layer model (OSI/TCP-IP), a routing algorithm worked on a graph, or a subnetting/VLSM problem, with a few one-offs. Prepare the OSI model in full and one Dijkstra plus one Bellman-Ford table." }
  ],
  top: [
    { question: "CRC — append the remainder (modulo-2 division by the generator) and check a received word; parity and VRC", unit: 4, marks: "8–15", importance: 5, topicIds: ["T1"] },
    { question: "OSI reference model (and TCP/IP) — role of every layer, data flow, comparison", unit: 1, marks: "8–15", importance: 5, topicIds: ["T2"] },
    { question: "Distance vector routing — Bellman-Ford table, RIP, count-to-infinity, split horizon / poison reverse", unit: 3, marks: "8–15", importance: 5, topicIds: ["T3"] },
    { question: "TCP vs UDP — reliability, connection setup, header, applications (and why video calls use UDP)", unit: 5, marks: "8–15", importance: 5, topicIds: ["T4"] },
    { question: "Classless addressing (CIDR) — number of addresses, first and last address, ISP sub-blocks, aggregation", unit: 2, marks: "8", importance: 5, topicIds: ["T5"] },
    { question: "Subnetting — FLSM (4 equal subnets) and VLSM tables: network ID, mask, host range, broadcast", unit: 2, marks: "8–15", importance: 5, topicIds: ["T8"] },
    { question: "Link state routing — Dijkstra shortest path tree, LSAs, OSPF, advantages over distance vector", unit: 3, marks: "8–15", importance: 5, topicIds: ["T9"] },
    { question: "TCP segment format and connection setup / teardown (three-way handshake, four-way close)", unit: 5, marks: "8–15", importance: 4, topicIds: ["T6"] },
    { question: "DNS (role, records, resolution), HTTP and FTP", unit: 5, marks: "8–15", importance: 4, topicIds: ["T7"] },
    { question: "Network topologies — bus, star, ring, mesh, hybrid with sketches; star vs mesh", unit: 1, marks: "8", importance: 4, topicIds: ["T10"] },
    { question: "CSMA/CD collision detection and CSMA/CA collision avoidance (IFS, contention window, ACK, RTS/CTS)", unit: 4, marks: "8", importance: 4, topicIds: ["T13"] },
    { question: "ARQ and sliding window — Stop-and-Wait, Go-Back-N, Selective Repeat and their trade-offs", unit: 4, marks: "8–15", importance: 4, topicIds: ["T12"] },
    { question: "Email — message format, mail architecture, SMTP, POP3, IMAP, MIME", unit: 5, marks: "8", importance: 4, topicIds: ["T14"] },
    { question: "Routing protocols compared — RIP v1/v2 vs OSPF, EIGRP, BGP", unit: 3, marks: "8–15", importance: 3, topicIds: ["T11"] },
    { question: "Circuit switching vs packet switching", unit: 1, marks: "8", importance: 3, topicIds: ["T15"] },
    { question: "Transmission media — twisted pair, coaxial, optical fibre, wireless", unit: 1, marks: "8", importance: 3, topicIds: ["T16"] },
    { question: "IPv6 — features, header format, IPv4 vs IPv6, transition (dual stack, tunnelling, translation)", unit: 3, marks: "8", importance: 3, topicIds: ["T19"] },
    { question: "Hamming code — number of check bits and the transmitted pattern", unit: 4, marks: "8", importance: 3, topicIds: ["T20"] },
    { question: "IPv4 classes and binary ↔ dotted-decimal conversion with class and default mask", unit: 2, marks: "8", importance: 3, topicIds: ["T18"] },
    { question: "Network devices (hub, switch, bridge, router, gateway) and NAT types", unit: 2, marks: "8", importance: 2, topicIds: ["T17", "T21"] }
  ],
  units: [
    { n: 1, title: "Introduction to Networks", weight: "High", topics: [
      { topic: "OSI model: Physical, Data Link, Network, Transport, Session, Presentation, Application; headers are added going down; TCP/IP has 4–5 layers (Application, Transport, Internet, Network access)", tag: "6/8" },
      { topic: "Topologies: mesh needs n(n−1)/2 links; star uses a central hub/switch; ring passes a token; bus shares one cable", tag: "4/8" },
      { topic: "Circuit switching reserves a path (FDM/TDM) before data; packet switching sends independent packets with addresses in each", tag: "3/8" },
      { topic: "Media: twisted pair (cheap, noisy), coaxial (100 kHz–500 MHz), optical fibre (light, highest bandwidth, immune to EMI), wireless for rural links", tag: "3/8" },
      { topic: "Devices: hub (physical, multiport repeater), bridge/switch (data link, MAC), router (network, IP), gateway (all layers), repeater regenerates signals", tag: "3/8" },
      { topic: "LAN / MAN / WAN / PAN; bandwidth vs latency; delay = transmission + propagation + processing + queuing", tag: "1/8" }
    ]},
    { n: 2, title: "Addressing", weight: "Very High", topics: [
      { topic: "CIDR: a /n block has 2^(32−n) addresses; first = address AND mask, last = first + size − 1; ISP sub-blocks in slash notation", tag: "5/8" },
      { topic: "Subnetting: FLSM gives equal subnets; VLSM allocates the largest need first; usable hosts = 2^h − 2", tag: "5/8" },
      { topic: "Classes: A 1–126 (/8), B 128–191 (/16), C 192–223 (/24), D multicast, E reserved; binary to dotted-decimal", tag: "3/8" },
      { topic: "NAT: static (one-to-one), dynamic (pool), PAT/overload (IP + port); the router holds the translation table", tag: "2/8" },
      { topic: "ARP maps IP → MAC; TTL limits a datagram's lifetime; broadcast = all host bits 1", tag: "MCQ" }
    ]},
    { n: 3, title: "Routing", weight: "Very High", topics: [
      { topic: "Distance vector: Bellman-Ford D(x,y) = min over neighbours (c(x,v) + D(v,y)); neighbours only; RIP max 15 hops, 16 = unreachable; count-to-infinity fixed by split horizon and poison reverse", tag: "6/8" },
      { topic: "Link state: flood LSAs, every router builds the full map, runs Dijkstra; OSPF; the age field removes old LSAs", tag: "5/8" },
      { topic: "RIP vs OSPF vs EIGRP (Cisco, bandwidth + delay) vs BGP (path vector, AS_PATH, exterior)", tag: "4/8" },
      { topic: "IPv6: 128-bit, ::1 loopback, :: compression, no NAT needed, unicast/multicast/anycast, IPsec built in", tag: "3/8" },
      { topic: "Forwarding: next-hop vs route method; default route used when nothing else matches", tag: "1/8" },
      { topic: "Congestion control: leaky bucket, token bucket (time = C / (M − R))", tag: "1/8" }
    ]},
    { n: 4, title: "Medium Access Control", weight: "Very High", topics: [
      { topic: "CRC: append r zeros, divide by the (r+1)-bit generator using XOR, append the remainder; receiver remainder 0 = no error", tag: "7/8" },
      { topic: "CSMA/CD: sense, transmit, detect collision, send jam, exponential backoff; CSMA/CA: IFS, contention window, ACK, RTS/CTS (hidden terminal)", tag: "4/8" },
      { topic: "ARQ: Stop-and-Wait (window 1), Go-Back-N (≤ 2^m − 1), Selective Repeat (≤ 2^(m−1)); sliding window allows several frames before an ACK", tag: "4/8" },
      { topic: "Hamming code: r check bits with 2^r ≥ m + r + 1 (16-bit data → 5); corrects single-bit errors only", tag: "3/8" },
      { topic: "IEEE 802.11 MAC (DCF, PCF, frame), 802.5 token ring; HDLC is bit-oriented with flag 01111110; Ethernet minimum frame 512 bits", tag: "2/8" }
    ]},
    { n: 5, title: "Transport and Application Layer Protocols", weight: "Very High", topics: [
      { topic: "TCP vs UDP: TCP connection-oriented, reliable, ordered, flow and congestion control; UDP connectionless, fast, used for DNS, VoIP, video (RTP)", tag: "6/8" },
      { topic: "TCP segment: ports, sequence and ACK numbers, header length, flags (SYN, ACK, FIN, RST, PSH, URG), window, checksum; SYN → SYN+ACK → ACK", tag: "5/8" },
      { topic: "DNS: hierarchy (root, TLD, authoritative), records A, AAAA, CNAME, MX, NS, PTR, SOA; HTTP methods and status codes; FTP control 21 / data 20", tag: "5/8" },
      { topic: "Email: user agent, MTA, mailbox; SMTP sends (25), POP3 (110) and IMAP (143) retrieve; MIME carries non-ASCII content", tag: "4/8" },
      { topic: "Ports: FTP 20/21, SSH 22, Telnet 23 (TCP), SMTP 25, DNS 53, HTTP 80, POP3 110, IMAP 143, HTTPS 443; well-known ports are 0–1023", tag: "MCQ" }
    ]}
  ],
  shortAnswer: {
    title: "Most Repeated 8-Mark Questions (Part B)",
    strategy: "Part B is Q21–Q25, one question per unit with an either/or choice. Most are theory with a diagram; keep one numerical (CRC, CIDR, subnetting) ready for Q22 and Q24 because they come back with new numbers.",
    groups: [
      { label: "Q21", unit: 1, items: [
        "Types of network topologies with sketches; star vs mesh for a company (Jan 2024, Jul 2024, Jul 2025, Jul 2025 Paper 2)",
        "Circuit switching vs packet switching, with diagram (May 2024, Nov 2024, May 2026)",
        "Compare twisted pair, coaxial and optical fibre; wireless media for rural internet (Jul 2025, Jul 2025 Paper 2, May 2026)",
        "OSI model with a neat diagram; role of the network layer (Jan 2024, Jul 2024)",
        "Network devices and their uses (Nov 2024); LAN/MAN/WAN/PAN and delay components (Nov 2025)"
      ]},
      { label: "Q22", unit: 2, items: [
        "CIDR block: number of addresses, first and last address (167.199.170.82/27 → 32 addresses, .64 to .95; 14.12.72.8/24; 200.107.16.17/18) (Nov 2024, Nov 2025)",
        "Subnetting: divide a network into 4 subnets with subnet IP, hosts, first/last host and broadcast (Jan 2024, Jul 2025 Paper 2)",
        "ISP sub-blocks from 190.100.0.0/16 for three customer groups (Jan 2024); /23 and /25 address counts (May 2024)",
        "Binary to dotted-decimal with class and default mask (Jul 2025 Paper 2, May 2026); classful vs classless and CIDR aggregation (Nov 2025, May 2026)",
        "NAT types and functions (Nov 2024, Jul 2025); switch filtering table vs router routing table (May 2024)"
      ]},
      { label: "Q23", unit: 3, items: [
        "Distance vector routing with Bellman-Ford, with example; routing loops after a link failure and how they are prevented (Jul 2024, Nov 2024, Jul 2025 Paper 2, May 2026)",
        "Link state routing with Dijkstra; age field; OSPF LSAs; link state vs distance vector (Jan 2024, Nov 2024, Jul 2025, Nov 2025)",
        "IPv6 features, header and transition; IPv4 vs IPv6; IPv6 security (Jul 2025, Nov 2025, May 2026)",
        "BGP routing (Jan 2024), EIGRP (May 2024), congestion control algorithms (Jul 2024), next-hop forwarding (Jul 2025 Paper 2)"
      ]},
      { label: "Q24", unit: 4, items: [
        "CRC: compute the check bits and verify a received word (May 2026: data 1101011011, G = 1011 → CRC 100; received 1101011011101 leaves remainder 001, so an error occurred) (Nov 2025, Jul 2025 Paper 2, May 2026)",
        "CSMA/CD collision handling and CSMA/CA avoidance with diagrams (Jan 2024, May 2024, Nov 2024, May 2026)",
        "ARQ for error control; Go-Back-N vs Selective Repeat; sliding window flow control (Nov 2024, Jul 2025, Nov 2025)",
        "Error detection and correction mechanisms; VRC for 1101, 1010, 0111, 0001; Hamming check bits for a 16-bit message (May 2024, Jul 2024, Jul 2025, Jul 2025 Paper 2)",
        "IEEE 802.11 MAC and frame (Jul 2024); token management in IEEE 802.5 (Jan 2024)"
      ]},
      { label: "Q25", unit: 5, items: [
        "TCP vs UDP: reliability, connection setup, applications (May 2024, Nov 2024, Jul 2025, Jul 2025 Paper 2, Nov 2025)",
        "TCP segment format and data transfer with the handshake (Jan 2024, May 2026)",
        "Email format and mail system architecture; SMTP, POP3, IMAP; IMAP and MIME (Jan 2024, Jul 2024, Nov 2025, May 2026)",
        "DNS records and their role; how DNS lets users reach websites; HTTP and FTP (May 2024, Jul 2024, Nov 2024, Jul 2025, Jul 2025 Paper 2)"
      ]}
    ],
    tip: "For every theory answer draw the diagram first (layer stack, frame or segment format, topology, timeline). For CRC, show the long division line by line; for CIDR and subnetting, write the block size before any addresses."
  },
  longAnswer: {
    title: "Most Repeated 15-Mark Questions (Part C)",
    note: "Q26 or Q27, answer one. Each paper has offered either a layer model, a routing algorithm on a graph, or a subnetting problem, so you will always have one of these.",
    items: [
      { question: "OSI reference model: role of every layer, how data flows down and up, and comparison with TCP/IP", level: "Hot", note: "Jan 2024 (TCP/IP), Jul 2025, Jul 2025 Paper 2, Nov 2025 (4 of 8)" },
      { question: "Routing algorithm on a graph: Dijkstra shortest path tree and forwarding table, or Bellman-Ford tables with count-to-infinity and split horizon", level: "Hot", note: "May 2024 (both options), Nov 2024, Nov 2025 (RIP vs OSPF), May 2026 (4 of 8)" },
      { question: "Subnetting / VLSM: e.g. 10.50.16.0/22 for 250, 90, 40, 18, 8, 3 hosts → /24, /25, /26, /27, /28, /29 from 10.50.16.0 upward", level: "High", note: "Nov 2024, May 2026" },
      { question: "CRC code generation: M(x) = x⁵+x⁴+x, G(x) = x³+x²+1 → append 100", level: "Watch", note: "Jan 2024 Q27" },
      { question: "TCP three-way handshake; why a video call uses UDP/RTP instead of TCP", level: "Watch", note: "Jul 2024 Q26, Jul 2025 Q27" },
      { question: "ARQ types for reliable transmission; role of DNS and its components", level: "Watch", note: "Jul 2025 Paper 2 Q27, Jul 2024 Q27" }
    ]
  },
  predictions: [
    { topic: "CRC calculation and check", unit: 4, type: "8", probability: 90, reason: "7 of 8 papers; in each of the last two" },
    { topic: "OSI / TCP-IP model (Part C)", unit: 1, type: "15", probability: 85, reason: "6 of 8 papers; Part C in 3 of the last 4" },
    { topic: "TCP vs UDP", unit: 5, type: "8", probability: 85, reason: "6 of 8 papers" },
    { topic: "Distance vector routing / Bellman-Ford", unit: 3, type: "8–15", probability: 80, reason: "6 of 8 papers, including May 2026" },
    { topic: "Dijkstra / link state routing", unit: 3, type: "8–15", probability: 75, reason: "5 of 8 papers; Part C in May 2024 and May 2026" },
    { topic: "CIDR first and last address / block size", unit: 2, type: "8", probability: 75, reason: "5 of 8 papers" },
    { topic: "Subnetting with a table (FLSM/VLSM)", unit: 2, type: "8–15", probability: 70, reason: "5 of 8 papers; Part C in Nov 2024 and May 2026" },
    { topic: "CSMA/CD and CSMA/CA", unit: 4, type: "8", probability: 65, reason: "4 of 8 papers; back in May 2026" },
    { topic: "TCP segment format and handshake", unit: 5, type: "8", probability: 65, reason: "5 of 8 papers" },
    { topic: "Email architecture and protocols", unit: 5, type: "8", probability: 60, reason: "4 of 8 papers; in the last two" },
    { topic: "Network topologies", unit: 1, type: "8", probability: 55, reason: "4 of 8 papers; not in the last two" },
    { topic: "DNS records, HTTP and FTP", unit: 5, type: "8", probability: 55, reason: "5 of 8 papers" },
    { topic: "ARQ: Go-Back-N vs Selective Repeat", unit: 4, type: "8", probability: 55, reason: "4 of 8 papers" },
    { topic: "IPv6 features and IPv4 vs IPv6", unit: 3, type: "8", probability: 50, reason: "3 of 8 papers: Jul 2025, Nov 2025, May 2026" },
    { topic: "Circuit vs packet switching", unit: 1, type: "8", probability: 45, reason: "3 of 8 papers; May 2026" },
    { topic: "Hamming code", unit: 4, type: "8", probability: 35, reason: "3 of 8 papers" }
  ],
  formulas: [
    { title: "Addressing and subnetting", lines: [
      "Block of /n has 2^(32−n) addresses; usable hosts = 2^(32−n) − 2",
      "Block size in the interesting octet = 256 − mask octet (.192 → 64, .224 → 32, .240 → 16)",
      "First (network) = address AND mask;  last (broadcast) = first + block − 1",
      "Borrow s bits for 2^s subnets: 12 subnets → 4 bits → /28 (255.255.255.240)",
      "VLSM: sort needs largest first; each need h → smallest 2^k ≥ h + 2",
      "Classes: A 1–126, B 128–191, C 192–223, D 224–239, E 240–255;  127 = loopback"
    ]},
    { title: "CRC and parity", lines: [
      "Generator of degree r → append r zeros to the data",
      "Divide with XOR (modulo-2); the r-bit remainder is the CRC",
      "Codeword = data + CRC;  receiver divides again: remainder 0 → no error",
      "G(x) with (x+1) as a factor detects all odd numbers of bit errors",
      "Even parity: parity bit makes the count of 1s even;  VRC = parity per data unit"
    ]},
    { title: "Hamming code and distance", lines: [
      "Check bits r: smallest r with 2^r ≥ m + r + 1  (m = 16 → r = 5, m = 7 → r = 4)",
      "Parity bits sit at positions 1, 2, 4, 8, 16 …",
      "Hamming distance = number of differing bits;  d_min detects d−1, corrects ⌊(d−1)/2⌋",
      "Hamming code corrects single-bit errors only"
    ]},
    { title: "Flow control and MAC", lines: [
      "Stop-and-Wait window = 1;  Go-Back-N ≤ 2^m − 1;  Selective Repeat ≤ 2^(m−1)",
      "Stop-and-Wait efficiency = 1 / (1 + 2a),  a = propagation time / transmission time",
      "Token bucket: max burst time = C / (M − R)  (16 Mb, 10 Mbps, 2 Mbps → 2 s)",
      "1-bit length = propagation speed / bit rate  (200 m/µs ÷ 10^7 bps = 20 m)",
      "Ethernet minimum frame 64 bytes = 512 bits;  HDLC flag 01111110"
    ]},
    { title: "Routing", lines: [
      "Bellman-Ford: D_x(y) = min_v { c(x,v) + D_v(y) }",
      "Dijkstra: pick the closest unvisited node, relax its neighbours, repeat",
      "RIP: hop count, max 15 (16 = infinity), updates every 30 s",
      "OSPF: link state, cost = reference bandwidth / bandwidth;  EIGRP: bandwidth + delay by default",
      "BGP: path vector, chooses by AS_PATH;  mesh links = n(n−1)/2"
    ]},
    { title: "Transport and application", lines: [
      "TCP handshake: SYN → SYN+ACK → ACK;  close: FIN → ACK, FIN → ACK",
      "TCP header 20–60 bytes;  UDP header 8 bytes",
      "Ports: FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, HTTP 80, POP3 110, IMAP 143, HTTPS 443",
      "HTTP: GET fetches, HEAD fetches headers only, POST submits;  200 OK, 301 moved, 404 not found, 500 server error"
    ]}
  ],
  revision: {
    must: [
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
    ifTime: [
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
    quickFacts: [
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
  tips: [
    { title: "Start with the big five", text: "CRC, the OSI/TCP-IP model, distance vector routing, TCP vs UDP and CIDR/subnetting together appear in almost every paper and cover both Part C options most years." },
    { title: "MCQs repeat word for word", text: "Jan 2024 and Jul 2024 share nearly the same 20 MCQs, and May 2026 repeated several of Nov 2024's. Do the MCQ quiz on the last two papers, then the repeating topics." },
    { title: "Show the arithmetic", text: "For CRC, write every XOR line. For CIDR, state the block size and the mask, then the first and last address. Marks are given for steps, not just the answer." },
    { title: "Draw before you write", text: "Layer diagrams, TCP segment format, CSMA/CD flow chart, topologies and mail architecture each earn marks on their own. Put the diagram first." },
    { title: "Pick Part C by confidence", text: "If you can draw the OSI model and explain each layer in two lines, that is the safer Part C. If a graph is given, Dijkstra and Bellman-Ford tables are mechanical and score fully when every iteration is shown." },
    { title: "Budget your time", text: "Part A ends at 40 minutes. Then about 18 minutes per Part B question and 35 minutes for Part C." },
    { title: "Cross-check with the topic list", text: "THE HELPER also has a 'CN Important Topics' sheet and a pattern analysis. The topics here match what the 8 papers actually asked." }
  ]
};
