import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "SDE Full-Stack Intern",
    company: "CoolCliQ",
    location: "Remote",
    period: "Jan. 2026 – July 2026",
    highlights: [
      {
        category: "Frontend",
        text: "Built core UI in React.js and Next.js, increasing user engagement by 35% and cutting navigation time by 25% for 10,000+ daily user interactions.",
      },
      {
        category: "Backend",
        text: "Designed business logic and REST APIs with Node.js, Express.js, and Prisma; added Redis caching and JWT-based role-based access control (RBAC), reducing API response times to 0.5–1.5s and database load by 60%.",
      },
      {
        category: "DevOps & Quality",
        text: "Secured 20+ endpoints with authentication/authorization, deployed production apps on AWS through CI/CD pipelines, and wrote unit and integration tests to reduce regressions.",
      },
      {
        category: "Collaboration",
        text: "Took part in code reviews and pair programming within an Agile team, and worked across TypeScript, Bun, and PostgreSQL on performance optimization initiatives.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="work" className="mt-15 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className={`mb-1 text-sm text-neutral-500 dark:text-neutral-500`}>
            Career Path
          </p>
          <h2 className={`text-3xl font-bold`}>Experience & Impact</h2>
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col rounded-2xl border bg-neutral-50/80 p-6 backdrop-blur-xs transition-all duration-300 hover:border-neutral-300 hover:shadow-sm sm:p-8 dark:bg-neutral-900/50 dark:hover:border-neutral-700`}
          >
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row">
              <div>
                <h3 className={`mb-1 text-xl font-bold`}>{exp.role}</h3>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} />
                  <p className={`text-sm font-medium`}>{exp.company}</p>
                  <span className="text-xs text-neutral-400">•</span>
                  <span className="text-xs text-neutral-500">
                    {exp.location}
                  </span>
                </div>
              </div>
              <span
                className={`flex items-center gap-1.5 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-neutral-700 transition-colors dark:border-neutral-700 dark:text-neutral-300`}
              >
                <Calendar size={12} />
                {exp.period}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className={`group/item flex items-start gap-3 text-sm`}
                >
                  <ChevronRight
                    size={16}
                    className="mt-0.5 shrink-0 text-neutral-400 transition-transform group-hover/item:translate-x-0.5"
                  />
                  <span className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {highlight.category}:
                    </strong>{" "}
                    {highlight.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="mt-10" />
    </section>
  );
};

export default Experience;
