import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import { content } from "@/lib/content";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";
import { bookVisuals } from "@/data";

export default async function BookOverviewPage({
  params,
}: {
  params: Promise<{ book: string }>;
}) {
  const { book: bookId } = await params;
  const book = await content.getBook(bookId);

  if (!book) {
    notFound();
  }

  const visual = bookVisuals[book.id] || { 
    coverUrl: "https://images.pexels.com/photos/17489155/pexels-photo-17489155/free-photo-of-geometric-shapes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    themeColor: "from-royal/10 to-obsidian",
    shortTheme: "Engineering Core"
  };

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Cinematic Hero */}
      <div className="relative pt-32 pb-24 border-b border-white/5 overflow-hidden min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-obsidian z-10 opacity-60" />
        <div className={`absolute inset-0 bg-gradient-to-b ${visual.themeColor} z-10 mix-blend-multiply`} />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-obsidian to-transparent z-10" />
        
        <Image 
          src={visual.coverUrl} 
          alt={book.title} 
          fill
          className="object-cover grayscale opacity-50"
        />

        <Container className="relative z-20">
          <Link href="/curriculum" className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Curriculum
          </Link>

          <div className="max-w-3xl">
            <Mono className="text-gold mb-4 block tracking-widest uppercase flex items-center gap-2">
              <Layers className="w-4 h-4" /> {visual.shortTheme}
            </Mono>
            <H1 className="mb-6">{book.title}</H1>
            <Body className="text-xl text-white/80 leading-relaxed">
              {book.description}
            </Body>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="max-w-3xl">
          <H2 className="mb-12">Track Progression</H2>
          
          <div className="space-y-12 border-l border-white/10 pl-8 ml-4 relative">
            {book.levels.map((level, levelIndex) => (
              <div key={level.id} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-obsidian border-2 border-royal z-10" />
                
                <div className="mb-6">
                  <span className="font-mono text-xs tracking-widest uppercase text-muted block mb-2">Phase 0{levelIndex + 1}</span>
                  <H3 className="text-2xl text-white group-hover:text-gold transition-colors">{level.title}</H3>
                </div>

                <div className="flex flex-col gap-4">
                  {level.lessons.map((lesson, lessonIndex) => (
                    <Link 
                      key={lesson.id} 
                      href={`/curriculum/${book.id}/${level.id}/${lesson.id}`}
                      className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-carbon/30 border border-white/5 rounded-lg hover:border-gold/30 hover:bg-carbon transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-xs text-gold">Simulation 0{lessonIndex + 1}</span>
                        </div>
                        <span className="font-medium text-white group-hover:text-gold transition-colors block text-lg">{lesson.title}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm font-mono text-muted group-hover:text-white transition-colors mt-4 md:mt-0">
                        Begin
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
