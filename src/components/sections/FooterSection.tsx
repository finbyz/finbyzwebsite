import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import InquiryForm from "@/components/ui/InquiryForm";
import { getFaqs, getPageData } from "@/lib/getPageData";
import 'server-only';
import { headers } from "next/headers";

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
  const pathname = (await headers()).get('x-pathname')
  if (pathname !== docname) return null;
  const data = await getPageData(docname);
  const faqsGroup = await getFaqs(docname);
  return (
    <>
      {faqsGroup?.faqs && faqsGroup.faqs.length > 0 && <FAQ faqs={faqsGroup.faqs} />}
      {data.relatedReads.length > 0 && (
        <FinbyzGallery
          relatedReads={data.relatedReads}
        />
      )}
      <BusinessSlider />
      {showInquiryForm && <InquiryForm />}
    </>
  );
}
