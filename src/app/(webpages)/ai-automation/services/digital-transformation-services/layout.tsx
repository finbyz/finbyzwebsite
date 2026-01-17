import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import StructureData from "@/components/seo/StructureData";
import { LazyBusinessSlider } from "@/lib/lazy-components";
import { getFaqs, getPageData } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

export const metadata: Metadata = {
  title: "Digital Transformation Solutions ERPNext & AI Automation",
  description: "Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations.",
  keywords: "digital transformation, ERPNext implementation, AI automation services, IT consulting, custom software development, business modernization, digital strategy, enterprise solutions, process optimization, cloud ERP, industry 4.0 solutions, digital innovation, business efficiency, technology consulting, Finbyz Tech",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/digital-transformation-services",
  },
  openGraph: {
    title: "Digital Transformation Solutions ERPNext & AI Automation",
    description: "Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations.",
    url: "https://finbyz.tech/digital-transformation-services",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation Solutions ERPNext & AI Automation",
    description: "Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations.",
    creator: "@finbyztech",

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
  },
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Blog Post", "digital-transformation-services");
  const faqsGroup = await getFaqs("Blog Post", "digital-transformation-services");
  return (
    <>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <LazyBusinessSlider />
      <StructureData name="digital-transformation-services" type="webpage" />
    </>
  );
}
