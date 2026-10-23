import type { ButtonLinkInput, ButtonLinkUpdateInput } from "../schemas/button";
import { createId, readCollection, writeCollection } from "../store/file-store";

export type ButtonLinkDTO = {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost" | string;
  icon: string;
  location: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export const buttonRepository = {
  list(location?: string): ButtonLinkDTO[] {
    const all = readCollection<ButtonLinkDTO>("buttons").sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
    return location ? all.filter((b) => b.location === location) : all;
  },

  getById(id: string): ButtonLinkDTO | null {
    return this.list().find((b) => b.id === id) ?? null;
  },

  create(input: ButtonLinkInput): ButtonLinkDTO {
    const now = new Date().toISOString();
    const button: ButtonLinkDTO = {
      id: createId(),
      label: input.label,
      href: input.href,
      variant: input.variant ?? "primary",
      icon: input.icon ?? "",
      location: input.location ?? "hero",
      sortOrder: input.sortOrder ?? 0,
      createdAt: now,
      updatedAt: now,
    };
    writeCollection("buttons", [...this.list(), button]);
    return button;
  },

  update(id: string, input: ButtonLinkUpdateInput): ButtonLinkDTO {
    const all = this.list();
    const idx = all.findIndex((b) => b.id === id);
    if (idx === -1) throw new Error(`Button not found: ${id}`);
    const updated: ButtonLinkDTO = {
      ...all[idx]!,
      ...input,
      updatedAt: new Date().toISOString(),
    };
    all[idx] = updated;
    writeCollection("buttons", all);
    return updated;
  },

  remove(id: string): void {
    writeCollection(
      "buttons",
      this.list().filter((b) => b.id !== id)
    );
  },
};
