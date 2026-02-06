import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchFrappeSchemaData({
        name: "erpnext-implementation-service",
        type: "webpage"
    })

    return {
        title: pageData?.data?.title || "ERPNext Implementation Services | FinByz Tech",
        description: pageData?.data?.description || "Expert ERPNext implementation services by FinByz Tech. Ensure a seamless transition with our certified implementation process.",
        keywords: pageData?.data?.keywords || "ERPNext Implementation, ERP Implementation, ERPNext Partner, ERPNext Services",
        authors: [{ "name": "FinByz Tech Pvt Ltd" }],
        creator: "FinByz Tech Pvt Ltd",
        publisher: "FinByz Tech Pvt Ltd",
        alternates: {
            "canonical": `${process.env.SITE_URL}/${pageData?.data?.route || "erpnext/services/erpnext-implementation-service"}`,
        },
        openGraph: {
            title: pageData?.data?.seo_title || "ERPNext Implementation Services",
            description: pageData?.data?.meta_description || "Expert ERPNext implementation services for your business.",
            url: `${process.env.SITE_URL}/${pageData?.data?.route || "erpnext/services/erpnext-implementation-service"}`,
            siteName: "Finbyz Tech",
            type: "website",
            locale: "en_US",
            images: [{ url: `${process.env.NEXT_PUBLIC_ERP_URL}/web-api/fb/n/${pageData?.data?.meta_image || pageData?.data?.svg_image || pageData?.data?.image || pageData?.data?.animated_image}`, width: 1200, height: 630, alt: pageData?.data?.seo_title || "ERPNext Implementation" }],
        },
        twitter: {
            card: "summary_large_image",
            title: pageData?.data?.seo_title || "ERPNext Implementation Services",
            description: pageData?.data?.small_description || "Professional ERPNext implementation services.",
            creator: "@finbyz",
            images: [`${process.env.NEXT_PUBLIC_ERP_URL}/web-api/fb/n/${pageData?.data?.meta_image}`],
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
    const data = await getPageData("Web Page", "erpnext/services/erpnext-implementation-service");
    const faqsGroup = await getFaqs("Web Page", "erpnext/services/erpnext-implementation-service");

    return (
        <>
            <main>
                {children}
                {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
                {
                    (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
                }
                <BusinessSlider />
                <StructureData name="erpnext-implementation-service" type="webpage" />

            </main>

        </>
    );
}
