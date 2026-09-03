import { HeroSection } from "@/components/home/HeroSection";
import { IntroVideoSection } from "@/components/home/IntroVideoSection";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import below-the-fold components to reduce initial JS payload and Total Blocking Time (TBT)
const ManifestoSection = dynamic(() => import("@/components/home/ManifestoSection").then(mod => mod.ManifestoSection));
const StorySection = dynamic(() => import("@/components/home/StorySection").then(mod => mod.StorySection));
const YouTubeSection = dynamic(() => import("@/components/home/YouTubeSection").then(mod => mod.YouTubeSection));
const ResearchPreviewSection = dynamic(() => import("@/components/home/ResearchPreviewSection").then(mod => mod.ResearchPreviewSection));
const ArchitectSection = dynamic(() => import("@/components/home/ArchitectSection").then(mod => mod.ArchitectSection));
const CollaborationPreviewSection = dynamic(() => import("@/components/home/CollaborationPreviewSection").then(mod => mod.CollaborationPreviewSection));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection").then(mod => mod.TestimonialsSection));
const PartnersMarquee = dynamic(() => import("@/components/home/PartnersMarquee").then(mod => mod.PartnersMarquee));
const NewsletterSection = dynamic(() => import("@/components/home/NewsletterSection").then(mod => mod.NewsletterSection));
const CTASection = dynamic(() => import("@/components/home/CTASection").then(mod => mod.CTASection));

export const metadata: Metadata = {
  title: "BinnaDevLab | Reasoning Precedes Coding",
  description:
    "BinnaDevLab is an engineering laboratory where thoughtful thinking meets rigorous execution. We specialize in smart contract development, Web3 security, protocol architecture, and building reliable decentralized systems from first principles.",
  openGraph: {
    title: "BinnaDevLab | Reasoning Precedes Coding",
    description:
      "An engineering laboratory where thoughtful thinking meets rigorous execution. Learn to think deeply, build responsibly, and construct reliable systems.",
    images: [
      {
        url: "/icon/og-image.png",
        width: 1200,
        height: 630,
        alt: "BinnaDevLab - Reasoning Precedes Coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BinnaDevLab | Reasoning Precedes Coding",
    description:
      "An engineering laboratory where thoughtful thinking meets rigorous execution. We specialize in smart contract architecture and reliable decentralized systems.",
    images: ["/icon/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      {/* 1 - Orientation */}
      <HeroSection />
      {/* 1.5 - The Hook */}
      <IntroVideoSection />
      {/* 2 - The conviction */}
      <ManifestoSection />
      {/* 3 - The standard */}
      <StorySection />
      {/* 4 - Evidence: video */}
      <YouTubeSection />
      {/* 5 - Evidence: research */}
      <ResearchPreviewSection />
      {/* 6 - The origin */}
      <ArchitectSection />
      {/* 7 - Three paths */}
      <CollaborationPreviewSection />
      {/* 8 - Human validation */}
      <TestimonialsSection />
      {/* 9 - Ecosystem */}
      <PartnersMarquee />
      {/* 10 - Stay connected */}
      <NewsletterSection />
      {/* 11 - Final invitation */}
      <CTASection />
    </div>
  );
}
