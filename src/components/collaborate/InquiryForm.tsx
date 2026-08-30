"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";
import { AlertCircle, Terminal } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-obsidian">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Context */}
          <FadeIn className="lg:col-span-5">
            <Mono className="text-gold mb-6 block text-sm tracking-widest uppercase">
              Contact
            </Mono>
            <H2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
              Tell Us What You&apos;re Building.
            </H2>
            <Body className="text-xl text-white/60 mb-8 font-light leading-relaxed max-w-lg">
              We do not employ sales funnels. If your protocol requires deep
              architectural intervention, submit the technical parameters below.
              We will review the constraints and confirm if we are equipped to
              execute the solution.
            </Body>

            <div className="flex flex-col gap-6 mt-12 pt-12 border-t border-white/10">
              <div>
                <Mono className="text-gold text-xs tracking-widest uppercase mb-2">
                  Location
                </Mono>
                <Body className="text-white/80">Global / Remote First</Body>
              </div>
              <div>
                <Mono className="text-gold text-xs tracking-widest uppercase mb-2">
                  Response Time
                </Mono>
                <Body className="text-white/80">Typically within 48 hours</Body>
              </div>
            </div>
          </FadeIn>

          {/* Right: The Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <FadeIn className="bg-carbon border border-gold/20 p-12 rounded-2xl text-center h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Terminal className="w-8 h-8 text-gold" />
                </div>
                <H2 className="text-3xl mb-4 text-white">
                  Transmission Received
                </H2>
                <Body className="text-white/70 max-w-md mx-auto">
                  We have securely received your inquiry. One of our lead
                  engineers will review the details and reach out to you
                  shortly.
                </Body>
              </FadeIn>
            ) : (
              <FadeIn
                delay={0.2}
                className="bg-carbon/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-4 border-l border-b border-white/10 bg-obsidian/50 text-xs font-mono text-white/30 uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> SECURE CHANNEL
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 mt-4">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-white/80 font-mono uppercase tracking-wider text-xs"
                      >
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-white/80 font-mono uppercase tracking-wider text-xs"
                      >
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@organization.com"
                        className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-light"
                      />
                    </div>
                  </div>

                  {/* Organization Info */}
                  <div className="space-y-2">
                    <label
                      htmlFor="organization"
                      className="text-sm font-medium text-white/80 font-mono uppercase tracking-wider text-xs"
                    >
                      Organization / Protocol
                    </label>
                    <input
                      required
                      type="text"
                      id="organization"
                      name="organization"
                      placeholder="What are you building?"
                      className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-light"
                    />
                  </div>

                  {/* Textarea */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="details"
                        className="text-sm font-medium text-white/80 font-mono uppercase tracking-wider text-xs"
                      >
                        What problem do you need help solving?
                      </label>
                    </div>
                    <textarea
                      required
                      id="details"
                      name="details"
                      rows={6}
                      placeholder="Describe the architectural challenge, security concerns, or engineering constraints..."
                      className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-y font-light leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-xs font-mono text-white/60 leading-relaxed uppercase tracking-wider">
                      Communications are confidential. We are happy to sign an
                      NDA before reviewing private repositories.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-obsidian hover:bg-gold transition-colors duration-300 py-4 rounded-lg font-mono text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        "Transmitting..."
                      ) : (
                        <>
                          Start the Conversation
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </FadeIn>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
