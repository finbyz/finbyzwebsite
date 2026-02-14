import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Attempt to fetch data if it exists, otherwise these might return defaults or empty
  return (
    <>
      {children}
      <FooterSection docname="/resume-ranker" />
    </>
  );
}
