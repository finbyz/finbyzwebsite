import StructureData from "@/components/seo/StructureData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}

      <StructureData name="SNI-00086" type="code-snippet" />  
      
      <FooterSection docname="/erpnext/wiki/send-email-on-button-click" />
    </>
  );
}