import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { FC } from 'react';

interface Step {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface HowToUseEMDStepsProps {
  steps: Step[];
}

const HowToUseEMDSteps: FC<HowToUseEMDStepsProps> = ({ steps }) => {
  return (
    <div className="grid gap-8">
      {steps.map((step, idx) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
        >
          <Card className="border-none shadow-lg bg-white/90 dark:bg-muted/80">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl font-semibold mb-2">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-col-reverse items-center gap-6">
              <div className="flex-1 text-base text-muted-foreground mb-4 md:mb-0">
                {step.description}
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="rounded-lg shadow-md w-full md:w-2/3 object-contain border border-muted/30 bg-white"
                  style={{ height:"100%",width:"100%"}} 
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default HowToUseEMDSteps;
