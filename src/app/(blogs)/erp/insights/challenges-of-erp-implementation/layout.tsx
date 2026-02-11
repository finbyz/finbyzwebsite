import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Blog Post",
    "erp/insights/challenges-of-erp-implementation",
  );
  const faqsGroup = await getFaqs(
    "Blog Post",
    "erp/insights/challenges-of-erp-implementation",
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
