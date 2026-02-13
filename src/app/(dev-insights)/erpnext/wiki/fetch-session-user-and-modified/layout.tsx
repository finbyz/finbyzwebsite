import { getFaqs, getPageData } from "@/lib/getPageData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import StructureData from "@/components/seo/StructureData";

import { Metadata } from "next";
import Script from "next/script";
import FooterSection from "@/components/sections/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchFrappeSchemaData({
    name: "SNI-00005",
    type: "code-snippet"
  })

  return {
    title: pageData?.data?.title || pageData?.data?.seo_title,
    description: pageData?.data?.description,
    keywords: pageData?.data?.keywords,
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
      canonical: "https://finbyz.tech/" + pageData?.data?.route || "",
    },
    openGraph: {
      title: pageData?.data?.seo_title,
      description: pageData?.data?.meta_description,
      url: "https://finbyz.tech/" + pageData?.data?.route || "",
      siteName: "Finbyz Tech",
      type: "website",
      locale: "en_US",
      images: [{ url: `${process.env.SITE_URL}/images/FinbyzLogo.png`, width: 1200, height: 630, alt: pageData?.data?.seo_title }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.data?.seo_title,
      description: pageData?.data?.small_description,
      creator: "@finbyz",
      images: ["https://finbyz.tech/" + pageData?.data?.title || ""],
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Code Snippet", "fetch-session-user-and-modified");
  const faqsGroup = await getFaqs("Code Snippet", "fetch-session-user-and-modified");

  return (
    <>
      
      {children}

      <StructureData name="SNI-00005" type="code-snippet" />  
      
    <FooterSection doctype="Code Snippet" docname="fetch-session-user-and-modified" />
    </>
  );
}