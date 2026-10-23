import { socialLinkSchema, socialRepository } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

export async function GET() {
  return withAuth(() => socialRepository.list());
}

export async function POST(req: Request) {
  return withAuth(async () => {
    const data = parseBody(socialLinkSchema, await req.json());
    return socialRepository.create(data);
  });
}
