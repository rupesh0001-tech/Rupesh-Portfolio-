import { z } from "zod";

export const skillGroupSchema = z.enum(["tech-stack", "about"]);

export const skillSchema = z.object({
  name: z.string().min(1),
  icon: z.string().min(1),
  desc: z.string().default(""),
  group: skillGroupSchema.default("tech-stack"),
  sortOrder: z.number().int().default(0),
});

export const skillUpdateSchema = skillSchema.partial();

export type SkillInput = z.infer<typeof skillSchema>;
export type SkillUpdateInput = z.infer<typeof skillUpdateSchema>;
