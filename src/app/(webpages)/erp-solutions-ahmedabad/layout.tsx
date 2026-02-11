import type { Metadata } from "next";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

const PAGE_SLUG = "erp-solutions-ahmedabad";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

  return (
    <main>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {data?.galleryItems?.length > 0 || data?.relatedReads?.length > 0 ? (
        <FinbyzGallery
          relatedReads={data.relatedReads}
          galleryItems={data.galleryItems}
        />
      ) : null}
      <BusinessSlider />
    </main>
  );
}
