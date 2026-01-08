import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";



export const metadata: Metadata = {
  title: "Fintech ERPNext & Custom Software Solutions for Financial Tech",
  description: "Empower your FinTech business with robust ERPNext and custom software solutions. We deliver AI automation, secure platforms, and expert consulting for financial technology growth.",
  keywords: "Fintech solutions, ERPNext FinTech, custom financial software, FinTech automation, AI in FinTech, financial technology ERP, FinTech IT consulting, secure FinTech solutions, digital transformation finance, financial software development, FinTech innovation, financial operations software, payment gateway integration, regulatory compliance software",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/fintech-solutions",
  },
  openGraph: {
    title: "Fintech ERPNext & Custom Software Solutions for Financial Tech",
    description: "Empower your FinTech business with robust ERPNext and custom software solutions. We deliver AI automation, secure platforms, and expert consulting for financial technology growth.",
    url: "https://finbyz.tech/fintech-solutions",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Fintech ERPNext & Custom Software Solutions for Financial Tech",
    description: "Empower your FinTech business with robust ERPNext and custom software solutions. We deliver AI automation, secure platforms, and expert consulting for financial technology growth.",
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
    "name": "Fintech ERPNext & Custom Software Solutions for Financial Tech",
    "description": "Empower your FinTech business with robust ERPNext and custom software solutions. We deliver AI automation, secure platforms, and expert consulting for financial technology growth.",
    "url": "https://finbyz.tech/fintech-solutions",

    "keywords": "Fintech solutions, ERPNext FinTech, custom financial software, FinTech automation, AI in FinTech, financial technology ERP, FinTech IT consulting, secure FinTech solutions, digital transformation finance, financial software development, FinTech innovation, financial operations software, payment gateway integration, regulatory compliance software",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Fintech ERPNext & Custom Software Solutions for Financial Tech",
      "description": "Empower your FinTech business with robust ERPNext and custom software solutions. We deliver AI automation, secure platforms, and expert consulting for financial technology growth.",
      "articleBody": "ERPNext and software solutions designed specifically for financial technology businesses.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-27T04:12:45.165Z",
      "dateModified": "2025-10-27T04:12:45.165Z",
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
          <meta itemProp="name" content="Fintech ERPNext & Custom Software Solutions for Financial Tech" />
          <meta itemProp="description" content="Empower your FinTech business with robust ERPNext and custom software solutions. We deliver AI automation, secure platforms, and expert consulting for financial technology growth." />
        </article>

        {children}

        <BusinessSlider />

      </main>

    </>
  );
}
