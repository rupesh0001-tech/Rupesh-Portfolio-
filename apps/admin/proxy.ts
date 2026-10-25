import { type NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname.startsWith("/login");
  const isAuthApi = pathname.startsWith("/api/auth");
  const isUploadApi = pathname.startsWith("/api/uploads");
  const isPublic = isAuthPage || isAuthApi || isUploadApi;

  const session = request.cookies.get("portfolio_admin_session")?.value;

  if (!session && !isPublic) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (session && isAuthPage) {
    const dashboardUrl = new URL("/", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
