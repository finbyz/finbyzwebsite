import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection doctype="Blog Post" docname="erpnext/insights/how-to-choose-the-right-erp-software-for-your-company" />
    </>
  );
}
