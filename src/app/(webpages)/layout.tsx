import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { getPageData } from "@/lib/getPageData";
import { headers } from "next/headers";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
// This will be different for each page at build time

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const headerList = await headers();
  const path = headerList.get("referer") || "";
  const paths = path.split("/")

  // Above line only works during dynamic rendering, not for static build.
  // So we’ll handle static routes separately below.
  const currentRoute = paths[paths.length - 1]
  const data = await getPageData("Web Page", currentRoute || "home");
  return (
    <>
      <Header />
      <main>
        {children}
        {
          (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
        }
      </main>
      <Footer />
    </>
  );
}
