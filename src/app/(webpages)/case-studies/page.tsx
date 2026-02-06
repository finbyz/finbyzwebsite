"use client";

import CaseStudiesPageContent from "./CaseStudiesPageContent";
import PageFooter from "@/components/sections/PageFooter";

export default function Page() {
    return (
        <>
            <CaseStudiesPageContent />
            <PageFooter
                doctype="Web Page"
                docname="case-studies"
                showInquiryForm={false}
                structureDataName="case-studies"
                structureDataType="webpage"
            />
        </>
    );
}
