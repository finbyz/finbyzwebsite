import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "GIPL Export Invoice Old - Print Format HTML Template for Export Documentation",
  description: "Explore the GIPL Export Invoice old code snippet, an HTML print format template for export invoices. Learn how to use this detailed table layout tailored for export documentation in ERP systems, with integrated styling for professional print output.",
  keywords: "GIPL Export Invoice, export invoice HTML, print format, export documentation template, ERP print format, HTML export invoice, invoice table layout, export invoice styling, ERPNext print format, export invoice example",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/gipl-export-invoice-old",
  },
  openGraph: {
    title: "GIPL Export Invoice Old - Print Format HTML Template for Export Documentation",
    description: "Explore the GIPL Export Invoice old code snippet, an HTML print format template for export invoices. Learn how to use this detailed table layout tailored for export documentation in ERP systems, with integrated styling for professional print output.",
    url: "https://erp.finbyz.tech/gipl-export-invoice-old",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "GIPL Export Invoice Old - Print Format HTML Template for Export Documentation",
    description: "Explore the GIPL Export Invoice old code snippet, an HTML print format template for export invoices. Learn how to use this detailed table layout tailored for export documentation in ERP systems, with integrated styling for professional print output.",
    creator: "@finbyztech",
    
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    "name": "GIPL Export Invoice Old - Print Format HTML Template for Export Documentation",
    "url": "https://erp.finbyz.tech/gipl-export-invoice-old",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Explore the GIPL Export Invoice old code snippet, an HTML print format template for export invoices. Learn how to use this detailed table layout tailored for export documentation in ERP systems, with integrated styling for professional print output.",
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

  const data = await getPageData("Code Snippet", "gipl-export-invoice-old");
  const faqsGroup = await getFaqs("Code Snippet", "gipl-export-invoice-old");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="GIPL Export Invoice Old - Print Format HTML Template for Export Documentation" />
        <meta itemProp="description" content="Explore the GIPL Export Invoice old code snippet, an HTML print format template for export invoices. Learn how to use this detailed table layout tailored for export documentation in ERP systems, with integrated styling for professional print output." />
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
