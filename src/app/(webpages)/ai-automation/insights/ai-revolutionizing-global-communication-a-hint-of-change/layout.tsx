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
    <FooterSection docname="/ai-automation/insights/ai-revolutionizing-global-communication-a-hint-of-change" />
    </>
  );
}
