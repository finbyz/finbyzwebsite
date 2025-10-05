import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import {getPageData} from "@/lib/getPageData";
import { headers } from "next/headers";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

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
  const data = await getPageData(currentRoute || "home");
  return (
    <>
        <Header />
        {children}
        {/* {!data.galleryItems ? <h1>No data available</h1>: data.galleryItems.map(item=><p>{item.title}</p>)} */}
        <FinbyzGallery {...data} />
        <Footer />
    </>
  );
}
