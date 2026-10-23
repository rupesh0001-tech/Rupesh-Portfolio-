"use client";

import React from "react";

export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {/* Simple Clean Grid Lines */}
      <svg
        className="absolute inset-0 h-full w-full stroke-neutral-900/[0.04] dark:stroke-white/[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="simple-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#simple-grid)" />
      </svg>

      {/* Soft Top-to-Bottom Fade so lines blend naturally */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
    </div>
  );
}
