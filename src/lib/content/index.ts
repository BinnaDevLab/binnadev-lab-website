import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Book, Level, Lesson, ContentProvider } from './types';

// During development, we read directly from the adjacent academy repository.
// The content retrieval logic is fully decoupled from the UI.
const ACADEMY_REPO_PATH = path.join(process.cwd(), '../GitHub/progressive-smart-contract-security-academy');

export class LocalMarkdownContentProvider implements ContentProvider {
  private async readDirectory(dirPath: string): Promise<string[]> {
    try {
      const dirents = await fs.promises.readdir(dirPath, { withFileTypes: true });
      return dirents.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    } catch {
      return [];
    }
  }

  private parseMarkdownContent(filePath: string) {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      return { data, content };
    } catch {
      return null;
    }
  }

  async getBooks(): Promise<Book[]> {
    const booksDir = path.join(ACADEMY_REPO_PATH, 'books');
    const bookFolders = await this.readDirectory(booksDir);
    
    // Sort books by name (e.g., book-0, book-1, etc.)
    bookFolders.sort();

    const books: Book[] = [];
    for (const folder of bookFolders) {
      const bookData = await this.getBook(folder);
      if (bookData) {
        books.push(bookData);
      }
    }
    return books;
  }

  async getBook(bookId: string): Promise<Book | null> {
    const bookPath = path.join(ACADEMY_REPO_PATH, 'books', bookId);
    if (!fs.existsSync(bookPath)) return null;

    const levelFolders = await this.readDirectory(bookPath);
    levelFolders.sort();

    // Default title from folder name if no overarching metadata
    const title = bookId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    const levels: Level[] = [];
    for (const folder of levelFolders) {
      const levelData = await this.getLevel(bookId, folder);
      if (levelData) levels.push(levelData);
    }

    return {
      id: bookId,
      title: title,
      description: `Deep dive into ${title}.`,
      levels
    };
  }

  async getLevel(bookId: string, levelId: string): Promise<Level | null> {
    const levelPath = path.join(ACADEMY_REPO_PATH, 'books', bookId, levelId);
    if (!fs.existsSync(levelPath)) return null;

    const lessonFolders = await this.readDirectory(levelPath);
    lessonFolders.sort();

    const title = levelId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    const lessons: Lesson[] = [];
    for (const folder of lessonFolders) {
      const lessonData = await this.getLesson(bookId, levelId, folder);
      if (lessonData) lessons.push(lessonData);
    }

    return {
      id: levelId,
      title,
      description: `Exploring ${title}`,
      lessons
    };
  }

  async getLesson(bookId: string, levelId: string, lessonId: string): Promise<Lesson | null> {
    const lessonPath = path.join(ACADEMY_REPO_PATH, 'books', bookId, levelId, lessonId, 'README.md');
    
    const parsed = this.parseMarkdownContent(lessonPath);
    if (!parsed) return null;

    const titleMatch = parsed.content.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : lessonId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    // Basic heuristic: ~200 words per minute
    const wordCount = parsed.content.split(/\s+/).length;
    const estimatedMinutes = Math.max(1, Math.ceil(wordCount / 200));

    return {
      id: lessonId,
      title,
      description: parsed.data.description || '',
      markdown: parsed.content,
      estimatedTime: `${estimatedMinutes} min`,
      xp: 100 // Placeholder gamification element
    };
  }
}

// Export a singleton instance of the provider
export const content = new LocalMarkdownContentProvider();
