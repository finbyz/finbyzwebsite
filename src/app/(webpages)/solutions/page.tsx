
import SolutionsPageContent from "./SolutionsPageContent";
import PageFooter from "@/components/sections/PageFooter";

export default function Page() {
    return (
        <>
            <SolutionsPageContent />
            <PageFooter
                doctype="Web Page"
                docname="solutions"
                showInquiryForm={false}
            />
        </>
    );
}
