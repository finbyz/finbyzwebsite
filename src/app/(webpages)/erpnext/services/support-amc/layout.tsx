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
  const data = await getPageData("Web Page", "erpnext/services/support-amc");
  const faqsGroup = await getFaqs("Web Page", "erpnext/services/support-amc");

  return (
    <>
      <main>
        {/* JSON-LD structured data */}
        {/* WebPage schema wrapper */}
        <article itemScope itemType="https://schema.org/WebPage">
          <meta
            itemProp="name"
            content="ERPNext Support Services | AMC, Bug Fixing & Customization"
          />
          <meta
            itemProp="description"
            content="Professional ERPNext support including AMC, bug fixes, customization, upgrades and server optimization."
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
