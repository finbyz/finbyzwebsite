import { generateAutoMetadata } from "@/lib/seo-metadata";

export async function generateMetadata() {
  return generateAutoMetadata();
}

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}
