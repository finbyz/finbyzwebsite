import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import IndustryHexCard from "./IndustryHexCard";

const industries = [
  {
    title: "Manufacturing",
    icon: "/images/nav-manufacturing.svg",
    number: "01",
    href: "/erp-for-manufacturing-industry",
    fade: 1
  },
  {
    title: "Chemical",
    icon: "/images/nav-chemical.svg",
    number: "02",
    href: "/erp-for-chemical-industry",
    fade: 2
  },
  {
    title: "Engineering",
    icon: "/images/nav-engineering.svg",
    number: "03",
    href: "/erp-for-engineering-industry",
    fade: 3
  },
  {
    title: "Logistics",
    icon: "/images/nav-logistics.svg",
    number: "04",
    href: "/erp-for-logistics-industry",
    fade: 4
  },
  {
    title: "Agro Industries",
    icon: "/images/nav-agro.svg",
    number: "05",
    href: "/erp-for-agro-commodity",
    fade: 5
  },
  {
    title: "Fintech",
    icon: "/images/icon-brokerage-commission.svg",
    number: "06",
    href: undefined,
    fade: 1
  },
  {
    title: "Healthcare",
    icon: "/images/Healthcare.svg",
    number: "07",
    href: undefined,
    fade: 2
  },
  {
    title: "Education",
    icon: "/images/icon-integrated_paperwork_.svg",
    number: "08",
    href: undefined,
    fade: 3
  },
  {
    title: "Travel & Hospitality",
    icon: "/images/icon-truck_allocation.svg",
    number: "09",
    href: undefined,
    fade: 4
  },
  {
    title: "E-commerce ",
    icon: "/images/E-commerce.svg",
    number: "010",
    href: undefined,
    fade: 5
  }
];

const fadeVariants = [
  "finbyz-fadeinup1",
  "finbyz-fadeinup2",
  "finbyz-fadeinup3",
  "finbyz-fadeinup4",
  "finbyz-fadeinup5"
];

const IndustryHexGrid: React.FC = () => {
  return (
    <div className="container-custom py-8">
      <div className="flex flex-wrap justify-center gap-6 relative">
        {/* Decorative background waves */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none -z-10">
          <Image src="/images/dotted-wave.svg" alt="dotted-wave" width={1200} height={60} className="w-full h-auto opacity-30" />
        </div>
        {industries.map((industry, idx) => (
          <IndustryHexCard
            alt={industry.title}
            image={industry.icon}
            number={industry.number}
            title={industry.title}
            href={industry.href}
            key={industry.number}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustryHexGrid;
