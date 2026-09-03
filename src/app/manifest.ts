import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BinnaDevLab",
    short_name: "BinnaDevLab",
    description:
      "BinnaDevLab is an engineering laboratory where thoughtful thinking meets rigorous execution. We specialize in smart contract development, Web3 security, and protocol architecture.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#4C0082",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
