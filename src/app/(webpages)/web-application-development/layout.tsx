import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web Application Development Company in Ahmedabad, India",
  description: "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
  keywords: "Web Application, Business Software, web application development, web app development, enterprise level web applications, structured application development, web application development, web based business software, application developer in ahmedabad, app maker",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/web-application-development",
  },
  openGraph: {
    title: "Web Application Development Company in Ahmedabad, India",
    description: "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
    url: "https://web.finbyz.tech/web-application-development",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/web-app-development.svg", width: 1200, height: 630, alt: "Web Application Development Company in Ahmedabad, India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Development Company in Ahmedabad, India",
    description: "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
    creator: "@yourhandle",
    images: ["/files/web-app-development.svg"],
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
    "name": "Web Application Development Company in Ahmedabad, India",
    "description": "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
    "url": "https://web.finbyz.tech/web-application-development",
    "image": "/files/web-app-development.svg",
    "keywords": "Web Application, Business Software, web application development, web app development, enterprise level web applications, structured application development, web application development, web based business software, application developer in ahmedabad, app maker",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Web Application Development Company in Ahmedabad, India",
      "description": "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
      
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
        <meta itemProp="name" content="Web Application Development Company in Ahmedabad, India" />
        <meta itemProp="description" content="Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
