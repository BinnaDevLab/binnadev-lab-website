import {
  Terminal,
  BookOpen,
  GitBranch,
  Shield,
  ExternalLink,
  GraduationCap,
  Building2,
} from "lucide-react";

export interface TimelineNode {
  id: string;
  phase: string;
  title: string;
  description: string;
  icon: any; // Lucide icon
}

export interface Principle {
  title: string;
  description: string;
}

export interface ResearchItem {
  title: string;
  category: string;
  link: string;
}

export const TIMELINE: TimelineNode[] = [
  {
    id: "curiosity",
    phase: "01. Curiosity",
    title: "Discovering the Mechanics",
    description:
      "It started with a simple question: How do systems actually work under the hood? This curiosity drove me to deconstruct software, understand networking, and explore the foundational primitives of computer science.",
    icon: Terminal,
  },
  {
    id: "learning",
    phase: "02. Learning",
    title: "Mastering the Craft",
    description:
      "I transitioned from building basic applications to mastering backend architecture, databases, and REST APIs. I learned that writing code is easy, but engineering reliable systems requires immense discipline.",
    icon: BookOpen,
  },
  {
    id: "building",
    phase: "03. Building",
    title: "The Web3 Frontier",
    description:
      "The immutability of blockchains fascinated me. I began building decentralized applications from DEX aggregators to stablecoin protocols realizing the stakes were much higher when code handles real value.",
    icon: GitBranch,
  },
  {
    id: "security",
    phase: "04. Security",
    title: "Thinking Like an Attacker",
    description:
      "I realized that deploying smart contracts without rigorous invariant testing is reckless. I pivoted heavily into security, mastering tools like Foundry, Echidna, and formal verification to build unbreakable protocols.",
    icon: Shield,
  },
  {
    id: "research",
    phase: "05. Research",
    title: "Pushing the Boundaries",
    description:
      "Beyond auditing, I began publishing research on AMM mathematics, ERC20 edge cases, and stateful fuzzing, aiming to raise the standard of engineering across the ecosystem.",
    icon: ExternalLink,
  },
  {
    id: "education",
    phase: "06. Education",
    title: "Demystifying Complexity",
    description:
      "Teaching became a core part of my ethos. By writing and educating others, I solidified my own understanding while helping the next generation of engineers avoid catastrophic mistakes.",
    icon: GraduationCap,
  },
  {
    id: "binnadev",
    phase: "07. BinnaDev Lab",
    title: "Building an Institution",
    description:
      "I founded BinnaDev Lab to merge rigorous engineering, adversarial security, and elite education into a single entity. It is the culmination of my journey—an organization dedicated to building trust in decentralized systems.",
    icon: Building2,
  },
];

export const PRINCIPLES: Principle[] = [
  {
    title: "Reliability Over Speed",
    description:
      "In decentralized systems, moving fast breaks things permanently. I optimize for predictability, mathematical solvency, and absolute reliability.",
  },
  {
    title: "Systems Over Features",
    description:
      "A feature solves a problem today; a system solves a class of problems forever. I engineer cohesive architectures, not isolated functions.",
  },
  {
    title: "First Principles Over Memorization",
    description:
      "Syntax changes. Paradigms evolve. Understanding the underlying mechanics, the EVM, state transitions, and memory layouts is timeless.",
  },
  {
    title: "Security By Design",
    description:
      "Security is not a final checklist; it is the foundation. Every invariant, access control, and state change is modeled defensively from day one.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "I build software that endures. I prioritize clarity, comprehensive documentation, and robust test coverage over clever, unmaintainable code.",
  },
  {
    title: "Continuous Learning",
    description:
      "The adversarial landscape is constantly shifting. Staying ahead requires a commitment to relentless research and intellectual humility.",
  },
];

export const RESEARCH: ResearchItem[] = [
  {
    title:
      "Stop Guessing, Start Proving: A Guide to Stateful Fuzzing in Foundry",
    category: "Security Testing",
    link: "https://binnadev.vercel.app/",
  },
  {
    title: "ERC20 Edge Cases Every Smart Contract Engineer Should Know",
    category: "Protocol Architecture",
    link: "https://binnadev.vercel.app/",
  },
  {
    title: "How AMMs Work: The Simple Math Behind Decentralized Trading",
    category: "DeFi Mechanics",
    link: "https://binnadev.vercel.app/",
  },
  {
    title: "Thinking Like an Attacker: Airbags of Smart Contract Security",
    category: "Adversarial Mindset",
    link: "https://binnadev.vercel.app/",
  },
];
