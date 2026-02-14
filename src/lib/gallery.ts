
// Ensure absolute URLs on the client; use auth headers only on the server
const BASE_URL = process.env.FRAPPE_URL
function getAuthHeaders() {
    const key = process.env.FRAPPE_API_KEY;
    const secret = process.env.FRAPPE_API_SECRET;
    if (!key || !secret) return {} as Record<string, string>;
    return { Authorization: `token ${key}:${secret}` } as Record<string, string>;
}

// Define the fields we need to fetch
const GALLERY_FIELDS = [
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
    "gallery_sidebar",
    "animated_image",
    "quote",
    "creation",
    "modified"
];

/**
 * Fetches gallery data by route
 * @param route - The gallery route to fetch
 * @returns Gallery data or null if not found
 */
async function getGalleryByRoute(route: string): Promise<Gallery | null> {
    try {
        const base = BASE_URL || '';

        // Step 1: Get the gallery by route (only fetch name to minimize data)
        const galleryPayload = `${base}/api/resource/Gallery?filters=${encodeURIComponent(
            JSON.stringify([["route", "=", route]])
        )}&fields=${encodeURIComponent(JSON.stringify(["name"]))}`;

        const response = await fetch(galleryPayload, {
            headers: {
                ...getAuthHeaders(),
            },
        });

        if (!response.ok) {
            return null;
        }

        const json = await response.json();
        const galleries: Gallery[] = json.data || [];

        // Check if we found a gallery
        if (galleries.length === 0) {
            return null;
        }

        const gallery = galleries[0];

        // Step 2: Fetch full gallery details with specific fields
        const galleryDetailsUrl = `${base}/api/resource/Gallery/${gallery.name}?fields=${encodeURIComponent(
            JSON.stringify(GALLERY_FIELDS)
        )}`;

        const detailsResponse = await fetch(galleryDetailsUrl, {
            headers: {
                ...getAuthHeaders(),
            },
        });


        if (!detailsResponse.ok) {
            // If details fetch fails, return the basic gallery info
            return gallery;
        }

        const detailsJson = await detailsResponse.json();

        // Return the detailed gallery data
        return detailsJson.data || gallery;

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
        const base = BASE_URL || '';
        const galleryPayload = `${base}/api/resource/Gallery?filters=${encodeURIComponent(
            JSON.stringify([["route", "in", routes]])
        )}&fields=["*"]`;

        const response = await fetch(galleryPayload, {
            headers: {
                ...getAuthHeaders(),
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        const data = json.data || [];

        if (data.length === 0) {
            return [];
        }

        return data.map((gallery: any) => {
            return {
                name: gallery.name,
                title: gallery.title,
                seo_title: gallery.seo_title,
                small_description: gallery.small_description,
                gallery_title: gallery.gallery_title,
                keywords: gallery.keywords,
                gallery_category: gallery.gallery_category,
                gallery_sub_category: gallery.gallery_sub_category,
                route: gallery.route,
                description: gallery.description,
                youtube_link: gallery.youtube_link,
                svg_image: gallery.svg_image,
                gallery_sidebar: gallery.gallery_sidebar,
                animated_image: gallery.animated_image,
                quote: gallery.quote
            }
        });

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
async function getFullGallery(route: string): Promise<Galleries | null> {
  const gallery = await getGalleryByRoute(route);
  if (!gallery) return null;

  const galleryRoutes = gallery.gallery_sidebar?.map(item => item.route) || [];
  const galleries = await getGalleriesByRoutes(galleryRoutes);

  // Build a Map once for O(1) lookup
  const galleryMap = new Map<string, Gallery>();
  for (const g of galleries) {
    galleryMap.set(g.route, g);
  }

  // Sort by original route order
  const sortedGalleries: Gallery[] = [];
  for (const route of galleryRoutes) {
    const g = galleryMap.get(route);
    if (g) sortedGalleries.push(g);
  }

  return {
    parent: gallery,
    gallery_sidebar: sortedGalleries,
  };
}


async function getGalleryRoutes(): Promise<string[]> {
    const base = BASE_URL || '';
    const galleryPayload = `${base}/api/resource/Gallery?filters=${encodeURIComponent(
        JSON.stringify([["published", "is", "set"]])
    )}&fields=${encodeURIComponent(
        JSON.stringify(["route"])
    )}&limit=0`;

    const response = await fetch(galleryPayload, {
        headers: {
            ...getAuthHeaders(),
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch gallery routes: ${response.statusText}`);
    }

    const result = await response.json();

    return result.data.map((item: { route: string }) => item.route);
}
// Export functions
export { getGalleryByRoute, getGalleriesByRoutes, getFullGallery, getGalleryRoutes };