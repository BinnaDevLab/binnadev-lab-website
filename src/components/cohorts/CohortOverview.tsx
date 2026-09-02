import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";
import { ArrowRight, Calendar, Video } from "lucide-react";
import Image from "next/image";
import { Cohort } from "@/data/cohorts";
import { CohortCountdown } from "./CohortCountdown";

interface CohortOverviewProps {
  cohort: Cohort;
}

export function CohortOverview({ cohort }: CohortOverviewProps) {
  return (
    <section className="mb-24 relative z-10">
      <Container>
        <div className="bg-carbon/50 border border-gold/20 rounded-xl relative overflow-hidden backdrop-blur-sm shadow-[0_0_50px_rgba(212,175,55,0.05)]">
          {/* Subtle architectural accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="flex flex-col lg:flex-row gap-0">
            {/* Left: Content */}
            <div className="flex-1 p-8 md:p-16 lg:pr-12 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <Mono className="text-gold tracking-[0.2em] text-xs uppercase">
                  Active Mission • {cohort.price}
                </Mono>
              </div>

              <H2 className="text-3xl md:text-5xl mb-6 tracking-tight leading-tight">
                {cohort.title}
              </H2>

              <Body className="text-lg text-white/70 leading-relaxed font-light mb-10 max-w-xl">
                {cohort.description}
              </Body>

              <div className="mb-12">
                <CohortCountdown startDate={cohort.startDate} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12 text-sm text-white/60 font-light border-t border-white/10 pt-8">
                {cohort.topics.map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-xs">◆</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <a
                href={cohort.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian rounded-sm font-medium hover:bg-white transition-colors uppercase tracking-widest text-xs"
              >
                Enter the Cohort <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Meta / Image */}
            <div className="lg:w-[400px] xl:w-[450px] flex flex-col border-t lg:border-t-0 lg:border-l border-white/10 relative">
              {cohort.image && (
                <div className="relative aspect-video lg:aspect-auto lg:flex-1 w-full bg-obsidian">
                  <Image
                    src={cohort.image}
                    alt={cohort.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover opacity-50 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-80" />

                  {/* Map grid overlay over image */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" />
                </div>
              )}

              <div className="p-8 md:p-12 bg-carbon">
                <Mono className="text-white/60 tracking-[0.2em] text-[10px] uppercase mb-8 block">
                  Logistics
                </Mono>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium mb-1 text-sm tracking-wide">
                        Schedule
                      </h4>
                      <p className="text-sm text-white/50">{cohort.duration}</p>
                      <p className="text-sm text-white/50">
                        {cohort.sessionDays}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Video className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium mb-1 text-sm tracking-wide">
                        Format
                      </h4>
                      <p className="text-sm text-white/50">
                        {cohort.format} on {cohort.platform}
                      </p>
                      {cohort.recordingUrl && (
                        <p className="text-sm text-white/50 mt-1">
                          {cohort.recordingUrl}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
