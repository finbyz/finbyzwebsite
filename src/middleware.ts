import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Set pathname header in request so it's available in Server Components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Protected routes that require authentication
  const protectedPaths = [
    '/user-activity',
    '/working_hour_exception',
    '/employee-joining-details',
  ];

  const isProtectedRoute = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtectedRoute) {
    // Get the session cookie (Frappe uses 'sid')
    const sid = request.cookies.get('sid')?.value;

    // If no session cookie, redirect to login with the current path as redirect param
    if (!sid) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

// Matcher configuration - run on all routes except static files and API
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|api).*)',
  ],
};