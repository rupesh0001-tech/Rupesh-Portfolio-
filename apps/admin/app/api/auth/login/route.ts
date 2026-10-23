import { NextResponse } from "next/server";

import { createSession, verifyPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const body = (await req.json()) as { password?: string };
  if (!body.password || !verifyPassword(body.password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  await createSession();
  return NextResponse.json({ ok: true });
}
