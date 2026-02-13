import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs(
    "Blog Post",
    "googles-potential-paywall-balancing-innovation-and-access",
  );
  const data = await getPageData(
    "Blog Post",
    "googles-potential-paywall-balancing-innovation-and-access",
  );

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="googles-potential-paywall-balancing-innovation-and-access" />
    </>
  );
}
