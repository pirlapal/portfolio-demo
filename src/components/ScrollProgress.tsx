import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00D4FF] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
