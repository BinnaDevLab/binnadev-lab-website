import { LucideIcon, Code2, ShieldAlert, Lightbulb, Scale } from "lucide-react";

export interface ManifestoPoint {
  title: string;
  content: string;
  icon: LucideIcon; // Lucide icon
  image: string;
}

export const MANIFESTO_POINTS: ManifestoPoint[] = [
  {
    title: "Syntax is Temporary. Reasoning is Permanent.",
    content:
      "Languages evolve and frameworks fade, but the ability to reason critically through a system never depreciates. We transition developers from merely writing code to architecting logic, because reasoning is the only asset that truly compounds.",
    icon: Lightbulb,
    image: "/images/shared/shared-asset-6.jpeg",
  },
  {
    title: "The Developer vs. The Engineer",
    content:
      "A developer asks, 'How do I build this?' An engineer asks, 'How does this break?' The shift from development to engineering is the transition from shipping features to architecting resilient systems that survive in adversarial environments.",
    icon: Code2,
    image: "/images/philosophy/philosophy-asset-1.jpeg",
  },
  {
    title: "The Bridge and The Bond",
    content:
      "BinnaDev Lab exists to connect global Web3 protocols with elite local talent. Bound by an authentic, collaborative community, we ground complex decentralized infrastructure into production-ready reality.",
    icon: ShieldAlert,
    image: "/images/shared/shared-asset-5.jpeg",
  },
  {
    title: "The Architecture of Trust",
    content:
      "Smart contracts are not just scripts; they are financial infrastructure. When engineering protocols that hold real value, the standard is absolute mathematical solvency. We build with rigorous logic and uncompromising excellence.",
    icon: Scale,
    image: "/images/shared/shared-asset-10.jpeg",
  },
];
