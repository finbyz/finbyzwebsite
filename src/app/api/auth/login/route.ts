import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate inputT
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Get Frappe backend URL from environment
    const frappeUrl = process.env.FRAPPE_URL;
    if (!frappeUrl) {
      return NextResponse.json(
        { error: 'Frappe backend URL not configured' },
        { status: 500 }
      );
    }

    // Make login request to Frappe backend
    const loginResponse = await fetch(`${frappeUrl}/api/method/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usr: username,
        pwd: password,
      }),
    });

    if (!loginResponse.ok) {
      const errorData = await loginResponse.json();
      return NextResponse.json(
        { error: 'Login failed', details: errorData },
        { status: loginResponse.status }
      );
    }

    const loginData = await loginResponse.json();
    
    // Extract cookies from Frappe response
    const setCookieHeaders = loginResponse.headers.getSetCookie();
    
    // Create response with success data
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: loginData.message?.user || username,
    });

    // Forward Frappe session cookies
    setCookieHeaders.forEach(cookie => {
      response.headers.append('Set-Cookie', cookie);
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
