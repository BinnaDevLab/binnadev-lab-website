import { HeroSection } from "@/components/home/HeroSection";
import { IntroVideoSection } from "@/components/home/IntroVideoSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { StorySection } from "@/components/home/StorySection";
import { YouTubeSection } from "@/components/home/YouTubeSection";
import { ResearchPreviewSection } from "@/components/home/ResearchPreviewSection";
import { ArchitectSection } from "@/components/home/ArchitectSection";
import { CollaborationPreviewSection } from "@/components/home/CollaborationPreviewSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { CTASection } from "@/components/home/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BinnaDevLab | Reasoning Precedes Coding",
  description:
    "BinnaDevLab is a software engineering laboratory focused on smart contracts, Web3 security, and building developers who reason before they code.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      {/* 1 — Orientation */}
      <HeroSection />
      {/* 1.5 — The Hook */}
      <IntroVideoSection />
      {/* 2 — The conviction */}
      <ManifestoSection />
      {/* 3 — The standard */}
      <StorySection />
      {/* 4 — Evidence: video */}
      <YouTubeSection />
      {/* 5 — Evidence: research */}
      <ResearchPreviewSection />
      {/* 6 — The origin */}
      <ArchitectSection />
      {/* 7 — Three paths */}
      <CollaborationPreviewSection />
      {/* 8 — The environment */}
      <CommunitySection />
      {/* 9 — Human validation */}
      <TestimonialsSection />
      {/* 10 — Ecosystem */}
      <PartnersMarquee />
      {/* 11 — Stay connected */}
      <NewsletterSection />
      {/* 12 — Final invitation */}
      <CTASection />
    </div>
  );
}
