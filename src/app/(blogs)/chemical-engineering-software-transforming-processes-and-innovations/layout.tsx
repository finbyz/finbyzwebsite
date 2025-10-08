import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chemical ERP Software for the Chemical Industry | FinByz Tech",
  description: "Discover how chemical engineering software transforms processes with simulation, modeling, and optimization. Unlock efficiency and innovatio",
  keywords: "Chemical Manufacturing erp,\nChemical ERP Software,\nerp for chemical industry\nChemical engineering Software, \nChemical Software, \n",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/chemical-engineering-software-transforming-processes-and-innovations",
  },
  openGraph: {
    title: "Chemical ERP Software for the Chemical Industry | FinByz Tech",
    description: "Discover how chemical engineering software transforms processes with simulation, modeling, and optimization. Unlock efficiency and innovatio",
    url: "https://web.finbyz.tech/chemical-engineering-software-transforming-processes-and-innovations",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemical ERP Software for the Chemical Industry | FinByz Tech",
    description: "Discover how chemical engineering software transforms processes with simulation, modeling, and optimization. Unlock efficiency and innovatio",
    creator: "@yourhandle",
    
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
  other: {
    'article:content_tier': 'free',
    'article:opinion': 'false',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chemical ERP Software for the Chemical Industry | FinByz Tech",
    "description": "Discover how chemical engineering software transforms processes with simulation, modeling, and optimization. Unlock efficiency and innovatio",
    "url": "https://web.finbyz.tech/chemical-engineering-software-transforming-processes-and-innovations",
    
    "keywords": "Chemical Manufacturing erp,\nChemical ERP Software,\nerp for chemical industry\nChemical engineering Software, \nChemical Software, \n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Chemical ERP Software for the Chemical Industry | FinByz Tech",
      "description": "Discover how chemical engineering software transforms processes with simulation, modeling, and optimization. Unlock efficiency and innovatio",
      "articleBody": "<section>\n   \n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"chemical-engineering-software-transforming-processes-and-innovations\"\n                    height=\"80%\" src=\"/files/Key-Features-of-ERP-Software-for-Chemical-Industry (1).png\" title=\"chemical-engineering-software-transforming-processes-and-innovations\"\n                    width=\"80%\"></div>\n\n        </div>\n    </d",
      "author": {
        "@type": "Organization",
        "name": "Your Company Name"
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
        <meta itemProp="name" content="Chemical ERP Software for the Chemical Industry | FinByz Tech" />
        <meta itemProp="description" content="Discover how chemical engineering software transforms processes with simulation, modeling, and optimization. Unlock efficiency and innovatio" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
