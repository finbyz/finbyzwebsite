import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Dedicated JavaScript Developers | Expert JS Programmers",
  description: "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
  keywords: "hire javascript developer,\nhire javascript coder,\nhire javascript programmer,\nhire remote javascript developers,\nhire js developer,\nhire javascript expert,\nfreelance javascript developer,\njs freelance\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/hire-javascript-developer",
  },
  openGraph: {
    title: "Hire Dedicated JavaScript Developers | Expert JS Programmers",
    description: "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
    url: "https://finbyz.tech/hire-javascript-developer",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-JS-Dev.svg", width: 1200, height: 630, alt: "Hire Dedicated JavaScript Developers | Expert JS Programmers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated JavaScript Developers | Expert JS Programmers",
    description: "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
    creator: "@finbyz",
    images: ["/files/Hire-JS-Dev.svg"],
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
  "name": "Hire Dedicated JavaScript Developers | Expert JS Programmers",
  "url": "https://finbyz.tech/hire-javascript-developer",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Hire-JS-Dev.svg",
  "description": "Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. ",
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
        <meta itemProp="name" content="Hire Dedicated JavaScript Developers | Expert JS Programmers" />
        <meta itemProp="description" content="Looking to hire JavaScript developers? Look no further than FinByz. Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs. " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
