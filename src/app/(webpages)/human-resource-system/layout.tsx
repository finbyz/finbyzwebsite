import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
  description: "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
  keywords: "human resource software,\nhr software,\nhr and payroll software,\nHuman Resource Management, \nLeave approval system, \nExpense claims management, \nworker Shift Management, \nRecruitment software, \nTraining and development software,\nhr system,\nbest hr software,\nemployee management software,\nemployee management system,\nhr software companies,\nhr payroll,\nhr system software,\nhr management software,\nhr management systems,\nhr payroll software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/human-resource-system",
  },
  openGraph: {
    title: "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
    description: "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
    url: "https://finbyz.tech/human-resource-system",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/hr_system 2019-07-27 18_25_22.svg", width: 1200, height: 630, alt: "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
    description: "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
    creator: "@finbyz",
    images: ["/files/hr_system 2019-07-27 18_25_22.svg"],
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
  "name": "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
  "url": "https://finbyz.tech/human-resource-system",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/hr_system 2019-07-27 18_25_22.svg",
  "description": "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
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
        <meta itemProp="name" content="Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech" />
        <meta itemProp="description" content="Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
