import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Dedicated Python Developers\n\n",
  description: "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
  keywords: "python development companies,\nhire python developer,\npython developers,\npython coder,\npython developer hire,\npython developers,\nfull stack developers,\npython development companies,\npython api development,\nweb app python,\npython company,\npython developers in india\n\n\n\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/hire-python-developer",
  },
  openGraph: {
    title: "Hire Dedicated Python Developers\n\n",
    description: "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
    url: "https://web.finbyz.tech/hire-python-developer",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-Python-Dev.svg", width: 1200, height: 630, alt: "Hire Dedicated Python Developers\n\n" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Python Developers\n\n",
    description: "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
    creator: "@finbyz",
    images: ["/files/Hire-Python-Dev.svg"],
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
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hire Dedicated Python Developers\n\n",
    "description": "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
    "url": "https://web.finbyz.tech/hire-python-developer",
    "image": "/files/Hire-Python-Dev.svg",
    "keywords": "python development companies,\nhire python developer,\npython developers,\npython coder,\npython developer hire,\npython developers,\nfull stack developers,\npython development companies,\npython api development,\nweb app python,\npython company,\npython developers in india\n\n\n\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Hire Dedicated Python Developers\n\n",
      "description": "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
      
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
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Hire Dedicated Python Developers\n\n" />
        <meta itemProp="description" content="Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
