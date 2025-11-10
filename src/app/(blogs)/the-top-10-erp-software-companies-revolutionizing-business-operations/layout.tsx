import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top 10 ERP Software Vendors Transforming Business Operations",
  description: "Discover the leading ERP software vendors revolutionizing business operations. Explore comprehensive solutions tailored to various industries and business sizes.\n\n",
  keywords: "ERP Software Companies,\nERP Software Solutions,\nERP Software Vendors",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/the-top-10-erp-software-companies-revolutionizing-business-operations",
  },
  openGraph: {
    title: "Top 10 ERP Software Vendors Transforming Business Operations",
    description: "Discover the leading ERP software vendors revolutionizing business operations. Explore comprehensive solutions tailored to various industries and business sizes.\n\n",
    url: "https://finbyz.tech/the-top-10-erp-software-companies-revolutionizing-business-operations",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 ERP Software Vendors Transforming Business Operations",
    description: "Discover the leading ERP software vendors revolutionizing business operations. Explore comprehensive solutions tailored to various industries and business sizes.\n\n",
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
const faqsGroup = await getFaqs("Blog Post","the-top-10-erp-software-companies-revolutionizing-business-operations");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/the-top-10-erp-software-companies-revolutionizing-business-operations#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/the-top-10-erp-software-companies-revolutionizing-business-operations",
  "headline": "Top 10 ERP Software Vendors Transforming Business Operations",
  "name": "Top 10 ERP Software Vendors Transforming Business Operations",
  "description": "Discover the leading ERP software vendors revolutionizing business operations. Explore comprehensive solutions tailored to various industries and business sizes.\\n\\n",
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
  "url": "https://finbyz.tech/the-top-10-erp-software-companies-revolutionizing-business-operations",
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
    "ERP Software Companies",
    "ERP Software Solutions",
    "ERP Software Vendors"
  ]
};
  const data = await getPageData("Blog Post","the-top-10-erp-software-companies-revolutionizing-business-operations");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top 10 ERP Software Vendors Transforming Business Operations" />
        <meta itemProp="description" content="Discover the leading ERP software vendors revolutionizing business operations. Explore comprehensive solutions tailored to various industries and business sizes.\n\n" />
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
