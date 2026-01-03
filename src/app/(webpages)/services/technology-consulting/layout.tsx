import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";



export const metadata: Metadata = {
  title: "Expert Technology Consulting & Digital Transformation Strategy",
  description: "Unlock growth with Finbyz Tech\'s expert technology consulting. We guide businesses through digital transformation, ERPNext adoption, and IT strategy for measurable success.",
  keywords: "technology consulting, IT consulting services, digital transformation strategy, ERPNext consulting, business IT advisory, IT strategy consulting firm, custom software consulting, AI automation strategy, cloud strategy consulting, data analytics consulting, business process optimization, IT advisory services, technology roadmap, digital transformation company, enterprise technology consulting",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/technology-consulting",
  },
  openGraph: {
    title: "Expert Technology Consulting & Digital Transformation Strategy",
    description: "Unlock growth with Finbyz Tech\'s expert technology consulting. We guide businesses through digital transformation, ERPNext adoption, and IT strategy for measurable success.",
    url: "https://erp.finbyz.tech/technology-consulting",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Technology Consulting & Digital Transformation Strategy",
    description: "Unlock growth with Finbyz Tech\'s expert technology consulting. We guide businesses through digital transformation, ERPNext adoption, and IT strategy for measurable success.",
    creator: "@finbyztech",

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
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Expert Technology Consulting & Digital Transformation Strategy",
    "description": "Unlock growth with Finbyz Tech\'s expert technology consulting. We guide businesses through digital transformation, ERPNext adoption, and IT strategy for measurable success.",
    "url": "https://erp.finbyz.tech/technology-consulting",

    "keywords": "technology consulting, IT consulting services, digital transformation strategy, ERPNext consulting, business IT advisory, IT strategy consulting firm, custom software consulting, AI automation strategy, cloud strategy consulting, data analytics consulting, business process optimization, IT advisory services, technology roadmap, digital transformation company, enterprise technology consulting",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Expert Technology Consulting & Digital Transformation Strategy",
      "description": "Unlock growth with Finbyz Tech\'s expert technology consulting. We guide businesses through digital transformation, ERPNext adoption, and IT strategy for measurable success.",
      "articleBody": "Expert consulting services for ERPNext adoption, digital transformation, and IT strategy.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-27T11:27:33.176Z",
      "dateModified": "2025-10-27T11:27:33.176Z",
    }
  };

  return (
    <>
      <main>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="Expert Technology Consulting & Digital Transformation Strategy" />
          <meta itemProp="description" content="Unlock growth with Finbyz Tech\'s expert technology consulting. We guide businesses through digital transformation, ERPNext adoption, and IT strategy for measurable success." />
        </article>

        {children}

        <BusinessSlider />

      </main>

    </>
  );
}
