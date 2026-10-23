import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { type ProjectDTO, SETTING_KEYS } from "@repo/content";

import { setting } from "@/lib/content";

import ProjectsGrid from "./ProjectsGrid";

export type ProjectType = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  link: string;
  githubLink: string;
  isFreelance?: boolean;
};

function toProjectType(p: ProjectDTO): ProjectType {
  return {
    id: p.slug || p.id,
    name: p.name,
    tagline: p.tagline,
    description: p.description,
    image: p.image,
    tech: p.tech,
    status: p.status,
    link: p.link,
    githubLink: p.githubLink,
    isFreelance: p.isFreelance,
  };
}

export default function Projects({
  projects,
  settings,
}: {
  projects: ProjectDTO[];
  settings: Record<string, string>;
}) {
  const eyebrow = setting(settings, SETTING_KEYS.PROJECTS_EYEBROW, "Featured");
  const heading = setting(
    settings,
    SETTING_KEYS.PROJECTS_HEADING,
    "Projects & Products"
  );
  const githubUrl = setting(
    settings,
    SETTING_KEYS.PROJECTS_GITHUB_URL,
    "https://github.com/rupesh0001-tech"
  );

  return (
    <section id="projects" className="mt-15">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm text-neutral-500">{eyebrow}</p>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {heading}
          </h2>
        </div>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400"
        >
          View All on GitHub
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <ProjectsGrid projects={projects.map(toProjectType)} initialCount={4} />

      <hr className="mt-15" />
    </section>
  );
}
