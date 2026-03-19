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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear existing timeout
      clearTimeout(timeoutId);

      // Create particles while moving
      const colors = isDark 
        ? ['#00D4FF', '#8B5CF6', '#00FFB3', '#FF00FF']
        : ['#0088CC', '#7C4EE0', '#00CC99', '#CC00CC'];
      
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.1
      };

      setParticles(prev => [...prev, newParticle]);

      // Remove old particles to prevent memory leak
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1200);

      // Set moving to false after a short delay
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isDark]);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: cursorPos.x - 8,
          y: cursorPos.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.5
        }}
      >
        <motion.div
          className="w-4 h-4 rounded-full border-2"
          style={{
            borderColor: isDark ? '#00D4FF' : '#0088CC',
            boxShadow: `0 0 10px ${isDark ? 'rgba(0, 212, 255, 0.5)' : 'rgba(0, 136, 204, 0.5)'}`
          }}
          animate={{
            scale: isMoving ? 1.2 : 1,
            opacity: isMoving ? 0.8 : 0.6
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Cursor Glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        animate={{
          x: cursorPos.x - 20,
          y: cursorPos.y - 20,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.8
        }}
      >
        <div
          className="w-10 h-10 rounded-full blur-md"
          style={{
            background: isDark 
              ? 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0, 136, 204, 0.2) 0%, transparent 70%)'
          }}
        />
      </motion.div>

      {/* Particle Trail */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9997] rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            initial={{
              scale: 0,
              opacity: 0.8,
            }}
            animate={{
              scale: [0, 1, 0.8, 0],
              opacity: [0.8, 0.6, 0.3, 0],
              x: [0, (Math.random() - 0.5) * 40],
              y: [0, (Math.random() - 0.5) * 40 + 20],
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
          />
        ))}
      </AnimatePresence>

      {/* Trailing Dots */}
      <motion.div
        className="fixed pointer-events-none z-[9996] w-2 h-2 rounded-full"
        style={{
          backgroundColor: isDark ? '#8B5CF6' : '#7C4EE0',
          boxShadow: isDark 
            ? '0 0 8px rgba(139, 92, 246, 0.6)'
            : '0 0 8px rgba(124, 78, 224, 0.4)'
        }}
        animate={{
          x: cursorPos.x - 4,
          y: cursorPos.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
          mass: 1
        }}
      />

      <motion.div
        className="fixed pointer-events-none z-[9995] w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: isDark ? '#00FFB3' : '#00CC99',
          boxShadow: isDark 
            ? '0 0 6px rgba(0, 255, 179, 0.6)'
            : '0 0 6px rgba(0, 204, 153, 0.4)'
        }}
        animate={{
          x: cursorPos.x - 3,
          y: cursorPos.y - 3,
        }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 150,
          mass: 1.2
        }}
      />
    </>
  );
}