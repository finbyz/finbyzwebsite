import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

interface CloudERPFeatureSectionProps {
  id: string;
  title: string;
  image: string;
  alt: string;
  reverse?: boolean;
  children: React.ReactNode;
}

const CloudERPFeatureSection: React.FC<CloudERPFeatureSectionProps> = ({ id, title, image, alt, reverse = false, children }) => {
  return (
    <section id={id} className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 py-8`}>
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={image}
          alt={alt}
          width={340}
          height={260}
          className="rounded-xl shadow-lg object-contain"
          style={{ height: 'auto' }}
        />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
        <div className="space-y-4">{children}</div>
      </motion.div>
    </section>
  );
};

export default CloudERPFeatureSection;
