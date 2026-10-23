import { z } from "zod";

import { settingsRepository, siteSettingSchema } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

const bulkSchema = z.object({
  items: z.array(
    z.object({
      key: z.string(),
      value: z.string(),
    })
  ),
});

export async function GET(req: Request) {
  const group = new URL(req.url).searchParams.get("group") ?? undefined;
  return withAuth(() => settingsRepository.list(group ?? undefined));
}

export async function PUT(req: Request) {
  return withAuth(async () => {
    const raw = await req.json();

    if (Array.isArray(raw) || raw?.items) {
      const { items } = parseBody(bulkSchema, raw.items ? raw : { items: raw });
      for (const item of items) {
        const existing = settingsRepository
          .list()
          .find((s) => s.key === item.key);
        settingsRepository.upsert({
          key: item.key,
          value: item.value,
          label: existing?.label ?? item.key,
          group: existing?.group ?? "general",
        });
      }
      return settingsRepository.list();
    }

    const data = parseBody(siteSettingSchema, raw);
    return settingsRepository.upsert(data);
  });
}
