export type CohortCurriculumItem = {
  id: string;
  title: string;
  description: string;
  datetime?: string;
  facilitator?: string;
};

export type Cohort = {
  id: string;
  title: string;
  status: "UPCOMING" | "LIVE" | "COMPLETED";
  startDate: string;
  startDateDisplay?: string;
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
    title: "BinnaDevLab October Cohort",
    status: "UPCOMING",
    startDate: "2026-10-21T19:00:00Z", // 8:00 PM WAT (WAT is UTC+1, so 19:00 UTC)
    startDateDisplay: "21st & 22nd October 2026 | 8:00 PM – 9:00 PM WAT",
    duration: "2 days",
    price: "Free",
    sessionDays: "Wednesday and Thursday",
    sessionsPerWeek: 2,
    format: "Live Sessions",
    platform: "Google Meet",
    description:
      "Tokenization is more than creating a token. It is about understanding what value, ownership, or utility belongs onchain, why it belongs there, and how to build the system behind it. In this cohort, explore real-world applications of tokenization and learn to implement ERC-20, ERC-721, and ERC-1155.",

    topics: [
      "Understanding Tokenization",
      "Identifying Real-World Use Cases",
      "Bringing Real Impact Onchain",
      "Choosing the Right Token Standard",
      "ERC-20: Fungible Tokens",
      "ERC-721: Non-Fungible Tokens",
      "ERC-1155: Multi-Token Standard",
      "Implementing Token Standards in Solidity",
    ],
    curriculum: [
      {
        id: "Session 1 - Theory",
        title: "Tokenization: Bringing Real Impact Onchain",
        datetime: "Wednesday, October 21, 2026 | 8:00 PM – 9:00 PM WAT",
        facilitator: "Chinedu Jamike (Facilitator)",
        description:
          "Explore what tokenization means, where it creates real value, and how to reason about bringing assets, ownership, and utility onchain.",
      },
      {
        id: "Session 2 - Practical",
        title: "Implementing ERC Token Standards",
        datetime: "Thursday, October 22, 2026 | 8:00 PM – 9:00 PM WAT",
        facilitator: "Obinna Duru (Facilitator)",
        description:
          "Move from concepts to code with a guided introduction to ERC-20, ERC-721, and ERC-1155. Understand how the standards differ and explore their core implementation in Solidity.",
      },
    ],
    registrationUrl: "https://luma.com/veydilr6",
    recordingUrl: "Recordings published free on YouTube",
    featured: true,
    image: "/images/events/event-asset-1.jpeg",
  },
];
