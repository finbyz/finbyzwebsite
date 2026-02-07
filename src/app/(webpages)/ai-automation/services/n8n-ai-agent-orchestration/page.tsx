import N8nOrchestrationContent from "./N8nOrchestrationContent";
import PageFooter from "@/components/sections/PageFooter";

export default function Page() {
    return (
        <>
            <N8nOrchestrationContent />
            <PageFooter
                doctype="Web Page"
                docname="n8n-ai-agent-orchestration"
                showInquiryForm={false}
                structureDataName="n8n-ai-agent-orchestration"
                structureDataType="webpage"
            />
        </>
    );
}
