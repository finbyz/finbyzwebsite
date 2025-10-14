import { NextRequest, NextResponse } from 'next/server';

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
  gallery_title: string;
  gallery_category: string;
  gallery_sub_category?: string;
  route: string;
  animated_image?: string;
  svg_image?: string;
  keywords?: string;
}

async function getGallery(filters: any[][] = []): Promise<GalleryData[]> {
  const fields = [
    'name',
    'title',
    'gallery_title',
    'gallery_category',
    'gallery_sub_category',
    'route',
    'animated_image',
    'svg_image',
    'keywords'
  ];

  const galleryPayload = `${process.env.FRAPPE_URL}/api/resource/Gallery?filters=${encodeURIComponent(
    JSON.stringify(filters)
  )}&fields=${encodeURIComponent(JSON.stringify(fields))}`;

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
    const category = searchParams.get('category') || '';
    const sub_category = searchParams.get('sub_category') || '';

    const filters: any[][] = [['published', '=', 1]];
    
    if (search) {
      filters.push(['title', 'like', `%${search}%`]);
    }
    
    if (category && category !== 'All Categories') {
      filters.push(['gallery_category', '=', category]);
    }
    
    if (sub_category && sub_category !== 'All Sub Categories') {
      filters.push(['gallery_sub_category', '=', sub_category]);
    }

    const gallery = await getGallery(filters);

    const galleryItems: GalleryItem[] = gallery.map((item) => ({
      name: item.name,
      title: item.gallery_title || item.title,
      description: item.title,
      category: item.gallery_category || 'Uncategorized',
      sub_category: item.gallery_sub_category,
      route: item.route,
      animated_image: item.animated_image,
      svg_image: item.svg_image,
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