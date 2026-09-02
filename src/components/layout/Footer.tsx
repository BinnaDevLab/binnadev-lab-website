import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Body, Mono } from "@/components/ui/Typography";
import { footerNavigation } from "@/data";

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5 py-20 relative overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display font-semibold tracking-wider text-foreground text-xl">
                BinnaDevLab
              </span>
            </div>
            <Body className="text-muted max-w-sm mb-8">
              A lab where developers come to sharpen their minds, build real
              things, and grow together. Reasoning precedes coding.
            </Body>
          </div>

          <div>
            <Mono className="text-sm tracking-widest uppercase text-foreground mb-6 block">
              Lab
            </Mono>
            <ul className="space-y-4">
              {footerNavigation.lab.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Mono className="text-sm tracking-widest uppercase text-foreground mb-6 block">
              Services
            </Mono>
            <ul className="space-y-4">
              {footerNavigation.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-4">
          <Mono className="text-xs text-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} BinnaDev Lab. All rights reserved.
          </Mono>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-4 max-w-[280px] md:max-w-none">
            {footerNavigation.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors text-sm font-mono py-2"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
