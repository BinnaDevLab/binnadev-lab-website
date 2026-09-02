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
    name: "Chinedu Jamike",
    role: "Founder & CTO",
    company: "Libertas Alpha Technologies",
    content:
      "BinnaDevLab is a good place to start or continue your journey: developers who think will never go obsolete.",
    avatarUrl: "/images/testimonials/testimonials-asset-2.jpeg",
    socialLinks: {
      x: "https://x.com/lord_zyre",
      linkedin: "https://www.linkedin.com/in/chinedu-jamike",
    },
  },
  {
    id: "2",
    name: "Emmanuel Festus",
    role: "Founder & CEO",
    company: "Fezgraph",
    content:
      "I highly recommend BinnaDevLab for smart contract engineering and security. Obinna combines technical depth with precision and professionalism. He also helps developers build stronger skills and better engineering judgment. A reliable engineer to work with and learn from.",
    avatarUrl: "/images/testimonials/testimonials-asset-4.jpeg",
    socialLinks: { x: "https://web.facebook.com/emmanuel.festus.794" },
  },
];
