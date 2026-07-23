export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  technologies: string[];
  imageUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    client: "DeFi Yield Protocol",
    title: "Securing $500M TVL through rigorous invariant testing.",
    challenge: "A leading DeFi protocol required a comprehensive security review of their v3 vault architecture before mainnet launch, specifically looking for edge cases in flash-loan manipulation.",
    approach: "We developed a custom stateful fuzzing harness using Echidna to model the protocol's complex mathematical invariants. We then conducted a line-by-line manual audit of the core logic.",
    outcome: "Identified and mitigated 3 critical vulnerabilities prior to deployment. The protocol launched successfully and has secured over $500M without incident.",
    technologies: ["Solidity", "Foundry", "Echidna", "Huff"],
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  {
    id: "2",
    client: "Layer 2 Bridge",
    title: "Architecting a trust-minimized cross-chain messaging bridge.",
    challenge: "The client needed a highly scalable, gas-efficient bridge to transfer liquidity between Ethereum mainnet and a new optimistic rollup, without relying on centralized validators.",
    approach: "We designed a novel relayer infrastructure using zero-knowledge proofs for state validation, minimizing the on-chain verification costs. We authored the smart contracts and the off-chain Go relayer.",
    outcome: "Reduced bridging gas costs by 40% compared to industry standards while maintaining cryptoeconomic security guarantees.",
    technologies: ["Solidity", "Go", "Circom", "Next.js"],
    imageUrl: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  {
    id: "3",
    client: "Institutional Custodian",
    title: "Building an enterprise-grade multi-signature wallet ecosystem.",
    challenge: "An institutional asset manager required a custom non-custodial wallet solution with complex role-based access control (RBAC) and spending limits for their internal trading teams.",
    approach: "We built a specialized extension of the Safe (formerly Gnosis Safe) architecture, writing custom modules in Solidity to enforce daily spending limits and multi-tier approval hierarchies.",
    outcome: "Successfully processed over $2B in institutional transactions with zero security breaches. Delivered a full-stack React application for the trading desk.",
    technologies: ["Solidity", "Safe Core", "React", "Node.js"],
    imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  }
];
