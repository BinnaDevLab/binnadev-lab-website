import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cohorts | BinnaDev Lab",
  description: "Join the next engineering cohort at BinnaDev Lab.",
};

export default function CohortsPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="flex-1">
            <Mono className="text-royal mb-4 block tracking-widest text-sm uppercase">Training & Engineering</Mono>
            <H1 className="mb-6">Cohort-Based Engineering.</H1>
            <Body className="text-xl text-muted leading-relaxed">
              BinnaDev Lab operates through intensive, cohort-based engineering cycles. 
              We do not offer self-paced tutorials. We build, break, and architect systems together in real-time.
            </Body>
          </div>
          <div className="flex-1 w-full relative aspect-video md:aspect-square max-h-[400px] border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Engineers collaborating" 
              className="object-cover w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          </div>
        </div>

        {/* Current Cohort Section */}
        <section className="mb-32">
          <div className="bg-carbon border border-gold/20 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="flex-1">
                <Mono className="text-gold mb-2 block tracking-widest text-xs">STATUS: OPEN FOR REGISTRATION</Mono>
                <H2 className="mb-4">Cohort Alpha: Smart Contract Security</H2>
                <Body className="mb-6 text-muted">
                  An intensive 8-week program focusing on advanced vulnerability research, EVM mechanics, and invariant testing. Designed for developers who already understand basic Solidity and want to transition into high-level security architecture.
                </Body>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-royal">→</span>
                    <span className="text-sm text-foreground/80">Starts: October 2026</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-royal">→</span>
                    <span className="text-sm text-foreground/80">Duration: 8 Weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-royal">→</span>
                    <span className="text-sm text-foreground/80">Format: Live Sessions & Lab Work</span>
                  </li>
                </ul>

                <a href="#register" className="inline-block">
                  <Button className="bg-gold text-obsidian hover:bg-gold/90 border-transparent">Apply for Cohort Alpha</Button>
                </a>
              </div>
              
              <div className="md:w-1/3 flex flex-col justify-center">
                <div className="aspect-square bg-obsidian border border-white/5 flex items-center justify-center p-6 text-center">
                  <div>
                    <div className="text-4xl font-display font-bold text-foreground mb-2">15</div>
                    <div className="text-xs font-mono text-muted uppercase tracking-wider">Engineers Max</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Cohorts Section */}
        <section>
          <H3 className="mb-8">Previous Cohorts</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-obsidian border border-white/5 p-6 opacity-70">
              <Mono className="text-muted mb-2 block text-xs">COMPLETED: MAY 2026</Mono>
              <h4 className="text-lg font-display font-semibold mb-2 text-foreground">Cohort Zero: Foundation</h4>
              <Body className="text-sm text-muted">
                The inaugural lab cycle. Focused on EVM fundamentals and the physics of decentralized execution environments.
              </Body>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
