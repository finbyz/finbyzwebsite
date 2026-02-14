import FooterSection from "@/components/sections/FooterSection";

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

  return (
    <>
      <main>
        {children}
      </main>
    <FooterSection docname="/erpnext/services/opening-balance-reconciliation" />
    </>
  );
}
