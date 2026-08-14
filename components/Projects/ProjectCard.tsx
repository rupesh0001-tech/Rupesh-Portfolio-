import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { ProjectType } from "./Projects";
import ProjectsButton from "./ProjectsButton";

// Tech icon mappings
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, string> = {
    React: "https://skillicons.dev/icons?i=react",
    "React.js": "https://skillicons.dev/icons?i=react",
    "Next.js": "https://skillicons.dev/icons?i=next",
    "Next.js 16": "https://skillicons.dev/icons?i=next",
    "Node.js": "https://skillicons.dev/icons?i=nodejs",
    node: "https://skillicons.dev/icons?i=nodejs",
    Express: "https://skillicons.dev/icons?i=express",
    "Express.js": "https://skillicons.dev/icons?i=express",
    Bun: "https://skillicons.dev/icons?i=bun",
    "Bun.js": "https://skillicons.dev/icons?i=bun",
    TypeScript: "https://skillicons.dev/icons?i=ts",
    javascript: "https://skillicons.dev/icons?i=js",
    JavaScript: "https://skillicons.dev/icons?i=js",
    PostgreSQL: "https://skillicons.dev/icons?i=postgres",
    Postgres: "https://skillicons.dev/icons?i=postgres",
    MongoDB: "https://skillicons.dev/icons?i=mongodb",
    Prisma: "https://skillicons.dev/icons?i=prisma",
    Redis: "https://skillicons.dev/icons?i=redis",
    BullMQ: "https://skillicons.dev/icons?i=redis",
    "Tailwind CSS": "https://skillicons.dev/icons?i=tailwind",
    Tailwind: "https://skillicons.dev/icons?i=tailwind",
    Zod: "https://cdn.simpleicons.org/zod/white",
    Clerk: "https://cdn.simpleicons.org/clerk/white",
    Razorpay: "https://cdn.simpleicons.org/razorpay/white",
    "Socket.io": "https://skillicons.dev/icons?i=socketio",
    JWT: "https://skillicons.dev/icons?i=nodejs",
    "Discord.js": "https://skillicons.dev/icons?i=discord",
    "Cloudflare R2": "https://skillicons.dev/icons?i=cloudflare",
    "Framer Motion": "https://cdn.simpleicons.org/framer/white",
    GSAP: "https://cdn.simpleicons.org/greensock/white",
    Gemini: "https://skillicons.dev/icons?i=gcp",
  };
  return iconMap[tech] || null;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { name, description, image, tech, status, link, githubLink } = project;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-neutral-50 transition-all duration-500 ease-out hover:border-neutral-300 hover:bg-neutral-100 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-900">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="h-full w-full transform object-cover transition-all duration-500 group-hover:scale-105"
          style={{ transformOrigin: "center center" }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title & Icons */}
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-xl font-bold text-neutral-900 transition-colors dark:text-white">
            {name}
          </h3>
          <ProjectsButton githubLink={githubLink} link={link} />
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        {/* Technologies Label */}
        <p className="mb-2 text-xs font-semibold tracking-wider text-neutral-500 uppercase">
          Technologies
        </p>

        {/* Tech Stack */}
        <div className="flex flex-1 flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="inline-flex h-fit items-center gap-1.5 rounded-md border bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {getTechIcon(t) && (
                <Image
                  src={getTechIcon(t)!}
                  alt={t}
                  width={12}
                  height={12}
                  className="h-3 w-3"
                  unoptimized
                />
              )}
              {t}
            </span>
          ))}
        </div>

        {/* Status Badge & View Details */}
        <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${
                status === "All Systems Operational"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            ></div>
            <span
              className={`text-xs font-medium ${
                status === "All Systems Operational"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-500"
              }`}
            >
              {status}
            </span>
          </div>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            View Details
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
