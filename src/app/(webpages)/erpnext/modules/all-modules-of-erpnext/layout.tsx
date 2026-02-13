import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "erpnext/modules/all-modules-of-erpnext",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "erpnext/modules/all-modules-of-erpnext",
  );

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="erpnext/modules/all-modules-of-erpnext" />
    </>
  );
}
