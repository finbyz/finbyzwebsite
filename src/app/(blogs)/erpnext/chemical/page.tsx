import ChemicalPageContent from './ChemicalPageContent';
import FooterSection from "@/components/sections/FooterSection";
import StructureData from "@/components/seo/StructureData";

export default async function Page() {
  return (
    <>
      <ChemicalPageContent />
      <FooterSection
        doctype="Web Page"
        docname="erp-for-chemical-industry"
        showInquiryForm={true}
      />
      <StructureData name="erp-for-chemical" type="webpage" />
    </>
  );
}
