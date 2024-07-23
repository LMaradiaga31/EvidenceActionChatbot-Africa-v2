import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  // Allow requests if the following is true:
  // 1) It's a request for next-auth session & provider fetching
  // 2) the token exists
  if (pathname.startsWith("/api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect them to login if they don't have a token AND are requesting a protected route
  if (!token && pathname !== "/auth/login") {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
