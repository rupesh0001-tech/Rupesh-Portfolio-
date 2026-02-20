"use client";

import Image from "next/image";

import { useTheme } from "@/hooks/ThemeProvider";

export const techStack = [
  {
    name: "JavaScript",
    icon: "https://skillicons.dev/icons?i=js",
    desc: "Language",
  },
  {
    name: "TypeScript",
    icon: "https://skillicons.dev/icons?i=ts",
    desc: "Language",
  },
  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=python",
    desc: "Language",
  },
  {
    name: "React",
    icon: "https://skillicons.dev/icons?i=react",
    desc: "UI Library",
  },
  {
    name: "Next.js",
    icon: "https://skillicons.dev/icons?i=next",
    desc: "Framework",
  },
  {
    name: "Tailwind",
    icon: "https://skillicons.dev/icons?i=tailwind",
    desc: "Styling",
  },
  {
    name: "Node.js",
    icon: "https://skillicons.dev/icons?i=nodejs",
    desc: "Runtime",
  },
  {
    name: "Express.js",
    icon: "https://skillicons.dev/icons?i=express",
    desc: "Backend",
  },
  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
    desc: "Database",
  },
  {
    name: "Prisma",
    icon: "https://skillicons.dev/icons?i=prisma",
    desc: "ORM",
  },
  {
    name: "Bun.js",
    icon: "https://skillicons.dev/icons?i=bun",
    desc: "Runtime",
  },

  // {
  //   name: "Redis",
  //   icon: "https://skillicons.dev/icons?i=redis",
  //   desc: "Caching",
  // },
  // {
  //   name: "Docker",
  //   icon: "https://skillicons.dev/icons?i=docker",
  //   desc: "Containerization",
  // },
  // {
  //   name: "Nginx",
  //   icon: "https://skillicons.dev/icons?i=nginx",
  //   desc: "Web Server",
  // },
  {
    name: "Git",
    icon: "https://skillicons.dev/icons?i=git",
    desc: "Version Control",
  },
  {
    name: "C++",
    icon: "https://cdn.simpleicons.org/cplusplus/white",
    desc: "Language",
  },
  {
    name: "figma",
    icon: "https://cdn.simpleicons.org/figma/white",
    desc: "Language",
  },
  // {

  // },
  {
    name: "gitHub",
    icon: "https://cdn.simpleicons.org/github/white",
    desc: "Code Hosting",
  },
  {
    name: "Vercel",
    icon: "https://skillicons.dev/icons?i=vercel",
    desc: "Deployment",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.simpleicons.org/framer/white",
    desc: "Animations",
  },
  {
    name: "Socket.io",
    icon: "https://cdn.simpleicons.org/socketdotio/white",
    desc: "Real-time",
  },
  {
    name: "Linux",
    icon: "https://skillicons.dev/icons?i=linux",
    desc: "Operating System",
  },
  {
    name: "Postman",
    icon: "https://skillicons.dev/icons?i=postman",
    desc: "API Testing",
  },
  {
    name: "GSAP",
    icon: "https://cdn.simpleicons.org/greensock/white",
    desc: "Animations",
  },
  {
    name: "Google Gemini",
    icon: "https://cdn.simpleicons.org/googlegemini/white",
    desc: "AI API",
  },
  {
    name: "PostgreSQL",
    icon: "https://skillicons.dev/icons?i=postgres",
    desc: "Database",
  },
];

const TechStack = () => {
  const { isDark } = useTheme();

  // Get icon URL, swapping color for simpleicons based on theme
  const getIconUrl = (tech: { name: string; icon: string }) => {
    if (tech.icon.includes("simpleicons.org")) {
      return isDark ? tech.icon : tech.icon.replace("/white", "/black");
    }
    return tech.icon;
  };

  return (
    <section className="mt-15 flex w-full flex-col space-y-6">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm text-neutral-500">Expertise</p>
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          Tech Stack & Tools
        </h2>
      </div>
      <div className="flex w-full flex-wrap justify-evenly gap-3">
        {techStack.map((tech) => (
          <div key={tech.name} className="group relative">
            {/* Icon Container */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={getIconUrl(tech)}
                alt={tech.name}
                width={24}
                height={24}
                className="h-6 w-6 rounded-sm"
                unoptimized
              />
            </div>

            {/* Tooltip - shows on hover */}
            <div className="pointer-events-none absolute -top-14 left-1/2 z-20 -translate-x-1/2 rounded-lg border bg-white px-3 py-2 text-center text-xs whitespace-nowrap opacity-0 transition-all duration-200 group-hover:opacity-100 dark:bg-neutral-800">
              <div className="mb-0.5 font-bold">{tech.name}</div>
              <div className="text-[10px] font-medium text-neutral-500">
                {tech.desc}
              </div>
              {/* Tooltip arrow */}
              <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b bg-white dark:bg-neutral-800"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
