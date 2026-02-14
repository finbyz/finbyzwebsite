// import type { Metadata } from "next";
// import FooterSection from "@/components/sections/FooterSection";

// const PAGE_SLUG = "erp-solutions-ahmedabad";

// export default async function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const data = await getPageData(PAGE_SLUG);
//   const faqsGroup = await getFaqs(PAGE_SLUG);

//   return (
//     <main>
//       <FooterSection docname={`/${PAGE_SLUG}`} />
//     </main>
//   );
// }


import type { Metadata } from "next";
import FooterSection from "@/components/sections/FooterSection";
import { getPageData, getFaqs } from "@/lib/getPageData";

const PAGE_SLUG = "erp-solutions-ahmedabad";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(PAGE_SLUG);
  const faqsGroup = await getFaqs(PAGE_SLUG);

  return (
    <main>
      {children}
      <FooterSection docname={`/${PAGE_SLUG}`} />
    </main>
  );
}