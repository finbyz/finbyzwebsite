import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, 'GET');
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, 'POST');
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, 'PUT');
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, 'DELETE');
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, 'PATCH');
}

async function handleRequest(
  request: NextRequest,
  pathSegments: string[],
  method: string
) {
  try {
    // Get Frappe backend URL from environment
    const frappeUrl = process.env.FRAPPE_URL;
    if (!frappeUrl) {
      return NextResponse.json(
        { error: 'Frappe backend URL not configured' },
        { status: 500 }
      );
    }

    // Get cookies from the request to forward authentication
    const cookies = request.headers.get('cookie');
    
    if (!cookies) {
      return NextResponse.json(
        { error: 'Authentication required - no session cookies found' },
        { status: 401 }
      );
    }

    // Build the target Frappe API path (support both with/without leading "api")
    const frappePath = pathSegments.join('/');
    const basePath = frappePath.startsWith('api/') ? frappePath : `api/${frappePath}`;
    const queryString = request.nextUrl.search || '';
    const targetUrl = `${frappeUrl}/${basePath}${queryString}`;

    // Prepare headers for Frappe request
    const headers: Record<string, string> = {
      'Cookie': cookies,
      'Content-Type': 'application/json',
    };

    // Forward other relevant headers (excluding host and cookie which we handle separately)
    request.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'host' && key.toLowerCase() !== 'cookie') {
        headers[key] = value;
      }
    });

    // Prepare request body for non-GET requests
    let body: string | undefined;
    if (method !== 'GET' && method !== 'HEAD') {
      try {
        const requestBody = await request.json();
        body = JSON.stringify(requestBody);
      } catch {
        // If body is not JSON, try to get as text
        body = await request.text();
      }
    }

    // Make request to Frappe backend
    const frappeResponse = await fetch(targetUrl, {
      method,
      headers,
      body,
    });

    // Handle authentication errors
    if (frappeResponse.status === 401 || frappeResponse.status === 403) {
      return NextResponse.json(
        { error: 'Authentication failed or insufficient permissions' },
        { status: frappeResponse.status }
      );
    }

    // Forward response status
    const response = new NextResponse(null, {
      status: frappeResponse.status,
    });

    // Forward response headers (including new session cookies)
    frappeResponse.headers.forEach((value, key) => {
      if (key.toLowerCase() === 'set-cookie') {
        response.headers.append('Set-Cookie', value);
      } else {
        response.headers.set(key, value);
      }
    });

    // Handle response body
    try {
      const responseData = await frappeResponse.json();
      return NextResponse.json(responseData, {
        status: frappeResponse.status,
        headers: response.headers,
      });
    } catch {
      // If response is not JSON, return as text
      const responseText = await frappeResponse.text();
      return new NextResponse(responseText, {
        status: frappeResponse.status,
        headers: response.headers,
      });
    }

  } catch (error) {
    console.error(`Frappe API error (${method} /${pathSegments.join('/')}):`, error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
