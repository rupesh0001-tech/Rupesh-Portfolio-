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
    id: "build-for-job",
    name: "Build For Job",
    tagline: "AI-Powered SaaS Career Platform",
    description:
      "Full-stack SaaS job platform offering AI-powered ATS resume scoring, resume building, portfolio creation, cover letter generation, and customizable PDF exports for 100+ users. Features subscription-tier middleware, Zod validation, Groq AI parsing at 95%+ accuracy, and CI/CD on Vercel.",
    image: "/buildforjob.png",
    tech: [
      "Next.js 16",
      "Bun",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Zod",
    ],
    status: "All Systems Operational",
    link: "https://buildforjob.rupeshhh.in/",
    githubLink: "https://github.com/rupesh0001-tech/builtforjob-be",
  },
  {
    id: "cally",
    name: "Cally",
    tagline: "Automated Booking & Scheduling Engine",
    description:
      "Automated booking engine supporting 1-on-1 and group scheduling with real-time timezone conversion and 10+ configurable availability rules. Integrated Razorpay 3-step paid bookings with HMAC verification, 4 parallel Redis/BullMQ workers for Google Calendar sync & Resend emails, and analytics in under 2s.",
    image: "/cally.png",
    tech: [
      "React.js",
      "Express.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Clerk",
      "Razorpay",
    ],
    status: "All Systems Operational",
    link: "https://cally.rupeshhh.in/",
    githubLink: "https://github.com/rupesh0001-tech/cally",
  },
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
            Projects & Products
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
