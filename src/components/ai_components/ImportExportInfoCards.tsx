import ImportExportFeatureCard from '@/components/ai_components/ImportExportFeatureCard';
import { motion } from 'framer-motion';

export default function ImportExportInfoCards({ importCard, exportCard }: { importCard: any; exportCard: any }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <ImportExportFeatureCard {...importCard} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1"
      >
        <ImportExportFeatureCard {...exportCard} />
      </motion.div>
    </div>
  );
}
