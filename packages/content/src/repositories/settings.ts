import type {
  SiteSettingInput,
  SiteSettingUpdateInput,
} from "../schemas/setting";
import { createId, readCollection, writeCollection } from "../store/file-store";
import { parseJsonArray } from "../utils/json";

export type SiteSettingDTO = {
  id: string;
  key: string;
  value: string;
  label: string;
  group: string;
  updatedAt: string;
};

export const settingsRepository = {
  list(group?: string): SiteSettingDTO[] {
    const all = readCollection<SiteSettingDTO>("settings").sort((a, b) =>
      a.group === b.group
        ? a.key.localeCompare(b.key)
        : a.group.localeCompare(b.group)
    );
    return group ? all.filter((s) => s.group === group) : all;
  },

  getMap(): Record<string, string> {
    return Object.fromEntries(this.list().map((r) => [r.key, r.value]));
  },

  get(key: string): string | null {
    return this.list().find((s) => s.key === key)?.value ?? null;
  },

  getJsonArray(key: string): string[] {
    const value = this.get(key);
    return value ? parseJsonArray(value) : [];
  },

  upsert(input: SiteSettingInput): SiteSettingDTO {
    const all = this.list();
    const idx = all.findIndex((s) => s.key === input.key);
    const now = new Date().toISOString();

    if (idx === -1) {
      const created: SiteSettingDTO = {
        id: createId(),
        key: input.key,
        value: input.value,
        label: input.label ?? "",
        group: input.group ?? "general",
        updatedAt: now,
      };
      writeCollection("settings", [...all, created]);
      return created;
    }

    const updated: SiteSettingDTO = {
      ...all[idx]!,
      value: input.value,
      label: input.label ?? all[idx]!.label,
      group: input.group ?? all[idx]!.group,
      updatedAt: now,
    };
    all[idx] = updated;
    writeCollection("settings", all);
    return updated;
  },

  update(key: string, input: SiteSettingUpdateInput): SiteSettingDTO {
    const all = this.list();
    const idx = all.findIndex((s) => s.key === key);
    if (idx === -1) throw new Error(`Setting not found: ${key}`);
    const updated: SiteSettingDTO = {
      ...all[idx]!,
      ...input,
      updatedAt: new Date().toISOString(),
    };
    all[idx] = updated;
    writeCollection("settings", all);
    return updated;
  },

  bulkUpsert(items: SiteSettingInput[]): void {
    for (const item of items) {
      this.upsert(item);
    }
  },
};
