import { LazyBusinessSlider } from "@/lib/lazy-components";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <LazyBusinessSlider />
    </main>
  );
}
