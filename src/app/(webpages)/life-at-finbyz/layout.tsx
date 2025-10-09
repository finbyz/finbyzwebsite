import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Life at Finbyz | Work Culture, Innovation & Career Growth",
  description: "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
  keywords: "Life at Finbyz,Work culture in tech companies,Learning and development in tech",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/life-at-finbyz",
  },
  openGraph: {
    title: "Life at Finbyz | Work Culture, Innovation & Career Growth",
    description: "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
    url: "https://web.finbyz.tech/life-at-finbyz",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Final banner LAF.jpg", width: 1200, height: 630, alt: "Life at Finbyz | Work Culture, Innovation & Career Growth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life at Finbyz | Work Culture, Innovation & Career Growth",
    description: "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
    creator: "@finbyz",
    images: ["/files/Final banner LAF.jpg"],
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
    "name": "Life at Finbyz | Work Culture, Innovation & Career Growth",
    "description": "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
    "url": "https://web.finbyz.tech/life-at-finbyz",
    "image": "/files/Final banner LAF.jpg",
    "keywords": "Life at Finbyz,Work culture in tech companies,Learning and development in tech",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Life at Finbyz | Work Culture, Innovation & Career Growth",
      "description": "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
      
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
        <meta itemProp="name" content="Life at Finbyz | Work Culture, Innovation & Career Growth" />
        <meta itemProp="description" content="Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
