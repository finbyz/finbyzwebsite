import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
  description: "Explore the essentials of a Certificate of Analysis in 2024, including its definition and crucial compliance requirements.\n",
  keywords: "CoA, Certificate of Analysis, coa document",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/certificate-of-analysis-in-2024-definition-key-requirements",
  },
  openGraph: {
    title: "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
    description: "Explore the essentials of a Certificate of Analysis in 2024, including its definition and crucial compliance requirements.\n",
    url: "https://web.finbyz.tech/certificate-of-analysis-in-2024-definition-key-requirements",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
    description: "Explore the essentials of a Certificate of Analysis in 2024, including its definition and crucial compliance requirements.\n",
    creator: "@finbyz",
    
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
    "name": "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
    "description": "Explore the essentials of a Certificate of Analysis in 2024, including its definition and crucial compliance requirements.\n",
    "url": "https://web.finbyz.tech/certificate-of-analysis-in-2024-definition-key-requirements",
    
    "keywords": "CoA, Certificate of Analysis, coa document",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
      "description": "Explore the essentials of a Certificate of Analysis in 2024, including its definition and crucial compliance requirements.\n",
      "articleBody": "<section>\n   \n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"certificate-of-analysis-in-2024-definition-key-requirements\"\n                    height=\"100%\" src=\"/files/coa.PNG\" title=\"certificate-of-analysis-in-2024-definition-key-requirements\"\n                    width=\"80%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadei",
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process" />
        <meta itemProp="description" content="Explore the essentials of a Certificate of Analysis in 2024, including its definition and crucial compliance requirements.\n" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
