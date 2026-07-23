"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="mt-8">
      <p className="text-sm text-white mb-4 font-medium">Subscribe to Lab Dispatches</p>
      <form onSubmit={handleSubmit} className="relative max-w-sm">
        <div className="relative flex items-center">
          <Mail className="absolute left-4 w-4 h-4 text-muted" />
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="engineering@protocol.xyz" 
            disabled={status === "loading" || status === "success"}
            className="w-full bg-carbon border border-white/10 rounded-lg py-3 pl-12 pr-12 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-royal/50 transition-colors disabled:opacity-50"
          />
          <button 
            type="submit" 
            disabled={status === "loading" || status === "success" || !email}
            className="absolute right-2 p-1.5 bg-obsidian rounded-md text-white hover:text-gold transition-colors disabled:opacity-50"
          >
            {status === "loading" ? (
              <div className="w-4 h-4 border-2 border-white/20 border-t-gold rounded-full animate-spin" />
            ) : status === "success" ? (
              <span className="text-gold text-xs font-mono px-1">OK</span>
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </div>
        {status === "success" && (
          <p className="absolute -bottom-6 left-0 text-xs text-gold font-mono">
            Subscription confirmed.
          </p>
        )}
      </form>
    </div>
  );
}
