import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IT Consulting Services in Ahmedabad, Gujarat - India",
  description: "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
  keywords: "IT Consulting, IT Investment , consulting of IT , consulting in IT , IT consulting support, expert business advice, expert IT advice, IT consulting services, it consulting companies, it consulting companies in ahmedabad, IT consulting service in ahmedabad, IT consulting ahmedabad, IT service ahmedabad, it adviser ahmedabad, it adviser  ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/it-consulting",
  },
  openGraph: {
    title: "IT Consulting Services in Ahmedabad, Gujarat - India",
    description: "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
    url: "https://web.finbyz.tech/it-consulting",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/banner-consulting.svg", width: 1200, height: 630, alt: "IT Consulting Services in Ahmedabad, Gujarat - India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting Services in Ahmedabad, Gujarat - India",
    description: "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
    creator: "@finbyz",
    images: ["/files/banner-consulting.svg"],
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
    "name": "IT Consulting Services in Ahmedabad, Gujarat - India",
    "description": "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
    "url": "https://web.finbyz.tech/it-consulting",
    "image": "/files/banner-consulting.svg",
    "keywords": "IT Consulting, IT Investment , consulting of IT , consulting in IT , IT consulting support, expert business advice, expert IT advice, IT consulting services, it consulting companies, it consulting companies in ahmedabad, IT consulting service in ahmedabad, IT consulting ahmedabad, IT service ahmedabad, it adviser ahmedabad, it adviser  ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "IT Consulting Services in Ahmedabad, Gujarat - India",
      "description": "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
      
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
        <meta itemProp="name" content="IT Consulting Services in Ahmedabad, Gujarat - India" />
        <meta itemProp="description" content="Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
