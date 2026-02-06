
import StaffAugmentationContent from "./StaffAugmentationContent";
import PageFooter from "@/components/sections/PageFooter";

export default function Page() {
    return (
        <>
            <StaffAugmentationContent />
            <PageFooter
                doctype="Web Page"
                docname="staff-augmentation"
                showInquiryForm={false}
            />
        </>
    );
}
