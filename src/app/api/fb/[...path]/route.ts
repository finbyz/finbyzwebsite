import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  context: any
) {
  const { path: p } = (context && context.params) ? await context.params : { path: undefined }
  const segments = Array.isArray(p) ? p : (p ? [p] : [])
  return handleRequest(request, segments, 'GET');
}

export async function POST(
  request: Request,
  context: any
) {
  const { path: p } = (context && context.params) ? await context.params : { path: undefined }
  const segments = Array.isArray(p) ? p : (p ? [p] : [])
  return handleRequest(request, segments, 'POST');
}

export async function PUT(
  request: Request,
  context: any
) {
  const { path: p } = (context && context.params) ? await context.params : { path: undefined }
  const segments = Array.isArray(p) ? p : (p ? [p] : [])
  return handleRequest(request, segments, 'PUT');
}

export async function DELETE(
  request: Request,
  context: any
) {
  const { path: p } = (context && context.params) ? await context.params : { path: undefined }
  const segments = Array.isArray(p) ? p : (p ? [p] : [])
  return handleRequest(request, segments, 'DELETE');
}

export async function PATCH(
  request: Request,
  context: any
) {
  const { path: p } = (context && context.params) ? await context.params : { path: undefined }
  const segments = Array.isArray(p) ? p : (p ? [p] : [])
  return handleRequest(request, segments, 'PATCH');
}

async function handleRequest(
  request: Request,
  pathSegments: string[],
  method: string
) {
  try {
    const frappeUrl = process.env.FRAPPE_URL || 'https://website.finbyz.com';

    const [first, ...rest] = pathSegments;
    const frappePath = first === 'n' ? rest.join('/') : pathSegments.join('/');
    const basePath   = first === 'n' ? frappePath     : `api/${frappePath}`;
    const url = new URL(request.url);
    const queryString = url.search || '';
    const targetUrl = `${frappeUrl}/${basePath}${queryString}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Forward cookies if present
    const cookies = request.headers.get('cookie');
    if (cookies) headers['Cookie'] = cookies;

    // Optional token auth fallback
    const apiKey = process.env.FRAPPE_API_KEY;
    const apiSecret = process.env.FRAPPE_API_SECRET;
    if (apiKey && apiSecret) {
      headers['Authorization'] = `token ${apiKey}:${apiSecret}`;
    }

    // Optional multi-tenant site header
    const siteName = process.env.FRAPPE_SITE;
    if (siteName) {
      headers['X-Frappe-Site-Name'] = siteName;
    }

    request.headers.forEach((value, key) => {
      const lower = key.toLowerCase();
      // Only forward safe headers, exclude problematic ones
      if (lower !== 'host' && 
          lower !== 'cookie' && 
          lower !== 'authorization' &&
          lower !== 'connection' &&
          lower !== 'upgrade' &&
          lower !== 'proxy-connection' &&
          lower !== 'te' &&
          lower !== 'trailers' &&
          lower !== 'transfer-encoding' &&
          lower !== 'content-encoding' &&
          lower !== 'content-length') {
        headers[key] = value as string;
      }
    });

    let body: string | undefined;
    if (method !== 'GET' && method !== 'HEAD') {
      try {
        const requestBody = await (request.clone()).json();
        body = JSON.stringify(requestBody);
      } catch {
        body = await request.text();
      }
    }

    // Debug logging
    console.log(`Making ${method} request to: ${targetUrl}`);
    console.log('Headers:', JSON.stringify(headers, null, 2));

    const frappeResponse = await fetch(targetUrl, {
      method,
      headers,
      body,
    });

    if (frappeResponse.status === 401 || frappeResponse.status === 403) {
      return NextResponse.json(
        { error: 'Authentication failed or insufficient permissions' },
        { status: frappeResponse.status }
      );
    }

    const safeHeaders = new Headers();
    frappeResponse.headers.forEach((value, key) => {
      const lower = key.toLowerCase();
      if (lower === 'set-cookie') {
        // Do not forward upstream cookie domains; rely on token auth or browser cookies
        return;
      }
      if (lower === 'content-encoding' || lower === 'content-length' || lower === 'transfer-encoding') {
        return;
      }
      safeHeaders.set(key, value);
    });
    safeHeaders.set('Cache-Control', 'no-store');

    return new NextResponse(frappeResponse.body, {
      status: frappeResponse.status,
      headers: safeHeaders,
    });

  } catch (error) {
    console.error(`Frappe API error (${method} /${pathSegments.join('/')}):`, error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
