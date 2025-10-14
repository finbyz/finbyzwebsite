import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/Life at Finbyz_1.jpg", alt: "Fun-at-Finbyz-1" },
  { src: "/Life-at-finbyz_2.jpg", alt: "Fun-at-Finbyz-2" },
  { src: "/Life-At-Finbyz3.jpg", alt: "Fun-at-Finbyz-3" },
  { src: "/Life-at-finbyz_6.jpg", alt: "Fun-at-Finbyz-4" },
  { src: "/Life-at-finbyz_5.jpg", alt: "Fun-at-Finbyz-5" }
];

const FunGallery = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="flex gap-4 w-full h-72 md:h-96 justify-center items-center overflow-x-auto">
      {images.map((img, idx) => (
        <motion.div
          key={img.src}
          className={`relative transition-all duration-500 cursor-pointer rounded-xl overflow-hidden shadow-lg ${activeIdx === idx ? "flex-[2]" : "flex-1"}`}
          style={{ minWidth: activeIdx === idx ? "320px" : "120px", height: "100%" }}
          onMouseEnter={() => setActiveIdx(idx)}
          onMouseLeave={() => setActiveIdx(null)}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 60vw, 20vw"
            className="object-cover w-full h-full rounded-xl transition-all duration-500"
            style={{ border: activeIdx === idx ? "3px solid #6366f1" : "2px solid #fff" }}
          />
          <AnimatePresence>
            {activeIdx === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm"
              >
                {img.alt.replace(/-/g, " ")}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FunGallery;
