
// Ensure absolute URLs on the client; use auth headers only on the server
const BASE_URL = process.env.FRAPPE_URL
const DOCTYPE = "NextJS Page";

function getAuthHeaders() {
    const key = process.env.FRAPPE_API_KEY;
    const secret = process.env.FRAPPE_API_SECRET;
    if (!key || !secret) return {} as Record<string, string>;
    return { Authorization: `token ${key}:${secret}` } as Record<string, string>;
}

// Define the fields we need to fetch from NextJS Page
const GALLERY_FIELDS = [
    "name",
    "title",
    "meta_title",
    "meta_description",
    "keywords",
    "route",
    "content_type",
    "content", // Rich Text content
    "content_md",
    "youtube_link",
    "image", // Was svg_image
    "page_type",
    "animated_image",
    "creation",
    "modified",
    "navigation_title",
    "nextjs_related_page" // Child table replacing gallery_sidebar
];

/**
 * Fetches gallery data by route
 * @param route - The gallery route to fetch
 * @returns Gallery data or null if not found
 */
async function getGalleryByRoute(route: string): Promise<Gallery | null> {
    try {
        const base = BASE_URL || '';

        // Step 1: Get the gallery page by route (only fetch name to minimize data)
        // We filter by route AND page_type="Gallery"
        // Handle route with/without leading slash
        const routesToCheck = [route, `/${route}`, route.replace(/^\//, '')];
        const uniqueRoutes = [...new Set(routesToCheck)];

        const galleryPayload = `${base}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
            JSON.stringify([["route", "in", uniqueRoutes], ["page_type", "=", "Gallery"]])
        )}&fields=${encodeURIComponent(JSON.stringify(["name"]))}`;

        const response = await fetch(galleryPayload, {
            headers: {
                ...getAuthHeaders(),
            },
            next: { revalidate: 60 } // Optional: add revalidation
        });

        if (!response.ok) {
            return null;
        }

        const json = await response.json();
        const galleries: any[] = json.data || [];

        // Check if we found a gallery
        if (galleries.length === 0) {
            return null;
        }

        const galleryName = galleries[0].name;

        // Step 2: Fetch full gallery details with specific fields
        const galleryDetailsUrl = `${base}/api/resource/${DOCTYPE}/${galleryName}?fields=${encodeURIComponent(
            JSON.stringify(GALLERY_FIELDS)
        )}`;

        const detailsResponse = await fetch(galleryDetailsUrl, {
            headers: {
                ...getAuthHeaders(),
            },
            next: { revalidate: 60 }
        });

        if (!detailsResponse.ok) {
            return null;
        }

        const detailsJson = await detailsResponse.json();
        const data = detailsJson.data;

        if (!data) return null;

        return mapToGalleryInterface(data);

    } catch (error) {
        console.error('Error fetching gallery by route:', error);
        return null;
    }
}

/**
 * Helper to map NextJS Page fields to Gallery interface
 */
function mapToGalleryInterface(data: any): Gallery {
    // Map child table 'nextjs_related_page' to 'gallery_sidebar' structure temporarily
    // The actual sidebar items need to be fetched fully, but here we just map what we have if needed, 
    // or we might handle it in getFullGallery. 
    // For now, let's just return the core fields. The Sidebar items are fetched separately in getFullGallery.
    
    return {
        name: data.name,
        title: data.title,
        seo_title: data.meta_title,
        small_description: data.meta_description,
        gallery_title: data.title, // Default logic: title serves as gallery_title
        keywords: data.keywords,
        gallery_category: "General", // Default as not in new doctype
        gallery_sub_category: "",
        route: data.route,
        content_type: data.content_type,
        content_md: data.content_md,
        description: data.content,
        youtube_link: data.youtube_link,
        svg_image: data.image, // Map image to svg_image (Tutorials.tsx uses svg_image)
        animated_image: data.animated_image,
        quote: "", // Not in new doctype
        creation: data.creation,
        modified: data.modified,
        // We store the raw related pages in a temporary property if we needed them, 
        // but 'Gallery' interface expects 'gallery_sidebar' to be fully populated items (or sidebar items).
        // Actual sidebar population happens in getFullGallery.
        gallery_sidebar: [] 
    };
}


/**
 * Fetches multiple galleries by their NAMES (since child table links by name/reference_name)
 * @param names - Array of gallery names (reference_name)
 * @returns Array of Gallery objects
 */
async function getGalleriesByNames(names: string[]): Promise<Gallery[]> {
    if (names.length === 0) return [];

    try {
        const base = BASE_URL || '';
        // We fetch by name, and ensure they are Galleries (though if linked, they should be)
        // We might not strictly need to filter by page_type="Gallery" if we trust the link,
        // but let's keep it safe or just fetch by name.
        const galleryPayload = `${base}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
            JSON.stringify([["name", "in", names]])
        )}&fields=${encodeURIComponent(JSON.stringify(GALLERY_FIELDS))}`;

        const response = await fetch(galleryPayload, {
            headers: {
                ...getAuthHeaders(),
            },
            next: { revalidate: 60 }
        });

        if (!response.ok) {
             console.error(`HTTP error! status: ${response.status}`);
             return [];
        }

        const json = await response.json();
        const data = json.data || [];

        return data.map((item: any) => mapToGalleryInterface(item));

    } catch (error) {
        console.error('Error fetching galleries by names:', error);
        return [];
    }
}

/**
 * Fetches gallery with sidebar items populated
 * @param route - The gallery route
 * @returns Simplified gallery data
 */
async function getFullGallery(route: string): Promise<Galleries | null> {
    const base = BASE_URL || '';
    
    // 1. Fetch the main gallery page
    // We use basic fetch here to get the raw data first including child table
    try {
         // Step 1: Get name first
        const routesToCheck = [route, `/${route}`, route.replace(/^\//, '')];
        const uniqueRoutes = [...new Set(routesToCheck)];

        const idRes = await fetch(`${base}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
            JSON.stringify([["route", "in", uniqueRoutes], ["page_type", "=", "Gallery"]])
        )}&fields=["name"]`, { headers: getAuthHeaders() });
        
        const idJson = await idRes.json();
        if (!idJson.data || idJson.data.length === 0) return null;
        const name = idJson.data[0].name;

        // Step 2: Fetch full doc including child table
        // We need 'nextjs_related_page' child table.
        const docRes = await fetch(`${base}/api/resource/${DOCTYPE}/${name}`, { headers: getAuthHeaders() });
        const docJson = await docRes.json();
        const doc = docJson.data;

        if (!doc) return null;

        const parentGallery = mapToGalleryInterface(doc);

        // 2. Extract related pages from child table
        // Child table field: nextjs_related_page
        // Columns: reference_name (Link to NextJS Page), title (optional override), etc.
        const relatedItems = doc.nextjs_related_page || [];
        const relatedNames: string[] = relatedItems.map((item: any) => item.reference_name).filter(Boolean);

        // 3. Fetch the related gallery pages
        const relatedGalleries = await getGalleriesByNames(relatedNames);

        // 4. Sort/Order them according to the child table order?
        // getGalleriesByNames might check arbitrary order. Let's map them back.
        const galleryMap = new Map<string, Gallery>();
        for (const g of relatedGalleries) {
            galleryMap.set(g.name, g);
        }

        const sortedGalleries: Gallery[] = [];
        for (const item of relatedItems) {
             const g = galleryMap.get(item.reference_name);
             if (g) {
                 // Potentially override title if provided in child table?
                 // For now, use the page's own title.
                 sortedGalleries.push(g);
             }
        }
        
        // Also populate parent.gallery_sidebar for the frontend to use
        // The interface defines gallery_sidebar as GallerySidebarItem[], but Tutorials.tsx seems to treat 'gallery_sidebar' in 'Galleries' object as 'Gallery[]' -> wait, let's check types.
        // types/gallery.d.ts:
        // interface Galleries { parent: Gallery, gallery_sidebar?: Gallery[] }
        // interface Gallery { ... gallery_sidebar?: GallerySidebarItem[] }
        
        // Tutorials.tsx uses `data.gallery_sidebar` (from Galleries interface). 
        // It says: const allItems = data?.gallery_sidebar || []
        // So we should return it in the Galleries object.

        return {
            parent: parentGallery,
            gallery_sidebar: sortedGalleries,
        };

    } catch (e) {
        console.error("Error in getFullGallery", e);
        return null;
    }
}


async function getGalleryRoutes(): Promise<string[]> {
    const base = BASE_URL || '';
    const galleryPayload = `${base}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
        JSON.stringify([["is_published", "=", 1], ["page_type", "=", "Gallery"]])
    )}&fields=${encodeURIComponent(
        JSON.stringify(["route"])
    )}&limit_page_length=100`;

    const response = await fetch(galleryPayload, {
        headers: {
            ...getAuthHeaders(),
        },
        next: { revalidate: 3600 }
    });
    if (!response.ok) {
        // throw new Error(`Failed to fetch gallery routes: ${response.statusText}`);
        console.error(`Failed to fetch gallery routes: ${response.statusText}`);
        return [];
    }

    const result = await response.json();
    return result.data.map((item: { route: string }) => item.route);
}

// Export functions
// We export getGalleriesByRoutes as alias to getGalleriesByNames or just keep it for compatibility if used elsewhere? 
// The interface export matches the old one?
// Old exports: getGalleryByRoute, getGalleriesByRoutes, getFullGallery, getGalleryRoutes
// We'll keep getGalleriesByRoutes but make it compatible or just partial.
// Actually, usage in other files:
// page.tsx uses: getFullGallery, getGalleryRoutes.
// It does NOT use getGalleryByRoute or getGalleriesByRoutes directly.
// So we are safe to just export what is needed, or keep signatures.

const getGalleriesByRoutes = async (routes: string[]) => {
    // Fallback or implementation if needed. 
    // Since we switched to name-based linking in the backend, fetching by routes is less efficient if we don't have names.
    // But if we have routes, we can fetch.
    if(routes.length === 0) return [];
     const base = BASE_URL || '';
        const galleryPayload = `${base}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
            JSON.stringify([["route", "in", routes], ["page_type", "=", "Gallery"]])
        )}&fields=${encodeURIComponent(JSON.stringify(GALLERY_FIELDS))}`;

       try {
        const response = await fetch(galleryPayload, { headers: getAuthHeaders() });
        const json = await response.json();
        return (json.data || []).map(mapToGalleryInterface);
       } catch { return []; }
}

export { getGalleryByRoute, getGalleriesByRoutes, getFullGallery, getGalleryRoutes };