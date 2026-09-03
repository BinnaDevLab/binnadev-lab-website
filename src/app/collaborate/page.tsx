import { Container } from "@/components/ui/Container";
import { H1, Mono } from "@/components/ui/Typography";
import { ServicesGrid } from "@/components/collaborate/ServicesGrid";
import { CaseStudiesSection } from "@/components/collaborate/CaseStudiesSection";
import { CollaboratorFieldNotes } from "@/components/collaborate/CollaboratorFieldNotes";
import { InquiryForm } from "@/components/collaborate/InquiryForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commercial Engineering | Protocol Architecture & Smart Contracts",
  description:
    "Hire an elite protocol architect and smart contract engineer for your DeFi project. BinnaDevLab provides Web3 security services, architecture design, and systems engineering.",
  openGraph: {
    title: "Commercial Engineering | BinnaDevLab",
    description:
      "Hire an elite protocol architect and smart contract engineer for your DeFi project. BinnaDevLab provides Web3 security services and systems engineering.",
    images: [
      {
        url: "/icon/og-image.png",
        width: 1200,
        height: 630,
        alt: "Collaborate with BinnaDevLab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Engineering | BinnaDevLab",
    description:
      "Hire an elite protocol architect and smart contract engineer for your DeFi project.",
    images: ["/icon/og-image.png"],
  },
  alternates: {
    canonical: "/collaborate",
  },
};

export default function CollaboratePage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden bg-obsidian selection:bg-gold selection:text-obsidian">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Collaborate with BinnaDev Lab",
            description:
              "Engage BinnaDev Lab for smart contract development, protocol architecture, and Web3 security services.",
            url: "https://binnadevlab.vercel.app/collaborate",
          }),
        }}
      />
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-white/5 via-carbon/20 to-transparent opacity-60 pointer-events-none" />

      {/* 1. Hero */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center mb-20">
          <div className="xl:col-span-7">
            <H1 className="mb-6 text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              We don&apos;t just implement features.{" "}
              <br className="hidden md:block" />
              We architect resilient systems.
            </H1>
          </div>

          {/* Hero Visual */}
          <div className="xl:col-span-5 relative hidden xl:block">
            <div className="relative aspect-video xl:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/shared/shared-asset-10.jpeg"
                alt="Engineering Architecture"
                fill
                className="object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-obsidian/40 to-transparent mix-blend-multiply" />
              {/* Overlay graphics */}
              <div className="absolute top-10 right-10 w-32 h-32 border border-gold/20 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 border border-gold/40 rounded-full border-dashed animate-spin-slow" />
              </div>
              <div className="absolute bottom-10 left-10 p-6 bg-obsidian/80 backdrop-blur-md border border-white/10 rounded-lg">
                <Mono className="text-xs text-gold tracking-widest uppercase mb-1">
                  Status
                </Mono>
                <div className="text-white font-mono text-sm">
                  Systemic Invariants: Enforced
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Proof of Work (Case Studies) */}
      <CaseStudiesSection />

      {/* 3. Peer Reviews (Testimonials as Marquee) */}
      <CollaboratorFieldNotes />

      {/* 4. Core Capabilities (Reframed as Problem Domains) */}
      <ServicesGrid />

      {/* 5. Inquiry Form (Conversational) */}
      <InquiryForm />
    </div>
  );
}
