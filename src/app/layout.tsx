import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://binnadevlab.vercel.app"),
  title: {
    template: "%s | BinnaDev Lab",
    default:
      "BinnaDev Lab | Smart Contract Engineering, Security & Protocol Architecture",
  },
  description:
    "BinnaDev Lab is an elite software engineering laboratory specializing in smart contract development, Web3 security, protocol architecture, and rigorous technical cohorts. We build robust financial infrastructure and teach developers how to reason about complex decentralized systems.",
  keywords: [
    "smart contract development",
    "Web3 security",
    "protocol architecture",
    "solidity auditing",
    "EVM mechanics",
    "formal verification",
    "decentralized applications",
    "blockchain engineering",
    "DeFi security",
    "BinnaDev Lab",
  ],
  authors: [{ name: "Obinna Franklin Duru" }],
  creator: "Obinna Franklin Duru",
  publisher: "BinnaDev Lab",
  openGraph: {
    title: "BinnaDev Lab | Smart Contract Engineering & Security",
    description:
      "BinnaDev Lab is an elite software engineering laboratory specializing in smart contract development, Web3 security, and protocol architecture. We build robust financial infrastructure.",
    url: "https://binnadevlab.vercel.app",
    siteName: "BinnaDev Lab",
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "BinnaDev Lab - Engineering From First Principles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BinnaDev Lab | Smart Contract Engineering & Security",
    description:
      "An elite software engineering laboratory specializing in smart contract development, Web3 security, and protocol architecture.",
    creator: "@BinnaDevLab",
    images: ["/icons/og-image.png"],
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
              image: "https://binnadevlab.vercel.app/icons/og-image.png",
              description:
                "BinnaDev Lab is a software engineering laboratory specializing in smart contract development, Web3 security, protocol architecture, and technical cohorts.",
              founder: {
                "@type": "Person",
                name: "Obinna Franklin Duru",
              },
              knowsAbout: [
                "Smart Contract Development",
                "Web3 Security",
                "Solidity",
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
