import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <>
      <main>
        {/* Structured JSON-LD */}
        {/* WebPage Schema */}
        {/* Main Page Content */}
        {children}

        {/* FAQ Section */}
      </main>
      <FooterSection docname="/custom-erp-development" />
    </>
  );
}
