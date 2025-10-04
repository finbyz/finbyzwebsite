import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FC } from "react";

interface Benefit {
  title: string;
  description: string;
}

interface ERPNextBenefitsGridProps {
  benefits: Benefit[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 }
  })
};

const ERPNextBenefitsGrid: FC<ERPNextBenefitsGridProps> = ({ benefits }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {benefits.map((benefit, i) => (
      <motion.div
        key={benefit.title}
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <Card className="border-none bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-center text-lg font-semibold text-primary">
              {benefit.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-center">{benefit.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default ERPNextBenefitsGrid;
