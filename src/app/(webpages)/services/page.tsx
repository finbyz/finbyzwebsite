import ServicesPageContent from './ServicesPageContent';
import PageFooter from '@/components/sections/PageFooter';

export default async function Page() {
  return (
    <>
      <ServicesPageContent />
      <PageFooter
        doctype="Web Page"
        docname="services"
        showInquiryForm={false}
      />
    </>
  );
}
