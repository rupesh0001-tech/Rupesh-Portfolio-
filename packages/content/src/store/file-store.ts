import { randomUUID } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import { dirname } from "node:path";

import { collectionPath, type ContentCollection, contentDir } from "./paths";

function ensureDir(filePath: string) {
  const dir = dirname(filePath);
  try {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  } catch {
    // Read-only filesystem on serverless platforms
  }
}

/**
 * Atomic JSON write: write temp file then rename.
 * Keeps content editable by hand and safe under concurrent admin saves.
 */
export function writeJson<T>(filePath: string, data: T): void {
  ensureDir(filePath);
  const tmp = `${filePath}.${randomUUID().slice(0, 8)}.tmp`;
  writeFileSync(tmp, JSON.stringify(data, null, 2) + "\n", "utf8");
  renameSync(tmp, filePath);
}

export function readJson<T>(filePath: string, fallback: T): T {
  if (!existsSync(filePath)) {
    return fallback;
  }

  try {
    const raw = readFileSync(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function readCollection<T>(
  collection: ContentCollection,
  fallback: T[] = []
): T[] {
  return readJson<T[]>(collectionPath(collection), fallback);
}

export function writeCollection<T>(
  collection: ContentCollection,
  data: T[]
): void {
  writeJson(collectionPath(collection), data);
}

export function ensureContentStore(): void {
  try {
    if (!existsSync(contentDir())) {
      mkdirSync(contentDir(), { recursive: true });
    }
  } catch {
    // Read-only filesystem on serverless platforms
  }
}

export function createId(): string {
  return randomUUID();
}
