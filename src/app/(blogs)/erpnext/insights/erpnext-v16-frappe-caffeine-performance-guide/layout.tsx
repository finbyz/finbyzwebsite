import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Header from "@/components/layout/header";
import InquiryForm from "@/components/ui/InquiryForm";

const PAGE_SLUG = "erpnext/insights/erpnext-v16-frappe-caffeine-performance-guide";
const PAGE_ROUTE = `erpnext/insights/${PAGE_SLUG}`;

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchFrappeSchemaData({
        name: PAGE_SLUG,
        type: "blog"
    });

    return {
        title: pageData?.data?.title || 'ERPNext v16 Performance Guide',
        description: pageData?.data?.description || 'Deep-dive technical guide on Frappe Caffeine architecture.',
        keywords: pageData?.data?.keywords || 'ERPNext v16, Frappe Caffeine, Performance, Redis',
        openGraph: {
            title: pageData?.data?.seo_title || pageData?.data?.title || 'ERPNext v16 Performance Guide',
            description: pageData?.data?.meta_description || 'Deep-dive technical guide on Frappe Caffeine architecture.',
            type: 'article',
            images: [
                {
                    url: pageData?.data?.meta_image ? `${process.env.FRAPPE_URL}/${pageData.data.meta_image}` : '/images/og-default.jpg',
                    width: 1200,
                    height: 630,
                    alt: pageData?.data?.title,
                },
            ],
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
}

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const faqsGroup = await getFaqs("Blog Post", PAGE_SLUG);
    const data = await getPageData("Blog Post", PAGE_SLUG);

    return (
        <>
            <Header />
            <main>
                {children}
                {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
                {
                    (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
                }
                <LazyBusinessSlider />
                <StructureData name={PAGE_SLUG} type="blog" />
                <InquiryForm />
            </main>
        </>
    );
}
