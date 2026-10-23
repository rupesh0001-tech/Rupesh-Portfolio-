import { buttonLinkSchema, buttonRepository } from "@repo/content";

import { parseBody, withAuth } from "@/lib/api";

export async function GET(req: Request) {
  const location = new URL(req.url).searchParams.get("location") ?? undefined;
  return withAuth(() => buttonRepository.list(location ?? undefined));
}

export async function POST(req: Request) {
  return withAuth(async () => {
    const data = parseBody(buttonLinkSchema, await req.json());
    return buttonRepository.create(data);
  });
}
