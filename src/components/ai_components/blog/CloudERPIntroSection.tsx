import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

interface CloudERPIntroSectionProps {
  image: string;
  alt: string;
  title: string;
  paragraphs: string[];
}

const CloudERPIntroSection: React.FC<CloudERPIntroSectionProps> = ({ image, alt, title, paragraphs }) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-8">
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={image}
          alt={alt}
          width={400}
          height={320}
          className="rounded-xl shadow-lg object-contain"
          style={{ height: 'auto' }}
        />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CloudERPIntroSection;
