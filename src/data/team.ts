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
    bio: "Smart Contract Engineer and Security Researcher focusing on secure EVM protocol design, state-machine architecture, and stateful invariant fuzzing.",
    avatarUrl: "/images/architect/architect-asset-1.jpeg",
    category: "Leadership",
    socialLinks: {
      twitter: "https://x.com/BinnaDev",
      linkedin: "https://linkedin.com/in/obinna-franklin-duru",
      github: "https://github.com/obinnafranklinduru",
    },
  },
];
