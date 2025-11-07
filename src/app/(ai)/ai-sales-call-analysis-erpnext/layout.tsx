import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Sales Call Recording & Analysis in ERPNext",
  description: "Record and analyze sales calls in ERPNext. Get AI-powered transcripts, actionable feedback, and optimized scripts to improve sales conversions and scale coaching.",
  keywords: "Voice Recording\",\n    \"AI Feedback\",\n    \"Sales Calls\",\n    \"ERPNext\",\n    \"Automatic Transcription\",\n    \"Call Analysis\",\n    \"Outreach Scripts\",\n    \"Sales Coaching\",\n    \"Sales Conversions\"",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/ai-sales-call-analysis-erpnext",
  },
  openGraph: {
    title: "AI Sales Call Recording & Analysis in ERPNext",
    description: "Record and analyze sales calls in ERPNext. Get AI-powered transcripts, actionable feedback, and optimized scripts to improve sales conversions and scale coaching.",
    url: "https://finbyz.tech/ai-sales-call-analysis-erpnext",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Generated Image September 09, 2025 - 11_33AM.png", width: 1200, height: 630, alt: "AI Sales Call Recording & Analysis in ERPNext" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Call Recording & Analysis in ERPNext",
    description: "Record and analyze sales calls in ERPNext. Get AI-powered transcripts, actionable feedback, and optimized scripts to improve sales conversions and scale coaching.",
    creator: "@finbyztech",
    images: ["/files/Generated Image September 09, 2025 - 11_33AM.png"],
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
    "name": "AI Sales Call Recording & Analysis in ERPNext",
    "description": "Record and analyze sales calls in ERPNext. Get AI-powered transcripts, actionable feedback, and optimized scripts to improve sales conversions and scale coaching.",
    "url": "https://finbyz.tech/ai-sales-call-analysis-erpnext",
    "image": "/files/Generated Image September 09, 2025 - 11_33AM.png",
    "keywords": "Voice Recording\",\n    \"AI Feedback\",\n    \"Sales Calls\",\n    \"ERPNext\",\n    \"Automatic Transcription\",\n    \"Call Analysis\",\n    \"Outreach Scripts\",\n    \"Sales Coaching\",\n    \"Sales Conversions\"",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "AI Sales Call Recording & Analysis in ERPNext",
      "description": "Record and analyze sales calls in ERPNext. Get AI-powered transcripts, actionable feedback, and optimized scripts to improve sales conversions and scale coaching.",
      "articleBody": "Voice Recording + AI Feedback\nOverview\nAn AI-powered tool that records and analyzes sales calls, providing instant transcripts, actionable feedback, and improved outreach scripts—all within ERPNext. This tool transforms every call into a scalable coaching opportunity to improve sales conversions.\n\nWorkflow Steps\nIn-App Recording\n\nRecord calls directly inside ERPNext or upload recordings from third-party tools.\n\nAutomatic Transcription\n\nAI converts speech into a detailed, word-by-word transcript.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T12:00:37.917Z",
      "dateModified": "2025-10-14T12:00:37.917Z",
    }
  };

  const productstructuredData = 

{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI Sales Call Recording & Analysis in ERPNext",
  "url": "https://finbyz.tech/ai-sales-call-analysis-erpnext",
  "description": "Record and analyze sales calls in ERPNext. Get AI-powered transcripts, actionable feedback, and optimized scripts to improve sales conversions and scale coaching.",  
  "softwareVersion": "–",       
  "applicationCategory": "MarketingAutomation",  
  "operatingSystem": "Web",    
  "image": [
    "https://finbyz.tech/files/Generated Image September 09, 2025 - 11_33AM.png", 
    
  ],
  "offers": {
    "@type": "Offer",
    "price": "–",               
    "priceCurrency": "INR",    
     "url": "https://finbyz.tech/ai-sales-call-analysis-erpnext",
    "availability": "https://schema.org/InStock"  
  },
  "brand": {
    "@type": "Organization",
    "name": "Finbyz Tech Pvt Ltd",
    "url": "https://finbyz.tech"
  }
}


  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="productstructured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productstructuredData) }}
      />
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="AI Sales Call Recording & Analysis in ERPNext" />
        <meta itemProp="description" content="Record and analyze sales calls in ERPNext. Get AI-powered transcripts, actionable feedback, and optimized scripts to improve sales conversions and scale coaching." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
