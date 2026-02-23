
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  }) {
  // Structured Data for AI Agent Orchestration Service
  return (
    <>
      {/* JSON-LD Structured Data */}
      <main>
        {children}
      </main>
    </>
  );
}
