import ChemicalPageContent from './ChemicalPageContent';
import PageFooter from '@/components/sections/PageFooter';

export default async function Page() {
  return (
    <>
      <ChemicalPageContent />
      <PageFooter
        doctype="Web Page"
        docname="erp-for-chemical-industry"
        structureDataName="erp-for-chemical"
        structureDataType="webpage"
        showInquiryForm={true}
      />
    </>
  );
}
