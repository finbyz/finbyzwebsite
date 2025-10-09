import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
  description: "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
  keywords: "ERPNext Investment Management, \nERPNext Portfolio Tracking,\nportfolio overview erpnext ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/investment-portfolio-erpnext",
  },
  openGraph: {
    title: "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
    description: "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
    url: "https://finbyz.tech/investment-portfolio-erpnext",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/portfolio management (1).svg", width: 1200, height: 630, alt: "ERPNext Investment Portfolio Management | Finbyz Tech Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
    description: "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
    creator: "@finbyz",
    images: ["/files/portfolio management (1).svg"],
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
  "name": "ERPNext Investment Portfolio Management | Finbyz Tech Solutions",
  "url": "https://finbyz.tech/investment-portfolio-erpnext",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/portfolio management (1).svg",
  "description": "Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!",
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
        <meta itemProp="name" content="ERPNext Investment Portfolio Management | Finbyz Tech Solutions" />
        <meta itemProp="description" content="Discover how ERPNext\'s investment portfolio management features enable efficient tracking and optimization of your financial assets. Learn more today!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
