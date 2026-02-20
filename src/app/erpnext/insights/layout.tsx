import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/erpnext/insights" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
