import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "n8n/insights/n8n-vs-zapier-vs-make-comparison";
const PAGE_ROUTE = "ai-automation/insights/n8n-vs-zapier-vs-make-comparison";

export const metadata: Metadata = {
    title: "n8n vs Zapier vs Make: The 2026 Workflow Automation Showdown | Reviews & Pricing",
    description:
        "Updated Jan 2026: Compare n8n, Zapier, and Make. New pricing analysis, AI agent features, and self-hosting guide. Find the best workflow automation tool.",
    keywords:
        "n8n vs zapier, n8n vs make, zapier vs make, workflow automation comparison 2026, n8n review, zapier alternatives, make automation, best workflow automation tool, workflow automation news, n8n 2.0, zapier ai agents",
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
        canonical: `https://finbyz.tech/${PAGE_ROUTE}`,
    },
    openGraph: {
        title: "n8n vs Zapier vs Make: The 2026 Workflow Automation Showdown",
        description:
            "In-depth comparison of n8n, Zapier, and Make. Learn about AI agent orchestration, self-hosting, pricing models, and which platform fits your automation needs.",
        url: `https://finbyz.tech/${PAGE_ROUTE}`,
        siteName: "Finbyz Tech",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "/images/ai-automation.jpeg",
                width: 1200,
                height: 630,
                alt: "n8n vs Zapier vs Make Comparison 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "n8n vs Zapier vs Make: The 2026 Workflow Automation Showdown",
        description:
            "Compare the top workflow automation platforms. n8n open-source power vs Zapier integrations vs Make visual logic.",
        creator: "@finbyz",
        images: ["/images/ai-automation.jpeg"],
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

