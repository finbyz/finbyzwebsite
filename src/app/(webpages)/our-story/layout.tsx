export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // -------------------------------------
  // STRUCTURED DATA (JSON-LD)
  // -------------------------------------
  return (
    <>
      {/* --- JSON-LD Structured Data --- */}
      {/* --- Semantic Wrapper for LLMs & SEO --- */}
      {/* --- Page Content --- */}
      {children}
    </>
  );
}
