import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import StructureData from "@/components/seo/StructureData";



import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Powered Lead Generation and Email Outreach",
  description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates",
  keywords: "",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/ai-powered-lead-generation-and-email-outreach",
  },
  openGraph: {
    title: "AI-Powered Lead Generation and Email Outreach",
    description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates",
    url: "https://finbyz.tech/ai-powered-lead-generation-and-email-outreach",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Lead Generation and Email Outreach",
    description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates",
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
  const data = await getPageData("Web Page", "ai-powered-lead-generation-and-email-outreach");
  const faqsGroup = await getFaqs("Web Page", "ai-powered-lead-generation-and-email-outreach");

  return (
    <>
      <main>
        {children}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
        {
          (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
        }
        <BusinessSlider />
        <StructureData name="ai-powered-lead-generation-and-email-outreach" type="webpage" />
      </main>

    </>
  );
}
