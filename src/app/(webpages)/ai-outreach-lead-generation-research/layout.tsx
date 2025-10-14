import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Powered Lead Generation and Email Outreach",
  description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
  keywords: "lead generation, email outreach, AI-driven research, Apollo, personalized outreach, conversion rates, email drafting, company insights, contact insights, automated scheduling",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://web.finbyz.tech/ai-outreach-lead-generation-research",
  },
  openGraph: {
    title: "AI-Powered Lead Generation and Email Outreach",
    description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
    url: "https://web.finbyz.tech/ai-outreach-lead-generation-research",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Lead Generation and Email Outreach",
    description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI-Powered Lead Generation and Email Outreach",
    "description": "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
    "url": "https://web.finbyz.tech/ai-outreach-lead-generation-research",
    
    "keywords": "lead generation, email outreach, AI-driven research, Apollo, personalized outreach, conversion rates, email drafting, company insights, contact insights, automated scheduling",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "AI-Powered Lead Generation and Email Outreach",
      "description": "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
      "articleBody": "The Email Outreach Workflow simplifies the entire lead generation, research, and outreach process. By sourcing leads through Apollo, enriching them with AI-driven research, and automating email drafting, this workflow enables personalized outreach at scale with higher conversion potential.\n\nLead Generation\nApproach A – Company List (Sheet Upload)\nPrepare a sheet (Excel or Google Sheet) listing target companies.\n\nClick on \"Get Companies.\"\n\nThe tool fetches leads (decision-makers, relevant job tit",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T11:31:10.210Z",
      "dateModified": "2025-10-14T11:31:10.210Z",
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="AI-Powered Lead Generation and Email Outreach" />
        <meta itemProp="description" content="Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
