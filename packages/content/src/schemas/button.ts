import { z } from "zod";

export const buttonLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z.enum(["primary", "secondary", "ghost"]).default("primary"),
  icon: z.string().default(""),
  location: z.string().min(1).default("hero"),
  sortOrder: z.number().int().default(0),
});

export const buttonLinkUpdateSchema = buttonLinkSchema.partial();

export type ButtonLinkInput = z.infer<typeof buttonLinkSchema>;
export type ButtonLinkUpdateInput = z.infer<typeof buttonLinkUpdateSchema>;
