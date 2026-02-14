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
        <article itemScope itemType="https://schema.org/WebPage">
          <meta
            itemProp="name"
            content="ERPNext Support Services | AMC, Bug Fixing &amp; Customization"
          />
          <meta
            itemProp="description"
            content="Professional ERPNext support including AMC, bug fixes, customization, upgrades and server optimization."
          />
        </article>

        {/* Page Content */}
        {children}
      </main>
    <FooterSection docname="/erpnext/services/support" />
    </>
  );
}
