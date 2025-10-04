import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Data Analytics Company | Finbyz Tech",
  description: "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
  keywords: "data analytics,\ndata analytics companies, \ncrm analytics,\nanalytics,   \nanalytics solution provider, \nanalytics ahmedabad, \nanalytic solution ahmedabad, \nanalytics solution ahmedabad, \ndata analysis service providers, \ndata analysis service providers in ahmedabad, \ndata analysis service providers ahmedabad, ",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/data-analytics",
  },
  openGraph: {
    title: "Data Analytics Company | Finbyz Tech",
    description: "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
    url: "https://web.finbyz.tech/data-analytics",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/banner-analysis.svg", width: 1200, height: 630, alt: "Data Analytics Company | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics Company | Finbyz Tech",
    description: "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
    creator: "@yourhandle",
    images: ["/files/banner-analysis.svg"],
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
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Data Analytics Company | Finbyz Tech",
    "description": "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
    "url": "https://web.finbyz.tech/data-analytics",
    "image": "/files/banner-analysis.svg",
    "keywords": "data analytics,\ndata analytics companies, \ncrm analytics,\nanalytics,   \nanalytics solution provider, \nanalytics ahmedabad, \nanalytic solution ahmedabad, \nanalytics solution ahmedabad, \ndata analysis service providers, \ndata analysis service providers in ahmedabad, \ndata analysis service providers ahmedabad, ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Data Analytics Company | Finbyz Tech",
      "description": "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
      
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
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Data Analytics Company | Finbyz Tech" />
        <meta itemProp="description" content="Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n" />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
