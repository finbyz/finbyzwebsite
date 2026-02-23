// import type { Metadata } from "next";
// 
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
//
//     </main>
//   );
// }


import type { Metadata } from "next";
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
    </main>
  );
}