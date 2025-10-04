import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

interface ThankYouCardProps {
  title: string;
  message: string;
  buttonText: string;
  buttonAction: () => void;
}

const ThankYouCard: React.FC<ThankYouCardProps> = ({ title, message, buttonText, buttonAction }) => {
  return (
    <Card className="border-none shadow-lg bg-white/90 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center gap-2 pb-0">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 pb-0 text-center text-base text-gray-700">
        {message}
      </CardContent>
      <CardFooter className="flex justify-center pt-6">
        <Button onClick={buttonAction} variant="default" className="gap-2 px-6 py-2 rounded-full text-base font-medium shadow-md hover:scale-105 transition-transform">
          <ArrowLeft className="w-4 h-4" />
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThankYouCard;
