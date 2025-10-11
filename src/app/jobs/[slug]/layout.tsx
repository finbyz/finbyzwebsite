import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Script from "next/script";

export default async function JobLayout({
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


