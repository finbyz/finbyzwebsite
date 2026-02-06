import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface ProcessStepImageCardProps {
  step: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function ProcessStepImageCard({ step, title, description, image, alt }: ProcessStepImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="border-none shadow-lg bg-white/90 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex-shrink-0 rounded-full bg-blue-100 text-orange-600 font-bold w-10 h-10 flex items-center justify-center text-lg">
            {step}
          </div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="text-gray-600 text-sm">{description}</div>
          <div className="w-full flex justify-center">
            <img
              src={image}
              alt={alt}

              className="rounded-lg border shadow-md object-contain"
              style={{ background: '#f8fafc', height: '100%', width: '100%' }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
