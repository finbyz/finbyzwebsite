import ImplementationContent from "./ImplementationContent";
import PageFooter from "@/components/sections/PageFooter";

export default function Page() {
    return (
        <>
            <ImplementationContent />
            <PageFooter
                doctype="Web Page"
                docname="ai-implementation-services"
                showInquiryForm={false}
                structureDataName="ai-implementation"
                structureDataType="webpage"
            />
        </>
    );
}
