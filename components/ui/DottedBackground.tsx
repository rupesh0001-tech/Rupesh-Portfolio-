"use client";

import React from "react";

export default function DottedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {/* SVG Dotted Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60 dark:opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="dotted-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              className="fill-neutral-400 dark:fill-neutral-500"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted-grid)" />
      </svg>

      {/* Top Ambient Glow Spotlight */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-400/10 via-amber-400/5 to-transparent blur-[120px] dark:from-sky-500/10 dark:via-purple-500/5 dark:to-transparent" />

      {/* Bottom Subtle Ambient Glow */}
      <div className="absolute right-1/4 -bottom-40 h-[400px] w-[600px] rounded-full bg-gradient-to-br from-emerald-400/5 via-blue-400/5 to-transparent blur-[120px] dark:from-emerald-500/5 dark:via-indigo-500/5 dark:to-transparent" />

      {/* Radial Vignette Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]" />
    </div>
  );
}
