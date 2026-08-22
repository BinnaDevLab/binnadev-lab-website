import { Container } from "@/components/ui/Container";
import { H2, Body, Mono, Meta } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CollaborationPreviewSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-obsidian flex items-center justify-center border-t border-white/5">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-full h-[120%] md:w-[80%] md:h-[150%] max-w-[1200px] left-1/2 -translate-x-1/2 opacity-30 mix-blend-luminosity">
          <Image
            src="/images/shared/shared-asset-4.jpeg"
            alt="Engineering architecture"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Radial mask to fade the edges into the obsidian background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0c0c0c_70%)]" />
        </div>
      </div>

      <Container className="relative z-20 max-w-[1000px] px-6 text-center flex flex-col items-center">
        {/* Discipline Marker */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gold" />
          <Mono className="text-gold tracking-[0.2em] uppercase text-xs">
            Professional Engineering
          </Mono>
        </div>

        <H2 className="text-5xl md:text-7xl mb-8 leading-[1.05] tracking-tight text-white">
          Architecture.
          <br className="hidden md:block" /> Security. Execution.
        </H2>

        <Body className="text-xl md:text-2xl text-white/60 mb-16 max-w-2xl font-light leading-relaxed">
          We do not build minimum viable products. We engineer resilient systems
          designed to survive adversarial reality. When the stakes are high,
          protocols trust the Lab for architecture, security research, and
          production-grade implementation.
        </Body>

        <Link
          href="/collaborate"
          className="group relative inline-flex items-center gap-6 py-5 px-10 border border-white/10 hover:border-gold/50 transition-all duration-500 bg-carbon/80 backdrop-blur-md overflow-hidden"
        >
          {/* Hover highlight line */}
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-out" />

          <div className="flex flex-col items-start gap-1 text-left">
            <Meta className="text-white/60 group-hover:text-gold/60 transition-colors">
              Client Services
            </Meta>
            <Mono className="text-white group-hover:text-gold transition-colors text-sm">
              Commission The Lab
            </Mono>
          </div>
          <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-gold group-hover:translate-x-2 transition-all duration-300" />
        </Link>
      </Container>
    </section>
  );
}
