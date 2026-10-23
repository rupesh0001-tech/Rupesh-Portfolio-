import { projectRepository, projectSchema } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

export async function GET() {
  return withAuth(() => projectRepository.list());
}

export async function POST(req: Request) {
  return withAuth(async () => {
    const raw = await req.json();
    const data = parseBody(projectSchema, raw);
    return projectRepository.create(data);
  });
}
