import { z } from "zod";

export const siteSettingSchema = z.object({
  key: z.string().min(1),
  value: z.string(),
  label: z.string().default(""),
  group: z.string().default("general"),
});

export const siteSettingUpdateSchema = z.object({
  value: z.string(),
  label: z.string().optional(),
  group: z.string().optional(),
});

export type SiteSettingInput = z.infer<typeof siteSettingSchema>;
export type SiteSettingUpdateInput = z.infer<typeof siteSettingUpdateSchema>;
