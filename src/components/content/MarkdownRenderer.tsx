import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ]}
        components={{
          h1: ({ node, ...props }) => <H1 className="mt-12 mb-6" {...props} />,
          h2: ({ node, ...props }) => (
            <H2
              className="mt-16 mb-6 pb-2 border-b border-white/10"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => <H3 className="mt-10 mb-4" {...props} />,
          p: ({ node, ...props }) => (
            <Body
              className="mb-6 text-lg leading-relaxed text-muted/90"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-royal hover:text-gold transition-colors underline underline-offset-4 decoration-royal/30 hover:decoration-gold/50"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc pl-6 mb-6 space-y-2 text-lg text-muted/90 marker:text-royal"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal pl-6 mb-6 space-y-2 text-lg text-muted/90 marker:text-gold"
              {...props}
            />
          ),
          li: ({ node, ...props }) => <li className="pl-2" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-2 border-gold pl-6 py-2 my-8 bg-carbon/50 rounded-r-md italic text-muted"
              {...props}
            />
          ),
          code: ({ inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            if (!inline && match) {
              // Standard code block
              return (
                <div className="my-8 rounded-lg overflow-hidden border border-white/10 bg-carbon">
                  <div className="flex items-center px-4 py-2 bg-obsidian border-b border-white/5">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <Mono className="ml-4 text-xs text-muted/50 uppercase">
                      {match[1]}
                    </Mono>
                  </div>
                  <pre className="p-6 overflow-x-auto text-sm font-mono text-foreground/90">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              );
            }
            return (
              <code
                className="bg-carbon px-1.5 py-0.5 rounded text-gold font-mono text-sm"
                {...props}
              >
                {children}
              </code>
            );
          },
          hr: ({ node, ...props }) => (
            <hr className="my-12 border-white/10" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-8">
              <table
                className="w-full text-left border-collapse border border-white/10"
                {...props}
              />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th
              className="p-4 bg-carbon border-b border-white/10 font-medium text-foreground"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td className="p-4 border-b border-white/5 text-muted" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
