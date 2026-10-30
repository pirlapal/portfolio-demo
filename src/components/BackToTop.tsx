import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 500);
  });

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-3 rounded-xl bg-white border border-stone-200 text-stone-500 hover:text-[#A0725A] hover:border-stone-300 shadow-lg z-40 transition-all duration-200"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}
