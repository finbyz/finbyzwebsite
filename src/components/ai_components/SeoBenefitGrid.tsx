import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

interface Benefit {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface SeoBenefitGridProps {
  benefits: Benefit[];
}

const animationVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } })
};

const SeoBenefitGrid: FC<SeoBenefitGridProps> = ({ benefits }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {benefits.map((benefit, i) => (
      <motion.div
        key={benefit.title}
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={animationVariants}
      >
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 dark:bg-zinc-900/80">
          <CardHeader className="flex flex-col items-center gap-2 pb-0">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-2">
              <Image
                src={benefit.image}
                alt={benefit.alt}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <CardTitle className="text-lg font-semibold text-center">{benefit.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-center text-muted-foreground">
              {benefit.description}
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default SeoBenefitGrid;
