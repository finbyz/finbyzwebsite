import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top ERP Implementation Challenges & Mistakes: Comprehensive Guide",
  description: "Avoiding some common ERP implementation mistakes and following the right strategies will pave your path towards successful implementation.",
  keywords: "challenges in implementing erp system, ERP Implementation mistakes , ERP implementation guide",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-implementation-mistakes",
  },
  openGraph: {
    title: "Top ERP Implementation Challenges & Mistakes: Comprehensive Guide",
    description: "Avoiding some common ERP implementation mistakes and following the right strategies will pave your path towards successful implementation.",
    url: "https://web.finbyz.tech/erp-implementation-mistakes",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top ERP Implementation Challenges & Mistakes: Comprehensive Guide",
    description: "Avoiding some common ERP implementation mistakes and following the right strategies will pave your path towards successful implementation.",
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
    "name": "Top ERP Implementation Challenges & Mistakes: Comprehensive Guide",
    "description": "Avoiding some common ERP implementation mistakes and following the right strategies will pave your path towards successful implementation.",
    "url": "https://web.finbyz.tech/erp-implementation-mistakes",
    
    "keywords": "challenges in implementing erp system, ERP Implementation mistakes , ERP implementation guide",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top ERP Implementation Challenges & Mistakes: Comprehensive Guide",
      "description": "Avoiding some common ERP implementation mistakes and following the right strategies will pave your path towards successful implementation.",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"ERP implementation mistakes\" height=\"100%\"\n                    src=\"/files/erp-implementation-mistakes-how-to-avoid-failures.svg\"\n                    title=\"ERP implementation mistakes\" width=\"100%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-50\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            ",
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
        <meta itemProp="name" content="Top ERP Implementation Challenges & Mistakes: Comprehensive Guide" />
        <meta itemProp="description" content="Avoiding some common ERP implementation mistakes and following the right strategies will pave your path towards successful implementation." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
