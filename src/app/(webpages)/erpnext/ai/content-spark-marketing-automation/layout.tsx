import Header from "@/components/layout/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        {/* Semantic HTML wrapper for better content extraction */}
        {children}
        
        
        
      </main>
    </>
  );
}
