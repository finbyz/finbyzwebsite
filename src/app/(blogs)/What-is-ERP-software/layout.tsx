import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
  description: "Streamline operations & boost efficiency with ERP software. Manage resources, automate tasks & analyze data effectively. Explore solutions n",
  keywords: "Enterprise Resource Planning Systems\nWhat is ERP software,\nenterprise erp",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/What-is-ERP-software",
  },
  openGraph: {
    title: "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
    description: "Streamline operations & boost efficiency with ERP software. Manage resources, automate tasks & analyze data effectively. Explore solutions n",
    url: "https://web.finbyz.tech/What-is-ERP-software",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
    description: "Streamline operations & boost efficiency with ERP software. Manage resources, automate tasks & analyze data effectively. Explore solutions n",
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
    "name": "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
    "description": "Streamline operations & boost efficiency with ERP software. Manage resources, automate tasks & analyze data effectively. Explore solutions n",
    "url": "https://web.finbyz.tech/What-is-ERP-software",
    
    "keywords": "Enterprise Resource Planning Systems\nWhat is ERP software,\nenterprise erp",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
      "description": "Streamline operations & boost efficiency with ERP software. Manage resources, automate tasks & analyze data effectively. Explore solutions n",
      "articleBody": "<section>\n   \n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"ERP software\"\n                    height=\"100%\" src=\"/files/Benefits of ERP286bf5.svg\" title=\"ERP software\"\n                    width=\"80%\"></div>\n\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            <div class=\"col-md-12 finbyz-fadeinup\">",
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
        <meta itemProp="name" content="What is ERP Software? | Understanding Enterprise Resource Planning Systems" />
        <meta itemProp="description" content="Streamline operations & boost efficiency with ERP software. Manage resources, automate tasks & analyze data effectively. Explore solutions n" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
