import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection docname="/erp/insights/the-best-erp-software-for-small-businesses-in-manufacturing" />
    </>
  );
}
