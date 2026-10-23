import { NextResponse } from "next/server";

import { isAuthenticated } from "./auth";

export async function withAuth<T>(
  handler: () => Promise<T> | T
): Promise<NextResponse> {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await handler();
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export function parseBody<T>(
  schema: {
    safeParse: (
      data: unknown
    ) =>
      | { success: true; data: T }
      | { success: false; error: { flatten: () => unknown } };
  },
  raw: unknown
): T {
  const result = schema.safeParse(raw);
  if (!result.success) {
    throw new Error(JSON.stringify(result.error.flatten()));
  }
  return result.data;
}
