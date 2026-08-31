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
      "Structured learning for developers who want to master system design, Web3 security, and on-chain architecture alongside people who take engineering seriously.",
    href: "/cohorts",
    external: false,
  },
  {
    tag: "Build",
    label: "Commission the Lab",
    description:
      "Commercial engineering. We architect secure smart contracts, conduct rigorous security research, and ship production-grade systems.",
    href: "/collaborate",
    external: false,
  },
];

export function CollaborationPreviewSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-obsidian flex items-center justify-center border-t border-white/5">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-obsidian">
        <Image
          src="/images/shared/shared-asset-16.jpeg"
          alt="Modern architecture"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        {/* Purple Color Wash */}
        <div className="absolute inset-0 bg-[#4C0082]/40 mix-blend-color" />
        <div className="absolute inset-0 bg-[#6D28D9]/25 mix-blend-overlay" />
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-carbon/40 mix-blend-multiply" />
        {/* Fade edges to match site background */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0c0c0c_90%)]" />
      </div>

      <Container className="relative z-20 px-6 flex flex-col items-center w-full">
        <H2 className="text-4xl md:text-6xl mb-16 leading-[1.05] tracking-tight text-white text-center">
          Learn. Build.
        </H2>

        {/* Two path cards - Premium Monochromatic Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
          {paths.map((path) => (
            <Link
              key={path.tag}
              href={path.href}
              target={path.external ? "_blank" : undefined}
              rel={path.external ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col justify-between p-10 md:p-12 border border-white/10 hover:border-[#9D4EDD]/50 transition-all duration-500 bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-2xl overflow-hidden min-h-[300px] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_60px_rgba(76,0,130,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.06] before:to-transparent before:pointer-events-none"
            >
              {/* Hover highlight line */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#9D4EDD] to-transparent group-hover:w-full transition-all duration-700 ease-out" />

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Purple corner glow on hover */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#9D4EDD]/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#4C0082]/30 blur-[80px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

              {/* Inner border sheen */}
              <div className="absolute inset-px rounded-2xl border border-white/[0.04] pointer-events-none" />

              {/* Sheen sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <Meta className="text-white/40 group-hover:text-[#c084fc] transition-colors text-sm tracking-[0.2em] uppercase">
                  {path.tag}
                </Meta>
                <Body className="text-white/80 text-lg md:text-xl leading-relaxed">
                  {path.description}
                </Body>
              </div>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10 group-hover:border-white/20 transition-colors relative z-10">
                <Mono className="text-white/70 group-hover:text-white transition-colors">
                  {path.label}
                </Mono>
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-[#9D4EDD]/60 group-hover:bg-[#9D4EDD]/20 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(157,78,221,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-[#c084fc] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
