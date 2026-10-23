import { NextResponse } from "next/server";

import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { uploadsDir } from "@repo/content";

type Params = { params: Promise<{ path: string[] }> };

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

export async function GET(_req: Request, { params }: Params) {
  const { path } = await params;
  const filename = path.join("/");
  if (filename.includes("..")) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  const filePath = join(uploadsDir(), filename);
  if (!existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const ext = filename.slice(filename.lastIndexOf(".")).toLowerCase();
  const buf = await readFile(filePath);
  return new NextResponse(buf, {
    headers: {
      "Content-Type": MIME[ext] ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
