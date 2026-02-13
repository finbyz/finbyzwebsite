import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "erpnext/services/develop-custom-erp-software",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "erpnext/services/develop-custom-erp-software",
  );

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
        
      </main>
    <FooterSection doctype="Web Page" docname="erpnext/services/develop-custom-erp-software" />
    </>
  );
}
