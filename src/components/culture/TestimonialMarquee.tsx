"use client";

import { testimonials } from "@/data";
import { Quote, GitBranch, Briefcase, MessageCircle } from "lucide-react";
import Image from "next/image";

export function TestimonialMarquee() {
  // Duplicate array to create a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden w-full bg-obsidian py-10">
      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:pause gap-6 px-4">
        {duplicatedTestimonials.map((testimonial, i) => (
          <div 
            key={`${testimonial.id}-${i}`} 
            className="w-[350px] md:w-[450px] p-8 bg-carbon/30 border border-white/5 rounded-xl flex flex-col h-[320px] transition-colors hover:border-gold/30 hover:bg-carbon/60 relative group"
          >
            <Quote className="w-8 h-8 text-gold mx-auto mb-6 opacity-20 absolute top-6 right-6" />
            <p className="text-muted leading-relaxed mb-6 flex-grow text-sm md:text-base pr-4">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-obsidian border border-white/10 flex items-center justify-center relative">
                  {testimonial.avatarUrl ? (
                    <Image 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.author} 
                      fill
                      sizes="48px"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  ) : (
                    <span className="font-mono text-sm text-royal">{testimonial.author.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{testimonial.author}</div>
                  <div className="text-xs font-mono text-muted">{testimonial.role}</div>
                  {testimonial.organization && (
                    <div className="text-xs text-gold mt-0.5">{testimonial.organization}</div>
                  )}
                </div>
              </div>
              
              {/* Social Links */}
              {testimonial.socialLinks && (
                <div className="flex items-center gap-2">
                  {testimonial.socialLinks.twitter && (
                    <a href={testimonial.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  )}
                  {testimonial.socialLinks.linkedin && (
                    <a href={testimonial.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </a>
                  )}
                  {testimonial.socialLinks.github && (
                    <a href={testimonial.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                      <GitBranch className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
