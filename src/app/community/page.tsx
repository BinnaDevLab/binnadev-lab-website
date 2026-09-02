import { Container } from "@/components/ui/Container";
import { H1, H2, Body, Mono } from "@/components/ui/Typography";
import { socialLinks } from "@/data/social";
import { CaseFileReview } from "@/components/community/TestimonialMarquee";
import { CinematicGallery } from "@/components/community/CinematicGallery";
import { YouTubeShowcase } from "@/components/community/YouTubeShowcase";
import { CommunityHighlightsList } from "@/components/community/CommunityHighlightsList";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "The Community | BinnaDev Lab Culture",
  description:
    "The Engineering Collective. A place to architect, research, and build alongside people who take decentralized systems seriously.",
  alternates: {
    canonical: "/community",
  },
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        {/* 1. Page header - 2 Column Visual Storytelling */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
                  The Lab is an engineering collective. A place where you can
                  architect, research, and build alongside people who take
                  systems seriously, without the isolation of building alone.
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

        {/* 2. Gallery (Life Inside the Lab) */}
        <section id="gallery" className="mb-24">
          <FadeIn className="mb-16 max-w-3xl">
            <H2 className="text-3xl md:text-5xl mb-6 tracking-tight">
              Life Inside the Lab
            </H2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <CinematicGallery />
          </FadeIn>
        </section>

        {/* 3. Community events / highlights (Field Record) */}
        <section id="community" className="mb-24">
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

        {/* 4. YouTube showcase (Ideas Worth Taking Home) */}
        <FadeIn className="mb-24">
          <YouTubeShowcase />
        </FadeIn>
      </Container>

      {/* 5. Final Invitation CTA */}
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
              hundredth, researching a new idea, or simply trying to understand
              something deeply, you don&apos;t have to figure it all out alone.
            </Body>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/cohorts"
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
    </div>
  );
}
