import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";
import { services } from "@/data";

export function ServicesGrid() {
  return (
    <section id="services" className="py-32 bg-carbon/20 border-y border-white/5 relative">
      <Container>
        <div className="mb-20">
          <Mono className="text-gold mb-4 block tracking-widest uppercase">Core Capabilities</Mono>
          <H2 className="text-4xl">Engineering & Security Services</H2>
          <Body className="text-muted mt-4 max-w-2xl text-lg">
            We provide deep technical expertise across the entire blockchain stack. From the architecture of novel tokenomics to the low-level security auditing of EVM bytecodes.
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group p-8 rounded-xl border border-white/5 bg-obsidian hover:border-royal/50 hover:bg-carbon/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-carbon rounded-lg flex items-center justify-center mb-6 group-hover:bg-royal/10 transition-colors">
                  <Icon className="w-6 h-6 text-royal" />
                </div>
                
                <H3 className="text-xl mb-3 group-hover:text-gold transition-colors">{service.title}</H3>
                <Body className="text-sm text-muted mb-8 leading-relaxed">
                  {service.description}
                </Body>
                
                <ul className="space-y-3 border-t border-white/5 pt-6">
                  {service.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                      <Mono className="text-xs text-white/70 group-hover:text-white transition-colors">
                        {capability}
                      </Mono>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
