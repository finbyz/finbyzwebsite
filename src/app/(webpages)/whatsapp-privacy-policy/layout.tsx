import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
  description: "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our Users).\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a User, you ) of the https://www.finbyz.tech/privacy-policy website (Site). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, we, us and our referred to Finbyz Tech and Finbyz Tech Corporate family\n",
  keywords: "Finbyz WhatsApp privacy policy,\nWhatsApp data usage policy,\nFinbyz Tech data protection,\nWhatsApp communication privacy",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/whatsapp-privacy-policy",
  },
  openGraph: {
    title: "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
    description: "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our Users).\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a User, you ) of the https://www.finbyz.tech/privacy-policy website (Site). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, we, us and our referred to Finbyz Tech and Finbyz Tech Corporate family\n",
    url: "https://finbyz.tech/whatsapp-privacy-policy",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
    description: "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our Users).\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a User, you ) of the https://www.finbyz.tech/privacy-policy website (Site). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, we, us and our referred to Finbyz Tech and Finbyz Tech Corporate family\n",
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
  "name": "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
  "url": "https://finbyz.tech/whatsapp-privacy-policy",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "None",
  "description": "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our Users).\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a User, you ) of the https://www.finbyz.tech/privacy-policy website (Site). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, we, us and our referred to Finbyz Tech and Finbyz Tech Corporate family\n",
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
  const data = await getPageData("Web Page","whatsapp-privacy-policy");
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
        <meta itemProp="name" content="WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy" />
        <meta itemProp="description" content="We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our Users).\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a User, you ) of the https://www.finbyz.tech/privacy-policy website (Site). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, we, us and our referred to Finbyz Tech and Finbyz Tech Corporate family\n" />
      </article>
      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
