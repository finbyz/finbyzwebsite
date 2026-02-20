import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/solutions/erp" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
