import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "services/web-application-development",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "services/web-application-development",
  );

  return (
    <>
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="services/web-application-development" />
    </>
  );
}
