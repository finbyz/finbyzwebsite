// This will be different for each page at build time

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <main className="py-12 md:py-16">
      {children}

    </main>
  );
}
