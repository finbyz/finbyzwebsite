import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top 8 ERP Implementation Challenges and How to Overcome Them",
  description: "There are various challenges of ERP Implementation, such as finding the right ERP Software,proper usage,training,sufficient testing and more",
  keywords: "erp implementation, Challenges of ERP, erp implementation challenges",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/challenges-of-erp-implementation",
  },
  openGraph: {
    title: "Top 8 ERP Implementation Challenges and How to Overcome Them",
    description: "There are various challenges of ERP Implementation, such as finding the right ERP Software,proper usage,training,sufficient testing and more",
    url: "https://web.finbyz.tech/challenges-of-erp-implementation",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 8 ERP Implementation Challenges and How to Overcome Them",
    description: "There are various challenges of ERP Implementation, such as finding the right ERP Software,proper usage,training,sufficient testing and more",
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
    "name": "Top 8 ERP Implementation Challenges and How to Overcome Them",
    "description": "There are various challenges of ERP Implementation, such as finding the right ERP Software,proper usage,training,sufficient testing and more",
    "url": "https://web.finbyz.tech/challenges-of-erp-implementation",
    
    "keywords": "erp implementation, Challenges of ERP, erp implementation challenges",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top 8 ERP Implementation Challenges and How to Overcome Them",
      "description": "There are various challenges of ERP Implementation, such as finding the right ERP Software,proper usage,training,sufficient testing and more",
      "articleBody": "<section class=\"\">\n    <div class=\"tech_update\">\n        <div class=\"container-fluid\">\n            <div class=\"row p-lr-50\">\n                <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"Challenges of ERP implementation\"\n                        title=\"Challenges of ERP implementation\" height=\"100%\" src=\"/files/challenges.svg\" width=\"100%\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section>\n  \n        <div class=\"row\">\n            <d",
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
        <meta itemProp="name" content="Top 8 ERP Implementation Challenges and How to Overcome Them" />
        <meta itemProp="description" content="There are various challenges of ERP Implementation, such as finding the right ERP Software,proper usage,training,sufficient testing and more" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
