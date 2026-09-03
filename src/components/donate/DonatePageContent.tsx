"use client";

import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono, Meta } from "@/components/ui/Typography";
import {
  Landmark,
  Wallet,
  Copy,
  CheckCircle,
  AlertCircle,
  Video,
  PenTool,
  Terminal,
  Share2,
  Heart,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function DonatePageContent() {
  const [copiedType, setCopiedType] = useState<"fiat" | "crypto" | null>(null);

  const handleCopy = (text: string, type: "fiat" | "crypto") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);

    setTimeout(() => {
      setCopiedType(null); // Return to normal card after 3.5 seconds
    }, 3500);
  };

  const skills = [
    {
      title: "Can you edit videos?",
      description: "Help turn Lab sessions into useful content.",
      icon: Video,
    },
    {
      title: "Can you design?",
      description: "Help create visual assets for cohorts and research.",
      icon: PenTool,
    },
    {
      title: "Can you code?",
      description: "Help improve the website and internal tools.",
      icon: Terminal,
    },
    {
      title: "Good at social media?",
      description: "Help us distribute the work we publish.",
      icon: Share2,
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-obsidian">
      {/* Section 1: Financial Support (Dark Theme + Background Image) */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col items-center min-h-[90vh] justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shared/shared-asset-24.jpeg"
            alt="BinnaDev Lab Collaboration"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />
        </div>

        <Container className="relative z-10 max-w-5xl">
          {/* Bite-sized Hero */}
          <div className="mb-16 md:mb-20 text-center">
            <H1 className="text-4xl md:text-6xl mb-6 leading-[1.1] tracking-tight">
              Contribute to <br className="hidden md:block" />
              <span className="text-gold">BinnaDevLab</span>
            </H1>
            <Body className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Support the mission through financial backing or by volunteering
              your skills.
            </Body>
          </div>

          {/* Financial Cards */}
          <div className="mb-12">
            <Mono className="text-gold mb-8 block tracking-widest uppercase text-center text-sm">
              Financial Support
            </Mono>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
              {/* Fiat Card */}
              <div className="relative border border-white/10 bg-carbon/80 backdrop-blur-xl rounded-2xl flex flex-col min-h-[460px] shadow-2xl hover:border-gold/30 transition-all duration-500 overflow-hidden">
                <AnimatePresence mode="wait">
                  {copiedType === "fiat" ? (
                    <motion.div
                      key="fiat-thank-you"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white z-20"
                    >
                      <div className="absolute top-6 flex items-center justify-center w-full left-0">
                        <span className="bg-green-100 text-green-700 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <CheckCircle className="w-3.5 h-3.5" /> Copied
                        </span>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Heart className="w-16 h-16 text-purple-500 mb-6 fill-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]" />
                      </motion.div>
                      <H3 className="text-3xl text-obsidian mb-4">
                        Thank You.
                      </H3>
                      <p className="text-obsidian/70 leading-relaxed max-w-xs mx-auto">
                        Your support directly fuels our mission to train better
                        engineers and build enduring systems.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="fiat-content"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full w-full p-8"
                    >
                      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <Landmark className="w-5 h-5 text-white/70" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-display text-white">
                          Local Fiat (NGN)
                        </h2>
                      </div>

                      <div className="flex flex-col gap-6 flex-grow mb-10">
                        <div>
                          <Meta className="text-white/40 mb-1.5 block">
                            Bank
                          </Meta>
                          <p className="text-lg text-white font-medium">Opay</p>
                        </div>
                        <div>
                          <Meta className="text-white/40 mb-1.5 block">
                            Account Name
                          </Meta>
                          <p className="text-lg text-white font-medium">
                            Obinna Franklin Duru
                          </p>
                        </div>
                        <div>
                          <Meta className="text-white/40 mb-2 block">
                            Account Number
                          </Meta>
                          <Mono className="text-xl md:text-2xl text-gold font-bold bg-gold/5 inline-block px-4 py-2 rounded-lg border border-gold/10">
                            8064248389
                          </Mono>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopy("8064248389", "fiat")}
                        className="w-full py-4 rounded-xl font-mono text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold/30 hover:text-gold"
                      >
                        <Copy className="w-4 h-4" /> COPY ACCOUNT
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Crypto Card */}
              <div className="relative border border-white/10 bg-carbon/80 backdrop-blur-xl rounded-2xl flex flex-col min-h-[460px] shadow-2xl hover:border-gold/30 transition-all duration-500 overflow-hidden">
                <AnimatePresence mode="wait">
                  {copiedType === "crypto" ? (
                    <motion.div
                      key="crypto-thank-you"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white z-20"
                    >
                      <div className="absolute top-6 flex items-center justify-center w-full left-0">
                        <span className="bg-green-100 text-green-700 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <CheckCircle className="w-3.5 h-3.5" /> Copied
                        </span>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Heart className="w-16 h-16 text-purple-500 mb-6 fill-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]" />
                      </motion.div>
                      <H3 className="text-3xl text-obsidian mb-4">
                        Thank You.
                      </H3>
                      <p className="text-obsidian/70 leading-relaxed max-w-xs mx-auto">
                        Your support directly fuels our mission to train better
                        engineers and build enduring systems.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="crypto-content"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full w-full p-8"
                    >
                      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <Wallet className="w-5 h-5 text-white/70" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-display text-white">
                          Web3 / Crypto
                        </h2>
                      </div>

                      <div className="flex flex-col gap-6 flex-grow mb-10">
                        <div>
                          <Meta className="text-white/40 mb-2 block">
                            Supported Networks (USDC / USDT)
                          </Meta>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {["Base", "Monad", "Polygon", "Ethereum"].map(
                              (net) => (
                                <span
                                  key={net}
                                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70"
                                >
                                  {net}
                                </span>
                              ),
                            )}
                          </div>
                        </div>

                        <div className="mt-1 p-4 bg-gold/5 border border-gold/20 rounded-xl flex gap-3">
                          <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <p className="text-xs text-gold/90 leading-relaxed">
                            Please send stablecoins like USDC or USDT via the
                            supported EVM-compatible networks above.
                          </p>
                        </div>

                        <div className="mt-1">
                          <Meta className="text-white/40 mb-2 block">
                            Address
                          </Meta>
                          <Mono className="text-[10px] md:text-xs lg:text-sm text-gold break-all bg-black/50 p-4 rounded-xl border border-white/5 font-semibold">
                            0x904A484AaBFb6606C7956af5F83FaaE29d5b397A
                          </Mono>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          handleCopy(
                            "0x904A484AaBFb6606C7956af5F83FaaE29d5b397A",
                            "crypto",
                          )
                        }
                        className="w-full py-4 rounded-xl font-mono text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold/30 hover:text-gold"
                      >
                        <Copy className="w-4 h-4" /> COPY ADDRESS
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Skill-Based Contributions (White Theme) */}
      <section className="bg-white py-20 lg:py-24 relative overflow-hidden flex-grow border-t border-black/5">
        {/* Animated SVG Grid Background for White Theme */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ y: [0, -80] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-[200%] opacity-40"
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="donate-white-grid"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 80 0 L 0 0 0 80"
                    fill="none"
                    stroke="rgba(168,85,247,0.25)"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#donate-white-grid)" />
            </svg>
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />
        </div>

        <Container className="relative z-10 max-w-5xl">
          <div className="mb-12 text-center">
            <H2 className="text-3xl md:text-4xl text-obsidian tracking-tight">
              Volunteer Your Skills
            </H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <Link
                  href="https://wa.me/2348064248389"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  className="group p-8 border border-black/5 bg-white/80 backdrop-blur-xl hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)] transition-all duration-300 rounded-2xl flex flex-col items-start gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-purple-600/10 flex items-center justify-center group-hover:bg-purple-600/20 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <H3 className="text-xl md:text-2xl text-obsidian mb-2">
                      {skill.title}
                    </H3>
                    <p className="text-obsidian/70 leading-relaxed text-sm md:text-base">
                      {skill.description}
                    </p>
                  </div>
                  {/* Reach out is now always fully visible, with a small translation effect on hover */}
                  <div className="mt-4 flex items-center gap-2 text-purple-600 font-mono text-xs uppercase tracking-widest font-bold">
                    Reach Out{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
