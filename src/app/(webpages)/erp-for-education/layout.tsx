import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Education ERP Software - Best ERP for Schools",
  description: "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
  keywords: "education erp software,\nerp for education,\nbest erp for schools\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-for-education",
  },
  openGraph: {
    title: "Best Education ERP Software - Best ERP for Schools",
    description: "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
    url: "https://web.finbyz.tech/erp-for-education",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Education ERP Software - Best ERP for Schools",
    description: "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
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
  },
  
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Education ERP Software - Best ERP for Schools",
    "description": "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
    "url": "https://web.finbyz.tech/erp-for-education",
    
    "keywords": "education erp software,\nerp for education,\nbest erp for schools\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Best Education ERP Software - Best ERP for Schools",
      "description": "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
      
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech Pvt Ltd"
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
        <meta itemProp="name" content="Best Education ERP Software - Best ERP for Schools" />
        <meta itemProp="description" content="Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
