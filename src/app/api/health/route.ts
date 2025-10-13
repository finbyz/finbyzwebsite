// For Next.js App Router (app/api/health/route.ts)
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Add any additional checks here (database, external services, etc.)
    return NextResponse.json(
      {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 }
    );
  }
}