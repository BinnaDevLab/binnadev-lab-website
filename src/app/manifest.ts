import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BinnaDev Lab",
    short_name: "BinnaDev Lab",
    description:
      "An elite engineering laboratory where developers are trained to architect secure smart contracts.",
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
