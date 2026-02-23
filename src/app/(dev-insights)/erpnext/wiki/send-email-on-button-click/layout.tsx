import StructureData from "@/components/seo/StructureData";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}

      <StructureData name="SNI-00086" type="code-snippet" />
    </>
  );
}