import BusinessSlider from "@/components/sections/business-slider";
import Header from "@/components/layout/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        {children}

        <BusinessSlider />
      </main>
    </>
  );
}
