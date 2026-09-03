import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import { Cpu, Network, ShieldAlert } from "lucide-react";
import { BlueprintImage } from "@/components/ui/BlueprintImage";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { MANIFESTO_POINTS } from "@/data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | BinnaDevLab",
  description:
    "BinnaDevLab is where thoughtful thinking meets execution. We believe reasoning precedes coding, prioritizing deep mental models, system security, and engineering excellence.",
  openGraph: {
    title: "About | BinnaDevLab",
    description:
      "BinnaDevLab is where thoughtful thinking meets execution. We believe reasoning precedes coding, prioritizing deep mental models, system security, and engineering excellence.",
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "About BinnaDevLab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | BinnaDevLab",
    description:
      "BinnaDevLab is where thoughtful thinking meets execution. We believe reasoning precedes coding.",
    images: ["/icons/og-image.png"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-obsidian min-h-screen relative selection:bg-gold selection:text-obsidian">
      <style>{`
        @keyframes bg-pan {
          0% { background-position: 0px 0px; }
          100% { background-position: 100px 100px; }
        }
        .animate-bg-pan {
          animation: bg-pan 15s linear infinite;
        }
        @keyframes skew-scroll {
          0% { transform: translateX(-200%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        .animate-skew-scroll {
          animation: skew-scroll 3s linear infinite;
        }
      `}</style>
      {/* 1. Immersive Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-32">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shared/shared-asset-9.jpeg"
            alt="About Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl">
          <FadeIn delay={0.2} direction="up">
            <H1 className="text-6xl md:text-8xl leading-tight">
              Reasoning
              <br />
              Precedes
              <br />
              Coding.
            </H1>
          </FadeIn>
        </Container>
      </section>

      {/* 2. The Problem Statement */}
      <section className="py-20 md:py-24 bg-obsidian relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-15 animate-bg-pan"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM29.5 29.5L30.5 30.5V60h-2V30.5l1-1z' fill='rgba(255,255,255,1)' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian pointer-events-none z-0" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <QuoteIcon className="w-12 h-12 text-white/10 mx-auto mb-6" />
            <H2 className="text-4xl md:text-5xl leading-tight mb-6">
              The industry is optimizing for speed.
              <br />
              <span className="text-gold">We are optimizing for truth.</span>
            </H2>
            <Body className="text-xl text-muted leading-relaxed">
              It is easy to memorize a framework or follow a tutorial to deploy
              a smart contract. But what happens when you encounter a system
              architecture you have never seen before? We believe that instead
              of merely learning syntax, developers must master the fundamental
              reasoning that governs all resilient systems.
            </Body>
          </div>
        </Container>
      </section>

      {/* 3. Sticky Storytelling Section */}
      <section className="relative bg-carbon/20">
        {MANIFESTO_POINTS.map((point, idx) => (
          <div
            key={idx}
            className="min-h-screen flex items-center sticky top-0 bg-obsidian overflow-hidden border-t border-white/5"
          >
            <Container>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <Mono className="text-gold mb-6 block tracking-widest uppercase flex items-center gap-4">
                    <point.icon className="w-5 h-5" /> Chapter 0{idx + 1}
                  </Mono>
                  <H2 className="text-4xl md:text-6xl mb-8 leading-tight">
                    {point.title}
                  </H2>
                  <Body className="text-xl text-muted leading-relaxed">
                    {point.content}
                  </Body>
                </div>

                <div
                  className={`relative h-[200px] lg:h-[260px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <BlueprintImage
                    src={point.image}
                    alt={point.title}
                    fill
                    overlayColor={idx % 2 === 0 ? "white" : "gold"}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Container>
          </div>
        ))}
      </section>

      {/* 4. The Practice */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <Container className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <H2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-obsidian">
              Thoughtful. Reliable. Excellent.
            </H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-10 bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] transition-all duration-500 group relative overflow-hidden">
              <Cpu className="w-8 h-8 text-obsidian/30 group-hover:text-purple-600 transition-colors mb-8 relative z-10" />
              <H3 className="text-2xl mb-4 text-obsidian tracking-wide relative z-10">
                Thoughtful
              </H3>
              <p className="text-base text-obsidian/70 leading-relaxed font-light relative z-10">
                Deep reasoning before action. We deliver wise, thoroughly
                considered solutions over rushed execution.
              </p>
            </div>
            <div className="p-10 bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] transition-all duration-500 group relative overflow-hidden">
              <Network className="w-8 h-8 text-obsidian/30 group-hover:text-purple-600 transition-colors mb-8 relative z-10" />
              <H3 className="text-2xl mb-4 text-obsidian tracking-wide relative z-10">
                Reliable
              </H3>
              <p className="text-base text-obsidian/70 leading-relaxed font-light relative z-10">
                Trust is our foundation. We build dependable systems that
                perform flawlessly in adversarial environments.
              </p>
            </div>
            <div className="p-10 bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] transition-all duration-500 group relative overflow-hidden">
              <ShieldAlert className="w-8 h-8 text-obsidian/30 group-hover:text-purple-600 transition-colors mb-8 relative z-10" />
              <H3 className="text-2xl mb-4 text-obsidian tracking-wide relative z-10">
                Excellent
              </H3>
              <p className="text-base text-obsidian/70 leading-relaxed font-light relative z-10">
                The ultimate standard of craftsmanship. We produce work so
                refined it becomes the undeniable benchmark.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Cinematic Closing */}
      <section className="py-32 md:py-48 min-h-[50vh] flex items-center justify-center bg-carbon relative border-t border-white/10 overflow-hidden">
        <Container className="relative z-10 text-center">
          <FadeIn delay={0} direction="up">
            <H2 className="text-5xl md:text-8xl text-white/50 font-bold uppercase tracking-tighter leading-none">
              Engineering
              <br />
              is a<br />
              Responsibility.
            </H2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <Link
                href="/collaborate"
                className="group relative overflow-hidden flex items-center justify-center px-8 py-4 bg-white rounded-sm text-obsidian font-mono font-bold tracking-wider hover:bg-white/90 transition-all duration-300 shadow-md min-w-[220px]"
              >
                <span className="relative z-10 uppercase">Commission Lab</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-black/5 to-transparent w-full animate-skew-scroll" />
              </Link>

              <Link
                href="/cohorts"
                className="group flex items-center justify-center px-8 py-4 border border-white/20 text-white font-mono font-bold tracking-wider hover:border-white/60 hover:bg-white/5 transition-all duration-300 min-w-[220px]"
              >
                <span className="uppercase">Join Cohort</span>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}

function QuoteIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 21L16.439 16.035C17.027 14.887 17.321 13.785 17.321 12.729C17.321 11.232 16.791 10.021 15.731 9.09601C14.671 8.17101 13.415 7.70801 11.963 7.70801V3.03601C14.473 3.03601 16.631 3.92201 18.437 5.69401C20.243 7.46601 21.146 9.80301 21.146 12.705C21.146 14.369 20.813 15.961 20.147 17.481C19.481 19.001 18.57 20.174 17.414 21H14.017ZM2.85303 21L5.27503 16.035C5.86303 14.887 6.15703 13.785 6.15703 12.729C6.15703 11.232 5.62703 10.021 4.56703 9.09601C3.50703 8.17101 2.25103 7.70801 0.799026 7.70801V3.03601C3.30903 3.03601 5.46703 3.92201 7.27303 5.69401C9.07903 7.46601 9.98203 9.80301 9.98203 12.705C9.98203 14.369 9.64903 15.961 8.98303 17.481C8.31703 19.001 7.40603 20.174 6.25003 21H2.85303Z" />
    </svg>
  );
}
