import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "erpnext/chemical/erp-software-dyechem-industry",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "erpnext/chemical/erp-software-dyechem-industry",
  );

  return (
    <>
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="erpnext/chemical/erp-software-dyechem-industry" />
    </>
  );
}
