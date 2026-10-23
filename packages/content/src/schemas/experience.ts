import { z } from "zod";

export const highlightSchema = z.object({
  id: z.string().optional(),
  category: z.string().min(1),
  text: z.string().min(1),
  sortOrder: z.number().int().default(0),
});

export const experienceSchema = z.object({
  role: z.string().min(1),
  company: z.string().min(1),
  location: z.string().min(1),
  period: z.string().min(1),
  logo: z.string().optional(),
  sortOrder: z.number().int().default(0),
  highlights: z.array(highlightSchema).default([]),
});

export const experienceUpdateSchema = experienceSchema.partial();

export type ExperienceInput = z.infer<typeof experienceSchema>;
export type ExperienceUpdateInput = z.infer<typeof experienceUpdateSchema>;
