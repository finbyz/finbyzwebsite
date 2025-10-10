import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => (
  <div className="flex flex-col md:flex-row gap-10 items-center">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex-1 flex justify-center"
    >
      <Image
        src="/images/Innovate-learn-create.jpg"
        alt="Innovate. Learn. Create."
        width={480}
        height={360}
        className="rounded-2xl shadow-lg object-cover"
        priority
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <h2 className="text-3xl font-bold mb-4 text-left text-primary">Innovate. Learn. Create.</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Finbyz Tech provides a platform for cutting-edge technological services and practical education, empowering individuals and businesses to thrive in the digital age.
      </p>
    </motion.div>
  </div>
);

export default AboutSection;
