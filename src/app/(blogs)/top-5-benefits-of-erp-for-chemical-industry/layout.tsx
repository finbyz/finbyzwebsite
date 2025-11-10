import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
  description: "Discover how ERP systems enhance compliance, inventory management, production planning, quality control, and supply chain visibility in the chemical industry.",
  keywords: "chemical industries,\nchemical manufacturing,\nchemical ERP System, \nERP for Chemical,\nsample managements,",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/top-5-benefits-of-erp-for-chemical-industry",
  },
  openGraph: {
    title: "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
    description: "Discover how ERP systems enhance compliance, inventory management, production planning, quality control, and supply chain visibility in the chemical industry.",
    url: "https://finbyz.tech/top-5-benefits-of-erp-for-chemical-industry",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
    description: "Discover how ERP systems enhance compliance, inventory management, production planning, quality control, and supply chain visibility in the chemical industry.",
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
const faqsGroup = await getFaqs("Blog Post","top-5-benefits-of-erp-for-chemical-industry");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/top-5-benefits-of-erp-for-chemical-industry#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/top-5-benefits-of-erp-for-chemical-industry",
  "headline": "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
  "name": "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
  "description": "Discover how ERP systems enhance compliance, inventory management, production planning, quality control, and supply chain visibility in the chemical industry.",
  "datePublished": "",
  "dateModified": "",
  "author": {
    "@type": "Person",
    "name": "FinByz Tech Pvt Ltd",
    "url": "https://finbyz.tech/about-us",
    "image": {
      "@type": "ImageObject",
      "url": "https://finbyz.tech/files/FinbyzLogo.png",
      "height": "96",
      "width": "96"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "FinByz Tech Pvt Ltd",
    "url": "https://finbyz.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://finbyz.tech/files/FinbyzLogo.png",
      "width": "600",
      "height": "60"
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://finbyz.tech/files/FinbyzLogo.png",
    "width": "1200",
    "height": "630"
  },
  "url": "https://finbyz.tech/top-5-benefits-of-erp-for-chemical-industry",
  "isPartOf": {
    "@type": "Blog",
    "@id": "https://finbyz.tech/blog-post/",
    "name": "FinByz Tech Blog",
    "publisher": {
      "@type": "Organization",
      "@id": "https://finbyz.tech",
      "name": "FinByz Tech Pvt Ltd"
    }
  },
  "keywords": [
    "chemical industries",
    "chemical manufacturing",
    "chemical ERP System",
    "ERP for Chemical",
    "sample managements"
  ]
};
  const data = await getPageData("Blog Post","top-5-benefits-of-erp-for-chemical-industry");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Unveiling the Top 5 Benefits of ERP for the Chemical Industry" />
        <meta itemProp="description" content="Discover how ERP systems enhance compliance, inventory management, production planning, quality control, and supply chain visibility in the chemical industry." />
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
