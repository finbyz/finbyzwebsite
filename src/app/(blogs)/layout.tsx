import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
// This will be different for each page at build time

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
        <Header />
        {children}
        <Footer />
    </main>
  );
}
