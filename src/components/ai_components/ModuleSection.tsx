import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import List from '@/components/sections/list';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

interface ModuleSectionProps {
  title: string;
  image: string;
  alt: string;
  quote: string;
  description: string;
  features: string[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const ModuleSection: React.FC<ModuleSectionProps> = ({ title, image, alt, quote, description, features }) => (
  <motion.div
    className="flex flex-col gap-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}
  >
    <Card className="border-none bg-muted/40 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold mb-2 text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <QuoteBlock text={quote} isHeading={false} />
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <Image
                src={image}
                alt={alt}
                width={320}
                height={220}
                className="rounded-xl shadow-lg object-contain bg-white p-4"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        <List title="" items={features} style={{ marginTop: 16 }} />
      </CardContent>
    </Card>
  </motion.div>

);

export default ModuleSection;
