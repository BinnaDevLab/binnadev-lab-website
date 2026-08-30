"use client";
import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";
import { CommunityEvent } from "@/data/events";
import { ExternalLink, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CommunityHistoryProps {
  events: CommunityEvent[];
}

export function CommunityHistory({ events }: CommunityHistoryProps) {
  const narratives = [
    { title: "PAST", subtitle: "What's Next 1.0" },
    { title: "EXPANSION", subtitle: "What's Next 2.0" },
  ];

  return (
    <section className="py-40 bg-carbon relative border-t border-white/5 overflow-hidden">
      {/* Subtle map overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center max-w-3xl mx-auto relative z-10"
        >
          <Mono className="text-white/60 tracking-[0.2em] text-xs uppercase mb-6 block">
            The Bond
          </Mono>
          <H2 className="text-3xl md:text-5xl leading-tight tracking-tight mb-6">
            The community predates the curriculum.
          </H2>
          <Body className="text-xl text-white/50 font-light">
            Before there was a Lab, there was a collective. Driven by the
            absolute belief that you can build world-class infrastructure from
            anywhere, provided you have the right people.
          </Body>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical connecting line - Left on Mobile, Center on Desktop */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-[20px] md:left-1/2 w-px bg-gradient-to-b from-white/10 via-white/10 to-gold/30 md:-translate-x-1/2 z-0 origin-top"
          />

          <div className="space-y-40">
            {events.map((evt, idx) => (
              <div key={evt.id} className="relative z-10">
                {/* Narrative Marker */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:items-center justify-center mb-16 relative"
                >
                  {/* Dot precisely on the line */}
                  <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full bg-carbon border-2 border-white/30 z-20" />

                  {/* Text card shifted right on mobile, centered on desktop */}
                  <div className="ml-[56px] md:ml-0 bg-carbon px-6 py-3 border border-white/10 text-center inline-block shadow-xl relative z-10">
                    <Mono className="text-white/60 tracking-[0.2em] text-xs uppercase block mb-1">
                      {narratives[idx]?.title}
                    </Mono>
                    <span className="text-white font-medium text-sm">
                      {narratives[idx]?.subtitle}
                    </span>
                  </div>
                </motion.div>

                {/* Event Card Layout */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative ml-[56px] md:ml-0`}
                >
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`relative ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-obsidian group shadow-2xl">
                      <Image
                        src={evt.image}
                        alt={evt.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-80" />
                      <div className="absolute top-4 right-4 bg-obsidian/90 backdrop-blur border border-white/10 px-3 py-1 rounded text-xs font-mono text-white/80">
                        {evt.date}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className={`flex flex-col justify-center ${idx % 2 === 0 ? "md:order-2" : "md:order-1 md:text-right"}`}
                  >
                    <Mono className="text-gold text-xs uppercase tracking-[0.2em] mb-4 block">
                      {evt.category}
                    </Mono>
                    <H3 className="text-3xl text-white mb-2">{evt.title}</H3>
                    <div className="text-lg text-white/50 font-display italic mb-6">
                      {evt.subtitle}
                    </div>

                    <Body
                      className={`text-white/70 text-base font-light mb-8 ${idx % 2 !== 0 ? "md:ml-auto" : ""}`}
                    >
                      {evt.description}
                    </Body>

                    {evt.quote && (
                      <blockquote
                        className={`border-l-[3px] border-gold pl-4 mb-8 text-white/90 italic text-xl ${idx % 2 !== 0 ? "md:border-l-0 md:border-r-[3px] md:pr-4 md:pl-0" : ""}`}
                      >
                        &quot;{evt.quote}&quot;
                      </blockquote>
                    )}

                    {evt.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4 mb-8">
                        {evt.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="bg-obsidian border border-white/5 rounded p-4 text-center"
                          >
                            <div className="text-2xl text-white mb-1 font-display">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-white/60 uppercase tracking-[0.2em] font-mono">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mb-10 space-y-6">
                      {evt.guest && (
                        <div>
                          <span className="text-[10px] text-white/60 font-mono uppercase tracking-[0.2em] block mb-2">
                            Special Guest
                          </span>
                          <span className="text-sm text-white/80">
                            {evt.guest}
                          </span>
                        </div>
                      )}
                      {(evt.speakers || evt.team) && (
                        <div>
                          <span className="text-[10px] text-white/60 font-mono uppercase tracking-[0.2em] block mb-2">
                            {evt.speakers ? "Speakers" : "Core Team"}
                          </span>
                          <div
                            className={`flex flex-wrap gap-2 text-sm text-white/60 ${idx % 2 !== 0 ? "md:justify-end" : ""}`}
                          >
                            {(evt.speakers || evt.team)?.map((person) => (
                              <span
                                key={person}
                                className="bg-obsidian border border-white/5 px-2 py-1 rounded"
                              >
                                {person}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <a
                      href={evt.archiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-gold hover:text-white transition-colors ${idx % 2 !== 0 ? "md:justify-end" : ""}`}
                    >
                      <ExternalLink className="w-3 h-3" /> View Event Archive
                    </a>
                  </motion.div>
                </div>
              </div>
            ))}

            {/* Final Narrative Marker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 pt-8"
            >
              <div className="flex flex-col md:items-center justify-center relative">
                {/* Dot precisely on the line */}
                <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-[13px] h-[13px] rounded-full bg-gold border-2 border-obsidian z-20 animate-pulse shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                <div className="ml-[56px] md:ml-0 bg-obsidian px-8 py-4 border border-gold/30 text-center inline-block shadow-2xl relative z-10">
                  <Mono className="text-gold tracking-[0.2em] text-xs uppercase block mb-1">
                    NOW
                  </Mono>
                  <span className="text-white font-medium text-base">
                    BinnaDev Lab Cohorts
                  </span>
                </div>

                {/* Visual arrow down */}
                <div className="mt-8 text-gold/50 ml-[56px] md:ml-0 text-center flex justify-start md:justify-center">
                  <ChevronDown className="w-6 h-6 animate-bounce" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
