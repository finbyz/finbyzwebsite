import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Smart Card Scanner Overview",
  description: "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
  keywords: "Smart Card Scanner, business card management, ERPNext, AI extraction, contact information, Telegram bot, data validation, lead generation, CRM, data hygiene, duplicate prevention",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://web.finbyz.tech/smart-card-scanner-overview",
  },
  openGraph: {
    title: "Smart Card Scanner Overview",
    description: "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
    url: "https://web.finbyz.tech/smart-card-scanner-overview",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/ChatGPT Image Oct 14, 2025, 03_00_34 PM.png", width: 1200, height: 630, alt: "Smart Card Scanner Overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Card Scanner Overview",
    description: "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
    creator: "@finbyztech",
    images: ["/files/ChatGPT Image Oct 14, 2025, 03_00_34 PM.png"],
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
    "name": "Smart Card Scanner Overview",
    "description": "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
    "url": "https://web.finbyz.tech/smart-card-scanner-overview",
    "image": "/files/ChatGPT Image Oct 14, 2025, 03_00_34 PM.png",
    "keywords": "Smart Card Scanner, business card management, ERPNext, AI extraction, contact information, Telegram bot, data validation, lead generation, CRM, data hygiene, duplicate prevention",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Smart Card Scanner Overview",
      "description": "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
      "articleBody": "Smart Card Scanner\nOverview\nThe Smart Card Scanner revolutionizes business card management by leveraging artificial intelligence and seamless integration with ERPNext. This intelligent tool allows users to scan or upload business card images using a Telegram chatbot interface, making the process highly accessible and convenient from anywhere.\n\nUpon receiving the scan, advanced AI models analyze the image, extracting structured contact information including full name, phone numbers, email address",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-15T08:33:13.868Z",
      "dateModified": "2025-10-15T08:33:13.868Z",
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
        <meta itemProp="name" content="Smart Card Scanner Overview" />
        <meta itemProp="description" content="Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
