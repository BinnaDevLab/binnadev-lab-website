import { Metadata } from "next";
import { DonatePageContent } from "@/components/donate/DonatePageContent";

export const metadata: Metadata = {
  title: "Support the Lab | BinnaDevLab",
  description:
    "Support BinnaDevLab. Your contributions fund open-source Web3 research, secure smart contract architecture, and the engineering community.",
  openGraph: {
    title: "Support the Lab | BinnaDevLab",
    description:
      "Support BinnaDevLab. Your contributions fund open-source Web3 research, secure smart contract architecture, and the engineering community.",
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "Support BinnaDevLab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support the Lab | BinnaDevLab",
    description:
      "Support BinnaDevLab. Your contributions fund open-source Web3 research and secure smart contract architecture.",
    images: ["/icons/og-image.png"],
  },
  alternates: {
    canonical: "/donate",
  },
};

export default function DonatePage() {
  return <DonatePageContent />;
}
