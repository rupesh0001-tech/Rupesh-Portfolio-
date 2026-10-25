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
