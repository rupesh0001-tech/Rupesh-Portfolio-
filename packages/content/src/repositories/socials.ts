import type { SocialLinkInput, SocialLinkUpdateInput } from "../schemas/social";
import { createId, readCollection, writeCollection } from "../store/file-store";

export type SocialLinkDTO = {
  id: string;
  platform: string;
  url: string;
  iconKey: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export const socialRepository = {
  list(): SocialLinkDTO[] {
    return readCollection<SocialLinkDTO>("socials").sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
  },

  getById(id: string): SocialLinkDTO | null {
    return this.list().find((s) => s.id === id) ?? null;
  },

  create(input: SocialLinkInput): SocialLinkDTO {
    const now = new Date().toISOString();
    const link: SocialLinkDTO = {
      id: createId(),
      platform: input.platform,
      url: input.url,
      iconKey: input.iconKey ?? "",
      sortOrder: input.sortOrder ?? 0,
      createdAt: now,
      updatedAt: now,
    };
    writeCollection("socials", [...this.list(), link]);
    return link;
  },

  update(id: string, input: SocialLinkUpdateInput): SocialLinkDTO {
    const all = this.list();
    const idx = all.findIndex((s) => s.id === id);
    if (idx === -1) throw new Error(`Social link not found: ${id}`);
    const updated: SocialLinkDTO = {
      ...all[idx]!,
      ...input,
      updatedAt: new Date().toISOString(),
    };
    all[idx] = updated;
    writeCollection("socials", all);
    return updated;
  },

  remove(id: string): void {
    writeCollection(
      "socials",
      this.list().filter((s) => s.id !== id)
    );
  },
};
