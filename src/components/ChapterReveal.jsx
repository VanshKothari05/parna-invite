import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Scroll-triggered reveal wrapper using Framer Motion.
 * Respects prefers-reduced-motion automatically.
 *
 * @param {string}  direction  'up' | 'down' | 'left' | 'right'
 * @param {number}  delay      Seconds before animation starts after inView
 * @param {string}  margin     IntersectionObserver rootMargin (e.g. '-10% 0px')
 */
export default function ChapterReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  margin = '-8% 0px',
  once = true,
}) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const inView = useInView(ref, { once, margin });

  const yOff = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;
  const xOff = direction === 'left' ? -36 : direction === 'right' ? 36 : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOff, x: xOff }}
      animate={
        shouldReduce
          ? { opacity: 1, y: 0, x: 0 }
          : inView
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 0, y: yOff, x: xOff }
      }
      transition={{
        duration: shouldReduce ? 0 : 0.88,
        delay:    shouldReduce ? 0 : delay,
        ease:     [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
