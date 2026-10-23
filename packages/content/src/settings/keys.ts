/**
 * Canonical site-setting keys.
 * Add new editable copy here — admin + web both consume these.
 */
export const SETTING_KEYS = {
  HERO_NAME: "hero.name",
  HERO_ROLES: "hero.roles",
  HERO_BIO: "hero.bio",
  HERO_AVATAR: "hero.avatar",
  GITHUB_USERNAME: "github.username",

  ABOUT_HEADING: "about.heading",
  ABOUT_NAME: "about.name",
  ABOUT_BIO: "about.bio",
  ABOUT_IMAGE: "about.image",

  EXPERIENCE_EYEBROW: "experience.eyebrow",
  EXPERIENCE_HEADING: "experience.heading",

  PROJECTS_EYEBROW: "projects.eyebrow",
  PROJECTS_HEADING: "projects.heading",
  PROJECTS_GITHUB_URL: "projects.githubUrl",

  FOOTER_TAGLINE: "footer.tagline",
  FOOTER_SUBTEXT: "footer.subtext",
  FOOTER_EMAIL: "footer.email",

  SEO_TITLE: "seo.title",
  SEO_DESCRIPTION: "seo.description",
  SEO_KEYWORDS: "seo.keywords",

  SITE_URL: "site.url",
} as const;

export type SettingKey = (typeof SETTING_KEYS)[keyof typeof SETTING_KEYS];

export const SETTING_META: Record<
  SettingKey,
  { label: string; group: string; multiline?: boolean; json?: boolean }
> = {
  [SETTING_KEYS.HERO_NAME]: { label: "Display name", group: "hero" },
  [SETTING_KEYS.HERO_ROLES]: {
    label: "Rotating roles (JSON array)",
    group: "hero",
    json: true,
  },
  [SETTING_KEYS.HERO_BIO]: {
    label: "Hero bio",
    group: "hero",
    multiline: true,
  },
  [SETTING_KEYS.HERO_AVATAR]: { label: "Avatar image path", group: "hero" },
  [SETTING_KEYS.GITHUB_USERNAME]: { label: "GitHub username", group: "hero" },

  [SETTING_KEYS.ABOUT_HEADING]: { label: "About heading", group: "about" },
  [SETTING_KEYS.ABOUT_NAME]: { label: "About name", group: "about" },
  [SETTING_KEYS.ABOUT_BIO]: {
    label: "About bio",
    group: "about",
    multiline: true,
  },
  [SETTING_KEYS.ABOUT_IMAGE]: { label: "About image path", group: "about" },

  [SETTING_KEYS.EXPERIENCE_EYEBROW]: {
    label: "Experience eyebrow",
    group: "experience",
  },
  [SETTING_KEYS.EXPERIENCE_HEADING]: {
    label: "Experience heading",
    group: "experience",
  },

  [SETTING_KEYS.PROJECTS_EYEBROW]: {
    label: "Projects eyebrow",
    group: "projects",
  },
  [SETTING_KEYS.PROJECTS_HEADING]: {
    label: "Projects heading",
    group: "projects",
  },
  [SETTING_KEYS.PROJECTS_GITHUB_URL]: {
    label: "View all GitHub URL",
    group: "projects",
  },

  [SETTING_KEYS.FOOTER_TAGLINE]: { label: "Footer tagline", group: "footer" },
  [SETTING_KEYS.FOOTER_SUBTEXT]: { label: "Footer subtext", group: "footer" },
  [SETTING_KEYS.FOOTER_EMAIL]: { label: "Footer email", group: "footer" },

  [SETTING_KEYS.SEO_TITLE]: { label: "SEO title", group: "seo" },
  [SETTING_KEYS.SEO_DESCRIPTION]: {
    label: "SEO description",
    group: "seo",
    multiline: true,
  },
  [SETTING_KEYS.SEO_KEYWORDS]: {
    label: "SEO keywords (JSON array)",
    group: "seo",
    json: true,
  },

  [SETTING_KEYS.SITE_URL]: { label: "Canonical site URL", group: "general" },
};
