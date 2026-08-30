import { Container } from "@/components/ui/Container";
import { H2, H3, Mono } from "@/components/ui/Typography";
import { CohortCurriculumItem } from "@/data/cohorts";

interface CohortCurriculumProps {
  curriculum: CohortCurriculumItem[];
}

export function CohortCurriculum({ curriculum }: CohortCurriculumProps) {
  return (
    <section className="mb-40 relative">
      <Container>
        <div className="mb-16">
          <Mono className="text-gold mb-4 block tracking-[0.2em] uppercase text-xs">
            The Objective
          </Mono>
          <H2 className="text-3xl md:text-5xl tracking-tight">
            What you will master.
          </H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {curriculum.map((item, idx) => (
            <div
              key={item.id}
              className="p-10 border border-white/5 bg-carbon/20 rounded-xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity font-mono text-6xl text-white">
                {item.id}
              </div>
              <Mono className="text-gold mb-6 block text-sm">0{idx + 1} —</Mono>
              <H3 className="text-2xl mb-4 text-white group-hover:text-gold transition-colors">
                {item.title}
              </H3>
              <p className="text-lg text-white/60 font-light leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
