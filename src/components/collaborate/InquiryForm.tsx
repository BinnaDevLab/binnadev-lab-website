"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Custom multi-select state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const servicesList = [
    "Smart Contract Audit",
    "Protocol Architecture",
    "Smart Contract Development",
    "Full-Stack Web3",
    "Infrastructure",
    "Technical Training"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="inquiry" className="py-32 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/20 to-obsidian pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <Mono className="text-gold mb-4 block tracking-widest uppercase">Start The Conversation</Mono>
            <H2 className="text-4xl mb-4">Let's Build Together.</H2>
            <Body className="text-muted text-lg max-w-2xl mx-auto">
              Tell us about your organization, your engineering challenges, and how BinnaDev Lab can help you achieve production-grade security and scale.
            </Body>
          </div>

          <div className="bg-carbon/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Success State Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-carbon/95 backdrop-blur-3xl z-20 flex flex-col items-center justify-center p-8 text-center border border-royal/30 rounded-2xl">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <H2 className="text-3xl mb-4">Inquiry Received</H2>
                <Body className="text-muted text-lg max-w-md mb-8">
                  Thank you for reaching out. An architect from the Lab will review your requirements and be in touch shortly.
                </Body>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                  Submit Another Inquiry
                </Button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name <span className="text-royal">*</span></label>
                  <input 
                    required 
                    type="text" 
                    id="name" 
                    placeholder="Satoshi Nakamoto"
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/50 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Professional Email <span className="text-royal">*</span></label>
                  <input 
                    required 
                    type="email" 
                    id="email" 
                    placeholder="founder@protocol.com"
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-white/80">Company / Organization <span className="text-royal">*</span></label>
                  <input 
                    required 
                    type="text" 
                    id="company" 
                    placeholder="Nexus Finance"
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium text-white/80">Job Title</label>
                  <input 
                    type="text" 
                    id="title" 
                    placeholder="Chief Technology Officer"
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/50 transition-all"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="text-sm font-medium text-white/80">Type of Inquiry <span className="text-royal">*</span></label>
                  <select 
                    required 
                    id="inquiryType" 
                    defaultValue=""
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/50 transition-all appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="audit">Smart Contract Audit</option>
                    <option value="development">Smart Contract Development</option>
                    <option value="architecture">Protocol Architecture</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="training">Technical Training</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-white/80">Project Budget (Optional)</label>
                  <select 
                    id="budget" 
                    defaultValue=""
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/50 transition-all appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                  >
                    <option value="" disabled>Select a range...</option>
                    <option value="tier1">&lt; $50k</option>
                    <option value="tier2">$50k - $150k</option>
                    <option value="tier3">$150k - $500k</option>
                    <option value="tier4">$500k+</option>
                  </select>
                </div>
              </div>

              {/* Multi-Select Services */}
              <div className="pt-6 border-t border-white/5 space-y-4">
                <label className="text-sm font-medium text-white/80">Services Interested In (Multi-select)</label>
                <div className="flex flex-wrap gap-3">
                  {servicesList.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedServices.includes(service)
                          ? "bg-royal text-obsidian border border-royal"
                          : "bg-obsidian text-white/70 border border-white/10 hover:border-white/30"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea */}
              <div className="pt-6 border-t border-white/5 space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="details" className="text-sm font-medium text-white/80">Tell Us About Your Project <span className="text-royal">*</span></label>
                  <Mono className="text-xs text-white/40">Markdown Supported</Mono>
                </div>
                <textarea 
                  required 
                  id="details" 
                  rows={6}
                  placeholder="Describe your protocol, current development stage, and what you need help with..."
                  className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/50 transition-all resize-y"
                />
              </div>

              <div className="flex items-center gap-3 bg-royal/10 border border-royal/20 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-royal flex-shrink-0" />
                <p className="text-sm text-royal">
                  All communications are strictly confidential. We are happy to sign an NDA before reviewing any private repositories or architectural documents.
                </p>
              </div>

              <div className="pt-4 flex justify-end">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[200px]"
                >
                  {isSubmitting ? (
                    "Transmitting..."
                  ) : (
                    <>
                      Start the Conversation
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
