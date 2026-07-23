import * as React from "react";
import { cn } from "@/lib/utils";

// H1: Cinematic, massive, used for hero sections
export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

// H2: Section headers
export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

// H3: Card headers, subsection titles
export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

// Body: Standard reading text
export function Body({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-sans text-base md:text-lg leading-relaxed text-muted",
        className
      )}
      {...props}
    />
  );
}

// Mono: For code-like elements, technical labels, levels
export function Mono({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-mono text-sm tracking-wider uppercase text-gold",
        className
      )}
      {...props}
    />
  );
}
