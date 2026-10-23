import Link from "next/link";

import {
  buttonRepository,
  experienceRepository,
  mediaRepository,
  projectRepository,
  settingsRepository,
  skillRepository,
  socialRepository,
} from "@repo/content";

import { Card, PageHeader } from "@/components/ui";

export default function DashboardPage() {
  const stats = [
    {
      label: "Projects",
      count: projectRepository.list().length,
      href: "/projects",
    },
    { label: "Skills", count: skillRepository.list().length, href: "/skills" },
    {
      label: "Experience",
      count: experienceRepository.list().length,
      href: "/experience",
    },
    {
      label: "Buttons",
      count: buttonRepository.list().length,
      href: "/buttons",
    },
    {
      label: "Socials",
      count: socialRepository.list().length,
      href: "/socials",
    },
    { label: "Media", count: mediaRepository.list().length, href: "/media" },
    {
      label: "Settings",
      count: settingsRepository.list().length,
      href: "/settings",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Manual JSON content store — edit anything that appears on the portfolio."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <Link key={s.href} href={s.href}>
            <Card className="group transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.04]">
              <p className="text-sm text-zinc-500 transition-colors group-hover:text-zinc-400">
                {s.label}
              </p>
              <p className="mt-2 text-3xl font-semibold text-white">
                {s.count}
              </p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="mt-6">
        <p className="text-sm font-medium text-zinc-300">
          How content is stored
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          All data lives as plain JSON under{" "}
          <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-zinc-400">
            storage/content/
          </code>
          . Uploaded images go to{" "}
          <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-zinc-400">
            storage/uploads/
          </code>
          . No database — edit via this admin or open the JSON files directly.
        </p>
      </Card>
    </div>
  );
}
