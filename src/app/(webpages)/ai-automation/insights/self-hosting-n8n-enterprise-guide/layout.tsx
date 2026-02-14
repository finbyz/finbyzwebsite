import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "ai-automation/insights/self-hosting-n8n-enterprise-guide";
const PAGE_ROUTE = "ai-automation/insights/self-hosting-n8n-enterprise-guide";

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
    <FooterSection docname="/ai-automation/insights/self-hosting-n8n-enterprise-guide" />
    </>
  );
}
