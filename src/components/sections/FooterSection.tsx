import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import InquiryForm from "@/components/ui/InquiryForm";
import CTA from "@/components/sections/cta";
import { getFaqs, getPageData } from "@/lib/getPageData";
import 'server-only';
import { headers } from "next/headers";

interface FooterSectionProps {
  docname?: string;
  showInquiryForm?: boolean;
  showBusinessSlider?: boolean;
}

/**
 * Server component that renders the standard page footer section
 * including FAQ, Gallery, BusinessSlider, and optional InquiryForm.
 * 
 * Uses "NextJS Page" doctype internally. If docname is not provided, uses current pathname.
 */
export default async function FooterSection({
  docname,
  showInquiryForm = false,
  showBusinessSlider = false,
}: FooterSectionProps = {}) {
  const pathname = (await headers()).get('x-pathname') || "/";
  if (docname && pathname !== docname) return null;
  const activeRoute = docname || pathname;
  const data = await getPageData(activeRoute);
  const faqsGroup = await getFaqs(activeRoute);

  // Use data from API if available, else fallback to props
  const finalShowInquiryForm = data?.showInquiryForm ?? showInquiryForm;
  const finalShowBusinessSlider = data?.showBusinessSlider ?? showBusinessSlider;
  return (
    <>
      {data.ctaData && data.ctaData.show_cta ? (
        <CTA data={data.ctaData} />
      ) : null}
      {faqsGroup?.faqs && faqsGroup.faqs.length > 0 && <FAQ faqs={faqsGroup.faqs} />}
      {data.relatedReads.length > 0 && (
        <FinbyzGallery
          relatedReads={data.relatedReads}
        />
      )}
      {finalShowBusinessSlider && <BusinessSlider />}
      {finalShowInquiryForm ? (
        <InquiryForm />
      ) : null}
    </>
  );
}
