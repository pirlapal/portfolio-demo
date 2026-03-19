import { motion } from 'motion/react';

export function TechBackground() {
  return (
    <>
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00D4FF 1px, transparent 1px),
            linear-gradient(to bottom, #00D4FF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {['<', '>', '/', '{', '}', '[', ']', '(', ')'].map((symbol, i) => (
          <motion.div
            key={`${symbol}-${i}`}
            className="absolute text-[#00D4FF]/20 font-mono text-4xl"
            style={{
              left: `${(i * 11) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Binary rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-[#00D4FF]"
            style={{
              left: `${i * 5}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            {[...Array(30)].map((_, j) => (
              <div key={j}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-50"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#00D4FF]/50" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#8B5CF6]/50" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#8B5CF6]/50" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#00D4FF]/50" />
    </>
  );
}
