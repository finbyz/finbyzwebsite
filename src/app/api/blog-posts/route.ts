import { NextRequest, NextResponse } from 'next/server';

export interface BlogPost {
  name: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  read_time?: string;
  category?: string;
  route?: string;
}

interface NextJSPageData {
  name: string;
  route: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  image?: string;
  page_type?: string;
  published_on?: string;
  content?: string;
  // Included additional fields from schema for completeness if needed later
  navigation_image?: string;
  animated_image?: string;
  keywords?: string;
}

async function getBlogs(filters: any[][] = []): Promise<NextJSPageData[]> {
  const fields = [
    'name',
    'route',
    'title',
    'meta_title',
    'meta_description',
    'image',
    'page_type',
    'published_on',
    'navigation_image',
    'animated_image',
    'keywords'
  ];

  const webpagePayload = `${process.env.FRAPPE_URL}/api/resource/NextJS Page?filters=${encodeURIComponent(
    JSON.stringify(filters)
  )}&fields=${encodeURIComponent(JSON.stringify(fields))}&limit_page_length=100&order_by=published_on desc`;

  const blogsResponse = await fetch(webpagePayload, {
    headers: {
      Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
    },
    next: { revalidate: 3600 },
  });

  if (!blogsResponse.ok) {
    throw new Error(`Failed to fetch blogs: ${blogsResponse.statusText}`);
  }

  const blogsJson = await blogsResponse.json();
  return blogsJson.data || [];
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const start_date = searchParams.get('start_date') || '';
    const end_date = searchParams.get('end_date') || '';

    // Always ensure we fetch published NextJS Pages of type 'Blog Post'
    const filters: any[][] = [
      ['is_published', '=', 1],
      ['page_type', '=', 'Blog Post']
    ];

    if (search) {
      filters.push(['title', 'like', `%${search}%`]);
    }

    // Future expansion: filter by keywords if category is provided?
    // Current schema doesn't have a 'category' field, but has 'keywords'
    if (category && category !== 'All Posts' && category !== 'Blog Post') {
      filters.push(['keywords', 'like', `%${category}%`]);
    }

    if (start_date && end_date) {
      filters.push(['published_on', 'between', [start_date, end_date]]);
    } else if (start_date) {
      filters.push(['published_on', '>=', start_date]);
    } else if (end_date) {
      filters.push(['published_on', '<=', end_date]);
    }

    const blogs = await getBlogs(filters);

    const blogPosts: BlogPost[] = blogs.map((blog) => ({
      name: blog.name,
      title: blog.title,
      description: blog.meta_description || blog.meta_title || '',
      date: blog.published_on || new Date().toISOString().split('T')[0], // Fallback if missing
      author: 'Mukesh', // Default or could be Owner if fetched
      image: blog.image || blog.navigation_image || blog.animated_image,
      read_time: '5 min', // Default
      category: blog.page_type || 'Blog Post',
      route: blog.route,
    }));

    return NextResponse.json({
      success: true,
      data: blogPosts,
      count: blogPosts.length,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog posts',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}