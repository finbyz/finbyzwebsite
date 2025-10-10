export interface MediaItem {
  id: string;
  title: string;
  description?: string;
  small_description?: string;
  thumbnail: string;
  type: 'video' | 'image';
  category: string;
  watched?: boolean;
  views?: number;
  // For videos
  videoId?: string; // YouTube video ID
  duration?: string;
  // For images
  imageUrl?: string;
  tags?: string[];
}

export interface MediaCategory {
  id: string;
  name: string;
  icon?: string;
  count: number;
}
