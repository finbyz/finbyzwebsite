import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import StructureData from "@/components/seo/StructureData";


import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Sales Call Recording & Analysis in ERPNext | Automate Transcripts & Feedback with AI",
  description: "Record and analyze sales calls in ERPNext with AI. Get automated transcripts, actionable feedback, and improved outreach scripts to boost sales performance and coaching efficiency.",
  keywords: "",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/ai-sales-call-recording-and-analysis-in-erpnext",
  },
  openGraph: {
    title: "AI Sales Call Recording & Analysis in ERPNext | Automate Transcripts & Feedback with AI",
    description: "Record and analyze sales calls in ERPNext with AI. Get automated transcripts, actionable feedback, and improved outreach scripts to boost sales performance and coaching efficiency.",
    url: "https://finbyz.tech/ai-sales-call-recording-and-analysis-in-erpnext",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Call Recording & Analysis in ERPNext | Automate Transcripts & Feedback with AI",
    description: "Record and analyze sales calls in ERPNext with AI. Get automated transcripts, actionable feedback, and improved outreach scripts to boost sales performance and coaching efficiency.",
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
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Web Page", "ai-sales-call-recording-and-analysis-in-erpnext");
  const faqsGroup = await getFaqs("Web Page", "ai-sales-call-recording-and-analysis-in-erpnext");

  return (
    <>
      <main>
        {/* JSON-LD structured data for LLMs */}

        {/* Semantic HTML wrapper for better content extraction */}
        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="AI Sales Call Recording & Analysis in ERPNext | Automate Transcripts & Feedback with AI" />
          <meta itemProp="description" content="Record and analyze sales calls in ERPNext with AI. Get automated transcripts, actionable feedback, and improved outreach scripts to boost sales performance and coaching efficiency." />
        </article>
        {children}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
        {
          (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
        }
        <BusinessSlider />
        <StructureData name="ai-sales-call-recording-and-analysis-in-erpnext" type="webpage" />
      </main>

    </>
  );
}
