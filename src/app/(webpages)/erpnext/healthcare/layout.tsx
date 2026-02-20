import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <FooterSection docname="/erpnext/healthcare" showBusinessSlider={true} showInquiryForm={false} />
    </main>
  );
}
