import { Job } from '@/lib/jobs';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(request: NextRequest) {

  try {
    // Extract request parameters
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || '';
    const department = searchParams.get('department') || '';
    const location = searchParams.get('location') || '';
    const employment_type = searchParams.get('employment_type') || '';

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
      "*"
    ];
    filters.push(['publish', 'is', 'set']);
    filters.push(['status', 'in', ["Open"]])
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
      throw new Error(`Frappe REST API error: ${frappeResponse.status} ${errorText}`);
    }

    const frappeData = await frappeResponse.json();

    const jobs = frappeData.data || [];

    const jobOpenings: Job[] = jobs.map((job: Job) => ({
      name: job.name,
      job_title: job.job_title,
      designation: job.designation,
      salary: job.salary,
      valid_till: job.valid_till,
      small_description: job.small_description,
      keywords: job.keywords,
      posted_on: job.posted_on, 
      company: job.company,
      department: job.department,
      seo_title: job.seo_title,
      planned_vacancies: job.planned_vacancies,
      vacancies: job.vacancies,
      route: job.route,
      description: job.description, 
      skills: job.skills, 
      image: job.image, 
      title: job.title,
      currency: job.currency,
      lower_range: job.lower_range,
      upper_range: job.upper_range,
      salary_per: job.salary_per, // e.g., "Month"
      publish_salary_range: job.publish_salary_range
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
