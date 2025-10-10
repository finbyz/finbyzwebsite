import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
  description: "Explore the complete ERP implementation life cycle with our detailed guide on each phase. Learn how to effectively plan, execute, and maintain your ERP system for optimal business performance.",
  keywords: "erp implementation life cycle, ERP Implementation Phase, different phases of erp implementation, implementation phases of erp, phases of erp implementation life cycle, erp implementation cycle, erp life cycle phases, steps in erp implementation life cycle, phases of erp implementation",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-implementation-phases",
  },
  openGraph: {
    title: "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
    description: "Explore the complete ERP implementation life cycle with our detailed guide on each phase. Learn how to effectively plan, execute, and maintain your ERP system for optimal business performance.",
    url: "https://finbyz.tech/erp-implementation-phases",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
    description: "Explore the complete ERP implementation life cycle with our detailed guide on each phase. Learn how to effectively plan, execute, and maintain your ERP system for optimal business performance.",
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
  "@id": "https://finbyz.tech/erp-implementation-phases#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/erp-implementation-phases",
  "headline": "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
  "name": "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
  "description": "Explore the complete ERP implementation life cycle with our detailed guide on each phase. Learn how to effectively plan, execute, and maintain your ERP system for optimal business performance.",
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
  "url": "https://finbyz.tech/erp-implementation-phases",
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
    "erp implementation life cycle",
    "ERP Implementation Phase",
    "different phases of erp implementation",
    "implementation phases of erp",
    "phases of erp implementation life cycle",
    "erp implementation cycle",
    "erp life cycle phases",
    "steps in erp implementation life cycle",
    "phases of erp implementation"
  ]
};
  const data = await getPageData("Blog Post","erp-implementation-phases");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases" />
        <meta itemProp="description" content="Explore the complete ERP implementation life cycle with our detailed guide on each phase. Learn how to effectively plan, execute, and maintain your ERP system for optimal business performance." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
