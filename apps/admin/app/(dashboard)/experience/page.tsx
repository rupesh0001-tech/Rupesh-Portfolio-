"use client";

import { FormEvent, useEffect, useState } from "react";

import { Calendar, ChevronDown, ChevronRight } from "lucide-react";

import type { ExperienceDTO } from "@repo/content";

import { DeleteButton } from "@/components/delete-button";
import {
  Button,
  Card,
  EmptyState,
  Field,
  Input,
  PageHeader,
  Textarea,
} from "@/components/ui";

export default function ExperiencePage() {
  const [items, setItems] = useState<ExperienceDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  async function load() {
    try {
      const res = await fetch("/api/experiences");
      if (!res.ok) throw new Error("Failed to load experiences");
      const data: ExperienceDTO[] = await res.json();
      setItems(data);
      // Open the first item by default if none are opened yet
      setExpandedIds((prev) => {
        if (Object.keys(prev).length === 0 && data.length > 0 && data[0]?.id) {
          return { [data[0].id]: true };
        }
        return prev;
      });
    } catch (error) {
      console.error("Error loading experiences:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const highlightsRaw = String(form.get("highlights") || "");
    const highlights = highlightsRaw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line, i) => {
        const [category, ...rest] = line.split(":");
        return {
          category: (category || "Highlight").trim(),
          text: rest.join(":").trim() || line,
          sortOrder: i,
        };
      });

    try {
      const res = await fetch("/api/experiences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: form.get("role"),
          company: form.get("company"),
          location: form.get("location"),
          period: form.get("period"),
          logo: form.get("logo") || undefined,
          sortOrder: Number(form.get("sortOrder") || items.length),
          highlights,
        }),
      });
      if (!res.ok) throw new Error("Failed to create experience");
      formElement.reset();
      await load();
    } catch (error) {
      console.error("Error creating experience:", error);
    }
  }

  return (
    <div>
      <PageHeader
        title="Experience"
        description="Work history shown on the portfolio."
      />

      <Card className="mb-6">
        <form onSubmit={onCreate} className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Company">
              <Input name="company" required />
            </Field>
            <Field label="Role">
              <Input name="role" required />
            </Field>
            <Field label="Location">
              <Input name="location" required />
            </Field>
            <Field label="Period">
              <Input
                name="period"
                required
                placeholder="Jan. 2026 – July 2026"
              />
            </Field>
            <Field label="Logo URL">
              <Input name="logo" placeholder="/ecomeal.png or /coolcliq.png" />
            </Field>
          </div>
          <Field label="Highlights (one per line: Category: text)">
            <Textarea
              name="highlights"
              rows={5}
              placeholder={
                "Frontend: Built core UI...\nBackend: Designed APIs..."
              }
            />
          </Field>
          <Button type="submit">Add experience</Button>
        </form>
      </Card>

      {loading ? (
        <p className="text-sm text-zinc-500">Loading experiences...</p>
      ) : items.length === 0 ? (
        <EmptyState message="No experience entries yet." />
      ) : (
        <div className="space-y-4">
          {items.map((exp) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <Card key={exp.id} className="overflow-hidden p-0">
                {/* Accordion / Dropdown Header */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleExpand(exp.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleExpand(exp.id);
                    }
                  }}
                  className="flex cursor-pointer items-center justify-between gap-4 p-5 transition-colors select-none hover:bg-white/[0.02]"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    {exp.logo && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-11 w-11 shrink-0 rounded-xl border border-white/[0.1] bg-black/40 object-contain p-1.5"
                      />
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-semibold text-white">
                          {exp.company}
                        </p>
                        <span className="text-xs text-zinc-500">•</span>
                        <p className="truncate text-sm text-zinc-300">
                          {exp.role}
                        </p>
                      </div>
                      <p className="mt-0.5 text-xs text-zinc-500">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <span className="hidden items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-400 sm:inline-flex">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0"
                    >
                      <DeleteButton endpoint={`/api/experiences/${exp.id}`} />
                    </div>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.04] text-zinc-400 transition-transform duration-200 ${
                        isExpanded
                          ? "rotate-180 border-blue-500/30 bg-blue-500/10 text-blue-400"
                          : "hover:text-white"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/[0.08] bg-black/20 p-5 pt-4">
                      <div className="mb-3 sm:hidden">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-400">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>
                      {exp.highlights && exp.highlights.length > 0 ? (
                        <ul className="space-y-2.5">
                          {exp.highlights.map((h) => (
                            <li
                              key={h.id}
                              className="flex items-start gap-2.5 text-sm leading-relaxed"
                            >
                              <ChevronRight
                                size={14}
                                className="mt-1 shrink-0 text-blue-400"
                              />
                              <span className="text-zinc-300">
                                <strong className="font-semibold text-white">
                                  {h.category}:
                                </strong>{" "}
                                {h.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-zinc-500 italic">
                          No highlights recorded.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
