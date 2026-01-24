import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Transparent Hiring Process & Career Opportunities",
  description: "Discover Finbyz Tech\'s structured and transparent hiring process. Learn how we recruit top talent for ERPNext, AI automation, and IT roles, ensuring a fair and engaging selection experience.",
  keywords: "hiring process, recruitment process, Finbyz Tech careers, job application steps, selection process, IT hiring, ERPNext jobs, AI automation careers, talent acquisition, interview process, Finbyz Tech recruitment, job openings, career opportunities, HR process, tech jobs India",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/careers/hiring-process",
  },
  openGraph: {
    title: "Transparent Hiring Process & Career Opportunities",
    description: "Discover Finbyz Tech\'s structured and transparent hiring process. Learn how we recruit top talent for ERPNext, AI automation, and IT roles, ensuring a fair and engaging selection experience.",
    url: "https://finbyz.tech/careers/hiring-process",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Hiring Process & Career Opportunities",
    description: "Discover Finbyz Tech\'s structured and transparent hiring process. Learn how we recruit top talent for ERPNext, AI automation, and IT roles, ensuring a fair and engaging selection experience.",
    creator: "@finbyztech",
    
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
    "name": "Transparent Hiring Process & Career Opportunities",
    "description": "Discover Finbyz Tech\'s structured and transparent hiring process. Learn how we recruit top talent for ERPNext, AI automation, and IT roles, ensuring a fair and engaging selection experience.",
    "url": "https://finbyz.tech/hiring-process",
    
    "keywords": "hiring process, recruitment process, Finbyz Tech careers, job application steps, selection process, IT hiring, ERPNext jobs, AI automation careers, talent acquisition, interview process, Finbyz Tech recruitment, job openings, career opportunities, HR process, tech jobs India",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Transparent Hiring Process & Career Opportunities",
      "description": "Discover Finbyz Tech\'s structured and transparent hiring process. Learn how we recruit top talent for ERPNext, AI automation, and IT roles, ensuring a fair and engaging selection experience.",
      "articleBody": "Step-by-step guide to Finbyz Tech’s recruitment and selection process.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-25T08:44:11.760Z",
      "dateModified": "2025-10-25T08:44:11.760Z",
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
        <meta itemProp="name" content="Transparent Hiring Process & Career Opportunities" />
        <meta itemProp="description" content="Discover Finbyz Tech\'s structured and transparent hiring process. Learn how we recruit top talent for ERPNext, AI automation, and IT roles, ensuring a fair and engaging selection experience." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
