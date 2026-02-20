import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <>
      <main>
        {/* JSON-LD structured data */}
        {/* WebPage schema wrapper */}

        {/* Page Content */}
        {children}
        <FooterSection docname="/erpnext/services/support" />
      </main>
    </>
  );
}
