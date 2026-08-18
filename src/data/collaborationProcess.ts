export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const collaborationProcess: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Discovery & Alignment",
    description: "We begin by understanding your protocol's architecture, business goals, and technical constraints. We define the scope and feasibility of the engagement."
  },
  {
    id: "step-2",
    number: "02",
    title: "Architecture & Planning",
    description: "Our engineers design a secure, scalable architecture or formulate a rigorous testing plan tailored to your smart contracts."
  },
  {
    id: "step-3",
    number: "03",
    title: "Design & Development",
    description: "We write production-grade code, focusing on gas optimization, decentralization, and robust mechanism design."
  },
  {
    id: "step-4",
    number: "04",
    title: "Testing & Security Review",
    description: "Every line of code undergoes intense scrutiny, invariant testing, fuzzing, and manual auditing to ensure zero vulnerabilities."
  },
  {
    id: "step-5",
    number: "05",
    title: "Deployment & Integration",
    description: "We assist your team with secure mainnet deployment, key management, and seamless frontend integrations."
  },
  {
    id: "step-6",
    number: "06",
    title: "Long-Term Support",
    description: "BinnaDev Lab remains a strategic technical resource, offering ongoing protocol maintenance, upgrades, and developer training."
  }
];
