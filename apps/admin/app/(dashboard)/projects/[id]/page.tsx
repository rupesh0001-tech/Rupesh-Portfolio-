import { notFound } from "next/navigation";

import { projectRepository } from "@repo/content";

import { ProjectForm } from "@/components/project-form";
import { Card, PageHeader } from "@/components/ui";

type Props = { params: Promise<{ id: string }> };

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projectRepository.getById(id);
  if (!project) notFound();

  return (
    <div>
      <PageHeader
        title={`Edit ${project.name}`}
        description="Update project details, image, links, and tech stack."
      />
      <Card>
        <ProjectForm initial={project} />
      </Card>
    </div>
  );
}
