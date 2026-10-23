import { projectRepository, projectUpdateSchema } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(() => {
    const project = projectRepository.getById(id);
    if (!project) throw new Error("Not found");
    return project;
  });
}

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(async () => {
    const raw = await req.json();
    const data = parseBody(projectUpdateSchema, raw);
    return projectRepository.update(id, data);
  });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(() => {
    projectRepository.remove(id);
    return { ok: true };
  });
}
