import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Web Application Developers & Programming Services",
  description: "Looking for top-notch web application development services? Hire skilled web app developers for website and app development, expert in web programming.",
  keywords: "hire web application developer,\nhire web app developer,\nfreelance web application developer,\nhire web developer,\nweb application developer,\nweb app development",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/hire-web-application-developers",
  },
  openGraph: {
    title: "Hire Web Application Developers & Programming Services",
    description: "Looking for top-notch web application development services? Hire skilled web app developers for website and app development, expert in web programming.",
    url: "https://web.finbyz.tech/hire-web-application-developers",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-Web-App-Developer.svg", width: 1200, height: 630, alt: "Hire Web Application Developers & Programming Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Web Application Developers & Programming Services",
    description: "Looking for top-notch web application development services? Hire skilled web app developers for website and app development, expert in web programming.",
    creator: "@finbyz",
    images: ["/files/Hire-Web-App-Developer.svg"],
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
    "name": "Hire Web Application Developers & Programming Services",
    "description": "Looking for top-notch web application development services? Hire skilled web app developers for website and app development, expert in web programming.",
    "url": "https://web.finbyz.tech/hire-web-application-developers",
    "image": "/files/Hire-Web-App-Developer.svg",
    "keywords": "hire web application developer,\nhire web app developer,\nfreelance web application developer,\nhire web developer,\nweb application developer,\nweb app development",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Hire Web Application Developers & Programming Services",
      "description": "Looking for top-notch web application development services? Hire skilled web app developers for website and app development, expert in web programming.",
      
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
        <meta itemProp="name" content="Hire Web Application Developers & Programming Services" />
        <meta itemProp="description" content="Looking for top-notch web application development services? Hire skilled web app developers for website and app development, expert in web programming." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
