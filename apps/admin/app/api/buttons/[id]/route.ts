import { buttonLinkUpdateSchema, buttonRepository } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(async () => {
    const data = parseBody(buttonLinkUpdateSchema, await req.json());
    return buttonRepository.update(id, data);
  });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(() => {
    buttonRepository.remove(id);
    return { ok: true };
  });
}
