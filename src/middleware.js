import { NextResponse } from "next/server";

export async function middleware(request) {
  const sessionCookie = request.cookies.get("better-auth.session_token");

  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:id*"],
};
