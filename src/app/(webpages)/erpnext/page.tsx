import Content from './ERPNextPageContent';
import StructureData from "@/components/seo/StructureData";

// Main ERPNext Landing Page
export default async function Page() {
  return (
    <>
      <Content />
      <StructureData name="erpnext-software" type="webpage" />
    </>
  );
}
