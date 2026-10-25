import type { NextConfig } from "next";

import { resolve } from "node:path";

const projectRoot = resolve(__dirname, "../..");

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  outputFileTracingIncludes: {
    "/**": ["../../storage/**/*"],
  },
  transpilePackages: ["@repo/content"],
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.scdn.co" },
      { protocol: "https", hostname: "www.vectorlogo.zone" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "skillicons.dev" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "/api/uploads/:path*",
      },
    ];
  },
};

export default nextConfig;
