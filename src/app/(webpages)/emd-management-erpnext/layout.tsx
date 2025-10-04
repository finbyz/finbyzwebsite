import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Efficient EMD Management in ERPNext | Streamline Earnest Money Deposits",
  description: "Optimize your Earnest Money Deposit processes with ERPNext. Learn how to manage EMDs efficiently, automate accounting entries, and ensure compliance.",
  keywords: "earnest money deposits,\nerpnext emd accounting, \nerpnext security deposit,\nemd management,\nEMD Management ERPNext,\nearnest money,\nearnest money contract,",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/emd-management-erpnext",
  },
  openGraph: {
    title: "Efficient EMD Management in ERPNext | Streamline Earnest Money Deposits",
    description: "Optimize your Earnest Money Deposit processes with ERPNext. Learn how to manage EMDs efficiently, automate accounting entries, and ensure compliance.",
    url: "https://web.finbyz.tech/emd-management-erpnext",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/EMD-PageDesign-for-Apps.svg", width: 1200, height: 630, alt: "Efficient EMD Management in ERPNext | Streamline Earnest Money Deposits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Efficient EMD Management in ERPNext | Streamline Earnest Money Deposits",
    description: "Optimize your Earnest Money Deposit processes with ERPNext. Learn how to manage EMDs efficiently, automate accounting entries, and ensure compliance.",
    creator: "@yourhandle",
    images: ["/files/EMD-PageDesign-for-Apps.svg"],
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
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Efficient EMD Management in ERPNext | Streamline Earnest Money Deposits",
    "description": "Optimize your Earnest Money Deposit processes with ERPNext. Learn how to manage EMDs efficiently, automate accounting entries, and ensure compliance.",
    "url": "https://web.finbyz.tech/emd-management-erpnext",
    "image": "/files/EMD-PageDesign-for-Apps.svg",
    "keywords": "earnest money deposits,\nerpnext emd accounting, \nerpnext security deposit,\nemd management,\nEMD Management ERPNext,\nearnest money,\nearnest money contract,",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Efficient EMD Management in ERPNext | Streamline Earnest Money Deposits",
      "description": "Optimize your Earnest Money Deposit processes with ERPNext. Learn how to manage EMDs efficiently, automate accounting entries, and ensure compliance.",
      
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
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Efficient EMD Management in ERPNext | Streamline Earnest Money Deposits" />
        <meta itemProp="description" content="Optimize your Earnest Money Deposit processes with ERPNext. Learn how to manage EMDs efficiently, automate accounting entries, and ensure compliance." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
