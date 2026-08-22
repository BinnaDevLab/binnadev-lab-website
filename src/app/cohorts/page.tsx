import { Metadata } from "next";
import { COHORTS } from "@/data/cohorts";
import { COMMUNITY_EVENTS } from "@/data/events";

import { CohortHero } from "@/components/cohorts/CohortHero";
import { CohortOverview } from "@/components/cohorts/CohortOverview";
import { CohortCurriculum } from "@/components/cohorts/CohortCurriculum";
import { UpcomingEvents } from "@/components/cohorts/UpcomingEvents";
import { CommunityHistory } from "@/components/cohorts/CommunityHistory";

export const metadata: Metadata = {
  title: "Engineering Cohorts | Smart Contract & Web3 Security Training",
  description:
    "Intensive, rigorous engineering cohorts covering smart contract development, EVM mechanics, protocol architecture, and Web3 security. Learn how to reason about complex decentralized systems.",
  alternates: {
    canonical: "/cohorts",
  },
};

export default function CohortsPage() {
  const upcomingCohort = COHORTS[0]; // BinnaDev Lab First Official Cohort

  // Dynamically partition events
  const upcomingEvents = COMMUNITY_EVENTS.filter(
    (e) => e.status === "UPCOMING",
  );
  const pastEvents = COMMUNITY_EVENTS.filter((e) => e.status === "PAST");

  return (
    <div className="bg-obsidian min-h-screen selection:bg-gold selection:text-obsidian">
      <CohortHero />

      {/* COHORT COMES FIRST */}
      <CohortOverview cohort={upcomingCohort} />
      <CohortCurriculum curriculum={upcomingCohort.curriculum} />

      {/* UPCOMING EVENTS */}
      <UpcomingEvents events={upcomingEvents} />

      {/* COMMUNITY HISTORY */}
      <CommunityHistory events={pastEvents} />
    </div>
  );
}
