import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface ManufacturingType {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface ManufacturingTypesGridProps {
  types: ManufacturingType[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' }
  })
};

const ManufacturingTypesGrid: React.FC<ManufacturingTypesGridProps> = ({ types }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {types.map((type, i) => (
      <motion.div
        key={type.title}
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        className="rounded-xl bg-white shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="mb-4">
          <Image
            src={type.image}
            alt={type.alt}
            width={120}
            height={120}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-center">{type.title}</h3>
        <p className="text-gray-600 text-center">{type.description}</p>
      </motion.div>
    ))}
  </div>
);

export default ManufacturingTypesGrid;
