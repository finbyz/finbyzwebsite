import OpeningBalanceContent from './OpeningBalanceContent';
// import PageFooter from '@/components/sections/PageFooter';

export default async function Page() {
    return (
        <>
            <OpeningBalanceContent />
            {/* PageFooter temporarily removed to avoid duplicate inquiry form
                The merged section in OpeningBalanceContent already has the form */}
            {/* <PageFooter
                doctype="Web Page"
                docname="opening-balance-reconciliation"
                showInquiryForm={false}
            /> */}
        </>
    );
}
