import { FC } from "react";
import { ShieldCheck } from "lucide-react";

const PrivacySectionHeading: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-2 mb-4 mt-8">
    <ShieldCheck className="w-6 h-6 text-[#1A5276]" />
    <h2 className="text-2xl font-semibold tracking-tight text-[#1A5276]">{children}</h2>
  </div>
);

export default PrivacySectionHeading;