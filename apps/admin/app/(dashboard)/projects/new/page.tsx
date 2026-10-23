import { ProjectForm } from "@/components/project-form";
import { Card, PageHeader } from "@/components/ui";

export default function NewProjectPage() {
  return (
    <div>
      <PageHeader
        title="New project"
        description="Add a project to the portfolio."
      />
      <Card>
        <ProjectForm />
      </Card>
    </div>
  );
}
