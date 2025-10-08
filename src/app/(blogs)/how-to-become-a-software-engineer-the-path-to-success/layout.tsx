import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
  description: "Learn how to become a software engineer: essential steps, skills, and resources for a rewarding career in just one guide!",
  keywords: "How to Become a Software Engineer,\nsoftware engineer skills,\nentry level software engineer",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/how-to-become-a-software-engineer-the-path-to-success",
  },
  openGraph: {
    title: "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
    description: "Learn how to become a software engineer: essential steps, skills, and resources for a rewarding career in just one guide!",
    url: "https://web.finbyz.tech/how-to-become-a-software-engineer-the-path-to-success",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
    description: "Learn how to become a software engineer: essential steps, skills, and resources for a rewarding career in just one guide!",
    creator: "@yourhandle",
    
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
    "description": "Learn how to become a software engineer: essential steps, skills, and resources for a rewarding career in just one guide!",
    "url": "https://web.finbyz.tech/how-to-become-a-software-engineer-the-path-to-success",
    
    "keywords": "How to Become a Software Engineer,\nsoftware engineer skills,\nentry level software engineer",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
      "description": "Learn how to become a software engineer: essential steps, skills, and resources for a rewarding career in just one guide!",
      "articleBody": "<section>\n   \n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"How to Become a Software Engineer: The Path to Success\"\n                    height=\"100%\" src=\"/files/engggpng.PNG\" title=\"How to Become a Software Engineer: The Path to Success\"\n                    width=\"80%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <d",
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="How to Become a Software Engineer: Essential Skills & Entry-Level Guide" />
        <meta itemProp="description" content="Learn how to become a software engineer: essential steps, skills, and resources for a rewarding career in just one guide!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
