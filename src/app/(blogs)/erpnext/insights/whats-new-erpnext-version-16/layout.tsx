import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import InquiryForm from "@/components/ui/InquiryForm";

const PAGE_SLUG = "erpnext/insights/whats-new-erpnext-version-16";
const PAGE_ROUTE = "erpnext/insights/whats-new-erpnext-version-16";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs("Blog Post", PAGE_SLUG);
  const data = await getPageData("Blog Post", PAGE_SLUG);

  return (
    <>
      <Header />
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
        <InquiryForm />
      </main>
    </>
  );
}
