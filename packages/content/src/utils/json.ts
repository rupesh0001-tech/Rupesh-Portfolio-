export function parseJsonArray(value: string): string[] {
  try {
    const parsed = JSON.parse(value) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === "string");
    }
  } catch {
    // fall through
  }
  return [];
}

export function toJsonArray(value: string[]): string {
  return JSON.stringify(value);
}
