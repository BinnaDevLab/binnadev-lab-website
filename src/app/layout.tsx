import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppLoader } from "@/components/layout/AppLoader";
import { InstallPrompt } from "@/components/ui/InstallPrompt";
import { CustomCursor } from "@/components/ui/CustomCursor";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://binnadev.com"),
  title: {
    template: "%s | BinnaDevLab",
    default: "BinnaDevLab | Protocol Architecture & Smart Contract Security",
  },
  description:
    "BinnaDevLab is an engineering laboratory where reasoning precedes coding. We develop people who can think, learn, build, research, and collaborate to architect reliable Web3 protocols and secure smart contracts.",
  keywords: [
    "Smart Contract Architecture Lab",
    "Web3 Engineering Cohort",
    "Web3 Developer Cohort",
    "Web3 Developer Community",
    "Reasoning Precedes Coding",
    "Smart Contract Security",
    "Protocol Architecture",
    "Web3 Security",
    "Solidity Auditing",
    "EVM Mechanics",
    "Smart Contract Development",
    "Smart contract architecture",
    "DeFi Architecture",
    "Blockchain Engineering Cohort",
    "Formal Verification",
    "Transition into Web3",
    "Web3 networking",
    "Hire Web3 developers",
    "commission smart contract audit",
    "Advanced Solidity training",
    "BinnaDevLab",
  ],
  authors: [{ name: "Obinna Franklin Duru" }],
  creator: "Obinna Franklin Duru",
  publisher: "BinnaDevLab",
  openGraph: {
    title: "BinnaDevLab | Protocol Architecture & Smart Contract Security",
    description:
      "BinnaDevLab is an engineering laboratory where reasoning precedes coding. We develop people who can think, learn, build, and architect reliable Web3 systems.",
    url: "https://binnadev.com",
    siteName: "BinnaDevLab",
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "BinnaDevLab - Reasoning Precedes Coding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BinnaDevLab | Protocol Architecture & Smart Contract Security",
    description:
      "BinnaDevLab is an engineering laboratory where reasoning precedes coding. We develop people who can think, learn, build, and architect reliable Web3 systems.",
    images: ["/icons/og-image.png"],
    creator: "@binnadev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-foreground pb-[72px] md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "BinnaDev Lab",
              url: "https://binnadevlab.vercel.app",
              logo: "https://binnadevlab.vercel.app/icons/apple-touch-icon.png",
              image: "https://binnadev.com/icons/og-image.png",
              description:
                "BinnaDev Lab is a software engineering laboratory specializing in smart contract development, Web3 security, protocol architecture, and technical cohorts.",
              founder: {
                "@type": "Person",
                name: "Obinna Franklin Duru",
              },
              knowsAbout: [
                "Smart Contract Architecture Lab",
                "Smart Contract Development",
                "Smart Contract Security",
                "Smart Contract Auditing",
                "Smart Contract Engineering",
                "Web3 Engineering Cohort",
                "Web3 Engineering Live Events",
                "Web3 Engineering Events",
                "Web3 Engineering Workshops",
                "Web3 Engineering Seminars",
                "Web3 Security",
                "Solidity",
                "Rust",
                "Yul",
                "Vyper",
                "Formal Verification",
                "Ethereum Virtual Machine (EVM)",
                "Protocol Architecture",
                "Decentralized Finance (DeFi)",
                "Blockchain Engineering",
              ],
            }),
          }}
        />
        <AppLoader />
        <InstallPrompt />
        <Header />
        <SmoothScroll>
          <main className="flex-1 flex flex-col mt-20">{children}</main>
          <Footer />
        </SmoothScroll>
        <CustomCursor />
      </body>
    </html>
  );
}
