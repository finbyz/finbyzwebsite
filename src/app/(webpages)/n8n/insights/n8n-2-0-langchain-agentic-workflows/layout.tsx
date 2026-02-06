import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "n8n/insights/n8n-2-0-langchain-agentic-workflows";
const PAGE_ROUTE = "n8n/insights/n8n-2-0-langchain-agentic-workflows";

export const metadata: Metadata = {
    title: "Building Agentic Workflows with n8n 2.0 & LangChain | 2026 Guide",
    description:
        "Master n8n 2.0: Learn how to build autonomous AI agents using LangChain nodes, the new Tool Node, and persistent memory. Complete guide for developers.",
    keywords:
        "n8n 2.0, n8n langchain, agentic workflows, n8n ai agents, n8n tutorial 2026, langchain n8n integration, n8n tool node, autonomous agents n8n",
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
        canonical: `https://finbyz.tech/${PAGE_ROUTE}`,
    },
    openGraph: {
        title: "Building Agentic Workflows with n8n 2.0 & LangChain",
        description:
            "A deep dive into creating intelligent, autonomous agents with n8n 2.0 and LangChain. Learn about chains, memory, and tools.",
        url: `https://finbyz.tech/${PAGE_ROUTE}`,
        siteName: "Finbyz Tech",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "/images/ai-automation.jpeg",
                width: 1200,
                height: 630,
                alt: "n8n 2.0 and LangChain Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Building Agentic Workflows with n8n 2.0 & LangChain",
        description:
            "Master n8n 2.0's new AI capabilities. Full guide to LangChain and Agent nodes.",
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
