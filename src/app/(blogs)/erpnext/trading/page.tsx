import TradingPageContent from './TradingPageContent';
import PageFooter from '@/components/sections/PageFooter';

export default async function Page() {
  return (
    <>
      <TradingPageContent />
      <PageFooter
        doctype="Web Page"
        docname="erp-for-trading-industry"
        structureDataName="erp-for-trading"
        structureDataType="webpage"
        showInquiryForm={true}
      />
    </>
  );
}
