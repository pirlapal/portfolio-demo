import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0A1628] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Animated logo/initials */}
            <motion.div
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00D4FF] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% center', '200% center'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              PI
            </motion.div>

            {/* Orbiting particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00D4FF] rounded-full"
                style={{
                  originX: 0.5,
                  originY: 0.5,
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i * Math.PI * 2) / 8) * 100,
                  y: Math.sin((i * Math.PI * 2) / 8) * 100,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}

            {/* Loading text */}
            <motion.div
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-white/70"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-[#8B5CF6]">{'{'}</span> Initializing Portfolio <span className="text-[#8B5CF6]">{'}'}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
