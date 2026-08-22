export interface ClientTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  videoUrl?: string;
  socialLinks?: {
    x?: string;
    linkedin?: string;
    github?: string;
  };
}

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: "1",
    name: "Elena Rodriguez",
    role: "Chief Technology Officer",
    company: "Nexus Finance",
    content:
      "BinnaDev Lab didn't just audit our code; they re-architected our core AMM logic to be 30% more gas efficient. Their depth of EVM knowledge is genuinely unmatched in the industry.",
    avatarUrl: "/images/shared/shared-asset-8.jpeg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Demo placeholder
    socialLinks: {
      x: "https://x.com/demo",
      linkedin: "https://linkedin.com/in/demo",
    },
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Founder",
    company: "Artemis Protocol",
    content:
      "Working with the Lab was a masterclass in security. Their fuzzing suites caught edge cases our internal team completely missed. They are our go-to team for protocol security.",
    avatarUrl: "/images/testimonials/testimonials-asset-1.jpeg",
    socialLinks: { x: "https://x.com/demo" },
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    role: "Head of Engineering",
    company: "BlockState Infrastructure",
    content:
      "We hired BinnaDev to train our senior web2 engineers in Solidity and security best practices. Six months later, those engineers are shipping production DeFi code. The ROI was exceptional.",
    avatarUrl: "/images/shared/shared-asset-9.jpeg",
  },
  {
    id: "4",
    name: "David Alaba",
    role: "Lead Architect",
    company: "Zeta Networks",
    content:
      "The level of professionalism and rigor BinnaDev brings to cross-chain architecture is rare. They helped us design a bridge that is secure by default.",
    avatarUrl: "/images/testimonials/testimonials-asset-2.jpeg",
    socialLinks: {
      github: "https://github.com/demo",
      linkedin: "https://linkedin.com/in/demo",
    },
  },
];
