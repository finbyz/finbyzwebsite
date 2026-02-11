import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import InquiryForm from "@/components/ui/InquiryForm";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs(
    "Blog Post",
    "careers/insights/how-to-become-a-software-engineer-the-path-to-success",
  );
  const data = await getPageData(
    "Blog Post",
    "careers/insights/how-to-become-a-software-engineer-the-path-to-success",
  );

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
