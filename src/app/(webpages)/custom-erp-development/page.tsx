import CustomERPContent from './CustomERPContent';
import PageFooter from '@/components/sections/PageFooter';

export default async function Page() {
    return (
        <>
            <CustomERPContent />
            <PageFooter
                doctype="Web Page"
                docname="custom-erp-development"
                structureDataName="custom-erp-development"
                structureDataType="webpage"
                showInquiryForm={false}
            />
        </>
    );
}
