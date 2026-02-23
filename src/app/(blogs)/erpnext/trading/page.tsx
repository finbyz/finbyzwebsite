import TradingPageContent from './TradingPageContent';
import StructureData from "@/components/seo/StructureData";

export default async function Page() {
  return (
    <>
      <TradingPageContent />
      <StructureData name="erp-for-trading" type="webpage" />
    </>
  );
}
