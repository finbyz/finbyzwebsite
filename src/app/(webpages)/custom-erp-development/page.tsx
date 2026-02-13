import CustomERPContent from './CustomERPContent';
import StructureData from "@/components/seo/StructureData";

export default async function Page() {
    return (
        <>
            <CustomERPContent />
            <StructureData name="custom-erp-development" type="webpage" />
        </>
    );
}
