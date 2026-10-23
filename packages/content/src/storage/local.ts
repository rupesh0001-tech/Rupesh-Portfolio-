import { randomUUID } from "node:crypto";
import { createWriteStream, existsSync, mkdirSync, unlinkSync } from "node:fs";
import { extname, join } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

import { uploadsDir } from "../store/paths";
import type { StorageAdapter, UploadResult } from "./types";

/**
 * Writes files into storage/uploads and returns a public URL path (/uploads/...).
 * Swap for S3 / Blob by implementing StorageAdapter.
 */
export function createLocalStorage(opts?: {
  uploadDir?: string;
  publicPath?: string;
}): StorageAdapter {
  const dir = opts?.uploadDir ?? uploadsDir();
  const publicPath = opts?.publicPath ?? "/uploads";

  return {
    async upload(bytes, { filename, mimeType }): Promise<UploadResult> {
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }

      const ext = extname(filename) || guessExt(mimeType);
      const safeName = `${Date.now()}-${randomUUID().slice(0, 8)}${ext}`;
      const dest = join(dir, safeName);

      await pipeline(
        Readable.from(Buffer.from(bytes)),
        createWriteStream(dest)
      );

      return {
        filename: safeName,
        url: `${publicPath}/${safeName}`,
        mimeType,
        size: bytes.byteLength,
      };
    },

    async delete(url: string): Promise<void> {
      const name = url.split("/").pop();
      if (!name) return;
      const dest = join(dir, name);
      if (existsSync(dest)) unlinkSync(dest);
    },
  };
}

function guessExt(mime: string): string {
  const map: Record<string, string> = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/webp": ".webp",
    "image/gif": ".gif",
    "image/svg+xml": ".svg",
  };
  return map[mime] ?? "";
}

export { uploadsDir as resolveUploadDir };
