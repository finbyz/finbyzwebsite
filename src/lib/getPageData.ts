/* eslint-disable @typescript-eslint/no-explicit-any */
const DOCTYPE = "NextJS Page";

export async function getPageData(route: string): Promise<FinbyzGalleryProps> {
    const links = await getLinks(route)

    // Get all NextJS Pages referenced in related_links
    const relatedPageNames = links.related_links.map(item => item.reference_name)
    const relatedPages = await getNextJSPages(relatedPageNames)

    // Get all NextJS Pages referenced in gallery_links
    const galleryPageNames = links.gallery_links.map(gallery => gallery.gallery)
    const galleryPages = await getNextJSPages(galleryPageNames)

    // Map gallery pages to GalleryItem format
    const galleryItems: GalleryItem[] = galleryPages.map(page => {
        return {
            name: page.name,
            description: page.meta_title || page.title || '',
            image: page.image || page.meta_image || '',
            reference_name: page.name,
            title: page.title,
            route: page.route,
            animated_gif: page.animated_image || ''
        }
    })

    // Map related pages to RelatedRead format
    const relatedReads: RelatedRead[] = relatedPages.map(page => {
        return {
            description: page.meta_title || page.content || '',
            image: page.image || page.meta_image || '',
            route: page.route,
            reference_name: page.name,
            title: page.title
        }
    })

    return {
        galleryItems,
        relatedReads,
    }
}


async function getLinks(route: string): Promise<Links> {
    const url = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
        JSON.stringify([["route", "=", route]])
    )}`;
    const response = await fetch(url, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
        cache: 'force-cache'
    });
    const jsonData = await response.json();
    if (!response.ok || jsonData?.data?.length == 0) {
        return {
            related_links: [],
            gallery_links: [],
        }
    }
    const ID = jsonData.data?.[0]['name'] || '';

    const docUrl = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}/${ID}`;
    const docResponse = await fetch(docUrl, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });
    const docJson = await docResponse.json()
    const doc = docJson['data']
    return {
        related_links: doc.nextjs_related_page || [],
        gallery_links: doc.gallery_links || [],
    }
}

async function getNextJSPages(names: string[]): Promise<NextJSPageData[]> {
    if (names.length === 0) return [];

    const pagePayload = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(JSON.stringify([
        ["name", "in", names]
    ]))}&fields=${encodeURIComponent(JSON.stringify([
        "name",
        "route",
        "title",
        "meta_title",
        "content",
        "image",
        "meta_image",
        "animated_image"
    ]))}`;

    const pagesResponse = await fetch(pagePayload, {
        headers: {
            Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });

    const pagesJson = await pagesResponse.json();
    const pagesData: NextJSPageData[] = pagesJson.data || [];

    return pagesData.map(page => {
        return {
            name: page.name,
            route: page.route,
            title: page.title,
            meta_title: page.meta_title,
            content: page.content,
            image: page.image || page.meta_image || '',
            meta_image: page.meta_image,
            animated_image: page.animated_image
        }
    })
}


export async function getFaqs(route: string): Promise<FAQGroup | null> {
    try {
        const frappeUrl = process.env.FRAPPE_URL;

        const docResponse = await fetch(
            `${frappeUrl}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
                JSON.stringify([["route", "=", route]])
            )}`,
            {
                headers: {
                    "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
                },
            }
        );

        const docJson = await docResponse.json();
        const docData = docJson.data?.[0];
        if (!docData) return null;

        const fullDocResponse = await fetch(
            `${frappeUrl}/api/resource/${DOCTYPE}/${docData.name}`,
            {
                headers: {
                    "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
                },
            }
        );

        const fullDocJson = await fullDocResponse.json();
        const data = fullDocJson.data;

        if (!data) return null;

        const faqs = (data.faqs || []).map((faq: any): FAQ => ({
            id: faq.idx,
            name: faq.name,
            question: faq.question,
            answer: faq.answer,
        }));

        return {
            name: data.name,
            faqs: faqs,
        };
    } catch (error) {
        console.error("FAQ fetch error:", error);
        return null;
    }
}

// Type definitions
interface NextJSPageData {
    name: string;
    route: string;
    title: string;
    meta_title?: string;
    content?: string;
    image?: string;
    meta_image?: string;
    animated_image?: string;
}

interface Links {
    related_links: any[];
    gallery_links: any[];
}

interface GalleryItem {
    name: string;
    description: string;
    image: string;
    reference_name: string;
    title: string;
    route: string;
    animated_gif: string;
}

interface RelatedRead {
    description: string;
    image: string;
    route: string;
    reference_name: string;
    title: string;
}

interface FinbyzGalleryProps {
    galleryItems: GalleryItem[];
    relatedReads: RelatedRead[];
}

interface FAQ {
    id: number;
    name: string;
    question: string;
    answer: string;
}

interface FAQGroup {
    name: string;
    faqs: FAQ[];
}