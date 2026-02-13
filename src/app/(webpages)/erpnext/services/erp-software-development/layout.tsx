import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InquiryForm from "@/components/ui/InquiryForm";
import FooterSection from "@/components/sections/FooterSection";

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
        

        {/* Gallery + Related Reads */}
        {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
          <FinbyzGallery
            relatedReads={data.relatedReads}
            galleryItems={data.galleryItems}
          />
        )}

        {/* Business Customers Slider */}
        
        <InquiryForm />
      </main>
    <FooterSection doctype="Web Page" docname="custom-erp-development" />
    </>
  );
}
