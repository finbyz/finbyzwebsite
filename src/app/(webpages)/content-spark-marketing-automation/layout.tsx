import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Content Spark Streamline Marketing Automation",
  description: "Content Spark is an advanced marketing automation platform designed to optimize content creation for marketing teams, ensuring brand consistency and rapid ideation.",
  keywords: "Content Spark, marketing automation, Frappe Framework, AI content generation, brand consistency, LinkedIn posts, marketing teams, content creation, visual design, branding, campaign planning",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://web.finbyz.tech/content-spark-marketing-automation",
  },
  openGraph: {
    title: "Content Spark Streamline Marketing Automation",
    description: "Content Spark is an advanced marketing automation platform designed to optimize content creation for marketing teams, ensuring brand consistency and rapid ideation.",
    url: "https://web.finbyz.tech/content-spark-marketing-automation",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/FinByz (7).gif", width: 1200, height: 630, alt: "Content Spark Streamline Marketing Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Spark Streamline Marketing Automation",
    description: "Content Spark is an advanced marketing automation platform designed to optimize content creation for marketing teams, ensuring brand consistency and rapid ideation.",
    creator: "@finbyztech",
    images: ["/files/FinByz (7).gif"],
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
    "name": "Content Spark Streamline Marketing Automation",
    "description": "Content Spark is an advanced marketing automation platform designed to optimize content creation for marketing teams, ensuring brand consistency and rapid ideation.",
    "url": "https://web.finbyz.tech/content-spark-marketing-automation",
    "image": "/files/FinByz (7).gif",
    "keywords": "Content Spark, marketing automation, Frappe Framework, AI content generation, brand consistency, LinkedIn posts, marketing teams, content creation, visual design, branding, campaign planning",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Content Spark Streamline Marketing Automation",
      "description": "Content Spark is an advanced marketing automation platform designed to optimize content creation for marketing teams, ensuring brand consistency and rapid ideation.",
      "articleBody": "Content Spark (Marketing Automation)\nOverview\nContent Spark is an advanced marketing automation platform built natively on the Frappe Framework. Aimed at helping businesses, especially marketing teams, streamline their content creation and publishing processes, it eliminates the common challenges of ideation, brand consistency, and visual design. Content Spark leverages AI-powered agents to transform simple user inputs—like topic keywords, target audience, or campaign themes—into fully formed Li",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T12:09:52.715Z",
      "dateModified": "2025-10-14T12:09:52.715Z",
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Content Spark Streamline Marketing Automation" />
        <meta itemProp="description" content="Content Spark is an advanced marketing automation platform designed to optimize content creation for marketing teams, ensuring brand consistency and rapid ideation." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
