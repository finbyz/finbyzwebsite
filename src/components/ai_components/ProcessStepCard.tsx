import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface ProcessStepCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ title, image, alt, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <Card className="border-none shadow-lg bg-white/90 hover:shadow-xl transition-shadow duration-100">
      <CardHeader className="flex items-center justify-center pb-0">
        <Image src={image} alt={alt} width={96} height={96} className="rounded-lg object-contain" />
      </CardHeader>
      <CardContent className="pt-4 text-center">
        <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default ProcessStepCard;
