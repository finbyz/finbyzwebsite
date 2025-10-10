import { MediaItem, MediaCategory } from '@/types/media';

export function mapGallariesToMedia(data: Galleries): { items: MediaItem[]; categories: MediaCategory[] } {
  const sidebar = data.gallery_sidebar || [];

  const categories: MediaCategory[] = sidebar.map((g) => ({
    id: g.route,
    name: g.title,
    count: 1,
  }));

  const items: MediaItem[] = sidebar.map((g, idx) => ({
    id: g.route || String(idx),
    title: g.title,
    description: g.small_description,
    thumbnail: g.svg_image,
    type: g.youtube_link ? 'video' : 'image',
    category: g.route,
    videoId: g.youtube_link || undefined,
    imageUrl: g.svg_image || undefined,
    tags: g.keywords ? g.keywords.split(',').map((s) => s.trim()) : [],
  }));

  return { items, categories };
}


