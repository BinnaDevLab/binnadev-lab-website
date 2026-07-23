"use client";

import { useState, useEffect } from "react";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { PlayCircle, FileText, Code, BookOpen, Clock, Target, Shield, ArrowRight, ArrowLeft, GitBranch, Calendar } from "lucide-react";
import { Mono } from "@/components/ui/Typography";
import Link from "next/link";

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface LessonContentUIProps {
  lesson: {
    title: string;
    markdown: string;
    estimatedTime?: string;
  };
  navigation: {
    prev: { title: string; url: string } | null;
    next: { title: string; url: string } | null;
  };
  metadata: {
    prerequisites: string[];
    objectives: string[];
    githubUrl: string;
    lastUpdated: string;
  };
}

function extractHeadings(markdown: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({ level, text, id });
  }
  return headings;
}

export function LessonContentUI({ lesson, navigation, metadata }: LessonContentUIProps) {
  const [activeTab, setActiveTab] = useState("readme");
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");
  const headings = extractHeadings(lesson.markdown);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveHeadingId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 1.0 }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const tabs = [
    { id: "readme", label: "Core Concept", icon: <FileText className="w-4 h-4" /> },
    { id: "youtube", label: "Video Walkthrough", icon: <PlayCircle className="w-4 h-4" /> },
    { id: "devto", label: "Deep Dive Essay", icon: <Code className="w-4 h-4" /> },
    { id: "resources", label: "Resources", icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12 relative">
      
      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide border-b border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-carbon border-t border-x border-white/10 text-gold"
                  : "text-muted hover:text-foreground hover:bg-white/5"
              }`}
            >
              {tab.icon}
              <Mono className="text-sm font-medium">{tab.label}</Mono>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-transparent rounded-lg min-h-[60vh]">
          {activeTab === "readme" && (
            <div className="prose prose-invert max-w-none">
              <MarkdownRenderer content={lesson.markdown} />
            </div>
          )}

          {activeTab === "youtube" && (
            <div className="flex flex-col items-center justify-center py-32 bg-carbon/30 border border-white/5 rounded-xl border-dashed">
              <PlayCircle className="w-12 h-12 text-muted mb-4 opacity-50" />
              <div className="text-xl text-muted mb-2">Video Lesson Placeholder</div>
              <p className="text-sm text-muted/50">YouTube integration goes here.</p>
            </div>
          )}

          {activeTab === "devto" && (
            <div className="flex flex-col items-center justify-center py-32 bg-carbon/30 border border-white/5 rounded-xl border-dashed">
              <Code className="w-12 h-12 text-muted mb-4 opacity-50" />
              <div className="text-xl text-muted mb-2">DEV.to Essay Placeholder</div>
              <p className="text-sm text-muted/50">Expanded technical article goes here.</p>
            </div>
          )}

          {activeTab === "resources" && (
            <div className="flex flex-col items-center justify-center py-32 bg-carbon/30 border border-white/5 rounded-xl border-dashed">
              <BookOpen className="w-12 h-12 text-muted mb-4 opacity-50" />
              <div className="text-xl text-muted mb-2">Resources Placeholder</div>
              <p className="text-sm text-muted/50">Downloadable files and external links go here.</p>
            </div>
          )}
        </div>

        {/* Next / Previous Pagination */}
        <div className="mt-24 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {navigation.prev ? (
            <Link 
              href={navigation.prev.url}
              className="group p-6 bg-carbon/30 border border-white/5 hover:border-royal/50 hover:bg-carbon/80 rounded-xl transition-all duration-300 flex flex-col justify-center"
            >
              <Mono className="text-xs text-muted mb-3 flex items-center gap-2 group-hover:text-royal transition-colors">
                <ArrowLeft className="w-4 h-4" /> Previous Simulation
              </Mono>
              <span className="text-lg font-medium text-white group-hover:text-gold transition-colors">{navigation.prev.title}</span>
            </Link>
          ) : <div />}

          {navigation.next ? (
            <Link 
              href={navigation.next.url}
              className="group p-6 bg-carbon/30 border border-white/5 hover:border-gold/50 hover:bg-carbon/80 rounded-xl transition-all duration-300 flex flex-col justify-center items-end text-right"
            >
              <Mono className="text-xs text-muted mb-3 flex items-center gap-2 group-hover:text-gold transition-colors">
                Next Simulation <ArrowRight className="w-4 h-4" />
              </Mono>
              <span className="text-lg font-medium text-white group-hover:text-gold transition-colors">{navigation.next.title}</span>
            </Link>
          ) : (
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-xl flex flex-col justify-center items-end text-right opacity-50">
               <Mono className="text-xs text-muted mb-3 flex items-center gap-2">
                Track Complete <Target className="w-4 h-4" />
              </Mono>
              <span className="text-lg font-medium text-white">Return to Overview</span>
            </div>
          )}
        </div>

      </div>

      {/* Expanded Dashboard Sidebar */}
      <div className="hidden lg:flex flex-col w-72 flex-shrink-0 gap-8">
        
        {/* Command Center Card */}
        <div className="bg-carbon/50 border border-white/5 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-royal/10 blur-2xl rounded-full" />
          <Mono className="text-xs tracking-widest text-gold uppercase mb-6 flex items-center gap-2">
            <Shield className="w-4 h-4" /> Command Center
          </Mono>

          <div className="space-y-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted mb-2">
                <Clock className="w-3 h-3" /> Reading Time
              </div>
              <div className="text-sm font-medium text-white">{lesson.estimatedTime || "15 min"}</div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted mb-2">
                <Target className="w-3 h-3" /> Objectives
              </div>
              <ul className="space-y-2">
                {metadata.objectives.map((obj, i) => (
                  <li key={i} className="text-sm text-white/80 flex gap-2">
                    <span className="text-royal/50">•</span> {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted mb-2">
                <Calendar className="w-3 h-3" /> Last Updated
              </div>
              <div className="text-sm font-mono text-white/80">{metadata.lastUpdated}</div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a href={metadata.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-obsidian border border-white/10 rounded-lg hover:border-white/30 transition-colors group">
                <span className="text-sm font-mono text-white group-hover:text-gold transition-colors">Source Code</span>
                <GitBranch className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Sticky Table of Contents */}
        {activeTab === "readme" && headings.length > 0 && (
          <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto bg-obsidian/30 backdrop-blur-sm border border-white/5 rounded-xl p-6">
            <Mono className="text-xs text-muted uppercase tracking-widest mb-6 block">
              On this page
            </Mono>
            <ul className="space-y-3 border-l border-white/10">
              {headings.map((heading, i) => (
                <li 
                  key={i} 
                  className={`relative ${heading.level === 3 ? "ml-4" : ""}`}
                >
                  <a
                    href={`#${heading.id}`}
                    className={`block pl-4 py-1 text-sm transition-colors border-l-2 -ml-[1px] ${
                      activeHeadingId === heading.id
                        ? "text-gold border-gold font-medium"
                        : "text-muted hover:text-white border-transparent"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
