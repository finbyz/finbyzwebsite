import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/erpnext/services/start-your-erp-journey" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
