import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Job Opening | Career Opportunity",
  description: "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
  keywords: "Job, Internship, Job in Ahmedabad,Python, finbyz tech private limited, python developer, python jobs, python programmer, jobs, job, python careers, software developer jobs, python developers, sales manager,tech sales manager, written communication jobs, content writer, content writer jobs, content writing jobs, job for content writer, job writer, analytics solution provider, analytics solution ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/career",
  },
  openGraph: {
    title: "Job Opening | Career Opportunity",
    description: "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
    url: "https://web.finbyz.tech/career",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/banner-career.svg", width: 1200, height: 630, alt: "Job Opening | Career Opportunity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Opening | Career Opportunity",
    description: "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
    creator: "@finbyz",
    images: ["/files/banner-career.svg"],
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
    "name": "Job Opening | Career Opportunity",
    "description": "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
    "url": "https://web.finbyz.tech/career",
    "image": "/files/banner-career.svg",
    "keywords": "Job, Internship, Job in Ahmedabad,Python, finbyz tech private limited, python developer, python jobs, python programmer, jobs, job, python careers, software developer jobs, python developers, sales manager,tech sales manager, written communication jobs, content writer, content writer jobs, content writing jobs, job for content writer, job writer, analytics solution provider, analytics solution ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Job Opening | Career Opportunity",
      "description": "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
      
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
        <meta itemProp="name" content="Job Opening | Career Opportunity" />
        <meta itemProp="description" content="At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
