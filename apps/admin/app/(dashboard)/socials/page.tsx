"use client";

import { FormEvent, useEffect, useState } from "react";

import type { SocialLinkDTO } from "@repo/content";

import { DeleteButton } from "@/components/delete-button";
import {
  Button,
  Card,
  EmptyState,
  Field,
  Input,
  PageHeader,
} from "@/components/ui";

export default function SocialsPage() {
  const [items, setItems] = useState<SocialLinkDTO[]>([]);

  async function load() {
    const res = await fetch("/api/socials");
    setItems(await res.json());
  }

  useEffect(() => {
    void load();
  }, []);

  async function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    await fetch("/api/socials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        platform: form.get("platform"),
        url: form.get("url"),
        iconKey: form.get("iconKey") || form.get("platform"),
        sortOrder: Number(form.get("sortOrder") || items.length),
      }),
    });
    formEl.reset();
    await load();
  }

  async function onUpdate(id: string, url: string) {
    await fetch(`/api/socials/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    await load();
  }

  return (
    <div>
      <PageHeader
        title="Social links"
        description="X, LinkedIn, Instagram, GitHub, etc."
      />

      <Card className="mb-6">
        <form onSubmit={onCreate} className="grid gap-3 md:grid-cols-4">
          <Field label="Platform">
            <Input name="platform" required placeholder="linkedin" />
          </Field>
          <Field label="URL">
            <Input name="url" required type="url" />
          </Field>
          <Field label="Icon key">
            <Input name="iconKey" placeholder="linkedin" />
          </Field>
          <Field label="Sort">
            <Input name="sortOrder" type="number" defaultValue={items.length} />
          </Field>
          <Button type="submit" className="w-fit">
            Add link
          </Button>
        </form>
      </Card>

      {items.length === 0 ? (
        <EmptyState message="No social links yet." />
      ) : (
        <div className="space-y-2">
          {items.map((s) => (
            <Card
              key={s.id}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <p className="w-28 shrink-0 font-medium text-white capitalize">
                {s.platform}
              </p>
              <Input
                className="flex-1"
                defaultValue={s.url}
                onBlur={(e) => {
                  if (e.target.value !== s.url)
                    void onUpdate(s.id, e.target.value);
                }}
              />
              <DeleteButton endpoint={`/api/socials/${s.id}`} />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
