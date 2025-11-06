import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
  description: "Explore the comprehensive evolution of ERP systems, from early MRP tools to today\'s intelligent, cloud-based applications integrating AI, ML, and IoT technologies.",
  keywords: "ERP Application ,Evolution of ERP, ERP System evolution, Cloud ERP, ERP system, ERP System, ERP , ERP applications, ERP evolution, ERP web application, ERP system evolution, ERP systems are an evolution of, stage ERP, base ERP, development of ERP	\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/evolution-of-erp",
  },
  openGraph: {
    title: "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
    description: "Explore the comprehensive evolution of ERP systems, from early MRP tools to today\'s intelligent, cloud-based applications integrating AI, ML, and IoT technologies.",
    url: "https://finbyz.tech/evolution-of-erp",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
    description: "Explore the comprehensive evolution of ERP systems, from early MRP tools to today\'s intelligent, cloud-based applications integrating AI, ML, and IoT technologies.",
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
const faqsGroup = await getFaqs("Blog Post","evolution-of-erp");
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
  "@id": "https://finbyz.tech/evolution-of-erp#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/evolution-of-erp",
  "headline": "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
  "name": "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
  "description": "Explore the comprehensive evolution of ERP systems, from early MRP tools to today\\'s intelligent, cloud-based applications integrating AI, ML, and IoT technologies.",
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
  "url": "https://finbyz.tech/evolution-of-erp",
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
    "ERP Application",
    "Evolution of ERP",
    "ERP System evolution",
    "Cloud ERP",
    "ERP system",
    "ERP System",
    "ERP",
    "ERP applications",
    "ERP evolution",
    "ERP web application",
    "ERP system evolution",
    "ERP systems are an evolution of",
    "stage ERP",
    "base ERP",
    "development of ERP"
  ]
};
  const data = await getPageData("Blog Post","evolution-of-erp");

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
        <meta itemProp="headline" content="Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions" />
        <meta itemProp="description" content="Explore the comprehensive evolution of ERP systems, from early MRP tools to today\'s intelligent, cloud-based applications integrating AI, ML, and IoT technologies." />
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
