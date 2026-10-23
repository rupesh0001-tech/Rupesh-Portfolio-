import type { ProjectInput, ProjectUpdateInput } from "../schemas/project";
import { createId, readCollection, writeCollection } from "../store/file-store";

export type ProjectDTO = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  link: string;
  githubLink: string;
  isFreelance: boolean;
  sortOrder: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

function sortByOrder(items: ProjectDTO[]) {
  return [...items].sort((a, b) => a.sortOrder - b.sortOrder);
}

export const projectRepository = {
  list(opts?: { publishedOnly?: boolean }): ProjectDTO[] {
    const all = sortByOrder(readCollection<ProjectDTO>("projects"));
    return opts?.publishedOnly ? all.filter((p) => p.published) : all;
  },

  getById(id: string): ProjectDTO | null {
    return this.list().find((p) => p.id === id) ?? null;
  },

  getBySlug(slug: string): ProjectDTO | null {
    return this.list().find((p) => p.slug === slug) ?? null;
  },

  create(input: ProjectInput): ProjectDTO {
    const now = new Date().toISOString();
    const project: ProjectDTO = {
      id: createId(),
      slug: input.slug,
      name: input.name,
      tagline: input.tagline,
      description: input.description,
      image: input.image,
      tech: input.tech ?? [],
      status: input.status ?? "All Systems Operational",
      link: input.link ?? "#",
      githubLink: input.githubLink ?? "#",
      isFreelance: input.isFreelance ?? false,
      sortOrder: input.sortOrder ?? 0,
      published: input.published ?? true,
      createdAt: now,
      updatedAt: now,
    };

    const all = this.list();
    writeCollection("projects", [...all, project]);
    return project;
  },

  update(id: string, input: ProjectUpdateInput): ProjectDTO {
    const all = this.list();
    const idx = all.findIndex((p) => p.id === id);
    if (idx === -1) throw new Error(`Project not found: ${id}`);

    const updated: ProjectDTO = {
      ...all[idx]!,
      ...input,
      tech: input.tech ?? all[idx]!.tech,
      updatedAt: new Date().toISOString(),
    };
    all[idx] = updated;
    writeCollection("projects", all);
    return updated;
  },

  remove(id: string): void {
    writeCollection(
      "projects",
      this.list().filter((p) => p.id !== id)
    );
  },
};
