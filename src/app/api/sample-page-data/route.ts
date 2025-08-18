import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// ============================================================================
// SAMPLE PAGE DATA API ROUTE
// ============================================================================

export async function GET() {
  try {
    // Read the sample page data from the data directory
    const dataPath = path.join(process.cwd(), 'data', 'sample-landing-page.json');
    
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json(
        { error: 'Sample page data not found' },
        { status: 404 }
      );
    }

    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const pageData = JSON.parse(fileContent);

    return NextResponse.json(pageData);
  } catch (error) {
    console.error('Error reading sample page data:', error);
    return NextResponse.json(
      { error: 'Failed to load sample page data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the incoming data structure
    if (!body.metadata || !body.sections) {
      return NextResponse.json(
        { error: 'Invalid page data structure' },
        { status: 400 }
      );
    }

    // Here you could save the page data to a database or file system
    // For now, we'll just return the validated data
    return NextResponse.json({
      message: 'Page data received successfully',
      data: body
    });
  } catch (error) {
    console.error('Error processing page data:', error);
    return NextResponse.json(
      { error: 'Failed to process page data' },
      { status: 500 }
    );
  }
}
