import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface Tab {
  key: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  link: string;
}

interface IndustryTabsProps {
  tabs: Tab[];
}

const IndustryTabs: React.FC<IndustryTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || '');

  const active = tabs.find(tab => tab.key === activeTab) || tabs[0];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`flex flex-col items-center px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none ${activeTab === tab.key ? 'bg-primary/10 text-primary shadow-md' : 'bg-muted text-muted-foreground hover:bg-primary/5'}`}
            onClick={() => setActiveTab(tab.key)}
            aria-selected={activeTab === tab.key}
            type="button"
          >
            <div className="mb-2">
              <Image
                src={tab.image}
                alt={tab.alt}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-center whitespace-nowrap">{tab.title}</span>
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-gradient-to-br from-primary/80 to-primary/60 text-white p-8 shadow-lg transition-all duration-300 animate-fade-in">
        <h3 className="text-2xl text-[#1A5276] font-semibold mb-3 flex items-center justify-center gap-2">
          {active.title}
        </h3>
        <p className="mb-6 text-black text-justify leading-relaxed">
          {active.description}
        </p>
        <Button
          asChild
          variant="secondary"
          className="inline-flex items-center gap-2 group"
        >
          <a href={active.link} target="_blank" rel="noopener noreferrer">
            <span className='text-black'>View More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 text-black" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default IndustryTabs;
