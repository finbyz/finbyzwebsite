import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Expert Python Developers | Top Python Development Company",
  description: "Discover effective strategies for hire Python developers. Learn how to define requirements, screen candidates, and build a performing team.",
  keywords: "Python developers, Hire Python developers, python development companies, python coder, python developer hire, python developers, full stack developers, python development companies, python api development, web app python, python company, python developers in India.\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/how-to-hire-python-developers",
  },
  openGraph: {
    title: "Hire Expert Python Developers | Top Python Development Company",
    description: "Discover effective strategies for hire Python developers. Learn how to define requirements, screen candidates, and build a performing team.",
    url: "https://web.finbyz.tech/how-to-hire-python-developers",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Expert Python Developers | Top Python Development Company",
    description: "Discover effective strategies for hire Python developers. Learn how to define requirements, screen candidates, and build a performing team.",
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
  },
  
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hire Expert Python Developers | Top Python Development Company",
    "description": "Discover effective strategies for hire Python developers. Learn how to define requirements, screen candidates, and build a performing team.",
    "url": "https://web.finbyz.tech/how-to-hire-python-developers",
    
    "keywords": "Python developers, Hire Python developers, python development companies, python coder, python developer hire, python developers, full stack developers, python development companies, python api development, web app python, python company, python developers in India.\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Hire Expert Python Developers | Top Python Development Company",
      "description": "Discover effective strategies for hire Python developers. Learn how to define requirements, screen candidates, and build a performing team.",
      "articleBody": "<section>\n   <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"how-to-hire-python-developers\"\n                    height=\"80%\" src=\"/files/Banner-Python-Developer.png\" title=\"how-to-hire-python-developers\"\n                    width=\"60%\">\n            </div>\n        </div>\n    </div>\n    <br> \n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div cl",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech Pvt Ltd"
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
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
        <meta itemProp="name" content="Hire Expert Python Developers | Top Python Development Company" />
        <meta itemProp="description" content="Discover effective strategies for hire Python developers. Learn how to define requirements, screen candidates, and build a performing team." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
