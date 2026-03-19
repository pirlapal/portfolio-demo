import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CursorParticlesProps {
  isDark: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export function CursorParticles({ isDark }: CursorParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleClick = (e: MouseEvent) => {
      // Create a few particles on click (3-5 stars)
      const colors = isDark
        ? ['#00D4FF', '#8B5CF6', '#00FFB3', '#FF00FF']
        : ['#0088CC', '#7C4EE0', '#00CC99', '#CC00CC'];

      const particleCount = Math.floor(Math.random() * 3) + 3; // 3-5 particles
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: i * 0.05
        };
        newParticles.push(newParticle);

        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 1200);
      }

      setParticles(prev => [...prev, ...newParticles]);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isDark]);

  return (
    <>
      {/* Star particles on click */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9997]"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            initial={{
              scale: 0,
              opacity: 0.9,
            }}
            animate={{
              scale: [0, 1.2, 1, 0],
              opacity: [0.9, 0.7, 0.4, 0],
              x: [0, (Math.random() - 0.5) * 60],
              y: [0, (Math.random() - 0.5) * 60 - 30],
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              delay: particle.delay,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {/* Star shape */}
            <svg
              width={particle.size}
              height={particle.size}
              viewBox="0 0 24 24"
              fill={particle.color}
              style={{
                filter: `drop-shadow(0 0 ${particle.size}px ${particle.color})`
              }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}