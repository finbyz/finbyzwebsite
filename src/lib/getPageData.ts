
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
        primaryButton: {
            text: pageDetails.primary_button_text || 'Book Demo',
            icon: pageDetails.primary_button_icon || 'CalendarCheck',
            action: pageDetails.primary_button_action || '/contact',
        },
        secondaryButton: {
            text: pageDetails.secondary_button_text || 'Get Proposal',
            icon: pageDetails.secondary_button_icon || 'FileText',
            action: pageDetails.secondary_button_action || '/contact',
        },
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