import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/solutions/erp/insights" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
