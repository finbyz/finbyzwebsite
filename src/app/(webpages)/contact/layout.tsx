import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Get in Touch: Reach Out Today!",
  description: "Contact Finbyz for streamlined business solutions. Transform your operations with our expertly designed ERP and digital strategies. Reach out now!",
  keywords: "Get in Touch ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/contact",
  },
  openGraph: {
    title: "Get in Touch: Reach Out Today!",
    description: "Contact Finbyz for streamlined business solutions. Transform your operations with our expertly designed ERP and digital strategies. Reach out now!",
    url: "https://web.finbyz.tech/contact",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch: Reach Out Today!",
    description: "Contact Finbyz for streamlined business solutions. Transform your operations with our expertly designed ERP and digital strategies. Reach out now!",
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
    "name": "Get in Touch: Reach Out Today!",
    "description": "Contact Finbyz for streamlined business solutions. Transform your operations with our expertly designed ERP and digital strategies. Reach out now!",
    "url": "https://web.finbyz.tech/contact",
    
    "keywords": "Get in Touch ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Get in Touch: Reach Out Today!",
      "description": "Contact Finbyz for streamlined business solutions. Transform your operations with our expertly designed ERP and digital strategies. Reach out now!",
      
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
        <meta itemProp="name" content="Get in Touch: Reach Out Today!" />
        <meta itemProp="description" content="Contact Finbyz for streamlined business solutions. Transform your operations with our expertly designed ERP and digital strategies. Reach out now!" />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
