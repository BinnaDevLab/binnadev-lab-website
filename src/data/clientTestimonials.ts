export interface ClientTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: "1",
    name: "Elena Rodriguez",
    role: "Chief Technology Officer",
    company: "Nexus Finance",
    content: "BinnaDev Lab didn't just audit our code; they re-architected our core AMM logic to be 30% more gas efficient. Their depth of EVM knowledge is genuinely unmatched in the industry.",
    avatarUrl: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Founder",
    company: "Artemis Protocol",
    content: "Working with the Lab was a masterclass in security. Their fuzzing suites caught edge cases our internal team completely missed. They are our go-to partner for protocol security.",
    avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    role: "Head of Engineering",
    company: "BlockState Infrastructure",
    content: "We hired BinnaDev to train our senior web2 engineers in Solidity and security best practices. Six months later, those engineers are shipping production DeFi code. The ROI was exceptional.",
    avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
  },
  {
    id: "4",
    name: "David Alaba",
    role: "Lead Architect",
    company: "Zeta Networks",
    content: "The level of professionalism and rigor BinnaDev brings to cross-chain architecture is rare. They helped us design a bridge that is secure by default.",
    avatarUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
  }
];
