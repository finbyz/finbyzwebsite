import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top HR Software Solutions in India | Optimize Your HR Systems",
  description: "Explore top HR software solutions in India for efficient HR management. HR payroll software and management tools tailored to your needs. ",
  keywords: "HR Systems,\nHR Software in India, \nHR Payroll Software,\nHR Management Software\'s",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/defining-the-best-hr-software-options-for-indian-companies",
  },
  openGraph: {
    title: "Top HR Software Solutions in India | Optimize Your HR Systems",
    description: "Explore top HR software solutions in India for efficient HR management. HR payroll software and management tools tailored to your needs. ",
    url: "https://web.finbyz.tech/defining-the-best-hr-software-options-for-indian-companies",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top HR Software Solutions in India | Optimize Your HR Systems",
    description: "Explore top HR software solutions in India for efficient HR management. HR payroll software and management tools tailored to your needs. ",
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
    "name": "Top HR Software Solutions in India | Optimize Your HR Systems",
    "description": "Explore top HR software solutions in India for efficient HR management. HR payroll software and management tools tailored to your needs. ",
    "url": "https://web.finbyz.tech/defining-the-best-hr-software-options-for-indian-companies",
    
    "keywords": "HR Systems,\nHR Software in India, \nHR Payroll Software,\nHR Management Software\'s",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top HR Software Solutions in India | Optimize Your HR Systems",
      "description": "Explore top HR software solutions in India for efficient HR management. HR payroll software and management tools tailored to your needs. ",
      "articleBody": "<section>\n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 mb-12 rollover finbyz-fadeinup\"><img alt=\"HR Services\"\n                    height=\"80%\" src=\"/files/ERP_Implement.svg\" title=\"HR Services\"\n                    width=\"80%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-12 finbyz-fadeinup\">\n     ",
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
        <meta itemProp="name" content="Top HR Software Solutions in India | Optimize Your HR Systems" />
        <meta itemProp="description" content="Explore top HR software solutions in India for efficient HR management. HR payroll software and management tools tailored to your needs. " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
