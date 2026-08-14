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
    id: "rotation-match",
    name: "RotationMatch",
    tagline: "Interactive Puzzle Alignment Tool",
    description:
      "Interactive rotation matching tool and visual engine for aligning digital puzzle assets with high-precision physics, fluid interactive controls, and seamless onboarding.",
    image: "/rotation-match.png",
    tech: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    status: "All Systems Operational",
    link: "https://rotationmatchnetwork.com/",
    githubLink: "#",
  },
  {
    id: "hger",
    name: "Hger",
    tagline: "Creative Portfolio & Showcase Platform",
    description:
      "High-end design portfolio and showcase platform optimized for creative professionals, featuring stunning visual aesthetics, smooth page transitions, and double engagement.",
    image: "/hger.png",
    tech: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    status: "All Systems Operational",
    link: "https://hgeroadshow.com/",
    githubLink: "#",
  },
  {
    id: "boomzo",
    name: "Boomzo",
    tagline: "Local Home & Lifestyle Services Platform",
    description:
      "Connecting users with professional home, salon, and real estate services in Aligarh, featuring interactive booking workflows, responsive layouts, and seamless UX.",
    image: "/boomzo.png",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    status: "All Systems Operational",
    link: "https://www.boomzo.in/aligarh",
    githubLink: "#",
  },
  {
    id: "topgun-automotive",
    name: "TopGunz Auto",
    tagline: "Modern Automotive Business & Shop OS",
    description:
      "Modern automotive shop OS to run your entire auto business, customer appointments, parts tracking, and service management from one comprehensive platform.",
    image: "/topgunauto.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
    status: "All Systems Operational",
    link: "https://topgunzauto.com/",
    githubLink: "#",
  },
  {
    id: "topgun-softwares",
    name: "TopGun Softwares",
    tagline: "Software Solutions Company",
    description:
      "Corporate website for a software development company, featuring interactive modern design, showcase portfolio, and high-performance branding.",
    image: "/topgunsoftware.png",
    tech: ["React", "Next.js", "Tailwind CSS", "GSAP"],
    status: "All Systems Operational",
    link: "https://topgunsoftwares.com/",
    githubLink: "#",
  },
  {
    id: "resume-builder",
    name: "Resume Builder",
    tagline: "Professional Resume Creator",
    description:
      "Comprehensive online platform for creating professional, ATS-friendly resumes with customizable templates, export options, and real-time preview.",
    image: "/resume_builder.png",
    tech: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    status: "All Systems Operational",
    link: "https://resume-builder-delta-black-55.vercel.app/",
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
