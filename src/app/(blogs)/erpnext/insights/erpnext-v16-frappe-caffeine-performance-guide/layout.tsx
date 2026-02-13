import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/layout/header";
import InquiryForm from "@/components/ui/InquiryForm";

const PAGE_SLUG =
  "erpnext/insights/erpnext-v16-frappe-caffeine-performance-guide";
const PAGE_ROUTE = `erpnext/insights/${PAGE_SLUG}`;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <>
      <Header />
      <main>
        {children}
        <FooterSection doctype="Blog Post" docname="erpnext/insights/erpnext-v16-frappe-caffeine-performance-guide" />
      </main>
    </>
  );
}
