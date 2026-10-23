"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

import type { SiteSettingDTO } from "@repo/content";

import {
  Button,
  Card,
  Field,
  Input,
  PageHeader,
  Textarea,
} from "@/components/ui";

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettingDTO[]>([]);
  const [values, setValues] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  async function load() {
    const res = await fetch("/api/settings");
    const data = (await res.json()) as SiteSettingDTO[];
    setSettings(data);
    setValues(Object.fromEntries(data.map((s) => [s.key, s.value])));
  }

  useEffect(() => {
    void load();
  }, []);

  const groups = useMemo(() => {
    const map = new Map<string, SiteSettingDTO[]>();
    for (const s of settings) {
      const list = map.get(s.group) ?? [];
      list.push(s);
      map.set(s.group, list);
    }
    return [...map.entries()];
  }, [settings]);

  async function onSave(e: FormEvent) {
    e.preventDefault();
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: Object.entries(values).map(([key, value]) => ({ key, value })),
      }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    await load();
  }

  return (
    <div>
      <PageHeader
        title="Site text"
        description="Hero copy, about text, SEO, footer — anything that is plain text on the site."
      />

      <form onSubmit={onSave} className="space-y-6">
        {groups.map(([group, items]) => (
          <Card key={group}>
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-zinc-400 uppercase">
              {group}
            </h2>
            <div className="space-y-4">
              {items.map((s) => {
                const multiline =
                  s.value.length > 80 ||
                  s.key.includes("bio") ||
                  s.key.includes("description");
                return (
                  <Field key={s.key} label={s.label || s.key}>
                    {multiline ? (
                      <Textarea
                        rows={4}
                        value={values[s.key] ?? ""}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, [s.key]: e.target.value }))
                        }
                      />
                    ) : (
                      <Input
                        value={values[s.key] ?? ""}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, [s.key]: e.target.value }))
                        }
                      />
                    )}
                  </Field>
                );
              })}
            </div>
          </Card>
        ))}

        <div className="flex items-center gap-3">
          <Button type="submit">Save all settings</Button>
          {saved ? (
            <span className="text-sm text-emerald-400">Saved ✓</span>
          ) : null}
        </div>
      </form>
    </div>
  );
}
