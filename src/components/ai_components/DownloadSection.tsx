import Section from "@/components/sections/Section";
import DownloadCard from "@/components/ai_components/DownloadCard";
import { cn } from "@/lib/utils";
import React from "react";

interface DownloadSectionProps {
  title: string;
  items: Array<{
    title: string;
    image: string;
    alt: string;
    fileUrl: string;
  }>;
  onDownload: (fileUrl: string) => void;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ title, items, onDownload }) => {
  return (
    <Section>
      <div className="container-custom py-8">
        <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <DownloadCard key={item.title + idx} {...item} onDownload={onDownload} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default DownloadSection;
