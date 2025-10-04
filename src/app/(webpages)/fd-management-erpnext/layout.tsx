import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Efficient Fixed Deposit Management in ERPNext | Streamline Your Financial Assets",
  description: "Discover how ERPNext simplifies fixed deposit management with automated tracking, interest accrual, and seamless integration into your financial asset portfolio.",
  keywords: "fd management erpnext, \nerpnext fixed deposit, \nerpnext financial asset\nFD Management,\nFinancial Growth\n",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/fd-management-erpnext",
  },
  openGraph: {
    title: "Efficient Fixed Deposit Management in ERPNext | Streamline Your Financial Assets",
    description: "Discover how ERPNext simplifies fixed deposit management with automated tracking, interest accrual, and seamless integration into your financial asset portfolio.",
    url: "https://web.finbyz.tech/fd-management-erpnext",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/FD-Management-PageDesign.svg", width: 1200, height: 630, alt: "Efficient Fixed Deposit Management in ERPNext | Streamline Your Financial Assets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Efficient Fixed Deposit Management in ERPNext | Streamline Your Financial Assets",
    description: "Discover how ERPNext simplifies fixed deposit management with automated tracking, interest accrual, and seamless integration into your financial asset portfolio.",
    creator: "@yourhandle",
    images: ["/files/FD-Management-PageDesign.svg"],
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
    "name": "Efficient Fixed Deposit Management in ERPNext | Streamline Your Financial Assets",
    "description": "Discover how ERPNext simplifies fixed deposit management with automated tracking, interest accrual, and seamless integration into your financial asset portfolio.",
    "url": "https://web.finbyz.tech/fd-management-erpnext",
    "image": "/files/FD-Management-PageDesign.svg",
    "keywords": "fd management erpnext, \nerpnext fixed deposit, \nerpnext financial asset\nFD Management,\nFinancial Growth\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Efficient Fixed Deposit Management in ERPNext | Streamline Your Financial Assets",
      "description": "Discover how ERPNext simplifies fixed deposit management with automated tracking, interest accrual, and seamless integration into your financial asset portfolio.",
      
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
        <meta itemProp="name" content="Efficient Fixed Deposit Management in ERPNext | Streamline Your Financial Assets" />
        <meta itemProp="description" content="Discover how ERPNext simplifies fixed deposit management with automated tracking, interest accrual, and seamless integration into your financial asset portfolio." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
