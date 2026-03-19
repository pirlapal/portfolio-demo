import { motion } from 'motion/react';
import { useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  isDark: boolean;
}

export function BackToTop({ isDark }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white shadow-lg z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
}
