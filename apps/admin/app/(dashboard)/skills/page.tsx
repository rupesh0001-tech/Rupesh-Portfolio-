"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

import type { SkillDTO } from "@repo/content";

import { DeleteButton } from "@/components/delete-button";
import {
  Button,
  Card,
  EmptyState,
  Field,
  Input,
  PageHeader,
} from "@/components/ui";

export default function SkillsPage() {
  const [skills, setSkills] = useState<SkillDTO[]>([]);
  const [group, setGroup] = useState<"tech-stack" | "about">("tech-stack");

  const refresh = useCallback(async () => {
    const res = await fetch(`/api/skills?group=${group}`);
    setSkills(await res.json());
  }, [group]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    await fetch("/api/skills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        icon: form.get("icon"),
        desc: form.get("desc") || "",
        group,
        sortOrder: Number(form.get("sortOrder") || skills.length),
      }),
    });
    formEl.reset();
    await refresh();
  }

  return (
    <div>
      <PageHeader
        title="Skills"
        description="Tech stack icons and about-section skills."
      />

      <div className="mb-4 flex gap-2">
        {(["tech-stack", "about"] as const).map((g) => (
          <Button
            key={g}
            variant={group === g ? "primary" : "secondary"}
            onClick={() => setGroup(g)}
          >
            {g}
          </Button>
        ))}
      </div>

      <Card className="mb-6">
        <form onSubmit={onCreate} className="grid gap-3 md:grid-cols-4">
          <Field label="Name">
            <Input name="name" required />
          </Field>
          <Field label="Icon URL">
            <Input
              name="icon"
              required
              placeholder="https://skillicons.dev/icons?i=react"
            />
          </Field>
          <Field label="Description">
            <Input name="desc" />
          </Field>
          <Field label="Sort">
            <Input
              name="sortOrder"
              type="number"
              defaultValue={skills.length}
            />
          </Field>
          <Button type="submit" className="w-fit md:col-span-4">
            Add skill
          </Button>
        </form>
      </Card>

      {skills.length === 0 ? (
        <EmptyState message="No skills in this group." />
      ) : (
        <div className="space-y-2">
          {skills.map((s) => (
            <Card
              key={s.id}
              className="flex items-center justify-between gap-3 py-3"
            >
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt="" className="h-8 w-8 rounded" />
                <div>
                  <p className="font-medium text-white">{s.name}</p>
                  <p className="text-xs text-zinc-500">{s.desc || s.icon}</p>
                </div>
              </div>
              <DeleteButton endpoint={`/api/skills/${s.id}`} />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
