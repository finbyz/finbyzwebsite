import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // -------------------------------------
  // STRUCTURED DATA (JSON-LD)
  // -------------------------------------
  const data = await getPageData("Web Page", "our-story");
  const faqsGroup = await getFaqs("Web Page", "our-story");

  return (
    <>
      {/* --- JSON-LD Structured Data --- */}
      {/* --- Semantic Wrapper for LLMs & SEO --- */}
      {/* --- Page Content --- */}
      {children}

      {/* --- Add FAQs if exists --- */}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}

      {/* --- Gallery and Related Reads --- */}
      {data.galleryItems.length > 0 || data.relatedReads.length > 0 ? (
        <FinbyzGallery
          relatedReads={data.relatedReads}
          galleryItems={data.galleryItems}
        />
      ) : null}

      {/* --- Footer Slider --- */}
      <BusinessSlider />
    </>
  );
}
