import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from 'framer-motion';

interface Phase {
  title: string;
  description: string;
}

interface ProcessPhasesTabsProps {
  phases: Phase[];
}

const tabVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ProcessPhasesTabs: React.FC<ProcessPhasesTabsProps> = ({ phases }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full flex flex-col items-center">
      <Tabs value={String(activeTab)} onValueChange={v => setActiveTab(Number(v))} className="w-full">
        <TabsList className="flex justify-center gap-2 bg-muted rounded-lg p-2 mb-6">
          {phases.map((phase, idx) => (
            <TabsTrigger
              key={idx}
              value={String(idx)}
              className={
                'px-4 py-2 rounded-lg text-base font-medium transition-colors ' +
                (activeTab === idx ? 'bg-primary text-primary-foreground shadow' : 'bg-transparent text-muted-foreground hover:bg-accent')
              }
            >
              {phase.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="relative min-h-[120px]">
          <AnimatePresence mode="wait">
            <TabsContent key={activeTab} value={String(activeTab)} forceMount>
              <motion.div
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h4 className="text-lg font-semibold mb-2">{phases[activeTab].title}</h4>
                <p className="text-muted-foreground text-base">{phases[activeTab].description}</p>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
};

export default ProcessPhasesTabs;
