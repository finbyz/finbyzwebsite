import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Meeting Management",
  description: "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
  keywords: "ERPNext for Meeting Management,\nerpnext meeting scheduling,\nmeeting summary erpnext,\nmeeting management,\nmanagement meeting,\nevent management plans,\nmanagement and meeting,\nmanagerial meeting",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/meeting-management-erpnext",
  },
  openGraph: {
    title: "ERPNext Meeting Management",
    description: "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
    url: "https://web.finbyz.tech/meeting-management-erpnext",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Meeting-Management-PageDesign-SVG.avif", width: 1200, height: 630, alt: "ERPNext Meeting Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Meeting Management",
    description: "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
    creator: "@finbyz",
    images: ["/files/Meeting-Management-PageDesign-SVG.avif"],
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
    "name": "ERPNext Meeting Management",
    "description": "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
    "url": "https://web.finbyz.tech/meeting-management-erpnext",
    "image": "/files/Meeting-Management-PageDesign-SVG.avif",
    "keywords": "ERPNext for Meeting Management,\nerpnext meeting scheduling,\nmeeting summary erpnext,\nmeeting management,\nmanagement meeting,\nevent management plans,\nmanagement and meeting,\nmanagerial meeting",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext Meeting Management",
      "description": "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
      
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
        <meta itemProp="name" content="ERPNext Meeting Management" />
        <meta itemProp="description" content="Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
