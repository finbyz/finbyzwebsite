import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Career Growth & Innovation at a Leading Tech Company",
  description: "Explore dynamic career opportunities at a top ERPNext & AI automation firm. Join a team passionate about innovation, learning, and making a real business impact.",
  keywords: "career opportunities, tech jobs, Finbyz careers, ERPNext jobs, AI automation careers, software development jobs, IT consulting careers, Ahmedabad jobs, professional growth, tech innovation, company culture, employee development, digital transformation jobs, Finbyz recruitment, join our team",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/why-join-finbyz",
  },
  openGraph: {
    title: "Career Growth & Innovation at a Leading Tech Company",
    description: "Explore dynamic career opportunities at a top ERPNext & AI automation firm. Join a team passionate about innovation, learning, and making a real business impact.",
    url: "https://erp.finbyz.tech/why-join-finbyz",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Growth & Innovation at a Leading Tech Company",
    description: "Explore dynamic career opportunities at a top ERPNext & AI automation firm. Join a team passionate about innovation, learning, and making a real business impact.",
    creator: "@finbyztech",
    
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
    "name": "Career Growth & Innovation at a Leading Tech Company",
    "description": "Explore dynamic career opportunities at a top ERPNext & AI automation firm. Join a team passionate about innovation, learning, and making a real business impact.",
    "url": "https://erp.finbyz.tech/why-join-finbyz",
    
    "keywords": "career opportunities, tech jobs, Finbyz careers, ERPNext jobs, AI automation careers, software development jobs, IT consulting careers, Ahmedabad jobs, professional growth, tech innovation, company culture, employee development, digital transformation jobs, Finbyz recruitment, join our team",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Career Growth & Innovation at a Leading Tech Company",
      "description": "Explore dynamic career opportunities at a top ERPNext & AI automation firm. Join a team passionate about innovation, learning, and making a real business impact.",
      "articleBody": "Discover career growth, learning opportunities, and culture at Finbyz Tech.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-25T09:08:30.064Z",
      "dateModified": "2025-10-25T09:08:30.064Z",
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
        <meta itemProp="name" content="Career Growth & Innovation at a Leading Tech Company" />
        <meta itemProp="description" content="Explore dynamic career opportunities at a top ERPNext & AI automation firm. Join a team passionate about innovation, learning, and making a real business impact." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
