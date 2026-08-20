"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono, Meta } from "@/components/ui/Typography";
import { socialLinks } from "@/data/social";

const channels = [
  {
    id: "discord",
    label: "Discord",
    headline: "Come into the room.",
    body: "Bring the questions nobody has answered for you yet. The community is open to everyone, beginners, experts, and everyone in between.",
    href: socialLinks.discord,
  },
  {
    id: "youtube",
    label: "YouTube",
    headline: "Watch first. Judge later.",
    body: "Every video is built around one question: what would you need to understand to never be confused by this again?",
    href: socialLinks.youtube,
  },
  {
    id: "telegram",
    label: "Telegram",
    headline: "Stay in the loop.",
    body: "Announcements, upcoming events, cohort openings, and the occasional thing worth stopping to read.",
    href: socialLinks.telegram,
  },
];

export function CommunitySection() {
  return (
    <section className="relative py-24 md:py-48 bg-obsidian border-t border-white/5 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px)
        `,
          backgroundSize: "4rem 4rem",
        }}
      />

      <Container className="relative z-10 max-w-[1800px] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Massive Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-royal" />
                <Mono>The Environment</Mono>
              </div>
              <H2 className="text-5xl md:text-6xl mb-8 leading-[1.1]">
                Your home <br className="hidden lg:block" /> away from home.
              </H2>
            </div>

            <Body className="text-xl md:text-2xl text-white/50 max-w-md hidden lg:block">
              A place to sharpen your thinking, share what you know, and build
              with people who take engineering seriously.
            </Body>
          </div>

          {/* Right Column: Brutalist Directory */}
          <div className="lg:col-span-7 flex flex-col">
            <Body className="text-xl text-white/50 mb-12 lg:hidden">
              A place to sharpen your thinking, share what you know, and build
              with people who take engineering seriously.
            </Body>

            <div className="border-t border-white/10 flex flex-col">
              {channels.map((channel, i) => (
                <Link
                  key={channel.id}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-10 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4 sm:px-8 sm:-mx-8"
                >
                  <div className="flex flex-col mb-4 sm:mb-0 max-w-sm">
                    <Meta className="text-gold mb-4 block group-hover:text-gold transition-colors">
                      [0{i + 1}] // {channel.label}
                    </Meta>
                    <H2 className="text-3xl md:text-4xl text-white/80 group-hover:text-white transition-colors">
                      {channel.headline}
                    </H2>
                  </div>

                  <div className="flex flex-col sm:items-end text-left sm:text-right max-w-xs">
                    <Body className="text-sm mb-4 text-white/40 group-hover:text-white/70 transition-colors">
                      {channel.body}
                    </Body>
                    <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-gold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
