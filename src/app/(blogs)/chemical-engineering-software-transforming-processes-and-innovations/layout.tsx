import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chemical ERP Software for the Chemical Industry | FinByz Tech",
  description: "Discover FinByz Tech\'s ERP solutions tailored for the chemical industry. Streamline operations, ensure compliance, and enhance efficiency with our specialized software.",
  keywords: "Chemical Manufacturing erp,\nChemical ERP Software,\nerp for chemical industry\nChemical engineering Software, \nChemical Software, \n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/chemical-engineering-software-transforming-processes-and-innovations",
  },
  openGraph: {
    title: "Chemical ERP Software for the Chemical Industry | FinByz Tech",
    description: "Discover FinByz Tech\'s ERP solutions tailored for the chemical industry. Streamline operations, ensure compliance, and enhance efficiency with our specialized software.",
    url: "https://finbyz.tech/chemical-engineering-software-transforming-processes-and-innovations",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemical ERP Software for the Chemical Industry | FinByz Tech",
    description: "Discover FinByz Tech\'s ERP solutions tailored for the chemical industry. Streamline operations, ensure compliance, and enhance efficiency with our specialized software.",
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
const faqsGroup = await getFaqs("Blog Post","chemical-engineering-software-transforming-processes-and-innovations");
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
  "@id": "https://finbyz.tech/chemical-engineering-software-transforming-processes-and-innovations#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/chemical-engineering-software-transforming-processes-and-innovations",
  "headline": "Chemical ERP Software for the Chemical Industry | FinByz Tech",
  "name": "Chemical ERP Software for the Chemical Industry | FinByz Tech",
  "description": "Discover FinByz Tech\\'s ERP solutions tailored for the chemical industry. Streamline operations, ensure compliance, and enhance efficiency with our specialized software.",
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
  "url": "https://finbyz.tech/chemical-engineering-software-transforming-processes-and-innovations",
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
    "Chemical Manufacturing erp",
    "Chemical ERP Software",
    "erp for chemical industry\nChemical engineering Software",
    "Chemical Software"
  ]
};
  const data = await getPageData("Blog Post","chemical-engineering-software-transforming-processes-and-innovations");

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
        <meta itemProp="headline" content="Chemical ERP Software for the Chemical Industry | FinByz Tech" />
        <meta itemProp="description" content="Discover FinByz Tech\'s ERP solutions tailored for the chemical industry. Streamline operations, ensure compliance, and enhance efficiency with our specialized software." />
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
