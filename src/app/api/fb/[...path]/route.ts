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
    console.log('targetUrl', targetUrl);
    const headers: Record<string, string> = {
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


    let frappeResponse;
    let retryCount = 0;
    const maxRetries = 2;

    while (retryCount <= maxRetries) {
      // Create new AbortController for each attempt
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      try {
        frappeResponse = await fetch(targetUrl, {
          method,
          headers,
          body,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        break; // Success, exit retry loop
      } catch (error: any) {
        retryCount++;
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError' || error.code === 'UND_ERR_CONNECT_TIMEOUT') {
          if (retryCount <= maxRetries) {
            console.log(`Request timeout, retrying... (${retryCount}/${maxRetries})`);
            // Wait before retry (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
            continue;
          } else {
            throw new Error(`Request failed after ${maxRetries + 1} attempts: Connection timeout`);
          }
        } else {
          throw error; // Re-throw non-timeout errors
        }
      }
    }
    
    // Ensure frappeResponse is defined
    if (!frappeResponse) {
      throw new Error('No response received from Frappe server');
    }
    
    console.log('frappeResponse', frappeResponse);
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

  } catch (error: any) {
    console.error(`Frappe API error (${method} /${pathSegments.join('/')}):`, error);
    
    // Handle specific timeout errors
    if (error.message && error.message.includes('Connection timeout')) {
      return NextResponse.json(
        { 
          error: 'Request timeout - the Frappe server is taking too long to respond. Please try again.',
          details: 'Connection timeout after multiple retry attempts'
        },
        { status: 504 }
      );
    }
    
    // Handle other fetch errors
    if (error.name === 'AbortError' || error.code === 'UND_ERR_CONNECT_TIMEOUT') {
      return NextResponse.json(
        { 
          error: 'Request timeout - unable to connect to Frappe server',
          details: 'The request was aborted due to timeout'
        },
        { status: 504 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message || 'An unexpected error occurred'
      },
      { status: 500 }
    );
  }
}
