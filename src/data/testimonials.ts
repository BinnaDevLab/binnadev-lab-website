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
      "BinnaDevLab is a good place to start or continue your journey: developers who think will never go obsolete.",
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
    role: "Software Developer",
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
      "BinnaDevLab feels like a serious space to learn, build, research, and collaborate around Web3 engineering and security. I'm not a developer, but the strong technical foundation is clear.",
    author: "Anthony Shine",
    role: "Web3 Community Manager",
    avatarUrl: "/images/testimonials/testimonials-asset-1.jpeg",
    socialLinks: {
      twitter: "https://x.com/iSHiNEfr",
      linkedin: "https://www.linkedin.com/in/anthony-shine-01a76b248",
      github: "https://linktr.ee/anthonyshine",
    },
  },
  {
    id: "test-4",
    quote:
      "BinnaDevLab is where developers don't just learn to code. They learn to think, build, collaborate, and grow. A true space for developers to advance together.",
    author: "Paul Uchechi",
    role: "Mechatronic Engineer",
    avatarUrl: "/images/testimonials/testimonials-asset-5.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/uchechi-paul-083591369",
    },
  },
  {
    id: "test-5",
    quote:
      "I highly recommend BinnaDevLab for smart contract engineering and security. Obinna combines technical depth, precision, and professionalism while helping developers build stronger skills and engineering judgment.",
    author: "Emmanuel Festus",
    role: "Founder & CEO",
    organization: "Fezgraph",
    avatarUrl: "/images/testimonials/testimonials-asset-4.jpeg",
    socialLinks: {
      twitter: "https://web.facebook.com/emmanuel.festus.794",
    },
  },
  {
    id: "test-6",
    quote:
      "BinnaDev Lab proves that great systems are built on understanding, not memorization. They think ahead, work together, and make security a priority from day one.",
    author: "Delight Obinna",
    role: "App Developer",
    avatarUrl: "/images/testimonials/testimonials-asset-6.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/delight-obinna-a3a207375",
    },
  },
];
