import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";



export const metadata: Metadata = {
  title: "Construction ERP Software Solutions for Project Management",
  description: "Streamline construction projects, resources, and finances with advanced ERPNext solutions. Optimize operations, reduce costs, and boost efficiency in the building industry.",
  keywords: "construction ERP, ERPNext construction, construction management software, project management ERP, construction resource planning, construction accounting software, building industry ERP, construction project tracking, custom ERP construction, construction business solutions, construction operations management, ERP implementation construction, digital transformation construction",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/erp-for-construction-industry",
  },
  openGraph: {
    title: "Construction ERP Software Solutions for Project Management",
    description: "Streamline construction projects, resources, and finances with advanced ERPNext solutions. Optimize operations, reduce costs, and boost efficiency in the building industry.",
    url: "https://erp.finbyz.tech/erp-for-construction-industry",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Construction ERP Software Solutions for Project Management",
    description: "Streamline construction projects, resources, and finances with advanced ERPNext solutions. Optimize operations, reduce costs, and boost efficiency in the building industry.",
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
    "name": "Construction ERP Software Solutions for Project Management",
    "description": "Streamline construction projects, resources, and finances with advanced ERPNext solutions. Optimize operations, reduce costs, and boost efficiency in the building industry.",
    "url": "https://erp.finbyz.tech/erp-for-construction-industry",

    "keywords": "construction ERP, ERPNext construction, construction management software, project management ERP, construction resource planning, construction accounting software, building industry ERP, construction project tracking, custom ERP construction, construction business solutions, construction operations management, ERP implementation construction, digital transformation construction",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Construction ERP Software Solutions for Project Management",
      "description": "Streamline construction projects, resources, and finances with advanced ERPNext solutions. Optimize operations, reduce costs, and boost efficiency in the building industry.",
      "articleBody": "Manage projects, resources, and operations in construction using ERPNext solutions.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-27T04:07:13.310Z",
      "dateModified": "2025-10-27T04:07:13.310Z",
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
          <meta itemProp="name" content="Construction ERP Software Solutions for Project Management" />
          <meta itemProp="description" content="Streamline construction projects, resources, and finances with advanced ERPNext solutions. Optimize operations, reduce costs, and boost efficiency in the building industry." />
        </article>

        {children}

        <BusinessSlider />

      </main>

    </>
  );
}
