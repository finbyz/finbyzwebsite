
const DOCTYPE = "NextJS Page";

export async function getPageData(route: string): Promise<FinbyzGalleryProps> {
    const relatedLinks = await getRelatedLinks(route)
    // Fetch full page data for each related page
    const relatedPageNames = relatedLinks.map((item: any) => item.page)
    const relatedPages = await getNextJSPages(relatedPageNames)
    const relatedReads: RelatedRead[] = relatedPages.map(page => {
        return {
            description: page.meta_title || page.content || '',
            image: page.image || '',
            route: page.route,
            reference_name: page.name,
            title: page.title
        }
    })

    return { relatedReads }
}


async function getRelatedLinks(route: string): Promise<any[]> {
    const url = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
        JSON.stringify([["actual_route", "=", route]])
    )}`;
    const response = await fetch(url, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
        // cache: 'force-cache'
    });
    const jsonData = await response.json();
    if (!response.ok || jsonData?.data?.length == 0) {
        return []
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
    return doc.nextjs_related_page || []
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
            image: page.image || '',
            animated_image: page.animated_image
        }
    })
}


export async function getFaqs(route: string): Promise<FAQGroup | null> {
    try {
        const frappeUrl = process.env.FRAPPE_URL;

        const docResponse = await fetch(
            `${frappeUrl}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
                JSON.stringify([["actual_route", "=", route]])
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
    animated_image?: string;
}

interface RelatedRead {
    description: string;
    image: string;
    route: string;
    reference_name: string;
    title: string;
}

interface FinbyzGalleryProps {
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