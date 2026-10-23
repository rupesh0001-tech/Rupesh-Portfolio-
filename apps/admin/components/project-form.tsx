"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import type { ProjectDTO } from "@repo/content";

import { Button, Field, Input, Textarea } from "./ui";

export function ProjectForm({ initial }: { initial?: ProjectDTO }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [techText, setTechText] = useState((initial?.tech ?? []).join(", "));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      slug: String(form.get("slug")),
      name: String(form.get("name")),
      tagline: String(form.get("tagline")),
      description: String(form.get("description")),
      image: String(form.get("image")),
      tech: techText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      status: String(form.get("status")),
      link: String(form.get("link")),
      githubLink: String(form.get("githubLink")),
      isFreelance: form.get("isFreelance") === "on",
      sortOrder: Number(form.get("sortOrder") || 0),
      published: form.get("published") === "on",
    };

    const res = await fetch(
      initial ? `/api/projects/${initial.id}` : "/api/projects",
      {
        method: initial ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    setLoading(false);

    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setError(data.error || "Save failed");
      return;
    }

    router.push("/projects");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name">
          <Input name="name" defaultValue={initial?.name} required />
        </Field>
        <Field label="Slug">
          <Input name="slug" defaultValue={initial?.slug} required />
        </Field>
      </div>

      <Field label="Tagline">
        <Input name="tagline" defaultValue={initial?.tagline} required />
      </Field>

      <Field label="Description">
        <Textarea
          name="description"
          rows={5}
          defaultValue={initial?.description}
          required
        />
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Image path / URL">
          <Input
            name="image"
            defaultValue={initial?.image}
            placeholder="/project.png or /uploads/..."
            required
          />
        </Field>
        <Field label="Status">
          <Input
            name="status"
            defaultValue={initial?.status ?? "All Systems Operational"}
          />
        </Field>
      </div>

      <Field label="Tech stack (comma separated)">
        <Input
          value={techText}
          onChange={(e) => setTechText(e.target.value)}
          placeholder="Next.js, TypeScript, Prisma"
        />
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Live link">
          <Input name="link" defaultValue={initial?.link ?? "#"} />
        </Field>
        <Field label="GitHub link">
          <Input name="githubLink" defaultValue={initial?.githubLink ?? "#"} />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Sort order">
          <Input
            name="sortOrder"
            type="number"
            defaultValue={initial?.sortOrder ?? 0}
          />
        </Field>
        <label className="flex items-end gap-2 pb-2 text-sm">
          <input
            type="checkbox"
            name="isFreelance"
            defaultChecked={initial?.isFreelance}
          />
          Freelance
        </label>
        <label className="flex items-end gap-2 pb-2 text-sm">
          <input
            type="checkbox"
            name="published"
            defaultChecked={initial?.published ?? true}
          />
          Published
        </label>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving…" : initial ? "Update project" : "Create project"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.push("/projects")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
