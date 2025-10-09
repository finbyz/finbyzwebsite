import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Boost Your Business with ERPNext Website SEO Services",
  description: "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
  keywords: " ERPNext SEO,\n ERPNext Website SEO\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erpnext-seo",
  },
  openGraph: {
    title: "Boost Your Business with ERPNext Website SEO Services",
    description: "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
    url: "https://web.finbyz.tech/erpnext-seo",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/seo.png", width: 1200, height: 630, alt: "Boost Your Business with ERPNext Website SEO Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Your Business with ERPNext Website SEO Services",
    description: "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
    creator: "@finbyz",
    images: ["/files/seo.png"],
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
    "name": "Boost Your Business with ERPNext Website SEO Services",
    "description": "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
    "url": "https://web.finbyz.tech/erpnext-seo",
    "image": "/files/seo.png",
    "keywords": " ERPNext SEO,\n ERPNext Website SEO\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Boost Your Business with ERPNext Website SEO Services",
      "description": "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
      
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
        <meta itemProp="name" content="Boost Your Business with ERPNext Website SEO Services" />
        <meta itemProp="description" content="Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
