import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Django Developers Today \n",
  description: "Looking to hire Django developers? Find expert Python Django developers for your project needs. Hire Django developers today and level up your project!",
  keywords: "Django developers,\nhire django developer,\npython django developer,\npython and django developer\ndjango developer,\nfreelance django developer,\nhire django developer,\ndjango freelancer,\nremote django developer,\ndjango company,\nhire python django developer,	\n",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/hire-django-developer",
  },
  openGraph: {
    title: "Hire Django Developers Today \n",
    description: "Looking to hire Django developers? Find expert Python Django developers for your project needs. Hire Django developers today and level up your project!",
    url: "https://web.finbyz.tech/hire-django-developer",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-dJango-Dev - New.svg", width: 1200, height: 630, alt: "Hire Django Developers Today \n" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Django Developers Today \n",
    description: "Looking to hire Django developers? Find expert Python Django developers for your project needs. Hire Django developers today and level up your project!",
    creator: "@yourhandle",
    images: ["/files/Hire-dJango-Dev - New.svg"],
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
    "name": "Hire Django Developers Today \n",
    "description": "Looking to hire Django developers? Find expert Python Django developers for your project needs. Hire Django developers today and level up your project!",
    "url": "https://web.finbyz.tech/hire-django-developer",
    "image": "/files/Hire-dJango-Dev - New.svg",
    "keywords": "Django developers,\nhire django developer,\npython django developer,\npython and django developer\ndjango developer,\nfreelance django developer,\nhire django developer,\ndjango freelancer,\nremote django developer,\ndjango company,\nhire python django developer,	\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Hire Django Developers Today \n",
      "description": "Looking to hire Django developers? Find expert Python Django developers for your project needs. Hire Django developers today and level up your project!",
      
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
        <meta itemProp="name" content="Hire Django Developers Today \n" />
        <meta itemProp="description" content="Looking to hire Django developers? Find expert Python Django developers for your project needs. Hire Django developers today and level up your project!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
