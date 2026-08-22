import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono, Meta } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const narrative = [
  {
    id: "01",
    phase: "The Problem",
    title: "Syntax Over Reasoning",
    desc: "The industry teaches developers how to write code, but not how to read or reason about complex systems. The result is brittle architecture that collapses under adversarial conditions.",
    image: "/images/shared/shared-asset-3.jpeg",
  },
  {
    id: "02",
    phase: "The Philosophy",
    title: "Architectural Thinking",
    desc: "We focus on the mental models required to understand the EVM at a fundamental level. Security is not an audit checklist; it is an emergent property of deep comprehension.",
    image: "/images/shared/shared-asset-13.jpeg",
  },
  {
    id: "03",
    phase: "The Engineering",
    title: "Building the Foundation",
    desc: "Constructing robust systems requires a rigorous approach to factory patterns, state layout, proxy architectures, and complex cross-contract execution flows.",
    image: "/images/shared/shared-asset-5.jpeg",
  },
  {
    id: "04",
    phase: "The Security",
    title: "Threat Modeling",
    desc: "Understanding how attackers exploit trust boundaries, manipulate state, and chain vulnerabilities across DeFi legos to execute devastating economic attacks.",
    image: "/images/shared/shared-asset-4.jpeg",
  },
  {
    id: "05",
    phase: "The Research",
    title: "Beyond the Norm",
    desc: "We push the boundaries of invariant testing, formal verification, fuzzing, and advanced mitigation strategies to protect billion-dollar value accruals.",
    image: "/images/shared/shared-asset-14.jpeg",
  },
  {
    id: "06",
    phase: "The Cohort",
    title: "Collective Intelligence",
    desc: "Engineering in isolation is flawed. We learn and build in focused cohorts, with everyone bringing their questions, their answers, and their code.",
    image: "/images/shared/shared-asset-2.jpeg",
  },
];

export function StorySection() {
  return (
    <section
      id="story"
      className="py-16 md:py-32 bg-carbon relative overflow-hidden border-b border-white/5"
    >
      <Container className="relative z-10 max-w-[1800px] px-6 md:px-12 lg:px-24">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="w-8 h-[1px] bg-royal" />
            <Mono className="text-gold uppercase tracking-widest text-sm">
              The Methodology
            </Mono>
            <span className="w-8 h-[1px] bg-royal" />
          </div>
          <H2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-4xl">
            Engineering from <br />
            First Principles.
          </H2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {narrative.map((item, index) => {
            // Alternate layout left/right on desktop
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className="py-12 md:py-24 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Side */}
                <div
                  className={cn(
                    "relative w-full aspect-[4/3] lg:aspect-square overflow-hidden bg-obsidian rounded-sm order-1",
                    isEven
                      ? "lg:col-span-5 lg:order-1"
                      : "lg:col-span-5 lg:order-2",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay" />
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30" />
                </div>

                {/* Text Side */}
                <div
                  className={cn(
                    "flex flex-col gap-6 order-2",
                    isEven
                      ? "lg:col-span-7 lg:order-2 lg:pl-12"
                      : "lg:col-span-7 lg:order-1 lg:pr-12",
                  )}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <Meta className="text-gold">[{item.id}]</Meta>
                    <Mono className="text-white/40 uppercase tracking-widest text-sm">
                      {item.phase}
                    </Mono>
                  </div>
                  <H3 className="text-3xl lg:text-5xl font-display tracking-tight text-white">
                    {item.title}
                  </H3>
                  <Body className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl">
                    {item.desc}
                  </Body>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

