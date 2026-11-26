// Usage (from the semprep folder): node tools/hand-built/build-mcq.mjs
// Reads the Part A questions transcribed from the scanned papers (mcq/*.json), groups the
// recurring ones into families, and writes them into the built-in guide files as guide.mcq.
// Answers are worked out by hand (the papers print no key); "low" marks the ones to double-check.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const HERE = new URL(".", import.meta.url);
const GUIDES = new URL("../../data/guides/", import.meta.url);
const SHORT = { "Jan 2024": "Ja24", "May 2024": "M24", "Jul 2024": "J24", "Nov 2024": "N24", "May 2025": "M25", "Jul 2025": "J25", "Jul 2025 (Paper - 2)": "J25b", "Nov 2025": "N25", "May 2026": "M26", "Nov 2023": "N23" };

// ---- families: [id, title, papers-agnostic member list, key facts] --------------------------------
const FAMILIES = {
  dm: [
    ["G1", "Dual of a statement", ["J24#2", "M24#10", "M25#10", "N24#10", "J25#10", "J25b#11"], "Dual: swap ∧↔∨ and T↔F, keep the letters and ¬. (P∧Q)∨T → (P∨Q)∧F; Q∨F≡Q → Q∧T≡Q; (B̄∩A)∪(A∩B) → (B̄∪A)∩(A∪B); (p∧q)∨r → (p∨q)∧r."],
    ["G2", "Tautology", ["M24#12", "M25#12", "J25#9", "J25b#12", "M26#9", "N24#12"], "Tautologies asked: p∨(p→q) (twice), P∨¬P, p→(q→p), (p→¬p)→¬p, (¬q∧(p→q))→¬p (modus tollens)."],
    ["G3", "Converse, inverse, contrapositive", ["N24#9", "M24#9", "M25#11", "J25#11", "N25#10"], "p→q: converse q→p, inverse ¬p→¬q, contrapositive ¬q→¬p. Converse of q→p is p→q; converse of ¬p→q is q→¬p."],
    ["G4", "Hamming weight and distance", ["J24#16", "M24#16", "J25b#16", "J25#16", "N24#16"], "Weight = number of 1s (111010 → 4, 11010 → 3). Distance = number of differing bits (11010 vs 10101 → 4; 010000 vs 000101 → 3)."],
    ["G5", "Pigeonhole principle", ["J24#5", "J24#8", "M25#6", "J25#6", "J25b#8", "N24#5", "N25#7"], "n pigeons in m holes ⇒ some hole has at least ⌈n/m⌉. Same month: 13 people for two, 25 for three. kn+1 pigeons in n holes ⇒ k+1. 36 in 4 holes ⇒ 9. 5 grades, 7 alike ⇒ 31."],
    ["G6", "Chromatic number", ["J24#20", "M24#20", "M25#17", "J25#20", "J25b#19", "M26#20", "N25#19"], "Hexagon (even cycle) 2, bipartite and K₄,₃ 2, Kₙ = n (K₄ → 4), null graph 1. A graph colourable with two colours is bipartite."],
    ["G7", "Trees", ["J24#18", "J25b#17", "N24#18", "J25#19", "N25#20", "M24#19", "M25#19"], "A tree is connected and acyclic; n vertices ⇒ n−1 edges (50 → 49, 10 → 9, 8 edges → 9 vertices). A connected graph with no circuit is a tree."],
    ["G8", "The group {1, −1, i, −i}", ["J24#14", "M25#13", "N24#13"], "The group has order 4 and the element i has order 4."],
    ["G9", "Rule P", ["J24#9", "M25#9", "J25b#9"], "A premise may be introduced at any point of a derivation: Rule P."],
    ["G10", "Cyclic groups", ["J24#13", "J25#15", "M26#16", "N24#14", "N24#15"], "Every cyclic group is abelian; every subgroup of a cyclic group is cyclic; every group of prime order is cyclic."],
    ["G11", "Group inverse and identity", ["J25#14", "J25b#13", "M24#14", "M25#16", "M24#13", "J25b#15", "J25#13", "M26#13"], "(a*b)⁻¹ = b⁻¹*a⁻¹; the identity is unique; for a*b = a+b+2 the identity is −2 and the inverse of a is −(a+4); identity of {2,4,6,8} mod 10 is 6."],
    ["G12", "gcd and lcm properties", ["J25b#6", "M24#7", "M26#7", "M25#8", "M25#7", "N25#8", "J25#8", "M24#8", "M24#5"], "gcd(a,b)=1 ⇒ gcd(ka,kb)=k and gcd(ac,b)=gcd(c,b); a=qb+r ⇒ gcd(a,b)=gcd(b,r); gcd = ma+nb; gcd·lcm = product (gcd 1, lcm 14 → 14; gcd(72,x)=36, lcm 216 → x=108); lcm(−4,14)=28."],
    ["G13", "Primes", ["M26#8", "J25b#7", "N24#7", "N24#8", "M26#6"], "Every integer n>1 is a unique product of primes (fundamental theorem of arithmetic); there are infinitely many primes; p | a² ⇒ p | a."],
    ["G14", "Counting formulas", ["M26#5", "J25b#5", "N25#5", "N24#6", "M24#6", "N25#6", "J25#5", "M25#5"], "Repeats n!/(p!q!): PEPPER 60, STRESS 120, SUCCESS 7!/(3!2!). Round table (n−1)!: 7 people 720. Necklace (n−1)!/2: 7 beads 360. Block together: 4 men of 10 → 4!·6!. Committee C(6,3)·C(7,4)=700. 10 points, 4 collinear: 45−6+1 = 40."],
    ["G15", "Euler graphs", ["N25#17", "J25#18", "M26#19", "M26#18"], "Euler circuit ⇔ connected and every vertex has even degree. A circuit is a closed walk with no repeated edge. A tree with more than two vertices is not Eulerian."],
    ["G16", "Handshaking and odd vertices", ["J24#17", "N24#20", "M26#17"], "Σ deg(v) = 2|E| for undirected graphs, so the number of odd-degree vertices is even."],
    ["G17", "Complete graphs", ["N24#19", "N25#18", "J25#17", "N24#17"], "Kₙ has n(n−1)/2 edges: K₅ → 10, K₉ → 36. Complete = exactly one edge between each pair of distinct vertices."],
    ["G18", "Relations", ["J24#1", "J25b#3", "N25#1", "N25#4", "M26#3", "N24#3", "M26#2"], "Equivalence = reflexive + symmetric + transitive. {(1,1),(2,2),(3,3)} on {1,2,3} is an equivalence relation. M_R = M_Rᵀ ⇔ symmetric. Every partition gives an equivalence relation."],
    ["G19", "Functions", ["M24#4", "M25#4", "N25#2", "N24#1", "M24#3", "J24#3", "J25b#4", "J25#4", "N25#3"], "Bijections compose to a bijection; (g∘f)⁻¹ = f⁻¹∘g⁻¹; onto∘onto is onto; f=2x+3, g=3x+2 ⇒ f∘g = 6x+7; f(x)=3x−7 ⇒ f⁻¹(y) = (y+7)/3; x+5 on N is injective, not surjective."],
    ["G20", "Integral domain and field", ["M26#14", "N25#15", "M24#15"], "Integral domain = commutative ring with unity and no zero divisors. Every finite integral domain is a field."],
    ["G21", "Induction", ["J24#11", "N25#12", "J25#12"], "Base case, assume P(k), prove P(k+1); used for positive integers; 3²ⁿ−1 is divisible by 8."],
    ["G22", "Coding theory", ["J24#15", "N25#16", "M26#15"], "d_min ≥ k+1 detects k errors; d_min ≥ 2k+1 corrects k (d_min = 5 corrects 2); parity digits added to the message give linear block (group) codes."],
    ["G23", "Sets and power sets", ["N24#2", "M25#1", "M25#2", "M24#1", "J25#1", "J25b#1", "M26#1", "N24#4"], "|P(A)| = 2^|A| (64 for 6 elements); P({a,{b}}) = {∅,{a},{{b}},{a,{b}}}; A−B = B−A iff A = B; A∩(B∪A) = A; A−(B∩C) = (A−B)∪(A−C); {1,{2},4} ≠ {1,2,4}."],
    ["G24", "Logic equivalences and inference", ["N25#9", "N25#11", "M26#10", "M26#11", "M26#12", "J24#10", "J24#12", "M24#11", "J25b#10", "N24#11"], "p→q ≡ ¬p∨q; p∧(p→q) ≡ p∧q; ¬(A∧B) ≡ ¬A∨¬B; absorption p∨(p∧q) ≡ p; inconsistent premises: their conjunction implies a contradiction; proof by contradiction is not a direct proof."],
    ["G25", "Relation x+y>10 on {3,4,5}", ["J24#4", "M25#3"], "No pair has x+y > 10, so R is the empty relation."]
  ],
  cn: [
    ["K1", "Subnet arithmetic", ["M26#5", "N25#5", "N25#6", "N25#7", "J25#5", "J25#6", "J25#7", "J25#8", "J25b#5", "J25b#6", "J25b#7", "J24#5", "J24#6", "J24#7", "J24#8", "Ja24#5", "Ja24#6", "Ja24#7", "Ja24#8", "N24#6", "M24#6", "M24#7", "Ja24#12", "J24#12"], "Usable hosts = 2^h − 2 (/26 → 62, /25 → 126, .240 → 14). Block = 256 − mask octet. Broadcast = all host bits 1 (192.168.1.255; 10.10.10.0/25 → .127; 132.168.16.4/20 → 132.168.31.255). 12 subnets of a Class C → 255.255.255.240. /23 into /27 → 16 subnets of 30 hosts. Class B = 16 network + 16 host bits; IPv4 ≈ 4 billion addresses."],
    ["K2", "Invalid IPv4 addresses", ["M26#6", "N24#5"], "Leading zeros (045, 01), more than four octets, and any octet above 255 are all errors: all four given addresses are wrong."],
    ["K3", "Mesh links", ["M26#3", "J24#3", "Ja24#3", "N24#1"], "Full mesh needs n(n−1)/2 links: 12 devices → 66, 6 devices → 15."],
    ["K4", "OSI layer jobs", ["M26#2", "N25#3", "M24#3", "J24#1", "Ja24#1", "N24#4", "J25#4"], "Data link: framing and error detection (chunks are frames). Transport: process-to-process delivery. Presentation: encryption. Headers are added going down the stack."],
    ["K5", "Routing protocols", ["M26#9", "M26#10", "M26#11", "N25#9", "N25#10", "N25#11", "J25#9", "J25#11", "J25#12", "J25b#9", "J25b#10", "J25b#11", "N24#9", "N24#10", "N24#11", "N24#12", "M24#9", "M24#10", "M24#11"], "Distance vector uses Bellman-Ford and talks to neighbours only; split horizon prevents loops. Link state floods LSAs and runs Dijkstra. BGP is path vector (EGP) and chooses by AS_PATH. EIGRP is Cisco, fast, metric bandwidth + delay. RIP max 15 hops; RIP v2 carries subnet information. A default route is used when nothing else matches."],
    ["K6", "Transmission media", ["M26#4", "N25#4", "J25b#3", "M24#4", "J24#4", "Ja24#4"], "Optical fibre: light, highest bandwidth, immune to EMI. Coaxial: about 100 kHz to 500 MHz. Local telephone uses guided media."],
    ["K7", "Telnet, ports and protocols", ["M26#20", "N24#20", "N25#19", "N25#20", "J25b#18", "J25#20", "M24#17", "M24#18", "J24#20", "Ja24#20"], "Telnet = remote login over TCP port 23. SMTP 25. Port addresses deliver to the right application; well-known ports (0–1023) identify servers. Email uses TCP."],
    ["K8", "UDP for real time", ["M26#17", "N24#17", "J25b#17", "N25#17"], "Real-time apps (VoIP, video, gaming) use UDP, usually with RTP. UDP is the connectionless transport protocol."],
    ["K9", "HTTP", ["M26#19", "N24#19", "J25#18", "J25b#19", "J25b#20"], "200 OK = success; GET requests data; HEAD gets only headers (metadata); a URL identifies and locates a resource."],
    ["K10", "CSMA", ["M26#13", "N24#13", "N25#13", "M24#13", "J25b#15"], "CSMA = sense before transmit. CSMA/CD on collision: stop, send a jam signal, wait a random backoff. CSMA/CA avoids collisions; RTS/CTS fixes the hidden terminal problem."],
    ["K11", "ARQ and sliding window", ["M26#14", "N24#16", "J25#15", "J25#16", "J25b#14", "M24#14", "M24#15", "J24#13", "Ja24#13", "Ja24#14"], "Sliding window sends several frames before an ACK; Stop-and-Wait has one in transit. Window n−1 → n−1 frames outstanding. Selective repeat window ≤ 2^(n−1). Flow control prevents receiver-buffer overflow. Sliding window works in full duplex."],
    ["K12", "HDLC", ["M26#15", "N25#14", "M24#16", "J25b#16"], "High-level Data Link Control is bit-oriented; flag 01111110 marks the start and end of a frame; I-frames carry user data."],
    ["K13", "Error detection and correction", ["M26#16", "N25#16", "J25#13", "J25#14", "J25b#13", "N24#15", "J24#17", "Ja24#17"], "CRC is modulo-2 division; (1+x) as a factor of G(x) detects odd numbers of errors. Hamming codes correct single-bit errors only. Wrong parity → error detected. Hamming distance 101010 vs 100100 = 3."],
    ["K14", "Email and DNS", ["M26#18", "N25#18", "J25#17", "M24#20"], "SMTP sends; POP3/IMAP retrieve. DNS resolves names to IP addresses; an authoritative server stores a domain's records."],
    ["K15", "TCP", ["J25#19", "N24#18", "J24#9", "Ja24#9", "J24#18", "Ja24#18", "J24#19", "Ja24#19"], "TCP is reliable: it retransmits lost packets. Packets of the same session may take different paths in both TCP and UDP. connect() succeeds once listen() has run, even before accept()."],
    ["K16", "Network devices and types", ["M26#1", "M26#8", "N25#1", "N25#2", "N25#8", "J25b#1", "J25b#8", "N24#3", "N24#8", "M24#1", "M24#5", "M24#8", "J24#10", "Ja24#10", "J24#11", "Ja24#11"], "Hub = multiport repeater (physical layer). Bridge = 2-port, data link, spanning tree avoids loops. Router: network layer, holds the NAT table. Gateway works at all layers. Repeater regenerates. ARP finds the MAC address for an IP. Home = LAN (or PAN), cable TV = MAN."],
    ["K17", "Topologies and switching", ["J24#2", "Ja24#2", "J25#2", "J25#3", "J25b#4", "M24#2", "N24#2"], "Token → ring topology. Central device → star. Circuit switching uses TDM and is always available end to end. Monitor and computer use simplex."],
    ["K18", "IPv6", ["M26#12", "N25#12", "J25#10", "J25b#12"], "128-bit addresses; ::1 loopback; supports unicast, multicast and anycast; 2001:db8::1 and 2001:db8:0:0:0:0:0:1 are both valid."]
  ],
  fla: [
    ["H1", "Halting states of a TM", ["J25b#16", "N24#16", "J25#15"], "Halting states are accept and reject."],
    ["H2", "L and its complement both RE", ["J24#17", "J25#19", "M26#17"], "If L and L̄ are recursively enumerable then L is recursive."],
    ["H3", "Decidability", ["N23#17", "N24#17", "M25#17", "N23#20", "J24#20", "N23#19", "N23#18", "N25#14"], "A problem with an algorithm is decidable; with none, undecidable. The halting problem is undecidable but recursively enumerable. L is decidable iff some TM halts on every input. A universal TM can be written."],
    ["H4", "Closure properties", ["M25#16", "N25#15", "N24#6", "M24#12", "N25#6", "J24#19"], "RE languages are closed under union and intersection; CFLs are not closed under intersection; concatenation is associative but not commutative; {ε} is its identity."],
    ["H5", "ID and configuration", ["M26#15", "J24#14", "J25b#14", "J24#11", "M26#11", "N25#10"], "TM ID = present state + input still to process. PDA configuration = (state, unread input, stack)."],
    ["H6", "PDA basics", ["N24#12", "M25#9", "M26#12", "J24#10", "M26#9", "N24#11", "M25#13", "J25#10", "N24#9", "J25b#10", "J24#9", "N25#9", "N25#11", "N25#12", "M26#10", "M25#7", "M24#9", "J24#12", "J25b#11", "N24#5"], "Z0 is the initial stack symbol. DPDA: no state has two moves for the same input and stack symbol. A PDA accepts by final state or empty stack. A PDA is an NFA plus a stack and accepts exactly the CFLs. A PDA with two stacks equals a TM."],
    ["H7", "Chomsky hierarchy", ["N25#5", "M24#15", "M26#18", "M25#11", "J24#6", "J24#7", "N24#8", "J24#18", "M24#10", "M25#10", "J25b#9", "J25#11"], "Type 3 regular (FA), Type 2 CFL (PDA), Type 1 CSL (LBA), Type 0 RE (TM). CFL ⊂ CSL ⊂ Recursive ⊂ RE."],
    ["H8", "Chomsky normal form", ["N23#5", "N25#7", "M24#8", "J24#8", "M25#12", "J25#8"], "CNF: A→BC or A→a. S→AAS (three variables) and A→aa are not CNF."],
    ["H9", "Greibach normal form", ["M26#5", "J25b#7"], "GNF: A→aα, a terminal followed by variables."],
    ["H10", "Ambiguity and parse trees", ["N23#6", "M24#6", "M25#15", "M26#8", "N25#8", "J25b#6", "M24#11", "M26#7"], "Ambiguous = two or more parse trees (or leftmost derivations) for some string. Yield = leaves read left to right; leaves are terminals; internal nodes are variables."],
    ["H11", "Grammar simplification", ["M24#7", "J25b#5", "M25#8", "M25#14"], "Remove null, unit and useless productions. Removing non-reachable states is not a grammar-simplification step."],
    ["H12", "DFA and NFA basics", ["M26#1", "M26#3", "M26#4", "N24#4", "N24#2", "N24#3", "M24#3", "N23#2", "N23#11", "M25#4", "M25#3", "M25#2", "J25b#2", "J25b#8", "J25#1", "J25#4", "J25#7", "M24#2", "N25#2", "N25#1", "J24#4", "N25#4", "N24#1"], "NFA with N states → DFA with at most 2^N. NFA, ε-NFA and DFA have the same power. DFA δ: Q×Σ→Q. Minimise by merging equivalent states. Reverse a DFA: swap start and final."],
    ["H13", "Regular expressions", ["N23#1", "N23#3", "J24#1", "J24#3", "N25#3", "M25#1", "J25#6", "J25b#3", "M26#6", "J25#9"], "(x+y)* = (x*y*)*; (R*)⁺ = R*; (ab)* ≠ a*b*; odd number of 1s: 1(11)*; (a+b)(a+b)* = all non-empty strings; (0+1)*0(0+1)*0(0+1)* = at least two 0s."],
    ["H14", "Turing machine basics", ["M24#13", "M24#14", "M24#16", "N24#14", "N24#15", "N23#15", "N23#16", "J24#13", "J24#15", "J24#16", "J25b#13", "J25b#15", "M26#13", "M26#14", "M26#16", "M25#18", "M25#20"], "TM has an infinite tape and 7 components (Q,Σ,Γ,δ,q0,B,F); Γ = tape alphabet; NTM and multi-head TM have the same power as a TM; a TM beats an FSM because it can remember arbitrarily long strings."],
    ["H15", "P, NP and NP-complete", ["N24#18", "N24#19", "N24#20", "M24#17", "M24#19", "M24#20", "M25#5", "M25#6", "M25#19", "J25b#17", "J25b#19", "N25#16", "N25#17", "N25#19", "N25#20", "M26#19", "M26#20"], "NP = verifiable in polynomial time (NTM in polynomial time). SAT, CNF-SAT, TSP, subset sum are NP-complete; shortest path is in P. Every NP-complete problem is NP-hard and in NP. If P≠NP then NP-complete ∩ P = ∅. Prove NP-completeness by polynomial-time reduction."],
    ["H16", "PCP and MPCP", ["N25#18", "J25b#18", "M24#18"], "PCP is an undecidable decision problem. MPCP forces the sequence to start with the first tile."],
    ["H17", "Universal Turing machine", ["N25#13", "N24#13", "J25#20"], "A universal TM simulates any other TM; building one is possible."]
  ]
};
// The topic chip on each question = syllabus unit
const UNIT_RULES = {
  cn: [[5, /tcp|udp|port|http|smtp|pop3|imap|dns|email|telnet|rtp|url|application|connect\(|transport layer/i],
       [4, /csma|aloha|hdlc|arq|window|hamming|crc|parity|frame|token bucket|token ring|flow control|collision|silly/i],
       [3, /rout|rip|ospf|bgp|eigrp|dijkstra|bellman|link-state|link state|ipv6|egp|spanning tree|subnet-zero/i],
       [2, /ip address|subnet|mask|class|broadcast|ipv4|addresses|\bnat\b|\/2[0-9]|arp/i],
       [1, /./]],
  dm: [[5, /graph|vertex|vertices|\btree|edges|degree|chromatic|euler|circuit|bipartite|colour|handshaking|k₅|k₉|k4|k5|k9|hamilton/i],
       [4, /group|subgroup|cyclic|integral domain|identity element|hamming|code|parity|order of|α=|inverse of p=|sₙ|s₃|ring/i],
       [3, /dual|tautolog|converse|inverse of '|contrapositive|premise|inference|logical|negation|symbolic|absorption|induction|inconsistent|proof|→|rule p|disjunctive|¬/i],
       [2, /arrangement|ways|pigeon|committee|persons|students|gcd|lcm|prime|divid|same month|points|grades|necklace|round table|letters|words|exactly one language|integer/i],
       [1, /./]],
  fla: [[5, /\bnp\b|np-|polynomial|complexity|class p|pcp|halting problem|decid|algorithm|universal|p≠np|steps/i],
        [4, /turing|\btm\b|tape|halt|recursive/i],
        [3, /pda|pushdown|push down|stack|parsing|dpda|z0|z₀|configuration/i],
        [2, /grammar|cfg|cnf|greibach|parse|ambiguous|derivation|yield|production|context|chomsky|type [0-3]|nullable|null production|\bcfl\b/i],
        [1, /./]]
};
const UNIT_NAMES = { cn: ["Introduction to networks", "Addressing", "Routing", "Medium access control", "Transport and application"], dm: ["Sets, relations, functions", "Counting and number theory", "Logic and proof", "Groups and coding", "Graphs"], fla: ["Finite automata and regex", "Grammars", "Pushdown automata", "Turing machines", "Complexity and decidability"] };
// questions to leave out of the quiz (answer not readable from the scan, or the scan's figure is needed)
const SKIP = { dm: ["M24#18"], fla: ["J25#2", "J25#5", "J25#7", "N23#4", "N23#8", "N23#14"] };
const DM_LOW = ["M26#11", "M26#15", "M25#11", "M25#20", "J24#11", "J25#11"];
const OPTION_FIX = { "fla|J24#8": ["A→aB | a", "X→YZ | d", "X→ABC | ac", "A→aXY | a"], "fla|M25#14": ["S→aA, A→a | bb, B→a | bb", "S→aA, A→a, B→bb", "S→aA, A→a, B→A | bb", "S→aA, A→B, B→A, B→b"] };

function load(subj) {
  const files = readdirSync(new URL("mcq/", HERE)).filter((f) => f.startsWith(`mcq-${subj}-`)).sort();
  const out = [];
  for (const f of files) {
    const d = JSON.parse(readFileSync(new URL("mcq/" + f, HERE), "utf8"));
    const s = SHORT[d.paper];
    for (const [n, q, o, a] of d.q) {
      const id = `${s}#${n}`;
      let opts = OPTION_FIX[`${subj}|${id}`] || o.split("|");
      out.push({ paper: d.paper, s, n, id, q, opts, a, low: (d.low || []).includes(n) || (subj === "dm" && DM_LOW.includes(id)) });
    }
  }
  return out;
}

function build(subj, guideFile, guideId, extraFilter) {
  const all = load(subj).filter((x) => !(SKIP[subj] || []).includes(x.id) && (!extraFilter || extraFilter(x)));
  const problems = [];
  for (const x of all) if (x.opts.length !== 4 || !"ABCD".includes(x.a)) problems.push(`${x.id}: ${x.opts.length} options, answer ${x.a}`);
  const famOf = new Map();
  const fams = FAMILIES[subj];
  for (const [fid, , members] of fams) for (const m of members) { if (famOf.has(m) && famOf.get(m) !== fid) problems.push(`${m} is in ${famOf.get(m)} and ${fid}`); famOf.set(m, fid); }
  const papers = [...new Set(all.map((x) => x.paper))];
  // order papers oldest -> newest
  const order = ["Nov 2023", "Jan 2024", "May 2024", "Jul 2024", "Nov 2024", "May 2025", "Jul 2025", "Jul 2025 (Paper - 2)", "Nov 2025", "May 2026"];
  papers.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  const paperLabel = (p) => "PYQ " + p;
  const unitOf = (x) => UNIT_RULES[subj].find(([, re]) => re.test(x.q))[0];
  const questions = all.map((x) => ({ p: papers.indexOf(x.paper), n: x.n, q: x.q, o: x.opts, a: "ABCD".indexOf(x.a), unit: unitOf(x), ...(x.low ? { low: 1 } : {}), ...(famOf.has(x.id) ? { fam: famOf.get(x.id) } : {}) }));
  questions.sort((x, y) => y.p - x.p || x.n - y.n); // newest paper first
  const families = fams.map(([id, title, members, tip]) => {
    const ms = all.filter((x) => members.includes(x.id));
    const ps = [...new Set(ms.map((x) => x.paper))].sort((a, b) => order.indexOf(a) - order.indexOf(b));
    return { id, title, papers: ps.map(paperLabel), count: ps.length, questions: ms.length, tip, unit: ms.length ? unitOf(ms[0]) : 0 };
  }).filter((f) => f.count > 0).sort((a, b) => b.count - a.count || b.questions - a.questions);
  const unassigned = questions.filter((q) => !q.fam).length;
  const mcq = { papers: papers.map(paperLabel), units: UNIT_NAMES[subj], questions, families, note: "Part A is 20 one-mark MCQs. The papers print no answer key: every answer here was worked out by hand, and the ones marked “check” are less certain." };

  // write into the guide file
  const path = new URL(guideFile, GUIDES);
  const src = readFileSync(path, "utf8");
  const ctx = { window: { SEMPREP: { guides: {} } } };
  vm.runInNewContext(src, ctx);
  const g = ctx.window.SEMPREP.guides[guideId];
  g.mcq = mcq;
  const head = src.split("\n").filter((l) => l.startsWith("//")).join("\n");
  writeFileSync(path, `${head}\nwindow.SEMPREP = window.SEMPREP || { guides: {} };\nwindow.SEMPREP.guides[${JSON.stringify(guideId)}] = ${JSON.stringify(g, null, 2)};\n`);
  console.log(`${subj}: ${questions.length} questions from ${papers.length} papers, ${families.length} families, ${unassigned} not in a family, ${questions.filter((q) => q.low).length} marked check`);
  console.log(families.slice(0, 12).map((f) => `  ${f.count}/${papers.length} ${f.title}`).join("\n"));
  const byUnit = [1, 2, 3, 4, 5].map((u) => `${u}:${questions.filter((q) => q.unit === u).length}`).join("  ");
  console.log("  per unit " + byUnit);
  if (problems.length) { console.log("PROBLEMS:\n  " + problems.join("\n  ")); process.exit(1); }
}

build("dm", "gen-discrete-mathematics.js", "gen-discrete-mathematics");
build("fla", "gen-21csc301t.js", "gen-21csc301t");
build("cn", "gen-21csc302j.js", "gen-21csc302j");
