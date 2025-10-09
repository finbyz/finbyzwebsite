import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How Artificial Intelligence is Transforming Global Communication",
  description: "Discover how AI Whisperers are transforming communication worldwide. Explore the impact of artificial intelligence on language, personalizat",
  keywords: "Artificial intelligence,\nCommunication,\nAI in communication",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/ai-revolutionizing-global-communication-a-hint-of-change",
  },
  openGraph: {
    title: "How Artificial Intelligence is Transforming Global Communication",
    description: "Discover how AI Whisperers are transforming communication worldwide. Explore the impact of artificial intelligence on language, personalizat",
    url: "https://web.finbyz.tech/ai-revolutionizing-global-communication-a-hint-of-change",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How Artificial Intelligence is Transforming Global Communication",
    description: "Discover how AI Whisperers are transforming communication worldwide. Explore the impact of artificial intelligence on language, personalizat",
    creator: "@finbyz",
    
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
    "name": "How Artificial Intelligence is Transforming Global Communication",
    "description": "Discover how AI Whisperers are transforming communication worldwide. Explore the impact of artificial intelligence on language, personalizat",
    "url": "https://web.finbyz.tech/ai-revolutionizing-global-communication-a-hint-of-change",
    
    "keywords": "Artificial intelligence,\nCommunication,\nAI in communication",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "How Artificial Intelligence is Transforming Global Communication",
      "description": "Discover how AI Whisperers are transforming communication worldwide. Explore the impact of artificial intelligence on language, personalizat",
      "articleBody": "<section>\n   \n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"AI is Revolutionizing Global Communication\"\n                    height=\"80%\" src=\"/files/AI_ERP.jpg\" title=\"AI is Revolutionizing Global Communication\"\n                    width=\"70%\"></div>\n\n        </div>\n    </div>\n\n\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n    ",
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="How Artificial Intelligence is Transforming Global Communication" />
        <meta itemProp="description" content="Discover how AI Whisperers are transforming communication worldwide. Explore the impact of artificial intelligence on language, personalizat" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
