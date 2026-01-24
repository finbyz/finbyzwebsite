import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import StructureData from "@/components/seo/StructureData";


import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Content Spark | Streamline Marketing Automation with AI-Powered Content Creation",
  description: "Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI.",
  keywords: "",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/ai-automation/apps/content-spark-marketing-automation",
  },
  openGraph: {
    title: "Content Spark | Streamline Marketing Automation with AI-Powered Content Creation",
    description: "Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI.",
    url: "https://finbyz.tech/ai-automation/apps/content-spark-marketing-automation",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Content Spark | Streamline Marketing Automation with AI-Powered Content Creation",
    description: "Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI.",
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
  const data = await getPageData("Web Page", "ai-automation/apps/content-spark-marketing-automation");
  const faqsGroup = await getFaqs("Web Page", "ai-automation/apps/content-spark-marketing-automation");

  return (
    <>
      <main>

        {/* Semantic HTML wrapper for better content extraction */}
        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="Content Spark | Streamline Marketing Automation with AI-Powered Content Creation" />
          <meta itemProp="description" content="Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI." />
        </article>
        {children}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
        {
          (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
        }
        <BusinessSlider />
        <StructureData name="content-spark-marketing-automation" type="webpage" />
      </main>

    </>
  );
}
