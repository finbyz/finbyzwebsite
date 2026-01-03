import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function MainLayout({
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
