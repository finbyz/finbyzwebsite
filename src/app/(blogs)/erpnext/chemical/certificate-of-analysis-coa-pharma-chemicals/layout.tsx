import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals";

export const metadata: Metadata = {
  title: "Certificate of Analysis (COA): Meaning, Definition & Requirements 2025",
  description: "What is COA? Learn the Certificate of Analysis definition, meaning, requirements for pharma, chemical, and manufacturing. Includes COA vs COC comparison and FDA guidelines.",
  keywords: "coa meaning, what is coa, coa definition, coa certificate, certificate of analysis, coa certificate meaning, coa vs coc, coa full form, certificate of analysis requirements, fda requirements for certificate of analysis, coa pharmaceutical, coa manufacturing, coa in pharma, coa quality assurance, certificate of conformance vs certificate of analysis",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `https://finbyz.tech/${PAGE_SLUG}`,
  },
  openGraph: {
    title: "COA Meaning: Certificate of Analysis Definition & Requirements",
    description: "Complete guide to Certificate of Analysis (COA): definition, key requirements, COA vs COC comparison, and FDA compliance for pharma and manufacturing industries.",
    url: `https://finbyz.tech/${PAGE_SLUG}`,
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    images: [{ url: "/images/coa.PNG", width: 1200, height: 630, alt: "Certificate of Analysis COA Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is COA? Certificate of Analysis Explained",
    description: "Learn COA meaning, definition, and requirements. Complete guide for pharmaceutical and chemical industries.",
    creator: "@finbyz",
    images: ["/images/coa.PNG"],
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
}
const faqsGroup = await getFaqs("Blog Post", "erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Blog Post", "erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals");

  return (
    <>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <LazyBusinessSlider />
      <StructureData name="certificate-of-analysis-in-2024-definition-key-requirements" type="blog" />
    </>
  );
}
