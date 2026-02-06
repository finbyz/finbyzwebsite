import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchFrappeSchemaData({
        name: "erpnext-agro",
        type: "webpage"
    })

    return {
        title: pageData?.data?.title || "ERPNext for Agriculture Industry | Finbyz Tech",
        description: pageData?.data?.description || "Revolutionize your agricultural operations and commodity trading with ERPNext. Specialized solutions for farm management, supply chain, and compliance.",
        keywords: pageData?.data?.keywords || "ERPNext Agriculture, Agro ERP, Commodity Trading Software, Farm Management System",
        authors: [{ "name": "FinByz Tech Pvt Ltd" }],
        creator: "FinByz Tech Pvt Ltd",
        publisher: "FinByz Tech Pvt Ltd",
        alternates: {
            "canonical": `${process.env.SITE_URL}/${pageData?.data?.route || 'erpnext/agro'}`,
        },
        openGraph: {
            title: pageData?.data?.seo_title || "ERPNext for Agriculture Industry",
            description: pageData?.data?.meta_description || "Specialized ERPNext solutions for the agriculture sector.",
            url: `${process.env.SITE_URL}/${pageData?.data?.route || 'erpnext/agro'}`,
            siteName: "Finbyz Tech",
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: pageData?.data?.seo_title || "ERPNext for Agriculture Industry",
            description: pageData?.data?.small_description || "Specialized ERPNext solutions for the agriculture sector.",
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
    const data = await getPageData("Web Page", "erpnext/agro");
    const faqsGroup = await getFaqs("Web Page", "erpnext/agro");

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
                <StructureData name="erpnext-agro" type="webpage" />
            </main>
        </>
    );
}
