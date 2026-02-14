// import FooterSection from "@/components/sections/FooterSection";
// import Header from "@/components/layout/header";
// import InquiryForm from "@/components/ui/InquiryForm";

// const PAGE_SLUG = "erpnext/insights/whats-new-erpnext-version-16";
// const PAGE_ROUTE = "erpnext/insights/whats-new-erpnext-version-16";

// export default async function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {



//   return (
//     <>
//       <Header />
//       <main>
//         {children}
//       <FooterSection docname="/erpnext/insights/whats-new-erpnext-version-16" />
//     </>
//   );
// }


import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/layout/header";
import InquiryForm from "@/components/ui/InquiryForm";

const PAGE_SLUG = "erpnext/insights/whats-new-erpnext-version-16";
const PAGE_ROUTE = "erpnext/insights/whats-new-erpnext-version-16";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <FooterSection docname="/erpnext/insights/whats-new-erpnext-version-16" />
    </>
  );
}