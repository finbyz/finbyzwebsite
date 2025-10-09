import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: " Website Development Services & Design in Ahmedabad, India",
  description: "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
  keywords: "website development,\nweb developer,\nwebsite development company,\nweb development company,\nweb development services,\nweb design and development,\nweb development agency,\nweb app development,\nwebsite development in india,\nwebsite development in uk,",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/website-development",
  },
  openGraph: {
    title: " Website Development Services & Design in Ahmedabad, India",
    description: "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
    url: "https://web.finbyz.tech/website-development",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/web-development.svg", width: 1200, height: 630, alt: " Website Development Services & Design in Ahmedabad, India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: " Website Development Services & Design in Ahmedabad, India",
    description: "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
    creator: "@finbyz",
    images: ["/files/web-development.svg"],
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
    "name": " Website Development Services & Design in Ahmedabad, India",
    "description": "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
    "url": "https://web.finbyz.tech/website-development",
    "image": "/files/web-development.svg",
    "keywords": "website development,\nweb developer,\nwebsite development company,\nweb development company,\nweb development services,\nweb design and development,\nweb development agency,\nweb app development,\nwebsite development in india,\nwebsite development in uk,",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": " Website Development Services & Design in Ahmedabad, India",
      "description": "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
      
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
        <meta itemProp="name" content=" Website Development Services & Design in Ahmedabad, India" />
        <meta itemProp="description" content="Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
