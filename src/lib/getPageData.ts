
const DOCTYPE = "NextJS Page";

export async function getPageData(route: string): Promise<FinbyzGalleryProps> {
    const pageDetails = await getRelatedLinks(route);
    const relatedLinks = pageDetails.relatedLinks;

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

    const showInquiryForm = pageDetails.show_inquiry_form ?? false;
    const showBusinessSlider = pageDetails.show_business_slider ?? false;
    const ctaLink = pageDetails.cta_link;

    const ctaData: CTAData = {
        show_cta: pageDetails?.show_cta ?? false,
        subheading: {
            text: pageDetails.subheading || 'Talk to our Experts',
            icon: pageDetails.sub_heading_icon || 'CalendarCheck',
        },
        highlightText: pageDetails.highlight_text || '',
        title: pageDetails.cta_title || 'Ready to Scale with Smart Tech? Let\'s Talk.',
        description: pageDetails.cta_description || 'Transform your business processes with AI-powered automation and expert implementation.',
        primaryButton: (pageDetails.primary_button_text || pageDetails.primary_button_icon || pageDetails.primary_button_action)
            ? {
                text: pageDetails.primary_button_text || undefined,
                icon: pageDetails.primary_button_icon || undefined,
                action: pageDetails.primary_button_action || undefined,
            }
            : undefined,
        secondaryButton: (pageDetails.secondary_button_text || pageDetails.secondary_button_icon || pageDetails.secondary_button_action)
            ? {
                text: pageDetails.secondary_button_text || undefined,
                icon: pageDetails.secondary_button_icon || undefined,
                action: pageDetails.secondary_button_action || undefined,
            }
            : undefined,
        trustIndicator: {
            text: pageDetails.trust_indicator_text || 'Trusted by 100+ businesses',
            icon: pageDetails.trust_indicator_icon || 'CalendarCheck',
        },
    };

    return { relatedReads, showInquiryForm, showBusinessSlider, ctaLink, ctaData }
}


interface PageDataResult {
    relatedLinks: any[];
    cta_link?: string;
    show_cta?: boolean;
    show_business_slider?: boolean;
    show_inquiry_form?: boolean;
    // CTA content fields
    subheading?: string;
    sub_heading_icon?: string;
    highlight_text?: string;
    cta_title?: string;
    cta_description?: string;
    primary_button_text?: string;
    primary_button_icon?: string;
    primary_button_action?: string;
    secondary_button_text?: string;
    secondary_button_icon?: string;
    secondary_button_action?: string;
    trust_indicator_text?: string;
    trust_indicator_icon?: string;
}

async function getRelatedLinks(route: string): Promise<PageDataResult> {
    const url = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
        JSON.stringify([["actual_route", "=", route]])
    )}`;
    const response = await fetch(url, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
        next: {
            revalidate: 3600
        },
    });
    const jsonData = await response.json();
    if (!response.ok || jsonData?.data?.length == 0) {
        return { relatedLinks: [] }
    }
    const ID = jsonData.data?.[0]['name'] || '';

    const docUrl = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}/${ID}`;
    const docResponse = await fetch(docUrl, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
        next: {
            revalidate: 3600
        },
    });
    const docJson = await docResponse.json()
    const doc = docJson['data']
    return {
        relatedLinks: doc.nextjs_related_page || [],
        cta_link: doc.cta_link,
        show_cta: doc.show_cta,
        show_business_slider: doc.show_business_slider,
        show_inquiry_form: doc.show_inquiry_form,
        // CTA content fields
        subheading: doc.subheading,
        sub_heading_icon: doc.sub_heading_icon,
        highlight_text: doc.highlight_text,
        cta_title: doc.cta_title,
        cta_description: doc.cta_description,
        primary_button_text: doc.primary_button_text,
        primary_button_icon: doc.primary_button_icon,
        primary_button_action: doc.primary_button_action,
        secondary_button_text: doc.secondary_button_text,
        secondary_button_icon: doc.secondary_button_icon,
        secondary_button_action: doc.secondary_button_action,
        trust_indicator_text: doc.trust_indicator_text,
        trust_indicator_icon: doc.trust_indicator_icon,
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
        "animated_image",
        "show_inquiry_form",
        "show_business_slider"
    ]))}`;

    const pagesResponse = await fetch(pagePayload, {
        headers: {
            Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
        next: {
            revalidate: 3600
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
            animated_image: page.animated_image,
            showInquiryForm: page.show_inquiry_form ?? false,
            showBusinessSlider: page.show_business_slider ?? true
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
                next: {
                    revalidate: 3600
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
                next: {
                    revalidate: 3600
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

export interface HeroImageData {
    image: string | null;
    animated_image: string | null;
}

/**
 * Fetches the hero image fields (image, animated_image) for a page from
 * the "NextJS Page" DocType using its actual_route.
 * Returns null values when the page is not found or the request fails.
 */
const normalizeUrl = (value: string | null | undefined): string | null => {
    if (!value || !value.trim()) return null;
    return value.startsWith('http') ? value : `${process.env.FRAPPE_URL}${value}`;
};

export async function getHeroImageFromERP(): Promise<HeroImageData> {
    try {
        const { headers } = await import('next/headers');
        const headersList = await headers();
        const pathname = headersList.get('x-pathname') || '/';
        const route = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

        const url = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(
            JSON.stringify([["actual_route", "=", route]])
        )}&fields=${encodeURIComponent(JSON.stringify(["name", "image", "animated_image"]))}`;

        const response = await fetch(url, {
            headers: {
                "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
            },
            next: { revalidate: 3600 },
        });

        if (!response.ok) return { image: null, animated_image: null };

        const json = await response.json();
        const doc = json?.data?.[0];
        if (!doc) return { image: null, animated_image: null };

        const image = typeof doc.image === 'string' && doc.image.trim() ? doc.image.trim() : null;
        const animatedImage = typeof doc.animated_image === 'string' && doc.animated_image.trim()
            ? doc.animated_image.trim()
            : null;

        const isLogoOrInvalid =
            image &&
            (
                image.includes("FinByz Logo 2025 copy.png") ||
                image.toLowerCase().includes("logo")
            );

        return {
            image: isLogoOrInvalid ? null : normalizeUrl(image),
            animated_image: normalizeUrl(animatedImage),
        };
    } catch (error) {
        console.error('error found', error);
        return { image: null, animated_image: null };
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
    show_inquiry_form?: boolean;
    show_business_slider?: boolean;
    showInquiryForm?: boolean;
    showBusinessSlider?: boolean;
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
    showInquiryForm: boolean;
    showBusinessSlider: boolean;
    ctaLink?: string;
    ctaData?: CTAData;
}

export interface CTAData {
    show_cta?: boolean;
    subheading?: {
        text?: string;
        icon?: string;
    };
    highlightText?: string;
    title?: string;
    description?: string;
    primaryButton?: {
        text?: string;
        icon?: string;
        action?: string;
    };
    secondaryButton?: {
        text?: string;
        icon?: string;
        action?: string;
    };
    trustIndicator?: {
        text?: string;
        icon?: string;
    };
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