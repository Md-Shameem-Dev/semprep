// Computer Networks (21CSC302J): Part B / Part C questions from the 8 most recent papers on THE HELPER
// (Jan 2024 – May 2026, all in the current 5 × 8 either/or format), read by hand from the scanned PDFs.
// Entry: [number, marks, [topic numbers], condensed text]. Older papers (May 2022, Jun 2023, Dec 2023) are left out.
export const TOPICS = [
  ["C1", "Network types: LAN, MAN, WAN, PAN", 1],
  ["C2", "OSI and TCP/IP reference models", 1],
  ["C3", "Circuit switching vs packet switching", 1],
  ["C4", "Transmission media (guided and unguided)", 1],
  ["C5", "Network topologies", 1],
  ["C6", "IPv4 classes and binary / dotted-decimal notation", 2],
  ["C7", "Subnetting: FLSM and VLSM", 2],
  ["C8", "Classless addressing (CIDR) and address blocks", 2],
  ["C9", "Forwarding: next-hop and route methods", 3],
  ["C10", "IPv6: address, packet format, transition", 3],
  ["C11", "Distance vector routing (Bellman-Ford, RIP, count to infinity)", 3],
  ["C12", "Link state routing (Dijkstra, OSPF LSAs)", 3],
  ["C13", "Routing protocols compared: RIP, OSPF, EIGRP, BGP", 3],
  ["C14", "Error detection: parity, VRC and CRC", 4],
  ["C15", "Flow and error control: ARQ and sliding window", 4],
  ["C16", "Hamming code", 4],
  ["C17", "Random access: CSMA/CD and CSMA/CA", 4],
  ["C18", "IEEE 802.11 and 802.5 MAC", 4],
  ["C19", "TCP: segment format, handshake, transport functions", 5],
  ["C20", "TCP vs UDP", 5],
  ["C21", "Email: SMTP, POP3, IMAP, MIME", 5],
  ["C22", "DNS, HTTP and FTP", 5],
  ["C23", "Bandwidth, latency and delay", 1],
  ["C24", "Network Address Translation (NAT)", 2],
  ["C25", "Network devices: hub, switch, bridge, router", 1],
  ["C26", "Congestion control", 5]
];

const PATTERN = "Part A 20×1 MCQ (OMR); Part B 5×8 either/or, one per unit (Q21–Q25); Part C 1×15 choose one of Q26/Q27; 75 marks, 3 hours";

export const PAPERS = [
  ["PYQ Jan 2024", [
    ["21a", 8, [5], "What is topology; types of topologies with examples"],
    ["21b", 8, [2], "Role of the network layer in the OSI model and its working"],
    ["22a", 8, [8], "ISP block 190.100.0.0/16 for 3 customer groups (64×256, 128×128, 128×64): sub-blocks in slash notation, addresses left"],
    ["22b", 8, [7], "Divide 200.1.2.0 into 4 subnets: subnet IPs, addresses, hosts, first/last host, direct and limited broadcast"],
    ["23a", 8, [12], "Link state routing with an example; relevance of the age field in a link state packet"],
    ["23b", 8, [13], "Routing using BGP"],
    ["24a", 8, [17], "Collision avoidance in CSMA/CA and its strategies"],
    ["24b", 8, [18], "Token management in IEEE 802.5"],
    ["25a", 8, [21], "Email format and mailing system architecture"],
    ["25b", 8, [19], "TCP packet format and fields; data transfer with the handshake"],
    ["26", 15, [2], "TCP/IP model with a neat diagram"],
    ["27", 15, [14], "CRC: 3-bit CRC for M(x)=x⁵+x⁴+x with G(x)=x³+x²+1"]
  ]],
  ["PYQ May 2024", [
    ["21a", 8, [2], "Layers of the TCP/IP suite and data flow between two hosts across the internet (figure)"],
    ["21b", 8, [3], "Why circuit switching needs end-to-end addressing at setup/teardown and packet switching during data transfer"],
    ["22a", 8, [8], "CIDR: number of addresses for 192.168.100.0/23 and /25"],
    ["22b", 8, [25], "Switch filtering table vs router routing table"],
    ["23a", 8, [7, 8], "Classful and classless subnetting with examples"],
    ["23b", 8, [13], "EIGRP protocol with diagrams"],
    ["24a", 8, [17], "CSMA/CA collision-avoidance strategies"],
    ["24b", 8, [14, 16], "Error detection strategies in the data link layer"],
    ["25a", 8, [20], "Compare the working of TCP and UDP"],
    ["25b", 8, [22], "Application layer protocols: HTTP and DNS"],
    ["26", 15, [12], "Dijkstra shortest path tree and forwarding table for node A; advantages over distance vector"],
    ["27", 15, [11], "Bellman-Ford convergence table; count-to-infinity after link failure; split horizon with poison reverse"]
  ]],
  ["PYQ Jul 2024", [
    ["21a", 8, [5], "Types of network topologies"],
    ["21b", 8, [2], "ISO-OSI model with neat diagram"],
    ["22a", 8, [14, 16], "Error detection and correction mechanisms"],
    ["22b", 8, [18], "MAC sub-layer protocol and frame structure of IEEE 802.11"],
    ["23a", 8, [26], "Congestion control algorithms"],
    ["23b", 8, [11], "Distance vector routing with an example"],
    ["24a", 8, [20], "Notes on UDP"],
    ["24b", 8, [19], "Functions of the transport layer with an example"],
    ["25a", 8, [22], "Types of DNS records"],
    ["25b", 8, [21], "IMAP and MIME with an example"],
    ["26", 15, [19], "TCP three-way handshake mechanism"],
    ["27", 15, [22], "Role of DNS in a network and its components"]
  ]],
  ["PYQ Nov 2024", [
    ["21a", 8, [3], "Circuit switching vs packet switching"],
    ["21b", 8, [25], "Different network devices used in computer networks"],
    ["22a", 8, [8], "First and last address of blocks 14.12.72.8/24 and 200.107.16.17/18"],
    ["22b", 8, [24], "NAT using a pool of IP addresses and using both IP and port addresses"],
    ["23a", 8, [13], "OSPF link state advertisements: point-to-point link; designated router advertising a network"],
    ["23b", 8, [11], "Distance vector (RIP): routing loop after link failure R1–R2 (count to infinity); prevention mechanisms"],
    ["24a", 8, [17], "Collision detection and resolution in CSMA/CD"],
    ["24b", 8, [15], "Go-Back-N and Selective Repeat sliding window ARQ: working and trade-offs"],
    ["25a", 8, [20], "Compare TCP and UDP"],
    ["25b", 8, [22], "Types of DNS records and their role in DNS resolution"],
    ["26", 15, [7], "Subnet 192.168.1.0/24 for 2×30 and 3×10 hosts; 5 subnets of 10.0.0.0/24 with 20 hosts each: mask and ranges"],
    ["27", 15, [11], "Distance vector (RIP) with routers A, B, C and new router D: routing table updates, routes to D, algorithm"]
  ]],
  ["PYQ Jul 2025", [
    ["21a", 8, [5], "Network topologies in detail with neat sketch"],
    ["21b", 8, [4], "Twisted pair vs coaxial cable: construction, usage, performance"],
    ["22a", 8, [24], "Network Address Translation (NAT): types and functions"],
    ["22b", 8, [25], "Network devices and their applications"],
    ["23a", 8, [12, 11], "Advantages of link state over distance vector routing: scalability, convergence"],
    ["23b", 8, [10], "Security features of IPv6 and how they improve on IPv4"],
    ["24a", 8, [14], "Vertical redundancy check (even parity) for data words 1101, 1010, 0111, 0001; final transmitted message"],
    ["24b", 8, [15], "ARQ protocol for error control; how it ensures reliability; types of ARQ"],
    ["25a", 8, [20], "Differentiate TCP and UDP"],
    ["25b", 8, [22], "Role of DNS and how it gives users access to websites"],
    ["26", 15, [2], "Sketch the OSI layers, role of each layer, how layers interact"],
    ["27", 15, [20], "Video call: protocol used (UDP/RTP), why better than TCP for real time, handling packet loss"]
  ]],
  ["PYQ Jul 2025 (Paper - 2)", [
    ["21a", 8, [5], "Star vs mesh topology for a company: structure, advantages, disadvantages, recommend one"],
    ["21b", 8, [4], "Unguided (wireless) transmission media for rural internet: properties, performance, best choice"],
    ["22a", 8, [6], "Convert binary IP addresses to dotted decimal; find class and default subnet mask"],
    ["22b", 8, [7], "FLSM: 192.168.10.0 into exactly 4 subnets: new mask, hosts per subnet, table of network ID, first/last host, broadcast"],
    ["23a", 8, [9], "Route method and next-hop forwarding: differences with diagram"],
    ["23b", 8, [11], "Distance vector routing: working principles with example and diagrams"],
    ["24a", 8, [16], "Hamming code: check bits for a 16-bit message; transmitted pattern for 1101001100110101 (even parity)"],
    ["24b", 8, [14], "CRC remainder for M=1100101110 with divisor x⁴+x²+x+1; how the receiver checks for errors"],
    ["25a", 8, [19, 20], "Transmission mechanism of UDP and TCP"],
    ["25b", 8, [22], "HTTP and FTP: working principles and key features"],
    ["26", 15, [2], "Data flow through each ISO-OSI layer and the key function of every layer"],
    ["27", 15, [15], "ARQ protocols for error control and reliability; types of ARQ (Stop-and-Wait, Go-Back-N, Selective Repeat)"]
  ]],
  ["PYQ Nov 2025", [
    ["21a", 8, [1], "Compare LAN, MAN, WAN and PAN: coverage, usage, examples"],
    ["21b", 8, [23], "Define bandwidth and latency; components of delay in data communication"],
    ["22a", 8, [8], "Classless address 167.199.170.82/27: number of addresses, first and last address"],
    ["22b", 8, [8, 6], "Classful vs classless IPv4 addressing; advantages of classless"],
    ["23a", 8, [12], "Dijkstra's algorithm in link state routing with an example"],
    ["23b", 8, [10], "Differences between IPv4 and IPv6 addressing; why IPv6 is essential"],
    ["24a", 8, [15], "Working of sliding window flow control; how it improves throughput"],
    ["24b", 8, [14], "Working of CRC in error detection with an example"],
    ["25a", 8, [19, 20], "TCP vs UDP: reliability, connection establishment, applications"],
    ["25b", 8, [21], "Email protocols SMTP, POP3, IMAP and their roles"],
    ["26", 15, [2], "OSI reference model: role of each layer; compare with the TCP/IP suite"],
    ["27", 15, [13], "RIP (v1 and v2) vs OSPF; why OSPF is preferred in large networks"]
  ]],
  ["PYQ May 2026", [
    ["21a", 8, [3], "Differentiate packet switching and circuit switching: data transmission and resource allocation, with diagram"],
    ["21b", 8, [4], "Compare twisted pair, coaxial cable and optical fibre (data rate, distance, noise); best for high-speed long distance"],
    ["22a", 8, [6], "Convert four IP addresses from binary to dotted-decimal and find the class of each"],
    ["22b", 8, [8], "How classless addressing (CIDR) improves address utilisation over classful; example of aggregating networks"],
    ["23a", 8, [11], "Distance vector routing with the Bellman-Ford algorithm; how routes are reconstructed, with examples"],
    ["23b", 8, [10], "IPv6 features, packet format and IPv4-to-IPv6 transition, with diagram"],
    ["24a", 8, [17], "How collisions are handled in CSMA/CD and prevented in CSMA/CA, with labelled diagram"],
    ["24b", 8, [14], "CRC with G(x)=x³+x+1 (1011) for data 1101011011: CRC bits; check received 1101011011101"],
    ["25a", 8, [19], "TCP segment format and fields; data transfer with the handshake (connection setup and teardown)"],
    ["25b", 8, [21], "Email format and architecture of a mail delivery system with its protocols"],
    ["26", 15, [7], "VLSM of 10.50.16.0/22 for 250, 90, 40, 18, 8, 3 hosts: network ID, prefix, mask, host range, broadcast; static vs dynamic routing"],
    ["27", 15, [12], "Dijkstra link-state: shortest path tree from router F, iteration table, final paths and costs"]
  ]]
];

export const LABELS = PAPERS.map(([l]) => l);

// Same shape the app's extractor returns (see EXTRACT_SCHEMA in lib/gen.js).
export function asExtraction() {
  const unitOf = new Map(TOPICS.map(([id, , u]) => [id, u]));
  return {
    topicList: TOPICS.map(([id, name, unit]) => ({ id, name, unit })),
    papers: PAPERS.map(([label, qs]) => ({
      label, pattern: PATTERN, partBQuestions: 5, partBMarksEach: 8, partBEitherOr: "yes",
      questions: qs.map(([number, marks, ids, text]) => ({
        number, part: parseInt(number, 10) >= 26 ? "C" : "B", marks,
        unit: unitOf.get("C" + ids[0]) || 1,
        topicIds: ids.map((n) => "C" + n), text
      }))
    }))
  };
}

export const SUBJECT = {
  id: "gen-21csc302j",
  key: "21CSC302J",
  subject: { name: "Computer Networks", code: "21CSC302J", short: "CN", credits: 4, source: "https://srmhelper.pro/subjects/computer-networks/" },
  units: ["Introduction to Networks", "Addressing", "Routing", "Medium Access Control", "Transport and Application Layer Protocols"],
  year: 3, sem: 5,
  helper: { sem: 5, name: "Computer Networks" }
};
