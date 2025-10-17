import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import {getPageData} from "@/lib/getPageData";
import { headers } from "next/headers";
// This will be different for each page at build time

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <main className="py-12 md:py-16">
        <Header />
        {children}
        <Footer />
    </main>
  );
}
