import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";
import { collaborationProcess } from "@/data";

export function CollaborationProcessSection() {
  return (
    <section className="py-32 relative">
      <Container>
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <Mono className="text-gold mb-4 block tracking-widest uppercase">
            Methodology
          </Mono>
          <H2 className="text-4xl">How We Collaborate</H2>
          <Body className="text-muted mt-4 text-lg">
            A structured, rigorous engagement model designed to deliver
            production-grade results with complete transparency.
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborationProcess.map((step) => (
            <div
              key={step.id}
              className="group p-8 rounded-xl border border-white/5 bg-carbon/30 hover:border-gold/50 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Background Step Number (Large, faded) */}
              <div className="absolute -right-4 -bottom-8 text-9xl font-display font-bold text-white/[0.02] group-hover:text-gold/[0.05] transition-colors duration-500 select-none pointer-events-none">
                {step.number}
              </div>

              <Mono className="text-gold mb-6 block text-sm border border-royal/20 bg-royal/5 rounded-full w-fit px-3 py-1">
                Step {step.number}
              </Mono>

              <H3 className="text-xl mb-4 text-white group-hover:text-gold transition-colors relative z-10">
                {step.title}
              </H3>

              <Body className="text-muted leading-relaxed relative z-10">
                {step.description}
              </Body>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
