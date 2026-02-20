import Image from "next/image";

const skills = [
  { src: "https://skillicons.dev/icons?i=react", alt: "React" },
  { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
  { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
  { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript" },
  { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
  { src: "https://skillicons.dev/icons?i=bun", alt: "Bun.js" },
  { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
  { src: "https://skillicons.dev/icons?i=postgres", alt: "PostgreSQL" },
  { src: "https://skillicons.dev/icons?i=prisma", alt: "Prisma" },
  { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },
  { src: "https://skillicons.dev/icons?i=cpp", alt: "C++" },
  { src: "https://skillicons.dev/icons?i=java", alt: "Java" },
  { src: "https://skillicons.dev/icons?i=python", alt: "Python" },
  { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
];

const AboutMe = () => {
  return (
    <section className="mx-auto mt-15 max-w-3xl px-0 pt-2 pb-10">
      <h2 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
        About
      </h2>
      <h2 className="mb-2 text-3xl font-bold">Me</h2>
      <div className="flex flex-col items-center gap-8 rounded-2xl p-6 md:flex-row md:items-start">
        <div className="shrink-0">
          <div className="flex h-55 w-55 items-center justify-center overflow-hidden rounded-2xl bg-sky-200 dark:bg-amber-300">
            <Image
              src="Logo.png"
              alt="Rupesh Jagtap Avatar"
              width={220}
              height={220}
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Rupesh Jagtap</h2>
          <p className="mb-4 text-base">
            I&apos;m a Computer Engineering student passionate about building
            full-stack web applications and exploring AI-powered solutions.
            Based in Pune, Maharashtra, I specialize in creating scalable,
            user-friendly web applications with strong foundations in DSA.
          </p>
          <div>
            <span className="text-sm font-semibold">Skills</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Image
                  key={skill.alt}
                  src={skill.src}
                  alt={skill.alt}
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
};

export default AboutMe;
