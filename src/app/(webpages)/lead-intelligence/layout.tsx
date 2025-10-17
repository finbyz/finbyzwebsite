import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Lead Intelligence: Revolutionizing Inquiry Processing",
  description: "Lead Intelligence automates the capture and classification of inquiry emails using AI, transforming unstructured data into actionable CRM records.",
  keywords: "Lead Intelligence, CRM, AI, email processing, data extraction, duplicate prevention, sales funnel, pipeline visibility, automated lead capture, ERPNext",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/lead-intelligence",
  },
  openGraph: {
    title: "Lead Intelligence: Revolutionizing Inquiry Processing",
    description: "Lead Intelligence automates the capture and classification of inquiry emails using AI, transforming unstructured data into actionable CRM records.",
    url: "https://finbyz.tech/lead-intelligence",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Intelligence: Revolutionizing Inquiry Processing",
    description: "Lead Intelligence automates the capture and classification of inquiry emails using AI, transforming unstructured data into actionable CRM records.",
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
    "name": "Lead Intelligence: Revolutionizing Inquiry Processing",
    "description": "Lead Intelligence automates the capture and classification of inquiry emails using AI, transforming unstructured data into actionable CRM records.",
    "url": "https://finbyz.tech/lead-intelligence",
    
    "keywords": "Lead Intelligence, CRM, AI, email processing, data extraction, duplicate prevention, sales funnel, pipeline visibility, automated lead capture, ERPNext",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Lead Intelligence: Revolutionizing Inquiry Processing",
      "description": "Lead Intelligence automates the capture and classification of inquiry emails using AI, transforming unstructured data into actionable CRM records.",
      "articleBody": "Lead Intelligence\nOverview\nLead Intelligence leverages advanced artificial intelligence to revolutionize the handling and processing of inquiry emails. The system captures critical data points such as name, email, phone number, company, location, and inquiry content from incoming emails, transforming unstructured communication into structured, actionable CRM records. Beyond simple extraction, the AI intelligently cross-checks existing ERPNext customer and lead databases to prevent duplicates and",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T12:20:05.323Z",
      "dateModified": "2025-10-14T12:20:05.323Z",
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
        <meta itemProp="name" content="Lead Intelligence: Revolutionizing Inquiry Processing" />
        <meta itemProp="description" content="Lead Intelligence automates the capture and classification of inquiry emails using AI, transforming unstructured data into actionable CRM records." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
