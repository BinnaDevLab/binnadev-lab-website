import { Code2, ShieldAlert, Lightbulb, Scale } from "lucide-react";

export interface ManifestoPoint {
  title: string;
  content: string;
  icon: any; // Lucide icon
  image: string;
}

export const MANIFESTO_POINTS: ManifestoPoint[] = [
  {
    title: "Syntax is Temporary. Reasoning is Permanent.",
    content:
      "Most educational platforms teach syntax. They teach how to write a function, how to deploy a contract, and how to use a framework. But syntax changes. Frameworks die. Reasoning is the only asset that compounds.",
    icon: Lightbulb,
    image:
      "/images/shared/shared-asset-6.jpeg",
  },
  {
    title: "The Developer vs. The Engineer",
    content:
      "A developer asks, 'How do I build this?' An engineer asks, 'How does this break?' The shift from development to engineering is the shift from building features to architecting resilient systems that survive hostile environments.",
    icon: Code2,
    image:
      "/images/philosophy/philosophy-asset-1.jpeg",
  },
  {
    title: "Thinking Like an Attacker",
    content:
      "You cannot secure a system you do not know how to destroy. Web3 is an adversarial environment where every deployed contract is an open bounty. Security is not an audit; it is a fundamental design state.",
    icon: ShieldAlert,
    image:
      "/images/shared/shared-asset-5.jpeg",
  },
  {
    title: "The Architecture of Trust",
    content:
      "Smart contracts are not just code; they are financial infrastructure. When engineering protocols that hold millions in TVL, the only acceptable standard is absolute mathematical solvency and rigorous invariant testing.",
    icon: Scale,
    image:
      "/images/shared/shared-asset-10.jpeg",
  },
];
