import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
  description: "Discover a step-by-step ERP implementation guide, from planning to optimization. Learn how to automate workflows and enhance system performance for your business.",
  keywords: "Workflow Automation, ERP Implementation Guide, ERP System Optimization, ERP Adoption",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/blog/Business/ultimate-erp-go-live-plan",
  },
  openGraph: {
    title: "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
    description: "Discover a step-by-step ERP implementation guide, from planning to optimization. Learn how to automate workflows and enhance system performance for your business.",
    url: "https://finbyz.tech/blog/Business/ultimate-erp-go-live-plan",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
    description: "Discover a step-by-step ERP implementation guide, from planning to optimization. Learn how to automate workflows and enhance system performance for your business.",
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
  "@id": "https://finbyz.tech/blog/Business/ultimate-erp-go-live-plan#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/blog/Business/ultimate-erp-go-live-plan",
  "headline": "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
  "name": "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
  "description": "Discover a step-by-step ERP implementation guide, from planning to optimization. Learn how to automate workflows and enhance system performance for your business.",
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
  "url": "https://finbyz.tech/blog/Business/ultimate-erp-go-live-plan",
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
    "Workflow Automation",
    "ERP Implementation Guide",
    "ERP System Optimization",
    "ERP Adoption"
  ]
};
  const data = await getPageData("Blog Post","blog/Business/ultimate-erp-go-live-plan");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation" />
        <meta itemProp="description" content="Discover a step-by-step ERP implementation guide, from planning to optimization. Learn how to automate workflows and enhance system performance for your business." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
