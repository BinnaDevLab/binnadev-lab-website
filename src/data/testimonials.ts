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
      "BinnaDev is a good place to start or continue your journey: developers who think will never go obsolete.",
    author: "Chinedu Jamike",
    role: "Founder",
    organization: "Libertas Alpha Network",
    avatarUrl: "/images/testimonials/testimonials-asset-2.jpeg",
    socialLinks: {
      twitter: "https://x.com/lord_zyre",
      github: "https://github.com/zyrelord",
      linkedin: "https://www.linkedin.com/in/chinedu-jamike",
    },
  },
  {
    id: "test-2",
    quote:
      "It's a good platform for learning not just how to code, but how to actually know and understand what you build.",
    author: "Joseph Egbucha",
    role: "Software Engineer",
    avatarUrl: "/images/testimonials/testimonials-asset-3.jpeg",
    socialLinks: {
      twitter: "https://x.com/JosephEgbucha",
      github: "https://github.com/Joseph-Godwin12",
      linkedin: "https://www.linkedin.com/in/egbucha-joseph-434ab9287",
    },
  },
  {
    id: "test-3",
    quote:
      "From what I've seen, BinnaDev Lab feels like a serious space for developers to learn, build, research, and collaborate around Web3 engineering and security. I'm not a developer myself, but I can tell there's a strong technical foundation behind what's being built.",
    author: "Anthony Shine",
    role: "Web3 Community Manager",
    avatarUrl: "/images/testimonials/testimonials-asset-1.jpeg",
    socialLinks: {
      twitter: "https://x.com/iSHiNEfr",
      linkedin: "https://www.linkedin.com/in/anthony-shine-01a76b248",
      github: "https://linktr.ee/anthonyshine",
    },
  },
];
