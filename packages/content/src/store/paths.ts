import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Resolve monorepo `storage/` whether cwd is root, apps/*, or packages/*.
 */
export function resolveStorageRoot(fromCwd = process.cwd()): string {
  const candidates = [
    join(fromCwd, "storage"),
    join(fromCwd, "..", "..", "storage"),
    join(fromCwd, "..", "storage"),
    join(fromCwd, "..", "..", "..", "storage"),
    join(__dirname, "..", "..", "storage"),
    join(__dirname, "..", "..", "..", "storage"),
    join(__dirname, "..", "..", "..", "..", "storage"),
  ];

  for (const dir of candidates) {
    if (existsSync(dir)) return dir;
  }

  // Default: assume monorepo root relative to packages/content
  return join(fromCwd, "..", "..", "storage");
}

export function contentDir(fromCwd = process.cwd()): string {
  return join(resolveStorageRoot(fromCwd), "content");
}

export function uploadsDir(fromCwd = process.cwd()): string {
  return join(resolveStorageRoot(fromCwd), "uploads");
}

export type ContentCollection =
  | "projects"
  | "skills"
  | "experiences"
  | "socials"
  | "buttons"
  | "settings"
  | "media";

export function collectionPath(
  collection: ContentCollection,
  fromCwd = process.cwd()
): string {
  return join(contentDir(fromCwd), `${collection}.json`);
}
