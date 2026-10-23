import {
  type ButtonLinkDTO,
  buttonRepository,
  type ExperienceDTO,
  experienceRepository,
  parseJsonArray,
  type ProjectDTO,
  projectRepository,
  SETTING_KEYS,
  settingsRepository,
  type SkillDTO,
  skillRepository,
  type SocialLinkDTO,
  socialRepository,
} from "@repo/content";

export type SiteContent = {
  settings: Record<string, string>;
  projects: ProjectDTO[];
  techStack: SkillDTO[];
  aboutSkills: SkillDTO[];
  experiences: ExperienceDTO[];
  socials: SocialLinkDTO[];
  heroButtons: ButtonLinkDTO[];
  roles: string[];
};

export function getSiteContent(): SiteContent {
  const settings = settingsRepository.getMap();
  return {
    settings,
    projects: projectRepository.list({ publishedOnly: true }),
    techStack: skillRepository.list("tech-stack"),
    aboutSkills: skillRepository.list("about"),
    experiences: experienceRepository.list(),
    socials: socialRepository.list(),
    heroButtons: buttonRepository.list("hero"),
    roles: parseJsonArray(settings[SETTING_KEYS.HERO_ROLES] ?? "[]"),
  };
}

export function setting(
  map: Record<string, string>,
  key: string,
  fallback = ""
): string {
  return map[key] ?? fallback;
}
