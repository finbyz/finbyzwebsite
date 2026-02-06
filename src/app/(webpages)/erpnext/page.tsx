import Content from './ERPNextPageContent';
import PageFooter from '@/components/sections/PageFooter';

// Main ERPNext Landing Page
export default async function Page() {
  return (
    <>
      <Content />
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
