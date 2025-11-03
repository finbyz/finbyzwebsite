import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Meet Our Expert Team Delivering ERPNext & IT Solutions",
  description: "Discover the Finbyz Tech team of seasoned ERPNext consultants, developers, and AI automation specialists. Our experts drive successful digital transformations and tailored IT solutions globally.",
  keywords: "Finbyz Tech team, ERPNext consultants, software developers, IT experts, digital transformation team, AI automation specialists, ERP implementation India, technology solutions team, Finbyz Tech careers, expert IT professionals, custom software development team, ERPNext functional experts, Finbyz Tech leadership, skilled resources Finbyz",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/our-team",
  },
  openGraph: {
    title: "Meet Our Expert Team Delivering ERPNext & IT Solutions",
    description: "Discover the Finbyz Tech team of seasoned ERPNext consultants, developers, and AI automation specialists. Our experts drive successful digital transformations and tailored IT solutions globally.",
    url: "https://erp.finbyz.tech/our-team",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Team Delivering ERPNext & IT Solutions",
    description: "Discover the Finbyz Tech team of seasoned ERPNext consultants, developers, and AI automation specialists. Our experts drive successful digital transformations and tailored IT solutions globally.",
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
    "name": "Meet Our Expert Team Delivering ERPNext & IT Solutions",
    "description": "Discover the Finbyz Tech team of seasoned ERPNext consultants, developers, and AI automation specialists. Our experts drive successful digital transformations and tailored IT solutions globally.",
    "url": "https://erp.finbyz.tech/our-team",
    
    "keywords": "Finbyz Tech team, ERPNext consultants, software developers, IT experts, digital transformation team, AI automation specialists, ERP implementation India, technology solutions team, Finbyz Tech careers, expert IT professionals, custom software development team, ERPNext functional experts, Finbyz Tech leadership, skilled resources Finbyz",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Meet Our Expert Team Delivering ERPNext & IT Solutions",
      "description": "Discover the Finbyz Tech team of seasoned ERPNext consultants, developers, and AI automation specialists. Our experts drive successful digital transformations and tailored IT solutions globally.",
      "articleBody": "Meet the talented professionals driving Finbyz Tech’s ERPNext projects and technology solutions.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-30T05:35:04.357Z",
      "dateModified": "2025-10-30T05:35:04.357Z",
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
        <meta itemProp="name" content="Meet Our Expert Team Delivering ERPNext & IT Solutions" />
        <meta itemProp="description" content="Discover the Finbyz Tech team of seasoned ERPNext consultants, developers, and AI automation specialists. Our experts drive successful digital transformations and tailored IT solutions globally." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
