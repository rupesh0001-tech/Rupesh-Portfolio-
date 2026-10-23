import { skillRepository, skillUpdateSchema } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(async () => {
    const data = parseBody(skillUpdateSchema, await req.json());
    return skillRepository.update(id, data);
  });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(() => {
    skillRepository.remove(id);
    return { ok: true };
  });
}
