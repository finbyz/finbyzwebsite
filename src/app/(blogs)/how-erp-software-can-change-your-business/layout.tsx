import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
  description: "Discover how ERP software enhances workflow automation and supply chain management. Learn strategies for successful ERP implementation and system optimization.",
  keywords: "supply chain management,\nEnterprise Resource Planning (ERP),\nERP solution,\nERP Software,\nERP Could,\nCRM software,\nERP system ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/how-erp-software-can-change-your-business",
  },
  openGraph: {
    title: "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
    description: "Discover how ERP software enhances workflow automation and supply chain management. Learn strategies for successful ERP implementation and system optimization.",
    url: "https://finbyz.tech/how-erp-software-can-change-your-business",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
    description: "Discover how ERP software enhances workflow automation and supply chain management. Learn strategies for successful ERP implementation and system optimization.",
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
const faqsGroup = await getFaqs("Blog Post","how-erp-software-can-change-your-business");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/how-erp-software-can-change-your-business#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/how-erp-software-can-change-your-business",
  "headline": "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
  "name": "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
  "description": "Discover how ERP software enhances workflow automation and supply chain management. Learn strategies for successful ERP implementation and system optimization.",
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
  "url": "https://finbyz.tech/how-erp-software-can-change-your-business",
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
    "supply chain management",
    "Enterprise Resource Planning (ERP)",
    "ERP solution",
    "ERP Software",
    "ERP Could",
    "CRM software",
    "ERP system"
  ]
};
  const data = await getPageData("Blog Post","how-erp-software-can-change-your-business");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="How ERP Software Revolutionizes Business Operations: A Comprehensive Guide" />
        <meta itemProp="description" content="Discover how ERP software enhances workflow automation and supply chain management. Learn strategies for successful ERP implementation and system optimization." />
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
