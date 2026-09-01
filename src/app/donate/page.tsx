"use client";

import { Container } from "@/components/ui/Container";
import { H1, Body, Mono, Meta } from "@/components/ui/Typography";
import { Landmark, Wallet, Copy, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DonatePage() {
  const [copiedFiat, setCopiedFiat] = useState(false);
  const [copiedCrypto, setCopiedCrypto] = useState(false);

  const handleCopy = (text: string, type: "fiat" | "crypto") => {
    navigator.clipboard.writeText(text);
    if (type === "fiat") {
      setCopiedFiat(true);
      setTimeout(() => setCopiedFiat(false), 2000);
    } else {
      setCopiedCrypto(true);
      setTimeout(() => setCopiedCrypto(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-24 relative overflow-hidden flex flex-col items-center">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div
        className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px)
        `,
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10 max-w-5xl">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <Mono className="text-gold tracking-[0.2em] uppercase text-xs mb-6 block">
            Support Practical Work
          </Mono>
          <H1 className="text-4xl md:text-6xl mb-6 leading-[1.1]">
            Contribution routes, <br className="hidden md:block" />
            <span className="text-white/50">stated plainly.</span>
          </H1>
          <Body className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We build from first principles. If you&apos;d like to support the ongoing research, open-source tooling, and ecosystem development at BinnaDevLab, you can do so below. We do not use third-party payment gateways or track donation activity.
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-4xl mx-auto">
          {/* Fiat Card */}
          <div className="p-8 md:p-10 border border-white/10 bg-carbon/80 backdrop-blur-xl rounded-2xl flex flex-col h-full shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <Landmark className="w-5 h-5 text-white/70" />
              </div>
              <h2 className="text-2xl font-display text-white">Local Fiat (NGN)</h2>
            </div>

            <div className="flex flex-col gap-6 flex-grow mb-12">
              <div>
                <Meta className="text-white/40 mb-1.5 block">Bank</Meta>
                <p className="text-lg md:text-xl text-white font-medium">Opay</p>
              </div>
              <div>
                <Meta className="text-white/40 mb-1.5 block">Account Name</Meta>
                <p className="text-lg md:text-xl text-white font-medium">Obinna Franklin Duru</p>
              </div>
              <div>
                <Meta className="text-white/40 mb-2 block">Account Number</Meta>
                <Mono className="text-2xl md:text-3xl text-gold font-bold bg-gold/5 inline-block px-4 py-2 rounded-lg border border-gold/10 shadow-[0_0_10px_rgba(212,175,55,0.05)]">
                  8064248389
                </Mono>
              </div>
            </div>

            <button
              onClick={() => handleCopy("8064248389", "fiat")}
              className={`w-full py-4 rounded-xl font-mono text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                copiedFiat
                  ? "bg-green-900/30 text-green-400 border border-green-900/50 shadow-[0_0_15px_rgba(74,222,128,0.1)]"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold/30 hover:text-gold"
              }`}
            >
              {copiedFiat ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  COPIED TO CLIPBOARD!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  COPY ACCOUNT NUMBER
                </>
              )}
            </button>
          </div>

          {/* Crypto Card */}
          <div className="p-8 md:p-10 border border-white/10 bg-carbon/80 backdrop-blur-xl rounded-2xl flex flex-col h-full shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <Wallet className="w-5 h-5 text-white/70" />
              </div>
              <h2 className="text-2xl font-display text-white">Web3 / Crypto</h2>
            </div>

            <div className="flex flex-col gap-6 flex-grow mb-12">
              <div>
                <Meta className="text-white/40 mb-2 block">Supported Networks</Meta>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Base", "Monad", "Polygon", "Ethereum"].map((net) => (
                    <span key={net} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70">
                      {net}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-2 p-4 bg-gold/5 border border-gold/20 rounded-xl flex gap-3 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-gold/90 leading-relaxed">
                  Ensure you are sending via supported EVM-compatible networks. Assets sent on other chains cannot be recovered.
                </p>
              </div>

              <div className="mt-2">
                <Meta className="text-white/40 mb-3 block">Address</Meta>
                <Mono className="text-[13px] md:text-sm text-gold break-all bg-black/50 p-4 rounded-xl border border-white/5 font-semibold">
                  0x904A484AaBFb6606C7956af5F83FaaE29d5b397A
                </Mono>
              </div>
            </div>

            <button
              onClick={() => handleCopy("0x904A484AaBFb6606C7956af5F83FaaE29d5b397A", "crypto")}
              className={`w-full py-4 rounded-xl font-mono text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                copiedCrypto
                  ? "bg-green-900/30 text-green-400 border border-green-900/50 shadow-[0_0_15px_rgba(74,222,128,0.1)]"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold/30 hover:text-gold"
              }`}
            >
              {copiedCrypto ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  COPIED TO CLIPBOARD!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  COPY ADDRESS
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-24 pb-12 flex flex-col items-center justify-center gap-8 text-center border-t border-white/5 pt-12">
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Alpha Space does not collect payment or record donation activity. Thank you for supporting the lab.
          </p>
          <Link 
            href="/"
            className="flex items-center gap-2 text-white/50 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return Home
          </Link>
        </div>
      </Container>
    </main>
  );
}
