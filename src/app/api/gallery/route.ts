import { NextRequest, NextResponse } from 'next/server';

const DOCTYPE = "NextJS Page";

export interface GalleryItem {
  name: string;
  title: string;
  description: string;
  category: string;
  sub_category?: string;
  route?: string;
  animated_image?: string;
  svg_image?: string;
  keywords?: string;
}

interface GalleryData {
  name: string;
  title: string;
  meta_title?: string;
  route: string;
  animated_image?: string;
  image?: string;
  keywords?: string;
  content?: string;
}

async function getGallery(filters: any[][] = []): Promise<GalleryData[]> {
  const fields = [
    'name',
    'title',
    'meta_title',
    'route',
    'animated_image',
    'image',
    'keywords',
    'content'
  ];

  // Always include page_type filter for Gallery
  const allFilters = [
    ['page_type', '=', 'Gallery'],
    ...filters
  ];

  const galleryPayload = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
    JSON.stringify(allFilters)
  )}&fields=${encodeURIComponent(JSON.stringify(fields))}&limit_page_length=100`;

  const galleryResponse = await fetch(galleryPayload, {
    headers: {
      Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
    },
    next: { revalidate: 3600 },
  });
  if (!galleryResponse.ok) {
    throw new Error(`Failed to fetch gallery: ${galleryResponse.statusText}`);
  }

  const galleryJson = await galleryResponse.json();
  return galleryJson.data || [];
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || '';
    // Category filters removed as they don't exist in the new schema
    // const category = searchParams.get('category') || '';
    // const sub_category = searchParams.get('sub_category') || '';

    const filters: any[][] = [['is_published', '=', 1]];
    
    if (search) {
      filters.push(['title', 'like', `%${search}%`]);
    }
    
    // Legacy category filtering removed

    const gallery = await getGallery(filters);

    const galleryItems: GalleryItem[] = gallery.map((item) => ({
      name: item.name,
      title: item.title,
      description: item.meta_title || item.title, // Fallback
      category: 'General', // Default category
      sub_category: '', 
      route: item.route,
      animated_image: item.animated_image,
      svg_image: item.image, // Map 'image' to 'svg_image' for frontend compatibility
      keywords: item.keywords,
    }));

    return NextResponse.json({
      success: true,
      data: galleryItems,
      count: galleryItems.length,
    });
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch gallery items',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}