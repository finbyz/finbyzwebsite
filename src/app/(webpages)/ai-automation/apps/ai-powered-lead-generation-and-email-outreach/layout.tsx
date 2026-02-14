import Header from "@/components/layout/header";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection docname="/ai-automation/apps/ai-powered-lead-generation-and-email-outreach" />
    </>
  );
}
