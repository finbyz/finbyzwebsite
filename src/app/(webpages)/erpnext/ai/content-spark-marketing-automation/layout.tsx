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
        {/* Semantic HTML wrapper for better content extraction */}
        {children}
        
        
        
      </main>
    <FooterSection docname="/ai-automation/apps/content-spark-marketing-automation" />
    </>
  );
}
