import {
  Terminal,
  BookOpen,
  GitBranch,
  Shield,
  ExternalLink,
  GraduationCap,
  Building2,
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
  icon: any; // Lucide icon
}

export interface Principle {
  title: string;
  description: string;
  icon?: any;
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
      "Software engineering at FUTO became the foundation, but the goal was never simply to learn how to write software. It was to understand how systems are designed, how their parts depend on one another, and what happens when those dependencies fail.",
      "The foundation was built around **System Design, Engineering, and Critical Thinking**: learning to break complex problems apart, understand their relationships, question assumptions, and design solutions that remain understandable beyond the first implementation.",
    ],
    icon: Layers,
  },
  {
    id: "onchain",
    phase: "02. On-Chain Systems",
    title: "When Code Started Carrying Value",
    description: [
      "Smart contracts changed the question.",
      "Software could now control assets, enforce agreements, and coordinate people without a traditional intermediary. That meant a bug was no longer just a bug. It could become a financial loss, a broken protocol, or a failure of trust.",
      "Working across **Monad, Ethereum, Base, and Polygon**, the focus shifted from simply making decentralized applications work to understanding how systems that handle real value should be designed, reasoned about, and defended.",
    ],
    icon: Cpu,
  },
  {
    id: "security",
    phase: "03. Security & Fuzzing",
    title: 'Stop Asking "Does It Work?"',
    description: [
      "The deeper the systems became, the harder the questions became.",
      "A handful of passing tests could prove that the code behaves correctly in scenarios we imagined. They could not prove what happens in the scenarios we never considered.",
      "That led to a different approach: **interrogate the architecture.**",
      "Property-based testing, stateful invariant fuzzing, handler-based testing, adversarial scenarios, and ghost variables became tools for challenging assumptions and searching for states the happy path never reveals.",
      'The question became less:\n\n> "Does this function work?"\n\nand more:\n\n> **"What must always remain true, even when everything goes wrong?"**',
    ],
    icon: Search,
  },
  {
    id: "binnadev",
    phase: "04. BinnaDev Lab",
    title: "Turning the Practice Into an Institution",
    description: [
      "BinnaDev Lab is the natural evolution of that journey.",
      "Not simply another developer community. Not simply an academy. Not simply a place to publish code.",
      "A **research and engineering institution** built around deeper thinking, rigorous engineering, shared knowledge, and the people willing to question how things are built.",
      "A place where developers learn to look beneath the syntax, engineers challenge their assumptions, researchers share what they discover, and the community grows together.",
      "Because the principle remains simple:\n\n> **Code is not meant to be memorized. It is meant to be interrogated.**",
      "And in an age where AI can generate code faster than ever, **the ability to understand, question, and take responsibility for what that code creates matters more than ever.**",
    ],
    icon: Book,
  },
];

export const PRINCIPLES: Principle[] = [
  {
    title: "Reliable",
    description:
      "We build systems that deserve to be trusted. Reliability begins with questioning assumptions. We do not treat 'it works' as the finish line. We ask what happens when the inputs change, the state becomes unexpected, the environment turns hostile, or an adversary deliberately pushes the system toward its boundaries.",
    icon: CheckCircle,
  },
  {
    title: "Thoughtful",
    description:
      "We think before we build. Good engineering is not about writing more code. It is about understanding the problem deeply enough to know what should be built, what should not be built, and why. We design with intention, especially when working with systems where mistakes can become irreversible.",
    icon: BrainCircuit,
  },
  {
    title: "Excellent",
    description:
      "We refuse to confuse 'working' with 'finished.' Excellence lives in the details: a correctly defined invariant, a simpler state transition, a safer abstraction, a meaningful test, an efficient implementation, a clearer explanation, or a decision that removes unnecessary complexity.",
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
