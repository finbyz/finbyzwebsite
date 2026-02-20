import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/erpnext/services/system-maintenance-amc" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
