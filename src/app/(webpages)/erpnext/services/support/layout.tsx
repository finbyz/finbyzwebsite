import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "erpnext/services/support");
  const faqsGroup = await getFaqs("Web Page", "erpnext/services/support");

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
        

        {/* Gallery + Related Reads */}
        {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
          <FinbyzGallery
            relatedReads={data.relatedReads}
            galleryItems={data.galleryItems}
          />
        )}

        {/* Business Slider */}
        
      </main>
    <FooterSection doctype="Web Page" docname="erpnext/services/support" />
    </>
  );
}
