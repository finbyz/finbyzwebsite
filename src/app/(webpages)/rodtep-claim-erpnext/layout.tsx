import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
  description: "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
  keywords: "rodtep erpnext, \nrodtep claim process erpnext, \nERPnext rodtep setup",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/rodtep-claim-erpnext",
  },
  openGraph: {
    title: "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
    description: "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
    url: "https://finbyz.tech/rodtep-claim-erpnext",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Rodtep-App-PageDesign-SVG.svg", width: 1200, height: 630, alt: "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
    description: "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
    creator: "@finbyz",
    images: ["/files/Rodtep-App-PageDesign-SVG.svg"],
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
  "name": "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
  "url": "https://finbyz.tech/rodtep-claim-erpnext",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Rodtep-App-PageDesign-SVG.svg",
  "description": "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
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
  const data = await getPageData("Web Page","rodtep-claim-erpnext");
  const faqsGroup = await getFaqs("Web Page","rodtep-claim-erpnext");
  
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
        <meta itemProp="name" content="Efficient RODTEP Claim Management with ERPNext | Finbyz Tech" />
        <meta itemProp="description" content="Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters." />
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
