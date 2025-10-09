import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

interface Service {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface IndustryServiceGridProps {
  services: Service[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 }
  })
};

const IndustryServiceGrid: FC<IndustryServiceGridProps> = ({ services }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {services.map((service, i) => (
      <motion.div
        key={service.title}
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{cardVariants}}
      >
        <Card className="border-none bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-col items-center">
            <Image
              src={service.image}
              alt={service.alt}
              width={64}
              height={64}
              className="mb-2 object-contain"
            />
            <CardTitle className="text-center text-lg font-semibold text-primary">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-justify">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default IndustryServiceGrid;
