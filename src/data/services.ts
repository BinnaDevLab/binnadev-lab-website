import { LucideIcon,
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
  problem: string;
  description: string;
  icon: LucideIcon; // Lucide icon
  capabilities: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "smart-contracts",
    title: "Smart Contract Development",
    problem: "When the rules matter.",
    description: "For systems where ownership, permissions, state transitions, financial logic, and irreversible actions must be absolutely correct. We don't just write code; we enforce systemic invariants.",
    icon: Code2,
    capabilities: [
      "State Machine Design",
      "Cryptoeconomic Invariants",
      "Access Control Architecture",
      "Gas-Optimized Implementation"
    ],
  },
  {
    id: "full-stack",
    title: "Full-Stack Web3",
    problem: "When the product needs more than a contract.",
    description: "From protocol-level smart contracts and robust backend relayers to seamless web and mobile interfaces. We architect the entire decentralized application stack.",
    icon: LayoutTemplate,
    capabilities: [
      "Hybrid Web2/Web3 Architectures",
      "Indexer & Relayer Development",
      "Next.js Frontends",
      "Account Abstraction Integration"
    ],
  },
  {
    id: "training",
    title: "Technical Training & DevRel",
    problem: "When the team needs deeper capability.",
    description: "Corporate workshops, engineering upskilling, technical enablement, and developer relations designed for teams that need to elevate their architectural rigor.",
    icon: GraduationCap,
    capabilities: [
      "Security Workshops",
      "Adversarial Thinking",
      "Architecture Seminars",
      "Developer Onboarding"
    ],
  },
  {
    id: "security",
    title: "Protocol Architecture & Security",
    problem: "When failure is not an option.",
    description: "Threat modelling, architecture review, smart contract security, adversarial analysis, and deep audit work. We look for edge cases in complex mathematical and economic models.",
    icon: Shield,
    capabilities: [
      "Threat Modelling",
      "Defensive Escrow Design",
      "Invariant Testing",
      "Incident Response Architecture"
    ],
  },
  {
    id: "custom",
    title: "Endless Possibilities",
    problem: "Bring us the problem.",
    description: "We are available for difficult technical problems that require serious engineering thinking. If your problem sits somewhere between protocol design, application engineering, security, and infrastructure, that is exactly where we can help.",
    icon: Blocks,
    capabilities: [
      "Custom Solutions",
      "Research & Development",
      "System Diagnostics",
      "Strategic Consultation"
    ],
  }
];
