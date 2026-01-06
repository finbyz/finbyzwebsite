import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "erpnext-v16-migration";
const PAGE_ROUTE = "erpnext/services/erpnext-v16-migration";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchFrappeSchemaData({
    name: PAGE_SLUG,
    type: "webpage"
  });

  return {
    title: pageData?.data?.title || "ERPNext v16 Migration Services | Upgrade from v15 with Expert Support",
    description: pageData?.data?.description || "Expert ERPNext v16 migration services. Upgrade from v15 with zero downtime. Comprehensive audit, custom app compatibility check, and secure data migration.",
    keywords: pageData?.data?.keywords || "ERPNext migration, ERPNext v16 upgrade, move to ERPNext v16, ERPNext migration services, Frappe upgrade services",
    authors: [{ "name": "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
      "canonical": `${process.env.SITE_URL}/${PAGE_ROUTE}`,
    },
    openGraph: {
      title: pageData?.data?.seo_title || "Safe & Secure ERPNext v16 Migration Services",
      description: pageData?.data?.meta_description || "Upgrade your business to ERPNext v16 with our certified migration experts. Validated process, data integrity guaranteed.",
      url: `${process.env.SITE_URL}/${PAGE_ROUTE}`,
      siteName: "Finbyz Tech",
      type: "website",
      locale: "en_US",
      images: [{ url: `${process.env.FRAPPE_URL}/${pageData?.data?.meta_image}`, width: 1200, height: 630, alt: "ERPNext Migration Services" }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.data?.seo_title || "ERPNext v16 Migration Services",
      description: pageData?.data?.small_description || "Expert help for upgrading to ERPNext v16.",
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
  };
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

  return (
    <>
      <main>
        {children}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
        {
          (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
        }
        <BusinessSlider />
        <StructureData name={PAGE_SLUG} type="webpage" />
      </main>
    </>
  );
}
