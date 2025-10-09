import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Custom Software Development Company in Ahmedabad | FinByz Tech",
  description: "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
  keywords: "software development,\ncustom software development,\nsoftware development company,\nsoftware development company in ahmedabad,\nsoftware company in ahmedabad,\nsoftware development solutions,\ncustom software,\ncustom business software\nsoftware development companies,\nsoftware development companies in india",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/software-development",
  },
  openGraph: {
    title: "Custom Software Development Company in Ahmedabad | FinByz Tech",
    description: "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
    url: "https://web.finbyz.tech/software-development",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/banner-softwaredevelopment.svg", width: 1200, height: 630, alt: "Custom Software Development Company in Ahmedabad | FinByz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in Ahmedabad | FinByz Tech",
    description: "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
    creator: "@finbyz",
    images: ["/files/banner-softwaredevelopment.svg"],
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
    "name": "Custom Software Development Company in Ahmedabad | FinByz Tech",
    "description": "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
    "url": "https://web.finbyz.tech/software-development",
    "image": "/files/banner-softwaredevelopment.svg",
    "keywords": "software development,\ncustom software development,\nsoftware development company,\nsoftware development company in ahmedabad,\nsoftware company in ahmedabad,\nsoftware development solutions,\ncustom software,\ncustom business software\nsoftware development companies,\nsoftware development companies in india",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Custom Software Development Company in Ahmedabad | FinByz Tech",
      "description": "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
      
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
        <meta itemProp="name" content="Custom Software Development Company in Ahmedabad | FinByz Tech" />
        <meta itemProp="description" content="Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
