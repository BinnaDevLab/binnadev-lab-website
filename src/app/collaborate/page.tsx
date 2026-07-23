import { Container } from "@/components/ui/Container";
import { H1, H2, Body, Mono } from "@/components/ui/Typography";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { ServicesGrid } from "@/components/collaborate/ServicesGrid";
import { CaseStudiesSection } from "@/components/collaborate/CaseStudiesSection";
import { ClientMarquee } from "@/components/collaborate/ClientMarquee";
import { CollaborationProcessSection } from "@/components/collaborate/CollaborationProcessSection";
import { InquiryForm } from "@/components/collaborate/InquiryForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Collaborate",
  description: "Strategic partnerships, protocol architecture, and smart contract security reviews.",
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
          <H1 className="mb-6 text-5xl md:text-6xl">We Build Trust in Decentralized Systems</H1>
          <Body className="text-xl text-muted leading-relaxed">
            BinnaDev Lab is an elite engineering organization partnering with founders, enterprises, and protocols to architect scalable systems and secure billions in value.
          </Body>
        </div>
      </Container>

      {/* 2. Philosophy / Why Us */}
      <Container className="relative z-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <H2 className="mb-6">Engineering Rigor as a Default State.</H2>
            <Body className="text-muted leading-relaxed mb-6">
              Most digital agencies treat Web3 as a feature. We treat it as an adversarial environment. Every line of code deployed to mainnet must withstand constant attack.
            </Body>
            <Body className="text-muted leading-relaxed">
              We don't just write code - we design unbreakable invariants, mathematically model cryptoeconomics, and execute rigorous security audits. Our approach ensures that your protocol is secure by design.
            </Body>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/5 bg-carbon/50 group">
            <Image 
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop" 
              alt="BinnaDev Lab Engineering" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-royal/10 mix-blend-overlay" />
          </div>
        </div>
      </Container>

      {/* 3. Partners Marquee */}
      <div className="mb-32">
        <div className="text-center mb-8">
          <Mono className="text-muted text-sm uppercase tracking-widest">Trusted By Elite Organizations</Mono>
        </div>
        <PartnersMarquee />
      </div>

      {/* 4. Core Capabilities */}
      <ServicesGrid />

      {/* 5. Case Studies */}
      <CaseStudiesSection />

      {/* 6. Client Testimonials */}
      <ClientMarquee />

      {/* 7. Collaboration Process */}
      <CollaborationProcessSection />

      {/* 8. Inquiry Form */}
      <InquiryForm />

    </div>
  );
}
