import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals";

export default async function Layout({ children }: { children: React.ReactNode }) {
  
  

  return (
    <>
      {children}
      <FooterSection docname="/erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals" />
    </>
  );
}
