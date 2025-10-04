import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from 'framer-motion';
import { LucideTrendingUp, LucideLayers, LucideUsers, LucideBarChart2, LucidePackage, LucideRocket } from 'lucide-react';

const icons = [
  <LucideUsers className="w-6 h-6 text-primary" />, // Efficient management of leads
  <LucidePackage className="w-6 h-6 text-primary" />, // Handling of stocks
  <LucideTrendingUp className="w-6 h-6 text-primary" />, // Competitive advantage
  <LucideBarChart2 className="w-6 h-6 text-primary" />, // Sales Strategies
  <LucideLayers className="w-6 h-6 text-primary" />, // Effective sourcing
  <LucideRocket className="w-6 h-6 text-primary" /> // Growth of business
];

interface TradingGainTabsProps {
  items: { title: string; description: string }[];
}

const TradingGainTabs: React.FC<TradingGainTabsProps> = ({ items }) => {
  const [tab, setTab] = useState('0');
  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full flex flex-col items-center">
      <TabsList className="flex gap-2 bg-background/80 rounded-lg shadow mb-6 flex-wrap justify-center">
        {items.map((item, idx) => (
          <TabsTrigger
            key={idx}
            value={String(idx)}
            className={`flex flex-col items-center px-4 py-2 transition-colors duration-200 ${tab === String(idx) ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <span className="mb-1">{icons[idx]}</span>
            <span className="text-xs font-medium">{item.title.split(':')[0]}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="w-full">
        <AnimatePresence mode="wait">
          {items.map((item, idx) => (
            <TabsContent key={idx} value={String(idx)} forceMount>
              {tab === String(idx) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-xl shadow p-6 flex flex-col items-center"
                >
                  <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </motion.div>
              )}
            </TabsContent>
          ))}
        </AnimatePresence>
      </div>
    </Tabs>
  );
};

export default TradingGainTabs;
