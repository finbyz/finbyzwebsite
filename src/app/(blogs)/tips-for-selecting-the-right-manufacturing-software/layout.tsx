import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Tips for Selecting the Best Manufacturing ERP Software",
  description: "Discover essential tips for choosing the right manufacturing ERP software. Learn how to evaluate features, integration capabilities, and vendor support to optimize your operations.",
  keywords: "ERP for manufacturing\nBest Manufacturing Software, \nsmall manufacturing ERP software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/tips-for-selecting-the-right-manufacturing-software",
  },
  openGraph: {
    title: "Top Tips for Selecting the Best Manufacturing ERP Software",
    description: "Discover essential tips for choosing the right manufacturing ERP software. Learn how to evaluate features, integration capabilities, and vendor support to optimize your operations.",
    url: "https://finbyz.tech/tips-for-selecting-the-right-manufacturing-software",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Tips for Selecting the Best Manufacturing ERP Software",
    description: "Discover essential tips for choosing the right manufacturing ERP software. Learn how to evaluate features, integration capabilities, and vendor support to optimize your operations.",
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
const faqsGroup = await getFaqs("Blog Post","tips-for-selecting-the-right-manufacturing-software");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/tips-for-selecting-the-right-manufacturing-software#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/tips-for-selecting-the-right-manufacturing-software",
  "headline": "Top Tips for Selecting the Best Manufacturing ERP Software",
  "name": "Top Tips for Selecting the Best Manufacturing ERP Software",
  "description": "Discover essential tips for choosing the right manufacturing ERP software. Learn how to evaluate features, integration capabilities, and vendor support to optimize your operations.",
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
  "url": "https://finbyz.tech/tips-for-selecting-the-right-manufacturing-software",
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
    "ERP for manufacturing\nBest Manufacturing Software",
    "small manufacturing ERP software"
  ]
};
  const data = await getPageData("Blog Post","tips-for-selecting-the-right-manufacturing-software");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top Tips for Selecting the Best Manufacturing ERP Software" />
        <meta itemProp="description" content="Discover essential tips for choosing the right manufacturing ERP software. Learn how to evaluate features, integration capabilities, and vendor support to optimize your operations." />
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
