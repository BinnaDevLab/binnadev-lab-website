import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";
import { caseStudies } from "@/data";
import Image from "next/image";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-32 relative">
      <Container>
        <div className="mb-20">
          <Mono className="text-gold mb-4 block tracking-widest uppercase">
            Client Engagements
          </Mono>
          <H2 className="text-4xl">Selected Case Studies</H2>
          <Body className="text-muted mt-4 max-w-2xl text-lg">
            Engineering reports detailing our approaches to solving complex
            architectural and security challenges for world-class protocols.
          </Body>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className={`flex flex-col gap-12 lg:gap-20 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-white/5 bg-carbon">
                  <Image 
                    src={study.imageUrl} 
                    alt={study.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-obsidian/80 backdrop-blur border border-white/10 rounded-full text-xs font-mono text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <Mono className="text-royal mb-4 block tracking-widest uppercase text-sm">
                  {study.client}
                </Mono>
                <H3 className="text-3xl mb-8 leading-tight">{study.title}</H3>

                <div className="space-y-8">
                  <div>
                    <H3 className="text-lg text-white mb-2">The Challenge</H3>
                    <Body className="text-muted leading-relaxed">
                      {study.challenge}
                    </Body>
                  </div>

                  <div>
                    <H3 className="text-lg text-white mb-2">Our Approach</H3>
                    <Body className="text-muted leading-relaxed">
                      {study.approach}
                    </Body>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <H3 className="text-sm text-gold uppercase tracking-widest mb-3 font-mono">
                      Outcome
                    </H3>
                    <Body className="text-white leading-relaxed font-medium">
                      {study.outcome}
                    </Body>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
