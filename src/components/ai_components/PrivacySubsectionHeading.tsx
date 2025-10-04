import { FC } from "react";
import { ChevronRight } from "lucide-react";

const PrivacySubsectionHeading: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-2 mt-4 mb-2 ml-4">
    <ChevronRight className="w-5 h-5 text-muted-foreground" />
    <h3 className="text-lg font-medium text-gray-700">{children}</h3>
  </div>
);

export default PrivacySubsectionHeading;