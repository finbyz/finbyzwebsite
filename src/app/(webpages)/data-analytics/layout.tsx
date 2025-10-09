import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Data Analytics Company | Finbyz Tech",
  description: "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
  keywords: "data analytics,\ndata analytics companies, \ncrm analytics,\nanalytics,   \nanalytics solution provider, \nanalytics ahmedabad, \nanalytic solution ahmedabad, \nanalytics solution ahmedabad, \ndata analysis service providers, \ndata analysis service providers in ahmedabad, \ndata analysis service providers ahmedabad, ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/data-analytics",
  },
  openGraph: {
    title: "Data Analytics Company | Finbyz Tech",
    description: "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
    url: "https://finbyz.tech/data-analytics",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/banner-analysis.svg", width: 1200, height: 630, alt: "Data Analytics Company | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics Company | Finbyz Tech",
    description: "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
    creator: "@finbyz",
    images: ["/files/banner-analysis.svg"],
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
  "name": "Data Analytics Company | Finbyz Tech",
  "url": "https://finbyz.tech/data-analytics",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/banner-analysis.svg",
  "description": "Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n",
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
        <meta itemProp="name" content="Data Analytics Company | Finbyz Tech" />
        <meta itemProp="description" content="Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth.\n\n" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
