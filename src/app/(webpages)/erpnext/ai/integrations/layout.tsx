import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/erpnext/ai/integrations" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
