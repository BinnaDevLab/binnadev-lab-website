import { Container } from "@/components/ui/Container";
import { H1, H2, Body, Mono } from "@/components/ui/Typography";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { content } from "@/lib/content";
import { bookVisuals } from "@/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Explore the core pedagogical tracks of BinnaDev Lab. From EVM primitives to complex vulnerability exploitation.",
};

export default async function CurriculumPage() {
  const books = await content.getBooks();

  return (
    <div className="min-h-screen pt-32 pb-32 bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal/10 blur-[200px] rounded-full mix-blend-screen pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="mb-24 max-w-3xl border-b border-white/5 pb-12">
           <Mono className="text-royal mb-4 block tracking-widest uppercase flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Lab Curriculum
          </Mono>
          <H1 className="mb-6">Research Tracks</H1>
          <Body className="text-xl text-muted leading-relaxed">
            Progressive Smart Contract Security Academy. A structured methodology transitioning engineers from theoretical syntax to adversarial state modeling.
          </Body>
        </div>

        <div className="flex flex-col gap-12">
          {books.map((book, index) => {
            const visual = bookVisuals[book.id] || { 
              coverUrl: "https://images.pexels.com/photos/17489155/pexels-photo-17489155/free-photo-of-geometric-shapes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
              themeColor: "from-royal/10 to-obsidian",
              shortTheme: "Engineering Core"
            };

            return (
              <Link 
                key={book.id} 
                href={`/curriculum/${book.id}`}
                className="group relative flex flex-col md:flex-row overflow-hidden bg-carbon/50 border border-white/5 rounded-2xl hover:border-royal/50 transition-all duration-500 min-h-[350px]"
              >
                {/* Visual Cover Side */}
                <div className="md:w-5/12 relative overflow-hidden h-64 md:h-auto border-b md:border-b-0 md:border-r border-white/5">
                  <div className="absolute inset-0 bg-obsidian z-10 opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${visual.themeColor} z-10 mix-blend-multiply`} />
                  <Image 
                    src={visual.coverUrl} 
                    alt={book.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1 bg-obsidian/80 backdrop-blur border border-white/10 rounded-full text-xs font-mono tracking-widest uppercase text-white shadow-lg">
                      Track 0{index}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 drop-shadow-md">
                      {visual.shortTheme}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-between relative z-20">
                  <div>
                    <H2 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-gold transition-colors">{book.title}</H2>
                    <p className="text-muted text-lg leading-relaxed mb-8">
                      {book.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm font-mono text-royal group-hover:text-gold transition-colors">
                    <span className="uppercase tracking-widest">Enter Track</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
