
interface GalleryItem {
    name: string
    route : string
    image: string
    animated_gif: string
}

interface RelatedRead {
    route: string
    description: string
    image: string
    title: string
    reference_name: string
}

interface FinbyzGalleryProps {
    galleryItems: GalleryItem[]
    relatedReads: RelatedRead[]
}

export async function getPageData(route: string): Promise<FinbyzGalleryProps> {
    const url = `${process.env.FRAPPE_URL}/api/resource/Web Page?filters=${encodeURIComponent(
        JSON.stringify([["route", "=", route]])
    )}`;
    const response = await fetch(url, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });
    const jsonData = await response.json();
    const webpageID = jsonData.data?.[0]['name'] || {};

    const webpageUrl = `${process.env.FRAPPE_URL}/api/resource/Web Page/${webpageID}`;
    const webpageResponse = await fetch(webpageUrl, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });
    const webpage = await webpageResponse.json()
    const doc = webpage['data']

    let galleryItems = (doc.gallery_links || []).map((g: any) => ({
        name: g.gallery,
        route: null,
        title: g.title || "",
        image: null,
        animated_gif: null,
    }));

    // Prepare URL to fetch detailed gallery info
    const galleryUrl = `${process.env.FRAPPE_URL}/api/resource/Gallery?filters=${encodeURIComponent(
        JSON.stringify([["name", "in", galleryItems.map((item: GalleryItem) => item.name)]]))}
        &fields=${JSON.stringify(["name", "route", "svg_image", "animated_image"])}`;

        // Fetch gallery data
        const galleryResponse = await fetch(galleryUrl, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });

    const galleryData = await galleryResponse.json();
    const galleryList = galleryData.data || [];

    // Update galleryItems with fetched data
    galleryItems = galleryItems.map((item: { name: string }) => {
    const galleryInfo = galleryList.find((g: { name: string }) => g.name === item.name);
    if (galleryInfo) {
        return {
        ...item,
        route: galleryInfo.route,
        image: galleryInfo.svg_image,
        animated_gif: galleryInfo.animated_image,
        };
    }
    return item; // keep original if no match found
    });

    const relatedReads = (doc.related_links || []).map((rl: any) => ({
        route: rl.route || "",
        description: rl.description || "",
        image: rl.image || "",
        title: rl.title || "",
    }));

    return {
        galleryItems,
        relatedReads,
    };
}
