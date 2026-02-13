import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection doctype="Blog Post" docname="erp/insights/how-can-businesses-benefit-from-using-analytics-on-their-website" />
    </>
  );
}
