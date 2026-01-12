import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.met14.nl",
      },
      {
        protocol: "https",
        hostname: "improvedcf.com",
      },
      {
        protocol: "https",
        hostname: "custom-images.strikinglycdn.com",
      },
      {
        protocol: "https",
        hostname: "www.thewhitelist.nl",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    qualities: [75, 100],
  },
};

export default nextConfig;
