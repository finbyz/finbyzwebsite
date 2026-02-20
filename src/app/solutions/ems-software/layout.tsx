import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/solutions/ems-software" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
