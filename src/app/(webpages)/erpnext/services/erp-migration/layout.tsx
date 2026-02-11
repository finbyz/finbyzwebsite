import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "erpnext/services/erp-migration");
  const faqsGroup = await getFaqs("Web Page", "erpnext/services/erp-migration");

  return (
    <>
      <main>
        {/* JSON-LD structured data */}
        {/* Semantic wrapper */}
        <article itemScope itemType="https://schema.org/WebPage">
          <meta
            itemProp="name"
            content="ERP Migration to ERPNext | SAP, Oracle, Tally Migration Experts"
          />
          <meta
            itemProp="description"
            content="Expert ERP migration services ensuring seamless transition to ERPNext from SAP, Oracle, Tally, Odoo, QuickBooks & legacy systems."
          />
        </article>

        {/* Page Content */}
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

        {/* Business Slider */}
        <BusinessSlider />
      </main>
    </>
  );
}
