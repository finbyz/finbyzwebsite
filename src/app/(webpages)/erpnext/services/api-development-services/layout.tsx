import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";



export const metadata: Metadata = {
  title: "Custom API Development for Seamless Business Integration",
  description: "Unlock seamless data flow and process automation with custom API development services. Integrate ERPNext with your enterprise applications for enhanced efficiency.",
  keywords: "API development services, custom API solutions, ERPNext API integration, enterprise application integration, business system connectivity, data synchronization, RESTful API development, secure API, web service development, automation APIs, Finbyz Tech API, digital transformation APIs",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/api-development-services",
  },
  openGraph: {
    title: "Custom API Development for Seamless Business Integration",
    description: "Unlock seamless data flow and process automation with custom API development services. Integrate ERPNext with your enterprise applications for enhanced efficiency.",
    url: "https://finbyz.tech/api-development-services",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Custom API Development for Seamless Business Integration",
    description: "Unlock seamless data flow and process automation with custom API development services. Integrate ERPNext with your enterprise applications for enhanced efficiency.",
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
    "name": "Custom API Development for Seamless Business Integration",
    "description": "Unlock seamless data flow and process automation with custom API development services. Integrate ERPNext with your enterprise applications for enhanced efficiency.",
    "url": "https://finbyz.tech/api-development-services",

    "keywords": "API development services, custom API solutions, ERPNext API integration, enterprise application integration, business system connectivity, data synchronization, RESTful API development, secure API, web service development, automation APIs, Finbyz Tech API, digital transformation APIs",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Custom API Development for Seamless Business Integration",
      "description": "Unlock seamless data flow and process automation with custom API development services. Integrate ERPNext with your enterprise applications for enhanced efficiency.",
      "articleBody": "Custom API solutions to integrate ERPNext with other enterprise applications and platforms.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T04:25:59.105Z",
      "dateModified": "2025-10-28T04:25:59.105Z",
    }
  };

  return (
    <>
      <main>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="Custom API Development for Seamless Business Integration" />
          <meta itemProp="description" content="Unlock seamless data flow and process automation with custom API development services. Integrate ERPNext with your enterprise applications for enhanced efficiency." />
        </article>

        {children}

        <BusinessSlider />

      </main>

    </>
  );
}
