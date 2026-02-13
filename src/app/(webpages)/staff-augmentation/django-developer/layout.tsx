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
    "staff-augmentation/django-developer",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "staff-augmentation/django-developer",
  );

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="staff-augmentation/django-developer" />
    </>
  );
}
