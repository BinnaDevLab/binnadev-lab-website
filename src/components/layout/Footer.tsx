import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Body, Mono } from "@/components/ui/Typography";
import { footerNavigation } from "@/data";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5 py-20 relative overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-royal/50 to-transparent" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-2 pr-8">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-royal/20 border border-royal/50 flex items-center justify-center">
                <span className="font-mono font-bold text-royal">B</span>
              </div>
              <span className="font-display font-semibold tracking-wider text-foreground">
                BinnaDev<span className="text-royal">_</span>Lab
              </span>
            </div>
            <Body className="text-muted max-w-sm mb-8">
              The digital headquarters of an elite engineering laboratory. We build, research, and teach progressive smart contract security. Reasoning precedes coding.
            </Body>
            
            <NewsletterForm />
          </div>

          <div>
            <Mono className="text-sm tracking-widest uppercase text-foreground mb-6 block">Academy</Mono>
            <ul className="space-y-4">
              {footerNavigation.academy.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Mono className="text-sm tracking-widest uppercase text-foreground mb-6 block">Laboratory</Mono>
            <ul className="space-y-4">
              {footerNavigation.laboratory.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <Mono className="text-xs text-muted">
            © {new Date().getFullYear()} BinnaDev Lab. All rights reserved.
          </Mono>
          
          <div className="flex items-center gap-6">
            {footerNavigation.socials.map((social) => (
              <a key={social.label} href={social.href} className="text-muted hover:text-white transition-colors text-sm font-mono">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
