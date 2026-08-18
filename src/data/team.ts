export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  category: "Leadership" | "Engineering" | "Research" | "Community";
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: "obinna-franklin-duru",
    name: "Obinna Franklin Duru",
    role: "Founder & Architect",
    bio: "Lead architect of the BinnaDev framework, bridging theoretical cryptography with adversarial EVM security models.",
    avatarUrl: "/images/team/team-asset-1.jpeg", // Professional placeholder
    category: "Leadership",
    socialLinks: { twitter: "https://twitter.com", github: "https://github.com/obinnafranklinduru" }
  },
  {
    id: "team-2",
    name: "Alex V.",
    role: "Head of Protocol Engineering",
    bio: "Specializes in cross-chain bridge architectures and MEV-resistant mechanism design.",
    avatarUrl: "/images/team/team-asset-2.jpeg",
    category: "Engineering",
    socialLinks: { github: "https://github.com" }
  },
  {
    id: "team-3",
    name: "Dr. Samira K.",
    role: "Lead Security Researcher",
    bio: "Former academic cryptographer focused on zero-knowledge proof implementations and formal verification.",
    avatarUrl: "/images/shared/shared-asset-9.jpeg",
    category: "Research",
    socialLinks: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "team-4",
    name: "Jonathan C.",
    role: "Technical Writer & Educator",
    bio: "Translates complex state transition exploits into structured, pedagogical learning tracks.",
    avatarUrl: "/images/team/team-asset-3.jpeg",
    category: "Community",
    socialLinks: { twitter: "https://twitter.com" }
  },
  {
    id: "team-5",
    name: "Priya M.",
    role: "Smart Contract Auditor",
    bio: "Defi protocol veteran. Conducts intense peer reviews of all Lab curriculum material before release.",
    avatarUrl: "/images/team/team-asset-4.jpeg",
    category: "Engineering",
    socialLinks: { linkedin: "https://linkedin.com", github: "https://github.com" }
  }
];
