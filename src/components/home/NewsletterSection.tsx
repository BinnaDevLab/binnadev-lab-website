import { Container } from "@/components/ui/Container";
import { H3, Body, Mono } from "@/components/ui/Typography";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="py-24 bg-obsidian border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0c0c0c_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon/50 to-transparent pointer-events-none" />
      
      <Container className="relative z-10 max-w-4xl text-center">
        <Mono className="text-gold tracking-[0.2em] uppercase text-xs mb-6 block">Lab Dispatches</Mono>
        <H3 className="text-3xl md:text-5xl mb-6">Stay ahead of the curve.</H3>
        <Body className="text-lg text-white/60 max-w-xl mx-auto mb-10 font-light">
          Join a private network of engineers. We share unfiltered research, architectural patterns, security breakdowns, and early access to our curriculum.
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
