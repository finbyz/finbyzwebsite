import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top ERP Benefits & How Automation Enhances Business Performance",
  description: "Discover how ERP systems improve business performance through automation, efficiency, and real-time insights. Learn the key benefits of ERP for your organization.",
  keywords: "erp benefits,\nHow ERP improves business performance,\nerp automation",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/how-erp-improves-business-performance",
  },
  openGraph: {
    title: "Top ERP Benefits & How Automation Enhances Business Performance",
    description: "Discover how ERP systems improve business performance through automation, efficiency, and real-time insights. Learn the key benefits of ERP for your organization.",
    url: "https://finbyz.tech/how-erp-improves-business-performance",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top ERP Benefits & How Automation Enhances Business Performance",
    description: "Discover how ERP systems improve business performance through automation, efficiency, and real-time insights. Learn the key benefits of ERP for your organization.",
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
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/how-erp-improves-business-performance#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/how-erp-improves-business-performance",
  "headline": "Top ERP Benefits & How Automation Enhances Business Performance",
  "name": "Top ERP Benefits & How Automation Enhances Business Performance",
  "description": "Discover how ERP systems improve business performance through automation, efficiency, and real-time insights. Learn the key benefits of ERP for your organization.",
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
  "url": "https://finbyz.tech/how-erp-improves-business-performance",
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
    "erp benefits",
    "How ERP improves business performance",
    "erp automation"
  ]
};
  const data = await getPageData("Blog Post","how-erp-improves-business-performance");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top ERP Benefits & How Automation Enhances Business Performance" />
        <meta itemProp="description" content="Discover how ERP systems improve business performance through automation, efficiency, and real-time insights. Learn the key benefits of ERP for your organization." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
