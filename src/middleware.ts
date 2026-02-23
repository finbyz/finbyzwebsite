import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BASE_URL = process.env.FRAPPE_URL ?? ''

let routeMap: Record<string, string> = {};
let lastFetched = 0;
const CACHE_TTL = 3600;

async function getRouteMap(): Promise<Record<string, string>> {
  const now = Date.now();
  if (now - lastFetched < CACHE_TTL && Object.keys(routeMap).length > 0) {
    return routeMap;
  }

  try {
    const res = await fetch(`${BASE_URL}/api/resource/NextJS Page?fields=["route","actual_route"]&limit_page_length=0`, {
      headers: {
        "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
      },
      next: {
        revalidate: CACHE_TTL
      },
    });
    if (!res.ok) {
      console.error(`[middleware] Failed to fetch routes: ${res.status} ${res.statusText}`);
      return routeMap;
    }
    const data = await res.json();
    if (data && Array.isArray(data.data)) {
      const newMap: Record<string, string> = {};
      for (const item of data.data) {
        if (item.route && item.actual_route && item.route !== item.actual_route) {
          newMap[item.route] = item.actual_route;
        }
      }
      if (Object.keys(newMap).length > 0) {
        routeMap = newMap;
      }
    }
    lastFetched = now;
  } catch (err) {
    console.error('[middleware] Failed to fetch routes:', err);
  }

  return routeMap;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Set pathname header in request so it's available in Server Components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  // ---- route mapping ----
  const map = await getRouteMap();
  const normalized = pathname.replace(/\/$/, '') || '/';
  const destination = map[normalized];

  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    // update the pathname header to the rewritten request
    requestHeaders.set('x-pathname', destination);

    return NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
  }
  // ---- end route mapping ----

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
    const sid = request.cookies.get('sid')?.value;

    if (!sid) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|api).*)',
  ],
};