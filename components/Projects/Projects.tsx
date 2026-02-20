import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

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
};

const projects: ProjectType[] = [
  {
    id: "resume-builder",
    name: "Resume Builder",
    tagline: "Professional Resume Creator",
    description:
      "A comprehensive online platform for creating professional, ATS-friendly resumes with customizable templates and real-time preview.",
    image: "/resume_builder.png",
    tech: ["React", "node", "javascript", "Tailwind CSS"],
    status: "All Systems Operational",
    link: "https://resume-builder-delta-black-55.vercel.app/",
    githubLink: "#",
  },
  {
    id: "boomzo",
    name: "Boomzo",
    tagline: "Digital Solutions Platform",
    description:
      "A modern web application providing innovative digital solutions for businesses, featuring responsive design and seamless user experience.",
    image: "/boomzo.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    status: "All Systems Operational",
    link: "https://www.boomzo.in/",
    githubLink: "#",
  },
  {
    id: "topgun-automotive",
    name: "TopGun Automotive",
    tagline: "Automotive Services Platform",
    description:
      "A complete automotive services website showcasing premium car care services with an elegant, user-friendly interface.",
    image: "/topgun-landing.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "All Systems Operational",
    link: "https://www.topgunzauto.com/",
    githubLink: "#",
  },
  {
    id: "topgun-softwares",
    name: "TopGun Softwares",
    tagline: "Software Solutions Company",
    description:
      "A corporate website for a software development company, featuring modern design and showcasing their portfolio of solutions.",
    image: "/topgunsoftware.png",
    tech: ["React", "Next.js", "Tailwind CSS", "GSAP"],
    status: "All Systems Operational",
    link: "https://topgunsoftwares.com/",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-15">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm text-neutral-500">Featured</p>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Freelance Projects
          </h2>
        </div>
        <Link
          href="https://github.com/rupesh0001-tech"
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

      <ProjectsGrid projects={projects} initialCount={4} />

      <hr className="mt-15" />
    </section>
  );
};

export default Projects;
