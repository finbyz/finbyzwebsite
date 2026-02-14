import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import InquiryForm from "@/components/ui/InquiryForm";
import { getFaqs, getPageData } from "@/lib/getPageData";
import 'server-only';

interface FooterSectionProps {
  docname: string;
  showInquiryForm?: boolean;
}

/**
 * Server component that renders the standard page footer section
 * including FAQ, Gallery, BusinessSlider, and optional InquiryForm.
 * 
 * Uses "NextJS Page" doctype internally. Pass the route (with preceding /) as docname.
 */
export default async function FooterSection({
  docname,
  showInquiryForm = false,
}: FooterSectionProps) {
  const data = await getPageData(docname);
  const faqsGroup = await getFaqs(docname);

  return (
    <>
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
        <FinbyzGallery
          relatedReads={data.relatedReads}
          galleryItems={data.galleryItems}
        />
      )}
      <BusinessSlider />
      {showInquiryForm && <InquiryForm />}
    </>
  );
}
