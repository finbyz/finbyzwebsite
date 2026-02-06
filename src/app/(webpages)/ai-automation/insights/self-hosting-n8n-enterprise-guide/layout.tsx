import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "ai-automation/insights/self-hosting-n8n-enterprise-guide";
const PAGE_ROUTE = "ai-automation/insights/self-hosting-n8n-enterprise-guide";

export const metadata: Metadata = {
    title: "Self-Hosting n8n in 2026: The Complete Enterprise Guide",
    description:
        "Take full control of your workflow automation data. Learn how to deploy, secure, and maintain a self-hosted n8n instance that meets enterprise compliance requirements.",
    keywords:
        "n8n self-hosting, n8n data sovereignty, enterprise automation, n8n docker setup, n8n security, gdpr compliant automation, n8n vs cloud",
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
        canonical: `https://finbyz.tech/${PAGE_ROUTE}`,
    },
    openGraph: {
        title: "Self-Hosting n8n in 2026: The Complete Enterprise Guide",
        description:
            "Take full control of your workflow automation data. Learn how to deploy, secure, and maintain a self-hosted n8n instance.",
        url: `https://finbyz.tech/${PAGE_ROUTE}`,
        siteName: "Finbyz Tech",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "/images/AI_ERP.jpg",
                width: 1200,
                height: 630,
                alt: "Self-Hosting n8n Enterprise Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Self-Hosting n8n in 2026: The Complete Enterprise Guide",
        description:
            "Take full control of your workflow automation data. Learn how to deploy, secure, and maintain a self-hosted n8n instance.",
        creator: "@finbyz",
        images: ["/images/AI_ERP.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs("Blog Post", PAGE_SLUG);
    const data = await getPageData("Blog Post", PAGE_SLUG);

    return (
        <>
            <main>
                {children}
                {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
                {(data.galleryItems.length > 0 || data.relatedReads.length > 0) ? (
                    <FinbyzGallery
                        relatedReads={data.relatedReads}
                        galleryItems={data.galleryItems}
                    />
                ) : null}
                <LazyBusinessSlider />
                <StructureData name={PAGE_SLUG} type="blog" />
            </main>
        </>
    );
}
