import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/layout/footer";
import InquiryForm from "@/components/ui/InquiryForm";

export const metadata: Metadata = {
  title: "ERPNext Real-World Use Cases Industry-Specific Solutions",
  description:"Discover how ERPNext transforms operations across diverse industries. Explore real-world use cases in manufacturing, EXIM, logistics, and more with expert implementation from a certified partner.",
  keywords: "ERPNext use cases, ERPNext industry solutions, ERPNext implementation success stories, manufacturing ERPNext, EXIM ERPNext solutions, logistics ERPNext, chemical industry ERPNext, metal casting ERPNext, custom ERPNext development, AI automation ERPNext, business process transformation, Finbyz Tech ERPNext, ERP consulting India, ERPNext partner, digital transformation",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/erpnext-use-cases",
  },
  openGraph: {
    title: "ERPNext Real-World Use Cases Industry-Specific Solutions",
    description: "Discover how ERPNext transforms operations across diverse industries. Explore real-world use cases in manufacturing, EXIM, logistics, and more with expert implementation from a certified partner.",
    url: "https://erp.finbyz.tech/erpnext-use-cases",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Real-World Use Cases Industry-Specific Solutions",
    description: "Discover how ERPNext transforms operations across diverse industries. Explore real-world use cases in manufacturing, EXIM, logistics, and more with expert implementation from a certified partner.",
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
    "name": "ERPNext Real-World Use Cases Industry-Specific Solutions",
    "description": "Discover how ERPNext transforms operations across diverse industries. Explore real-world use cases in manufacturing, EXIM, logistics, and more with expert implementation from a certified partner.",
    "url": "https://erp.finbyz.tech/erpnext-use-cases",

    "keywords": "ERPNext use cases, ERPNext industry solutions, ERPNext implementation success stories, manufacturing ERPNext, EXIM ERPNext solutions, logistics ERPNext, chemical industry ERPNext, metal casting ERPNext, custom ERPNext development, AI automation ERPNext, business process transformation, Finbyz Tech ERPNext, ERP consulting India, ERPNext partner, digital transformation",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext Real-World Use Cases Industry-Specific Solutions",
      "description": "Discover how ERPNext transforms operations across diverse industries. Explore real-world use cases in manufacturing, EXIM, logistics, and more with expert implementation from a certified partner.",
      "articleBody": "Real-world ERPNext use cases demonstrating the impact on various industries and operations.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-25T09:39:08.936Z",
      "dateModified": "2025-10-25T09:39:08.936Z",
    }
  };

  return (
      <>
        <main>
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
  
          <article itemScope itemType="https://schema.org/WebPage">
            <meta
              itemProp="name"
              content="ERPNext Real-World Use Cases Industry-Specific Solutions"
            />
            <meta
              itemProp="description"
              content="Discover how ERPNext transforms operations across diverse industries. Explore real-world use cases in manufacturing, EXIM, logistics, and more with expert implementation from a certified partner."
            />
          </article>
  
          {children}
  
          <BusinessSlider />
          <InquiryForm />
        </main>
        <Footer />
    </>
  );
  
}
