import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/careers/insights" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
