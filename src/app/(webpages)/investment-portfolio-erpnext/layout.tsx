import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
  description: "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
  keywords: "ERPNext Investment Management, \nERPNext Portfolio Tracking,\nportfolio overview erpnext ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/investment-portfolio-erpnext",
  },
  openGraph: {
    title: "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
    description: "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
    url: "https://web.finbyz.tech/investment-portfolio-erpnext",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/portfolio management (1).svg", width: 1200, height: 630, alt: "ERPNext Investment Portfolio Management | Finbyz Tech Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
    description: "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
    creator: "@finbyz",
    images: ["/files/portfolio management (1).svg"],
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
    "name": "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
    "description": "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
    "url": "https://web.finbyz.tech/investment-portfolio-erpnext",
    "image": "/files/portfolio management (1).svg",
    "keywords": "ERPNext Investment Management, \nERPNext Portfolio Tracking,\nportfolio overview erpnext ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
      "description": "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
      
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
        <meta itemProp="name" content="ERPNext Investment Portfolio Management | Finbyz Tech Solutions" />
        <meta itemProp="description" content="Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
