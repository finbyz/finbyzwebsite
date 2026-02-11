import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InquiryForm from "@/components/ui/InquiryForm";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "custom-erp-development");
  const faqsGroup = await getFaqs("Web Page", "custom-erp-development");

  return (
    <>
      <main>
        {/* Structured JSON-LD */}
        {/* WebPage Schema */}
        {/* Main Page Content */}
        {children}

        {/* FAQ Section */}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}

        {/* Gallery + Related Reads */}
        {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
          <FinbyzGallery
            relatedReads={data.relatedReads}
            galleryItems={data.galleryItems}
          />
        )}

        {/* Business Customers Slider */}
        <BusinessSlider />
        <InquiryForm />
      </main>
    </>
  );
}
