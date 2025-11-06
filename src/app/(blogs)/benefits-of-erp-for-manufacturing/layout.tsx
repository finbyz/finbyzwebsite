import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
  description: "Discover how ERP software enhances manufacturing efficiency. Explore top ERP solutions tailored for small manufacturers and unlock key operational benefits.",
  keywords: "best manufacturing erp software, manufacturing erp solutions, small manufacturing erp software, ERP for manufacturing , benefits of erp for manufacturing",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/benefits-of-erp-for-manufacturing",
  },
  openGraph: {
    title: "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
    description: "Discover how ERP software enhances manufacturing efficiency. Explore top ERP solutions tailored for small manufacturers and unlock key operational benefits.",
    url: "https://finbyz.tech/benefits-of-erp-for-manufacturing",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
    description: "Discover how ERP software enhances manufacturing efficiency. Explore top ERP solutions tailored for small manufacturers and unlock key operational benefits.",
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
const faqsGroup = await getFaqs("Blog Post","benefits-of-erp-for-manufacturing");
const faqstructureData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsGroup?.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
    }
    }))
};
export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/benefits-of-erp-for-manufacturing#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/benefits-of-erp-for-manufacturing",
  "headline": "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
  "name": "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
  "description": "Discover how ERP software enhances manufacturing efficiency. Explore top ERP solutions tailored for small manufacturers and unlock key operational benefits.",
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
  "url": "https://finbyz.tech/benefits-of-erp-for-manufacturing",
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
    "best manufacturing erp software",
    "manufacturing erp solutions",
    "small manufacturing erp software",
    "ERP for manufacturing",
    "benefits of erp for manufacturing"
  ]
};
  const data = await getPageData("Blog Post","benefits-of-erp-for-manufacturing");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="structured-faqs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqstructureData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers" />
        <meta itemProp="description" content="Discover how ERP software enhances manufacturing efficiency. Explore top ERP solutions tailored for small manufacturers and unlock key operational benefits." />
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
