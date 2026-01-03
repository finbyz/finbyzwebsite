import ERPNextPageContent from './ERPNextPageContent';
import PageFooter from '@/components/sections/PageFooter';

export default async function Page() {
  return (
    <>
      <ERPNextPageContent />
      <PageFooter
        doctype="Web Page"
        docname="erpnext-software"
        structureDataName="erpnext-software"
        structureDataType="webpage"
        showInquiryForm={false}
      />
    </>
  );
}
