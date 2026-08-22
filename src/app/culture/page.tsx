import { Container } from "@/components/ui/Container";
import { H1, H2, Body, Mono } from "@/components/ui/Typography";
import { socialLinks } from "@/data/social";
import { CaseFileReview } from "@/components/culture/TestimonialMarquee";
import { CinematicGallery } from "@/components/culture/CinematicGallery";
import { YouTubeShowcase } from "@/components/culture/YouTubeShowcase";
import { CommunityHighlightsList } from "@/components/culture/CommunityHighlightsList";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Culture | BinnaDev Lab",
  description:
    "Your home away from home. A place to sharpen your thinking, share what you know, and build with people who take engineering seriously.",
};

const channels = [
  {
    id: "discord",
    label: "Discord",
    headline: "Come into the room.",
    body: "Ask the questions nobody has answered for you yet. The server is open to everyone—beginners, experts, and everyone still figuring it out.",
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

const philosophy = [
  {
    title: "Curiosity over performance",
    body: "You don't need to pretend to know everything. We believe that good questions are an essential part of serious engineering. Arrive curious.",
    imageUrl: "/images/shared/shared-asset-1.jpeg",
  },
  {
    title: "Depth over noise",
    body: "We care less about keeping up with every fleeting trend, and more about deeply understanding the foundational concepts that actually matter.",
    imageUrl: "/images/gallery/gallery-asset-1.jpeg",
  },
  {
    title: "Teach what you discover",
    body: "Knowledge becomes exponentially more valuable when you bring someone else along. When you figure something out, leave a trail for the next person.",
    imageUrl: "/images/shared/shared-asset-2.jpeg",
  },
  {
    title: "A seat at the table",
    body: "Beginners, builders, researchers, and mentors all have something to contribute. We value shared curiosity across every experience level.",
    imageUrl: "/images/gallery/gallery-asset-3.jpeg",
  },
];

export default function CulturePage() {
  return (
    <div className="min-h-screen pt-32 pb-32 bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-royal/5 to-transparent opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        {/* 1. Page header - 2 Column Visual Storytelling */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <StaggerGroup className="lg:col-span-6">
            <StaggerItem>
              <Mono className="text-gold mb-6 block tracking-widest uppercase flex items-center gap-2">
                <Users className="w-4 h-4" /> Culture
              </Mono>
            </StaggerItem>
            <StaggerItem>
              <H1 className="mb-8 text-5xl md:text-7xl tracking-tight leading-tight">
                Your home away <br className="hidden md:block" /> from home.
              </H1>
            </StaggerItem>
            <div className="space-y-6">
              <StaggerItem>
                <Body className="text-2xl text-white/80 font-light leading-relaxed">
                  This is a place where you can belong, learn, and build with
                  people who take engineering seriously—without feeling like you
                  have to figure everything out alone.
                </Body>
              </StaggerItem>
              <StaggerItem>
                <Body className="text-xl text-white/50 font-light leading-relaxed">
                  You can arrive curious. You can ask questions without
                  pretending to know everything. Serious engineering and genuine
                  human connection coexist here.
                </Body>
              </StaggerItem>
            </div>
          </StaggerGroup>
          <FadeIn delay={0.3} direction="none" className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-1000 hover:scale-[1.02] group">
              <Image
                src="/images/gallery/gallery-asset-4.jpeg"
                alt="Community whiteboarding session"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle inner gradient to blend with the dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent mix-blend-multiply" />
            </div>
          </FadeIn>
        </div>

        {/* 2. Cultural Philosophy with Visual Storytelling */}
        <section className="mb-40">
          <FadeIn className="mb-16">
            <H2 className="text-3xl md:text-5xl tracking-tight">
              What we believe
            </H2>
          </FadeIn>

          <div className="flex flex-col gap-24">
            {philosophy.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-20`}
              >
                <FadeIn
                  direction={i % 2 !== 0 ? "right" : "left"}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-carbon transition-transform duration-700 hover:scale-[1.02] group">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </FadeIn>
                <StaggerGroup staggerDelay={0.2} className="w-full lg:w-1/2">
                  <StaggerItem direction={i % 2 !== 0 ? "left" : "right"}>
                    <h3 className="font-display font-semibold text-3xl text-foreground mb-6">
                      {item.title}
                    </h3>
                  </StaggerItem>
                  <StaggerItem direction={i % 2 !== 0 ? "left" : "right"}>
                    <p className="text-white/60 font-light text-xl leading-relaxed max-w-lg">
                      {item.body}
                    </p>
                  </StaggerItem>
                </StaggerGroup>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Gallery (Life Inside the Lab) */}
        <section id="gallery" className="mb-40">
          <FadeIn className="mb-16 max-w-3xl">
            <H2 className="text-3xl md:text-5xl mb-6 tracking-tight">
              Life Inside the Lab
            </H2>
            <Body className="text-xl text-white/60 font-light leading-relaxed">
              Some of the most important parts of the Lab happen outside a
              formal curriculum. Around a whiteboard, during an unexpected
              conversation, or the exact moment someone finally understands a
              difficult concept. This is what it feels like to be here.
            </Body>
          </FadeIn>
          <FadeIn delay={0.2}>
            <CinematicGallery />
          </FadeIn>
        </section>

        {/* 4. Community events / highlights (Field Record) */}
        <section id="community" className="mb-40">
          <FadeIn className="mb-16 max-w-3xl">
            <H2 className="text-3xl md:text-5xl mb-6 tracking-tight">
              Field Record
            </H2>
            <Body className="text-xl text-white/60 font-light leading-relaxed">
              A look at our past gatherings, workshops, and milestones. Evidence
              of a living community building and growing alongside one another.
            </Body>
          </FadeIn>
          <FadeIn delay={0.2}>
            <CommunityHighlightsList />
          </FadeIn>
        </section>

        {/* 5. YouTube showcase (Ideas Worth Taking Home) */}
        <FadeIn className="mb-40">
          <YouTubeShowcase />
        </FadeIn>
      </Container>

      {/* 6. Testimonials (Field Notes) */}
      <section className="py-32 bg-obsidian border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/50 to-transparent pointer-events-none" />
        <Container className="relative z-10">
          <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
            <H2 className="text-3xl md:text-5xl mb-6 tracking-tight">
              Field Notes
            </H2>
            <Body className="text-xl text-white/60 font-light leading-relaxed">
              Every community leaves traces. These are a few of the thoughts,
              lessons, and memories people have carried with them from the Lab.
            </Body>
          </FadeIn>
        </Container>
        <CaseFileReview />
      </section>

      {/* 7. Community channels (The Doors) & 8. CTA */}
      <Container className="relative z-10 pt-32">
        <section className="mb-32">
          <FadeIn className="mb-16 max-w-2xl">
            <H2 className="text-3xl md:text-5xl mb-6 tracking-tight">
              The doors are open.
            </H2>
            <Body className="text-xl text-white/60 font-light leading-relaxed">
              Now that you know who we are and what we believe, here are the
              doors you can walk through to join the conversation.
            </Body>
          </FadeIn>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <StaggerItem key={channel.id}>
                <div
                  className={`h-full group border border-white/5 ${channel.accent} bg-carbon transition-all duration-500 p-8 flex flex-col hover:-translate-y-1 hover:shadow-2xl`}
                >
                  <Mono className="text-muted mb-6 block text-xs tracking-widest">
                    {channel.label}
                  </Mono>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                    {channel.headline}
                  </h3>
                  <p className="text-white/50 font-light text-sm leading-relaxed mb-8 flex-1">
                    {channel.body}
                  </p>
                  <Link
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-foreground/70 hover:text-white transition-colors group/link"
                  >
                    {channel.cta}
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      &#8594;
                    </span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* 8. Final Invitation CTA */}
        <section className="py-24 max-w-4xl mx-auto text-center">
          <StaggerGroup>
            <StaggerItem>
              <H2 className="text-4xl md:text-6xl tracking-tight mb-8">
                There&apos;s a place for you here.
              </H2>
            </StaggerItem>
            <StaggerItem>
              <Body className="text-xl text-white/60 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Whether you are writing your first smart contract, auditing your
                hundredth, researching a new idea, or simply trying to
                understand something deeply, you don&apos;t have to figure it
                all out alone.
              </Body>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href={socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-obsidian rounded-lg font-mono text-sm uppercase tracking-widest font-semibold hover:bg-gold hover:text-obsidian transition-colors w-full sm:w-auto hover:-translate-y-1 shadow-lg hover:shadow-gold/20"
                >
                  Join the Community
                </Link>
                <Link
                  href="/cohorts"
                  className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-mono text-sm uppercase tracking-widest hover:border-white/60 transition-colors w-full sm:w-auto hover:-translate-y-1"
                >
                  Attend an Event
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </section>
      </Container>
    </div>
  );
}
