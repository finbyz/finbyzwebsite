import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InquiryForm from "@/components/ui/InquiryForm";

export const metadata: Metadata = {
  title: "ERP for Pharmaceuticals Streamline Operations & Compliance",
  description: "Transform your pharmaceutical operations with tailored ERPNext solutions. Manage production, inventory, and ensure regulatory compliance efficiently. Boost efficiency and reduce costs.",
  keywords: "ERP for Pharma, Pharmaceutical ERPNext, Pharma Manufacturing Software, Regulatory Compliance ERP, Batch Production Management, Quality Control Pharma, Inventory Management Pharma, Supply Chain Pharma, Pharmaceutical Software Solutions, ERPNext Implementation Pharma, GxP Compliance Software, FDA Compliance ERP, Finbyz Tec Pharma, Pharma Digital Transformation, AI in Pharmaceutical ERP",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/erp-for-pharmaceuticals",
  },
  openGraph: {
    title: "ERP for Pharmaceuticals Streamline Operations & Compliance",
    description: "Transform your pharmaceutical operations with tailored ERPNext solutions. Manage production, inventory, and ensure regulatory compliance efficiently. Boost efficiency and reduce costs.",
    url: "https://erp.finbyz.tech/erp-for-pharmaceuticals",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "ERP for Pharmaceuticals Streamline Operations & Compliance",
    description: "Transform your pharmaceutical operations with tailored ERPNext solutions. Manage production, inventory, and ensure regulatory compliance efficiently. Boost efficiency and reduce costs.",
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
    "name": "ERP for Pharmaceuticals Streamline Operations & Compliance",
    "description": "Transform your pharmaceutical operations with tailored ERPNext solutions. Manage production, inventory, and ensure regulatory compliance efficiently. Boost efficiency and reduce costs.",
    "url": "https://erp.finbyz.tech/erp-for-pharmaceuticals",

    "keywords": "ERP for Pharma, Pharmaceutical ERPNext, Pharma Manufacturing Software, Regulatory Compliance ERP, Batch Production Management, Quality Control Pharma, Inventory Management Pharma, Supply Chain Pharma, Pharmaceutical Software Solutions, ERPNext Implementation Pharma, GxP Compliance Software, FDA Compliance ERP, Finbyz Tec Pharma, Pharma Digital Transformation, AI in Pharmaceutical ERP",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP for Pharmaceuticals Streamline Operations & Compliance",
      "description": "Transform your pharmaceutical operations with tailored ERPNext solutions. Manage production, inventory, and ensure regulatory compliance efficiently. Boost efficiency and reduce costs.",
      "articleBody": "ERPNext tailored for pharmaceutical companies to manage production, inventory, and regulatory compliance.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T10:24:23.956Z",
      "dateModified": "2025-10-28T10:24:23.956Z",
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
          <meta itemProp="name" content="ERP for Pharmaceuticals Streamline Operations & Compliance" />
          <meta itemProp="description" content="Transform your pharmaceutical operations with tailored ERPNext solutions. Manage production, inventory, and ensure regulatory compliance efficiently. Boost efficiency and reduce costs." />
        </article>

        {children}

        <BusinessSlider />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
