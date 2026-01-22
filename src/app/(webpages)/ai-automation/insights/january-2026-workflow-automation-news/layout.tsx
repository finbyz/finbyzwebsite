import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "ai-automation/insights/january-2026-workflow-automation-news";
const PAGE_ROUTE = "ai-automation/insights/january-2026-workflow-automation-news";

export const metadata: Metadata = {
    title: "Workflow Automation News: Zapier AI, n8n 2.0 & Make Updates (January 2026)",
    description:
        "Breaking: Zapier launches AI Agents, n8n 2.0 adds Autosave & LangChain support, and Make introduces Enterprise Grid. Read the full January 2026 report.",
    keywords:
        "zapier news today, zapier new features january 2026, n8n updates, n8n 2.0, make.com new features, workflow automation news, zapier ai updates, n8n autosave, n8n langchain",
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
        canonical: `https://finbyz.tech/${PAGE_ROUTE}`,
    },
    openGraph: {
        title: "Workflow Automation News: Zapier AI, n8n 2.0 & Make Updates (January 2026)",
        description:
            "Get the latest January 2026 updates on Zapier, n8n, and Make. New features, pricing changes, and AI capabilities explained.",
        url: `https://finbyz.tech/${PAGE_ROUTE}`,
        siteName: "Finbyz Tech",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "/images/ai-automation.jpeg",
                width: 1200,
                height: 630,
                alt: "January 2026 Workflow Automation News",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Workflow Automation News: Zapier AI, n8n 2.0 & Make Updates",
        description:
            "Breaking news on Zapier, n8n, and Make. January 2026 updates inside.",
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

const faqsGroup = await getFaqs("Blog Post", PAGE_SLUG);

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
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
