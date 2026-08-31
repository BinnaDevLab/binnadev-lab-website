import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { H2, Body, Meta } from "@/components/ui/Typography";
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
        <div className="flex flex-col items-center text-center">
          <H2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white">
            The Bond.
          </H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {channels.map((channel, i) => (
            <Link
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col py-10 md:py-14 px-0 border-white/20 ${
                i < channels.length - 1 ? "md:border-r" : ""
              } border-b md:border-b-0 hover:bg-white/[0.02] transition-colors duration-500 ${
                i > 0 ? "md:pl-12" : ""
              }`}
            >
              <Meta className="text-gold mb-6 block group-hover:text-gold transition-colors text-sm">
                [0{i + 1}] // {channel.label}
              </Meta>
              <H2 className="text-3xl md:text-4xl text-white/80 group-hover:text-white transition-colors mb-6">
                {channel.headline}
              </H2>
              <Body className="text-sm text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">
                {channel.body}
              </Body>
              <div className="mt-8">
                <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-gold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
