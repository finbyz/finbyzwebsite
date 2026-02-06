import ERPNextPageContent from './ERPNextSupportContent';
import PageFooter from '@/components/sections/PageFooter';

export default async function Page() {
  return (
    <>
      <ERPNextPageContent />
      <PageFooter
        doctype="Web Page"
        docname="erpnext-support-services"
        structureDataName="erpnext-support-services"
        structureDataType="webpage"
        showInquiryForm={false}
      />
    </>
  );
}
