import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Software Engineer', 'AI/ML Enthusiast', 'Automation Specialist', 'Photographer', 'Videographer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated tech grid background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-[#0A1628] via-[#1a2744] to-[#0A1628]' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'}`} />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00D4FF 1px, transparent 1px),
              linear-gradient(to bottom, #00D4FF 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00D4FF] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Static ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)'
              : 'radial-gradient(circle at 30% 50%, rgba(0, 136, 204, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(124, 78, 224, 0.08) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Code-style greeting */}
          <motion.div
            className={`mb-4 font-mono text-sm md:text-base ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{'<'}</span>
            <span>Hello World</span>
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{' />'}</span>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00D4FF] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% center', '200% center'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            PRANAV IRLAPALE
          </motion.h1>

          {/* Typing effect subtitle */}
          <motion.div
            className="h-16 md:h-20 mb-6 font-mono"
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl md:text-4xl ${isDark ? 'text-white/90' : 'text-gray-800'}`}>
              <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>const</span>{' '}
              <span className="text-[#00D4FF]">role</span>{' '}
              <span className={isDark ? 'text-white/70' : 'text-gray-600'}>=</span>{' '}
              <span className={isDark ? 'text-green-400' : 'text-green-600'}>"{titles[titleIndex]}"</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className={isDark ? 'text-white/90' : 'text-gray-800'}
              >
                |
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            className={`flex items-center justify-center gap-2 mb-10 font-mono ${isDark ? 'text-white/70' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MapPin className="w-5 h-5 text-[#00D4FF]" />
            <span className="text-lg">Tempe, AZ</span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#00D4FF]/50 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 font-mono">{'<'} View Projects {'/>'}</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-[#00D4FF] text-[#00D4FF] font-semibold hover:scale-105 hover:bg-[#00D4FF]/10 transition-all duration-300 font-mono backdrop-blur-sm">
              <span>{'{'} Download Resume {'}'}</span>
            </button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/pranav-irlapale"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-sm text-white"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ scale: 1.1, rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/viraj091"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-sm text-white"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ scale: 1.1, rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:pirlapal@asu.edu"
              className="p-3 rounded-full backdrop-blur-sm text-white"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ scale: 1.1, rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Tech stack ticker */}
          <motion.div
            className="mt-16 font-mono text-sm text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {['Python', 'React', 'TensorFlow', 'Node.js', 'AWS', 'PyTorch', 'MongoDB', 'TypeScript'].map((tech) => (
                  <span key={tech} className="text-[#00D4FF]/50">
                    {tech}
                  </span>
                ))}
                {['Python', 'React', 'TensorFlow', 'Node.js', 'AWS', 'PyTorch', 'MongoDB', 'TypeScript'].map((tech) => (
                  <span key={`${tech}-2`} className="text-[#00D4FF]/50">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <ChevronDown className="w-8 h-8 text-[#00D4FF]" />
          <span className="text-white/50 text-xs font-mono">scroll</span>
        </div>
      </motion.div>
    </section>
  );
}