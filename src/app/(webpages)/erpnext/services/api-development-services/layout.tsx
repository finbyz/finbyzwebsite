import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <FooterSection docname="/erpnext/services/api-development-services" showBusinessSlider={true} showInquiryForm={false} />
    </main>
  );
}
