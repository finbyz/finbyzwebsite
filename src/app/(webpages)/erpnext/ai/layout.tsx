import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchFrappeSchemaData({
        name: "erpnext-ai",
        type: "webpage"
    })

    return {
        title: pageData?.data?.title || "ERPNext + AI: Intelligent Enterprise Automation | Finbyz Tech",
        description: pageData?.data?.description || "Transform your business with AI-powered ERPNext solutions. Intelligent lead generation, automated recruitment, and smart data extraction.",
        keywords: pageData?.data?.keywords || "ERPNext AI, Artificial Intelligence ERP, Automated Workflows, AI Lead Gen, Resume Ranker",
        authors: [{ "name": "FinByz Tech Pvt Ltd" }],
        creator: "FinByz Tech Pvt Ltd",
        publisher: "FinByz Tech Pvt Ltd",
        alternates: {
            "canonical": `${process.env.SITE_URL}/${pageData?.data?.route || 'erpnext/ai'}`,
        },
        openGraph: {
            title: pageData?.data?.seo_title || "ERPNext + AI: Intelligent Enterprise Automation",
            description: pageData?.data?.meta_description || "Supercharge your ERPNext with cutting-edge AI integrations.",
            url: `${process.env.SITE_URL}/${pageData?.data?.route || 'erpnext/ai'}`,
            siteName: "Finbyz Tech",
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: pageData?.data?.seo_title || "ERPNext + AI: Intelligent Enterprise Automation",
            description: pageData?.data?.small_description || "Supercharge your ERPNext with cutting-edge AI integrations.",
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
    const data = await getPageData("Web Page", "erpnext/ai");
    const faqsGroup = await getFaqs("Web Page", "erpnext/ai");

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
                <StructureData name="erpnext-ai" type="webpage" />
            </main>
        </>
    );
}
