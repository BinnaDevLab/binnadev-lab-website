import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import { ArrowRight, Cpu, Network, ShieldAlert } from "lucide-react";
import Image from "next/image";
import { BlueprintImage } from "@/components/ui/BlueprintImage";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { MANIFESTO_POINTS } from "@/data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | BinnaDev Lab",
  description:
    "The core engineering principles of BinnaDev Lab: Interrogating systems, prioritizing mental models, and treating security as an emergent property of deep comprehension.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-obsidian min-h-screen relative selection:bg-gold selection:text-obsidian">
      {/* 1. Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shared/shared-asset-1.jpeg"
            alt="Philosophy Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl">
          <FadeIn delay={0.2} direction="up">
            <Mono className="text-gold mb-8 block tracking-widest uppercase">
              The Manifesto
            </Mono>
            <H1 className="text-6xl md:text-8xl mb-8 leading-tight">
              Reasoning
              <br />
              Precedes
              <br />
              Coding.
            </H1>
            <Body className="text-2xl text-muted font-light max-w-2xl mx-auto">
              BinnaDev Lab exists to bridge the gap between writing code and
              architecting resilient, secure digital infrastructure. A space
              where global protocols meet elite local talent.
            </Body>
          </FadeIn>
        </Container>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* 2. The Problem Statement */}
      <section className="py-32 bg-obsidian">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <QuoteIcon className="w-12 h-12 text-white/10 mx-auto mb-8" />
            <H2 className="text-4xl md:text-5xl leading-tight mb-8">
              The industry is optimizing for speed.
              <br />
              <span className="text-gold">We are optimizing for truth.</span>
            </H2>
            <Body className="text-xl text-muted leading-relaxed">
              It is easy to memorize a framework or follow a tutorial to deploy
              a smart contract. But what happens when you encounter a system
              architecture you have never seen before? We believe that instead
              of merely learning syntax, developers must master the fundamental
              reasoning that governs all resilient systems.
            </Body>
          </div>
        </Container>
      </section>

      {/* 3. Sticky Storytelling Section */}
      <section className="relative bg-carbon/20">
        {MANIFESTO_POINTS.map((point, idx) => (
          <div
            key={idx}
            className="min-h-screen flex items-center sticky top-0 bg-obsidian overflow-hidden border-t border-white/5"
          >
            <Container>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <Mono className="text-gold mb-6 block tracking-widest uppercase flex items-center gap-4">
                    <point.icon className="w-5 h-5" /> Chapter 0{idx + 1}
                  </Mono>
                  <H2 className="text-4xl md:text-6xl mb-8 leading-tight">
                    {point.title}
                  </H2>
                  <Body className="text-xl text-muted leading-relaxed">
                    {point.content}
                  </Body>
                </div>

                <div
                  className={`relative h-[600px] w-full rounded-2xl overflow-hidden ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <BlueprintImage
                    src={point.image}
                    alt={point.title}
                    fill
                    overlayColor={idx % 2 === 0 ? "white" : "gold"}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Container>
          </div>
        ))}
      </section>

      {/* 4. The Practice */}
      <section className="py-40 bg-obsidian relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(240,200,70,0.03)_0%,_transparent_70%)] pointer-events-none" />

        <Container className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <Mono className="text-gold mb-6 block tracking-[0.2em] uppercase text-sm">
              The Three Pillars
            </Mono>
            <H2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] tracking-tight">
              Thoughtful. Reliable. Excellent.
            </H2>
            <div className="space-y-6">
              <Body className="text-xl text-white/70 leading-relaxed font-light">
                The ideas behind BinnaDev Lab are not meant to remain on a page.
                They shape how we build, how we research, how we collaborate,
                and how we approach every single line of code.
              </Body>
              <Body className="text-xl text-white/70 leading-relaxed font-light">
                Through{" "}
                <strong className="text-white font-medium">
                  cohorts, community discussions, technical writing, and real
                  engineering work
                </strong>
                , the Lab creates a space where developers can move beyond
                simply learning tools, and begin understanding why systems
                behave the way they do.
              </Body>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
            <div className="p-10 bg-carbon/30 border border-white/5 rounded-xl hover:bg-carbon hover:border-gold/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Cpu className="w-8 h-8 text-white/60 group-hover:text-gold transition-colors mb-8 relative z-10" />
              <H3 className="text-2xl mb-4 group-hover:text-white transition-colors tracking-wide relative z-10">
                Thoughtful
              </H3>
              <p className="text-base text-white/60 leading-relaxed font-light relative z-10">
                Deep reasoning before action. We prioritize thinking problems
                through completely, delivering wise, thoroughly considered
                solutions over rushed execution.
              </p>
            </div>
            <div className="p-10 bg-carbon/30 border border-white/5 rounded-xl hover:bg-carbon hover:border-gold/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Network className="w-8 h-8 text-white/60 group-hover:text-gold transition-colors mb-8 relative z-10" />
              <H3 className="text-2xl mb-4 group-hover:text-white transition-colors tracking-wide relative z-10">
                Reliable
              </H3>
              <p className="text-base text-white/60 leading-relaxed font-light relative z-10">
                Building trust in all systems. In a Web3 ecosystem centered on
                trustless verification, being fundamentally reliable establishes
                dependable bonds with our community and partners.
              </p>
            </div>
            <div className="p-10 bg-carbon/30 border border-white/5 rounded-xl hover:bg-carbon hover:border-gold/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <ShieldAlert className="w-8 h-8 text-white/60 group-hover:text-gold transition-colors mb-8 relative z-10" />
              <H3 className="text-2xl mb-4 group-hover:text-white transition-colors tracking-wide relative z-10">
                Excellent
              </H3>
              <p className="text-base text-white/60 leading-relaxed font-light relative z-10">
                The ultimate standard of craftsmanship. Excellence means
                producing work so refined that it stands as an undeniable
                benchmark of quality and architectural beauty.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="border-l-[3px] border-gold pl-6 md:pl-10 text-white italic my-10 py-2">
              <p className="text-2xl md:text-3xl font-display leading-tight mb-4">
                The goal is not to create developers who can write more code.
              </p>
              <p className="text-2xl md:text-3xl font-display leading-tight text-white/80">
                It is to help create engineers who know what deserves to be
                built, why it should work, and how to question it when it
                doesn&apos;t.
              </p>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* 5. Cinematic Closing */}
      <section className="h-screen flex items-center justify-center bg-carbon relative border-t border-white/10 overflow-hidden">
        <Container className="relative z-10 text-center">
          <FadeIn delay={0} direction="up">
            <H2 className="text-5xl md:text-8xl text-white/50 font-bold uppercase tracking-tighter mb-8 leading-none">
              Engineering
              <br />
              is a<br />
              Responsibility.
            </H2>
            <Body className="text-2xl text-white/60 max-w-2xl mx-auto mb-12">
              Join the collective. Help us build the future of decentralized
              systems.
            </Body>
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-mono uppercase tracking-widest text-sm"
            >
              Work with the Lab <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}

function QuoteIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 21L16.439 16.035C17.027 14.887 17.321 13.785 17.321 12.729C17.321 11.232 16.791 10.021 15.731 9.09601C14.671 8.17101 13.415 7.70801 11.963 7.70801V3.03601C14.473 3.03601 16.631 3.92201 18.437 5.69401C20.243 7.46601 21.146 9.80301 21.146 12.705C21.146 14.369 20.813 15.961 20.147 17.481C19.481 19.001 18.57 20.174 17.414 21H14.017ZM2.85303 21L5.27503 16.035C5.86303 14.887 6.15703 13.785 6.15703 12.729C6.15703 11.232 5.62703 10.021 4.56703 9.09601C3.50703 8.17101 2.25103 7.70801 0.799026 7.70801V3.03601C3.30903 3.03601 5.46703 3.92201 7.27303 5.69401C9.07903 7.46601 9.98203 9.80301 9.98203 12.705C9.98203 14.369 9.64903 15.961 8.98303 17.481C8.31703 19.001 7.40603 20.174 6.25003 21H2.85303Z" />
    </svg>
  );
}
