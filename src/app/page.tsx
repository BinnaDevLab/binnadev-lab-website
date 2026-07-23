import { HeroSection } from "@/components/home/HeroSection";
import { VideoIntroSection } from "@/components/home/VideoIntroSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { LevelsSection } from "@/components/home/LevelsSection";
import { ArchitectSection } from "@/components/home/ArchitectSection";
import { CTASection } from "@/components/home/CTASection";
import { ResearchPreviewSection } from "@/components/home/ResearchPreviewSection";
import { CulturePreviewSection } from "@/components/home/CulturePreviewSection";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { CollaborationPreviewSection } from "@/components/home/CollaborationPreviewSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <HeroSection />
      <PartnersMarquee />
      <VideoIntroSection />
      <ManifestoSection />
      <LevelsSection />
      <ResearchPreviewSection />
      <ArchitectSection />
      <CulturePreviewSection />
      <CollaborationPreviewSection />
      <CTASection />
    </div>
  );
}
