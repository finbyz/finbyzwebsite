import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
  description: "Various Significance of System and Process are uniformity, precision, scalablity, productivity and adaptability.",
  keywords: "standard operating procedures,\nprocess improvement,\nSystem and process",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/significance-of-system-and-process",
  },
  openGraph: {
    title: "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
    description: "Various Significance of System and Process are uniformity, precision, scalablity, productivity and adaptability.",
    url: "https://web.finbyz.tech/significance-of-system-and-process",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
    description: "Various Significance of System and Process are uniformity, precision, scalablity, productivity and adaptability.",
    creator: "@yourhandle",
    
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
    "description": "Various Significance of System and Process are uniformity, precision, scalablity, productivity and adaptability.",
    "url": "https://web.finbyz.tech/significance-of-system-and-process",
    
    "keywords": "standard operating procedures,\nprocess improvement,\nSystem and process",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
      "description": "Various Significance of System and Process are uniformity, precision, scalablity, productivity and adaptability.",
      "articleBody": "<section class=\"mt-4\">\n    <div class=\"container-fluid\">\n        <div class=\"row pt-20 pb-20\">\n            <div class=\"col-12 col-sm-12 text-center\">\n                <img alt=\"Significance of System and Process\" class=\"blog-main-img\"\n                    src=\"/files/significance-of-system.svg\" title=\"Significance of System and Process\">\n            </div>\n            <div class=\"col-sm-12 text-center finbyz-fadeinup\" style=\"padding-top: 30px;\">\n                <h2>Significance of System a",
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs" />
        <meta itemProp="description" content="Various Significance of System and Process are uniformity, precision, scalablity, productivity and adaptability." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
