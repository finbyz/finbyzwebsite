import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <FooterSection
        doctype="Web Page"
        docname="case-studies"
        showInquiryForm={false}
      />
    </main>
  );
}
