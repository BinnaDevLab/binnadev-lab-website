import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { H1, Mono } from "@/components/ui/Typography";
import { content } from "@/lib/content";
import { LessonContentUI } from "@/components/content/LessonContentUI";
import { Clock, Zap } from "lucide-react";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ book: string; level: string; lesson: string }>;
}) {
  const { book: bookId, level: levelId, lesson: lessonId } = await params;
  
  // Fetch full book context to compute adjacent lessons
  const book = await content.getBook(bookId);
  const lesson = await content.getLesson(bookId, levelId, lessonId);

  if (!lesson || !book) {
    notFound();
  }

  // Flatten all lessons across all levels to find next/prev
  const allLessons = book.levels.flatMap(level => 
    level.lessons.map(l => ({ 
      ...l, 
      levelId: level.id,
      url: `/curriculum/${bookId}/${level.id}/${l.id}` 
    }))
  );

  const currentIndex = allLessons.findIndex(l => l.id === lessonId && l.levelId === levelId);
  
  const prevLesson = currentIndex > 0 ? { title: allLessons[currentIndex - 1].title, url: allLessons[currentIndex - 1].url } : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? { title: allLessons[currentIndex + 1].title, url: allLessons[currentIndex + 1].url } : null;

  // Formatting Breadcrumbs nicely
  const bookTitle = book.title;
  const levelTitle = levelId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // Mocked Metadata for the Command Center
  const metadata = {
    prerequisites: ["Solidity Fundamentals", "EVM Basics"],
    objectives: [
      "Understand the execution flow",
      "Identify common attack vectors",
      "Model state transitions"
    ],
    githubUrl: "https://github.com/obinnafranklinduru",
    lastUpdated: "October 2024"
  };

  return (
    <div className="min-h-screen pt-32 pb-32 bg-obsidian">
      <Container>
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-mono text-muted mb-12 flex-wrap">
          <Link href="/curriculum" className="hover:text-gold transition-colors">Curriculum</Link>
          <span className="text-white/20">/</span>
          <Link href={`/curriculum/${bookId}`} className="hover:text-gold transition-colors">{bookTitle}</Link>
          <span className="text-white/20">/</span>
          <span className="text-royal">{levelTitle}</span>
        </div>

        {/* Lesson Header Area */}
        <div className="mb-12">
          <H1 className="mb-6">{lesson.title}</H1>
          
          <div className="flex flex-wrap items-center gap-4">
            {lesson.estimatedTime && (
              <div className="flex items-center gap-2 bg-carbon px-4 py-2 rounded-full border border-white/5">
                <Clock className="w-4 h-4 text-royal" />
                <Mono className="text-sm text-muted">{lesson.estimatedTime}</Mono>
              </div>
            )}
            
            {lesson.xp && (
              <div className="flex items-center gap-2 bg-carbon px-4 py-2 rounded-full border border-white/5">
                <Zap className="w-4 h-4 text-gold" />
                <Mono className="text-sm text-gold">+{lesson.xp} XP</Mono>
              </div>
            )}
          </div>
        </div>

        {/* The Multi-Content Hub Interface */}
        <LessonContentUI 
          lesson={lesson} 
          navigation={{ prev: prevLesson, next: nextLesson }}
          metadata={metadata}
        />

      </Container>
    </div>
  );
}
