import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchFrappeSchemaData({
    name: "n8n-ai-agent-orchestration-build-multi-agent-automation-systems",
    type: "webpage"
  });

  return {
    title: pageData?.data?.title || "n8n AI Agent Orchestration: Build Multi-Agent Automation Systems | Finbyz Tech",
    description: pageData?.data?.description || "Build intelligent multi-agent automation systems with n8n AI Agent Orchestration. Expert implementation of OpenAI, Claude, Gemini, and LangChain workflows for enterprise automation.",
    keywords: "n8n AI agents, multi-agent orchestration, AI workflow automation, agentic AI, LangChain automation, OpenAI integration, Claude integration, Gemini AI, AI automation services",
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
      canonical: `${process.env.SITE_URL}/ai-automation/services/n8n-ai-agent-orchestration`,
    },
    openGraph: {
      title: pageData?.data?.seo_title || "n8n AI Agent Orchestration Services | Build Multi-Agent AI Systems",
      description: pageData?.data?.meta_description || "Build intelligent multi-agent automation systems with n8n. Expert implementation of AI workflows using OpenAI, Claude, Gemini, and LangChain.",
      url: `${process.env.SITE_URL}/ai-automation/services/n8n-ai-agent-orchestration`,
      siteName: "Finbyz Tech",
      type: "website",
      locale: "en_US",
      images: [{
        url: pageData?.data?.meta_image ? `${process.env.FRAPPE_URL}${pageData.data.meta_image}` : "/images/ai-automation.jpeg",
        width: 1200,
        height: 630,
        alt: "n8n AI Agent Orchestration Services | Finbyz Tech"
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.data?.seo_title || "n8n AI Agent Orchestration Services",
      description: pageData?.data?.small_description || "Build intelligent multi-agent automation systems with n8n and AI.",
      creator: "@finbyz",
      images: [pageData?.data?.meta_image ? `${process.env.FRAPPE_URL}${pageData.data.meta_image}` : "/images/ai-automation.jpeg"],
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
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Web Page", "ai-automation/services/n8n-ai-agent-orchestration");
  const faqsGroup = await getFaqs("Web Page", "ai-automation/services/n8n-ai-agent-orchestration");

  // Structured Data for AI Agent Orchestration Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "n8n AI Agent Orchestration",
    "description": "Build intelligent multi-agent automation systems with n8n. Expert implementation of AI workflows using OpenAI, Claude, Gemini, and LangChain for enterprise automation.",
    "provider": {
      "@type": "Organization",
      "name": "Finbyz Tech Pvt Ltd",
      "url": "https://finbyz.tech",
      "logo": "https://finbyz.tech/files/FinbyzLogo.png",
      "sameAs": [
        "https://www.linkedin.com/company/finbyz",
        "https://twitter.com/FinByz",
        "https://www.youtube.com/c/Finbyz"
      ]
    },
    "serviceType": "AI Automation Consulting",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Agent Orchestration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Agent System Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LangChain Integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Workflow Automation"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="structured-data-n8n-ai-orchestration"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        {children}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
        {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
          <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} />
        )}
        <BusinessSlider />
        <StructureData name="n8n-ai-agent-orchestration-build-multi-agent-automation-systems" type="webpage" />
      </main>
    </>
  );
}
