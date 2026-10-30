import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = ['Software Engineer', 'AI/ML Enthusiast', 'Automation Specialist'];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#F7F4F0]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <MapPin className="w-4 h-4 text-[#A0725A]" />
            <span className="text-stone-500 text-sm font-medium">Tempe, Arizona</span>
          </motion.div>

          <h1 className="font-['Poppins'] font-bold tracking-tight leading-none mb-6 text-balance">
            <motion.div
              className="text-[3rem] sm:text-[5.375rem] md:text-[6rem] lg:text-[7rem]"
              style={{ letterSpacing: '-0.04em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-stone-800">Pranav</span>
            </motion.div>
            <motion.div
              className="text-[3rem] sm:text-[5.375rem] md:text-[6rem] lg:text-[7rem]"
              style={{ letterSpacing: '-0.04em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <span className="text-[#A0725A]">Irlapale</span>
            </motion.div>
          </h1>

          <div className="h-10 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="text-xl md:text-2xl text-stone-500 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-stone-500 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building full-stack systems and intelligent tools that turn
            complex problems into reliable products.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-stone-800 text-white font-semibold text-sm shadow-lg hover:bg-stone-900 transition-all duration-200"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontFamily: 'Poppins' }}
            >
              View Projects
            </motion.a>

            <motion.button
              disabled
              className="px-8 py-4 rounded-xl border-2 border-stone-300 bg-white text-stone-400 font-semibold text-sm opacity-60 cursor-not-allowed"
              style={{ fontFamily: 'Poppins' }}
              title="Resume will be available soon"
            >
              Resume Coming Soon
            </motion.button>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/pranav-irlapale', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/viraj091', label: 'GitHub' },
              { icon: Mail, href: 'mailto:pirlapal@asu.edu', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3.5 rounded-xl border-2 border-stone-200 bg-white text-stone-400 hover:text-[#A0725A] hover:border-stone-300 transition-all duration-200"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-xs text-stone-400 uppercase tracking-wider font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-[#A0725A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
