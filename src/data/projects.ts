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
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Completed",
    date: "2024",
  },
  {
    id: "proj-2",
    title: "Zero-Knowledge Authentication Protocol",
    category: "Protocol",
    description: "Architectural blueprint and proof-of-concept for a stateless, privacy-preserving session management system.",
    technologies: ["Circom", "SnarkJS", "Next.js"],
    imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "In Progress",
    date: "2024",
  },
  {
    id: "proj-3",
    title: "Reentrancy Threat Modeling Framework",
    category: "Case Study",
    description: "Deep dive analysis modeling state transition vulnerabilities across composable DeFi protocols.",
    technologies: ["Mythril", "Slither", "Markdown"],
    imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-4",
    title: "BinnaDev Fuzzing Harness toolkit",
    category: "Open Source",
    description: "A specialized invariant testing suite wrapper to rapidly bootstrap stateful fuzzing campaigns for EVM chains.",
    technologies: ["Echidna", "Medusa", "Foundry"],
    imageUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "In Progress",
    date: "2024",
  },
  {
    id: "proj-5",
    title: "Cross-Chain Bridge Validator",
    category: "Protocol",
    description: "Experimental trustless relayer architecture utilizing light clients and storage proofs.",
    technologies: ["Solidity", "Rust", "Hyperlane"],
    imageUrl: "https://images.pexels.com/photos/5282924/pexels-photo-5282924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "In Progress",
    date: "2024",
  },
  {
    id: "proj-6",
    title: "Yield Aggregator Vaults",
    category: "Experiment",
    description: "Automated compounder logic optimized for minimal gas consumption and slippage protection.",
    technologies: ["Solidity", "Hardhat"],
    imageUrl: "https://images.pexels.com/photos/18148932/pexels-photo-18148932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-7",
    title: "EVM Opcodes Visualizer",
    category: "Open Source",
    description: "A web-based debugging tool mapping Solidity code blocks to raw EVM operational codes.",
    technologies: ["React", "Ethers.js"],
    imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-8",
    title: "Governance Token Factory",
    category: "Protocol",
    description: "Modular factory for deploying customizable DAO tokens with built-in snapshotting and delegation.",
    technologies: ["Solidity", "OpenZeppelin"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Archived",
    date: "2022",
  },
  {
    id: "proj-9",
    title: "Oracle Manipulation Sandbox",
    category: "Case Study",
    description: "Interactive scenarios demonstrating the consequences of low-liquidity TWAP oracle reliance.",
    technologies: ["Foundry", "Uniswap V3"],
    imageUrl: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-10",
    title: "NFT Royalty Enforcer",
    category: "Experiment",
    description: "EIP-2981 implementation combined with marketplace blocking logic.",
    technologies: ["Solidity", "ERC721"],
    imageUrl: "https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Completed",
    date: "2023",
  },
  {
    id: "proj-11",
    title: "Smart Contract Honeypot Tracker",
    category: "Open Source",
    description: "Analytics tool tracking common honeypot patterns across mempools in real-time.",
    technologies: ["Node.js", "WebSockets"],
    imageUrl: "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-created-by-google-deepmind-and-represents-a-neural-network-a-type-of-ai-architecture-inspired-by-the-human-b.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "In Progress",
    date: "2024",
  },
  {
    id: "proj-12",
    title: "Layer 2 Rollup Sequencer Analysis",
    category: "Case Study",
    description: "Censorship resistance and MEV analysis of centralized sequencer models.",
    technologies: ["Python", "Pandas"],
    imageUrl: "https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-language-models-and-was-created-by-google-deepmind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Completed",
    date: "2024",
  }
];
