"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

import { subscribeNewsletter } from "@/app/actions/subscribeNewsletter";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await subscribeNewsletter(formData);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Failed to subscribe.");
    }
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="relative max-w-sm">
        <div className="relative flex items-center">
          <Mail className="absolute left-4 w-4 h-4 text-muted" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="satoshinakamoto@protocol.xyz"
            disabled={status === "loading" || status === "success"}
            className="w-full bg-carbon border border-white/10 rounded-lg py-3 pl-12 pr-12 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors disabled:opacity-50"
          />
          <button
            aria-label="Subscribe to newsletter"
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
        {status === "error" && (
          <p className="absolute -bottom-6 left-0 text-xs text-red-400 font-mono">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
