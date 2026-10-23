import { cookies } from "next/headers";

import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE = "portfolio_admin_session";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "dev-insecure-secret";
}

function password() {
  return process.env.ADMIN_PASSWORD || "admin123";
}

function sign(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function verifyPassword(input: string): boolean {
  const expected = password();
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function createSession(): Promise<void> {
  const token = `ok.${Date.now()}`;
  const signature = sign(token);
  const jar = await cookies();
  jar.set(COOKIE, `${token}.${signature}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroySession(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function isAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  const raw = jar.get(COOKIE)?.value;
  if (!raw) return false;
  const parts = raw.split(".");
  if (parts.length < 3) return false;
  const signature = parts.pop()!;
  const token = parts.join(".");
  const expected = sign(token);
  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function requireAuth(): Promise<void> {
  if (!(await isAuthenticated())) {
    throw new Error("UNAUTHORIZED");
  }
}
