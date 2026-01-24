import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
const pageData = await fetchFrappeSchemaData({
    name: "significance-of-system-and-process",
    type: "blog"
})
return {
  title: pageData?.data?.title,
  description: pageData?.data?.description,
  keywords: pageData?.data?.keywords,
  authors: [{ "name": "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    "canonical": `${process.env.SITE_URL}/${pageData?.data?.route}`,
  },
  openGraph: {
    title: pageData?.data?.seo_title,
    description: pageData?.data?.meta_description,
    url: `${process.env.SITE_URL}/${pageData?.data?.route}`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: `${process.env.FRAPPE_URL}/${pageData?.data?.meta_image || pageData?.data?.svg_image || pageData?.data?.image || pageData?.data?.animated_image}`, width: 1200, height: 630, alt: pageData?.data?.seo_title }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData?.data?.seo_title,
    description: pageData?.data?.small_description,
    creator: "@finbyz",
    images: [`${process.env.FRAPPE_URL}/${pageData?.data?.meta_image}`],
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
}
const faqsGroup = await getFaqs("Blog Post", "erp/insights/significance-of-system-and-process");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Blog Post", "erp/insights/significance-of-system-and-process");

  return (
    <>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <LazyBusinessSlider />
      <StructureData name="significance-of-system-and-process" type="blog" />
    </>
  );
}
