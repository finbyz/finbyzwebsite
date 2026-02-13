import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Blog Post",
    "digital-transformation-services",
  );
  const faqsGroup = await getFaqs(
    "Blog Post",
    "digital-transformation-services",
  );
  return (
    <>
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="digital-transformation-services" />
    </>
  );
}
