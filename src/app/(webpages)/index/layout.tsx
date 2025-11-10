import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP Software Company | IT Software Company in Ahmedabad",
  description: "Discover the Best ERP software company in Ahmedabad, India. Tailored ERP software development for streamlined operations. Unlock efficiency with our ERP software.\n\n\n",
  keywords: "ERP Software, ERP Software Ahmedabad, ERP Software India, ERP Solution, ERP, ERP Implementation, ERP Software provider in Ahmedabad , ERP software developer in Ahmedabad, ERP Software provider in gujarat, ERP software provider ahmedabad, ahmedabad ERP Software , ahmedabad ERP Software provider, ERP Software , ERP Software ahmedabad, ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/index",
  },
  openGraph: {
    title: "ERP Software Company | IT Software Company in Ahmedabad",
    description: "Discover the Best ERP software company in Ahmedabad, India. Tailored ERP software development for streamlined operations. Unlock efficiency with our ERP software.\n\n\n",
    url: "https://finbyz.tech/index",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software Company | IT Software Company in Ahmedabad",
    description: "Discover the Best ERP software company in Ahmedabad, India. Tailored ERP software development for streamlined operations. Unlock efficiency with our ERP software.\n\n\n",
    creator: "@finbyz",
    
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  "name": "ERP Software Company | IT Software Company in Ahmedabad",
  "url": "https://finbyz.tech/index",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "None",
  "description": "Discover the Best ERP software company in Ahmedabad, India. Tailored ERP software development for streamlined operations. Unlock efficiency with our ERP software.\n\n\n",
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
  const data = await getPageData("Web Page","index");
  const faqsGroup = await getFaqs("Web Page","index");
  
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
        <meta itemProp="name" content="ERP Software Company | IT Software Company in Ahmedabad" />
        <meta itemProp="description" content="Discover the Best ERP software company in Ahmedabad, India. Tailored ERP software development for streamlined operations. Unlock efficiency with our ERP software.\n\n\n" />
      </article>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
