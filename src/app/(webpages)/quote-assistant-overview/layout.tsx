import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Quote Assistant Overview: Streamlining Sales Quotations",
  description: "Explore the Quote Assistant, an innovative automation tool that enhances the sales quotation process by intelligently managing customer inquiries and generating tailored quotes.",
  keywords: "Quote Assistant, quotation automation, sales quotation workflow, customer inquiries, ERPNext, AI agent, item mapping, draft quotation, sales team review, historical purchase data",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://web.finbyz.tech/quote-assistant-overview",
  },
  openGraph: {
    title: "Quote Assistant Overview: Streamlining Sales Quotations",
    description: "Explore the Quote Assistant, an innovative automation tool that enhances the sales quotation process by intelligently managing customer inquiries and generating tailored quotes.",
    url: "https://web.finbyz.tech/quote-assistant-overview",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Quote Assistant Overview: Streamlining Sales Quotations",
    description: "Explore the Quote Assistant, an innovative automation tool that enhances the sales quotation process by intelligently managing customer inquiries and generating tailored quotes.",
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
    "name": "Quote Assistant Overview: Streamlining Sales Quotations",
    "description": "Explore the Quote Assistant, an innovative automation tool that enhances the sales quotation process by intelligently managing customer inquiries and generating tailored quotes.",
    "url": "https://web.finbyz.tech/quote-assistant-overview",
    
    "keywords": "Quote Assistant, quotation automation, sales quotation workflow, customer inquiries, ERPNext, AI agent, item mapping, draft quotation, sales team review, historical purchase data",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Quote Assistant Overview: Streamlining Sales Quotations",
      "description": "Explore the Quote Assistant, an innovative automation tool that enhances the sales quotation process by intelligently managing customer inquiries and generating tailored quotes.",
      "articleBody": "Quote Assistant (Quotation Automation System)\nOverview\nThe Quote Assistant is a cutting-edge automation tool designed to streamline the entire sales quotation workflow, dramatically reducing the time and effort traditionally required in quote generation. By automating the extraction and analysis of customer inquiries—including all linked emails and attachments—it helps sales teams respond more quickly and accurately. The system intelligently reads inquiry emails and diverse attachments such as W",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T12:17:57.924Z",
      "dateModified": "2025-10-14T12:17:57.924Z",
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
        <meta itemProp="name" content="Quote Assistant Overview: Streamlining Sales Quotations" />
        <meta itemProp="description" content="Explore the Quote Assistant, an innovative automation tool that enhances the sales quotation process by intelligently managing customer inquiries and generating tailored quotes." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
