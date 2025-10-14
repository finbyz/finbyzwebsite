import Image from "next/image";
import { motion } from "framer-motion";

const GrowthSection = () => (
  <div className="flex flex-col md:flex-row gap-10 items-center">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex-1 flex justify-center"
    >
      <Image
        src="/learning-growth.png"
        alt="Professional Growth & Development"
        width={480}
        height={360}
        className="rounded-2xl shadow-lg object-cover"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <h3 className="text-2xl font-bold mb-3 text-primary">Learning & Career Growth</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>At Finbyz, we invest in continuous learning through training sessions, mentorship programs, and career development initiatives.</li>
        <li>Our structured mentorship programs ensure guidance from experienced professionals, empowering employees to reach their full potential.</li>
        <li>We believe in fostering a culture of growth where every team member can thrive and excel.</li>
      </ul>
    </motion.div>
  </div>
);

export default GrowthSection;
