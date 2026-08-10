export interface Lesson {
  id: string; // e.g., "lesson-0"
  title: string;
  description?: string;
  markdown: string;
  estimatedTime?: string;
  xp?: number;
}

export interface Level {
  id: string; // e.g., "level-0-the-illusion-of-code"
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Book {
  id: string; // e.g., "book-0-how-to-read-code"
  title: string;
  description: string;
  levels: Level[];
}

export interface ContentProvider {
  getBooks(): Promise<Book[]>;
  getBook(bookId: string): Promise<Book | null>;
  getLevel(bookId: string, levelId: string): Promise<Level | null>;
  getLesson(
    bookId: string,
    levelId: string,
    lessonId: string,
  ): Promise<Lesson | null>;
}
