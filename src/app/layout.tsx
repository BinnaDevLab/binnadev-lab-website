import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppLoader } from "@/components/layout/AppLoader";
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
  metadataBase: new URL('https://binnadev-lab.vercel.app'),
  title: {
    template: "%s | BinnaDev Lab",
    default: "BinnaDev Lab | Reasoning Precedes Coding",
  },
  description: "An elite engineering laboratory where developers are trained to think, reason, interrogate systems, and architect secure smart contracts.",
  keywords: ["smart contracts", "web3 security", "solidity", "EVM", "blockchain", "engineering", "BinnaDev"],
  authors: [{ name: "Obinna Franklin Duru" }],
  openGraph: {
    title: "BinnaDev Lab | Reasoning Precedes Coding",
    description: "An elite engineering laboratory for web3 security and protocol architecture.",
    url: "https://binnadev-lab.vercel.app",
    siteName: "BinnaDev Lab",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "BinnaDev Lab",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BinnaDev Lab",
    description: "An elite engineering laboratory for web3 security.",
    images: ["/twitter-image.png"],
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
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
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
      <body className="min-h-full flex flex-col bg-obsidian text-foreground">
        <AppLoader />
        <SmoothScroll>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
