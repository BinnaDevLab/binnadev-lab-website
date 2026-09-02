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
    title: "Libertas Alpha Academy Certification Protocol",
    category: "Protocol",
    description:
      "A decentralized certification system built around soulbound ERC1155 credentials, separating Courses from Cohorts, and introducing cryptographic membership verification via Merkle roots.",
    technologies: ["Solidity", "Foundry", "ERC1155", "PostgreSQL"],
    imageUrl: "/images/shared/shared-asset-15.jpeg",
    link: "https://github.com/Ikenga-Software-Solutions-LTD/libertasalpha-academy-certification-contracts/blob/main/README.md",
    status: "Completed",
    date: "2026",
  },
  {
    id: "proj-2",
    title: "MilestoneCrowdfundUpgradeable",
    category: "Protocol",
    description:
      "A defensive escrow protocol for milestone-based crowdfunding with a 10,000 BPS accounting boundary and dynamic proportional abandonment refunds.",
    technologies: ["Solidity", "Foundry", "UUPS", "ERC-4337"],
    imageUrl: "/images/shared/shared-asset-7.jpeg",
    link: "https://polygonscan.com/address/0xf83aaB5f1fAA1a7a74AD27E2f8058801EaA31393",
    status: "Completed",
    date: "2026",
  },
  {
    id: "proj-3",
    title: "Libertas Alpha Water Project Treasury",
    category: "Protocol",
    description:
      "A Micro Venture Initiative treasury orchestrating continuous O(1) yield accounting and split-vault capital recovery vs. operational surplus.",
    technologies: ["Solidity", "ERC721", "EIP-712", "MultiSig"],
    imageUrl: "/images/shared/shared-asset-6.jpeg",
    link: "https://github.com/LibertasAlpha/lawp-treasury-contracts/blob/main/README.md",
    status: "Completed",
    date: "2026",
  },
  {
    id: "proj-4",
    title: "Decentralized Stablecoin Smart Contract",
    category: "Experiment",
    description:
      "A minimal, exogenous, crypto-backed stablecoin protocol built with a strong emphasis on mathematical solvency and protocol safety.",
    technologies: ["Solidity", "Foundry", "Stateful Fuzzing", "ERC-20"],
    imageUrl: "/images/shared/shared-asset-4.jpeg",
    link: "https://x.com/BinnaDev/status/1995555619747614984",
    status: "Completed",
    date: "2025",
  },
];
