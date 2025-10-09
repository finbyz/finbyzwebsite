import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
  description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
  keywords: "ERPnext Implementation Partner,\nERPnext Implementation Company, Ahmedabad, Gujarat\nerpnext service providers,\nERP Implementation in UK,\nERP Implementation in Canada,\nerpnext service in uk,\nerpnext service in Canada,	\nerpnext service provider in uk,\nerpnext partners,\nerpnext service provider in Canada,\nerpnext partners in uk,\nfrappe partners,\nERP Software, \nERP Software uk, \nERP Solution,  \nAccounting Software, \nManufacturing Software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/hire-erpnext-implementer",
  },
  openGraph: {
    title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
    description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
    url: "https://web.finbyz.tech/hire-erpnext-implementer",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-ERPNext-Implementor679475.svg", width: 1200, height: 630, alt: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
    description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
    creator: "@finbyz",
    images: ["/files/Hire-ERPNext-Implementor679475.svg"],
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
  },
  
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Structured data for LLMs and search engines
  const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech",
      "logo": "https://finbyz.tech/files/FinbyzLogo.png",
      "image": "https://finbyz.tech/files/FD-Management-PageDesign.svg",
      "description": "Leading ERPNext Implementation Partner in Ahmedabad, offering automation, ERP services, and business process consulting.",
      "priceRange": "INR",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "504-Addor Ambition, Nr. Navrang Circle, Navrangpura",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380009",
        "addressCountry": "India"
      },
      "telephone": "+91 9925701446",
      "openingHours": "Mo-Sa 10:00-19:00",
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
        <meta itemProp="name" content="ERPNext Implementation Partner in Ahmedabad | Finbyz Tech" />
        <meta itemProp="description" content="Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
