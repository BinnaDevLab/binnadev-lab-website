export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization?: string;
  avatarUrl?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "BinnaDev Lab fundamentally restructured how I look at smart contracts. It's not about syntax; it's about anticipating state transitions before they execute. Their methodologies are institutional grade.",
    author: "Elena R.",
    role: "Senior Security Researcher",
    organization: "0xAudits",
    avatarUrl: "/images/testimonials/testimonials-asset-3.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: "test-2",
    quote:
      "The rigor of the curriculum is unmatched. Moving from 'How to Read Code' to 'How Attackers Think' bridges the gap between theoretical knowledge and adversarial execution.",
    author: "David M.",
    role: "Protocol Architect",
    organization: "DeFi Builder",
    avatarUrl: "/images/testimonials/testimonials-asset-1.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "test-3",
    quote:
      "This isn't a coding bootcamp. It's an engineering laboratory that instills a philosophy of defensive programming from day one. Invaluable for any serious Web3 developer.",
    author: "Sarah K.",
    role: "Lead Smart Contract Engineer",
    avatarUrl: "/images/shared/shared-asset-8.jpeg",
    socialLinks: { twitter: "https://twitter.com" },
  },
  {
    id: "test-4",
    quote:
      "I've been in Web3 for 5 years, and the BinnaDev framework still managed to break down my bad habits and rebuild my auditing process from scratch. Pure engineering excellence.",
    author: "Marcus T.",
    role: "Independent Auditor",
    avatarUrl: "/images/testimonials/testimonials-asset-2.jpeg",
    socialLinks: { github: "https://github.com" },
  },
  {
    id: "test-5",
    quote:
      "If you want to understand how the EVM truly operates under pressure, you need to be in this Lab. The depth of the 'Architecting Secure State' lessons blew my mind.",
    author: "Jessica W.",
    role: "Core Developer",
    organization: "ZK Protocol",
    avatarUrl: "/images/testimonials/testimonials-asset-4.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];
