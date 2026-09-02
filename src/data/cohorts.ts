export type CohortCurriculumItem = {
  id: string;
  title: string;
  description: string;
  facilitator?: string;
};

export type Cohort = {
  id: string;
  title: string;
  status: "UPCOMING" | "LIVE" | "COMPLETED";
  startDate: string;
  endDate?: string;
  duration: string;
  price: string;
  sessionDays: string;
  sessionsPerWeek: number;
  format: string;
  platform: string;
  description: string;
  topics: string[];
  curriculum: CohortCurriculumItem[];
  registrationUrl: string;
  recordingUrl?: string;
  featured: boolean;
  image?: string;
};

export const COHORTS: Cohort[] = [
  {
    id: "cohort-01",
    title: "September 2026 Edition",
    status: "UPCOMING",
    startDate: "2026-09-18T18:30:00Z", // 7:30 PM WAT (WAT is UTC+1, so 18:30 UTC)
    duration: "2 weeks",
    price: "Free (50 Slots Only)",
    sessionDays: "Fridays and Saturdays",
    sessionsPerWeek: 2,
    format: "Live Sessions",
    platform: "Google Meet",
    description:
      "A 2-week cohort focused on trust in decentralized systems. Understand decentralization, see how smart contracts turn rules into verifiable code, and build with a clearer view of the systems behind the code.",
    topics: [
      "Protocol architecture",
      "EVM mechanics",
      "Reading complex codebases",
      "Deconstructing smart contracts",
      "First-principles reasoning",
    ],
    curriculum: [
      {
        id: "Session 1 - Theory",
        title: "Why Trust Matters",
        facilitator: "Uchenna Ofoma (Facilitator)",
        description:
          "Understand how blockchain removes the need for a central authority and distributes trust across the network.",
      },
      {
        id: "Session 1 - Practical",
        title: "Build the Logic of Trust",
        facilitator: "Obinna Duru (Facilitator)",
        description:
          "Build a smart contract that acts as a neutral arbiter. See how code can enforce rules without human intervention.",
      },
      {
        id: "Session 2 - Theory",
        title: "Why Trust the Code",
        facilitator: "Uchenna Ofoma (Facilitator)",
        description:
          "Understand immutability and why deployed code can be trusted to keep enforcing the same rules.",
      },
      {
        id: "Session 2 - Practical",
        title: "Build on the Rock",
        facilitator: "Obinna Duru (Facilitator)",
        description:
          "See what makes smart contracts permanent. Build with code that cannot be changed after deployment.",
      },
    ],
    registrationUrl: "https://luma.com/t77y7n1y",
    recordingUrl: "Recordings published free on YouTube",
    featured: true,
    image: "/images/events/event-asset-1.jpeg",
  },
];
