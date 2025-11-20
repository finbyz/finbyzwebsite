import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Fetch User Name and Role in Frappe Framework | Data Retrieval Example",
  description: "Learn how to fetch user full name, roles, employee name, and designation in Frappe Framework using frappe.db.get_value and frappe.get_roles for session and specified users.",
  keywords: "Frappe, frappe.db.get_value, frappe.get_roles, Frappe Framework, fetch user role, fetch user full name, fetch employee name, Frappe DocType, Frappe user session, Python Frappe, Frappe data retrieval, Frappe session user, fetch data in Frappe",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/fetch-user-name-and-role",
  },
  openGraph: {
    title: "Fetch User Name and Role in Frappe Framework | Data Retrieval Example",
    description: "Learn how to fetch user full name, roles, employee name, and designation in Frappe Framework using frappe.db.get_value and frappe.get_roles for session and specified users.",
    url: "https://erp.finbyz.tech/fetch-user-name-and-role",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Fetch User Name and Role in Frappe Framework | Data Retrieval Example",
    description: "Learn how to fetch user full name, roles, employee name, and designation in Frappe Framework using frappe.db.get_value and frappe.get_roles for session and specified users.",
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
    "name": "Fetch User Name and Role in Frappe Framework | Data Retrieval Example",
    "url": "https://erp.finbyz.tech/fetch-user-name-and-role",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to fetch user full name, roles, employee name, and designation in Frappe Framework using frappe.db.get_value and frappe.get_roles for session and specified users.",
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

  const data = await getPageData("Code Snippet", "fetch-user-name-and-role");
  const faqsGroup = await getFaqs("Code Snippet", "fetch-user-name-and-role");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Fetch User Name and Role in Frappe Framework | Data Retrieval Example" />
        <meta itemProp="description" content="Learn how to fetch user full name, roles, employee name, and designation in Frappe Framework using frappe.db.get_value and frappe.get_roles for session and specified users." />
      </article>
      
      {children}
      {faqsGroup?.faqs.length && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
