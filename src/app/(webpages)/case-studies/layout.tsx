import PageFooter from "@/components/sections/PageFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <PageFooter
        doctype="Web Page"
        docname="case-studies"
        showInquiryForm={false}
        structureDataName="case-studies"
        structureDataType="webpage"
      />
    </main>
  );
}
