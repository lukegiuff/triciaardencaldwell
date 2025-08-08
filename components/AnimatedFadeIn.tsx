"use client";

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedFadeInProps = MotionProps & { children: ReactNode; className?: string };

export default function AnimatedFadeIn({ children, className, ...rest }: AnimatedFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
