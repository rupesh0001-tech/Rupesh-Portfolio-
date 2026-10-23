"use client";

import { FormEvent, useEffect, useState } from "react";

import type { MediaAssetDTO } from "@repo/content";

import { DeleteButton } from "@/components/delete-button";
import {
  Button,
  Card,
  EmptyState,
  Field,
  Input,
  PageHeader,
} from "@/components/ui";

export default function MediaPage() {
  const [items, setItems] = useState<MediaAssetDTO[]>([]);
  const [uploading, setUploading] = useState(false);

  async function load() {
    const res = await fetch("/api/media");
    setItems(await res.json());
  }

  useEffect(() => {
    void load();
  }, []);

  async function onUpload(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUploading(true);
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    await fetch("/api/media", { method: "POST", body: form });
    setUploading(false);
    formEl.reset();
    await load();
  }

  return (
    <div>
      <PageHeader
        title="Media"
        description="Upload images used by projects and site sections. Files land in storage/uploads."
      />

      <Card className="mb-6">
        <form
          onSubmit={onUpload}
          className="flex flex-col gap-3 sm:flex-row sm:items-end"
        >
          <Field label="Image file">
            <Input name="file" type="file" accept="image/*" required />
          </Field>
          <Field label="Alt text">
            <Input name="alt" placeholder="Optional" />
          </Field>
          <Button type="submit" disabled={uploading}>
            {uploading ? "Uploading…" : "Upload"}
          </Button>
        </form>
      </Card>

      {items.length === 0 ? (
        <EmptyState message="No uploads yet." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => (
            <Card key={m.id} className="space-y-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.url}
                alt={m.alt || m.filename}
                className="h-40 w-full rounded-lg border border-white/[0.06] bg-white/[0.05] object-cover"
              />
              <p className="truncate text-sm font-medium text-white">
                {m.filename}
              </p>
              <p className="truncate text-xs text-zinc-500">{m.url}</p>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => navigator.clipboard.writeText(m.url)}
                >
                  Copy URL
                </Button>
                <DeleteButton endpoint={`/api/media/${m.id}`} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
