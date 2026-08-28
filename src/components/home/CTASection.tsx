import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Display, Body, Mono, Meta } from "@/components/ui/Typography";
import { socialLinks } from "@/data/social";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-64 bg-obsidian border-t border-white/5 overflow-hidden flex flex-col justify-center">
      {/* Structural background lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/20 hidden md:block" />
      </div>

      <Container className="relative z-10 max-w-[1800px] px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <Meta className="text-gold mb-6 block">SYSTEM_STATUS: OPEN</Meta>
          <Display className="text-white">
            The Work <br className="hidden md:block" /> Starts Here.
          </Display>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end border-t border-white/10 pt-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Body className="text-xl md:text-2xl text-white/50">
              The community is open. The cohorts are running. The work is
              happening now.
            </Body>
          </div>

          <div className="md:col-span-7 lg:col-span-8 flex flex-col sm:flex-row gap-4 md:gap-8 justify-end w-full">
            <Link
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 max-w-sm flex items-center justify-between p-8 border border-white/20 hover:border-gold hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="flex flex-col gap-2">
                <Meta className="text-white/60 group-hover:text-gold/50 transition-colors">
                  Action
                </Meta>
                <Mono className="text-white group-hover:text-gold transition-colors">
                  Join Discord
                </Mono>
              </div>
              <ArrowRight className="w-6 h-6 text-white/50 group-hover:text-gold group-hover:translate-x-2 transition-all duration-300" />
            </Link>

            <Link
              href="/cohorts"
              className="group flex-1 max-w-sm flex items-center justify-between p-8 border border-white/10 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex flex-col gap-2">
                <Meta className="text-white/60 transition-colors">Explore</Meta>
                <Mono className="text-white/70 group-hover:text-white transition-colors">
                  View Cohorts
                </Mono>
              </div>
              <ArrowRight className="w-6 h-6 text-white/30 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
