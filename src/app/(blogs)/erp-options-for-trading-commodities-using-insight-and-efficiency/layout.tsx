import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
  description: "Discover how specialized ERP systems for commodity trading can optimize operations, manage risks, and boost profitability in volatile markets.",
  keywords: "commodity trading erp, ERP for commodity, ERP for commodity management \n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-options-for-trading-commodities-using-insight-and-efficiency",
  },
  openGraph: {
    title: "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
    description: "Discover how specialized ERP systems for commodity trading can optimize operations, manage risks, and boost profitability in volatile markets.",
    url: "https://finbyz.tech/erp-options-for-trading-commodities-using-insight-and-efficiency",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
    description: "Discover how specialized ERP systems for commodity trading can optimize operations, manage risks, and boost profitability in volatile markets.",
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/erp-options-for-trading-commodities-using-insight-and-efficiency#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/erp-options-for-trading-commodities-using-insight-and-efficiency",
  "headline": "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
  "name": "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
  "description": "Discover how specialized ERP systems for commodity trading can optimize operations, manage risks, and boost profitability in volatile markets.",
  "datePublished": "",
  "dateModified": "",
  "author": {
    "@type": "Person",
    "name": "FinByz Tech Pvt Ltd",
    "url": "https://finbyz.tech/about-us",
    "image": {
      "@type": "ImageObject",
      "url": "https://finbyz.tech/files/FinbyzLogo.png",
      "height": "96",
      "width": "96"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "FinByz Tech Pvt Ltd",
    "url": "https://finbyz.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://finbyz.tech/files/FinbyzLogo.png",
      "width": "600",
      "height": "60"
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://finbyz.tech/files/FinbyzLogo.png",
    "width": "1200",
    "height": "630"
  },
  "url": "https://finbyz.tech/erp-options-for-trading-commodities-using-insight-and-efficiency",
  "isPartOf": {
    "@type": "Blog",
    "@id": "https://finbyz.tech/blog-post/",
    "name": "FinByz Tech Blog",
    "publisher": {
      "@type": "Organization",
      "@id": "https://finbyz.tech",
      "name": "FinByz Tech Pvt Ltd"
    }
  },
  "keywords": [
    "commodity trading erp",
    "ERP for commodity",
    "ERP for commodity management"
  ]
};

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability" />
        <meta itemProp="description" content="Discover how specialized ERP systems for commodity trading can optimize operations, manage risks, and boost profitability in volatile markets." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
