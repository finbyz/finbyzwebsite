'use client'

import { motion } from "framer-motion"

export default function AnimatedText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  )
}
