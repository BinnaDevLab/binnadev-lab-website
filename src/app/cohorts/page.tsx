import { Metadata } from "next";
import { COHORTS } from "@/data/cohorts";
import { COMMUNITY_EVENTS } from "@/data/events";

import { CohortHero } from "@/components/cohorts/CohortHero";
import { CohortOverview } from "@/components/cohorts/CohortOverview";
import { CohortCurriculum } from "@/components/cohorts/CohortCurriculum";
import { UpcomingEvents } from "@/components/cohorts/UpcomingEvents";
import { CommunityHistory } from "@/components/cohorts/CommunityHistory";

export const metadata: Metadata = {
  title: "Engineering Cohorts | BinnaDevLab",
  description:
    "Intensive, rigorous engineering cohorts covering smart contract development, EVM mechanics, protocol architecture, and Web3 security. Learn how to reason about complex decentralized systems at BinnaDevLab.",
  openGraph: {
    title: "Engineering Cohorts | BinnaDevLab",
    description:
      "Intensive, rigorous engineering cohorts covering smart contract development, EVM mechanics, protocol architecture, and Web3 security. Join BinnaDevLab to master decentralized systems.",
    images: [
      {
        url: COHORTS[0]?.image || "/icons/og-image.jpg",
        width: 1200,
        height: 630,
        alt: COHORTS[0]?.title || "Engineering Cohorts | BinnaDevLab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Cohorts | BinnaDevLab",
    description:
      "Intensive, rigorous engineering cohorts covering smart contract development, EVM mechanics, protocol architecture, and Web3 security.",
    images: [COHORTS[0]?.image || "/icons/og-image.jpg"],
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            COHORTS.map((cohort) => ({
              "@context": "https://schema.org",
              "@type": "Course",
              name: cohort.title,
              description: cohort.description,
              provider: {
                "@type": "Organization",
                name: "BinnaDevLab",
                sameAs: "https://www.binnadev.com"
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: cohort.format.includes("Live") ? "synchronous" : "asynchronous",
                startDate: cohort.startDate,
                endDate: cohort.endDate
              },
              offers: {
                "@type": "Offer",
                category: cohort.price.includes("Free") ? "Free" : "Paid"
              }
            }))
          ),
        }}
      />
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
