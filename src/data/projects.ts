export interface Project {
  id: string;
  title: string;
  category: "Experiment" | "Case Study" | "Open Source" | "Protocol";
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  status: "Completed" | "In Progress" | "Archived";
  date: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "DeFi AMM Arbitrage Simulator",
    category: "Experiment",
    description: "A sandbox environment demonstrating Flash Loan mechanics and MEV extraction vectors on constant product market makers.",
    technologies: ["Solidity", "Foundry", "Ethers.js"],
    imageUrl: "/images/shared/shared-asset-7.jpeg",
    status: "Completed",
    date: "2024",
  },
  {
    id: "proj-2",
    title: "Zero-Knowledge Authentication Protocol",
    category: "Protocol",
    description: "Architectural blueprint and proof-of-concept for a stateless, privacy-preserving session management system.",
    technologies: ["Circom", "SnarkJS", "Next.js"],
    imageUrl: "/images/shared/shared-asset-5.jpeg",
    status: "In Progress",
    date: "2024",
  },
  {
    id: "proj-3",
    title: "Reentrancy Threat Modeling Framework",
    category: "Case Study",
    description: "Deep dive analysis modeling state transition vulnerabilities across composable DeFi protocols.",
    technologies: ["Mythril", "Slither", "Markdown"],
    imageUrl: "/images/shared/shared-asset-10.jpeg",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-4",
    title: "BinnaDev Fuzzing Harness toolkit",
    category: "Open Source",
    description: "A specialized invariant testing suite wrapper to rapidly bootstrap stateful fuzzing campaigns for EVM chains.",
    technologies: ["Echidna", "Medusa", "Foundry"],
    imageUrl: "/images/projects/projects-asset-1.jpeg",
    status: "In Progress",
    date: "2024",
  },
  {
    id: "proj-5",
    title: "Cross-Chain Bridge Validator",
    category: "Protocol",
    description: "Experimental trustless relayer architecture utilizing light clients and storage proofs.",
    technologies: ["Solidity", "Rust", "Hyperlane"],
    imageUrl: "/images/projects/projects-asset-2.jpeg",
    status: "In Progress",
    date: "2024",
  },
  {
    id: "proj-6",
    title: "Yield Aggregator Vaults",
    category: "Experiment",
    description: "Automated compounder logic optimized for minimal gas consumption and slippage protection.",
    technologies: ["Solidity", "Hardhat"],
    imageUrl: "/images/projects/projects-asset-3.jpeg",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-7",
    title: "EVM Opcodes Visualizer",
    category: "Open Source",
    description: "A web-based debugging tool mapping Solidity code blocks to raw EVM operational codes.",
    technologies: ["React", "Ethers.js"],
    imageUrl: "/images/shared/shared-asset-11.jpeg",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-8",
    title: "Governance Token Factory",
    category: "Protocol",
    description: "Modular factory for deploying customizable DAO tokens with built-in snapshotting and delegation.",
    technologies: ["Solidity", "OpenZeppelin"],
    imageUrl: "/images/shared/shared-asset-1.jpeg",
    status: "Archived",
    date: "2022",
  },
  {
    id: "proj-9",
    title: "Oracle Manipulation Sandbox",
    category: "Case Study",
    description: "Interactive scenarios demonstrating the consequences of low-liquidity TWAP oracle reliance.",
    technologies: ["Foundry", "Uniswap V3"],
    imageUrl: "/images/projects/projects-asset-4.jpeg",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-10",
    title: "NFT Royalty Enforcer",
    category: "Experiment",
    description: "EIP-2981 implementation combined with marketplace blocking logic.",
    technologies: ["Solidity", "ERC721"],
    imageUrl: "/images/projects/projects-asset-5.jpeg",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-11",
    title: "Smart Contract Honeypot Tracker",
    category: "Open Source",
    description: "Analytics tool tracking common honeypot patterns across mempools in real-time.",
    technologies: ["Node.js", "WebSockets"],
    imageUrl: "/images/projects/projects-asset-6.jpeg",
    status: "In Progress",
    date: "2024",
  },
  {
    id: "proj-12",
    title: "Layer 2 Rollup Sequencer Analysis",
    category: "Case Study",
    description: "Censorship resistance and MEV analysis of centralized sequencer models.",
    technologies: ["Python", "Pandas"],
    imageUrl: "/images/projects/projects-asset-7.jpeg",
    status: "Completed",
    date: "2024",
  }
];
