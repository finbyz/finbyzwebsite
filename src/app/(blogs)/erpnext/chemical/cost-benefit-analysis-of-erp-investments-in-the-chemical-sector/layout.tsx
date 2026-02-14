import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection docname="/erpnext/chemical/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector" />
    </>
  );
}
