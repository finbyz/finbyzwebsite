'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInViewProps {
  children: ReactNode
  className?: string
  delay?: number
  x?: number
  y?: number
  scale?: number
}

export default function FadeInView({ children, className, delay = 0, x = 0, y = 0, scale }: FadeInViewProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, ...(scale !== undefined ? { scale } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(scale !== undefined ? { scale: 1 } : {}) }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
