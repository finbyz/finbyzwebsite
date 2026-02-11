import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs(
    "Blog Post",
    "erpnext/trading/erp-for-commodities-trading-business",
  );
  const data = await getPageData(
    "Blog Post",
    "erpnext/trading/erp-for-commodities-trading-business",
  );

  return (
    <>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {data.galleryItems.length > 0 || data.relatedReads.length > 0 ? (
        <FinbyzGallery
          relatedReads={data.relatedReads}
          galleryItems={data.galleryItems}
        />
      ) : null}
      <LazyBusinessSlider />
    </>
  );
}
