import { skillRepository, skillSchema } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

export async function GET(req: Request) {
  const group = new URL(req.url).searchParams.get("group") ?? undefined;
  return withAuth(() => skillRepository.list(group ?? undefined));
}

export async function POST(req: Request) {
  return withAuth(async () => {
    const data = parseBody(skillSchema, await req.json());
    return skillRepository.create(data);
  });
}
