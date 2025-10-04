import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header />
        {children}
        <FinbyzGallery />
        <Footer />
    </>
  );
}
