import { createLocalStorage, mediaRepository } from "@repo/content";

import { withAuth } from "@/lib/api";

export async function GET() {
  return withAuth(() => mediaRepository.list());
}

export async function POST(req: Request) {
  return withAuth(async () => {
    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      throw new Error("file is required");
    }

    const bytes = new Uint8Array(await file.arrayBuffer());
    const storage = createLocalStorage();
    const uploaded = await storage.upload(bytes, {
      filename: file.name,
      mimeType: file.type || "application/octet-stream",
    });

    return mediaRepository.create({
      ...uploaded,
      alt: String(form.get("alt") ?? ""),
    });
  });
}
