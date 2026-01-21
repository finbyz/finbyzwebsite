"use client";

import Rea, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/navigation";

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbsProps {
  textColor?: string;
  currentTextColor?: string;
  hoverColor?: string;
  separatorColor?: string;
}

const Breadcrumbs = ({
  textColor = "text-gray-400",
  currentTextColor = "text-white",
  hoverColor = "hover:text-orange-600",
  separatorColor = "text-gray-500/50"
}: BreadcrumbsProps = {}) => {
  const pathname = usePathname();

  // Create a lookup map for URL paths to Labels from the NAV config
  const pathLabelMap = useMemo(() => {
    const map: Record<string, string> = {};

    NAV.forEach((section) => {
      // If section itself has a link (e.g. Contact)
      if ('href' in section && section.href) {
        map[section.href] = section.title;
      }

      // Map children items
      if ('items' in section && Array.isArray(section.items)) {
        section.items.forEach((item) => {
          map[item.href] = item.label;
        });
      }
    });
    return map;
  }, []);

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    // Don't show on home page
    if (pathname === "/") return [];

    const breadcrumbs: BreadcrumbItem[] = [];
    const pathSegments = pathname.split("/").filter((segment) => segment);

    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // 1. Check exact match in NAV config
      let label = pathLabelMap[currentPath];

      // 2. If no exact match using full path, try to prettify the segment
      if (!label) {
        label = segment
          .split("-")
          .map((word) =>
            word.toLowerCase() === "erpnext" ? "ERPNext" :
              word.toLowerCase() === "ai" ? "AI" :
                word.toLowerCase() === "api" ? "API" :
                  word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(" ");
      }

      breadcrumbs.push({
        position: index + 2, // Home is 1
        name: label,
        item: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (!breadcrumbs.length) return null;

  return (
    <div className="z-40 pt-2 pointer-events-none">
      <nav aria-label="Breadcrumb" className="w-full pointer-events-auto">
        <ol className={`flex flex-wrap items-center text-xs md:text-sm font-medium py-1 ${textColor}`}>
          {/* Home Item */}
          <li className={`flex items-center ${hoverColor} transition-colors`}>
            <Link href="/" className="flex items-center" title="Home">
              <span>Home</span>
            </Link>
          </li>

          {/* Separator & Items */}
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={crumb.item} className="flex items-center">
                <span className={`mx-2 ${separatorColor}`}>/</span>

                {isLast ? (
                  <span className={`${currentTextColor} font-semibold`} aria-current="page">
                    <span>{crumb.name}</span>
                  </span>
                ) : (
                  <Link
                    href={crumb.item}
                      className={`${hoverColor} transition-colors`}
                  >
                      <span>{crumb.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;