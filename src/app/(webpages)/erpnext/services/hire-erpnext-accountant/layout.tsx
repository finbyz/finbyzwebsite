import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "erpnext/services/hire-erpnext-accountant";

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
        addressCountry: "IN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Hire ERPNext Accountant Service",
      description:
        "Expert ERPNext accountants with 10+ years implementation experience for Gulf, Europe, and USA",
      provider: {
        "@type": "Organization",
        name: "FinByz Tech",
      },
      areaServed: ["AE", "SA", "US", "GB", "EU"],
      serviceType: "ERPNext Accounting Outsourcing",
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
      "@type": "WebPage",
      name: "Hire ERPNext Accountant",
      description:
        "Hire expert ERPNext accountants backed by 10+ years implementation experience",
      url: "https://finbyz.tech/erpnext/services/hire-erpnext-accountant",
    },
  ];

  return (
    <>
      <main>
        {children}
      </main>
    <FooterSection docname="/erpnext/services/hire-erpnext-accountant" />
    </>
  );
}
