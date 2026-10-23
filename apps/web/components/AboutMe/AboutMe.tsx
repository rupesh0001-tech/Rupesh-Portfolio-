import Image from "next/image";

import { SETTING_KEYS, type SkillDTO } from "@repo/content";

import { setting } from "@/lib/content";

export default function AboutMe({
  settings,
  skills,
}: {
  settings: Record<string, string>;
  skills: SkillDTO[];
}) {
  const heading = setting(settings, SETTING_KEYS.ABOUT_HEADING, "Me");
  const name = setting(settings, SETTING_KEYS.ABOUT_NAME, "Rupesh Jagtap");
  const bio = setting(settings, SETTING_KEYS.ABOUT_BIO);
  const image = setting(settings, SETTING_KEYS.ABOUT_IMAGE, "/Logo.png");

  return (
    <section className="mx-auto mt-15 max-w-3xl px-0 pt-2 pb-10">
      <h2 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
        About
      </h2>
      <h2 className="mb-2 text-3xl font-bold">{heading}</h2>
      <div className="flex flex-col items-center gap-8 rounded-2xl p-6 md:flex-row md:items-start">
        <div className="shrink-0">
          <div className="flex h-55 w-55 items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-800">
            <Image
              src={image}
              alt={`${name} Avatar`}
              width={220}
              height={220}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">{name}</h2>
          <p className="mb-4 text-base">{bio}</p>
          <div>
            <span className="text-sm font-semibold">Skills</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Image
                  key={skill.id}
                  src={skill.icon}
                  alt={skill.name}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded bg-neutral-200 p-1 dark:bg-neutral-800"
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-15" />
    </section>
  );
}
