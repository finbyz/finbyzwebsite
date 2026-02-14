import type { Metadata } from "next";
import FooterSection from "@/components/sections/FooterSection";

const PAGE_ROUTE = "/erpnext/services";
const PAGE_DOCTYPE = "Web Page";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}<FooterSection docname="//erpnext/services" />
    </main>;
}
