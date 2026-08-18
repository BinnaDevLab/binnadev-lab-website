import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import { communityStats, communityHighlights } from "@/data";
import { socialLinks } from "@/data/social";
import { Users, Code, MessagesSquare, Users2, GitBranch } from "lucide-react";
import { CaseFileReview } from "@/components/culture/TestimonialMarquee";
import { CinematicGallery } from "@/components/culture/CinematicGallery";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { YouTubeShowcase } from "@/components/culture/YouTubeShowcase";
import { CommunityHighlightsList } from "@/components/culture/CommunityHighlightsList";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community | BinnaDev Lab",
  description: "Your home away from home. A place to sharpen your thinking, share what you know, and build with people who take engineering seriously.",
};

const channels = [
  {
    id: "discord",
    label: "Discord",
    headline: "Come into the room.",
    body: "Ask the questions nobody has answered for you yet. The server is open to everyone — beginners, experts, and everyone still figuring it out.",
    cta: "Join Discord",
    href: socialLinks.discord,
    accent: "group-hover:border-[#5865F2]/50",
  },
  {
    id: "youtube",
    label: "YouTube",
    headline: "Watch. Think. Go deeper.",
    body: "Every video is built around one question: what would you need to understand to never be confused by this again? Subscribe and find out.",
    cta: "Subscribe",
    href: socialLinks.youtube,
    accent: "group-hover:border-red-500/50",
  },
  {
    id: "telegram",
    label: "Telegram",
    headline: "Stay in the loop.",
    body: "Cohort openings, upcoming events, community discussions, and the occasional thing worth stopping to read.",
    cta: "Join Telegram",
    href: socialLinks.telegram,
    accent: "group-hover:border-[#29A8E0]/50",
  },
];

export default function CulturePage() {
  return (
    <div className="min-h-screen pt-32 pb-32 bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-royal/5 to-transparent opacity-50" />

      <Container className="relative z-10">

        {/* Page header */}
        <div className="mb-24 max-w-3xl border-b border-white/5 pb-12">
          <Mono className="text-gold mb-4 block tracking-widest uppercase flex items-center gap-2">
            <Users className="w-4 h-4" /> Community
          </Mono>
          <H1 className="mb-6">Your home away from home.</H1>
          <Body className="text-xl text-muted leading-relaxed">
            A place to sharpen your thinking, share what you know, and build
            with people who take engineering seriously. Everyone is welcome.
          </Body>
        </div>

        {/* Community channels */}
        <section className="mb-32">
          <div className="mb-12">
            <H2>Find us here.</H2>
            <Body className="text-muted mt-2">Join the conversation wherever you are most comfortable.</Body>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <div
                key={channel.id}
                className={`group border border-white/5 ${channel.accent} bg-carbon transition-all duration-500 p-8 flex flex-col`}
              >
                <Mono className="text-muted mb-6 block text-xs tracking-widest">{channel.label}</Mono>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                  {channel.headline}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-1">{channel.body}</p>
                <Link
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-foreground/70 hover:text-white transition-colors group/link"
                >
                  {channel.cta}
                  <span className="group-hover/link:translate-x-1 transition-transform">&#8594;</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mb-32">
          <div className="mb-12">
            <H2>Lab Gallery</H2>
            <Body className="text-muted mt-2">A living window into our whiteboarding sessions, workshops, and research groups.</Body>
          </div>
          <CinematicGallery />
        </section>

        {/* Community stats + highlights */}
        <section id="community" className="mb-32">
          <div className="mb-12">
            <H2>Community Hub</H2>
            <Body className="text-muted mt-2">The pulse of the collective.</Body>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
              <MessagesSquare className="w-6 h-6 text-gold mb-4" />
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter value={communityStats.discordMembers.value} suffix={communityStats.discordMembers.suffix} />
              </div>
              <Mono className="text-xs text-muted uppercase tracking-wider mt-1">Discord Members</Mono>
            </div>
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
              <Code className="w-6 h-6 text-gold mb-4" />
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter value={communityStats.githubCommits.value} suffix={communityStats.githubCommits.suffix} />
              </div>
              <Mono className="text-xs text-muted uppercase tracking-wider mt-1">Code Commits</Mono>
            </div>
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
              <Users2 className="w-6 h-6 text-gold mb-4" />
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter value={communityStats.studyGroups.value} suffix={communityStats.studyGroups.suffix} />
              </div>
              <Mono className="text-xs text-muted uppercase tracking-wider mt-1">Study Groups</Mono>
            </div>
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
              <GitBranch className="w-6 h-6 text-gold mb-4" />
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter value={communityStats.openSourceContributors.value} suffix={communityStats.openSourceContributors.suffix} />
              </div>
              <Mono className="text-xs text-muted uppercase tracking-wider mt-1">Contributors</Mono>
            </div>
          </div>

          <div className="mb-12">
            <H3 className="mb-6">Lab Highlights</H3>
            <CommunityHighlightsList />
          </div>
        </section>

        {/* YouTube showcase */}
        <YouTubeShowcase />

      </Container>

      {/* Testimonials */}
      <section className="py-24 bg-obsidian border-t border-white/5">
        <Container>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <H2 className="mb-4 text-3xl">Field Notes</H2>
            <Body className="text-muted">
              What founders, engineers, and researchers say about their time in the Lab.
            </Body>
          </div>
        </Container>
        <CaseFileReview />
      </section>

    </div>
  );
}
