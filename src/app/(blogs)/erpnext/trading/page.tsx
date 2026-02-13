import TradingPageContent from './TradingPageContent';
import FooterSection from "@/components/sections/FooterSection";
import StructureData from "@/components/seo/StructureData";

export default async function Page() {
  return (
    <>
      <TradingPageContent />
      <FooterSection
        doctype="Web Page"
        docname="erp-for-trading-industry"
        showInquiryForm={true}
      />
      <StructureData name="erp-for-trading" type="webpage" />
    </>
  );
}
