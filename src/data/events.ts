export type HistoricalEventMetric = {
  label: string;
  value: string;
};

export type EventLocation =
  | {
      type: "in-person";
      venue: string;
      address: string;
      latitude?: number;
      longitude?: number;
    }
  | {
      type: "virtual";
      platform: string;
      link?: string;
    };

export type CommunityEvent = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  status: "UPCOMING" | "PAST";
  description: string;
  category: string;
  location?: EventLocation;
  registrationUrl?: string;
  speakers?: string[];
  team?: string[];
  guest?: string;
  metrics?: HistoricalEventMetric[];
  quote?: string;
  image: string;
  archiveUrl?: string;
};

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: "systems-workshop-1",
    title: "Engineering Workshop",
    subtitle: "Systems Thinking & Architecture in Monad",
    date: "2026-10-19T10:00:00Z",
    status: "UPCOMING",
    description:
      "An intensive half-day workshop focused on moving from writing code to designing systems. We will deconstruct real-world architectures and understand the trade-offs behind scaling infrastructure in Monad Ecosystem.",
    category: "Workshop",
    location: {
      type: "in-person",
      venue: "Federal University of Technology Owerri (FUTO)",
      address: "PMB, 1526, Ihiagwa, Owerri, Imo State, Nigeria",
      latitude: 5.3927,
      longitude: 6.9863,
    },
    registrationUrl: "https://api.whatsapp.com/send?phone=2348064248389",
    speakers: ["Obinna Duru", "Console XYZ"],
    image: "/images/community/community-asset-2.jpeg",
  },
  {
    id: "whats-next-1",
    title: "What's Next 1.0",
    subtitle: "Launching Your Tech Journey",
    date: "December 21, 2023",
    status: "PAST",
    description:
      "Created to inspire beginners to enter the technology space, do great things, and become techies.",
    category: "Inaugural Webinar",
    guest: "Clinton Imaro",
    location: {
      type: "virtual",
      platform: "Google Meet",
    },
    speakers: ["Vanessa Ndikom", "Bright Lazarus"],
    team: [
      "Obinna Duru",
      "Chijioke Victory",
      "Cyril Emmanuel",
      "Vanessa Ndikom",
      "Odinakachukwu Henry",
      "Patrick Iyiakimo",
    ],
    metrics: [
      { label: "Registrations", value: "173" },
      { label: "Live Attendees", value: "50+" },
      { label: "Waitlist", value: "201" },
    ],
    image: "/images/community/community-asset-2.jpeg",
    archiveUrl:
      "https://www.linkedin.com/posts/obinna-franklin-duru_whatsnext-tech-webinar-activity-7143578834964041729-Y2hm",
  },
  {
    id: "whats-next-2",
    title: "What's Next 2.0",
    subtitle: "The Future In Tech",
    date: "June 4, 2024",
    status: "PAST",
    description:
      "Expanding the vision and bringing together a larger lineup of people contributing to the technology ecosystem. The event focused on possibility, ambition, and encouraging young people to believe that their starting point does not determine how far they can go.",
    category: "Technology Event",
    quote: "You can do great things from a small place.",
    speakers: [
      "Dennis Ukonu",
      "Marshall Odii",
      "Martin Kesene",
      "Chima Philip",
      "Olivia Oputa",
      "Godfirst Onuoha",
    ],
    team: [
      "Obinna Duru",
      "Chijioke Victory",
      "Cyril Emmanuel",
      "Victor Chigbo",
      "Vanessa Ndikom",
    ],
    image: "/images/community/community-asset-3.jpeg",
    archiveUrl:
      "https://www.linkedin.com/posts/obinna-franklin-duru_whatsnext2-futureintech-techevent-share-7203856689953968128-vLV_",
  },
];
