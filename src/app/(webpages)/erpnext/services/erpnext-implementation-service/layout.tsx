import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "erpnext/services/erpnext-implementation-service",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "erpnext/services/erpnext-implementation-service",
  );

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="erpnext/services/erpnext-implementation-service" />
    </>
  );
}
