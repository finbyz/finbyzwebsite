import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web Application Development Company in Ahmedabad, India",
  description: "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
  keywords: "Web Application, Business Software, web application development, web app development, enterprise level web applications, structured application development, web application development, web based business software, application developer in ahmedabad, app maker",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/web-application-development",
  },
  openGraph: {
    title: "Web Application Development Company in Ahmedabad, India",
    description: "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
    url: "https://finbyz.tech/web-application-development",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/web-app-development.svg", width: 1200, height: 630, alt: "Web Application Development Company in Ahmedabad, India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Development Company in Ahmedabad, India",
    description: "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
    creator: "@finbyz",
    images: ["/files/web-app-development.svg"],
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
  "name": "Web Application Development Company in Ahmedabad, India",
  "url": "https://finbyz.tech/web-application-development",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/web-app-development.svg",
  "description": "Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies.",
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
  const data = await getPageData("Web Page","web-application-development");
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
        <meta itemProp="name" content="Web Application Development Company in Ahmedabad, India" />
        <meta itemProp="description" content="Access premier web app development from our top web application development company. We\'re leaders in expert solutions among web development companies." />
      </article>
      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
