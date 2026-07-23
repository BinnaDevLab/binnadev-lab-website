import {
  Shield,
  Blocks,
  Code2,
  Server,
  GraduationCap,
  LayoutTemplate,
} from "lucide-react";

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: any; // Lucide icon
  capabilities: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "security",
    title: "Smart Contract Security",
    description:
      "Rigorous security audits and formal verification for complex protocols.",
    icon: Shield,
    capabilities: [
      "Protocol Auditing",
      "Invariant Testing",
      "Fuzzing Architecture",
      "Formal Verification Setup",
    ],
  },
  {
    id: "architecture",
    title: "Protocol Architecture",
    description:
      "System design for scalable, robust decentralized applications.",
    icon: Blocks,
    capabilities: [
      "Tokenomics Design",
      "Mechanism Design",
      "Gas Optimization",
      "Cross-chain Architecture",
    ],
  },
  {
    id: "development",
    title: "Smart Contract Development",
    description: "Production-grade Solidity and Vyper engineering.",
    icon: Code2,
    capabilities: [
      "DeFi Protocols",
      "NFT Infrastructure",
      "Custom AMMs",
      "Governance Systems",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Web3",
    description: "End-to-end development of decentralized applications.",
    icon: LayoutTemplate,
    capabilities: [
      "Next.js Frontends",
      "Ethers.js / Viem Integration",
      "Indexer Development",
      "Mobile Applications",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Engineering",
    description: "Reliable backend systems and node operations.",
    icon: Server,
    capabilities: [
      "MEV Searchers",
      "Custom RPC Nodes",
      "Relayer Infrastructure",
      "Data Pipelines",
    ],
  },
  {
    id: "education",
    title: "Technical Training",
    description: "Corporate workshops and engineering upskilling.",
    icon: GraduationCap,
    capabilities: [
      "Security Workshops",
      "Developer Onboarding",
      "Architecture Seminars",
      "Hackathon Mentorship",
      "Speaking Engagements",
    ],
  },
];
