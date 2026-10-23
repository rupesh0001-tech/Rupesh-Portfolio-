import { experienceRepository, experienceSchema } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

export async function GET() {
  return withAuth(() => experienceRepository.list());
}

export async function POST(req: Request) {
  return withAuth(async () => {
    const data = parseBody(experienceSchema, await req.json());
    return experienceRepository.create(data);
  });
}
