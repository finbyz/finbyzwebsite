import AIAutomationPageContent from './AIAutomationPageContent';
import PageFooter from '@/components/sections/PageFooter';

export default async function Page() {
  return (
    <>
      <AIAutomationPageContent />
      <PageFooter
        doctype="Web Page"
        docname="ai-automation"
        showInquiryForm={false}
      />
    </>
  );
}
