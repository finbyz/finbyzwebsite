import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Header from "@/components/layout/header";
import InquiryForm from "@/components/ui/InquiryForm";

const PAGE_SLUG = "erpnext/insights/whats-new-erpnext-version-16";
const PAGE_ROUTE = "erpnext/insights/whats-new-erpnext-version-16";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchFrappeSchemaData({
        name: PAGE_SLUG,
        type: "blog"
    });
    return {
        title: pageData?.data?.title || "What's New in ERPNext Version 16: Complete Feature Guide",
        description: pageData?.data?.description || "Comprehensive guide to ERPNext v16 features including 2x performance with Frappe Caffeine, redesigned UI, stock reservation, MRP enhancements, and HRMS v16.",
        keywords: pageData?.data?.keywords || "ERPNext v16, ERPNext version 16 features, Frappe Caffeine, ERPNext 2026, ERPNext upgrade",
        authors: [{ "name": "FinByz Tech Pvt Ltd" }],
        creator: "FinByz Tech Pvt Ltd",
        publisher: "FinByz Tech Pvt Ltd",
        alternates: {
            "canonical": `${process.env.SITE_URL}/${PAGE_ROUTE}`,
        },
        openGraph: {
            title: pageData?.data?.seo_title || "What's New in ERPNext Version 16: Complete Feature Guide",
            description: pageData?.data?.meta_description || "Discover all the new features in ERPNext v16 - 2x faster performance, modern UI, stock reservation, and more.",
            url: `${process.env.SITE_URL}/${PAGE_ROUTE}`,
            siteName: "Finbyz Tech",
            type: "article",
            locale: "en_US",
            images: [{ url: `${process.env.FRAPPE_URL}/${pageData?.data?.meta_image}`, width: 1200, height: 630, alt: "ERPNext Version 16 Features" }],
        },
        twitter: {
            card: "summary_large_image",
            title: pageData?.data?.seo_title || "What's New in ERPNext Version 16",
            description: pageData?.data?.small_description || "Complete guide to ERPNext v16 features and improvements",
            creator: "@finbyz",
            images: [`${process.env.FRAPPE_URL}/${pageData?.data?.meta_image}`],
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

const faqsGroup = await getFaqs("Blog Post", PAGE_SLUG);

export default async function Layout({ children }: { children: React.ReactNode }) {
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
