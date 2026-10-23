"use client";

import Image from "next/image";

import type { SkillDTO } from "@repo/content";

import { useTheme } from "@/hooks/ThemeProvider";

export default function TechStack({ skills }: { skills: SkillDTO[] }) {
  const { isDark } = useTheme();

  const getIconUrl = (icon: string) => {
    if (icon.includes("simpleicons.org")) {
      return isDark ? icon : icon.replace("/white", "/black");
    }
    return icon;
  };

  return (
    <section className="mt-15 flex w-full flex-col space-y-6">
      <div>
        <p className="mb-1 text-sm text-neutral-500">Expertise</p>
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          Tech Stack & Tools
        </h2>
      </div>
      <div className="flex w-full flex-wrap gap-3">
        {skills.map((tech) => (
          <div key={tech.id} className="group relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100/90 shadow-xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-neutral-600">
              <Image
                src={getIconUrl(tech.icon)}
                alt={tech.name}
                width={24}
                height={24}
                className="h-6 w-6 rounded-sm transition-transform duration-200 group-hover:scale-110"
                unoptimized
              />
            </div>
            <div className="pointer-events-none absolute -top-14 left-1/2 z-20 -translate-x-1/2 rounded-lg border bg-white px-3 py-2 text-center text-xs whitespace-nowrap opacity-0 transition-all duration-200 group-hover:opacity-100 dark:bg-neutral-800">
              <div className="mb-0.5 font-bold">{tech.name}</div>
              <div className="text-[10px] font-medium text-neutral-500">
                {tech.desc}
              </div>
              <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b bg-white dark:bg-neutral-800" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
