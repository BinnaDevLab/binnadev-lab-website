import { Container } from "@/components/ui/Container";
import { H1, H2, Body, Mono } from "@/components/ui/Typography";
import { ServicesGrid } from "@/components/collaborate/ServicesGrid";
import { CaseStudiesSection } from "@/components/collaborate/CaseStudiesSection";
import { CollaboratorFieldNotes } from "@/components/collaborate/CollaboratorFieldNotes";
import { InquiryForm } from "@/components/collaborate/InquiryForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commercial Engineering | Protocol Architecture & Smart Contracts",
  description:
    "Engage BinnaDev Lab for protocol architecture, end-to-end decentralized systems, smart contract security, and advanced R&D.",
  alternates: {
    canonical: "/collaborate",
  },
};

export default function CollaboratePage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden bg-obsidian selection:bg-gold selection:text-obsidian">
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
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center mb-32">
          <div className="xl:col-span-7">
            <Mono className="text-gold mb-6 block tracking-widest uppercase flex items-center gap-2">
              Commercial Engineering
            </Mono>
            <H1 className="mb-8 text-5xl md:text-7xl leading-[1.1] tracking-tight">
              We don&apos;t just implement features.{" "}
              <br className="hidden md:block" />
              We architect resilient systems.
            </H1>
            <div className="space-y-6">
              <Body className="text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
                If your protocol faces a complex engineering challenge,
                BinnaDev Lab provides the architectural clarity, rigorous
                implementation, and security posture required to deliver it
                securely.
              </Body>
              <Body className="text-xl text-white/60 font-light leading-relaxed max-w-2xl">
                We design systems where important rules, money, trust, and
                failure conditions have to be absolutely correct.
              </Body>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="xl:col-span-5 relative hidden xl:block">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/shared/shared-asset-3.jpeg"
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

      {/* 4. The Commercial Bridge */}
      <Container className="relative z-10 py-32 border-y border-white/5 bg-carbon/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <H2 className="text-3xl md:text-5xl mb-8 leading-tight">
              The systems are different.
              <br />
              <span className="text-gold">
                The engineering discipline is the same.
              </span>
            </H2>
            <Body className="text-xl text-white/70 leading-relaxed font-light mb-8">
              We bring that discipline to projects involving smart contracts,
              decentralized applications, financial infrastructure, protocol
              architecture, security, and technical teams that need deeper
              engineering capability.
            </Body>
            <Body className="text-lg text-white/50 leading-relaxed font-light">
              Commercial engagements fund our localized research and community
              building. In turn, that community produces the extreme engineering
              rigor we deploy to protect your protocol.
            </Body>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/shared/shared-asset-4.jpeg"
                alt="Engineering Discipline"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-obsidian/30 mix-blend-multiply" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
            </div>
          </div>
        </div>
      </Container>

      {/* 5. Core Capabilities (Reframed as Problem Domains) */}
      <ServicesGrid />

      {/* 6. Inquiry Form (Conversational) */}
      <InquiryForm />
    </div>
  );
}
