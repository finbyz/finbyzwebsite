import AIConsultingContent from "./AIConsultingContent";
import PageFooter from "@/components/sections/PageFooter";

export default function Page() {
    return (
        <>
            <AIConsultingContent />
            <PageFooter
                doctype="Web Page"
                docname="ai-strategy-consulting-services"
                showInquiryForm={false}
                structureDataName="ai-consulting"
                structureDataType="webpage"
            />
        </>
    );
}
