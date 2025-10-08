import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Why Every Small Business Needs a Website: Key Benefits and Importance",
  description: "Having a website opens up new opportunities that will definitely foster your business growth. Read the complete information here!",
  keywords: "website for small business,\nbenefits of a business website,\nimportance of website for business",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/how-website-benefits-a-business",
  },
  openGraph: {
    title: "Why Every Small Business Needs a Website: Key Benefits and Importance",
    description: "Having a website opens up new opportunities that will definitely foster your business growth. Read the complete information here!",
    url: "https://web.finbyz.tech/how-website-benefits-a-business",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Every Small Business Needs a Website: Key Benefits and Importance",
    description: "Having a website opens up new opportunities that will definitely foster your business growth. Read the complete information here!",
    creator: "@yourhandle",
    
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
  other: {
    'article:content_tier': 'free',
    'article:opinion': 'false',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Every Small Business Needs a Website: Key Benefits and Importance",
    "description": "Having a website opens up new opportunities that will definitely foster your business growth. Read the complete information here!",
    "url": "https://web.finbyz.tech/how-website-benefits-a-business",
    
    "keywords": "website for small business,\nbenefits of a business website,\nimportance of website for business",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Why Every Small Business Needs a Website: Key Benefits and Importance",
      "description": "Having a website opens up new opportunities that will definitely foster your business growth. Read the complete information here!",
        "articleBody": "Why every small business needs a website: credibility, visibility, and growth benefits.",
      "author": {
        "@type": "Organization",
        "name": "Your Company Name"
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
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
        <meta itemProp="name" content="Why Every Small Business Needs a Website: Key Benefits and Importance" />
        <meta itemProp="description" content="Having a website opens up new opportunities that will definitely foster your business growth. Read the complete information here!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
