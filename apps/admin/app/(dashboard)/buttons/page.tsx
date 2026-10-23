"use client";

import { FormEvent, useEffect, useState } from "react";

import type { ButtonLinkDTO } from "@repo/content";

import { DeleteButton } from "@/components/delete-button";
import {
  Button,
  Card,
  EmptyState,
  Field,
  Input,
  PageHeader,
} from "@/components/ui";

export default function ButtonsPage() {
  const [items, setItems] = useState<ButtonLinkDTO[]>([]);

  async function load() {
    const res = await fetch("/api/buttons");
    setItems(await res.json());
  }

  useEffect(() => {
    void load();
  }, []);

  async function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    await fetch("/api/buttons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        label: form.get("label"),
        href: form.get("href"),
        variant: form.get("variant") || "primary",
        icon: form.get("icon") || "",
        location: form.get("location") || "hero",
        sortOrder: Number(form.get("sortOrder") || items.length),
      }),
    });
    formEl.reset();
    await load();
  }

  async function onUpdate(id: string, patch: Partial<ButtonLinkDTO>) {
    await fetch(`/api/buttons/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    await load();
  }

  return (
    <div>
      <PageHeader
        title="Buttons / CTAs"
        description="Change Hire Me, Get in touch, and other button links."
      />

      <Card className="mb-6">
        <form onSubmit={onCreate} className="grid gap-3 md:grid-cols-3">
          <Field label="Label">
            <Input name="label" required />
          </Field>
          <Field label="Href">
            <Input name="href" required />
          </Field>
          <Field label="Location">
            <Input name="location" defaultValue="hero" />
          </Field>
          <Field label="Variant">
            <Input name="variant" defaultValue="primary" />
          </Field>
          <Field label="Icon">
            <Input name="icon" placeholder="Send" />
          </Field>
          <Field label="Sort">
            <Input name="sortOrder" type="number" defaultValue={items.length} />
          </Field>
          <Button type="submit" className="w-fit">
            Add button
          </Button>
        </form>
      </Card>

      {items.length === 0 ? (
        <EmptyState message="No buttons yet." />
      ) : (
        <div className="space-y-3">
          {items.map((b) => (
            <Card key={b.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">
                  {b.label}{" "}
                  <span className="text-xs font-normal text-zinc-500">
                    ({b.location} · {b.variant})
                  </span>
                </p>
                <DeleteButton endpoint={`/api/buttons/${b.id}`} />
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <Input
                  defaultValue={b.label}
                  onBlur={(e) => {
                    if (e.target.value !== b.label) {
                      void onUpdate(b.id, { label: e.target.value });
                    }
                  }}
                />
                <Input
                  defaultValue={b.href}
                  onBlur={(e) => {
                    if (e.target.value !== b.href) {
                      void onUpdate(b.id, { href: e.target.value });
                    }
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
