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
    "staff-augmentation/hire-python-developers",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "staff-augmentation/hire-python-developers",
  );

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="staff-augmentation/hire-python-developers" />
    </>
  );
}
