import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
  description: "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
  keywords: "Employee Monitoring Software, \nTime tracking software, \nStaff Monitoring software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/productify",
  },
  openGraph: {
    title: "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
    description: "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
    url: "https://web.finbyz.tech/productify",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Productify image (1).svg", width: 1200, height: 630, alt: "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
    description: "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
    creator: "@finbyz",
    images: ["/files/Productify image (1).svg"],
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
    "name": "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
    "description": "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
    "url": "https://web.finbyz.tech/productify",
    "image": "/files/Productify image (1).svg",
    "keywords": "Employee Monitoring Software, \nTime tracking software, \nStaff Monitoring software",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
      "description": "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
      
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
        <meta itemProp="name" content="Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software" />
        <meta itemProp="description" content="Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
