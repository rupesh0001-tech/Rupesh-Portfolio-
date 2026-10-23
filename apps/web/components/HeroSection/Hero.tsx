import {
  type ButtonLinkDTO,
  SETTING_KEYS,
  type SkillDTO,
  type SocialLinkDTO,
} from "@repo/content";

import GitHubCalendarClient from "@/components/GitHub/GitHubCalendarClient";
import { setting } from "@/lib/content";

import ProfileAvatar from "./avatar-standard-4";
import GetInTouch from "./GetInTouch";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import TechStack from "./TechStack";

export default function Hero({
  settings,
  roles,
  socials,
  buttons,
  techStack,
}: {
  settings: Record<string, string>;
  roles: string[];
  socials: SocialLinkDTO[];
  buttons: ButtonLinkDTO[];
  techStack: SkillDTO[];
}) {
  const name = setting(settings, SETTING_KEYS.HERO_NAME, "Rupesh");
  const bio = setting(settings, SETTING_KEYS.HERO_BIO);
  const githubUsername = setting(
    settings,
    SETTING_KEYS.GITHUB_USERNAME,
    "rupesh0001-tech"
  );

  return (
    <section className="w-full">
      <div className="relative mt-20">
        <GitHubCalendarClient username={githubUsername} align="left" />
        <div className="relative z-10 -mt-10 w-fit sm:-mt-12">
          <ProfileAvatar />
        </div>
      </div>

      <Intro name={name} roles={roles} bio={bio} />

      <GetInTouch buttons={buttons} />

      <SocialLinks socials={socials} />

      <hr className="mt-15" />

      <TechStack skills={techStack} />
    </section>
  );
}
