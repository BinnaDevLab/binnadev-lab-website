import * as React from "react";
import { cn } from "@/lib/utils";

// Display: Massive, brutalist, grid-breaking typography
export function Display({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "font-display text-6xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter text-foreground leading-[0.85] uppercase",
        className
      )}
      {...props}
    />
  );
}

// H1: Standard large section headers
export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1]",
        className
      )}
      {...props}
    />
  );
}

// H2: Subsection headers
export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.1]",
        className
      )}
      {...props}
    />
  );
}

// H3: Item headers
export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "font-display text-xl md:text-2xl font-medium tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

// Body: Standard reading text, optimized for readability
export function Body({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-sans text-base md:text-lg leading-[1.6] text-muted font-light",
        className
      )}
      {...props}
    />
  );
}

// Mono: For code-like elements, technical labels
export function Mono({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-mono text-sm tracking-wider uppercase text-foreground/80",
        className
      )}
      {...props}
    />
  );
}

// Meta: Microscopic technical details, coordinates, timestamps
export function Meta({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted/60",
        className
      )}
      {...props}
    />
  );
}
