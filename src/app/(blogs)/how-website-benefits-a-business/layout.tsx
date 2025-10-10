import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Why Every Small Business Needs a Website: Key Benefits and Importance",
  description: "Discover the essential reasons why a website is crucial for your small business. Learn how it enhances credibility, boosts visibility, and drives growth.",
  keywords: "website for small business,\nbenefits of a business website,\nimportance of website for business",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/how-website-benefits-a-business",
  },
  openGraph: {
    title: "Why Every Small Business Needs a Website: Key Benefits and Importance",
    description: "Discover the essential reasons why a website is crucial for your small business. Learn how it enhances credibility, boosts visibility, and drives growth.",
    url: "https://finbyz.tech/how-website-benefits-a-business",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Every Small Business Needs a Website: Key Benefits and Importance",
    description: "Discover the essential reasons why a website is crucial for your small business. Learn how it enhances credibility, boosts visibility, and drives growth.",
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
  "@id": "https://finbyz.tech/how-website-benefits-a-business#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/how-website-benefits-a-business",
  "headline": "Why Every Small Business Needs a Website: Key Benefits and Importance",
  "name": "Why Every Small Business Needs a Website: Key Benefits and Importance",
  "description": "Discover the essential reasons why a website is crucial for your small business. Learn how it enhances credibility, boosts visibility, and drives growth.",
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
  "url": "https://finbyz.tech/how-website-benefits-a-business",
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
    "website for small business",
    "benefits of a business website",
    "importance of website for business"
  ]
};
  const data = await getPageData("Blog Post","how-website-benefits-a-business");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Why Every Small Business Needs a Website: Key Benefits and Importance" />
        <meta itemProp="description" content="Discover the essential reasons why a website is crucial for your small business. Learn how it enhances credibility, boosts visibility, and drives growth." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
