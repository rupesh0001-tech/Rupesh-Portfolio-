import Link from "next/link";

import { projectRepository } from "@repo/content";

import { DeleteButton } from "@/components/delete-button";
import { Button, Card, EmptyState, PageHeader } from "@/components/ui";

export default function ProjectsPage() {
  const projects = projectRepository.list();

  return (
    <div>
      <PageHeader
        title="Projects"
        description="Add, edit, or remove portfolio projects."
        actions={
          <Link href="/projects/new">
            <Button>Add project</Button>
          </Link>
        }
      />

      {projects.length === 0 ? (
        <EmptyState message="No projects yet. Create your first one." />
      ) : (
        <div className="space-y-3">
          {projects.map((p) => (
            <Card
              key={p.id}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.05]">
                {p.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium text-white">{p.name}</p>
                  {!p.published ? (
                    <span className="rounded border border-yellow-500/20 bg-yellow-500/15 px-2 py-0.5 text-xs text-yellow-400">
                      draft
                    </span>
                  ) : null}
                  {p.isFreelance ? (
                    <span className="rounded border border-purple-500/20 bg-purple-500/15 px-2 py-0.5 text-xs text-purple-400">
                      freelance
                    </span>
                  ) : null}
                </div>
                <p className="truncate text-sm text-zinc-500">{p.tagline}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/projects/${p.id}`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
                <DeleteButton endpoint={`/api/projects/${p.id}`} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
