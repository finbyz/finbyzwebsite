import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thank You for Your Inquiry | Finbyz Tech",
  description: "Thank You Page Inquiry",
  keywords: "ERP services, software development, IT consulting, Finbyz Tech",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/thank-you-for-inquiry",
  },
  openGraph: {
    title: "Thank You for Your Inquiry | Finbyz Tech",
    description: "Thank You Page Inquiry",
    url: "https://web.finbyz.tech/thank-you-for-inquiry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Thank-you.svg", width: 1200, height: 630, alt: "Thank You for Your Inquiry | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You for Your Inquiry | Finbyz Tech",
    description: "Thank You Page Inquiry",
    creator: "@yourhandle",
    images: ["/files/Thank-you.svg"],
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
  other: {
    'article:content_tier': 'free',
    'article:opinion': 'false',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Thank You for Your Inquiry | Finbyz Tech",
    "description": "Thank You Page Inquiry",
    "url": "https://web.finbyz.tech/thank-you-for-inquiry",
    "image": "/files/Thank-you.svg",
    "keywords": "ERP services, software development, IT consulting, Finbyz Tech",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Thank You for Your Inquiry | Finbyz Tech",
      "description": "Thank You Page Inquiry",
      
      "author": {
        "@type": "Organization",
        "name": "Your Company Name"
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
    }
  };

  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Thank You for Your Inquiry | Finbyz Tech" />
        <meta itemProp="description" content="Thank You Page Inquiry" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
