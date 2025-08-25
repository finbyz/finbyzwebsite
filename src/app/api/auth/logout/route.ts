import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get Frappe backend URL from environment
    const frappeUrl = process.env.FRAPPE_URL;
    if (!frappeUrl) {
      return NextResponse.json(
        { error: 'Frappe backend URL not configured' },
        { status: 500 }
      );
    }

    // Get cookies from the request to forward to Frappe
    const cookies = request.headers.get('cookie');

    // Make logout request to Frappe backend
    const logoutResponse = await fetch(`${frappeUrl}/api/method/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(cookies && { 'Cookie': cookies }),
      },
    });

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Logout successful',
    });

    // Clear session cookies by setting them to expire
    response.headers.append('Set-Cookie', 'sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly');
    response.headers.append('Set-Cookie', 'user_id=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly');
    response.headers.append('Set-Cookie', 'system_user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly');

    return response;

  } catch (error) {
    console.error('Logout error:', error);
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
