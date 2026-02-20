import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <FooterSection docname="/erpnext/retail" showBusinessSlider={true} showInquiryForm={false} />
    </main>
  );
}
