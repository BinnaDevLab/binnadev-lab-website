import {
  LucideIcon,
  CheckCircle,
  BrainCircuit,
  Award,
  Layers,
  Cpu,
  Search,
  Book,
} from "lucide-react";

export interface TimelineNode {
  id: string;
  phase: string;
  title: string;
  description: string | string[];
  icon: LucideIcon; // Lucide icon
}

export interface Principle {
  title: string;
  summary: string;
  actionPoints: string[];
  icon?: LucideIcon;
}

export interface ResearchItem {
  title: string;
  category: string;
  link: string;
  imageUrl?: string;
  description?: string;
}

export const TIMELINE: TimelineNode[] = [
  {
    id: "foundation",
    phase: "01. Foundation",
    title: "Learning to Think in Systems",
    description: [
      "Software engineering at FUTO became the foundation, but the goal was never simply to learn how to write software. It was to understand how systems are designed, how their parts depend on one another, and what happens when those dependencies shatter.",
      "This era was built entirely on **System Design, Engineering, and Critical Thinking**: learning to break complex problems apart, question assumptions, and design solutions that remain understandable beyond the first implementation.",
    ],
    icon: Layers,
  },
  {
    id: "onchain",
    phase: "02. On-Chain Systems",
    title: "When Code Started Carrying Value",
    description: [
      "Smart contracts changed the question.",
      "Software could now control assets, enforce agreements, and coordinate people without a traditional intermediary. That meant a bug was no longer just a bug. It could become a total financial loss, a broken protocol, or a catastrophic failure of trust.",
      "Working across **Monad, Ethereum, Base, and Polygon**, the focus shifted from simply making decentralized applications work to understanding how systems that hold real value must be architected, reasoned about, and defended.",
    ],
    icon: Cpu,
  },
  {
    id: "security",
    phase: "03. Security & Fuzzing",
    title: 'Stop Asking "Does It Work?"',
    description: [
      "The deeper the systems became, the harder the questions became.",
      "A handful of passing tests could prove that the code behaves correctly in imagined scenarios. They could not prove what happens in the scenarios never considered.",
      "That led to a different approach: **interrogate the architecture.**",
      "Property-based testing, stateful invariant fuzzing, adversarial scenarios, and ghost variables became the primary tools for challenging assumptions and hunting for vulnerabilities the happy path never reveals.",
      'The question became less:\n\n> "Does this function work?"\n\nand more:\n\n> **"What must always remain true, even when everything goes wrong?"**',
    ],
    icon: Search,
  },
  {
    id: "binnadev",
    phase: "04. BinnaDev Lab",
    title: "The Bond & The Institution",
    description: [
      "BinnaDev Lab is the natural evolution of that journey, born from a profound realization: engineering in isolation has a ceiling.",
      "Through organizing local events and leading communities, it became clear that while enthusiasm is easy to generate, producing world-class engineers requires a deep, enduring commitment. It requires **The Bond**, a collective of people willing to learn, fail, and build together.",
      "The Lab is a **research and engineering institution** built around rigorous reasoning, shared knowledge, and the belief that you can build world-class infrastructure from a small place, provided you have the right people.",
      "Because the core principle remains simple:\n\n> **Code is not meant to be memorized. It is meant to be interrogated.**",
    ],
    icon: Book,
  },
];

export const PRINCIPLES: Principle[] = [
  {
    title: "Reliable",
    summary: "Architecting systems that deserve to be trusted.",
    actionPoints: [
      "Question all assumptions",
      "Model hostile environments",
      "Defend against edge cases"
    ],
    icon: CheckCircle,
  },
  {
    title: "Thoughtful",
    summary: "Thinking deeply before building anything.",
    actionPoints: [
      "Understand the core problem",
      "Design with extreme intention",
      "Minimize moving parts"
    ],
    icon: BrainCircuit,
  },
  {
    title: "Excellent",
    summary: "Refusing to confuse 'working' with 'finished'.",
    actionPoints: [
      "Define rigorous invariants",
      "Use mathematically sound tests",
      "Remove unnecessary complexity"
    ],
    icon: Award,
  },
];

export const RESEARCH: ResearchItem[] = [
  {
    title:
      "Thinking Like an Attacker: The Airbags and Seatbelts of Smart Contract Security",
    category: "Security",
    link: "https://dev.to/binnadev/thinking-like-an-attacker-the-airbags-and-seatbelts-of-smart-contract-security-4g4a",
    imageUrl: "/images/shared/shared-asset-4.jpeg",
    description:
      "A deep dive into adversarial thinking, invariant checking, and the fundamental shift from happy-path testing to defensive state modeling.",
  },
  {
    title:
      "Stop Guessing, Start Proving: A Guide to Stateful Fuzzing in Foundry",
    category: "Testing",
    link: "https://dev.to/binnadev/stop-guessing-start-proving-a-guide-to-stateful-fuzzing-in-foundry-57l4",
    imageUrl: "/images/shared/shared-asset-7.jpeg",
    description:
      "How to use property-based testing and stateful invariant fuzzing to uncover edge cases that traditional unit tests miss.",
  },
  {
    title: "ERC20 Edge Cases Every Smart Contract Engineer Should Know",
    category: "Security",
    link: "https://dev.to/binnadev/erc20-edge-cases-every-smart-contract-engineer-should-know-3dhb",
    imageUrl: "/images/shared/shared-asset-6.jpeg",
    description:
      "An architectural review of fee-on-transfer tokens, rebasing mechanics, and phantom approvals that silently break integrations.",
  },
  {
    title: "Immutability by Default, Upgradeability by Necessity",
    category: "Architecture",
    link: "https://dev.to/binnadev/immutability-by-default-upgradeability-by-necessity-lessons-from-a-crowdfunding-protocol-3jm7",
    imageUrl: "/images/shared/shared-asset-1.jpeg",
    description:
      "Analyzing proxy patterns, storage collisions, and the inherent risks of introducing upgradeability into supposedly trustless systems.",
  },
];
