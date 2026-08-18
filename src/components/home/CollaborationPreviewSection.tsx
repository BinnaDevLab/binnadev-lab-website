import { Container } from "@/components/ui/Container";
import { H2, Body, Mono, Meta } from "@/components/ui/Typography";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CollaborationPreviewSection() {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-obsidian border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/shared/shared-asset-4.jpeg"
          alt="Engineering services"
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/40" />
      </div>

      <Container className="relative z-20 max-w-[1800px] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          <div className="md:col-span-8 lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <Mono className="text-gold">Professional Services</Mono>
            </div>
            
            <H2 className="text-5xl md:text-6xl mb-8 leading-[1.1] text-white">
              Build with <br className="hidden md:block"/> the Lab.
            </H2>
            
            <Body className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl font-light">
              Beyond education, BinnaDev Lab collaborates with founders, protocols,
              and enterprises to architect secure smart contracts and develop
              production-grade decentralized applications.
            </Body>

            <Link 
              href="/collaborate"
              className="group inline-flex items-center gap-6 py-4 px-8 border border-white/20 hover:border-gold transition-colors duration-300 bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="flex flex-col gap-1">
                <Meta className="text-white/40 group-hover:text-gold/50 transition-colors">Client Services</Meta>
                <Mono className="text-white group-hover:text-gold transition-colors">View Capabilities</Mono>
              </div>
              <ArrowRight className="w-6 h-6 text-white/50 group-hover:text-gold group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
