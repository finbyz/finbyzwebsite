import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

const PAGE_SLUG = "erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const faqsGroup = await getFaqs("Blog Post", "erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals");
  const data = await getPageData("Blog Post", "erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals");

  return (
    <>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <LazyBusinessSlider />
    </>
  );
}
