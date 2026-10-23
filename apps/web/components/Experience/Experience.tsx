"use client";

import { useState } from "react";

import Image from "next/image";

import { Calendar, ChevronDown, ChevronRight } from "lucide-react";

import type { ExperienceDTO } from "@repo/content";

import { cn } from "../../lib/utils";

function getSetting(map: Record<string, string>, key: string, fallback = "") {
  return map[key] ?? fallback;
}

const getCompanyLogo = (company: string, logo?: string) => {
  if (logo) return logo;
  const normalized = company.toLowerCase();
  if (normalized.includes("ecomeal")) return "/ecomeal.png";
  if (normalized.includes("coolcliq")) return "/coolcliq.png";
  return null;
};

export default function Experience({
  experiences,
  settings,
}: {
  experiences: ExperienceDTO[];
  settings: Record<string, string>;
}) {
  const eyebrow = getSetting(settings, "experience.eyebrow", "Career Path");
  const heading = getSetting(
    settings,
    "experience.heading",
    "Experience & Impact"
  );

  // First experience is open by default for immediate discoverability
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      if (experiences.length > 0 && experiences[0]?.id) {
        initial[experiences[0].id] = true;
      }
      return initial;
    }
  );

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="work" className={cn("mt-15", "space-y-8")}>
      <div className={cn("flex", "items-center", "justify-between")}>
        <div>
          <p className="mb-1 text-sm text-neutral-500 dark:text-neutral-500">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {experiences.map((exp) => {
          const logo = getCompanyLogo(exp.company, exp.logo);
          const isDarkLogo = exp.company.toLowerCase().includes("ecomeal");
          const isExpanded = !!expandedIds[exp.id];

          return (
            <div
              key={exp.id}
              className={cn(
                "group relative flex flex-col rounded-2xl border transition-all duration-300",
                "bg-neutral-50/80 backdrop-blur-xs dark:bg-neutral-900/50",
                isExpanded
                  ? "border-neutral-300 shadow-sm dark:border-neutral-700/80"
                  : "border-neutral-200/80 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
              )}
            >
              {/* Clickable Header for Dropdown Accordion */}
              <button
                type="button"
                onClick={() => toggleExpand(exp.id)}
                aria-expanded={isExpanded}
                className="flex w-full cursor-pointer flex-col items-start justify-between gap-4 rounded-2xl p-6 text-left transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:flex-row sm:items-center sm:p-8"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  {logo && (
                    <div
                      className={cn(
                        "relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border p-1.5 shadow-xs transition-transform duration-200 group-hover:scale-105 sm:h-14 sm:w-14",
                        isDarkLogo
                          ? "border-neutral-800 bg-black dark:border-neutral-700/80"
                          : "border-neutral-200 bg-white dark:border-neutral-700/80"
                      )}
                    >
                      <Image
                        src={logo}
                        alt={`${exp.company} logo`}
                        width={56}
                        height={56}
                        unoptimized
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="mb-0.5 text-xl font-bold text-neutral-900 dark:text-neutral-100">
                      {exp.company}
                    </h3>
                    <div className={cn("flex", "items-center", "gap-2")}>
                      <p className="text-base font-medium text-neutral-800 sm:text-lg dark:text-neutral-200">
                        {exp.role}
                      </p>
                      <span className={cn("text-xs", "text-neutral-400")}>
                        •
                      </span>
                      <span className={cn("text-xs", "text-neutral-500")}>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3 self-end sm:self-center">
                  <span className="flex items-center gap-1.5 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-neutral-700 transition-colors dark:border-neutral-700 dark:text-neutral-300">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300",
                      isExpanded
                        ? "rotate-180 border-blue-500/30 bg-blue-500/10 text-blue-500 dark:text-blue-400"
                        : "border-neutral-200 bg-neutral-100 text-neutral-500 group-hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-400 dark:group-hover:border-neutral-700"
                    )}
                  >
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pt-0 pb-6 sm:px-8 sm:pb-8">
                    <div className="border-t border-neutral-200/60 pt-5 dark:border-neutral-800/70">
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight.id}
                            className="group/item flex items-start gap-3 text-sm"
                          >
                            <ChevronRight
                              size={16}
                              className={cn(
                                "mt-0.5",
                                "shrink-0",
                                "text-neutral-400",
                                "transition-transform",
                                "group-hover/item:translate-x-0.5"
                              )}
                            />
                            <span
                              className={cn(
                                "leading-relaxed",
                                "text-neutral-700",
                                "dark:text-neutral-300"
                              )}
                            >
                              <strong
                                className={cn(
                                  "font-semibold",
                                  "text-neutral-900",
                                  "dark:text-neutral-100"
                                )}
                              >
                                {highlight.category}:
                              </strong>{" "}
                              {highlight.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <hr className="mt-10" />
    </section>
  );
}
