import { getPageData } from "@/lib/getPageData";
import type { Metadata } from "next";

const PAGE_ROUTE = "/erpnext/services";
const PAGE_DOCTYPE = "Web Page";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
