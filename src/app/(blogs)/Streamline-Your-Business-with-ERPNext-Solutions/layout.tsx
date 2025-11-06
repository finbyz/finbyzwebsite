import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
  description: "Discover how ERPNext, a comprehensive open-source ERP system, can transform your business operations. Learn about its features, benefits, and implementation strategies.",
  keywords: "ERPNext,\nOpen source erp,\nerpnext system",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/Streamline-Your-Business-with-ERPNext-Solutions",
  },
  openGraph: {
    title: "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
    description: "Discover how ERPNext, a comprehensive open-source ERP system, can transform your business operations. Learn about its features, benefits, and implementation strategies.",
    url: "https://finbyz.tech/Streamline-Your-Business-with-ERPNext-Solutions",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
    description: "Discover how ERPNext, a comprehensive open-source ERP system, can transform your business operations. Learn about its features, benefits, and implementation strategies.",
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
const faqsGroup = await getFaqs("Blog Post","Streamline-Your-Business-with-ERPNext-Solutions");
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
  "@id": "https://finbyz.tech/Streamline-Your-Business-with-ERPNext-Solutions#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/Streamline-Your-Business-with-ERPNext-Solutions",
  "headline": "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
  "name": "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
  "description": "Discover how ERPNext, a comprehensive open-source ERP system, can transform your business operations. Learn about its features, benefits, and implementation strategies.",
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
  "url": "https://finbyz.tech/Streamline-Your-Business-with-ERPNext-Solutions",
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
    "ERPNext",
    "Open source erp",
    "erpnext system"
  ]
};
  const data = await getPageData("Blog Post","Streamline-Your-Business-with-ERPNext-Solutions");

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
        <meta itemProp="headline" content="Streamline Your Business with ERPNext: The Leading Open Source ERP System" />
        <meta itemProp="description" content="Discover how ERPNext, a comprehensive open-source ERP system, can transform your business operations. Learn about its features, benefits, and implementation strategies." />
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
