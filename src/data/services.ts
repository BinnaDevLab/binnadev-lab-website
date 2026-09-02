import { LucideIcon, Shield, Globe, Code2, GraduationCap } from "lucide-react";

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon; // Lucide icon
  capabilities: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "smart-contract-development",
    title: "Smart Contract Development",
    icon: Code2,
    capabilities: [
      "Solidity / Yul Smart Contracts",
      "Protocol Design",
      "Gas Optimization",
      "Unit / Invariant Testing",
    ],
  },
  {
    id: "web-development",
    title: "Decentralized Application & Full-Stack Development",
    icon: Globe,
    capabilities: [
      "Frontend Development & Onchain Integration",
      "Backend & API Development",
      "Database Architecture",
      "Hosting & Domain Name Regration",
    ],
  },
  {
    id: "protocol-security",
    title: "Protocol Architecture & Security",
    icon: Shield,
    capabilities: [
      "Threat Modeling",
      "Invariant Testing",
      "Access Control",
      "Adversarial Analysis",
      "Security Reviews",
    ],
  },
  {
    id: "training",
    title: "Engineering Training",
    icon: GraduationCap,
    capabilities: [
      "Smart Contract Development",
      "Security Engineering",
      "Developer Onboarding",
      "Hackathathon",
    ],
  },
];
