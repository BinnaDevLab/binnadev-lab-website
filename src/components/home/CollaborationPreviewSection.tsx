import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CollaborationPreviewSection() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/30 to-obsidian pointer-events-none" />
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Mono className="text-royal mb-6 flex justify-center items-center gap-2 tracking-widest uppercase text-sm">
            <ShieldCheck className="w-4 h-4" /> Professional Services
          </Mono>
          <H2 className="text-4xl md:text-5xl mb-8">Build with the Lab</H2>
          <Body className="text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Beyond education, BinnaDev Lab partners with founders, protocols,
            and enterprises to architect secure smart contracts and develop
            production-grade decentralized applications.
          </Body>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collaborate">
              <Button size="lg" className="group">
                View Capabilities
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
