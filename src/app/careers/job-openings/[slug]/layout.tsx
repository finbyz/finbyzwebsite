
export default async function JobLayout({
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


