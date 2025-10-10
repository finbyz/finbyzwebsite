

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

  interface RelatedLinksData {
    name: string;
    route: string;
    title: string;
    seo_title: string;
    image?: string;
    blog_category?: string;
    published_on?: string;
  }

  async function getBlogs(filters: any[][] = []): Promise<RelatedLinksData[]> {
    const fields = [
      'name',
      'route',
      'title',
      'seo_title',
      'blog_category',
      'published_on',
      'image_seo as image'
    ];

    const webpagePayload = `${process.env.FRAPPE_URL}/api/resource/Blog Post?filters=${encodeURIComponent(
      JSON.stringify(filters)
    )}&fields=${encodeURIComponent(JSON.stringify(fields))}`;

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

  
      const filters: any[][] = [['published', '=', 1]]; 
      
      if (search) {
        filters.push(['title', 'like', `%${search}%`]);
      }
      
      if (category && category !== 'All Posts') {
        filters.push(['blog_category', '=', category]);
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
        description: blog.seo_title,
        date: blog.published_on || '',
        author: 'Mukesh',
        image: blog.image,
        read_time: '5 min',
        category: blog.blog_category || 'Uncategorized',
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