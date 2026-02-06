"use client";

import CustomAIDevelopmentContent from "./CustomAIDevelopmentContent";
import PageFooter from "@/components/sections/PageFooter";

export default function Page() {
    return (
        <>
            <CustomAIDevelopmentContent />
            <PageFooter
                doctype="Web Page"
                docname="custom-ai-development"
                showInquiryForm={false}
                structureDataName="custom-ai-development"
                structureDataType="webpage"
            />
        </>
    );
}
