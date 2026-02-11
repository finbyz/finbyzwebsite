import BusinessSlider from "@/components/sections/business-slider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <BusinessSlider />
    </>
  );
}
