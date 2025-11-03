import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Optimize Business Processes with Expert Consulting & ERPNext",
  description: "Streamline operations, boost efficiency, and maximize ERPNext with expert process consulting. Finbyz Tech offers tailored solutions for sustainable business growth.",
  keywords: "process consulting, business process optimization, workflow efficiency, ERPNext process consulting, operational excellence, business transformation, process improvement strategy, ERP implementation consulting, digital transformation advisory, workflow automation, business process analysis, manufacturing process optimization, supply chain process improvement, finbyz tech consulting",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/process-consulting",
  },
  openGraph: {
    title: "Optimize Business Processes with Expert Consulting & ERPNext",
    description: "Streamline operations, boost efficiency, and maximize ERPNext with expert process consulting. Finbyz Tech offers tailored solutions for sustainable business growth.",
    url: "https://erp.finbyz.tech/process-consulting",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimize Business Processes with Expert Consulting & ERPNext",
    description: "Streamline operations, boost efficiency, and maximize ERPNext with expert process consulting. Finbyz Tech offers tailored solutions for sustainable business growth.",
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
    "name": "Optimize Business Processes with Expert Consulting & ERPNext",
    "description": "Streamline operations, boost efficiency, and maximize ERPNext with expert process consulting. Finbyz Tech offers tailored solutions for sustainable business growth.",
    "url": "https://erp.finbyz.tech/process-consulting",
    
    "keywords": "process consulting, business process optimization, workflow efficiency, ERPNext process consulting, operational excellence, business transformation, process improvement strategy, ERP implementation consulting, digital transformation advisory, workflow automation, business process analysis, manufacturing process optimization, supply chain process improvement, finbyz tech consulting",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Optimize Business Processes with Expert Consulting & ERPNext",
      "description": "Streamline operations, boost efficiency, and maximize ERPNext with expert process consulting. Finbyz Tech offers tailored solutions for sustainable business growth.",
      "articleBody": "Consulting services to optimize business processes, workflows, and ERPNext utilization.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-25T09:39:12.060Z",
      "dateModified": "2025-10-25T09:39:12.060Z",
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
        <meta itemProp="name" content="Optimize Business Processes with Expert Consulting & ERPNext" />
        <meta itemProp="description" content="Streamline operations, boost efficiency, and maximize ERPNext with expert process consulting. Finbyz Tech offers tailored solutions for sustainable business growth." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
