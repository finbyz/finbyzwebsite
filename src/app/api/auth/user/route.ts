import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
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

    if (!cookies) {
      return NextResponse.json(
        { error: 'No session cookies found' },
        { status: 401 }
      );
    }

    // Check user info from Frappe backend
    const userResponse = await fetch(`${frappeUrl}/api/method/frappe.auth.get_logged_user`, {
      method: 'GET',
      headers: {
        'Cookie': cookies,
      },
    });

    if (!userResponse.ok) {
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }

    const userData = await userResponse.json();
    
    // Get additional user details
    const userDetailsResponse = await fetch(`${frappeUrl}/api/resource/User/${userData.message}`, {
      method: 'GET',
      headers: {
        'Cookie': cookies,
      },
    });

    let userDetails = {};
    if (userDetailsResponse.ok) {
      const detailsData = await userDetailsResponse.json();
      userDetails = detailsData.data || {};
    }

    return NextResponse.json({
      success: true,
      user: userData.message,
      details: userDetails,
    });

  } catch (error) {
    console.error('User info error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
