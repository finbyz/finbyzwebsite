import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SeoImprovementGridProps {
  items: Array<{
    title: string;
    image: string;
    alt: string;
    description: string;
  }>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" },
  }),
};

const SeoImprovementGrid: React.FC<SeoImprovementGridProps> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {items.map((item, i) => (
      <motion.div
        key={item.title}
        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={i}
        variants={cardVariants}
      >
        <div className="mb-4">
          <Image
            src={item.image}
            alt={item.alt}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2 text-center">{item.title}</h3>
        <p className="text-gray-600 text-sm text-center">{item.description}</p>
      </motion.div>
    ))}
  </div>
);

export default SeoImprovementGrid;
