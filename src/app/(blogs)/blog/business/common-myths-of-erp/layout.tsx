import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top ERP Myths Debunked: What Small Businesses Need to Know",
  description: "Discover the truth behind common ERP myths and learn how modern ERP solutions can benefit small businesses by improving efficiency and scalability.",
  keywords: "ERP for small businesses,\nERP vs CRM,\nERP myths,\nERP misconceptions,\nERP implementation myths,",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/blog/business/common-myths-of-erp",
  },
  openGraph: {
    title: "Top ERP Myths Debunked: What Small Businesses Need to Know",
    description: "Discover the truth behind common ERP myths and learn how modern ERP solutions can benefit small businesses by improving efficiency and scalability.",
    url: "https://finbyz.tech/blog/business/common-myths-of-erp",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top ERP Myths Debunked: What Small Businesses Need to Know",
    description: "Discover the truth behind common ERP myths and learn how modern ERP solutions can benefit small businesses by improving efficiency and scalability.",
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/blog/business/common-myths-of-erp#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/blog/business/common-myths-of-erp",
  "headline": "Top ERP Myths Debunked: What Small Businesses Need to Know",
  "name": "Top ERP Myths Debunked: What Small Businesses Need to Know",
  "description": "Discover the truth behind common ERP myths and learn how modern ERP solutions can benefit small businesses by improving efficiency and scalability.",
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
  "url": "https://finbyz.tech/blog/business/common-myths-of-erp",
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
    "ERP for small businesses",
    "ERP vs CRM",
    "ERP myths",
    "ERP misconceptions",
    "ERP implementation myths"
  ]
};
  const data = await getPageData("Blog Post","blog/business/common-myths-of-erp");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top ERP Myths Debunked: What Small Businesses Need to Know" />
        <meta itemProp="description" content="Discover the truth behind common ERP myths and learn how modern ERP solutions can benefit small businesses by improving efficiency and scalability." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
