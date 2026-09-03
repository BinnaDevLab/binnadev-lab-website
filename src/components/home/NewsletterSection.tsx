import { Container } from "@/components/ui/Container";
import { H3, Body } from "@/components/ui/Typography";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

import Image from "next/image";

export function NewsletterSection() {
  return (
    <section className="py-24 bg-carbon border-t border-white/5 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/shared/shared-asset-10.jpeg"
          alt="Abstract architecture"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-obsidian/70 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0c0c0c_80%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-carbon to-transparent pointer-events-none" />

      <Container className="relative z-10 max-w-4xl text-center">
        <H3 className="text-3xl md:text-5xl mb-6 tracking-tight">
          Lab Dispatches.
        </H3>
        <Body className="text-lg text-white/70 max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Engineering notes from the practice. Research, security breakdowns,
          and cohort updates delivered directly to your inbox.
        </Body>
        <div className="flex justify-center text-left">
          <div className="w-full max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
