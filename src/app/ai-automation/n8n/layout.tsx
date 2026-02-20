import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/ai-automation/n8n" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
