import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 100);
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileOpen]);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 px-4 py-3 rounded-full glass-strong shadow-lg">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 text-sm font-bold text-stone-800 hover:text-[#A0725A] transition-colors"
            style={{ fontFamily: 'Poppins' }}
          >
            PI
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2.5 text-sm font-medium text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            disabled
            className="hidden md:block ml-2 px-5 py-2.5 text-sm font-semibold text-white bg-stone-800 rounded-lg opacity-60 cursor-not-allowed"
            style={{ fontFamily: 'Poppins' }}
            title="Resume will be available soon"
          >
            Resume Soon
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="md:hidden mt-3 rounded-2xl glass-strong shadow-lg p-4"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-3 text-sm font-medium text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                disabled
                className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-stone-800 rounded-lg opacity-60 cursor-not-allowed text-center"
                style={{ fontFamily: 'Poppins' }}
                title="Resume will be available soon"
              >
                Resume Coming Soon
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
