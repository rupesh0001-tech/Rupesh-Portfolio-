"use client";

import Image from "next/image";

import { useTheme } from "@/hooks/ThemeProvider";

export const techStack = [
  // Languages
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
    name: "C++",
    icon: "https://skillicons.dev/icons?i=cpp",
    desc: "Language / DSA",
  },

  // Frontend
  {
    name: "React.js",
    icon: "https://skillicons.dev/icons?i=react",
    desc: "Frontend UI",
  },
  {
    name: "Next.js",
    icon: "https://skillicons.dev/icons?i=next",
    desc: "Full-Stack Framework",
  },
  {
    name: "Redux",
    icon: "https://skillicons.dev/icons?i=redux",
    desc: "State Management",
  },
  {
    name: "Tailwind CSS",
    icon: "https://skillicons.dev/icons?i=tailwind",
    desc: "Styling & Design",
  },

  // Backend & Runtime
  {
    name: "Node.js",
    icon: "https://skillicons.dev/icons?i=nodejs",
    desc: "Backend Runtime",
  },
  {
    name: "Express.js",
    icon: "https://skillicons.dev/icons?i=express",
    desc: "REST APIs & Backend",
  },
  {
    name: "Bun.js",
    icon: "https://skillicons.dev/icons?i=bun",
    desc: "Fast JS Runtime",
  },

  // Databases & Caching
  {
    name: "PostgreSQL",
    icon: "https://skillicons.dev/icons?i=postgres",
    desc: "Relational Database",
  },
  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
    desc: "NoSQL Database",
  },
  {
    name: "MySQL",
    icon: "https://skillicons.dev/icons?i=mysql",
    desc: "Relational Database",
  },
  {
    name: "Redis",
    icon: "https://skillicons.dev/icons?i=redis",
    desc: "In-Memory & Caching",
  },
  {
    name: "Prisma",
    icon: "https://skillicons.dev/icons?i=prisma",
    desc: "Type-Safe ORM",
  },
  {
    name: "Firebase",
    icon: "https://skillicons.dev/icons?i=firebase",
    desc: "Cloud DB & Auth",
  },

  // AI & GenAI
  {
    name: "Google Gemini",
    icon: "https://cdn.simpleicons.org/googlegemini/white",
    desc: "Multimodal AI",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    icon: "https://skillicons.dev/icons?i=aws",
    desc: "EC2, S3, SES Cloud",
  },
  {
    name: "Docker",
    icon: "https://skillicons.dev/icons?i=docker",
    desc: "Containerization",
  },
  {
    name: "Vercel",
    icon: "https://skillicons.dev/icons?i=vercel",
    desc: "Deployment & CI/CD",
  },
  {
    name: "Netlify",
    icon: "https://skillicons.dev/icons?i=netlify",
    desc: "Deployment",
  },

  // Tools & Practices
  {
    name: "Git",
    icon: "https://skillicons.dev/icons?i=git",
    desc: "Version Control",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/white",
    desc: "CI/CD & Hosting",
  },
  {
    name: "Postman",
    icon: "https://skillicons.dev/icons?i=postman",
    desc: "API Testing",
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/white",
    desc: "UI/UX Design",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.simpleicons.org/framer/white",
    desc: "Interactive UI",
  },
  {
    name: "GSAP",
    icon: "https://cdn.simpleicons.org/greensock/white",
    desc: "Web Animations",
  },
  {
    name: "Linux",
    icon: "https://skillicons.dev/icons?i=linux",
    desc: "Operating System",
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
