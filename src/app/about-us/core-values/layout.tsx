import BusinessSlider from "@/components/sections/business-slider";
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Core Values Driving Innovation for Business Success",
    "description": "Discover the foundational values that define our approach to IT consulting, ERPNext implementation, and AI automation. Experience innovation, integrity, and client success.",
    "url": "https://finbyz.tech/core-values",
    
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
