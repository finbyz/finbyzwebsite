import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

const PAGE_SLUG = "n8n/insights/n8n-vs-zapier-vs-make-comparison";
const PAGE_ROUTE = "ai-automation/insights/n8n-vs-zapier-vs-make-comparison";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs("Blog Post", PAGE_SLUG);
  const data = await getPageData("Blog Post", PAGE_SLUG);

  return (
    <>
      <main>
        {children}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
        {data.galleryItems.length > 0 || data.relatedReads.length > 0 ? (
          <FinbyzGallery
            relatedReads={data.relatedReads}
            galleryItems={data.galleryItems}
          />
        ) : null}
        <LazyBusinessSlider />
      </main>
    </>
  );
}
