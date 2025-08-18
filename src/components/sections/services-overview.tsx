"use client";

import { useMemo } from "react";
import { ArrowRight, Briefcase, BarChart3, Code2, Database, ShoppingCart, Heart, DollarSign, BookOpen } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  href?: string;
  icon?: string; // lucide icon name; fallback used if not provided
  imageSrc?: string; // optional custom image
  color?: string; // optional custom color
  bgColor?: string; // optional custom background color
};

export interface ServicesOverviewProps {
  data?: {
    services?: ServiceItem[];
    solutions?: ServiceItem[]; // Add support for solutions data structure
    highlightedIndex?: number; // index of the service to visually highlight
  };
}

const iconRegistry: Record<string, any> = {
  Briefcase,
  BarChart3,
  Code2,
  Database,
  ShoppingCart,
  Heart,
  DollarSign,
  BookOpen,
};

export default function ServicesOverview({ data }: ServicesOverviewProps) {
  const { services, highlightedIndex } = useMemo(() => {
    const fallbackServices: ServiceItem[] = [
      {
        title: "ERP Implementation",
        description: "Technology at work, a better way of doing the things!",
        icon: "BarChart3",
      },
      {
        title: "IT Consulting",
        description:
          "Technology is evolving rapidly. We help you align technology to achieve your business goals.",
        icon: "Briefcase",
      },
      {
        title: "Software Development",
        description: "From idea to production with modern engineering practices.",
        icon: "Code2",
      },
      {
        title: "Data Analytics",
        description: "Insights that accelerate decision‑making and growth.",
        icon: "Database",
      },
    ];

    // Handle both 'services' and 'solutions' data structures
    const servicesData = data?.services || data?.solutions || fallbackServices;
    const highlightedIndexData = data?.highlightedIndex ?? 1;

    return {
      services: servicesData.length ? servicesData : fallbackServices,
      highlightedIndex: highlightedIndexData,
    };
  }, [data]);

  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {services.map((item: ServiceItem, index: number) => {
            const isHighlighted = index === highlightedIndex;
            const Icon = item.icon && iconRegistry[item.icon] ? iconRegistry[item.icon] : Briefcase;

            return (
              <a
                key={index}
                href={item.href || "#"}
                className={[
                  "group block rounded-xl border shadow-sm transition-all",
                  isHighlighted
                    ? "bg-sky-400 text-white border-transparent hover:shadow-md"
                    : "bg-white text-slate-900 hover:shadow-md",
                ].join(" ")}
              >
                <div className="flex h-full flex-col items-center justify-between p-8 sm:p-10">
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-lg bg-white/70 ring-1 ring-black/5 shadow-sm">
                    {item.imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.imageSrc} alt={item.title} className="h-20 w-20 object-contain" />
                    ) : (
                      <Icon 
                        className={isHighlighted ? "h-12 w-12 text-white" : "h-12 w-12 text-sky-600"} 
                        style={{ 
                          color: isHighlighted ? undefined : (item.color || undefined),
                          backgroundColor: isHighlighted ? undefined : (item.bgColor || undefined)
                        }}
                      />
                    )}
                  </div>

                  <h3
                    className={[
                      "mb-3 text-2xl font-semibold tracking-tight text-center",
                      isHighlighted ? "text-white" : "text-slate-900",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={[
                      "mb-6 max-w-xl text-center text-lg leading-relaxed",
                      isHighlighted ? "text-white/90" : "text-slate-600",
                    ].join(" ")}
                  >
                    {item.description}
                  </p>

                  <div
                    className={[
                      "mt-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
                      isHighlighted
                        ? "bg-white/20 text-white group-hover:bg-white/25"
                        : "bg-slate-50 text-slate-700 group-hover:bg-slate-100",
                    ].join(" ")}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}


