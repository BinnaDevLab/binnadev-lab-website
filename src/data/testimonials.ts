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
    quote: "BinnaDev Lab fundamentally restructured how I look at smart contracts. It's not about syntax; it's about anticipating state transitions before they execute. Their methodologies are institutional grade.",
    author: "Elena R.",
    role: "Senior Security Researcher",
    organization: "0xAudits",
    avatarUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2",
    socialLinks: { twitter: "https://twitter.com", github: "https://github.com" }
  },
  {
    id: "test-2",
    quote: "The rigor of the curriculum is unmatched. Moving from 'How to Read Code' to 'How Attackers Think' bridges the gap between theoretical knowledge and adversarial execution.",
    author: "David M.",
    role: "Protocol Architect",
    organization: "DeFi Builder",
    avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2",
    socialLinks: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  {
    id: "test-3",
    quote: "This isn't a coding bootcamp. It's an engineering laboratory that instills a philosophy of defensive programming from day one. Invaluable for any serious Web3 developer.",
    author: "Sarah K.",
    role: "Lead Smart Contract Engineer",
    avatarUrl: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2",
    socialLinks: { twitter: "https://twitter.com" }
  },
  {
    id: "test-4",
    quote: "I've been in Web3 for 5 years, and the BinnaDev framework still managed to break down my bad habits and rebuild my auditing process from scratch. Pure engineering excellence.",
    author: "Marcus T.",
    role: "Independent Auditor",
    avatarUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2",
    socialLinks: { github: "https://github.com" }
  },
  {
    id: "test-5",
    quote: "If you want to understand how the EVM truly operates under pressure, you need to be in this Lab. The depth of the 'Architecting Secure State' lessons blew my mind.",
    author: "Jessica W.",
    role: "Core Developer",
    organization: "ZK Protocol",
    avatarUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2",
    socialLinks: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" }
  }
];
