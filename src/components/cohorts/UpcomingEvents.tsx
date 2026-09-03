"use client";
import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";
import { CommunityEvent } from "@/data/events";
import { ArrowRight, MapPin, Calendar, Users, Video } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const EventMap = dynamic(() => import("@/components/cohorts/EventMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-obsidian flex items-center justify-center border border-white/5 min-h-[400px] rounded-xl">
      <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

interface UpcomingEventsProps {
  events: CommunityEvent[];
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (events.length === 0) return null;

  return (
    <section className="py-24 md:py-32 relative z-10 bg-obsidian overflow-hidden">
      {/* Subtle SVG Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)] animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <Container className="relative z-10">
        <div className="mb-16">
          <H2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Upcoming Events.
          </H2>
        </div>

        <div className="space-y-24">
          {events.map((evt) => {
            const isVirtual = evt.location?.type === "virtual";
            const isInPerson = evt.location?.type === "in-person";

            return (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-8 md:gap-12"
              >
                {/* 1. Large Editorial Landscape Photo */}
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    sizes="100vw"
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-6 left-6 z-10">
                    <div className="flex items-center gap-2 bg-obsidian/80 backdrop-blur border border-gold/30 px-3 py-1.5 rounded text-xs font-mono text-gold shadow-lg uppercase tracking-wider">
                      <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      Upcoming
                    </div>
                  </div>
                </div>

                {/* 2. Event Information & Narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <Mono className="text-gold/80 text-xs uppercase tracking-[0.2em] mb-4 block">
                      {evt.category}
                    </Mono>
                    <H3 className="text-4xl md:text-5xl text-white mb-4">
                      {evt.title}
                    </H3>
                    <div className="text-2xl text-white/50 font-display italic mb-8">
                      {evt.subtitle}
                    </div>

                    <Body className="text-white/80 text-lg font-light leading-relaxed mb-8">
                      {evt.description}
                    </Body>

                    {evt.registrationUrl ? (
                      <a
                        href={evt.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center sm:justify-start gap-3 px-8 py-4 bg-gold text-obsidian rounded font-medium hover:bg-white transition-colors uppercase tracking-widest text-sm w-full sm:w-auto"
                      >
                        {isVirtual
                          ? "Join Online Session"
                          : "Register for Event"}{" "}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center sm:justify-start gap-3 px-8 py-4 bg-gold/50 text-obsidian/50 rounded font-medium cursor-not-allowed uppercase tracking-widest text-sm w-full sm:w-auto">
                        Anticipate <ArrowRight className="w-4 h-4 opacity-50" />
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-6 p-8 bg-carbon border border-white/5 rounded-2xl shadow-xl justify-center">
                    <div className="flex items-start gap-4">
                      <Calendar className="w-6 h-6 text-gold flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1 text-sm tracking-wide">
                          Date & Time
                        </h4>
                        <p className="text-base text-white/60">
                          {new Date(evt.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    {evt.location && (
                      <div className="flex items-start gap-4">
                        {isVirtual ? (
                          <Video className="w-6 h-6 text-gold flex-shrink-0" />
                        ) : (
                          <MapPin className="w-6 h-6 text-gold flex-shrink-0" />
                        )}
                        <div>
                          <h4 className="text-white font-medium mb-1 text-sm tracking-wide">
                            Location
                          </h4>
                          <p className="text-base text-white/60">
                            {evt.location.type === "in-person"
                              ? evt.location.venue
                              : evt.location.platform || "Online"}
                          </p>
                          {evt.location.type === "in-person" && (
                            <p className="text-sm text-white/60 mt-1">
                              {evt.location.address}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {evt.speakers && evt.speakers.length > 0 && (
                      <div className="flex items-start gap-4">
                        <Users className="w-6 h-6 text-gold flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-medium mb-1 text-sm tracking-wide">
                            Featuring
                          </h4>
                          <p className="text-base text-white/60">
                            {evt.speakers.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Actual Live Interactive Map (In-Person only) */}
                {isInPerson && evt.location?.type === "in-person" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full aspect-[4/3] md:aspect-[16/7] rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative mt-4 bg-[#e5e5e5]"
                  >
                    {evt.location.latitude && evt.location.longitude ? (
                      <EventMap location={evt.location} />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-0">
                        <MapPin className="w-10 h-10 text-gray-400 mb-4 animate-pulse" />
                        <H3 className="text-xl text-gray-800 mb-2">
                          Resolving Location
                        </H3>
                        <Body className="text-gray-500 text-sm max-w-xs">
                          Geographic coordinates pending...
                        </Body>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
