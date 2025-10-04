import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Download } from "lucide-react";
import React from "react";

interface DownloadCardProps {
  title: string;
  image: string;
  alt: string;
  fileUrl: string;
  onDownload: (fileUrl: string) => void;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ title, image, alt, fileUrl, onDownload }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group" onClick={() => onDownload(fileUrl)}>
      <CardHeader className="flex flex-col items-center gap-2 pt-6">
        <div className="w-16 h-16 flex items-center justify-center mb-2">
          <Image src={image} alt={alt} width={64} height={64} className="object-contain" />
        </div>
        <CardTitle className="text-lg font-semibold text-center group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center pb-6">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white font-medium shadow hover:bg-primary/90 transition-colors"
          type="button"
        >
          <Download size={18} /> Download
        </button>
      </CardContent>
    </Card>
  );
};

export default DownloadCard;
