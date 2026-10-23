import { createLocalStorage, mediaRepository } from "@repo/content";

import { withAuth } from "@/lib/api";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  return withAuth(async () => {
    const asset = mediaRepository.remove(id);
    if (asset) {
      await createLocalStorage().delete(asset.url);
    }
    return { ok: true };
  });
}
