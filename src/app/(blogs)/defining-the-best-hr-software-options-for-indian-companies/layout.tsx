import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top HR Software Solutions in India | Optimize Your HR Systems",
  description: "Discover the best HR Software in India. Streamline your HR Systems with top HR Payroll Software solutions tailored for Indian businesses.",
  keywords: "HR Systems,\nHR Software in India, \nHR Payroll Software,\nHR Management Software\'s",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/defining-the-best-hr-software-options-for-indian-companies",
  },
  openGraph: {
    title: "Top HR Software Solutions in India | Optimize Your HR Systems",
    description: "Discover the best HR Software in India. Streamline your HR Systems with top HR Payroll Software solutions tailored for Indian businesses.",
    url: "https://finbyz.tech/defining-the-best-hr-software-options-for-indian-companies",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top HR Software Solutions in India | Optimize Your HR Systems",
    description: "Discover the best HR Software in India. Streamline your HR Systems with top HR Payroll Software solutions tailored for Indian businesses.",
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
  "@id": "https://finbyz.tech/defining-the-best-hr-software-options-for-indian-companies#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/defining-the-best-hr-software-options-for-indian-companies",
  "headline": "Top HR Software Solutions in India | Optimize Your HR Systems",
  "name": "Top HR Software Solutions in India | Optimize Your HR Systems",
  "description": "Discover the best HR Software in India. Streamline your HR Systems with top HR Payroll Software solutions tailored for Indian businesses.",
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
  "url": "https://finbyz.tech/defining-the-best-hr-software-options-for-indian-companies",
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
    "HR Systems",
    "HR Software in India",
    "HR Payroll Software",
    "HR Management Software's"
  ]
};
  const data = await getPageData("Blog Post","defining-the-best-hr-software-options-for-indian-companies");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top HR Software Solutions in India | Optimize Your HR Systems" />
        <meta itemProp="description" content="Discover the best HR Software in India. Streamline your HR Systems with top HR Payroll Software solutions tailored for Indian businesses." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
