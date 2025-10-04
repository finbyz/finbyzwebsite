import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

interface IndustryHexCardProps {
  title: string;
  image: string;
  alt: string;
  number: string;
  href?: string;
}

const IndustryHexCard: React.FC<IndustryHexCardProps> = ({ title, image, alt, number, href }) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="relative flex flex-col items-center">
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary/80 select-none">{number}</span>
        <div className="w-28 h-32 flex items-center justify-center relative">
          <svg viewBox="0 0 177.4 197.4" className="absolute w-full h-full fill-white drop-shadow-md" aria-hidden>
            <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z" />
          </svg>
          <span className="relative z-10 flex items-center justify-center w-16 h-16">
            <Image src={image} alt={alt} width={48} height={48} className="object-contain" />
          </span>
        </div>
      </div>
      <div className="mt-3 text-center">
        <span className="block text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200">{title}</span>
      </div>
    </motion.div>
  );
  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    <div>{content}</div>
  );
};

export default IndustryHexCard;
