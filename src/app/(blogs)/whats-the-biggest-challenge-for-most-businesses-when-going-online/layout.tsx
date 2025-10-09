import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Challenges in Digital Transformation and How to Overcome Them",
  description: "Discover What\'s the biggest challenge for most businesses when going online. Learn strategies to stand out in the crowded digital space. Rea",
  keywords: "What\'s the biggest challenge for most businesses when going online,\ndigital transformation challenges,\nonline business challenges",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/whats-the-biggest-challenge-for-most-businesses-when-going-online",
  },
  openGraph: {
    title: "Top Challenges in Digital Transformation and How to Overcome Them",
    description: "Discover What\'s the biggest challenge for most businesses when going online. Learn strategies to stand out in the crowded digital space. Rea",
    url: "https://web.finbyz.tech/whats-the-biggest-challenge-for-most-businesses-when-going-online",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Challenges in Digital Transformation and How to Overcome Them",
    description: "Discover What\'s the biggest challenge for most businesses when going online. Learn strategies to stand out in the crowded digital space. Rea",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Top Challenges in Digital Transformation and How to Overcome Them",
    "description": "Discover What\'s the biggest challenge for most businesses when going online. Learn strategies to stand out in the crowded digital space. Rea",
    "url": "https://web.finbyz.tech/whats-the-biggest-challenge-for-most-businesses-when-going-online",
    
    "keywords": "What\'s the biggest challenge for most businesses when going online,\ndigital transformation challenges,\nonline business challenges",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top Challenges in Digital Transformation and How to Overcome Them",
      "description": "Discover What\'s the biggest challenge for most businesses when going online. Learn strategies to stand out in the crowded digital space. Rea",
        "articleBody": "Biggest online challenges for businesses: visibility, trust, tech adoption, competition.",
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Top Challenges in Digital Transformation and How to Overcome Them" />
        <meta itemProp="description" content="Discover What\'s the biggest challenge for most businesses when going online. Learn strategies to stand out in the crowded digital space. Rea" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
