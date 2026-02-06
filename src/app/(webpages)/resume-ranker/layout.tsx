import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Resume Ranker | AI Powered Recruitment Tool by FinByz Tech",
    description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
    keywords: "Resume Ranker, AI Recruitment, Resume Scoring, Automated Hiring, ERPNext HR",
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
        canonical: "https://finbyz.tech/resume-ranker",
    },
    openGraph: {
        title: "Resume Ranker | AI Powered Recruitment Tool by FinByz Tech",
        description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
        url: "https://finbyz.tech/resume-ranker",
        siteName: "Finbyz Tech",
        type: "website",
        locale: "en_US",

    },
    twitter: {
        card: "summary_large_image",
        title: "Resume Ranker | AI Powered Recruitment Tool by FinByz Tech",
        description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
        creator: "@finbyz",

    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    const structuredData = {
        "@context": "http://www.schema.org",
        "@type": "SoftwareApplication",
        "name": "Resume Ranker",
        "url": "https://finbyz.tech/resume-ranker",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "logo": "https://finbyz.tech/files/FinbyzLogo.png",
        "image": "https://finbyz.tech/AI_Powered_Resume_Ranker.gif",
        "description": "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
        "author": {
            "@type": "Organization",
            "name": "FinByz Tech Pvt Ltd",
            "url": "https://finbyz.tech"
        }
    };
    // Attempt to fetch data if it exists, otherwise these might return defaults or empty
    const data = await getPageData("Web Page", "resume-ranker");
    const faqsGroup = await getFaqs("Web Page", "resume-ranker");

    return (
        <>
            {/* JSON-LD structured data for LLMs */}
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            {/* Semantic HTML wrapper for better content extraction */}
            <article itemScope itemType="https://schema.org/WebPage">
                <meta itemProp="name" content="Resume Ranker | AI Powered Recruitment Tool by FinByz Tech" />
                <meta itemProp="description" content="Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making." />
            </article>
            {children}
            {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
            {
                (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
            }
            <BusinessSlider />
        </>
    );
}
