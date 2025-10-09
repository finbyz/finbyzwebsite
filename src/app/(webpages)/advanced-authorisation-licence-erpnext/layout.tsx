import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Import Export Licence Management | Finbyz tech",
  description: "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
  keywords: "ERPNext for Advanced Authorisation Licence,\nAdvance Authorisation Licences,\nImport Export Lincence management",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/advanced-authorisation-licence-erpnext",
  },
  openGraph: {
    title: "Import Export Licence Management | Finbyz tech",
    description: "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
    url: "https://web.finbyz.tech/advanced-authorisation-licence-erpnext",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Advance-Authorization-License-PageDesign.svg", width: 1200, height: 630, alt: "Import Export Licence Management | Finbyz tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import Export Licence Management | Finbyz tech",
    description: "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
    creator: "@finbyz",
    images: ["/files/Advance-Authorization-License-PageDesign.svg"],
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
    "name": "Import Export Licence Management | Finbyz tech",
    "description": "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
    "url": "https://web.finbyz.tech/advanced-authorisation-licence-erpnext",
    "image": "/files/Advance-Authorization-License-PageDesign.svg",
    "keywords": "ERPNext for Advanced Authorisation Licence,\nAdvance Authorisation Licences,\nImport Export Lincence management",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Import Export Licence Management | Finbyz tech",
      "description": "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
      
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
        <meta itemProp="name" content="Import Export Licence Management | Finbyz tech" />
        <meta itemProp="description" content="Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n" />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
