import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the session cookie (Frappe uses 'sid')
  const sid = request.cookies.get('sid')?.value;

  // If no session cookie, redirect to login with the current path as redirect param
  if (!sid) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If session cookie exists, allow access
  return NextResponse.next();
}

// Matcher configuration - only run middleware on these specific paths
export const config = {
  matcher: [
    '/user-activity',
    '/user-activity/employee',
    '/user-activity/overview',
    '/working_hour_exception',
    '/employee-joining-details',
    '/components'
  ],
};