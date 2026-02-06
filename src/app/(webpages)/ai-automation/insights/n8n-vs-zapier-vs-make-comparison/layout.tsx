import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "ai-automation/insights/n8n-vs-zapier-vs-make-comparison";
const PAGE_ROUTE = "ai-automation/insights/n8n-vs-zapier-vs-make-comparison";

export const metadata: Metadata = {
    title: "n8n vs Zapier vs Make: The 2026 Workflow Automation Showdown",
    description:
        "Choosing the right workflow automation platform? Compare n8n, Zapier, and Make across features, pricing, AI capabilities, and self-hosting options.",
    keywords:
        "n8n vs zapier vs make, workflow automation comparison 2026, zapier alternative, make alternative, n8n review, best automation tool",
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
        canonical: `https://finbyz.tech/${PAGE_ROUTE}`,
    },
    openGraph: {
        title: "n8n vs Zapier vs Make: The 2026 Workflow Automation Showdown",
        description:
            "Compare n8n, Zapier, and Make. Find out which platform wins on features, pricing, and AI capabilities for your business.",
        url: `https://finbyz.tech/${PAGE_ROUTE}`,
        siteName: "Finbyz Tech",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "/images/AI_ERP.jpg",
                width: 1200,
                height: 630,
                alt: "n8n vs Zapier vs Make Comparison",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "n8n vs Zapier vs Make: 2026 Comparison",
        description:
            "Which automation tool is best for you? We compare n8n, Zapier, and Make in our 2026 showdown.",
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
