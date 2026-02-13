import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Structured Data for AI Automation Page
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      {/* Schema for WebPage context */}
      {/* Render main page content */}
      {children}
      <FooterSection doctype="Web Page" docname="ai-automation" />
    </>
  );
}
