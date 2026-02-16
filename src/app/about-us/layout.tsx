import { generateAutoMetadata } from "@/lib/seo-metadata";

export async function generateMetadata() {
  return generateAutoMetadata();
}
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
