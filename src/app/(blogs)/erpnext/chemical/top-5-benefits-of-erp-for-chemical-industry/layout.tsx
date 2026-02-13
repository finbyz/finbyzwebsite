import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection doctype="Blog Post" docname="erpnext/chemical/top-5-benefits-of-erp-for-chemical-industry" />
    </>
  );
}
