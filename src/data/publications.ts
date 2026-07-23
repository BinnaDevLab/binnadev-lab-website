export interface Publication {
  id: string;
  title: string;
  type: "Lab Note" | "Field Report" | "Research Paper" | "RFC";
  summary: string;
  date: string;
  readTime: string;
  link: string;
  isExternal: boolean;
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "EVM Opcodes and the Illusion of Safety",
    type: "Research Paper",
    summary: "An analysis of low-level EVM execution flows and how high-level Solidity abstractions mask critical attack vectors.",
    date: "Oct 12, 2024",
    readTime: "14 min read",
    link: "#",
    isExternal: false,
  },
  {
    id: "pub-2",
    title: "Audit Field Report: Synthetix V3 Architecture",
    type: "Field Report",
    summary: "Key takeaways from our deep dive into the proxy architectural patterns deployed in modern modular DeFi protocols.",
    date: "Sep 05, 2024",
    readTime: "8 min read",
    link: "#",
    isExternal: true,
  },
  {
    id: "pub-3",
    title: "Lab Note: Fuzzing Invariants on Day One",
    type: "Lab Note",
    summary: "Why property-based testing should precede deployment scripts. A tactical guide to embedding security into the CI pipeline.",
    date: "Aug 22, 2024",
    readTime: "6 min read",
    link: "#",
    isExternal: false,
  },
  {
    id: "pub-4",
    title: "RFC 004: Standardizing Access Control Reusability",
    type: "RFC",
    summary: "A request for comments on a proposed interface standard for dynamic, role-based capability delegation.",
    date: "Jul 18, 2024",
    readTime: "12 min read",
    link: "#",
    isExternal: false,
  },
  {
    id: "pub-5",
    title: "The State of L2 Cross-Domain MEV",
    type: "Research Paper",
    summary: "Exploring theoretical and observed instances of maximal extractable value bridging across optimistic and ZK rollups.",
    date: "Jun 10, 2024",
    readTime: "18 min read",
    link: "#",
    isExternal: false,
  },
  {
    id: "pub-6",
    title: "Field Report: AMM Flash Loan Attacks",
    type: "Field Report",
    summary: "Post-mortem analysis of recent economic exploits utilizing flash loans to manipulate on-chain oracle pricing.",
    date: "May 14, 2024",
    readTime: "10 min read",
    link: "#",
    isExternal: true,
  },
  {
    id: "pub-7",
    title: "Lab Note: Secure Randomness on EVM",
    type: "Lab Note",
    summary: "A practical evaluation of Chainlink VRF versus blockhash alternatives for decentralized game mechanics.",
    date: "Apr 02, 2024",
    readTime: "5 min read",
    link: "#",
    isExternal: false,
  },
  {
    id: "pub-8",
    title: "RFC 003: Gas-Optimized Merkle Trees",
    type: "RFC",
    summary: "Proposing a new standard for off-chain computation verification aiming to reduce calldata costs by 40%.",
    date: "Mar 15, 2024",
    readTime: "9 min read",
    link: "#",
    isExternal: false,
  },
  {
    id: "pub-9",
    title: "Smart Contract Upgradability Patterns",
    type: "Research Paper",
    summary: "A comparative study of Transparent Proxies, UUPS, and Diamond patterns, focusing on storage collision risks.",
    date: "Feb 28, 2024",
    readTime: "22 min read",
    link: "#",
    isExternal: false,
  },
  {
    id: "pub-10",
    title: "Field Report: Governance Token Distribution",
    type: "Field Report",
    summary: "Observations on sybil-resistant airdrop mechanics and the effectiveness of merkle-proof claiming systems.",
    date: "Jan 12, 2024",
    readTime: "7 min read",
    link: "#",
    isExternal: true,
  },
  {
    id: "pub-11",
    title: "Lab Note: Ethers.js v6 Migration",
    type: "Lab Note",
    summary: "Key breaking changes and upgrade paths for DApp developers migrating to the latest Ethers library.",
    date: "Dec 05, 2023",
    readTime: "4 min read",
    link: "#",
    isExternal: false,
  },
  {
    id: "pub-12",
    title: "RFC 002: Modular Vault Standard",
    type: "RFC",
    summary: "Drafting an extension to ERC-4626 to better support multi-strategy yield aggregation natively.",
    date: "Nov 18, 2023",
    readTime: "11 min read",
    link: "#",
    isExternal: false,
  }
];
