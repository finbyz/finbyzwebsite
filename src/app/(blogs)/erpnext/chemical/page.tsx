import ChemicalPageContent from './ChemicalPageContent';
import StructureData from "@/components/seo/StructureData";

export default async function Page() {
  return (
    <>
      <ChemicalPageContent />
      <StructureData name="erp-for-chemical" type="webpage" />
    </>
  );
}
