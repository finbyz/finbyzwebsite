import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "n8n/insights/self-hosting-n8n-enterprise-guide";
const PAGE_ROUTE = "ai-automation/insights/self-hosting-n8n-enterprise-guide";

export const metadata: Metadata = {
  title: "Self-Hosting n8n in 2026: The Complete Enterprise Guide to Data Sovereignty | Finbyz Tech",
  description:
    "Learn how to self-host n8n for complete data sovereignty. Covers Docker deployment, Kubernetes setup, GDPR/HIPAA compliance, security hardening, and cost analysis vs cloud platforms.",
  keywords:
    "self-host n8n, n8n self-hosted setup, n8n docker, n8n kubernetes, n8n data privacy, n8n GDPR, n8n enterprise, n8n on-premise, n8n security",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `https://finbyz.tech/${PAGE_ROUTE}`,
  },
  openGraph: {
    title: "Self-Hosting n8n in 2026: Complete Enterprise Guide",
    description:
      "Master n8n self-hosting for data sovereignty. Docker, Kubernetes, compliance, security, and cost analysis compared to cloud platforms.",
    url: `https://finbyz.tech/${PAGE_ROUTE}`,
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "/images/ai-automation.jpeg",
        width: 1200,
        height: 630,
        alt: "Self-Hosting n8n Enterprise Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Hosting n8n in 2026: Complete Enterprise Guide",
    description:
      "Complete guide to self-hosting n8n. Data sovereignty, Docker deployment, GDPR compliance, and cost analysis.",
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
