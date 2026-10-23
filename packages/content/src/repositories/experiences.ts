import type {
  ExperienceInput,
  ExperienceUpdateInput,
} from "../schemas/experience";
import { createId, readCollection, writeCollection } from "../store/file-store";

export type HighlightDTO = {
  id: string;
  category: string;
  text: string;
  sortOrder: number;
};

export type ExperienceDTO = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  logo?: string;
  sortOrder: number;
  highlights: HighlightDTO[];
  createdAt: string;
  updatedAt: string;
};

export const experienceRepository = {
  list(): ExperienceDTO[] {
    return readCollection<ExperienceDTO>("experiences").sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
  },

  getById(id: string): ExperienceDTO | null {
    return this.list().find((e) => e.id === id) ?? null;
  },

  create(input: ExperienceInput): ExperienceDTO {
    const now = new Date().toISOString();
    const experience: ExperienceDTO = {
      id: createId(),
      role: input.role,
      company: input.company,
      location: input.location,
      period: input.period,
      logo: input.logo,
      sortOrder: input.sortOrder ?? 0,
      highlights: (input.highlights ?? []).map((h, i) => ({
        id: h.id ?? createId(),
        category: h.category,
        text: h.text,
        sortOrder: h.sortOrder ?? i,
      })),
      createdAt: now,
      updatedAt: now,
    };
    writeCollection("experiences", [...this.list(), experience]);
    return experience;
  },

  update(id: string, input: ExperienceUpdateInput): ExperienceDTO {
    const all = this.list();
    const idx = all.findIndex((e) => e.id === id);
    if (idx === -1) throw new Error(`Experience not found: ${id}`);

    const current = all[idx]!;
    const updated: ExperienceDTO = {
      ...current,
      ...input,
      highlights: input.highlights
        ? input.highlights.map((h, i) => ({
            id: h.id ?? createId(),
            category: h.category,
            text: h.text,
            sortOrder: h.sortOrder ?? i,
          }))
        : current.highlights,
      updatedAt: new Date().toISOString(),
    };
    all[idx] = updated;
    writeCollection("experiences", all);
    return updated;
  },

  remove(id: string): void {
    writeCollection(
      "experiences",
      this.list().filter((e) => e.id !== id)
    );
  },
};
