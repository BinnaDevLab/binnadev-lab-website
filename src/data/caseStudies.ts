export interface ArchNode {
  style: "flow" | "milestone" | "box" | "split" | "note";
  label: string;
  value?: string;
  secondaryLabel?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  clientWebsite?: string;
  parentCompany?: string;
  parentWebsite?: string;
  title: string;
  challenge: string;
  architectureInsight: string;
  approach: string;
  outcome: string;
  technologies: string[];
  imageUrl: string;
  projectLink?: string;
  architectureNodes: ArchNode[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "libertas-alpha-academy",
    client: "Libertas Alpha",
    clientWebsite: "https://libertasalpha.com/",
    title: "Libertas Alpha Academy Certification Protocol",
    challenge:
      "Academic credentials are traditionally trusted because an institution says they are valid. We needed a system where the rules governing a credential could be enforced by the protocol itself.",
    architectureInsight:
      "Courses and Cohorts are fundamentally different. A Course is permanent, self-paced, and independent. A Cohort is time-bound, event-specific, and group-based. We modeled these as distinct concepts rather than forcing them into one abstraction.",
    approach:
      "We built a decentralized certification system using soulbound ERC1155 credentials. A hybrid architecture allows a conventional frontend and backend relayer to manage state, while critical rules, certificate issuance, Merkle-proof verification, token namespaces, and cryptographic revocation, remain strictly on-chain.",
    outcome:
      "We translated messy real-world organizational rules into enforceable protocol architecture, establishing explicit invariants around token supply and state transitions.",
    technologies: [
      "ERC1155",
      "Soulbound Tokens",
      "Merkle Trees",
      "Hybrid Architecture",
    ],
    imageUrl: "/images/shared/shared-asset-15.jpeg",
    projectLink:
      "https://github.com/Ikenga-Software-Solutions-LTD/libertasalpha-academy-certification-contracts/blob/main/README.md",
    architectureNodes: [
      { style: "flow", label: "Student Completes", value: "Backend" },
      { style: "flow", label: "Cohort Graduates", value: "Merkle Root" },
      { style: "box", label: "On-Chain Vault (ERC1155)" },
    ],
  },
  {
    id: "milestone-crowdfund",
    client: "United 4 Change",
    clientWebsite: "https://united-4-change.org/",
    parentCompany: "Black Spectre Tech",
    parentWebsite: "https://black-spectre.com/",
    title: "MilestoneCrowdfundUpgradeable",
    challenge:
      "Crowdfunding assumes a creator will finish what they promised. We asked: What if capital is released because evidence shows that the next stage has been earned, rather than because someone promised to deliver?",
    architectureInsight:
      "This is a Defensive Escrow architecture. Capital is locked and progressively released according to milestones. But failure is explicitly designed into the protocol. If a project is abandoned, remaining funds become refundable via a forward-only state machine.",
    approach:
      "Every campaign strictly accounts for 10,000 BPS (100%). If 30% has been released, a contributor has an exact mathematical entitlement to their remaining refundable capital. Built with UUPS upgradeability, ERC-4337 Account Abstraction, and emergency halt mechanisms.",
    outcome:
      "We design financial systems around failure, not just the happy path. The protocol handles native ETH, allowlisted ERC20s, and fiat contribution pathways securely.",
    technologies: [
      "Defensive Escrow",
      "ERC-4337",
      "UUPS Upgradeability",
      "State Machines",
    ],
    imageUrl: "/images/shared/shared-asset-7.jpeg",
    projectLink:
      "https://polygonscan.com/address/0xf83aaB5f1fAA1a7a74AD27E2f8058801EaA31393",
    architectureNodes: [
      { style: "milestone", label: "Milestone 1", value: "2,000 BPS" },
      { style: "milestone", label: "Milestone 2", value: "3,000 BPS" },
      { style: "milestone", label: "Milestone 3", value: "5,000 BPS" },
      {
        style: "note",
        label:
          "Failure state active. Remaining 5,000 BPS mathematically refundable.",
      },
    ],
  },
  {
    id: "libertas-water-project",
    client: "Libertas Alpha",
    clientWebsite: "https://libertasalpha.com/",
    title: "Libertas Alpha Water Project Treasury",
    challenge:
      "How can funding for physical infrastructure become transparent, accountable, and programmable? The system needed to connect physical water infrastructure with on-chain economic infrastructure.",
    architectureInsight:
      "We implemented a Split-Vault architecture separating the Operational Vault and the Yield Vault. This separation makes capital recovery and operational surplus structurally distinct.",
    approach:
      "Contributor participation is represented through ERC721 Impact Tokens. Yield is calculated against a global snapshot and the contributor's pool share for an O(1) claim model. Operational grants require EIP-712 threshold authorization through a MultiSigController.",
    outcome:
      "We connected blockchain infrastructure with real-world economic systems, making responsibilities, permissions, and financial boundaries mathematically explicit.",
    technologies: [
      "ERC721 Impact Tokens",
      "Split-Vault Treasury",
      "EIP-712",
      "O(1) Yield Claims",
    ],
    imageUrl: "/images/shared/shared-asset-6.jpeg",
    projectLink:
      "https://github.com/LibertasAlpha/lawp-treasury-contracts/blob/main/README.md",
    architectureNodes: [
      { style: "box", label: "Contribution Pool (cNGN)" },
      {
        style: "split",
        label: "Operational Vault",
        secondaryLabel: "Yield Vault",
      },
      { style: "note", label: "O(1) Claims Infrastructure" },
    ],
  },
];
