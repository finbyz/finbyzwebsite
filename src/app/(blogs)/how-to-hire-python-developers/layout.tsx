import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Expert Python Developers | Top Python Development Company",
  description: "Looking to hire skilled Python developers? Our top-rated Python development company offers dedicated developers for your project needs.",
  keywords: "Python developers, Hire Python developers, python development companies, python coder, python developer hire, python developers, full stack developers, python development companies, python api development, web app python, python company, python developers in India.\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/how-to-hire-python-developers",
  },
  openGraph: {
    title: "Hire Expert Python Developers | Top Python Development Company",
    description: "Looking to hire skilled Python developers? Our top-rated Python development company offers dedicated developers for your project needs.",
    url: "https://finbyz.tech/how-to-hire-python-developers",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Expert Python Developers | Top Python Development Company",
    description: "Looking to hire skilled Python developers? Our top-rated Python development company offers dedicated developers for your project needs.",
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
  "@id": "https://finbyz.tech/how-to-hire-python-developers#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/how-to-hire-python-developers",
  "headline": "Hire Expert Python Developers | Top Python Development Company",
  "name": "Hire Expert Python Developers | Top Python Development Company",
  "description": "Looking to hire skilled Python developers? Our top-rated Python development company offers dedicated developers for your project needs.",
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
  "url": "https://finbyz.tech/how-to-hire-python-developers",
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
    "Python developers",
    "Hire Python developers",
    "python development companies",
    "python coder",
    "python developer hire",
    "python developers",
    "full stack developers",
    "python development companies",
    "python api development",
    "web app python",
    "python company",
    "python developers in India."
  ]
};
  const data = await getPageData("Blog Post","how-to-hire-python-developers");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Hire Expert Python Developers | Top Python Development Company" />
        <meta itemProp="description" content="Looking to hire skilled Python developers? Our top-rated Python development company offers dedicated developers for your project needs." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
