import { LazyBusinessSlider } from "@/lib/lazy-components";
import { getFaqs, getPageData } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

const PAGE_SLUG = "ai-automation/guides/proactive-ai-assistant-moltbot";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

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
