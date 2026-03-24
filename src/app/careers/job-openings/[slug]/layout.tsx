import BreadcrumbSchema from "@/components/seo/BreadCrumbSchema";

export default async function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="py-0">
      <BreadcrumbSchema />
      {children}
    </main>
  );
}


