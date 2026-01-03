import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import InquiryForm from "@/components/ui/InquiryForm";
import { getFaqs, getPageData } from "@/lib/getPageData";

interface PageFooterProps {
  doctype: "Web Page" | "Blog Post";
  docname: string;
  structureDataName?: string;
  structureDataType?: "webpage" | "blog";
  showInquiryForm?: boolean;
}

/**
 * Server component that renders the standard page footer section
 * including FAQ, Gallery, BusinessSlider, StructureData, and optional InquiryForm.
 * 
 * This component fetches its own data and should be used at the end of page content.
 */
export default async function PageFooter({
  doctype,
  docname,
  structureDataName,
  structureDataType = "webpage",
  showInquiryForm = false,
}: PageFooterProps) {
  const data = await getPageData(doctype, docname);
  const faqsGroup = await getFaqs(doctype, docname);

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
      {structureDataName && (
        <StructureData name={structureDataName} type={structureDataType} />
      )}
      {showInquiryForm && <InquiryForm />}
    </>
  );
}
