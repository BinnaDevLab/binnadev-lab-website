import { Container } from "@/components/ui/Container";
import { H2, Body, Mono, Meta } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/social";

const paths = [
  {
    tag: "Learn",
    label: "Enter the Lab",
    description:
      "Structured learning in reasoning, security, and on-chain systems, with people who take engineering seriously.",
    href: "/cohorts",
    external: false,
  },
  {
    tag: "Build",
    label: "Commission the Lab",
    description:
      "Commercial engineering. Smart contract architecture, security research, and production-grade implementation.",
    href: "/collaborate",
    external: false,
  },
];

export function CollaborationPreviewSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-obsidian flex items-center justify-center border-t border-white/5">
      {/* Background Visual Layer — preserved */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-full h-[120%] md:w-[80%] md:h-[150%] max-w-[1200px] left-1/2 -translate-x-1/2 opacity-30 mix-blend-luminosity">
          <Image
            src="/images/shared/shared-asset-4.jpeg"
            alt="Engineering architecture"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0c0c0c_70%)]" />
        </div>
      </div>

      <Container className="relative z-20 px-6 flex flex-col items-center w-full">
        {/* Section marker */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gold" />
          <Mono className="text-gold tracking-[0.2em] uppercase text-xs">
            The Two Paths
          </Mono>
        </div>

        <H2 className="text-4xl md:text-6xl mb-16 leading-[1.05] tracking-tight text-white text-center">
          Learn. Build.
        </H2>

        {/* Two path cards - Premium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
          {paths.map((path) => (
            <Link
              key={path.tag}
              href={path.href}
              target={path.external ? "_blank" : undefined}
              rel={path.external ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col justify-between p-10 md:p-12 border border-white/10 hover:border-gold/50 transition-all duration-500 bg-carbon/80 backdrop-blur-md overflow-hidden min-h-[300px] hover:shadow-2xl hover:shadow-gold/5"
            >
              {/* Hover highlight line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-out" />

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <Meta className="text-white/50 group-hover:text-gold/80 transition-colors text-sm">
                  {path.tag}
                </Meta>
                <Body className="text-white/80 text-lg md:text-xl leading-relaxed">
                  {path.description}
                </Body>
              </div>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10 relative z-10">
                <Mono className="text-white group-hover:text-gold transition-colors">
                  {path.label}
                </Mono>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/30 group-hover:bg-gold/5 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
