import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "erpnext/ai/lead-intelligence");
  const faqsGroup = await getFaqs("Web Page", "erpnext/ai/lead-intelligence");

  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      {/* Semantic HTML wrapper for better content extraction */}
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {data.galleryItems.length > 0 || data.relatedReads.length > 0 ? (
        <FinbyzGallery
          relatedReads={data.relatedReads}
          galleryItems={data.galleryItems}
        />
      ) : null}
      <BusinessSlider />
    </>
  );
}
