import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import React from "react";

interface StatusIndicatorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const StatusIndicatorCard: React.FC<StatusIndicatorCardProps> = ({ icon, title, description, color }) => (
  <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/90 dark:bg-zinc-900/80">
    <CardHeader className="flex flex-row items-center gap-3 pb-2">
      <div className={`rounded-full p-2 flex items-center justify-center text-2xl`} style={{ background: color, color: '#fff' }}>
        {icon}
      </div>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-zinc-600 dark:text-zinc-300 text-sm">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default StatusIndicatorCard;
