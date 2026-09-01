import { LucideIcon, Code2, ShieldAlert, Lightbulb, Scale } from "lucide-react";

export interface ManifestoPoint {
  title: string;
  content: string;
  icon: LucideIcon; // Lucide icon
  image: string;
}

export const MANIFESTO_POINTS: ManifestoPoint[] = [
  {
    title: "Reasoning is Powerful.",
    content:
      "Languages evolve. Frameworks fade. Critical thinking doesn't. We train developers to move beyond writing code to architecting logic.",
    icon: Lightbulb,
    image: "/images/shared/shared-asset-13.jpeg",
  },
  {
    title: "The Developer vs. The Engineer",
    content:
      "Developers focus on building and shipping features, while engineers focus on system resilience and preventing failures under adversarial conditions.",
    icon: Code2,
    image: "/images/shared/shared-asset-21.jpeg",
  },
  {
    title: "The Bridge and The Bond",
    content:
      "We connect global Web3 protocols with elite local talent. Anchored by an authentic community, we turn complex decentralized concepts into production-ready reality.",
    icon: ShieldAlert,
    image: "/images/shared/shared-asset-22.jpeg",
  },
  {
    title: "The Architecture of Trust",
    content:
      "Smart contracts are financial infrastructure. When engineering systems that hold real value, the only acceptable standard is absolute reliability.",
    icon: Scale,
    image: "/images/shared/shared-asset-23.jpeg",
  },
];
