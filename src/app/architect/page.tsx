import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import {
  ArrowRight,
  Terminal,
  ExternalLink,
  CheckCircle,
  BrainCircuit,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TIMELINE, PRINCIPLES, RESEARCH } from "@/data/architect";
import { socialLinks } from "@/data/social";
import { ArchitectYouTubeList } from "@/components/architect/ArchitectYouTubeList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Architect | Protocol Design & Smart Contract Engineering",
  description:
    "Obinna Franklin Duru is a senior protocol architect and smart contract engineer specializing in EVM mechanics, formal verification, and secure financial infrastructure.",
  alternates: {
    canonical: "/architect",
  },
};

export default function ArchitectPage() {
  const renderDescription = (description: string | string[]) => {
    if (Array.isArray(description)) {
      return description.map((paragraph, i) => {
        if (paragraph.startsWith("> **")) {
          return (
            <blockquote
              key={i}
              className="border-l-[3px] border-gold pl-6 text-white italic my-10 text-2xl md:text-3xl font-display leading-tight max-w-3xl"
            >
              {paragraph.replace(/> \*\*(.*?)\*\*/, "$1")}
            </blockquote>
          );
        } else if (paragraph.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="border-l-[3px] border-white/20 pl-6 text-muted italic my-8 text-xl max-w-3xl"
            >
              {paragraph.replace(/> (.*)/, "$1")}
            </blockquote>
          );
        } else {
          const formatted = paragraph.replace(
            /\*\*(.*?)\*\*/g,
            '<strong class="text-white font-medium">$1</strong>',
          );
          return (
            <p
              key={i}
              className="text-lg md:text-xl text-white/60 leading-relaxed mb-6 font-light max-w-3xl"
              dangerouslySetInnerHTML={{ __html: formatted }}
            />
          );
        }
      });
    }
    return (
      <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-3xl">
        {description}
      </p>
    );
  };

  const principleSubtitles = [
    "Stability • Consistency • Resilience",
    "Systems Thinking • Deliberation",
    "Precision • Refinement • Standards",
  ];

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-32 relative selection:bg-gold selection:text-obsidian">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-white/5 via-carbon/10 to-transparent opacity-60" />
      </div>

      <Container className="relative z-10">
        {/* 1. Hero Section */}
        <section className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Mono className="text-gold mb-6 block tracking-widest uppercase flex items-center gap-2">
              <Terminal className="w-4 h-4" /> The Architect
            </Mono>
            <H1 className="mb-8 text-5xl md:text-7xl leading-tight">
              Obinna Franklin Duru
            </H1>
            <Body className="text-2xl text-white/90 leading-relaxed mb-6 font-light">
              Smart Contract Engineer. Security Researcher. Founder of BinnaDev
              Lab.
            </Body>
            <Body className="text-lg text-muted leading-relaxed mb-10 max-w-xl font-light">
              Bridging the gap between global Web3 protocols and elite local
              talent. The work blends the extreme rigor of secure smart contract
              architecture with the human care of ethical design, building
              systems that survive adversarial conditions by choosing clarity
              and mathematical certainty over unnecessary complexity.
            </Body>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/collaborate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-obsidian rounded-sm font-medium hover:bg-gold transition-colors"
              >
                Collaborate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-sm font-medium hover:bg-white/5 transition-colors"
              >
                GitHub Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative rounded-xl overflow-hidden border border-white/10 group bg-carbon/50">
              <Image
                src="/images/architect/architect-asset-2.jpeg"
                alt="Obinna Franklin Duru"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90 mix-blend-luminosity transition-all duration-1000 scale-105 group-hover:scale-100 group-hover:mix-blend-normal"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-80" />
            </div>

            {/* Tech Stack Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-carbon/90 border border-white/10 p-6 rounded-lg backdrop-blur-md shadow-2xl">
              <Mono className="text-xs text-gold uppercase tracking-widest mb-3 block">
                Core Stack
              </Mono>
              <div className="flex gap-4 text-white/60 font-mono text-sm">
                <span className="hover:text-white transition-colors cursor-default">
                  Solidity
                </span>
                <span className="hover:text-white transition-colors cursor-default">
                  Yul
                </span>
                <span className="hover:text-white transition-colors cursor-default">
                  Foundry
                </span>
                <span className="hover:text-white transition-colors cursor-default">
                  Python
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Engineering Principles */}
        <section className="mb-48">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <Mono className="text-gold tracking-widest uppercase text-xs mb-4 block">
              Axioms
            </Mono>
            <H2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Engineering Principles
            </H2>
            <Body className="text-xl text-white/60 font-light">
              Smart contracts handle real value. Building with reliability,
              thoughtfulness, and excellence. These are the axioms that govern
              the engineering practice.
            </Body>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="relative p-10 border border-white/10 rounded-xl bg-carbon/30 hover:border-gold/50 transition-all duration-500 group overflow-hidden flex flex-col h-full"
              >
                {/* Architectural background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10">
                    <Mono className="text-gold/50 text-xl font-light">
                      0{idx + 1}
                    </Mono>
                    <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center bg-obsidian/50 text-white/60 group-hover:text-gold group-hover:scale-110 transition-all duration-300">
                      {idx === 0 && <CheckCircle className="w-5 h-5" />}
                      {idx === 1 && <BrainCircuit className="w-5 h-5" />}
                      {idx === 2 && <Award className="w-5 h-5" />}
                    </div>
                  </div>
                  <H3 className="text-3xl mb-3 text-white group-hover:text-gold transition-colors tracking-tight">
                    {principle.title}
                  </H3>
                  <Mono className="text-[10px] text-white/60 uppercase tracking-widest mb-6 block border-b border-white/10 pb-4">
                    {principleSubtitles[idx]}
                  </Mono>
                  <p className="text-white/60 leading-relaxed font-light text-base md:text-lg flex-1">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Journey Timeline / Evolution */}
        <section className="mb-48">
          <div className="mb-24 md:text-center max-w-4xl mx-auto">
            <Mono className="text-gold tracking-[0.2em] uppercase text-xs mb-6 block">
              The Evolution
            </Mono>
            <H2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] tracking-tight">
              From learning how systems work <br className="hidden md:block" />{" "}
              to building systems worthy of trust.
            </H2>
          </div>

          <div className="max-w-5xl mx-auto space-y-32">
            {TIMELINE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative group">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                    {/* Left Column: Marker & Meta */}
                    <div className="md:col-span-4 flex flex-col md:items-end md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-8 md:pl-0 md:pr-12 relative">
                      {/* The Dot */}
                      <div className="absolute -left-[5px] md:left-auto md:-right-[5px] top-1 w-[10px] h-[10px] rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-150 transition-transform duration-500" />

                      <div className="md:sticky md:top-32">
                        <Mono className="text-gold uppercase tracking-widest text-xs mb-6 block">
                          {item.phase}
                        </Mono>
                        {Icon && (
                          <Icon className="w-8 h-8 text-white/20 mb-6 hidden md:inline-block group-hover:text-gold transition-colors duration-500" />
                        )}
                      </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="md:col-span-8">
                      <H3 className="text-3xl md:text-4xl mb-8 text-white font-medium tracking-tight group-hover:text-gold transition-colors">
                        {item.title}
                      </H3>
                      <div className="prose prose-invert max-w-none">
                        {renderDescription(item.description)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Featured Research & Projects */}
        <section className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <H2 className="text-4xl md:text-5xl mb-6">
                Research & Documentation
              </H2>
              <Body className="text-xl text-white/60 font-light">
                The work is not only about building software. It is about
                thinking deeply, documenting discoveries, questioning
                assumptions, and sharing engineering knowledge.
              </Body>
            </div>
            <a
              href="https://dev.to/binnadev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-mono uppercase tracking-widest text-sm"
            >
              Laboratory Archive <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl border border-white/10 bg-carbon hover:border-gold/50 transition-all duration-500 flex flex-col h-full cursor-pointer block"
              >
                <div className="h-64 md:h-80 overflow-hidden relative border-b border-white/5 bg-obsidian">
                  {doc.imageUrl && (
                    <Image
                      src={doc.imageUrl}
                      alt={doc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <Mono className="text-xs text-obsidian bg-gold px-3 py-1 rounded-sm font-bold uppercase tracking-widest">
                      {doc.category}
                    </Mono>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-carbon/50 backdrop-blur-md group-hover:bg-gold transition-colors duration-500">
                    <ExternalLink className="w-4 h-4 text-white group-hover:text-obsidian transition-colors" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <H3 className="text-2xl md:text-3xl text-white group-hover:text-gold transition-colors leading-tight mb-4">
                    {doc.title}
                  </H3>
                  {doc.description && (
                    <p className="text-white/60 leading-relaxed font-light text-lg mb-6 flex-1">
                      {doc.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 5. YouTube */}
        <section className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <H2 className="text-4xl md:text-5xl mb-6">On YouTube</H2>
              <Body className="text-xl text-white/60 font-light">
                Everything produced is open and free. Deep-dive sessions, live
                audits, system walkthroughs. Play directly to see the rigor
                behind the code.
              </Body>
            </div>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-mono uppercase tracking-widest text-sm"
            >
              View Channel <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <ArchitectYouTubeList />
        </section>

        {/* 6. Closing */}
        <section className="border-t border-white/10 pt-32 text-center pb-16">
          <Mono className="text-gold mb-8 block tracking-widest uppercase text-sm">
            The Mission Continues
          </Mono>
          <H2 className="text-3xl md:text-5xl lg:text-6xl mb-12 max-w-4xl mx-auto leading-tight tracking-tight">
            &quot;Reliability is the foundation of innovation. Thoughtful design
            prevents risk, and excellence turns code into craftsmanship.&quot;
          </H2>
          <Body className="text-xl text-white/60 mb-12 font-light">
            Let&apos;s build systems that endure.
          </Body>
        </section>
      </Container>
    </div>
  );
}
