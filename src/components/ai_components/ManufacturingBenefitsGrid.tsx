import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

interface ManufacturingBenefit {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface ManufacturingBenefitsGridProps {
  benefits: ManufacturingBenefit[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' }
  })
};

const ManufacturingBenefitsGrid: React.FC<ManufacturingBenefitsGridProps> = ({ benefits }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {benefits.map((benefit, i) => (
      <motion.div
        key={benefit.title}
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        className="rounded-xl bg-white shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="mb-4">
          <Image
            src={benefit.image}
            alt={benefit.alt}
            width={80}
            height={80}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-center">{benefit.title}</h3>
        <p className="text-gray-600 text-center">{benefit.description}</p>
      </motion.div>
    ))}
  </div>
);

export default ManufacturingBenefitsGrid;
