import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
  description: "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
  keywords: "rodtep erpnext, \nrodtep claim process erpnext, \nERPnext rodtep setup",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/rodtep-claim-erpnext",
  },
  openGraph: {
    title: "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
    description: "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
    url: "https://web.finbyz.tech/rodtep-claim-erpnext",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Rodtep-App-PageDesign-SVG.svg", width: 1200, height: 630, alt: "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
    description: "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
    creator: "@yourhandle",
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
  },
  other: {
    'article:content_tier': 'free',
    'article:opinion': 'false',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
    "description": "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
    "url": "https://web.finbyz.tech/rodtep-claim-erpnext",
    "image": "/files/Rodtep-App-PageDesign-SVG.svg",
    "keywords": "rodtep erpnext, \nrodtep claim process erpnext, \nERPnext rodtep setup",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Efficient RODTEP Claim Management with ERPNext | Finbyz Tech",
      "description": "Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters.",
      
      "author": {
        "@type": "Organization",
        "name": "Your Company Name"
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
    }
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
        <meta itemProp="name" content="Efficient RODTEP Claim Management with ERPNext | Finbyz Tech" />
        <meta itemProp="description" content="Streamline your RODTEP and Duty Drawback claims using ERPNext. Finbyz Tech, a leading ERPNext Implementation Partner in Ahmedabad, offers tailored solutions for exporters." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
