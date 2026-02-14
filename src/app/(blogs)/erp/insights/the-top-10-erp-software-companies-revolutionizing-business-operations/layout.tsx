import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection docname="/erp/insights/the-top-10-erp-software-companies-revolutionizing-business-operations" />
    </>
  );
}
