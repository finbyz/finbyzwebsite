import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Powered Resume Ranker",
  description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
  keywords: "AI, resume ranking, recruitment workflow, job description, skill extraction, resume parsing, candidate evaluation, scoring logic, skill matching, hiring decisions",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/ai-powered-resume-ranker",
  },
  openGraph: {
    title: "AI Powered Resume Ranker",
    description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
    url: "https://finbyz.tech/ai-powered-resume-ranker",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Powered Resume Ranker",
    description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
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
    "name": "AI Powered Resume Ranker",
    "description": "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
    "url": "https://finbyz.tech/ai-powered-resume-ranker",
    
    "keywords": "AI, resume ranking, recruitment workflow, job description, skill extraction, resume parsing, candidate evaluation, scoring logic, skill matching, hiring decisions",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "AI Powered Resume Ranker",
      "description": "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
      "articleBody": "The recruitment workflow starts when a job application is received and the job description (JD) is fetched from ERPNext or via webhook. AI extracts key skills from the JD to define the job requirements. On the candidate side, the resume is parsed and cleaned to extract skills and experience. These are compared against the JD requirements using a scoring logic that applies rules and weights for fair evaluation. The system produces a skill score, overall rating, and feedback to help recruiters mak",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T12:05:18.693Z",
      "dateModified": "2025-10-14T12:05:18.693Z",
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
        <meta itemProp="name" content="AI Powered Resume Ranker" />
        <meta itemProp="description" content="Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
