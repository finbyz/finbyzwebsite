import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

interface CultureValueItem {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface CultureValuesGridProps {
  items: CultureValueItem[];
}

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } })
};

const CultureValuesGrid: FC<CultureValuesGridProps> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
    {items.map((item, i) => (
      <motion.div
        key={item.title}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={i}
        variants={cardVariants}
      >
        <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col items-center py-6 bg-white">
          <CardHeader className="flex items-center justify-center pb-2">
            <Image
              src={item.image}
              alt={item.alt}
              width={64}
              height={64}
              className="rounded-lg mb-2"
              style={{ objectFit: "contain" }}
            />
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <CardTitle className="text-lg font-semibold mb-1">{item.title}</CardTitle>
            <CardDescription className="text-gray-600 text-base">{item.description}</CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default CultureValuesGrid;
