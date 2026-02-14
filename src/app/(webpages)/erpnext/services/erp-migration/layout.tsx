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
        {/* Semantic wrapper */}
        <article itemScope itemType="https://schema.org/WebPage">
          <meta
            itemProp="name"
            content="ERP Migration to ERPNext | SAP, Oracle, Tally Migration Experts"
          />
          <meta
            itemProp="description"
            content="Expert ERP migration services ensuring seamless transition to ERPNext from SAP, Oracle, Tally, Odoo, QuickBooks & legacy systems."
          />
        </article>

        {/* Page Content */}
        {children}

      </main>
    <FooterSection docname="/erpnext/services/erp-migration" />
    </>
  );
}
