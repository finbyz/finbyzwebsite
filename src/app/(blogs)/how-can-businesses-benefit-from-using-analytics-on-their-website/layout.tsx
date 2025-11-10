import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
  description: "Discover how website analytics, conversion rate optimization, and data-driven decision making can transform your business strategy, enhance user experience, and boost profitability.\n\n",
  keywords: "website analytics,\nconversion rate optimization,\nData-driven decision making",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/how-can-businesses-benefit-from-using-analytics-on-their-website",
  },
  openGraph: {
    title: "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
    description: "Discover how website analytics, conversion rate optimization, and data-driven decision making can transform your business strategy, enhance user experience, and boost profitability.\n\n",
    url: "https://finbyz.tech/how-can-businesses-benefit-from-using-analytics-on-their-website",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
    description: "Discover how website analytics, conversion rate optimization, and data-driven decision making can transform your business strategy, enhance user experience, and boost profitability.\n\n",
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
const faqsGroup = await getFaqs("Blog Post","how-can-businesses-benefit-from-using-analytics-on-their-website");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/how-can-businesses-benefit-from-using-analytics-on-their-website#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/how-can-businesses-benefit-from-using-analytics-on-their-website",
  "headline": "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
  "name": "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
  "description": "Discover how website analytics, conversion rate optimization, and data-driven decision making can transform your business strategy, enhance user experience, and boost profitability.\\n\\n",
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
  "url": "https://finbyz.tech/how-can-businesses-benefit-from-using-analytics-on-their-website",
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
    "website analytics",
    "conversion rate optimization",
    "Data-driven decision making"
  ]
};
  const data = await getPageData("Blog Post","how-can-businesses-benefit-from-using-analytics-on-their-website");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions" />
        <meta itemProp="description" content="Discover how website analytics, conversion rate optimization, and data-driven decision making can transform your business strategy, enhance user experience, and boost profitability.\n\n" />
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
