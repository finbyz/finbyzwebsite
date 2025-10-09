import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: " Website Development Services & Design in Ahmedabad, India",
  description: "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
  keywords: "website development,\nweb developer,\nwebsite development company,\nweb development company,\nweb development services,\nweb design and development,\nweb development agency,\nweb app development,\nwebsite development in india,\nwebsite development in uk,",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/website-development",
  },
  openGraph: {
    title: " Website Development Services & Design in Ahmedabad, India",
    description: "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
    url: "https://finbyz.tech/website-development",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/web-development.svg", width: 1200, height: 630, alt: " Website Development Services & Design in Ahmedabad, India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: " Website Development Services & Design in Ahmedabad, India",
    description: "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
    creator: "@finbyz",
    images: ["/files/web-development.svg"],
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
  "name": " Website Development Services & Design in Ahmedabad, India",
  "url": "https://finbyz.tech/website-development",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/web-development.svg",
  "description": "Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development.",
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
        <meta itemProp="name" content=" Website Development Services & Design in Ahmedabad, India" />
        <meta itemProp="description" content="Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
