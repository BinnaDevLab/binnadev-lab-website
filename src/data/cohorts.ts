export type CohortCurriculumItem = {
  id: string;
  title: string;
  description: string;
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
    title: "BinnaDev Lab First Official Cohort",
    status: "UPCOMING",
    startDate: "2026-09-01T00:00:00Z",
    duration: "2 weeks",
    price: "Free",
    sessionDays: "Tuesdays and Thursdays",
    sessionsPerWeek: 2,
    format: "Live Sessions",
    platform: "Google Meet",
    description:
      "A concentrated 2-week technical sprint designed to strip away abstraction. We rebuild your foundational understanding of decentralized systems, focusing heavily on protocol architecture and secure smart contract mechanics.",
    topics: [
      "Protocol architecture",
      "EVM mechanics",
      "Reading complex codebases",
      "Deconstructing smart contracts",
      "First-principles reasoning",
    ],
    curriculum: [
      {
        id: "c-1",
        title: "Deconstruction",
        description:
          "Breaking down high-level concepts into their primitive components. We don't write code until we understand the system.",
      },
      {
        id: "c-2",
        title: "Navigation",
        description:
          "How to read, navigate, and make sense of massive open-source repositories without feeling lost.",
      },
      {
        id: "c-3",
        title: "Reasoning",
        description:
          "Questioning assumptions, tracing state, and understanding why systems behave the way they do.",
      },
      {
        id: "c-4",
        title: "Application",
        description:
          "Hands-on coding exercises to reinforce understanding and build confidence in applying concepts.",
      },
    ],
    registrationUrl: "https://api.whatsapp.com/send?phone=2348064248389",
    recordingUrl: "Recordings published free on YouTube",
    featured: true,
    image: "/images/shared/shared-asset-14.jpeg",
  },
];
