// import type { Metadata } from "next";
// import FooterSection from "@/components/sections/FooterSection";

// const PAGE_SLUG = "erp-solutions-ahmedabad";

// export default async function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const data = await getPageData("Web Page", PAGE_SLUG);
//   const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

//   return (
//     <main>
//       <FooterSection doctype="Web Page" docname={PAGE_SLUG} />
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
  const data = await getPageData("NextJS Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("NextJS Page", PAGE_SLUG);

  return (
    <main>
      {children}
      <FooterSection doctype="NextJS Page" docname={PAGE_SLUG} />
    </main>
  );
}