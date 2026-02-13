import ERPNextPageContent from './ERPNextSupportContent';
import StructureData from "@/components/seo/StructureData";

export default async function Page() {
  return (
    <>
      <ERPNextPageContent />
      <StructureData name="erpnext-support-services" type="webpage" />
    </>
  );
}
