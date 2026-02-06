import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleDot } from "lucide-react";

interface Reason {
  title: string;
  description: string;
}

interface CircleReasonTabsProps {
  reasons: Reason[];
}

const circleColors = [
  "bg-orange-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500"
];

const CircleReasonTabs: React.FC<CircleReasonTabsProps> = ({ reasons }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative flex items-center justify-center gap-6 mb-8">
        {reasons.map((reason, idx) => (
          <button
            key={reason.title}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 shadow transition-all duration-200 ${circleColors[idx % circleColors.length]} ${active === idx ? "scale-110 border-primary ring-2 ring-primary" : "opacity-70"}`}
            aria-label={reason.title}
            onClick={() => setActive(idx)}
            type="button"
          >
            <CircleDot className="text-white" size={28} />
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full flex flex-col items-center"
        >
          <h3 className="text-2xl font-semibold mb-2 text-primary text-center">{reasons[active].title}</h3>
          <p className="text-base text-muted-foreground text-center max-w-2xl">{reasons[active].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CircleReasonTabs;
