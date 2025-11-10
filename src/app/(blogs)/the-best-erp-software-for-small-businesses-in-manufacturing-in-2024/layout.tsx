import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
  description: "Discover the best ERP solutions for small manufacturing businesses in 2025. Compare top systems like Microsoft Dynamics 365, NetSuite, and MRPeasy to streamline your operations.",
  keywords: "ERP for small business, best ERP for small business , manufacturing software for small business , ERP system for small businesses, ERP systems for small companies , best ERP for small manufacturing , business manufacturing ERP for small business,  best manufacturing software for small business , cloud ERP for small business\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/the-best-erp-software-for-small-businesses-in-manufacturing-in-2024",
  },
  openGraph: {
    title: "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
    description: "Discover the best ERP solutions for small manufacturing businesses in 2025. Compare top systems like Microsoft Dynamics 365, NetSuite, and MRPeasy to streamline your operations.",
    url: "https://finbyz.tech/the-best-erp-software-for-small-businesses-in-manufacturing-in-2024",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
    description: "Discover the best ERP solutions for small manufacturing businesses in 2025. Compare top systems like Microsoft Dynamics 365, NetSuite, and MRPeasy to streamline your operations.",
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
const faqsGroup = await getFaqs("Blog Post","the-best-erp-software-for-small-businesses-in-manufacturing-in-2024");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/the-best-erp-software-for-small-businesses-in-manufacturing-in-2024#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/the-best-erp-software-for-small-businesses-in-manufacturing-in-2024",
  "headline": "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
  "name": "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
  "description": "Discover the best ERP solutions for small manufacturing businesses in 2025. Compare top systems like Microsoft Dynamics 365, NetSuite, and MRPeasy to streamline your operations.",
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
  "url": "https://finbyz.tech/the-best-erp-software-for-small-businesses-in-manufacturing-in-2024",
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
    "ERP for small business",
    "best ERP for small business",
    "manufacturing software for small business",
    "ERP system for small businesses",
    "ERP systems for small companies",
    "best ERP for small manufacturing",
    "business manufacturing ERP for small business",
    "best manufacturing software for small business",
    "cloud ERP for small business"
  ]
};
  const data = await getPageData("Blog Post","the-best-erp-software-for-small-businesses-in-manufacturing-in-2024");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech" />
        <meta itemProp="description" content="Discover the best ERP solutions for small manufacturing businesses in 2025. Compare top systems like Microsoft Dynamics 365, NetSuite, and MRPeasy to streamline your operations." />
      </article>

      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
