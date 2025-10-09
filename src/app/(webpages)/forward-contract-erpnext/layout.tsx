import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
  description: "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
  keywords: "forward contract erpnext, \nforward contract accounting erpnext, \nCurrency Hedging ERPNext,\nforward contract,\nforward and futures,\nforward rate contract,\nforward transaction",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/forward-contract-erpnext",
  },
  openGraph: {
    title: "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
    description: "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
    url: "https://finbyz.tech/forward-contract-erpnext",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Forward-Contract-PageDesign.svg", width: 1200, height: 630, alt: "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
    description: "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
    creator: "@finbyz",
    images: ["/files/Forward-Contract-PageDesign.svg"],
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
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  "name": "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
  "url": "https://finbyz.tech/forward-contract-erpnext",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Forward-Contract-PageDesign.svg",
  "description": "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
  "priceRange": "INR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "FinByz Tech Pvt Ltd, 504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, Gujarat 380009",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "addressCountry": "IN",
    "postalCode": "380009"
  },
  "telephone": "+919925701446",
  "openingHours": "Mo, Tu, We, Th, Fr, Sa 10.00:00-19:00",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91 7948912428",
      "contactType": "customer support",
      "areaServed": [
        "IN"
      ],
      "availableLanguage": [
        "Hindi",
        "Gujarati",
        "English"
      ]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/FinByz",
    "https://twitter.com/FinByz",
    "https://www.linkedin.com/company/finbyz",
    "https://www.youtube.com/c/Finbyz",
    "https://www.instagram.com/finbyz/"
  ]
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
        <meta itemProp="name" content="Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide" />
        <meta itemProp="description" content="Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
