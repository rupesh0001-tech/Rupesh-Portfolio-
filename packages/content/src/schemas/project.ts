import { z } from "zod";

export const projectSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase kebab-case slug"),
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  tech: z.array(z.string()).default([]),
  status: z.string().default("All Systems Operational"),
  link: z.string().default("#"),
  githubLink: z.string().default("#"),
  isFreelance: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
  published: z.boolean().default(true),
});

export const projectUpdateSchema = projectSchema.partial();

export type ProjectInput = z.infer<typeof projectSchema>;
export type ProjectUpdateInput = z.infer<typeof projectUpdateSchema>;
