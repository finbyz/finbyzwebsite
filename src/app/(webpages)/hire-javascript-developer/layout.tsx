import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Dedicated JavaScript Developers | Expert JS Programmers",
  description: "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
  keywords: "hire javascript developer,\nhire javascript coder,\nhire javascript programmer,\nhire remote javascript developers,\nhire js developer,\nhire javascript expert,\nfreelance javascript developer,\njs freelance\n",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/hire-javascript-developer",
  },
  openGraph: {
    title: "Hire Dedicated JavaScript Developers | Expert JS Programmers",
    description: "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
    url: "https://web.finbyz.tech/hire-javascript-developer",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-JS-Dev.svg", width: 1200, height: 630, alt: "Hire Dedicated JavaScript Developers | Expert JS Programmers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated JavaScript Developers | Expert JS Programmers",
    description: "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
    creator: "@yourhandle",
    images: ["/files/Hire-JS-Dev.svg"],
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
    "name": "Hire Dedicated JavaScript Developers | Expert JS Programmers",
    "description": "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
    "url": "https://web.finbyz.tech/hire-javascript-developer",
    "image": "/files/Hire-JS-Dev.svg",
    "keywords": "hire javascript developer,\nhire javascript coder,\nhire javascript programmer,\nhire remote javascript developers,\nhire js developer,\nhire javascript expert,\nfreelance javascript developer,\njs freelance\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Hire Dedicated JavaScript Developers | Expert JS Programmers",
      "description": "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
      
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
        <meta itemProp="name" content="Hire Dedicated JavaScript Developers | Expert JS Programmers" />
        <meta itemProp="description" content="Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
