import { HeroSection } from "@/components/home/HeroSection";
import { VideoIntroSection } from "@/components/home/VideoIntroSection";
import { YouTubeSection } from "@/components/home/YouTubeSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { StorySection } from "@/components/home/StorySection";
import { ArchitectSection } from "@/components/home/ArchitectSection";
import { CTASection } from "@/components/home/CTASection";
import { ResearchPreviewSection } from "@/components/home/ResearchPreviewSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { CollaborationPreviewSection } from "@/components/home/CollaborationPreviewSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "BinnaDev Lab",
    url: "https://binnadev-lab.vercel.app",
    description: "An elite engineering laboratory where developers are trained to think, reason, interrogate systems, and architect secure smart contracts.",
    sameAs: [
      "https://github.com/obinnafranklinduru"
    ]
  };

  return (
    <div className="bg-obsidian min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <PartnersMarquee />
      <YouTubeSection />
      <ManifestoSection />
      <StorySection />
      <ResearchPreviewSection />
      <ArchitectSection />
      <CommunitySection />
      <CollaborationPreviewSection />
      <CTASection />
    </div>
  );
}
