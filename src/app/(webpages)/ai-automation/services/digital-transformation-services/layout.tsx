import BusinessSlider from "@/components/sections/business-slider";
import { LazyBusinessSlider } from "@/lib/lazy-components";
import { getFaqs, getPageData } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Blog Post",
    "digital-transformation-services",
  );
  const faqsGroup = await getFaqs(
    "Blog Post",
    "digital-transformation-services",
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
