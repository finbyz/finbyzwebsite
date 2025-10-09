
'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from 'framer-motion';
import { LucideTrendingUp, LucideLayers, LucideUsers, LucideBarChart2, LucidePackage, LucideRocket } from 'lucide-react';

const icons = [
  <LucideUsers className="w-7 h-7 text-primary" />, // Efficient management of leads
  <LucidePackage className="w-7 h-7 text-primary" />, // Handling of stocks
  <LucideTrendingUp className="w-7 h-7 text-primary" />, // Competitive advantage
  <LucideBarChart2 className="w-7 h-7 text-primary" />, // Sales Strategies
  <LucideLayers className="w-7 h-7 text-primary" />, // Effective sourcing
  <LucideRocket className="w-7 h-7 text-primary" /> // Growth of business
];

interface TradingGainTabsProps {
  items: { title: string; description: string }[];
}

const TradingGainTabs: React.FC<TradingGainTabsProps> = ({ items }) => {
  const [tab, setTab] = useState('0');

  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full flex flex-col items-center">
      {/* Tab Triggers */}
      <TabsList className="flex flex-wrap gap-3 justify-center bg-background/80 rounded-xl shadow p-2 mb-6 outline-none h-13">
        {items.map((item, idx) => (
          <TabsTrigger
            key={idx}
            value={String(idx)}
            className={`flex flex-col items-center px-5 py-3 rounded-xl transition-all duration-300 transform
              ${tab === String(idx) 
                ? 'text-primary scale-105' 
                : 'text-muted-foreground hover:scale-105'} outline-none`}
          >
            {icons[idx]}
            <span className="text-xs font-medium text-center mt-1">{item.title.split(':')[0]}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content - Simple Layout */}
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {items.map((item, idx) => (
            tab === String(idx) && (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-base">{item.description}</p>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </Tabs>
  );
};

export default TradingGainTabs;
