import type { NextConfig } from "next";

import { join } from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: join(__dirname, "../../"),
  transpilePackages: ["@repo/content"],
  turbopack: {
    root: join(__dirname, "../.."),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "skillicons.dev" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
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
