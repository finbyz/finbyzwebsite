import { NextRequest, NextResponse } from 'next/server';

export interface JobOpening {
  name: string;
  job_title: string;
  description: string;
  department: string;
  location: string;
  employment_type: string;
  experience_required?: string;
  posted_date: string;
  route?: string;
  small_description?:string;
}

interface JobOpeningData {
  name: string;
  job_title: string;
  description: string;
  department: string;
  location: string;
  employment_type: string;
  experience_required?: string;
  posted_on?: string;
  route?: string;
  small_description?:string;

}

// Removed getJobOpenings function - now using custom Frappe function directly

export async function GET(request: NextRequest) {
  console.log('🚀 Jobs API GET request started');
  console.log('🔗 Request URL:', request.url);
  
  try {
    // Check if we should use mock data (for development/testing)
    const useMockData = process.env.USE_MOCK_JOBS_DATA === 'true';
    
    if (useMockData) {
      console.log('🧪 Using mock data for development');
      const mockJobs = [
        {
          name: 'JOB-001',
          job_title: 'Senior Developer',
          description: 'We are looking for a senior developer to join our team.',
          department: 'Engineering',
          location: 'Remote',
          employment_type: 'Full-time',
          experience_required: '3-5 years',
          posted_date: new Date().toISOString(),
        },
        {
          name: 'JOB-002', 
          job_title: 'Product Manager',
          description: 'Lead product development and strategy.',
          department: 'Product',
          location: 'Hybrid',
          employment_type: 'Full-time',
          experience_required: '5+ years',
          posted_date: new Date().toISOString(),
        }
      ];
      
      return NextResponse.json({
        success: true,
        data: mockJobs,
        count: mockJobs.length,
      });
    }

    // Extract request parameters
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || '';
    const department = searchParams.get('department') || '';
    const location = searchParams.get('location') || '';
    const employment_type = searchParams.get('employment_type') || '';
    
    // Check environment variables
    if (!process.env.FRAPPE_URL) {
      throw new Error('FRAPPE_URL environment variable is not set');
    }
    if (!process.env.FRAPPE_API_KEY) {
      throw new Error('FRAPPE_API_KEY environment variable is not set');
    }
    if (!process.env.FRAPPE_API_SECRET) {
      throw new Error('FRAPPE_API_SECRET environment variable is not set');
    }

    // Use Frappe REST API directly
    
    // Build filters for Frappe REST API
    const filters: any[][] = [];
    
    // Add search filter
    if (search) {
      filters.push(['job_title', 'like', `%${search}%`]);
    }
    
    // Add department filter
    if (department && department !== 'All Departments') {
      filters.push(['department', '=', department]);
    }
    
    // Add location filter
    if (location) {
      filters.push(['location', '=', location]);
    }
    
    // Add employment type filter
    if (employment_type) {
      filters.push(['employment_type', '=', employment_type]);
    }
    
    // Fields to fetch - using only basic fields that are guaranteed to exist
    const fields = [
      'name',
      'job_title',
      'description',
      'department',
      'location',
      'employment_type',
      'creation',
      'modified',
      'status',
      'company',
      'route',
      "small_description"
    ];
    filters.push(['publish', 'is', 'set']);  
    filters.push(['status','in',["Open"]])
    const frappeApiUrl = `${process.env.FRAPPE_URL}/api/resource/Job Opening?filters=${encodeURIComponent(
      JSON.stringify(filters)
    )}&fields=${encodeURIComponent(JSON.stringify(fields))}&limit_page_length=100`;
    
    
    const frappeResponse = await fetch(frappeApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        'Content-Type': 'application/json',
      },
    });
    
    
    if (!frappeResponse.ok) {
      const errorText = await frappeResponse.text();
      console.error('❌ Frappe REST API error:', errorText);
      throw new Error(`Frappe REST API error: ${frappeResponse.status} ${errorText}`);
    }
    
    const frappeData = await frappeResponse.json();
    
    const jobs = frappeData.data || [];
    
    // Map Frappe data to our expected format
    const jobOpenings: JobOpening[] = jobs.map((job: any) => ({
      name: job.name,
      job_title: job.job_title || job.name || 'Job Opening',
      description: job.description || 'No description available',
      department: job.department || 'General',
      location: job.location || 'Not specified',
      employment_type: job.employment_type || 'Full-time',
      experience_required: 'Not specified', // Default value since field is not accessible
      posted_date: job.creation || job.modified || '',
      route: job.route,
      small_description:job.small_description
    }));
    
    
    return NextResponse.json({
      success: true,
      data: jobOpenings,
      count: jobOpenings.length,
    });
  } catch (error) {
    console.error('❌ Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch job openings',
        message: error instanceof Error ? error.message : 'Unknown error',
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}