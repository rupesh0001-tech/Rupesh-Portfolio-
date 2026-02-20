import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "COOLCLIQ",
    period: "2026 - Present",
    highlights: [
      "Built and deployed multiple full-stack web applications on AWS and cloud platforms",
      "Implemented JWT-based authentication with access & refresh tokens and role-based flows",
      "Integrated payments, email services, caching, and secure API workflows in production",
      "Designed scalable backend architectures with Redis caching and async job handling",
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
            className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-8`}
          >
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row">
              <div>
                <h3 className={`mb-1 text-xl font-bold`}>{exp.role}</h3>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} />
                  <p className={`text-sm font-medium`}>{exp.company}</p>
                </div>
              </div>
              <span
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors group-hover:border-orange-500/30 group-hover:text-orange-500`}
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
                    className="mt-0.5 shrink-0 transition-transform group-hover/item:translate-x-0.5"
                  />
                  <span className="leading-relaxed">{highlight}</span>
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
