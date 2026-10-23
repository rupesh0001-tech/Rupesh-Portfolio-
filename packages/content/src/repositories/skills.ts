import type { SkillInput, SkillUpdateInput } from "../schemas/skill";
import { createId, readCollection, writeCollection } from "../store/file-store";

export type SkillDTO = {
  id: string;
  name: string;
  icon: string;
  desc: string;
  group: "tech-stack" | "about" | string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export const skillRepository = {
  list(group?: string): SkillDTO[] {
    const all = readCollection<SkillDTO>("skills").sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
    return group ? all.filter((s) => s.group === group) : all;
  },

  getById(id: string): SkillDTO | null {
    return this.list().find((s) => s.id === id) ?? null;
  },

  create(input: SkillInput): SkillDTO {
    const now = new Date().toISOString();
    const skill: SkillDTO = {
      id: createId(),
      name: input.name,
      icon: input.icon,
      desc: input.desc ?? "",
      group: input.group ?? "tech-stack",
      sortOrder: input.sortOrder ?? 0,
      createdAt: now,
      updatedAt: now,
    };
    writeCollection("skills", [...this.list(), skill]);
    return skill;
  },

  update(id: string, input: SkillUpdateInput): SkillDTO {
    const all = this.list();
    const idx = all.findIndex((s) => s.id === id);
    if (idx === -1) throw new Error(`Skill not found: ${id}`);
    const updated: SkillDTO = {
      ...all[idx]!,
      ...input,
      updatedAt: new Date().toISOString(),
    };
    all[idx] = updated;
    writeCollection("skills", all);
    return updated;
  },

  remove(id: string): void {
    writeCollection(
      "skills",
      this.list().filter((s) => s.id !== id)
    );
  },
};
