import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Transformation Solutions ERPNext & AI Automation",
  description: "Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations.",
  keywords: "digital transformation, ERPNext implementation, AI automation services, IT consulting, custom software development, business modernization, digital strategy, enterprise solutions, process optimization, cloud ERP, industry 4.0 solutions, digital innovation, business efficiency, technology consulting, Finbyz Tech",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/digital-transformation-services",
  },
  openGraph: {
    title: "Digital Transformation Solutions ERPNext & AI Automation",
    description: "Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations.",
    url: "https://erp.finbyz.tech/digital-transformation-services",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation Solutions ERPNext & AI Automation",
    description: "Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations.",
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
    "name": "Digital Transformation Solutions ERPNext & AI Automation",
    "description": "Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations.",
    "url": "https://erp.finbyz.tech/digital-transformation-services",
    
    "keywords": "digital transformation, ERPNext implementation, AI automation services, IT consulting, custom software development, business modernization, digital strategy, enterprise solutions, process optimization, cloud ERP, industry 4.0 solutions, digital innovation, business efficiency, technology consulting, Finbyz Tech",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Digital Transformation Solutions ERPNext & AI Automation",
      "description": "Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations.",
      "articleBody": "Helping businesses transform digitally with ERPNext, automation, and integrated solutions.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-27T04:13:56.803Z",
      "dateModified": "2025-10-27T04:13:56.803Z",
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
        <meta itemProp="name" content="Digital Transformation Solutions ERPNext & AI Automation" />
        <meta itemProp="description" content="Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
