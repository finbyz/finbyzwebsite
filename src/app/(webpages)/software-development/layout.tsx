import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Custom Software Development Company in Ahmedabad | FinByz Tech",
  description: "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
  keywords: "software development,\ncustom software development,\nsoftware development company,\nsoftware development company in ahmedabad,\nsoftware company in ahmedabad,\nsoftware development solutions,\ncustom software,\ncustom business software\nsoftware development companies,\nsoftware development companies in india",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/software-development",
  },
  openGraph: {
    title: "Custom Software Development Company in Ahmedabad | FinByz Tech",
    description: "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
    url: "https://finbyz.tech/software-development",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/banner-softwaredevelopment.svg", width: 1200, height: 630, alt: "Custom Software Development Company in Ahmedabad | FinByz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in Ahmedabad | FinByz Tech",
    description: "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
    creator: "@finbyz",
    images: ["/files/banner-softwaredevelopment.svg"],
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
  "name": "Custom Software Development Company in Ahmedabad | FinByz Tech",
  "url": "https://finbyz.tech/software-development",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/banner-softwaredevelopment.svg",
  "description": "Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs.",
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
        <meta itemProp="name" content="Custom Software Development Company in Ahmedabad | FinByz Tech" />
        <meta itemProp="description" content="Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
