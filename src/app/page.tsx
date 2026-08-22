import { HeroSection } from "@/components/home/HeroSection";
import { YouTubeSection } from "@/components/home/YouTubeSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { StorySection } from "@/components/home/StorySection";
import { ArchitectSection } from "@/components/home/ArchitectSection";
import { CTASection } from "@/components/home/CTASection";
import { ResearchPreviewSection } from "@/components/home/ResearchPreviewSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { CollaborationPreviewSection } from "@/components/home/CollaborationPreviewSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Contract Engineering & Security Laboratory",
  description:
    "BinnaDev Lab is an elite software engineering laboratory specializing in smart contract development, Web3 security, protocol architecture, and rigorous technical cohorts.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <HeroSection />
      <PartnersMarquee />
      <YouTubeSection />
      <ManifestoSection />
      <StorySection />
      <ResearchPreviewSection />
      <ArchitectSection />
      <CommunitySection />
      <CollaborationPreviewSection />
      <NewsletterSection />
      <CTASection />
    </div>
  );
}
