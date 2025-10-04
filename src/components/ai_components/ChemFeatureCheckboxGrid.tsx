import { CheckCircle } from "lucide-react";
import React from "react";

interface ChemFeatureCheckboxGridProps {
  features: { label: string }[];
}

const ChemFeatureCheckboxGrid: React.FC<ChemFeatureCheckboxGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeInUp">
      {features.map((feature, idx) => (
        <div
          key={feature.label + idx}
          className="flex items-center gap-3 bg-white/70 rounded-lg shadow-sm px-4 py-3 hover:bg-blue-50 transition-colors border border-gray-100"
        >
          <CheckCircle className="text-primary shrink-0" size={22} />
          <span className="font-medium text-gray-800">{feature.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ChemFeatureCheckboxGrid;
