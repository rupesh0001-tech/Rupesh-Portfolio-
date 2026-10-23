import { experienceRepository, experienceUpdateSchema } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(async () => {
    const data = parseBody(experienceUpdateSchema, await req.json());
    return experienceRepository.update(id, data);
  });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(() => {
    experienceRepository.remove(id);
    return { ok: true };
  });
}
