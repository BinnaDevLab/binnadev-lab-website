import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cohorts | BinnaDev Lab",
  description: "Join the next BinnaDev Lab cohort. Live sessions, real systems, real engineers.",
};

// Cohort registration Google Form URL. Replace with the real link when available.
const COHORT_ALPHA_FORM_URL = "https://forms.gle/placeholder";

export default function CohortsPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="flex-1">
            <Mono className="text-gold mb-4 block tracking-widest text-sm uppercase">Training & Engineering</Mono>
            <H1 className="mb-6">Cohort-Based Engineering.</H1>
            <Body className="text-xl text-muted leading-relaxed mb-6">
              Most people learn alone, get stuck alone, and quit alone. Cohorts
              exist so that doesn&apos;t have to be you.
            </Body>
            <Body className="text-muted leading-relaxed">
              We build, break, and think through systems together in real-time.
              Sessions are recorded and published free on YouTube after each
              cohort ends. Some cohorts are free. Some are paid. All of them
              are worth showing up for.
            </Body>
          </div>
          <div className="flex-1 w-full relative aspect-video md:aspect-square max-h-[400px] border border-white/5 overflow-hidden">
            <img
              src="/images/shared/shared-asset-1.jpeg"
              alt="Engineers collaborating in a session"
              className="object-cover w-full h-full opacity-60 hover:opacity-90 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          </div>
        </div>

        {/* Current cohort */}
        <section className="mb-32">
          <div className="bg-carbon border border-gold/20 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="flex-1">
                <Mono className="text-gold mb-2 block tracking-widest text-xs">Status: Open for Registration</Mono>
                <H2 className="mb-4">Cohort Alpha: Smart Contract Security</H2>
                <Body className="mb-6 text-muted">
                  Eight weeks focused on vulnerability research, EVM mechanics,
                  and invariant testing. Built for developers who know basic
                  Solidity and want to understand what happens when things go
                  wrong at a system level.
                </Body>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-gold">&#8594;</span>
                    <span className="text-sm text-foreground/80">Starts: October 2026</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">&#8594;</span>
                    <span className="text-sm text-foreground/80">Duration: 8 Weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">&#8594;</span>
                    <span className="text-sm text-foreground/80">Format: Live Sessions & Lab Work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">&#8594;</span>
                    <span className="text-sm text-foreground/80">Recordings published free on YouTube after the cohort</span>
                  </li>
                </ul>

                <a
                  href={COHORT_ALPHA_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-gold text-obsidian hover:bg-gold/90 border-transparent">
                    Apply for Cohort Alpha
                  </Button>
                </a>
              </div>

              <div className="md:w-1/3 flex flex-col justify-center">
                <div className="aspect-square bg-obsidian border border-white/5 flex items-center justify-center p-6 text-center">
                  <div>
                    <div className="text-4xl font-display font-bold text-foreground mb-2">15</div>
                    <div className="text-xs font-mono text-muted uppercase tracking-wider">Seats per Cohort</div>
                    <div className="mt-3 text-xs text-muted/60 leading-relaxed">
                      Small by design. Every seat matters.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="mb-32">
          <H3 className="mb-8">What to Expect</H3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-carbon border border-white/5 p-6">
              <Mono className="text-gold mb-3 block text-xs">01</Mono>
              <h4 className="text-base font-display font-semibold mb-2 text-foreground">Live Sessions</h4>
              <p className="text-sm text-muted leading-relaxed">
                Real-time walkthroughs, live debugging, and hands-on system analysis with Obinna and the group.
              </p>
            </div>
            <div className="bg-carbon border border-white/5 p-6">
              <Mono className="text-gold mb-3 block text-xs">02</Mono>
              <h4 className="text-base font-display font-semibold mb-2 text-foreground">Lab Work</h4>
              <p className="text-sm text-muted leading-relaxed">
                You write code, break contracts, find bugs, and build things. Not exercises. Real engineering work.
              </p>
            </div>
            <div className="bg-carbon border border-white/5 p-6">
              <Mono className="text-gold mb-3 block text-xs">03</Mono>
              <h4 className="text-base font-display font-semibold mb-2 text-foreground">Published on YouTube</h4>
              <p className="text-sm text-muted leading-relaxed">
                Every cohort session is recorded and published free on the BinnaDev channel after the cohort ends.
              </p>
            </div>
          </div>
        </section>

        {/* Previous cohorts */}
        <section>
          <H3 className="mb-8">Previous Cohorts</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-obsidian border border-white/5 p-6 opacity-70">
              <Mono className="text-muted mb-2 block text-xs">Completed: May 2026</Mono>
              <h4 className="text-lg font-display font-semibold mb-2 text-foreground">Cohort Zero: Foundation</h4>
              <Body className="text-sm text-muted">
                The inaugural lab cycle. Focused on EVM fundamentals and how decentralized execution environments actually work.
              </Body>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
