import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

const PAGE_SLUG = "erpnext/services/opening-balance-reconciliation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "FinByz Tech",
      url: "https://finbyz.tech",
      logo: "https://finbyz.tech/files/finbyz-logo.png",
      description: "ERPNext implementation and consulting services",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380001",
        addressCountry: "IN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Opening Balance Reconciliation Service",
      description:
        "Expert ERPNext opening balance reconciliation and data migration services",
      provider: {
        "@type": "Organization",
        name: "FinByz Tech",
      },
      areaServed: ["AE", "SA", "US", "GB", "EU", "IN"],
      serviceType: "ERPNext Services",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380001",
        addressCountry: "IN",
      },
    },
  ];

  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

  return (
    <>
      <main>
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
