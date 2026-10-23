import { z } from "zod";

export const socialLinkSchema = z.object({
  platform: z.string().min(1),
  url: z.string().url(),
  iconKey: z.string().default(""),
  sortOrder: z.number().int().default(0),
});

export const socialLinkUpdateSchema = socialLinkSchema.partial();

export type SocialLinkInput = z.infer<typeof socialLinkSchema>;
export type SocialLinkUpdateInput = z.infer<typeof socialLinkUpdateSchema>;
