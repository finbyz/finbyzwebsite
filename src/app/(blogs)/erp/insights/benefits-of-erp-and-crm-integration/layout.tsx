import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection docname="/erp/insights/benefits-of-erp-and-crm-integration" />
    </>
  );
}
