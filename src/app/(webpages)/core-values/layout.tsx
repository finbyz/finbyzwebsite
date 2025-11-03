import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Core Values Driving Innovation for Business Success",
  description: "Discover the foundational values that define our approach to IT consulting, ERPNext implementation, and AI automation. Experience innovation, integrity, and client success.",
  keywords: "company core values, business principles, innovation, integrity, collaboration, domain expertise, agile digital transformation, client success, ethical IT services, ERPNext partner values, Finbyz Tech culture, IT consulting values, software development ethics, sustainable growth principles",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/core-values",
  },
  openGraph: {
    title: "Our Core Values Driving Innovation for Business Success",
    description: "Discover the foundational values that define our approach to IT consulting, ERPNext implementation, and AI automation. Experience innovation, integrity, and client success.",
    url: "https://erp.finbyz.tech/core-values",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Core Values Driving Innovation for Business Success",
    description: "Discover the foundational values that define our approach to IT consulting, ERPNext implementation, and AI automation. Experience innovation, integrity, and client success.",
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
    "name": "Our Core Values Driving Innovation for Business Success",
    "description": "Discover the foundational values that define our approach to IT consulting, ERPNext implementation, and AI automation. Experience innovation, integrity, and client success.",
    "url": "https://erp.finbyz.tech/core-values",
    
    "keywords": "company core values, business principles, innovation, integrity, collaboration, domain expertise, agile digital transformation, client success, ethical IT services, ERPNext partner values, Finbyz Tech culture, IT consulting values, software development ethics, sustainable growth principles",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Our Core Values Driving Innovation for Business Success",
      "description": "Discover the foundational values that define our approach to IT consulting, ERPNext implementation, and AI automation. Experience innovation, integrity, and client success.",
      "articleBody": "Finbyz Tech’s principles and values that drive innovation, customer success, and operational excellence.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T09:36:01.245Z",
      "dateModified": "2025-10-28T09:36:01.245Z",
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
        <meta itemProp="name" content="Our Core Values Driving Innovation for Business Success" />
        <meta itemProp="description" content="Discover the foundational values that define our approach to IT consulting, ERPNext implementation, and AI automation. Experience innovation, integrity, and client success." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
