import { Container } from "@/components/ui/Container";
import { H1, H2, Body, Mono } from "@/components/ui/Typography";
import { ResearchList } from "@/components/research/ResearchList";
import { PublicationList } from "@/components/research/PublicationList";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social";

export const metadata: Metadata = {
  title: "Research & Projects",
  description:
    "Architectural case studies, smart contract experiments, and protocol analysis from BinnaDev Lab.",
};

export default function ResearchPage() {
  return (
    <div className="bg-obsidian min-h-screen relative overflow-hidden">
      {/* Full-bleed visual header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/shared/shared-asset-3.jpeg"
            alt="Research and analysis"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-transparent" />
        </div>

        <Container className="relative z-10 pb-16 pt-40">
          <Mono className="text-gold mb-4 block tracking-widest uppercase">
            Research
          </Mono>
          <H1 className="mb-6 max-w-3xl">Open work. Shared knowledge.</H1>
          <Body className="text-lg text-muted max-w-2xl">
            The Lab builds, audits, and open-sources tools that push the
            boundaries of Blockchain Technology. Everything we learn, we try to
            share. Publicly.
          </Body>
        </Container>
      </div>

      <Container className="relative z-10 pt-16 pb-20">
        {/* Applied research */}
        <section className="mb-32">
          <div className="mb-12">
            <H2>Applied Research & Tooling</H2>
            <Body className="text-muted mt-2">
              Open source repositories and protocol experiments.
            </Body>
          </div>
          <ResearchList />
        </section>

        {/* YouTube callout */}
        <section className="mb-32">
          <div className="border border-white/5 bg-carbon p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <Mono className="text-gold mb-3 block tracking-widest uppercase text-xs">
                On YouTube
              </Mono>
              <h2 className="font-display font-semibold text-2xl text-foreground mb-3">
                Research findings go public on the channel.
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Key walkthroughs, breakdowns, and findings from our research
                projects are published as free videos. Subscribe so you
                don&apos;t miss them when they drop.
              </p>
            </div>
            <Link
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-8 py-4 bg-royal hover:bg-royal/80 text-white font-mono text-sm tracking-widest uppercase transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </section>

        {/* Publications */}
        <section>
          <div className="mb-12">
            <H2>Publications</H2>
            <Body className="text-muted mt-2">
              Whitepapers, tactical field reports, and RFCs.
            </Body>
          </div>
          <PublicationList />
        </section>
      </Container>
    </div>
  );
}
