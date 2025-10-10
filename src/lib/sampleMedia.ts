import { MediaItem, MediaCategory } from '@/types/media';

interface GallerySidebarItem {
  gallery: string;
  title: string;
  route: string;
  svg_image: string;
}

interface Gallery {
  name: string;
  title: string;
  seo_title: string;
  small_description: string;
  gallery_title: string;
  keywords: string;
  gallery_category: string;
  gallery_sub_category: string;
  route: string;
  description: string;
  youtube_link: string;
  svg_image: string;
  doctype: string;
  gallery_sidebar?: GallerySidebarItem[];
}

interface Gallaries {
  parent: Gallery,
  gallery_sidebar?: Gallery[]
}

/**
 * Fetches gallery data by route
 * @param route - The gallery route to fetch
 * @returns Gallery data or null if not found
 */
async function getGalleryByRoute(route: string): Promise<Gallery | null> {
  try {
    const galleryPayload = `${process.env.FRAPPE_URL}/api/resource/Gallery?filters=${encodeURIComponent(
      JSON.stringify([["route", "=", route]])
    )}&fields=${encodeURIComponent(
      JSON.stringify([
        "name",
        "title",
        "seo_title",
        "small_description",
        "gallery_title",
        "keywords",
        "gallery_category",
        "gallery_sub_category",
        "route",
        "description",
        "youtube_link",
        "svg_image",
        "doctype",
        "gallery_sidebar"
      ])
    )}`;

    const response = await fetch(galleryPayload, {
      headers: {
        Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    const galleries: Gallery[] = json.data || [];

    // Return the first match or null if not found
    return galleries.length > 0 ? galleries[0] : null;
  } catch (error) {
    console.error('Error fetching gallery by route:', error);
    return null;
  }
}

/**
 * Fetches multiple galleries by their routes
 * @param routes - Array of gallery routes
 * @returns Array of Gallery objects
 */
async function getGalleriesByRoutes(routes: string[]): Promise<Gallery[]> {
  if (routes.length === 0) return [];

  try {
    const galleryPayload = `${process.env.FRAPPE_URL}/api/resource/Gallery?filters=${encodeURIComponent(
      JSON.stringify([["route", "in", routes]])
    )}&fields=${encodeURIComponent(
      JSON.stringify([
        "name",
        "title",
        "seo_title",
        "small_description",
        "gallery_title",
        "keywords",
        "gallery_category",
        "gallery_sub_category",
        "route",
        "description",
        "youtube_link",
        "svg_image",
        "doctype",
        "gallery_sidebar"
      ])
    )}`;

    const response = await fetch(galleryPayload, {
      headers: {
        Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching galleries by routes:', error);
    return [];
  }
}

/**
 * Fetches gallery with simplified fields (useful for listings)
 * @param route - The gallery route
 * @returns Simplified gallery data
 */
async function getFullGallery(route: string): Promise<Gallaries | null> {
  const gallary = await getGalleryByRoute(route);
  if (!gallary) return null;
  const galleryRoutes = gallary.gallery_sidebar?.map(item => item.route) || [];
  const gallareies = await getGalleriesByRoutes(galleryRoutes);
  return {
    parent: gallary,
    gallery_sidebar: gallareies
  };
}

// Export functions
export { getGalleryByRoute, getGalleriesByRoutes, getFullGallery };
