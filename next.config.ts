import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.amazon.com",
      },
      {
        protocol: "https",
        hostname: "www.goodreads.com",
      },
      {
        protocol: "https",
        hostname: "bookshop.org",
      },
    ],
  },
};

export default nextConfig;
