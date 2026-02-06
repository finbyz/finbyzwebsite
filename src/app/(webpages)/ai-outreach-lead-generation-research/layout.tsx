import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchFrappeSchemaData({
        name: "ai-outreach-lead-generation-research",
        type: "webpage"
    })

    return {
        title: pageData?.data?.title || "AI Outreach & Lead Generation Research | Finbyz Tech",
        description: pageData?.data?.description || "Supercharge your sales with AI-driven lead research and automated outreach. Scale personalization and boost conversion with our intelligent workflows.",
        keywords: pageData?.data?.keywords || "AI Outreach, Lead Generation Research, Apollo Automation, AI Email Drafting",
        authors: [{ "name": "FinByz Tech Pvt Ltd" }],
        creator: "FinByz Tech Pvt Ltd",
        publisher: "FinByz Tech Pvt Ltd",
        alternates: {
            "canonical": `${process.env.SITE_URL}/${pageData?.data?.route || 'ai-outreach-lead-generation-research'}`,
        },
        openGraph: {
            title: pageData?.data?.seo_title || "AI Outreach & Lead Generation Research",
            description: pageData?.data?.meta_description || "Scale your outreach with AI-powered research and automated drafting.",
            url: `${process.env.SITE_URL}/${pageData?.data?.route || 'ai-outreach-lead-generation-research'}`,
            siteName: "Finbyz Tech",
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: pageData?.data?.seo_title || "AI Outreach & Lead Generation Research",
            description: pageData?.data?.small_description || "Scale your outreach with AI-powered research and automated drafting.",
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
    }
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    const data = await getPageData("Web Page", "ai-outreach-lead-generation-research");
    const faqsGroup = await getFaqs("Web Page", "ai-outreach-lead-generation-research");

    return (
        <>
            <main>
                {children}
                {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
                {
                    (data.galleryItems.length > 0 || data.relatedReads.length > 0) ?
                        <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
                }
                <BusinessSlider />
                <StructureData name="ai-outreach-lead-generation-research" type="webpage" />
            </main>
        </>
    );
}
