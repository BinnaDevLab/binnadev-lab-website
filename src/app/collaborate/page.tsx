import { Container } from "@/components/ui/Container";
import { H1, H2, Body, Mono } from "@/components/ui/Typography";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { ServicesGrid } from "@/components/collaborate/ServicesGrid";
import { CaseStudiesSection } from "@/components/collaborate/CaseStudiesSection";
import { CollaboratorFieldNotes } from "@/components/collaborate/CollaboratorFieldNotes";
import { CollaborationProcessSection } from "@/components/collaborate/CollaborationProcessSection";
import { InquiryForm } from "@/components/collaborate/InquiryForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Strategic collaboration, protocol architecture, and smart contract security reviews.",
};

export default function CollaboratePage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden bg-obsidian">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-royal/5 via-carbon/20 to-transparent opacity-60" />

      {/* 1. Hero */}
      <Container className="relative z-10">
        <div className="max-w-3xl mb-24">
          <Mono className="text-gold mb-4 block tracking-widest uppercase flex items-center gap-2">
            Engineering Services
          </Mono>
          <H1 className="mb-6 text-5xl md:text-6xl">
            We Build Trust in Decentralized Systems
          </H1>
          <Body className="text-xl text-muted leading-relaxed">
            BinnaDev Lab collaborates with founders, protocols, and engineering
            teams to build secure, well-reasoned decentralized systems. From
            audits to full-stack DApp development.
          </Body>
        </div>
      </Container>

      {/* Philosophy / Why Us */}
      <Container className="relative z-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <H2 className="mb-6">Engineering Rigor as a Default State.</H2>
            <Body className="text-muted leading-relaxed mb-6">
              Most digital agencies treat Web3 as a feature. We treat it as an
              adversarial environment. Every line of code deployed to mainnet
              must withstand constant attack.
            </Body>
            <Body className="text-muted leading-relaxed">
              We don&apos;t just write code. We design unbreakable invariants,
              model cryptoeconomics, and execute rigorous security audits. Your
              protocol should be secure by design, not by luck.
            </Body>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/5 bg-carbon/50 group">
            <Image
              src="/images/shared/shared-asset-2.jpeg"
              alt="BinnaDev Lab Engineering"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-royal/10 mix-blend-overlay" />
          </div>
        </div>
      </Container>

      {/* Professional ecosystem */}
      <div className="mb-32">
        <PartnersMarquee />
      </div>

      {/* 4. Core Capabilities */}
      <ServicesGrid />

      {/* 5. Case Studies */}
      <CaseStudiesSection />

      {/* 6. Client Testimonials */}
      <CollaboratorFieldNotes />

      {/* 7. Collaboration Process */}
      <CollaborationProcessSection />

      {/* 8. Inquiry Form */}
      <InquiryForm />
    </div>
  );
}
