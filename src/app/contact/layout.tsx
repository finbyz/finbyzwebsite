import Header from "@/components/layout/new-header";


export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      {children}
    </>
  );
}
